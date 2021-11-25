import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("CommentCreateManyTaskInput", {
  isAbstract: true
})
export class CommentCreateManyTaskInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  is_disabled!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  content!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  user_id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  project_id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userId?: string | undefined;
}
