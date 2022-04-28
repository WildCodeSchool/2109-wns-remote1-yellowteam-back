import faker from 'faker';
import bcrypt from 'bcryptjs';
import { Role } from '@prisma/client';

export default function newUser() {
  return {
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    avatar: faker.image.avatar(),
    email: faker.internet.email(),
    password: bcrypt.hashSync('password', 10),
    is_disabled: false,
    role: ['USER'] as Role[],
  };
}
