import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutResetPasswordInput } from "../inputs/UserCreateOrConnectWithoutResetPasswordInput";
import { UserCreateWithoutResetPasswordInput } from "../inputs/UserCreateWithoutResetPasswordInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutResetPasswordInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutResetPasswordInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutResetPasswordInput, {
    nullable: true
  })
  create?: UserCreateWithoutResetPasswordInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutResetPasswordInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutResetPasswordInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
