import Cookies from 'cookies';
import { Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { PubSub } from 'graphql-subscriptions';
import { GQLContext } from '../interfaces/index';
import prisma from '../../prisma/prismaClient';

const pubsub = new PubSub();

export const graphQLContext = async ({
  req,
  res,
}: {
  req: Request;
  res: Response;
}): Promise<GQLContext> => {
  if (process.env.NODE_ENV !== 'test') {
    const cookies = new Cookies(req, res);
    const token = cookies.get('token');
    if (token) {
      const user = verify(token, process.env.JWT_SECRET as string);

      if (typeof user === 'string') {
        throw new Error('User not logged in');
      }

      return { prisma, req, res, pubsub, user };
    }
  }

  return { prisma, req, res, pubsub };
};
