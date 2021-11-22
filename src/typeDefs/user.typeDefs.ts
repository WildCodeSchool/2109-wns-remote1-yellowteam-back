import { gql } from 'apollo-server';

const userTypedef = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    isDisabled: Boolean!
  },
  type Query {
      users: [User]
  }
`;
export default userTypedef;