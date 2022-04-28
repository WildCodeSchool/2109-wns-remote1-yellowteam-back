import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyTaskInputEnvelope } from "../inputs/CommentCreateManyTaskInputEnvelope";
import { CommentCreateOrConnectWithoutTaskInput } from "../inputs/CommentCreateOrConnectWithoutTaskInput";
import { CommentCreateWithoutTaskInput } from "../inputs/CommentCreateWithoutTaskInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentCreateNestedManyWithoutTaskInput", {
  isAbstract: true
})
export class CommentCreateNestedManyWithoutTaskInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutTaskInput], {
    nullable: true
  })
  create?: CommentCreateWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutTaskInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentCreateManyTaskInputEnvelope, {
    nullable: true
  })
  createMany?: CommentCreateManyTaskInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentWhereUniqueInput[] | undefined;
}
