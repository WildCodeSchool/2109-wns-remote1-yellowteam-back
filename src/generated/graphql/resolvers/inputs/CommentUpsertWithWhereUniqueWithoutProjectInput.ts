import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateWithoutProjectInput } from "../inputs/CommentCreateWithoutProjectInput";
import { CommentUpdateWithoutProjectInput } from "../inputs/CommentUpdateWithoutProjectInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpsertWithWhereUniqueWithoutProjectInput", {
  isAbstract: true
})
export class CommentUpsertWithWhereUniqueWithoutProjectInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentUpdateWithoutProjectInput, {
    nullable: false
  })
  update!: CommentUpdateWithoutProjectInput;

  @TypeGraphQL.Field(_type => CommentCreateWithoutProjectInput, {
    nullable: false
  })
  create!: CommentCreateWithoutProjectInput;
}
