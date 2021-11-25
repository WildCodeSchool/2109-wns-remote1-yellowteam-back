import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateWithoutUsersInput } from "./ProjectCreateWithoutUsersInput";
import { ProjectUpdateWithoutUsersInput } from "./ProjectUpdateWithoutUsersInput";
import { ProjectWhereUniqueInput } from "./ProjectWhereUniqueInput";

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
