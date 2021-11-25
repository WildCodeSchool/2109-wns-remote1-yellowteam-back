import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateWithoutUser_task_commentsInput } from "./CommentCreateWithoutUser_task_commentsInput";
import { CommentUpdateWithoutUser_task_commentsInput } from "./CommentUpdateWithoutUser_task_commentsInput";
import { CommentWhereUniqueInput } from "./CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpsertWithWhereUniqueWithoutUser_task_commentsInput", {
  isAbstract: true
})
export class CommentUpsertWithWhereUniqueWithoutUser_task_commentsInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentUpdateWithoutUser_task_commentsInput, {
    nullable: false
  })
  update!: CommentUpdateWithoutUser_task_commentsInput;

  @TypeGraphQL.Field(_type => CommentCreateWithoutUser_task_commentsInput, {
    nullable: false
  })
  create!: CommentCreateWithoutUser_task_commentsInput;
}
