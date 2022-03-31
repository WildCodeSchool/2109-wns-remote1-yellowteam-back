/* eslint-disable import/no-extraneous-dependencies */
import { ApolloServer } from 'apollo-server-express';
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageDisabled,
} from 'apollo-server-core';
// eslint-disable-next-line import/no-extraneous-dependencies
import { buildSchema } from 'type-graphql';
import { verify } from 'jsonwebtoken';
import Cookies from 'cookies';
import { resolvers } from './generated/graphql';
import prisma from '../prisma/prismaClient';
import customAuthChecker from './utils/customAuthChecker';
import { UploadFile } from './custom_resolvers/UploadFileResolver';
import { RegisterResolver } from './custom_resolvers/auth/register';
import { LoginResolver } from './custom_resolvers/auth/login';
import { Resolve } from './authConfig';
import { MeResolver } from './custom_resolvers/auth/me';
import { LogoutResolver } from './custom_resolvers/auth/logout';
import { UpdateTaskStatusResolver } from './custom_resolvers/UpdateTaskStatusResolver';

const createServer = async () => {
  Resolve();
  const schema = await buildSchema({
    resolvers: [
      ...resolvers,
      UploadFile,
      RegisterResolver,
      LoginResolver,
      MeResolver,
      LogoutResolver,
      UpdateTaskStatusResolver,
    ],
    validate: false,
    authChecker: customAuthChecker,
  });

  const server = new ApolloServer({
    schema,
    context: async ({ req, res }) => {
      const cookies = new Cookies(req, res);
      const token = cookies.get('token');
      if (token) {
        const user = verify(token, process.env.JWT_SECRET as string);
        return { req, res, prisma, user };
      }
      return { req, res, prisma };
    },

    plugins: [
      process.env.NODE_ENV === 'production'
        ? ApolloServerPluginLandingPageDisabled
        : ApolloServerPluginLandingPageGraphQLPlayground,
    ],

    introspection: true,
  });
  return server;
};

export default createServer;
