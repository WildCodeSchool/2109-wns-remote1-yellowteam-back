import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "./BoolFilter";
import { CommentListRelationFilter } from "./CommentListRelationFilter";
import { DateTimeFilter } from "./DateTimeFilter";
import { EnumStatusFilter } from "./EnumStatusFilter";
import { FileListRelationFilter } from "./FileListRelationFilter";
import { IntFilter } from "./IntFilter";
import { InvitationListRelationFilter } from "./InvitationListRelationFilter";
import { StringFilter } from "./StringFilter";
import { TaskListRelationFilter } from "./TaskListRelationFilter";
import { UserListRelationFilter } from "./UserListRelationFilter";

@TypeGraphQL.InputType("ProjectWhereInput", {
  isAbstract: true
})
export class ProjectWhereInput {
  @TypeGraphQL.Field(_type => [ProjectWhereInput], {
    nullable: true
  })
  AND?: ProjectWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectWhereInput], {
    nullable: true
  })
  OR?: ProjectWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectWhereInput], {
    nullable: true
  })
  NOT?: ProjectWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserListRelationFilter, {
    nullable: true
  })
  users?: UserListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  ownerId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  private?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  is_disabled?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => EnumStatusFilter, {
    nullable: true
  })
  status_project?: EnumStatusFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  total_time_spent?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  start_date?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  end_date?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  due_date?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => TaskListRelationFilter, {
    nullable: true
  })
  tasks?: TaskListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => FileListRelationFilter, {
    nullable: true
  })
  files?: FileListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CommentListRelationFilter, {
    nullable: true
  })
  comments?: CommentListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => InvitationListRelationFilter, {
    nullable: true
  })
  invitations?: InvitationListRelationFilter | undefined;
}
