import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentUpdateWithoutProjectInput } from "../inputs/CommentUpdateWithoutProjectInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpdateWithWhereUniqueWithoutProjectInput", {
  isAbstract: true
})
export class CommentUpdateWithWhereUniqueWithoutProjectInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentUpdateWithoutProjectInput, {
    nullable: false
  })
  data!: CommentUpdateWithoutProjectInput;
}
