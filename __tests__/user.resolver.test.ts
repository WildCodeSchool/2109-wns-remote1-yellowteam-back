/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import 'reflect-metadata';
import faker from 'faker';
import { Role } from '.prisma/client';
import { ApolloServer } from 'apollo-server-express';
import prismaClient from '../prisma/prismaClient';
import createServer from '../src/server';

const GET_USERS = `
query getUsers{
    users {
      id
      first_name
      last_name
      email
      password
      is_disabled
      avatar
      role
    }
}
`;

const GET_USER = `
query oneUser($where: UserWhereUniqueInput!){
  user(where: $where){
    id
    first_name
    last_name
    email
    password
    is_disabled
    role
    avatar
  }
}`;

const fakeUser = () => ({
  email: faker.internet.email(),
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
  password: faker.internet.password(),
  is_disabled: false,
  role: ['USER'] as Role[],
});

const fakeUsers = new Array(20).fill('').map(() => fakeUser());
describe('server start and return correct values from queries', () => {
  let server: ApolloServer;
  beforeAll(async () => {
    server = await createServer();
    await server.start();

    server.requestOptions.context = {
      prisma: prismaClient,
      req: {
        headers: {
          'Set-cookies':
            'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmZyIiwiaWQiOiI4MDBlNDVmNC02NDgxLTQ1NDgtOTVmNC0xMDhlOTZlM2NiY2IiLCJyb2xlIjpbIkFETUlOIl0sImlhdCI6MTY0Mjc2MDcyMywiZXhwIjoxNjQyODQ3MTIzfQ.6dWQxbbXlG2p6gQ0tWfS4xx3BGTJGvfcRjNCoJNSLE0',
          token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmZyIiwiaWQiOiI4MDBlNDVmNC02NDgxLTQ1NDgtOTVmNC0xMDhlOTZlM2NiY2IiLCJyb2xlIjpbIkFETUlOIl0sImlhdCI6MTY0Mjc2MDcyMywiZXhwIjoxNjQyODQ3MTIzfQ.6dWQxbbXlG2p6gQ0tWfS4xx3BGTJGvfcRjNCoJNSLE0',
          cookies: {
            token:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmZyIiwiaWQiOiI4MDBlNDVmNC02NDgxLTQ1NDgtOTVmNC0xMDhlOTZlM2NiY2IiLCJyb2xlIjpbIkFETUlOIl0sImlhdCI6MTY0Mjc2MDcyMywiZXhwIjoxNjQyODQ3MTIzfQ.6dWQxbbXlG2p6gQ0tWfS4xx3BGTJGvfcRjNCoJNSLE0',
          },
        },
        cookies: {
          token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmZyIiwiaWQiOiI4MDBlNDVmNC02NDgxLTQ1NDgtOTVmNC0xMDhlOTZlM2NiY2IiLCJyb2xlIjpbIkFETUlOIl0sImlhdCI6MTY0Mjc2MDcyMywiZXhwIjoxNjQyODQ3MTIzfQ.6dWQxbbXlG2p6gQ0tWfS4xx3BGTJGvfcRjNCoJNSLE0',
        },
      },
    };
  });

  it('should execute the query GET_USERS return an array with all users from database', async () => {
    // create new users in database
    try {
      await prismaClient.user.createMany({
        data: fakeUsers,
        skipDuplicates: true,
      });
    } catch (error) {
      console.log('prisma', error);
    }
    // get all users from database
    const allPrismaUsers = await prismaClient.user.findMany({
      select: {
        id: true,
        first_name: true,
        last_name: true,
        email: true,
        password: true,
        is_disabled: true,
        role: true,
        created_at: false,
        avatar: true,
      },
    });
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
      data: fakeUser(),
      select: {
        id: true,
        first_name: true,
        last_name: true,
        email: true,
        password: true,
        is_disabled: true,
        role: true,
        created_at: false,
        avatar: true,
      },
    });

    const OneUserResult = await server.executeOperation({
      query: GET_USER,
      variables: { where: { id: user.id } },
    });

    expect(OneUserResult.errors).toBeUndefined();
    expect(OneUserResult.data!.user).toEqual(user);
  });
});
