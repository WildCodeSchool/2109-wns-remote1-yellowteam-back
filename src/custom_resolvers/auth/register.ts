/* eslint-disable import/no-extraneous-dependencies */
import bcrypt from 'bcrypt';
import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';
import { PrismaClient } from '@prisma/client';
import { Request } from 'express';
import { User } from '../../generated/graphql/models/User';
import { RegisterInput, UserWithoutCountAndPassword } from '../models/register';

@Resolver()
export class RegisterResolver {
  @Mutation(() => User)
  async register(
    @Ctx() ctx: { prisma: PrismaClient; req: Request },
    @Arg('data') data: RegisterInput
  ): Promise<UserWithoutCountAndPassword> {
    const hashedPassword = bcrypt.hashSync(data.password, 10);

    const user = await ctx.prisma.user.create({
      data: {
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        password: hashedPassword,
        is_disabled: false,
        role: ['USER'],
      },
    });

    const { password, ...userWithoutPassword } = user;

    return userWithoutPassword;
  }
}
