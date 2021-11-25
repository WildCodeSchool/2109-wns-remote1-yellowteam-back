import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateWithoutInvitationsInput } from "./ProjectCreateWithoutInvitationsInput";
import { ProjectUpdateWithoutInvitationsInput } from "./ProjectUpdateWithoutInvitationsInput";

@TypeGraphQL.InputType("ProjectUpsertWithoutInvitationsInput", {
  isAbstract: true
})
export class ProjectUpsertWithoutInvitationsInput {
  @TypeGraphQL.Field(_type => ProjectUpdateWithoutInvitationsInput, {
    nullable: false
  })
  update!: ProjectUpdateWithoutInvitationsInput;

  @TypeGraphQL.Field(_type => ProjectCreateWithoutInvitationsInput, {
    nullable: false
  })
  create!: ProjectCreateWithoutInvitationsInput;
}
