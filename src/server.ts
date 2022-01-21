/* eslint-disable import/no-extraneous-dependencies */
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
// eslint-disable-next-line import/no-extraneous-dependencies
import { buildSchema } from 'type-graphql';
import { resolvers } from './generated/graphql';
import prisma from '../prisma/prismaClient';
import customAuthChecker from './utils/customAuthChecker';
import { UploadFile } from './custom_resolvers/UploadFileResolver';
import { RegisterResolver } from './custom_resolvers/auth/register';
import { LoginResolver } from './custom_resolvers/auth/login';
import { Resolve } from './authConfig';
import { MeResolver } from './custom_resolvers/auth/me';

const createServer = async () => {
  Resolve();
  const schema = await buildSchema({
    resolvers: [
      ...resolvers,
      UploadFile,
      RegisterResolver,
      LoginResolver,
      MeResolver,
    ],
    validate: false,
    authChecker: customAuthChecker,
  });

  const server = new ApolloServer({
    schema,
    context: async ({ req, res }) => ({ prisma, req, res }),

    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],

    introspection: true,
  });
  return server;
};

export default createServer;
