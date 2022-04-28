import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { PubSubEngine } from 'graphql-subscriptions';
import { AuthChecker } from 'type-graphql';
import mobileClientAuthChecker from '../utils/mobileClientAuthChecker';
import clientTypeChecker from '../utils/platformTypeChecker';

import webClientAuthCheck from '../utils/webClientAuthCheck';

const customAuthChecker: AuthChecker<{
  req: Request;
  res: Response;
  prisma: PrismaClient;
  pubsub: PubSubEngine;
}> = async ({ context }, roles) => {
  const clientType = clientTypeChecker(context.req);

  const authConfig = {
    web: async () => !!(await webClientAuthCheck(context, roles)),
    mobile: async () => !!(await mobileClientAuthChecker(context, roles)),
    undefined: async () => !!(await webClientAuthCheck(context, roles)),
  };

  return authConfig[clientType]();
};

export default customAuthChecker;
