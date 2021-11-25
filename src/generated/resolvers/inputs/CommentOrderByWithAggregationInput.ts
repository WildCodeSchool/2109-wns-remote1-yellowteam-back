import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCountOrderByAggregateInput } from "./CommentCountOrderByAggregateInput";
import { CommentMaxOrderByAggregateInput } from "./CommentMaxOrderByAggregateInput";
import { CommentMinOrderByAggregateInput } from "./CommentMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CommentOrderByWithAggregationInput", {
  isAbstract: true
})
export class CommentOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  is_disabled?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  content?: "asc" | "desc" | undefined;

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
  task_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CommentCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CommentCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CommentMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CommentMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CommentMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CommentMinOrderByAggregateInput | undefined;
}
