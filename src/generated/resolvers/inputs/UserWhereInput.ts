import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "./BoolFilter";
import { CommentListRelationFilter } from "./CommentListRelationFilter";
import { EnumRoleNullableListFilter } from "./EnumRoleNullableListFilter";
import { FileListRelationFilter } from "./FileListRelationFilter";
import { InvitationListRelationFilter } from "./InvitationListRelationFilter";
import { NotificationListRelationFilter } from "./NotificationListRelationFilter";
import { ProjectListRelationFilter } from "./ProjectListRelationFilter";
import { StringFilter } from "./StringFilter";
import { TaskListRelationFilter } from "./TaskListRelationFilter";

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
}
