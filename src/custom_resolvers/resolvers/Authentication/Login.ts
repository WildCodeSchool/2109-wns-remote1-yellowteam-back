import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';
import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { PubSubEngine } from 'graphql-subscriptions';
import { User } from '../../../generated/graphql';
import loginJWTCookies from '../../../security/loginJWTCookies';
import platformTypeChecker from '../../../utils/platformTypeChecker';
import loginAuthorizationHeader from '../../../security/loginAuthorisationHeader';
import { LoginInput } from '../../Inputs/login';
import { UserWithoutCountAndPassword } from 'src/interfaces/user';

@Resolver()
export class LoginResolver {
  @Mutation(() => User)
  async login(
    @Ctx()
    ctx: {
      prisma: PrismaClient;
      req: Request;
      res: Response;
      pubsub: PubSubEngine;
    },
    @Arg('data') data: LoginInput
  ): Promise<UserWithoutCountAndPassword> {
    if (platformTypeChecker(ctx.req) === 'web') {
      return loginJWTCookies(ctx, data);
    }
    if (platformTypeChecker(ctx.req) === 'mobile') {
      return await loginAuthorizationHeader(ctx, data);
    }
    return loginJWTCookies(ctx, data);
  }
}
