import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateOrConnectWithoutInvitationsInput } from "./ProjectCreateOrConnectWithoutInvitationsInput";
import { ProjectCreateWithoutInvitationsInput } from "./ProjectCreateWithoutInvitationsInput";
import { ProjectUpdateWithoutInvitationsInput } from "./ProjectUpdateWithoutInvitationsInput";
import { ProjectUpsertWithoutInvitationsInput } from "./ProjectUpsertWithoutInvitationsInput";
import { ProjectWhereUniqueInput } from "./ProjectWhereUniqueInput";

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
