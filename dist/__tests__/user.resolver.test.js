"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
require("reflect-metadata");
const faker_1 = __importDefault(require("faker"));
const prismaClient_1 = __importDefault(require("../prisma/prismaClient"));
const server_1 = __importDefault(require("../src/server"));
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
    email: faker_1.default.internet.email(),
    name: faker_1.default.name.findName(),
    password: faker_1.default.internet.password(),
    isDisabled: false,
    role: ['USER'],
};
const fakeUsers = new Array(20).fill('').map(() => fakeUser);
describe('server start and return correct values from queries', () => {
    let server;
    beforeAll(async () => {
        server = await (0, server_1.default)();
        await server.start();
    });
    it('should execute the query GET_USERS return an array with all users from database', async () => {
        // create new users in database
        await Promise.all(fakeUsers.map((newuser) => prismaClient_1.default.user.create({
            data: newuser,
        })));
        // get all users from database
        const allPrismaUsers = await prismaClient_1.default.user.findMany();
        // execute GET_USERS query and get response
        const AllUsersResult = await server.executeOperation({
            query: GET_USERS,
        });
        expect(AllUsersResult.errors).toBeUndefined();
        expect(AllUsersResult.data.users).toEqual(allPrismaUsers);
    });
    it('should execute the query GET_USER return one user from database', async () => {
        // create one user in database
        const user = await prismaClient_1.default.user.create({
            data: fakeUser,
        });
        const OneUserResult = await server.executeOperation({
            query: GET_USER,
            variables: { where: { id: user.id } },
        });
        expect(OneUserResult.errors).toBeUndefined();
        expect(OneUserResult.data.user).toEqual(user);
    });
    console.log('user test successfull 👍');
});
