/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import 'reflect-metadata';
import faker from 'faker';
import { Role } from '.prisma/client';
import { ApolloServer } from 'apollo-server-express';
import prismaClient from '../prisma/prismaClient';
import createServer from '../src/server';

const REGISTER = `
mutation register($data: RegisterInput!){
  register(data: $data){
    id
    first_name
    last_name
    email
    is_disabled
    role
    avatar
  }
}`;

const fakeUser = {
  email: faker.internet.email(),
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
  password: faker.internet.password(),
  is_disabled: false,
  role: ['USER'] as Role[],
};

describe('server start and return correct values from queries', () => {
  let server: ApolloServer;
  beforeAll(async () => {
    server = await createServer();
    await server.start();
  });

  it('should execute the query REGISTER and return the new user from database without password', async () => {
    const OneUserResult = await server.executeOperation({
      query: REGISTER,
      variables: {
        data: {
          first_name: fakeUser.first_name,
          last_name: fakeUser.last_name,
          email: fakeUser.email,
          password: fakeUser.password,
        },
      },
    });
    const user = await prismaClient.user.findUnique({
      where: {
        email: OneUserResult?.data?.register?.email,
      },
      select: {
        id: true,
        first_name: true,
        last_name: true,
        email: true,
        is_disabled: true,
        role: true,
        created_at: false,
        avatar: true,
      },
    });

    expect(OneUserResult.errors).toBeUndefined();
    expect(OneUserResult.data!.register).toBeDefined();
    expect(OneUserResult.data!.register).toEqual(user);
  });
});
