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

test('server start and return an array of users', async () => {
  server.start();

  const fakeUsers = new Array(20).fill('').map(() => ({
    name: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    isDisabled: false,
    role: ['USER' as Role],
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
