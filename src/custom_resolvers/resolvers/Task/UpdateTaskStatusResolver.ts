import { PrismaClient } from '@prisma/client';
import { ApolloError } from 'apollo-server-core';
import { Response } from 'express';
import { TJWT_PAYLOAD } from 'src/interfaces';
import { Resolver, Mutation, Ctx, Arg, Authorized } from 'type-graphql';
import { TaskWhereUniqueInput } from '../../../generated/graphql';
import { Task } from '../../../generated/graphql/models/Task';
import { TaskStatusInput } from '../../models/updateTaskStatus';

@Resolver()
export class UpdateTaskStatusResolver {
  @Authorized(['ADMIN', 'SUPER_ADMIN', 'USER', 'MANAGER'])
  @Mutation(() => Task)
  async updateTaskStatus(
    @Ctx() ctx: { prisma: PrismaClient; res: Response; user: TJWT_PAYLOAD },
    @Arg('data') data: TaskStatusInput
  ): Promise<Task> {
    const task = await ctx.prisma.task.findUnique({
      where: { id: data.taskId as TaskWhereUniqueInput['id'] },
    });
    if (!task) {
      throw new ApolloError('No task found');
    }

    const projectUsers = await ctx.prisma.project
      .findUnique({
        where: {
          id: task.project_id,
        },
      })
      .users();

    if (!projectUsers.some((user) => user.id === ctx.user.id)) {
      throw new ApolloError('You are not allowed to update this task');
    }

    if (task.status_task !== data.status) {
      const updatedTask = await ctx.prisma.task.update({
        where: { id: task.id },
        data: { status_task: data.status },
      });
      return updatedTask;
    }
    return task;
  }
}
