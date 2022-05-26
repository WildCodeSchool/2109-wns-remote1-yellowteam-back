import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutResetPasswordInput } from "../inputs/UserCreateOrConnectWithoutResetPasswordInput";
import { UserCreateWithoutResetPasswordInput } from "../inputs/UserCreateWithoutResetPasswordInput";
import { UserUpdateWithoutResetPasswordInput } from "../inputs/UserUpdateWithoutResetPasswordInput";
import { UserUpsertWithoutResetPasswordInput } from "../inputs/UserUpsertWithoutResetPasswordInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutResetPasswordInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutResetPasswordInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutResetPasswordInput, {
    nullable: true
  })
  create?: UserCreateWithoutResetPasswordInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutResetPasswordInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutResetPasswordInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutResetPasswordInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutResetPasswordInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutResetPasswordInput, {
    nullable: true
  })
  update?: UserUpdateWithoutResetPasswordInput | undefined;
}
