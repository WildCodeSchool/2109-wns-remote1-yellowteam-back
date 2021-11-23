/* eslint-disable no-console */
import faker from 'faker';
import { Role } from '.prisma/client';
import prismaClient from '../prisma/prismaClient';
import server from '../src/server';

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
query oneUser($id: ID!){
  user(id: $id){
    id
    name
    email
    password
    isDisabled
    role
  }
}`;

describe('server start and return correct values from queries', () => {
  server.start();

  test('server start and return an array of users', async () => {
    const fakeUsers = new Array(20).fill('').map(() => ({
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      isDisabled: false,
      role: ['USER', 'ADMIN', 'MANAGER', 'SUPER_ADMIN'][
        Math.floor(Math.random() * 4)
      ] as Role,
    }));

    await Promise.all(
      fakeUsers.map((user) =>
        prismaClient.user.create({
          data: user,
        })
      )
    );

    const allPrismaUsers = await prismaClient.user.findMany();

    const AllUsersResult = await server.executeOperation({
      query: GET_USERS,
    });

    expect(AllUsersResult.errors).toBeUndefined();
    expect(AllUsersResult.data!.users).toEqual(allPrismaUsers);

    console.log('test passed successfully 👍');
  });

  test('server start and return one user', async () => {
    const user = await prismaClient.user.create({
      data: {
        email: faker.internet.email(),
        name: faker.name.findName(),
        password: faker.internet.password(),
        isDisabled: false,
        role: ['USER'],
      },
    });

    const OneUserResult = await server.executeOperation({
      query: GET_USER,
      variables: { id: user.id },
    });

    expect(OneUserResult.errors).toBeUndefined();
    expect(OneUserResult.data).toEqual({
      user: {
        email: user.email,
        name: user.name,
        id: user.id,
        password: user.password,
        isDisabled: user.isDisabled,
        role: user.role,
      },
    });
  });
});
