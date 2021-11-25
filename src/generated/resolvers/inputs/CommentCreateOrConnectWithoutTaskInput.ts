import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateWithoutTaskInput } from "./CommentCreateWithoutTaskInput";
import { CommentWhereUniqueInput } from "./CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentCreateOrConnectWithoutTaskInput", {
  isAbstract: true
})
export class CommentCreateOrConnectWithoutTaskInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentCreateWithoutTaskInput, {
    nullable: false
  })
  create!: CommentCreateWithoutTaskInput;
}
