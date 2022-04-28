import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateWithoutUser_project_commentsInput } from "../inputs/CommentCreateWithoutUser_project_commentsInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentCreateOrConnectWithoutUser_project_commentsInput", {
  isAbstract: true
})
export class CommentCreateOrConnectWithoutUser_project_commentsInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentCreateWithoutUser_project_commentsInput, {
    nullable: false
  })
  create!: CommentCreateWithoutUser_project_commentsInput;
}
