import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumStatus_InvitationFilter } from "./EnumStatus_InvitationFilter";
import { ProjectRelationFilter } from "./ProjectRelationFilter";
import { StringFilter } from "./StringFilter";
import { UserRelationFilter } from "./UserRelationFilter";

@TypeGraphQL.InputType("InvitationWhereInput", {
  isAbstract: true
})
export class InvitationWhereInput {
  @TypeGraphQL.Field(_type => [InvitationWhereInput], {
    nullable: true
  })
  AND?: InvitationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [InvitationWhereInput], {
    nullable: true
  })
  OR?: InvitationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [InvitationWhereInput], {
    nullable: true
  })
  NOT?: InvitationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumStatus_InvitationFilter, {
    nullable: true
  })
  status?: EnumStatus_InvitationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ProjectRelationFilter, {
    nullable: true
  })
  project?: ProjectRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  projectId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;
}
