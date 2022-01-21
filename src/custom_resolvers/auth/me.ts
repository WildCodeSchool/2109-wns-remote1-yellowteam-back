/* eslint-disable import/no-extraneous-dependencies */
import { Ctx, Mutation, Resolver } from 'type-graphql';
import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import Cookies from 'cookies';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { User } from '../../generated/graphql/models/User';
import { UserWithoutCountAndPassword } from '../models/register';

@Resolver()
export class MeResolver {
  @Mutation(() => User)
  async me(
    @Ctx() ctx: { prisma: PrismaClient; req: Request; res: Response }
  ): Promise<UserWithoutCountAndPassword> {
    const cookies = new Cookies(ctx.req, ctx.res);

    const token = cookies.get('token');

    if (!token) throw new Error('User not logged in');

    const user = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as JwtPayload;

    const prismaUser = await ctx.prisma.user.findUnique({
      where: {
        email: user.email,
      },
    });

    if (!prismaUser) throw new Error("User doesn't exist");

    const newToken = jwt.sign(
      {
        email: prismaUser.email,
        id: prismaUser.id,
        role: prismaUser.role,
      },
      process.env.JWT_SECRET as string,
      {
        expiresIn: '1d',
      }
    );

    const { password, ...userWithoutPassword } = prismaUser;

    cookies.set('token', newToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
    });

    ctx.res.setHeader('Access-Control-Allow-Credentials', 'true');

    return userWithoutPassword;
  }
}
