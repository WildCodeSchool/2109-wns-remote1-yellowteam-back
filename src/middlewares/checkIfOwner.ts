/* eslint-disable @typescript-eslint/no-explicit-any */
import { GQLContext } from '@src/interfaces';
import { ApolloError } from 'apollo-server-core';
import { NextFn } from 'type-graphql';

const checkIfOwner = async (
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

  const projectId = args.where.id;

  const project = await context.prisma.project.findUnique({
    where: {
      id: projectId,
    },
    rejectOnNotFound: true,
  });

  if (context.user.id !== project.project_owner_id) {
    throw new ApolloError('Only project owner can update project');
  }

  return next();
};

export default checkIfOwner;
