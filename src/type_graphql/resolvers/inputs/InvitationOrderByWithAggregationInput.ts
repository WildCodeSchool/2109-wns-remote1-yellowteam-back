import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InvitationCountOrderByAggregateInput } from "../inputs/InvitationCountOrderByAggregateInput";
import { InvitationMaxOrderByAggregateInput } from "../inputs/InvitationMaxOrderByAggregateInput";
import { InvitationMinOrderByAggregateInput } from "../inputs/InvitationMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("InvitationOrderByWithAggregationInput", {
  isAbstract: true
})
export class InvitationOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  projectId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updated_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => InvitationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: InvitationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => InvitationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: InvitationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => InvitationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: InvitationMinOrderByAggregateInput | undefined;
}
