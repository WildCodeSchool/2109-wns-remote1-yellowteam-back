import userQuery from './users';

const resolvers = {
  Query: {
    ...userQuery,
  },
};
export default resolvers;
