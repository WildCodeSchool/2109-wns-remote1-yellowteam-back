import { Field } from 'type-graphql';
import * as TypeGraphQL from 'type-graphql';

@TypeGraphQL.ObjectType('SearchResult', {
  isAbstract: true,
})
export class SearchResult {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  id: string;

  @Field()
  type: string;
}
