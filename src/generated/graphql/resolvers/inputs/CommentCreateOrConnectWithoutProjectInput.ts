import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateWithoutProjectInput } from "../inputs/CommentCreateWithoutProjectInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentCreateOrConnectWithoutProjectInput", {
  isAbstract: true
})
export class CommentCreateOrConnectWithoutProjectInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentCreateWithoutProjectInput, {
    nullable: false
  })
  create!: CommentCreateWithoutProjectInput;
}
