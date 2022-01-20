import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { AuthChecker } from 'type-graphql';
import Cookies from 'cookies';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { ApolloError } from 'apollo-server-core';

const customAuthChecker: AuthChecker<{
  req: Request;
  res: Response;
  prisma: PrismaClient;
}> = ({ context }, roles) => {
  const cookies = new Cookies(context.req, context.res);

  const token = cookies.get('token');

  if (!token) throw new ApolloError('U have to be logged in');

  const user = jwt.verify(
    token,
    process.env.JWT_SECRET as string
  ) as JwtPayload;

  if (!user) throw new ApolloError('U have to be logged in');

  if (roles.find((role) => user.role.includes(role))) return true;

  throw new ApolloError('Acces denied');
};

export default customAuthChecker;
