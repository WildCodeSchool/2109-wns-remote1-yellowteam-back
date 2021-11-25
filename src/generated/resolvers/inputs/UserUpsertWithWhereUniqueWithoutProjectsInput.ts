import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutProjectsInput } from "./UserCreateWithoutProjectsInput";
import { UserUpdateWithoutProjectsInput } from "./UserUpdateWithoutProjectsInput";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpsertWithWhereUniqueWithoutProjectsInput", {
  isAbstract: true
})
export class UserUpsertWithWhereUniqueWithoutProjectsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutProjectsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutProjectsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutProjectsInput, {
    nullable: false
  })
  create!: UserCreateWithoutProjectsInput;
}
