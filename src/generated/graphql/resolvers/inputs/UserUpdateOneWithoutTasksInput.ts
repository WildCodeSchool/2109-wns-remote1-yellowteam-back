import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutTasksInput } from "../inputs/UserCreateOrConnectWithoutTasksInput";
import { UserCreateWithoutTasksInput } from "../inputs/UserCreateWithoutTasksInput";
import { UserUpdateWithoutTasksInput } from "../inputs/UserUpdateWithoutTasksInput";
import { UserUpsertWithoutTasksInput } from "../inputs/UserUpsertWithoutTasksInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutTasksInput", {
  isAbstract: true
})
export class UserUpdateOneWithoutTasksInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutTasksInput, {
    nullable: true
  })
  create?: UserCreateWithoutTasksInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutTasksInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutTasksInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutTasksInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutTasksInput | undefined;

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

  @TypeGraphQL.Field(_type => UserUpdateWithoutTasksInput, {
    nullable: true
  })
  update?: UserUpdateWithoutTasksInput | undefined;
}
