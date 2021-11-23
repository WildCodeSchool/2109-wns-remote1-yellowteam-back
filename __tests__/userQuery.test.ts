import faker from 'faker';
import prismaClient from '../prisma/prismaClient';
import server from '../src/server';

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
}
`;

test('server start and return one user', async () => {
  server.start();

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
