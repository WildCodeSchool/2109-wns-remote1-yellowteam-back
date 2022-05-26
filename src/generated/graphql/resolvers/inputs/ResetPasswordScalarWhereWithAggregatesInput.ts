import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ResetPasswordScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ResetPasswordScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ResetPasswordScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ResetPasswordScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ResetPasswordScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ResetPasswordScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ResetPasswordScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ResetPasswordScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;
}
