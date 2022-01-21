import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { CommentListRelationFilter } from "../inputs/CommentListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumRoleNullableListFilter } from "../inputs/EnumRoleNullableListFilter";
import { FileListRelationFilter } from "../inputs/FileListRelationFilter";
import { InvitationListRelationFilter } from "../inputs/InvitationListRelationFilter";
import { NotificationListRelationFilter } from "../inputs/NotificationListRelationFilter";
import { ProjectListRelationFilter } from "../inputs/ProjectListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TaskListRelationFilter } from "../inputs/TaskListRelationFilter";

@TypeGraphQL.InputType("UserWhereInput", {
  isAbstract: true
})
export class UserWhereInput {
  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  AND?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  OR?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  NOT?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  first_name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  last_name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  password?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  is_disabled?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  avatar?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumRoleNullableListFilter, {
    nullable: true
  })
  role?: EnumRoleNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => ProjectListRelationFilter, {
    nullable: true
  })
  projects?: ProjectListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TaskListRelationFilter, {
    nullable: true
  })
  task?: TaskListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => FileListRelationFilter, {
    nullable: true
  })
  files?: FileListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CommentListRelationFilter, {
    nullable: true
  })
  task_comments?: CommentListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CommentListRelationFilter, {
    nullable: true
  })
  project_comments?: CommentListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => InvitationListRelationFilter, {
    nullable: true
  })
  invitations?: InvitationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => NotificationListRelationFilter, {
    nullable: true
  })
  notifications?: NotificationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProjectListRelationFilter, {
    nullable: true
  })
  owned_projects?: ProjectListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => NotificationListRelationFilter, {
    nullable: true
  })
  notifications_sent?: NotificationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updated_at?: DateTimeFilter | undefined;
}
