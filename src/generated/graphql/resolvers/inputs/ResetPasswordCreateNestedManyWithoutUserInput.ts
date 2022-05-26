import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ResetPasswordCreateManyUserInputEnvelope } from "../inputs/ResetPasswordCreateManyUserInputEnvelope";
import { ResetPasswordCreateOrConnectWithoutUserInput } from "../inputs/ResetPasswordCreateOrConnectWithoutUserInput";
import { ResetPasswordCreateWithoutUserInput } from "../inputs/ResetPasswordCreateWithoutUserInput";
import { ResetPasswordWhereUniqueInput } from "../inputs/ResetPasswordWhereUniqueInput";

@TypeGraphQL.InputType("ResetPasswordCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class ResetPasswordCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [ResetPasswordCreateWithoutUserInput], {
    nullable: true
  })
  create?: ResetPasswordCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ResetPasswordCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ResetPasswordCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ResetPasswordCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ResetPasswordCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ResetPasswordWhereUniqueInput], {
    nullable: true
  })
  connect?: ResetPasswordWhereUniqueInput[] | undefined;
}
