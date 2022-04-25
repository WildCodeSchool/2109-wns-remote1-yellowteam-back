import { Field, InputType } from 'type-graphql';

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

  @Field()
  secret_key: string;
}
