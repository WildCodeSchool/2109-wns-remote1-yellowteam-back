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
import { ProjectRelationFilter } from "./ProjectRelationFilter";
import { StringFilter } from "./StringFilter";
import { UserRelationFilter } from "./UserRelationFilter";

@TypeGraphQL.InputType("TaskWhereInput", {
  isAbstract: true
})
export class TaskWhereInput {
  @TypeGraphQL.Field(_type => [TaskWhereInput], {
    nullable: true
  })
  AND?: TaskWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereInput], {
    nullable: true
  })
  OR?: TaskWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereInput], {
    nullable: true
  })
  NOT?: TaskWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

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
  status_task?: EnumStatusFilter | undefined;

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

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ProjectRelationFilter, {
    nullable: true
  })
  project?: ProjectRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  projectId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => FileListRelationFilter, {
    nullable: true
  })
  files?: FileListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CommentListRelationFilter, {
    nullable: true
  })
  comments?: CommentListRelationFilter | undefined;
}
