import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutTaskInput } from "../inputs/UserCreateOrConnectWithoutTaskInput";
import { UserCreateWithoutTaskInput } from "../inputs/UserCreateWithoutTaskInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutTaskInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutTaskInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutTaskInput, {
    nullable: true
  })
  create?: UserCreateWithoutTaskInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutTaskInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutTaskInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
