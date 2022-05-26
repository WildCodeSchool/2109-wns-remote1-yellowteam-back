import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ResetPasswordCountOrderByAggregateInput } from "../inputs/ResetPasswordCountOrderByAggregateInput";
import { ResetPasswordMaxOrderByAggregateInput } from "../inputs/ResetPasswordMaxOrderByAggregateInput";
import { ResetPasswordMinOrderByAggregateInput } from "../inputs/ResetPasswordMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ResetPasswordOrderByWithAggregationInput", {
  isAbstract: true
})
export class ResetPasswordOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ResetPasswordCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ResetPasswordCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ResetPasswordMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ResetPasswordMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ResetPasswordMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ResetPasswordMinOrderByAggregateInput | undefined;
}
