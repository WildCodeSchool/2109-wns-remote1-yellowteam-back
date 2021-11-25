import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutInvitationsInput } from "./UserCreateOrConnectWithoutInvitationsInput";
import { UserCreateWithoutInvitationsInput } from "./UserCreateWithoutInvitationsInput";
import { UserUpdateWithoutInvitationsInput } from "./UserUpdateWithoutInvitationsInput";
import { UserUpsertWithoutInvitationsInput } from "./UserUpsertWithoutInvitationsInput";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutInvitationsInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutInvitationsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutInvitationsInput, {
    nullable: true
  })
  create?: UserCreateWithoutInvitationsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutInvitationsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutInvitationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutInvitationsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutInvitationsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutInvitationsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutInvitationsInput | undefined;
}
