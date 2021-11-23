/* eslint-disable no-console */
import dotenv from 'dotenv';
import server from './server';
import app from './app';

dotenv.config();
const { PORT } = process.env;

(async () => {
  await server.start();
  server.applyMiddleware({
    app,
    cors: {
      origin: '*',
    },
  });

  const serverStartLogs = () => {
    console.log(`Server running on http://localhost:${PORT || 4000}/ 🪐🌶️. `);
    console.log(
      `GraphQL running on http://localhost:5000${server.graphqlPath}. 👍🐉`
    );
  };

  await new Promise((resolve) =>
    app.listen(PORT || 4000, () => {
      resolve(serverStartLogs());
    })
  );
})();
