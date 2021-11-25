import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateWithoutUsersInput } from "./ProjectCreateWithoutUsersInput";
import { ProjectWhereUniqueInput } from "./ProjectWhereUniqueInput";

@TypeGraphQL.InputType("ProjectCreateOrConnectWithoutUsersInput", {
  isAbstract: true
})
export class ProjectCreateOrConnectWithoutUsersInput {
  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectCreateWithoutUsersInput, {
    nullable: false
  })
  create!: ProjectCreateWithoutUsersInput;
}
