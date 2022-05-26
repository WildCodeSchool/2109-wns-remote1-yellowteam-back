import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ResetPasswordMaxOrderByAggregateInput", {
  isAbstract: true
})
export class ResetPasswordMaxOrderByAggregateInput {
}
