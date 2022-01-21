/* eslint-disable no-console */
import 'reflect-metadata';
import dotenv from 'dotenv';
import { graphqlUploadExpress } from 'graphql-upload';
import createServer from './server';
import app from './app';

dotenv.config();
const { PORT } = process.env;

(async () => {
  const server = await createServer();

  await server.start();

  app.use(graphqlUploadExpress());

  server.applyMiddleware({
    app,
    cors: {
      origin: 'http://localhost:3000',
      credentials: true,
    },
  });

  const serverStartLogs = () => {
    console.log(`Server running on http://localhost:${PORT || 4000}/ 🪐🌶️. `);
    console.log(
      `GraphQL running on http://localhost:${PORT}${server.graphqlPath}. 👍🐉`
    );
  };

  await new Promise((resolve) =>
    app.listen(PORT || 4000, () => {
      resolve(serverStartLogs());
    })
  );
})();
