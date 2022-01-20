import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutTask_commentsInput } from "../inputs/UserCreateWithoutTask_commentsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutTask_commentsInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutTask_commentsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutTask_commentsInput, {
    nullable: false
  })
  create!: UserCreateWithoutTask_commentsInput;
}
