"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const apollo_server_core_1 = require("apollo-server-core");
// eslint-disable-next-line import/no-extraneous-dependencies
const type_graphql_1 = require("@generated/type-graphql");
const type_graphql_2 = require("type-graphql");
const prismaClient_1 = __importDefault(require("../prisma/prismaClient"));
const createServer = async () => {
    const schema = await (0, type_graphql_2.buildSchema)({
        resolvers: type_graphql_1.resolvers,
        validate: false,
    });
    const server = new apollo_server_express_1.ApolloServer({
        schema,
        context: async ({ req }) => ({ prisma: prismaClient_1.default, req }),
        plugins: [
            process.env.NODE_ENV === 'production'
                ? (0, apollo_server_core_1.ApolloServerPluginLandingPageDisabled)()
                : (0, apollo_server_core_1.ApolloServerPluginLandingPageGraphQLPlayground)(),
        ],
        introspection: true,
    });
    return server;
};
exports.default = createServer;
