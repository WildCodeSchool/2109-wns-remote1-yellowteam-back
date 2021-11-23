import server from '../src/server';

const GET_USERS = `
query getUsers{
    users {
        id
        name
        email
        password
    }
}
`;

test('server start and return an array of users', async () => {
  server.start();
  const AllUsersResult = await server.executeOperation({
    query: GET_USERS,
  });

  expect(AllUsersResult.errors).toBeUndefined();
});
