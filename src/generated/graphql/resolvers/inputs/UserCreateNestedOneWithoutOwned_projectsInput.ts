import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutOwned_projectsInput } from "../inputs/UserCreateOrConnectWithoutOwned_projectsInput";
import { UserCreateWithoutOwned_projectsInput } from "../inputs/UserCreateWithoutOwned_projectsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutOwned_projectsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutOwned_projectsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutOwned_projectsInput, {
    nullable: true
  })
  create?: UserCreateWithoutOwned_projectsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutOwned_projectsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutOwned_projectsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
