import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ResetPasswordCreateWithoutUserInput } from "../inputs/ResetPasswordCreateWithoutUserInput";
import { ResetPasswordWhereUniqueInput } from "../inputs/ResetPasswordWhereUniqueInput";

@TypeGraphQL.InputType("ResetPasswordCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class ResetPasswordCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => ResetPasswordWhereUniqueInput, {
    nullable: false
  })
  where!: ResetPasswordWhereUniqueInput;

  @TypeGraphQL.Field(_type => ResetPasswordCreateWithoutUserInput, {
    nullable: false
  })
  create!: ResetPasswordCreateWithoutUserInput;
}
