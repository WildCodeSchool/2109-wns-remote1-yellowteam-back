import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutTaskInput } from "../inputs/UserCreateOrConnectWithoutTaskInput";
import { UserCreateWithoutTaskInput } from "../inputs/UserCreateWithoutTaskInput";
import { UserUpdateWithoutTaskInput } from "../inputs/UserUpdateWithoutTaskInput";
import { UserUpsertWithoutTaskInput } from "../inputs/UserUpsertWithoutTaskInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutTaskInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutTaskInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutTaskInput, {
    nullable: true
  })
  create?: UserCreateWithoutTaskInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutTaskInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutTaskInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutTaskInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutTaskInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutTaskInput, {
    nullable: true
  })
  update?: UserUpdateWithoutTaskInput | undefined;
}
