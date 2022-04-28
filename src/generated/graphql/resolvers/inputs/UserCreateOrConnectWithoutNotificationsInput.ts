import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutNotificationsInput } from "../inputs/UserCreateWithoutNotificationsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutNotificationsInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutNotificationsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutNotificationsInput, {
    nullable: false
  })
  create!: UserCreateWithoutNotificationsInput;
}
