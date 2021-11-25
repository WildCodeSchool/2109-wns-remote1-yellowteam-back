import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyProjectInputEnvelope } from "./CommentCreateManyProjectInputEnvelope";
import { CommentCreateOrConnectWithoutProjectInput } from "./CommentCreateOrConnectWithoutProjectInput";
import { CommentCreateWithoutProjectInput } from "./CommentCreateWithoutProjectInput";
import { CommentScalarWhereInput } from "./CommentScalarWhereInput";
import { CommentUpdateManyWithWhereWithoutProjectInput } from "./CommentUpdateManyWithWhereWithoutProjectInput";
import { CommentUpdateWithWhereUniqueWithoutProjectInput } from "./CommentUpdateWithWhereUniqueWithoutProjectInput";
import { CommentUpsertWithWhereUniqueWithoutProjectInput } from "./CommentUpsertWithWhereUniqueWithoutProjectInput";
import { CommentWhereUniqueInput } from "./CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpdateManyWithoutProjectInput", {
  isAbstract: true
})
export class CommentUpdateManyWithoutProjectInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutProjectInput], {
    nullable: true
  })
  create?: CommentCreateWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutProjectInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpsertWithWhereUniqueWithoutProjectInput], {
    nullable: true
  })
  upsert?: CommentUpsertWithWhereUniqueWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentCreateManyProjectInputEnvelope, {
    nullable: true
  })
  createMany?: CommentCreateManyProjectInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [CommentUpdateWithWhereUniqueWithoutProjectInput], {
    nullable: true
  })
  update?: CommentUpdateWithWhereUniqueWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpdateManyWithWhereWithoutProjectInput], {
    nullable: true
  })
  updateMany?: CommentUpdateManyWithWhereWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CommentScalarWhereInput[] | undefined;
}
