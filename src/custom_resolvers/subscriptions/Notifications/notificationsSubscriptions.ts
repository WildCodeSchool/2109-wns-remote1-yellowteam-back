/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-plusplus */
import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import * as TypeGraphQL from 'type-graphql';
import { PubSubEngine } from 'graphql-subscriptions';
import { Resolver, Arg, Subscription, Root } from 'type-graphql';
import { User } from '../../../generated/graphql';
import {
  NotificationType,
  NotificationPayload,
} from '../../models/notification';

@Resolver((_of) => NotificationType)
export class SubscribtionsResolver {
  @Subscription({
    topics: 'NOTIFICATIONS',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filter: ({ context, payload }: any) => true,
  })
  normalSubscription(
    @Root() { senderId, userId, message }: NotificationPayload,
    @TypeGraphQL.Ctx()
    ctx: {
      user: User;
      prisma: PrismaClient;
      req: Request;
      res: Response;
      pubsub: PubSubEngine;
    }
  ): NotificationType {
    return {
      id: senderId,
      date: new Date(),
      message,
    };
  }

  @Subscription((returns) => NotificationType, {
    topics: 'NOTIFICATIONS',
    filter: ({ payload, context }: any) => {
      return payload.userId === context.user.id;
    },
  })
  subscriptionWithFilter(
    @Root() { senderId, userId, message }: NotificationPayload
  ): NotificationType {
    const newNotification: NotificationType = {
      id: senderId,
      message,
      date: new Date(),
    };
    return newNotification;
  }

  @Subscription({
    topics: ({ args }) => args.topic,
  })
  subscriptionWithFilterToDynamicTopic(
    @Arg('topic') topic: string,
    @Root() { senderId, userId, message }: NotificationPayload
  ): NotificationType {
    return { id: userId, message, date: new Date() };
  }
}
