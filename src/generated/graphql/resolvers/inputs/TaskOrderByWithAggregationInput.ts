import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { TaskAvgOrderByAggregateInput } from "../inputs/TaskAvgOrderByAggregateInput";
import { TaskCountOrderByAggregateInput } from "../inputs/TaskCountOrderByAggregateInput";
import { TaskMaxOrderByAggregateInput } from "../inputs/TaskMaxOrderByAggregateInput";
import { TaskMinOrderByAggregateInput } from "../inputs/TaskMinOrderByAggregateInput";
import { TaskSumOrderByAggregateInput } from "../inputs/TaskSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TaskOrderByWithAggregationInput", {
  isAbstract: true
})
export class TaskOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  private?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  is_disabled?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  status_task?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  total_time_spent?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  start_date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  end_date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  user_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  project_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updated_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TaskCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TaskCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TaskAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: TaskAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TaskMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TaskMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TaskMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TaskMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TaskSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: TaskSumOrderByAggregateInput | undefined;
}
