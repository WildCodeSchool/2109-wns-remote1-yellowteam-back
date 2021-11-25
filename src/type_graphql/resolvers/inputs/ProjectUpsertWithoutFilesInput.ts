import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateWithoutFilesInput } from "../inputs/ProjectCreateWithoutFilesInput";
import { ProjectUpdateWithoutFilesInput } from "../inputs/ProjectUpdateWithoutFilesInput";

@TypeGraphQL.InputType("ProjectUpsertWithoutFilesInput", {
  isAbstract: true
})
export class ProjectUpsertWithoutFilesInput {
  @TypeGraphQL.Field(_type => ProjectUpdateWithoutFilesInput, {
    nullable: false
  })
  update!: ProjectUpdateWithoutFilesInput;

  @TypeGraphQL.Field(_type => ProjectCreateWithoutFilesInput, {
    nullable: false
  })
  create!: ProjectCreateWithoutFilesInput;
}
