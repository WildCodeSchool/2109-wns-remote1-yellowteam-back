import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateWithoutUsersInput } from "../inputs/ProjectCreateWithoutUsersInput";
import { ProjectUpdateWithoutUsersInput } from "../inputs/ProjectUpdateWithoutUsersInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType("ProjectUpsertWithWhereUniqueWithoutUsersInput", {
  isAbstract: true
})
export class ProjectUpsertWithWhereUniqueWithoutUsersInput {
  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectUpdateWithoutUsersInput, {
    nullable: false
  })
  update!: ProjectUpdateWithoutUsersInput;

  @TypeGraphQL.Field(_type => ProjectCreateWithoutUsersInput, {
    nullable: false
  })
  create!: ProjectCreateWithoutUsersInput;
}
