import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CommentUpdateWithoutTaskInput } from "../inputs/CommentUpdateWithoutTaskInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

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
