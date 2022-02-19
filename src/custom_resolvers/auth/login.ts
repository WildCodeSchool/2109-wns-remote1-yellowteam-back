/* eslint-disable import/no-extraneous-dependencies */
import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';
import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import loginJWTCookies from '../../utils/loginJWTCookies';
import platformTypeChecker from '../../utils/platformTypeChecker';
import loginAuthorizationHeader from '../../utils/loginAuthorisationHeader';
import { User } from '../../generated/graphql/models/User';
import { UserWithoutCountAndPassword } from '../models/register';
import { LoginInput } from '../models/login';

@Resolver()
export class LoginResolver {
  @Mutation(() => User)
  async login(
    @Ctx() ctx: { prisma: PrismaClient; req: Request; res: Response },
    @Arg('data') data: LoginInput
  ): Promise<UserWithoutCountAndPassword> {
    if (platformTypeChecker(ctx.req) === 'web') {
      return loginJWTCookies(ctx, data);
    }
    if (platformTypeChecker(ctx.req) === 'mobile') {
      const user = await loginAuthorizationHeader(ctx, data);
      return user;
    }
    return loginJWTCookies(ctx, data);
  }
}
