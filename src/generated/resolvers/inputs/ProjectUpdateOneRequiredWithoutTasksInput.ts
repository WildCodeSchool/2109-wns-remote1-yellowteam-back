import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateOrConnectWithoutTasksInput } from "./ProjectCreateOrConnectWithoutTasksInput";
import { ProjectCreateWithoutTasksInput } from "./ProjectCreateWithoutTasksInput";
import { ProjectUpdateWithoutTasksInput } from "./ProjectUpdateWithoutTasksInput";
import { ProjectUpsertWithoutTasksInput } from "./ProjectUpsertWithoutTasksInput";
import { ProjectWhereUniqueInput } from "./ProjectWhereUniqueInput";

@TypeGraphQL.InputType("ProjectUpdateOneRequiredWithoutTasksInput", {
  isAbstract: true
})
export class ProjectUpdateOneRequiredWithoutTasksInput {
  @TypeGraphQL.Field(_type => ProjectCreateWithoutTasksInput, {
    nullable: true
  })
  create?: ProjectCreateWithoutTasksInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateOrConnectWithoutTasksInput, {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutTasksInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpsertWithoutTasksInput, {
    nullable: true
  })
  upsert?: ProjectUpsertWithoutTasksInput | undefined;

  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpdateWithoutTasksInput, {
    nullable: true
  })
  update?: ProjectUpdateWithoutTasksInput | undefined;
}
