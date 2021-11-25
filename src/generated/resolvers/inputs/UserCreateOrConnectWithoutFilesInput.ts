import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutFilesInput } from "./UserCreateWithoutFilesInput";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutFilesInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutFilesInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutFilesInput, {
    nullable: false
  })
  create!: UserCreateWithoutFilesInput;
}
