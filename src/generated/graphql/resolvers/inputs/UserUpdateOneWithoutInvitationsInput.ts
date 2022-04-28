import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutInvitationsInput } from "../inputs/UserCreateOrConnectWithoutInvitationsInput";
import { UserCreateWithoutInvitationsInput } from "../inputs/UserCreateWithoutInvitationsInput";
import { UserUpdateWithoutInvitationsInput } from "../inputs/UserUpdateWithoutInvitationsInput";
import { UserUpsertWithoutInvitationsInput } from "../inputs/UserUpsertWithoutInvitationsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutInvitationsInput", {
  isAbstract: true
})
export class UserUpdateOneWithoutInvitationsInput {
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

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutInvitationsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutInvitationsInput | undefined;
}
