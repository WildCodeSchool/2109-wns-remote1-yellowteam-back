import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutNotifications_sentInput } from "../inputs/UserCreateWithoutNotifications_sentInput";
import { UserUpdateWithoutNotifications_sentInput } from "../inputs/UserUpdateWithoutNotifications_sentInput";

@TypeGraphQL.InputType("UserUpsertWithoutNotifications_sentInput", {
  isAbstract: true
})
export class UserUpsertWithoutNotifications_sentInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutNotifications_sentInput, {
    nullable: false
  })
  update!: UserUpdateWithoutNotifications_sentInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutNotifications_sentInput, {
    nullable: false
  })
  create!: UserCreateWithoutNotifications_sentInput;
}
