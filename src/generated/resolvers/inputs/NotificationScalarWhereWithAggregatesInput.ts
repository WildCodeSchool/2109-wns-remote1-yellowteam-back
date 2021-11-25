import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "./BoolWithAggregatesFilter";
import { EnumStatus_NotificationWithAggregatesFilter } from "./EnumStatus_NotificationWithAggregatesFilter";
import { EnumType_NotificationWithAggregatesFilter } from "./EnumType_NotificationWithAggregatesFilter";
import { StringWithAggregatesFilter } from "./StringWithAggregatesFilter";

@TypeGraphQL.InputType("NotificationScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class NotificationScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [NotificationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: NotificationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: NotificationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: NotificationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  is_disabled?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  title?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  content?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumType_NotificationWithAggregatesFilter, {
    nullable: true
  })
  type?: EnumType_NotificationWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumStatus_NotificationWithAggregatesFilter, {
    nullable: true
  })
  status?: EnumStatus_NotificationWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  reference_id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  senderId?: StringWithAggregatesFilter | undefined;
}
