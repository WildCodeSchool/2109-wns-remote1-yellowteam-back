import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ResetPasswordCreateWithoutUserInput } from "../inputs/ResetPasswordCreateWithoutUserInput";
import { ResetPasswordUpdateWithoutUserInput } from "../inputs/ResetPasswordUpdateWithoutUserInput";
import { ResetPasswordWhereUniqueInput } from "../inputs/ResetPasswordWhereUniqueInput";

@TypeGraphQL.InputType("ResetPasswordUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class ResetPasswordUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ResetPasswordWhereUniqueInput, {
    nullable: false
  })
  where!: ResetPasswordWhereUniqueInput;

  @TypeGraphQL.Field(_type => ResetPasswordUpdateWithoutUserInput, {
    nullable: false
  })
  update!: ResetPasswordUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => ResetPasswordCreateWithoutUserInput, {
    nullable: false
  })
  create!: ResetPasswordCreateWithoutUserInput;
}
