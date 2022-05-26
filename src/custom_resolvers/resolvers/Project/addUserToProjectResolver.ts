/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { AddUserToProjectArgs } from '../../Args/addUserToProjectArgs';
import { GQLContext } from 'src/interfaces';
import { Resolver, Mutation, Ctx, Authorized, Args } from 'type-graphql';
import { Project } from '../../../generated/graphql';
import { Task } from '../../../generated/graphql/models/Task';

@Resolver()
export class AddUserToProjectResolver {
  @Authorized(['ADMIN', 'SUPER_ADMIN', 'USER', 'MANAGER'])
  @Mutation(() => Task)
  async addUserToProject(
    @Ctx() ctx: GQLContext,
    @Args() args: AddUserToProjectArgs
  ): Promise<Project> {
    const projectToUpdate = ctx.prisma.project.update({
      where: {
        id: args.where.id,
      },
      data: {
        users: {
          connect: {
            id: args.data.userId,
          },
        },
      },
    });
    return projectToUpdate;
  }
}
