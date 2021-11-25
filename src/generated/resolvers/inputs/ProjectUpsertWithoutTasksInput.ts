import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateWithoutTasksInput } from "./ProjectCreateWithoutTasksInput";
import { ProjectUpdateWithoutTasksInput } from "./ProjectUpdateWithoutTasksInput";

@TypeGraphQL.InputType("ProjectUpsertWithoutTasksInput", {
  isAbstract: true
})
export class ProjectUpsertWithoutTasksInput {
  @TypeGraphQL.Field(_type => ProjectUpdateWithoutTasksInput, {
    nullable: false
  })
  update!: ProjectUpdateWithoutTasksInput;

  @TypeGraphQL.Field(_type => ProjectCreateWithoutTasksInput, {
    nullable: false
  })
  create!: ProjectCreateWithoutTasksInput;
}
