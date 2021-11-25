import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateOrConnectWithoutUsersInput } from "./ProjectCreateOrConnectWithoutUsersInput";
import { ProjectCreateWithoutUsersInput } from "./ProjectCreateWithoutUsersInput";
import { ProjectScalarWhereInput } from "./ProjectScalarWhereInput";
import { ProjectUpdateManyWithWhereWithoutUsersInput } from "./ProjectUpdateManyWithWhereWithoutUsersInput";
import { ProjectUpdateWithWhereUniqueWithoutUsersInput } from "./ProjectUpdateWithWhereUniqueWithoutUsersInput";
import { ProjectUpsertWithWhereUniqueWithoutUsersInput } from "./ProjectUpsertWithWhereUniqueWithoutUsersInput";
import { ProjectWhereUniqueInput } from "./ProjectWhereUniqueInput";

@TypeGraphQL.InputType("ProjectUpdateManyWithoutUsersInput", {
  isAbstract: true
})
export class ProjectUpdateManyWithoutUsersInput {
  @TypeGraphQL.Field(_type => [ProjectCreateWithoutUsersInput], {
    nullable: true
  })
  create?: ProjectCreateWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectCreateOrConnectWithoutUsersInput], {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectUpsertWithWhereUniqueWithoutUsersInput], {
    nullable: true
  })
  upsert?: ProjectUpsertWithWhereUniqueWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectWhereUniqueInput], {
    nullable: true
  })
  set?: ProjectWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ProjectWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectWhereUniqueInput], {
    nullable: true
  })
  delete?: ProjectWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectWhereUniqueInput], {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectUpdateWithWhereUniqueWithoutUsersInput], {
    nullable: true
  })
  update?: ProjectUpdateWithWhereUniqueWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectUpdateManyWithWhereWithoutUsersInput], {
    nullable: true
  })
  updateMany?: ProjectUpdateManyWithWhereWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProjectScalarWhereInput[] | undefined;
}
