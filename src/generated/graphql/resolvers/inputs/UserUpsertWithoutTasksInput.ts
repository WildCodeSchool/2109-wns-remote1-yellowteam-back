import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutTasksInput } from "../inputs/UserCreateWithoutTasksInput";
import { UserUpdateWithoutTasksInput } from "../inputs/UserUpdateWithoutTasksInput";

@TypeGraphQL.InputType("UserUpsertWithoutTasksInput", {
  isAbstract: true
})
export class UserUpsertWithoutTasksInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutTasksInput, {
    nullable: false
  })
  update!: UserUpdateWithoutTasksInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutTasksInput, {
    nullable: false
  })
  create!: UserCreateWithoutTasksInput;
}
