import { ApolloServer } from 'apollo-server-express';
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageDisabled,
} from 'apollo-server-core';
import resolvers from './resolvers/index';
import prisma from '../prisma/prismaClient';
import typeDefs from './typeDefs/typeDefs';

export default new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => ({ prisma, req }),
  plugins: [
    process.env.NODE_ENV === 'production'
      ? ApolloServerPluginLandingPageDisabled()
      : ApolloServerPluginLandingPageGraphQLPlayground(),
  ],
  introspection: true,
});
