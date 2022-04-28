import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("CommentCreateManyInput", {
  isAbstract: true
})
export class CommentCreateManyInput {
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
  task_comment_user_id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  project_id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  task_id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  project_comment_user_id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;
}
