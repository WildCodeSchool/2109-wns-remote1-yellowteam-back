import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutResetPasswordInput } from "../inputs/UserCreateWithoutResetPasswordInput";
import { UserUpdateWithoutResetPasswordInput } from "../inputs/UserUpdateWithoutResetPasswordInput";

@TypeGraphQL.InputType("UserUpsertWithoutResetPasswordInput", {
  isAbstract: true
})
export class UserUpsertWithoutResetPasswordInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutResetPasswordInput, {
    nullable: false
  })
  update!: UserUpdateWithoutResetPasswordInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutResetPasswordInput, {
    nullable: false
  })
  create!: UserCreateWithoutResetPasswordInput;
}
