import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CommentUpdateWithoutUser_task_commentsInput } from "../inputs/CommentUpdateWithoutUser_task_commentsInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpdateWithWhereUniqueWithoutUser_task_commentsInput", {
  isAbstract: true
})
export class CommentUpdateWithWhereUniqueWithoutUser_task_commentsInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentUpdateWithoutUser_task_commentsInput, {
    nullable: false
  })
  data!: CommentUpdateWithoutUser_task_commentsInput;
}
