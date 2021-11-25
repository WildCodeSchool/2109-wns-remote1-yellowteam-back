import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutNotificationsInput } from "./UserCreateOrConnectWithoutNotificationsInput";
import { UserCreateWithoutNotificationsInput } from "./UserCreateWithoutNotificationsInput";
import { UserUpdateWithoutNotificationsInput } from "./UserUpdateWithoutNotificationsInput";
import { UserUpsertWithoutNotificationsInput } from "./UserUpsertWithoutNotificationsInput";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutNotificationsInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutNotificationsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutNotificationsInput, {
    nullable: true
  })
  create?: UserCreateWithoutNotificationsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutNotificationsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutNotificationsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutNotificationsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutNotificationsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutNotificationsInput | undefined;
}
