import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutProject_commentsInput } from "../inputs/UserCreateWithoutProject_commentsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutProject_commentsInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutProject_commentsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutProject_commentsInput, {
    nullable: false
  })
  create!: UserCreateWithoutProject_commentsInput;
}
