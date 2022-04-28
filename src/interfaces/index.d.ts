/* eslint-disable @typescript-eslint/naming-convention */
import { PrismaClient } from '../../prisma/prismaClient';

export type TJWT_PAYLOAD = {
  email: string;
  id: string;
  role: string[];
};

export interface GQLContext {
  req: Request;
  res: Response;
  prisma: typeof PrismaClient;
  user?: User;
  pubsub: PubSub;
}

export interface WebsocketContext {
  ctx: Context<
    Record<string, unknown> | undefined,
    Extra & Partial<Record<PropertyKey, never>>
  >;
  msg: SubscribeMessage;
  args: ExecutionArgs;
  user?: User;
  prisma: PrismaClient;
}
