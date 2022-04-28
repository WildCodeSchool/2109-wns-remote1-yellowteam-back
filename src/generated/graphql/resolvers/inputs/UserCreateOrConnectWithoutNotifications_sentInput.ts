import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutNotifications_sentInput } from "../inputs/UserCreateWithoutNotifications_sentInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutNotifications_sentInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutNotifications_sentInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutNotifications_sentInput, {
    nullable: false
  })
  create!: UserCreateWithoutNotifications_sentInput;
}
