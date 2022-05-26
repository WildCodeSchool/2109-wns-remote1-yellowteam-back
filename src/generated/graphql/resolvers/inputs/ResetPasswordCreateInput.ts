import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutResetPasswordInput } from "../inputs/UserCreateNestedOneWithoutResetPasswordInput";

@TypeGraphQL.InputType("ResetPasswordCreateInput", {
  isAbstract: true
})
export class ResetPasswordCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;
}
