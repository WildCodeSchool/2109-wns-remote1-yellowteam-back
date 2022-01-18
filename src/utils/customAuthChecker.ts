import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { AuthChecker } from 'type-graphql';
import Cookies from 'cookies';

import jwt, { JwtPayload } from 'jsonwebtoken';

const customAuthChecker: AuthChecker<{
  req: Request;
  res: Response;
  prisma: PrismaClient;
}> = ({ context }, roles) => {
  const cookies = new Cookies(context.req, context.res);

  const token = cookies.get('token');

  if (!token) return false;
  const user = jwt.verify(
    token,
    process.env.JWT_SECRET as string
  ) as JwtPayload;

  if (!user) return false;

  if (roles.find((role) => user.role.includes(role))) return true;

  return false;
};
export default customAuthChecker;
