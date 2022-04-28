import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutInvitationsInput } from "../inputs/UserCreateWithoutInvitationsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutInvitationsInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutInvitationsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutInvitationsInput, {
    nullable: false
  })
  create!: UserCreateWithoutInvitationsInput;
}
