import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateOrConnectWithoutInvitationsInput } from "../inputs/ProjectCreateOrConnectWithoutInvitationsInput";
import { ProjectCreateWithoutInvitationsInput } from "../inputs/ProjectCreateWithoutInvitationsInput";
import { ProjectUpdateWithoutInvitationsInput } from "../inputs/ProjectUpdateWithoutInvitationsInput";
import { ProjectUpsertWithoutInvitationsInput } from "../inputs/ProjectUpsertWithoutInvitationsInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType("ProjectUpdateOneRequiredWithoutInvitationsInput", {
  isAbstract: true
})
export class ProjectUpdateOneRequiredWithoutInvitationsInput {
  @TypeGraphQL.Field(_type => ProjectCreateWithoutInvitationsInput, {
    nullable: true
  })
  create?: ProjectCreateWithoutInvitationsInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateOrConnectWithoutInvitationsInput, {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutInvitationsInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpsertWithoutInvitationsInput, {
    nullable: true
  })
  upsert?: ProjectUpsertWithoutInvitationsInput | undefined;

  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpdateWithoutInvitationsInput, {
    nullable: true
  })
  update?: ProjectUpdateWithoutInvitationsInput | undefined;
}
