/* eslint-disable import/no-extraneous-dependencies */
import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';
import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { Task } from 'src/generated/graphql';
import { TaskStatusInput } from './models/updateTaskStatus';

@Resolver()
export class UpdateTaskStatusResolver {
  @Mutation(() => Task)
  async updateTask(
    @Ctx() ctx: { prisma: PrismaClient; req: Request; res: Response },
    @Arg('data') data: TaskStatusInput
  ): Promise<Task> {
    const { userId } = ctx.req.query;

    if (userId !== data.task.user_id) {
      throw new Error('User is not authorized to modify task status');
    }

    if (data.task.status_task !== data.status) {
      const updatedTask = await ctx.prisma.task.update({
        where: { id: data.task.id },
        data: { status_task: data.task.status_task },
      });
      return updatedTask;
    }
    return data.task;
  }
}
