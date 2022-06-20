/* eslint-disable @typescript-eslint/naming-convention */

import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

export type TJWT_PAYLOAD = {
  email: string;
  id: string;
  role: string[];
};

export interface GQLContext {
  req: Request;
  res: Response;
  prisma: PrismaClient;
  user?: TJWT_PAYLOAD;
  pubsub: PubSub;
}

export interface WebsocketContext {
  ctx: Context<
    Record<string, unknown> | undefined,
    Extra & Partial<Record<PropertyKey, never>>
  >;
  msg: SubscribeMessage;
  args: ExecutionArgs;
  user?: TJWT_PAYLOAD;
  prisma: PrismaClient;
}
