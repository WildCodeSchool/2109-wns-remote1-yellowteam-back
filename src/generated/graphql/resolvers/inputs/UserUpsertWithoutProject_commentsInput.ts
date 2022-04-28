import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutProject_commentsInput } from "../inputs/UserCreateWithoutProject_commentsInput";
import { UserUpdateWithoutProject_commentsInput } from "../inputs/UserUpdateWithoutProject_commentsInput";

@TypeGraphQL.InputType("UserUpsertWithoutProject_commentsInput", {
  isAbstract: true
})
export class UserUpsertWithoutProject_commentsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutProject_commentsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutProject_commentsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutProject_commentsInput, {
    nullable: false
  })
  create!: UserCreateWithoutProject_commentsInput;
}
