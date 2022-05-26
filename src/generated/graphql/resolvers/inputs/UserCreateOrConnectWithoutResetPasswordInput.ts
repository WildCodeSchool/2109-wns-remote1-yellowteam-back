import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutResetPasswordInput } from "../inputs/UserCreateWithoutResetPasswordInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutResetPasswordInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutResetPasswordInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutResetPasswordInput, {
    nullable: false
  })
  create!: UserCreateWithoutResetPasswordInput;
}
