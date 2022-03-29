/* eslint-disable no-console */
import 'reflect-metadata';
import dotenv from 'dotenv';
import { graphqlUploadExpress } from 'graphql-upload';
import createServer from './server';
import app from './app';
import whitelist from './constants/cors.whitelist';

dotenv.config();
const { PORT } = process.env;

const corsOptions = {
  origin: (
    origin: string | undefined,
    callback: (err: Error | null, check?: boolean) => Error | void
  ) => {
    if (whitelist.indexOf(origin as string) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  exposedHeaders: ['x-authorization'],
};

(async () => {
  const server = await createServer();

  await server.start();

  app.use(graphqlUploadExpress());

  server.applyMiddleware({
    app,
    cors: corsOptions,
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
