/* eslint-disable import/no-extraneous-dependencies */
import { User } from '@generated/type-graphql';
import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';
import { PrismaClient } from '@prisma/client';
import { RegisterBody } from '../models/Register';

@Resolver()
export class RegisterResolver {
  @Mutation(() => User, { nullable: true })
  async register(
    @Ctx() ctx: { prisma: PrismaClient },
    @Arg('register', () => RegisterBody) register: RegisterBody
  ): Promise<Boolean> {
    await ctx.prisma.user.create({
      data: {
        first_name: register.first_name,
        last_name: register.last_name,
        email: register.email,
        password: register.password,
        is_disabled: false,
        role: ['USER'],
      },
    });

    return true;
  }
}
