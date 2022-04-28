import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutProjectsInput } from "../inputs/UserCreateOrConnectWithoutProjectsInput";
import { UserCreateWithoutProjectsInput } from "../inputs/UserCreateWithoutProjectsInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutProjectsInput } from "../inputs/UserUpdateManyWithWhereWithoutProjectsInput";
import { UserUpdateWithWhereUniqueWithoutProjectsInput } from "../inputs/UserUpdateWithWhereUniqueWithoutProjectsInput";
import { UserUpsertWithWhereUniqueWithoutProjectsInput } from "../inputs/UserUpsertWithWhereUniqueWithoutProjectsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateManyWithoutProjectsInput", {
  isAbstract: true
})
export class UserUpdateManyWithoutProjectsInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutProjectsInput], {
    nullable: true
  })
  create?: UserCreateWithoutProjectsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutProjectsInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutProjectsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutProjectsInput], {
    nullable: true
  })
  upsert?: UserUpsertWithWhereUniqueWithoutProjectsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  set?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  delete?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutProjectsInput], {
    nullable: true
  })
  update?: UserUpdateWithWhereUniqueWithoutProjectsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutProjectsInput], {
    nullable: true
  })
  updateMany?: UserUpdateManyWithWhereWithoutProjectsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserScalarWhereInput[] | undefined;
}
