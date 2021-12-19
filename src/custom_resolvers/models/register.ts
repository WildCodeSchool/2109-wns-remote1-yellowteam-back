import { User } from '@prisma/client';
import { Field, InputType } from 'type-graphql';

export type UserWithoutCountAndPassword = Omit<User, 'password'>;

@InputType()
export class RegisterInput {
  @Field()
  first_name: string;

  @Field()
  last_name: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
