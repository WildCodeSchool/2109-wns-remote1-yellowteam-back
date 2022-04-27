import bcrypt from 'bcryptjs';
import { Role } from '@prisma/client';
import faker from 'faker';

export const newAdmin = {
  first_name: process.env.ADMIN_NAME as string,
  last_name: process.env.ADMIN_NAME as string,
  avatar: faker.image.avatar(),
  email: process.env.ADMIN_EMAIL as string,
  password: bcrypt.hashSync(process.env.ADMIN_PASSWORD as string, 10),
  is_disabled: false,
  role: ['ADMIN'] as Role[],
};

export const newSuperAdmin = {
  first_name: process.env.SUPER_ADMIN_NAME as string,
  last_name: process.env.SUPER_ADMIN_NAME as string,
  avatar: faker.image.avatar(),
  email: process.env.SUPER_ADMIN_EMAIL as string,
  password: bcrypt.hashSync(process.env.SUPER_ADMIN_PASSWORD as string, 10),
  is_disabled: false,
  role: ['SUPER_ADMIN'] as Role[],
};
