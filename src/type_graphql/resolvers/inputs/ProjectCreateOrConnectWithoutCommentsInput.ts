import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateWithoutCommentsInput } from "../inputs/ProjectCreateWithoutCommentsInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType("ProjectCreateOrConnectWithoutCommentsInput", {
  isAbstract: true
})
export class ProjectCreateOrConnectWithoutCommentsInput {
  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectCreateWithoutCommentsInput, {
    nullable: false
  })
  create!: ProjectCreateWithoutCommentsInput;
}
