import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateWithoutCommentsInput } from "../inputs/ProjectCreateWithoutCommentsInput";
import { ProjectUpdateWithoutCommentsInput } from "../inputs/ProjectUpdateWithoutCommentsInput";

@TypeGraphQL.InputType("ProjectUpsertWithoutCommentsInput", {
  isAbstract: true
})
export class ProjectUpsertWithoutCommentsInput {
  @TypeGraphQL.Field(_type => ProjectUpdateWithoutCommentsInput, {
    nullable: false
  })
  update!: ProjectUpdateWithoutCommentsInput;

  @TypeGraphQL.Field(_type => ProjectCreateWithoutCommentsInput, {
    nullable: false
  })
  create!: ProjectCreateWithoutCommentsInput;
}
