/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import 'reflect-metadata';
import faker from 'faker';
import { ApolloServer } from 'apollo-server-express';
import prismaClient from '../prisma/prismaClient';
import createServer from '../src/server';
import { Role } from '@prisma/client';

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
            'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRvZUBnbWFpbC5jb20iLCJpZCI6IjlhYWZkZGU3LTM0YjItNGZmNy04YTE4LWRiZmM5ZDRjZDg4MCIsInJvbGUiOlsiVVNFUiIsIlNVUEVSX0FETUlOIiwiTUFOQUdFUiIsIkFETUlOIl0sImZpcnN0X25hbWUiOiJKZXJyb2xkIiwibGFzdF9uYW1lIjoiSG9lZ2VyIiwiaWF0IjoxNjUwOTc1NDc3LCJleHAiOjE2NTEwNjE4Nzd9.ej9MfY2XoieUe2pwzsyS6G3RqK01puJ8vTVeSrmd8Kk',
          token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRvZUBnbWFpbC5jb20iLCJpZCI6IjlhYWZkZGU3LTM0YjItNGZmNy04YTE4LWRiZmM5ZDRjZDg4MCIsInJvbGUiOlsiVVNFUiIsIlNVUEVSX0FETUlOIiwiTUFOQUdFUiIsIkFETUlOIl0sImZpcnN0X25hbWUiOiJKZXJyb2xkIiwibGFzdF9uYW1lIjoiSG9lZ2VyIiwiaWF0IjoxNjUwOTc1NDc3LCJleHAiOjE2NTEwNjE4Nzd9.ej9MfY2XoieUe2pwzsyS6G3RqK01puJ8vTVeSrmd8Kk',
          cookies: {
            token:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRvZUBnbWFpbC5jb20iLCJpZCI6IjlhYWZkZGU3LTM0YjItNGZmNy04YTE4LWRiZmM5ZDRjZDg4MCIsInJvbGUiOlsiVVNFUiIsIlNVUEVSX0FETUlOIiwiTUFOQUdFUiIsIkFETUlOIl0sImZpcnN0X25hbWUiOiJKZXJyb2xkIiwibGFzdF9uYW1lIjoiSG9lZ2VyIiwiaWF0IjoxNjUwOTc1NDc3LCJleHAiOjE2NTEwNjE4Nzd9.ej9MfY2XoieUe2pwzsyS6G3RqK01puJ8vTVeSrmd8Kk',
          },
        },
        cookies: {
          token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRvZUBnbWFpbC5jb20iLCJpZCI6IjlhYWZkZGU3LTM0YjItNGZmNy04YTE4LWRiZmM5ZDRjZDg4MCIsInJvbGUiOlsiVVNFUiIsIlNVUEVSX0FETUlOIiwiTUFOQUdFUiIsIkFETUlOIl0sImZpcnN0X25hbWUiOiJKZXJyb2xkIiwibGFzdF9uYW1lIjoiSG9lZ2VyIiwiaWF0IjoxNjUwOTc1NDc3LCJleHAiOjE2NTEwNjE4Nzd9.ej9MfY2XoieUe2pwzsyS6G3RqK01puJ8vTVeSrmd8Kk',
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
    // retrieve all users from database and retr
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
