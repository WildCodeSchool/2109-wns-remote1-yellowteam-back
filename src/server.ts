import { ApolloServer, ExpressContext } from 'apollo-server-express';
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageDisabled,
} from 'apollo-server-core';
import { buildSchema } from 'type-graphql';
import { resolvers } from './generated/graphql';
import customAuthChecker from './utils/customAuthChecker';
import { Resolve } from './authConfig';
import { graphQLContext } from './context/context';
import { customResolvers } from './custom_resolvers/resolvers';

const createServer = async (): Promise<ApolloServer<ExpressContext>> => {
  Resolve();
  const schema = await buildSchema({
    resolvers: [...resolvers, ...customResolvers],
    validate: false,
    authChecker: customAuthChecker,
  });

  const server = new ApolloServer({
    schema,
    context: async ({ req, res }) => graphQLContext({ req, res }),
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
