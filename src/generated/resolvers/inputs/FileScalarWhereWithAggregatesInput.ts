import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "./BoolWithAggregatesFilter";
import { IntWithAggregatesFilter } from "./IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "./StringWithAggregatesFilter";

@TypeGraphQL.InputType("FileScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class FileScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [FileScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: FileScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FileScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: FileScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FileScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: FileScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  path?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  size?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  type?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  projectId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  taskId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  is_disabled?: BoolWithAggregatesFilter | undefined;
}
