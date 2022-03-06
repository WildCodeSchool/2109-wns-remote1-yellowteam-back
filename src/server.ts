/* eslint-disable import/no-extraneous-dependencies */
import { ApolloServer } from 'apollo-server-express';
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageDisabled,
} from 'apollo-server-core';
// eslint-disable-next-line import/no-extraneous-dependencies
import { buildSchema } from 'type-graphql';
import { createServer as createHttpServer } from 'http';
import { execute, subscribe } from 'graphql';
import { PubSub } from 'graphql-subscriptions';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { resolvers } from './generated/graphql';
import prisma from '../prisma/prismaClient';
import customAuthChecker from './utils/customAuthChecker';
import { UploadFile } from './custom_resolvers/UploadFileResolver';
import { RegisterResolver } from './custom_resolvers/auth/register';
import { LoginResolver } from './custom_resolvers/auth/login';
import { Resolve } from './authConfig';
import { MeResolver } from './custom_resolvers/auth/me';
import SampleResolver from './custom_resolvers/Subscriptions/NotificationSubscribtion';
import app from './app';

export const httpServer = createHttpServer(app);

export const schema = () =>
  buildSchema({
    resolvers: [
      ...resolvers,
      UploadFile,
      SampleResolver,
      RegisterResolver,
      LoginResolver,
      MeResolver,
    ],
    validate: false,
    authChecker: customAuthChecker,
  });

const createServer = async () => {
  Resolve();
  const pubsub = new PubSub();

  const subscriptionServer = SubscriptionServer.create(
    {
      schema: await schema(),
      execute,
      subscribe,
    },
    {
      server: httpServer,
      path: '/subscription',
    }
  );

  const server = new ApolloServer({
    schema: await schema(),
    context: async ({ req, res }) => ({ prisma, req, res, pubsub }),

    plugins: [
      process.env.NODE_ENV === 'production'
        ? ApolloServerPluginLandingPageDisabled
        : ApolloServerPluginLandingPageGraphQLPlayground,
      {
        async serverWillStart() {
          return {
            async drainServer() {
              subscriptionServer.close();
            },
          };
        },
      },
    ],

    introspection: true,
  });

  return server;
};

export default createServer;
