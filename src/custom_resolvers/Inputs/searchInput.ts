import { Field, InputType } from 'type-graphql';

@InputType()
export class SearchInput {
  @Field()
  searchValue: string;
}
