import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFilesInput } from "./UserCreateOrConnectWithoutFilesInput";
import { UserCreateWithoutFilesInput } from "./UserCreateWithoutFilesInput";
import { UserUpdateWithoutFilesInput } from "./UserUpdateWithoutFilesInput";
import { UserUpsertWithoutFilesInput } from "./UserUpsertWithoutFilesInput";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutFilesInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutFilesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFilesInput, {
    nullable: true
  })
  create?: UserCreateWithoutFilesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFilesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFilesInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutFilesInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutFilesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutFilesInput, {
    nullable: true
  })
  update?: UserUpdateWithoutFilesInput | undefined;
}
