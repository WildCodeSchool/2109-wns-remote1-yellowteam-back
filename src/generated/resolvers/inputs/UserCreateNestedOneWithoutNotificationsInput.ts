import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutNotificationsInput } from "./UserCreateOrConnectWithoutNotificationsInput";
import { UserCreateWithoutNotificationsInput } from "./UserCreateWithoutNotificationsInput";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutNotificationsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutNotificationsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutNotificationsInput, {
    nullable: true
  })
  create?: UserCreateWithoutNotificationsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutNotificationsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
