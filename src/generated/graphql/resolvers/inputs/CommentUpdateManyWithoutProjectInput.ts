import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyProjectInputEnvelope } from "../inputs/CommentCreateManyProjectInputEnvelope";
import { CommentCreateOrConnectWithoutProjectInput } from "../inputs/CommentCreateOrConnectWithoutProjectInput";
import { CommentCreateWithoutProjectInput } from "../inputs/CommentCreateWithoutProjectInput";
import { CommentScalarWhereInput } from "../inputs/CommentScalarWhereInput";
import { CommentUpdateManyWithWhereWithoutProjectInput } from "../inputs/CommentUpdateManyWithWhereWithoutProjectInput";
import { CommentUpdateWithWhereUniqueWithoutProjectInput } from "../inputs/CommentUpdateWithWhereUniqueWithoutProjectInput";
import { CommentUpsertWithWhereUniqueWithoutProjectInput } from "../inputs/CommentUpsertWithWhereUniqueWithoutProjectInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

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
