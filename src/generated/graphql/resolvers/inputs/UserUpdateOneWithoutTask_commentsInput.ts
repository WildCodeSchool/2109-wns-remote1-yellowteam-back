import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutTask_commentsInput } from "../inputs/UserCreateOrConnectWithoutTask_commentsInput";
import { UserCreateWithoutTask_commentsInput } from "../inputs/UserCreateWithoutTask_commentsInput";
import { UserUpdateWithoutTask_commentsInput } from "../inputs/UserUpdateWithoutTask_commentsInput";
import { UserUpsertWithoutTask_commentsInput } from "../inputs/UserUpsertWithoutTask_commentsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutTask_commentsInput", {
  isAbstract: true
})
export class UserUpdateOneWithoutTask_commentsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutTask_commentsInput, {
    nullable: true
  })
  create?: UserCreateWithoutTask_commentsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutTask_commentsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutTask_commentsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutTask_commentsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutTask_commentsInput | undefined;

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

  @TypeGraphQL.Field(_type => UserUpdateWithoutTask_commentsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutTask_commentsInput | undefined;
}
