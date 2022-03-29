/* eslint-disable import/no-extraneous-dependencies */
import { Ctx, Mutation, Resolver } from 'type-graphql';
import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import Cookies from 'cookies';

@Resolver()
export class LogoutResolver {
  @Mutation(() => String)
  async logout(
    @Ctx() ctx: { prisma: PrismaClient; req: Request; res: Response }
  ): Promise<String> {
    const cookies = new Cookies(ctx.req, ctx.res);
    cookies.set('token', '');
      return 'User successfully logged out';
  }
}
