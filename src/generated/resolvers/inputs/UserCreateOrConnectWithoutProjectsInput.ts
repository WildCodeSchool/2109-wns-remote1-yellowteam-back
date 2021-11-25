import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutProjectsInput } from "./UserCreateWithoutProjectsInput";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutProjectsInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutProjectsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutProjectsInput, {
    nullable: false
  })
  create!: UserCreateWithoutProjectsInput;
}
