import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentOrderByRelationAggregateInput } from "../inputs/CommentOrderByRelationAggregateInput";
import { FileOrderByRelationAggregateInput } from "../inputs/FileOrderByRelationAggregateInput";
import { InvitationOrderByRelationAggregateInput } from "../inputs/InvitationOrderByRelationAggregateInput";
import { NotificationOrderByRelationAggregateInput } from "../inputs/NotificationOrderByRelationAggregateInput";
import { ProjectOrderByRelationAggregateInput } from "../inputs/ProjectOrderByRelationAggregateInput";
import { ResetPasswordOrderByRelationAggregateInput } from "../inputs/ResetPasswordOrderByRelationAggregateInput";
import { TaskOrderByRelationAggregateInput } from "../inputs/TaskOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserOrderByWithRelationInput", {
  isAbstract: true
})
export class UserOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  first_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  last_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  phone_number?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cover_picture?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  password?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  is_disabled?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  avatar?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  role?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ProjectOrderByRelationAggregateInput, {
    nullable: true
  })
  projects?: ProjectOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TaskOrderByRelationAggregateInput, {
    nullable: true
  })
  tasks?: TaskOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FileOrderByRelationAggregateInput, {
    nullable: true
  })
  files?: FileOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CommentOrderByRelationAggregateInput, {
    nullable: true
  })
  task_comments?: CommentOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CommentOrderByRelationAggregateInput, {
    nullable: true
  })
  project_comments?: CommentOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => InvitationOrderByRelationAggregateInput, {
    nullable: true
  })
  invitations?: InvitationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NotificationOrderByRelationAggregateInput, {
    nullable: true
  })
  notifications?: NotificationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProjectOrderByRelationAggregateInput, {
    nullable: true
  })
  owned_projects?: ProjectOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NotificationOrderByRelationAggregateInput, {
    nullable: true
  })
  notifications_sent?: NotificationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updated_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ResetPasswordOrderByRelationAggregateInput, {
    nullable: true
  })
  ResetPassword?: ResetPasswordOrderByRelationAggregateInput | undefined;
}
