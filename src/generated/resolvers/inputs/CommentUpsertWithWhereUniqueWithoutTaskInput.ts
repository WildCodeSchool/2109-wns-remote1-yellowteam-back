import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateWithoutTaskInput } from "./CommentCreateWithoutTaskInput";
import { CommentUpdateWithoutTaskInput } from "./CommentUpdateWithoutTaskInput";
import { CommentWhereUniqueInput } from "./CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpsertWithWhereUniqueWithoutTaskInput", {
  isAbstract: true
})
export class CommentUpsertWithWhereUniqueWithoutTaskInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentUpdateWithoutTaskInput, {
    nullable: false
  })
  update!: CommentUpdateWithoutTaskInput;

  @TypeGraphQL.Field(_type => CommentCreateWithoutTaskInput, {
    nullable: false
  })
  create!: CommentCreateWithoutTaskInput;
}
