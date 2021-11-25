import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutProjectsInput } from "./UserCreateOrConnectWithoutProjectsInput";
import { UserCreateWithoutProjectsInput } from "./UserCreateWithoutProjectsInput";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedManyWithoutProjectsInput", {
  isAbstract: true
})
export class UserCreateNestedManyWithoutProjectsInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutProjectsInput], {
    nullable: true
  })
  create?: UserCreateWithoutProjectsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutProjectsInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutProjectsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;
}
