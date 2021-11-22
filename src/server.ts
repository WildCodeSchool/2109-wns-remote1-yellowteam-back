import { ApolloServer } from 'apollo-server-express';
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageDisabled,
} from 'apollo-server-core';
import prisma from '../prisma/prismaClient';

import userTypedef from './typeDefs/user.typeDefs';

export default new ApolloServer({
  typeDefs: [userTypedef],
  introspection: true,
  context: async () => prisma,
  plugins: [
    process.env.NODE_ENV === 'production'
      ? ApolloServerPluginLandingPageDisabled()
      : ApolloServerPluginLandingPageGraphQLPlayground(),
  ],
});
