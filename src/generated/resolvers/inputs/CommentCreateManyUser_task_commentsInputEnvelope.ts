import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyUser_task_commentsInput } from "./CommentCreateManyUser_task_commentsInput";

@TypeGraphQL.InputType("CommentCreateManyUser_task_commentsInputEnvelope", {
  isAbstract: true
})
export class CommentCreateManyUser_task_commentsInputEnvelope {
  @TypeGraphQL.Field(_type => [CommentCreateManyUser_task_commentsInput], {
    nullable: false
  })
  data!: CommentCreateManyUser_task_commentsInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
