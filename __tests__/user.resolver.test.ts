/* eslint-disable no-console */
import 'reflect-metadata';
import faker from 'faker';
import { ApolloServer } from 'apollo-server-express';
import { Role } from '.prisma/client';
import prismaClient from '../prisma/prismaClient';
import createServer from '../src/server';

const GET_USERS = `
query getUsers{
    users {
      id
      name
      email
      password
      isDisabled
      role
    }
}
`;

const GET_USER = `
query oneUser($where: UserWhereUniqueInput!){
  user(where: $where){
    id
    name
    email
    password
    isDisabled
    role
  }
}`;

const fakeUser = {
  email: faker.internet.email(),
  name: faker.name.findName(),
  password: faker.internet.password(),
  isDisabled: false,
  role: ['USER'] as Role[],
};

const fakeUsers = new Array(20).fill('').map(() => fakeUser);

describe('server start and return correct values from queries', () => {
  let server: ApolloServer;
  beforeAll(async () => {
    server = await createServer();
    await server.start();
  });

  it('should execute the query GET_USERS return an array with all users from database', async () => {
    // create new users in database
    await Promise.all(
      fakeUsers.map((newuser) =>
        prismaClient.user.create({
          data: newuser,
        })
      )
    );
    // get all users from database
    const allPrismaUsers = await prismaClient.user.findMany();

    // execute GET_USERS query and get response
    const AllUsersResult = await server.executeOperation({
      query: GET_USERS,
    });

    expect(AllUsersResult.errors).toBeUndefined();
    expect(AllUsersResult.data!.users).toEqual(allPrismaUsers);
  });

  it('should execute the query GET_USER return one user from database', async () => {
    // create one user in database
    const user = await prismaClient.user.create({
      data: fakeUser,
    });

    const OneUserResult = await server.executeOperation({
      query: GET_USER,
      variables: { where: { id: user.id } },
    });

    expect(OneUserResult.errors).toBeUndefined();
    expect(OneUserResult.data!.user).toEqual(user);
  });
  console.log('user test successfull 👍');
});
