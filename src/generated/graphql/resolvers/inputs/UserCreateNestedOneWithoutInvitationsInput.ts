import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutInvitationsInput } from "../inputs/UserCreateOrConnectWithoutInvitationsInput";
import { UserCreateWithoutInvitationsInput } from "../inputs/UserCreateWithoutInvitationsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutInvitationsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutInvitationsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutInvitationsInput, {
    nullable: true
  })
  create?: UserCreateWithoutInvitationsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutInvitationsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutInvitationsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
