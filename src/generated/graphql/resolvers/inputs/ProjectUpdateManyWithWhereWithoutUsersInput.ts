import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectScalarWhereInput } from "../inputs/ProjectScalarWhereInput";
import { ProjectUpdateManyMutationInput } from "../inputs/ProjectUpdateManyMutationInput";

@TypeGraphQL.InputType("ProjectUpdateManyWithWhereWithoutUsersInput", {
  isAbstract: true
})
export class ProjectUpdateManyWithWhereWithoutUsersInput {
  @TypeGraphQL.Field(_type => ProjectScalarWhereInput, {
    nullable: false
  })
  where!: ProjectScalarWhereInput;

  @TypeGraphQL.Field(_type => ProjectUpdateManyMutationInput, {
    nullable: false
  })
  data!: ProjectUpdateManyMutationInput;
}
