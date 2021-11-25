import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateWithoutUser_project_commentsInput } from "./CommentCreateWithoutUser_project_commentsInput";
import { CommentUpdateWithoutUser_project_commentsInput } from "./CommentUpdateWithoutUser_project_commentsInput";
import { CommentWhereUniqueInput } from "./CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpsertWithWhereUniqueWithoutUser_project_commentsInput", {
  isAbstract: true
})
export class CommentUpsertWithWhereUniqueWithoutUser_project_commentsInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentUpdateWithoutUser_project_commentsInput, {
    nullable: false
  })
  update!: CommentUpdateWithoutUser_project_commentsInput;

  @TypeGraphQL.Field(_type => CommentCreateWithoutUser_project_commentsInput, {
    nullable: false
  })
  create!: CommentCreateWithoutUser_project_commentsInput;
}
