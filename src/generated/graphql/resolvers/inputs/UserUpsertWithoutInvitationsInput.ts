import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutInvitationsInput } from "../inputs/UserCreateWithoutInvitationsInput";
import { UserUpdateWithoutInvitationsInput } from "../inputs/UserUpdateWithoutInvitationsInput";

@TypeGraphQL.InputType("UserUpsertWithoutInvitationsInput", {
  isAbstract: true
})
export class UserUpsertWithoutInvitationsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutInvitationsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutInvitationsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutInvitationsInput, {
    nullable: false
  })
  create!: UserCreateWithoutInvitationsInput;
}
