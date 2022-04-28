import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutProject_commentsInput } from "../inputs/UserCreateOrConnectWithoutProject_commentsInput";
import { UserCreateWithoutProject_commentsInput } from "../inputs/UserCreateWithoutProject_commentsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutProject_commentsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutProject_commentsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutProject_commentsInput, {
    nullable: true
  })
  create?: UserCreateWithoutProject_commentsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutProject_commentsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutProject_commentsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
