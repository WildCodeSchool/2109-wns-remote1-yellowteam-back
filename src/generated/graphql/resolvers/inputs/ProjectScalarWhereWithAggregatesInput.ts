import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumStatusWithAggregatesFilter } from "../inputs/EnumStatusWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ProjectScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ProjectScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ProjectScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ProjectScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ProjectScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ProjectScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  project_owner_id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  title?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  description?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  private?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  is_disabled?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumStatusWithAggregatesFilter, {
    nullable: true
  })
  status_project?: EnumStatusWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  total_time_spent?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  start_date?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  end_date?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  due_date?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  created_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updated_at?: DateTimeWithAggregatesFilter | undefined;
}
