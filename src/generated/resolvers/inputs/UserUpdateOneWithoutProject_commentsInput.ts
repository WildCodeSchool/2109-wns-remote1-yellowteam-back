import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutProject_commentsInput } from "./UserCreateOrConnectWithoutProject_commentsInput";
import { UserCreateWithoutProject_commentsInput } from "./UserCreateWithoutProject_commentsInput";
import { UserUpdateWithoutProject_commentsInput } from "./UserUpdateWithoutProject_commentsInput";
import { UserUpsertWithoutProject_commentsInput } from "./UserUpsertWithoutProject_commentsInput";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutProject_commentsInput", {
  isAbstract: true
})
export class UserUpdateOneWithoutProject_commentsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutProject_commentsInput, {
    nullable: true
  })
  create?: UserCreateWithoutProject_commentsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutProject_commentsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutProject_commentsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutProject_commentsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutProject_commentsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutProject_commentsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutProject_commentsInput | undefined;
}
