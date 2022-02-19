/* eslint-disable import/no-extraneous-dependencies */
import { PrismaClient } from '@prisma/client';
import { ApolloError } from 'apollo-server-core';
import Cookies from 'cookies';
import { Request, Response } from 'express';
import { verify, JwtPayload } from 'jsonwebtoken';

const webClientAuthCheck = async (
  context: {
    req: Request;
    res: Response;
    prisma: PrismaClient;
  },
  roles: string[]
) => {
  const cookies = new Cookies(context.req, context.res);
  const token = context.req.cookies
    ? context.req.cookies.token
    : cookies.get('token');

  if (!token) throw new ApolloError('U have to be logged in');

  const user = verify(token, process.env.JWT_SECRET as string) as JwtPayload;

  if (!user) throw new ApolloError('U have to be logged in');

  if (roles.find((role) => user.role.includes(role))) return true;

  throw new ApolloError('Acces denied');
};

export default webClientAuthCheck;
