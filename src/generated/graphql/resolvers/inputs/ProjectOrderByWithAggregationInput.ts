import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectAvgOrderByAggregateInput } from "../inputs/ProjectAvgOrderByAggregateInput";
import { ProjectCountOrderByAggregateInput } from "../inputs/ProjectCountOrderByAggregateInput";
import { ProjectMaxOrderByAggregateInput } from "../inputs/ProjectMaxOrderByAggregateInput";
import { ProjectMinOrderByAggregateInput } from "../inputs/ProjectMinOrderByAggregateInput";
import { ProjectSumOrderByAggregateInput } from "../inputs/ProjectSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ProjectOrderByWithAggregationInput", {
  isAbstract: true
})
export class ProjectOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  project_owner_id?: "asc" | "desc" | undefined;

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
  status_project?: "asc" | "desc" | undefined;

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
  due_date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updated_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ProjectCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ProjectCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProjectAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ProjectAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProjectMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ProjectMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProjectMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ProjectMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProjectSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ProjectSumOrderByAggregateInput | undefined;
}
