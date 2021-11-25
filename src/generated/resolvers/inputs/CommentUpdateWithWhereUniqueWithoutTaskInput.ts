import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentUpdateWithoutTaskInput } from "./CommentUpdateWithoutTaskInput";
import { CommentWhereUniqueInput } from "./CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpdateWithWhereUniqueWithoutTaskInput", {
  isAbstract: true
})
export class CommentUpdateWithWhereUniqueWithoutTaskInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentUpdateWithoutTaskInput, {
    nullable: false
  })
  data!: CommentUpdateWithoutTaskInput;
}
