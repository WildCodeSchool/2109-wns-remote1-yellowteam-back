import server from './server';
import app from './app';

const { PORT } = process.env;

(async () => {
  await server.start();
  server.applyMiddleware({ app });
  app.listen(PORT || 4000, () => {
    console.log(`Server running on ${PORT || 4000}.`);
  });
  console.log(`GraphQL running on ${server.graphqlPath}.`);
})();
