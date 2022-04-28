import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutOwned_projectsInput } from "../inputs/UserCreateOrConnectWithoutOwned_projectsInput";
import { UserCreateWithoutOwned_projectsInput } from "../inputs/UserCreateWithoutOwned_projectsInput";
import { UserUpdateWithoutOwned_projectsInput } from "../inputs/UserUpdateWithoutOwned_projectsInput";
import { UserUpsertWithoutOwned_projectsInput } from "../inputs/UserUpsertWithoutOwned_projectsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutOwned_projectsInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutOwned_projectsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutOwned_projectsInput, {
    nullable: true
  })
  create?: UserCreateWithoutOwned_projectsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutOwned_projectsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutOwned_projectsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutOwned_projectsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutOwned_projectsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutOwned_projectsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutOwned_projectsInput | undefined;
}
