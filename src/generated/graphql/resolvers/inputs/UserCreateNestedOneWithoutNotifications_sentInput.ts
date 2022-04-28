import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutNotifications_sentInput } from "../inputs/UserCreateOrConnectWithoutNotifications_sentInput";
import { UserCreateWithoutNotifications_sentInput } from "../inputs/UserCreateWithoutNotifications_sentInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutNotifications_sentInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutNotifications_sentInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutNotifications_sentInput, {
    nullable: true
  })
  create?: UserCreateWithoutNotifications_sentInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutNotifications_sentInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutNotifications_sentInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
