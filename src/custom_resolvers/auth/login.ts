/* eslint-disable import/no-extraneous-dependencies */
import bcrypt from 'bcrypt';
import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';
import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import Cookies from 'cookies';
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
    const cookies = new Cookies(ctx.req, ctx.res);
    const user = await ctx.prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (!user) throw new Error("User doesn't exist");
    if (!bcrypt.compareSync(data.password, user.password)) {
      ctx.res.cookie('token', '');
      throw new Error('Invalid password');
    }

    const token = jwt.sign(
      {
        email: user.email,
        id: user.id,
        role: user.role,
      },
      process.env.JWT_SECRET as string,
      {
        expiresIn: '1d',
      }
    );

    const { password, ...userWithoutPassword } = user;

    cookies.set('token', token);

    ctx.res.setHeader('Access-Control-Allow-Credentials', 'true');

    return userWithoutPassword;
  }
}
