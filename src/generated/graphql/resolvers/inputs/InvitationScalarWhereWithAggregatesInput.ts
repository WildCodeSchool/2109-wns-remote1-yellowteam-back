import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumStatus_InvitationWithAggregatesFilter } from "../inputs/EnumStatus_InvitationWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("InvitationScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class InvitationScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [InvitationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: InvitationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [InvitationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: InvitationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [InvitationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: InvitationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumStatus_InvitationWithAggregatesFilter, {
    nullable: true
  })
  status?: EnumStatus_InvitationWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  email?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  project_id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  user_id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  created_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updated_at?: DateTimeWithAggregatesFilter | undefined;
}
