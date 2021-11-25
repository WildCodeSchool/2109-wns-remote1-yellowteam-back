import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentScalarWhereInput } from "./CommentScalarWhereInput";
import { CommentUpdateManyMutationInput } from "./CommentUpdateManyMutationInput";

@TypeGraphQL.InputType("CommentUpdateManyWithWhereWithoutUser_task_commentsInput", {
  isAbstract: true
})
export class CommentUpdateManyWithWhereWithoutUser_task_commentsInput {
  @TypeGraphQL.Field(_type => CommentScalarWhereInput, {
    nullable: false
  })
  where!: CommentScalarWhereInput;

  @TypeGraphQL.Field(_type => CommentUpdateManyMutationInput, {
    nullable: false
  })
  data!: CommentUpdateManyMutationInput;
}
