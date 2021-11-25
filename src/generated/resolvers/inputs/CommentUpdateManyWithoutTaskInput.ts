import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyTaskInputEnvelope } from "./CommentCreateManyTaskInputEnvelope";
import { CommentCreateOrConnectWithoutTaskInput } from "./CommentCreateOrConnectWithoutTaskInput";
import { CommentCreateWithoutTaskInput } from "./CommentCreateWithoutTaskInput";
import { CommentScalarWhereInput } from "./CommentScalarWhereInput";
import { CommentUpdateManyWithWhereWithoutTaskInput } from "./CommentUpdateManyWithWhereWithoutTaskInput";
import { CommentUpdateWithWhereUniqueWithoutTaskInput } from "./CommentUpdateWithWhereUniqueWithoutTaskInput";
import { CommentUpsertWithWhereUniqueWithoutTaskInput } from "./CommentUpsertWithWhereUniqueWithoutTaskInput";
import { CommentWhereUniqueInput } from "./CommentWhereUniqueInput";

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
