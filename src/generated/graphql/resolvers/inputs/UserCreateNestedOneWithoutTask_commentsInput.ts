import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutTask_commentsInput } from "../inputs/UserCreateOrConnectWithoutTask_commentsInput";
import { UserCreateWithoutTask_commentsInput } from "../inputs/UserCreateWithoutTask_commentsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutTask_commentsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutTask_commentsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutTask_commentsInput, {
    nullable: true
  })
  create?: UserCreateWithoutTask_commentsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutTask_commentsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutTask_commentsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
