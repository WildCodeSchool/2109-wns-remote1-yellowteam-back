import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ResetPasswordCreateManyUserInputEnvelope } from "../inputs/ResetPasswordCreateManyUserInputEnvelope";
import { ResetPasswordCreateOrConnectWithoutUserInput } from "../inputs/ResetPasswordCreateOrConnectWithoutUserInput";
import { ResetPasswordCreateWithoutUserInput } from "../inputs/ResetPasswordCreateWithoutUserInput";
import { ResetPasswordScalarWhereInput } from "../inputs/ResetPasswordScalarWhereInput";
import { ResetPasswordUpdateManyWithWhereWithoutUserInput } from "../inputs/ResetPasswordUpdateManyWithWhereWithoutUserInput";
import { ResetPasswordUpdateWithWhereUniqueWithoutUserInput } from "../inputs/ResetPasswordUpdateWithWhereUniqueWithoutUserInput";
import { ResetPasswordUpsertWithWhereUniqueWithoutUserInput } from "../inputs/ResetPasswordUpsertWithWhereUniqueWithoutUserInput";
import { ResetPasswordWhereUniqueInput } from "../inputs/ResetPasswordWhereUniqueInput";

@TypeGraphQL.InputType("ResetPasswordUpdateManyWithoutUserInput", {
  isAbstract: true
})
export class ResetPasswordUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [ResetPasswordCreateWithoutUserInput], {
    nullable: true
  })
  create?: ResetPasswordCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ResetPasswordCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ResetPasswordCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ResetPasswordUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: ResetPasswordUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ResetPasswordCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ResetPasswordCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ResetPasswordWhereUniqueInput], {
    nullable: true
  })
  set?: ResetPasswordWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ResetPasswordWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ResetPasswordWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ResetPasswordWhereUniqueInput], {
    nullable: true
  })
  delete?: ResetPasswordWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ResetPasswordWhereUniqueInput], {
    nullable: true
  })
  connect?: ResetPasswordWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ResetPasswordUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: ResetPasswordUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ResetPasswordUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: ResetPasswordUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ResetPasswordScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ResetPasswordScalarWhereInput[] | undefined;
}
