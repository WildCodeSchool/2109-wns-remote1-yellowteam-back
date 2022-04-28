import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateWithoutInvitationsInput } from "../inputs/ProjectCreateWithoutInvitationsInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType("ProjectCreateOrConnectWithoutInvitationsInput", {
  isAbstract: true
})
export class ProjectCreateOrConnectWithoutInvitationsInput {
  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectCreateWithoutInvitationsInput, {
    nullable: false
  })
  create!: ProjectCreateWithoutInvitationsInput;
}
