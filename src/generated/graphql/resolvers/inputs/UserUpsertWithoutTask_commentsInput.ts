import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutTask_commentsInput } from "../inputs/UserCreateWithoutTask_commentsInput";
import { UserUpdateWithoutTask_commentsInput } from "../inputs/UserUpdateWithoutTask_commentsInput";

@TypeGraphQL.InputType("UserUpsertWithoutTask_commentsInput", {
  isAbstract: true
})
export class UserUpsertWithoutTask_commentsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutTask_commentsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutTask_commentsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutTask_commentsInput, {
    nullable: false
  })
  create!: UserCreateWithoutTask_commentsInput;
}
