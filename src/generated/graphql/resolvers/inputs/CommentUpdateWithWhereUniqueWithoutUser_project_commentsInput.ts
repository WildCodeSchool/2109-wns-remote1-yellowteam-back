import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentUpdateWithoutUser_project_commentsInput } from "../inputs/CommentUpdateWithoutUser_project_commentsInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpdateWithWhereUniqueWithoutUser_project_commentsInput", {
  isAbstract: true
})
export class CommentUpdateWithWhereUniqueWithoutUser_project_commentsInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentUpdateWithoutUser_project_commentsInput, {
    nullable: false
  })
  data!: CommentUpdateWithoutUser_project_commentsInput;
}
