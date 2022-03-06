/* eslint-disable no-console */
import 'reflect-metadata';
import dotenv from 'dotenv';
import { graphqlUploadExpress } from 'graphql-upload';
import app from './app';
import createServer, { httpServer } from './server';

dotenv.config();
const { PORT } = process.env;

(async () => {
  const server = await createServer();

  await server.start();

  app.use(graphqlUploadExpress());

  server.applyMiddleware({
    app,
    cors: {
      origin: process.env.CLIENT_URL,
      credentials: true,
      exposedHeaders: ['x-authorization'],
    },
  });
  const serverStartLogs = () => {
    console.log(`Server running on http://localhost:${PORT || 4000}/ 🪐🌶️. `);
    console.log(
      `GraphQL running on http://localhost:${PORT}${server.graphqlPath}. 👍🐉`
    );
  };

  await new Promise((resolve) =>
    httpServer.listen(PORT || 4000, async () => {
      resolve(serverStartLogs());
    })
  );
})();
