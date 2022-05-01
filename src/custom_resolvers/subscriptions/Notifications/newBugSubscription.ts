/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-plusplus */
import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import * as TypeGraphQL from 'type-graphql';
import { PubSubEngine } from 'graphql-subscriptions';
import {
  Resolver,
  Query,
  Mutation,
  Arg,
  PubSub,
  Publisher,
  Subscription,
  Root,
  ResolverFilterData,
  Ctx,
} from 'type-graphql';
import { User } from '../../../generated/graphql';
import {
  NotificationType,
  NotificationPayload,
} from '../../models/notification';

@Resolver((_of) => NotificationType)
export class SubscribtionsResolver {
  private autoIncrement = 0;

  @Query((returns) => Date)
  currentDate(): Date {
    return new Date();
  }

  @Mutation((returns) => Boolean)
  async pubSubMutation(
    @PubSub() pubSub: PubSubEngine,
    @Arg('message', { nullable: true }) message?: string
  ): Promise<boolean> {
    const payload: NotificationPayload = {
      senderId: '1',
      userId: '1',
      message,
    };
    await pubSub.publish('NOTIFICATIONS', payload);
    return true;
  }

  @Mutation((returns) => Boolean)
  async publisherMutation(
    @PubSub('NOTIFICATIONS') publish: Publisher<NotificationPayload>,
    @Arg('message', { nullable: true }) message?: string
  ): Promise<boolean> {
    await publish({
      senderId: '1',
      userId: '1',
      message,
    });
    return true;
  }

  @Subscription({
    topics: 'NOTIFICATIONS',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filter: ({ context }: any) => true,
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
      id: 1,
      date: new Date(),
      message,
    };
  }

  @Subscription((returns) => NotificationType, {
    topics: 'NOTIFICATIONS',
    filter: ({ payload }: ResolverFilterData<NotificationPayload>) =>
      +payload.senderId % 2 === 0,
  })
  subscriptionWithFilter(
    @Root() { senderId, userId, message }: NotificationPayload
  ): NotificationType {
    const newNotification: NotificationType = {
      id: +userId,
      message,
      date: new Date(),
    };
    return newNotification;
  }

  // dynamic topic

  @Mutation((returns) => Boolean)
  async pubSubMutationToDynamicTopic(
    @PubSub() pubSub: PubSubEngine,
    @Arg('topic') topic: string,
    @Arg('message', { nullable: true }) message?: string
  ): Promise<boolean> {
    const payload: NotificationPayload = {
      userId: '1',
      message,
      senderId: '1',
    };
    await pubSub.publish(topic, payload);
    return true;
  }

  @Subscription({
    topics: ({ args }) => args.topic,
  })
  subscriptionWithFilterToDynamicTopic(
    @Arg('topic') topic: string,
    @Root() { senderId, userId, message }: NotificationPayload
  ): NotificationType {
    return { id: +userId, message, date: new Date() };
  }
}
