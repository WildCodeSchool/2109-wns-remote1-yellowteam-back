import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateOrConnectWithoutFilesInput } from "./ProjectCreateOrConnectWithoutFilesInput";
import { ProjectCreateWithoutFilesInput } from "./ProjectCreateWithoutFilesInput";
import { ProjectUpdateWithoutFilesInput } from "./ProjectUpdateWithoutFilesInput";
import { ProjectUpsertWithoutFilesInput } from "./ProjectUpsertWithoutFilesInput";
import { ProjectWhereUniqueInput } from "./ProjectWhereUniqueInput";

@TypeGraphQL.InputType("ProjectUpdateOneRequiredWithoutFilesInput", {
  isAbstract: true
})
export class ProjectUpdateOneRequiredWithoutFilesInput {
  @TypeGraphQL.Field(_type => ProjectCreateWithoutFilesInput, {
    nullable: true
  })
  create?: ProjectCreateWithoutFilesInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateOrConnectWithoutFilesInput, {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutFilesInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpsertWithoutFilesInput, {
    nullable: true
  })
  upsert?: ProjectUpsertWithoutFilesInput | undefined;

  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpdateWithoutFilesInput, {
    nullable: true
  })
  update?: ProjectUpdateWithoutFilesInput | undefined;
}
