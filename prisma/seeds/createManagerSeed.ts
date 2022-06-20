import bcrypt from 'bcrypt';
import faker from 'faker';
import { Role } from '@prisma/client';

const newManager = () => ({
  first_name: faker.name.findName(),
  last_name: faker.name.lastName(),
  avatar: faker.image.avatar(),
  email: faker.internet.email(),
  password: bcrypt.hashSync('password', 10),
  is_disabled: false,
  role: ['MANAGER'] as Role[],
});

export default newManager;
