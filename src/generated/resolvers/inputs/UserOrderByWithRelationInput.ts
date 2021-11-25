import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentOrderByRelationAggregateInput } from "./CommentOrderByRelationAggregateInput";
import { FileOrderByRelationAggregateInput } from "./FileOrderByRelationAggregateInput";
import { InvitationOrderByRelationAggregateInput } from "./InvitationOrderByRelationAggregateInput";
import { NotificationOrderByRelationAggregateInput } from "./NotificationOrderByRelationAggregateInput";
import { ProjectOrderByRelationAggregateInput } from "./ProjectOrderByRelationAggregateInput";
import { TaskOrderByRelationAggregateInput } from "./TaskOrderByRelationAggregateInput";
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
  password?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  is_disabled?: "asc" | "desc" | undefined;

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
  task?: TaskOrderByRelationAggregateInput | undefined;

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
}
