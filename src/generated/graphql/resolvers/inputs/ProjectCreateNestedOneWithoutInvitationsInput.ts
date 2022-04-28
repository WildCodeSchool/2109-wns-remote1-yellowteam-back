import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateOrConnectWithoutInvitationsInput } from "../inputs/ProjectCreateOrConnectWithoutInvitationsInput";
import { ProjectCreateWithoutInvitationsInput } from "../inputs/ProjectCreateWithoutInvitationsInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType("ProjectCreateNestedOneWithoutInvitationsInput", {
  isAbstract: true
})
export class ProjectCreateNestedOneWithoutInvitationsInput {
  @TypeGraphQL.Field(_type => ProjectCreateWithoutInvitationsInput, {
    nullable: true
  })
  create?: ProjectCreateWithoutInvitationsInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateOrConnectWithoutInvitationsInput, {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutInvitationsInput | undefined;

  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput | undefined;
}
