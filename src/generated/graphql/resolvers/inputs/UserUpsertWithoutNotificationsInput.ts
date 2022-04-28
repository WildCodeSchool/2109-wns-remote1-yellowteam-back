import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutNotificationsInput } from "../inputs/UserCreateWithoutNotificationsInput";
import { UserUpdateWithoutNotificationsInput } from "../inputs/UserUpdateWithoutNotificationsInput";

@TypeGraphQL.InputType("UserUpsertWithoutNotificationsInput", {
  isAbstract: true
})
export class UserUpsertWithoutNotificationsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutNotificationsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutNotificationsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutNotificationsInput, {
    nullable: false
  })
  create!: UserCreateWithoutNotificationsInput;
}
