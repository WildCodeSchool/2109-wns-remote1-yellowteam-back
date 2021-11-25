import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "./BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "./DateTimeWithAggregatesFilter";
import { EnumStatusWithAggregatesFilter } from "./EnumStatusWithAggregatesFilter";
import { IntWithAggregatesFilter } from "./IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "./StringWithAggregatesFilter";

@TypeGraphQL.InputType("TaskScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class TaskScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TaskScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TaskScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TaskScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TaskScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

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
  status_task?: EnumStatusWithAggregatesFilter | undefined;

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

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  projectId?: StringWithAggregatesFilter | undefined;
}
