/* eslint-disable @typescript-eslint/no-unused-vars */

import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class NotificationType {
  @Field((type) => ID)
  id: string;

  @Field({ nullable: true })
  message?: string;

  @Field((type) => Date)
  date: Date;
}

export interface NotificationPayload {
  userId: string;
  senderId: string;
  message?: string;
}
