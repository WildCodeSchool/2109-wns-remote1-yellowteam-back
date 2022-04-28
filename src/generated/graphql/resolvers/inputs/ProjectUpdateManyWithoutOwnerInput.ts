import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateManyOwnerInputEnvelope } from "../inputs/ProjectCreateManyOwnerInputEnvelope";
import { ProjectCreateOrConnectWithoutOwnerInput } from "../inputs/ProjectCreateOrConnectWithoutOwnerInput";
import { ProjectCreateWithoutOwnerInput } from "../inputs/ProjectCreateWithoutOwnerInput";
import { ProjectScalarWhereInput } from "../inputs/ProjectScalarWhereInput";
import { ProjectUpdateManyWithWhereWithoutOwnerInput } from "../inputs/ProjectUpdateManyWithWhereWithoutOwnerInput";
import { ProjectUpdateWithWhereUniqueWithoutOwnerInput } from "../inputs/ProjectUpdateWithWhereUniqueWithoutOwnerInput";
import { ProjectUpsertWithWhereUniqueWithoutOwnerInput } from "../inputs/ProjectUpsertWithWhereUniqueWithoutOwnerInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType("ProjectUpdateManyWithoutOwnerInput", {
  isAbstract: true
})
export class ProjectUpdateManyWithoutOwnerInput {
  @TypeGraphQL.Field(_type => [ProjectCreateWithoutOwnerInput], {
    nullable: true
  })
  create?: ProjectCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectCreateOrConnectWithoutOwnerInput], {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectUpsertWithWhereUniqueWithoutOwnerInput], {
    nullable: true
  })
  upsert?: ProjectUpsertWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateManyOwnerInputEnvelope, {
    nullable: true
  })
  createMany?: ProjectCreateManyOwnerInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ProjectUpdateWithWhereUniqueWithoutOwnerInput], {
    nullable: true
  })
  update?: ProjectUpdateWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectUpdateManyWithWhereWithoutOwnerInput], {
    nullable: true
  })
  updateMany?: ProjectUpdateManyWithWhereWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProjectScalarWhereInput[] | undefined;
}
