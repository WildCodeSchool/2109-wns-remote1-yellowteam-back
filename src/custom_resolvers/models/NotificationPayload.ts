import { Field, InputType } from 'type-graphql';

@InputType()
export class NotificationPayload {
  @Field()
  content: string;
}
