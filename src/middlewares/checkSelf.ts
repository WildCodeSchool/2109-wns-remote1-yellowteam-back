/* eslint-disable @typescript-eslint/no-explicit-any */
import { GQLContext } from '@src/interfaces';
import { ApolloError } from 'apollo-server-core';
import { NextFn } from 'type-graphql';

const checkSelf = async (
  {
    args,
    context,
  }: {
    args: any;
    context: GQLContext;
  },
  next: NextFn
): Promise<void> => {
  if (!context.user) {
    throw new ApolloError('U have to be loged in');
  }

  if (context.user?.role.includes('SUPER_ADMIN' || 'ADMIN')) {
    return next();
  }

  let userId = args.where.id || '';

  if (args.where.email) {
    const user = await context.prisma.user.findUnique({
      where: {
        email: args.where.email,
      },
    });
    userId = user?.id;
  }

  if (userId !== context.user.id) {
    throw new ApolloError('Unauthorized action');
  }

  return next();
};

export default checkSelf;
