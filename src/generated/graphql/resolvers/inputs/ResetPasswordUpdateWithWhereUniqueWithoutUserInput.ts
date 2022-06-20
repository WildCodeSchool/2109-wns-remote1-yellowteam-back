import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ResetPasswordUpdateWithoutUserInput } from "../inputs/ResetPasswordUpdateWithoutUserInput";
import { ResetPasswordWhereUniqueInput } from "../inputs/ResetPasswordWhereUniqueInput";

@TypeGraphQL.InputType("ResetPasswordUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class ResetPasswordUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ResetPasswordWhereUniqueInput, {
    nullable: false
  })
  where!: ResetPasswordWhereUniqueInput;

  @TypeGraphQL.Field(_type => ResetPasswordUpdateWithoutUserInput, {
    nullable: false
  })
  data!: ResetPasswordUpdateWithoutUserInput;
}
