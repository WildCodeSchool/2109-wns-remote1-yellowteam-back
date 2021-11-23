import { gql } from 'apollo-server';

const userTypedef = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    isDisabled: Boolean!
  }
  input UserInput {
    name: String!
    email: String!
    password: String!
    isDisabled: Boolean!
  }
  type Query {
    users: [User]
    user(id: ID!): User
  }
  type Mutation {
    createUser(input: UserInput): User
  }
`;

export default userTypedef;
