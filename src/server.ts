/* eslint-disable import/no-extraneous-dependencies */
import { ApolloServer } from 'apollo-server-express';
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageDisabled,
} from 'apollo-server-core';
// eslint-disable-next-line import/no-extraneous-dependencies
import { buildSchema } from 'type-graphql';
import { resolvers } from '@generated/type-graphql';
import prisma from '../prisma/prismaClient';
import { UploadFile } from './custom_resolvers/UploadFileResolver';
import { RegisterResolver } from './custom_resolvers/auth/register';
import { LoginResolver } from './custom_resolvers/auth/login';

const createServer = async () => {
  const schema = await buildSchema({
    resolvers: [...resolvers, UploadFile, RegisterResolver, LoginResolver],
    validate: false,
  });

  const server = new ApolloServer({
    schema,
    context: async ({ req, res }) => ({ prisma, req, res }),

    plugins: [
      process.env.NODE_ENV === 'production'
        ? ApolloServerPluginLandingPageDisabled()
        : ApolloServerPluginLandingPageGraphQLPlayground(),
    ],

    introspection: true,
  });
  return server;
};
export default createServer;
