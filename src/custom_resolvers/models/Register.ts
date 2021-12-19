import { Field, InputType } from 'type-graphql';

@InputType({ description: 'Data needed to register a new user' })
export declare class RegisterBody {
  @Field()
  first_name: string;

  @Field()
  last_name: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
