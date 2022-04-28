import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyTaskInputEnvelope } from "../inputs/CommentCreateManyTaskInputEnvelope";
import { CommentCreateOrConnectWithoutTaskInput } from "../inputs/CommentCreateOrConnectWithoutTaskInput";
import { CommentCreateWithoutTaskInput } from "../inputs/CommentCreateWithoutTaskInput";
import { CommentScalarWhereInput } from "../inputs/CommentScalarWhereInput";
import { CommentUpdateManyWithWhereWithoutTaskInput } from "../inputs/CommentUpdateManyWithWhereWithoutTaskInput";
import { CommentUpdateWithWhereUniqueWithoutTaskInput } from "../inputs/CommentUpdateWithWhereUniqueWithoutTaskInput";
import { CommentUpsertWithWhereUniqueWithoutTaskInput } from "../inputs/CommentUpsertWithWhereUniqueWithoutTaskInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpdateManyWithoutTaskInput", {
  isAbstract: true
})
export class CommentUpdateManyWithoutTaskInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutTaskInput], {
    nullable: true
  })
  create?: CommentCreateWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutTaskInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpsertWithWhereUniqueWithoutTaskInput], {
    nullable: true
  })
  upsert?: CommentUpsertWithWhereUniqueWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentCreateManyTaskInputEnvelope, {
    nullable: true
  })
  createMany?: CommentCreateManyTaskInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  set?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  delete?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpdateWithWhereUniqueWithoutTaskInput], {
    nullable: true
  })
  update?: CommentUpdateWithWhereUniqueWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpdateManyWithWhereWithoutTaskInput], {
    nullable: true
  })
  updateMany?: CommentUpdateManyWithWhereWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CommentScalarWhereInput[] | undefined;
}
