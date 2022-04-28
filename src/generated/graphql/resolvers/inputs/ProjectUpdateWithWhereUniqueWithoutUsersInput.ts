import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectUpdateWithoutUsersInput } from "../inputs/ProjectUpdateWithoutUsersInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType("ProjectUpdateWithWhereUniqueWithoutUsersInput", {
  isAbstract: true
})
export class ProjectUpdateWithWhereUniqueWithoutUsersInput {
  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectUpdateWithoutUsersInput, {
    nullable: false
  })
  data!: ProjectUpdateWithoutUsersInput;
}
