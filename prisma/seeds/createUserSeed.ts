import faker from 'faker';
import bcrypt from 'bcrypt';
import { Role } from '@prisma/client';

export default function newUser() {
  return {
    first_name: faker.name.findName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email(),
    password: bcrypt.hashSync('password', 10),
    is_disabled: false,
    role: ['USER'] as Role[],
  };
}
