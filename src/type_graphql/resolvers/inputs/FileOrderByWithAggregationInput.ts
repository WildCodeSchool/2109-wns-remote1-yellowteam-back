import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileAvgOrderByAggregateInput } from "../inputs/FileAvgOrderByAggregateInput";
import { FileCountOrderByAggregateInput } from "../inputs/FileCountOrderByAggregateInput";
import { FileMaxOrderByAggregateInput } from "../inputs/FileMaxOrderByAggregateInput";
import { FileMinOrderByAggregateInput } from "../inputs/FileMinOrderByAggregateInput";
import { FileSumOrderByAggregateInput } from "../inputs/FileSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("FileOrderByWithAggregationInput", {
  isAbstract: true
})
export class FileOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  path?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  size?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  projectId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  taskId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  is_disabled?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updated_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => FileCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: FileCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FileAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: FileAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FileMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: FileMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FileMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: FileMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FileSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: FileSumOrderByAggregateInput | undefined;
}
