/* eslint-disable import/no-extraneous-dependencies */
import { PrismaClient } from '@prisma/client';
import { ApolloError } from 'apollo-server-core';
import { Request, Response } from 'express';
import { verify, JwtPayload } from 'jsonwebtoken';

const mobileClientAuthChecker = async (
  context: {
    req: Request;
    res: Response;
    prisma: PrismaClient;
  },
  roles: string[]
) => {
  const token = context.req.headers.authorization?.split(' ')[1];

  if (!token) throw new ApolloError('U have to be logged in');

  const user = verify(token, process.env.JWT_SECRET as string) as JwtPayload;

  if (!user) throw new ApolloError('U have to be logged in');

  if (roles.find((role) => user.role.includes(role))) return true;

  throw new ApolloError('Acces denied');
};

export default mobileClientAuthChecker;
