import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutOwned_projectsInput } from "../inputs/UserCreateWithoutOwned_projectsInput";
import { UserUpdateWithoutOwned_projectsInput } from "../inputs/UserUpdateWithoutOwned_projectsInput";

@TypeGraphQL.InputType("UserUpsertWithoutOwned_projectsInput", {
  isAbstract: true
})
export class UserUpsertWithoutOwned_projectsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutOwned_projectsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutOwned_projectsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutOwned_projectsInput, {
    nullable: false
  })
  create!: UserCreateWithoutOwned_projectsInput;
}
