import { Queries } from 'index';
import { User } from '.prisma/client';

const userQUery: Queries<User | User[], { id: string }> = {
  users: (parent, args, { prisma }) => prisma.user.findMany(),

  user: (parent, args, { prisma }) =>
    prisma.user.findUnique({ where: { id: args.id }, rejectOnNotFound: true }),
};

export default userQUery;
