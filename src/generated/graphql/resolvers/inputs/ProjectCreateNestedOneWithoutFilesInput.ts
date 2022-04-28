import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateOrConnectWithoutFilesInput } from "../inputs/ProjectCreateOrConnectWithoutFilesInput";
import { ProjectCreateWithoutFilesInput } from "../inputs/ProjectCreateWithoutFilesInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType("ProjectCreateNestedOneWithoutFilesInput", {
  isAbstract: true
})
export class ProjectCreateNestedOneWithoutFilesInput {
  @TypeGraphQL.Field(_type => ProjectCreateWithoutFilesInput, {
    nullable: true
  })
  create?: ProjectCreateWithoutFilesInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateOrConnectWithoutFilesInput, {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutFilesInput | undefined;

  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput | undefined;
}
