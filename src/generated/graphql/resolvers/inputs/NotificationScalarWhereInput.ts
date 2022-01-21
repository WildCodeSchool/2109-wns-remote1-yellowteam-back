import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumStatus_NotificationFilter } from "../inputs/EnumStatus_NotificationFilter";
import { EnumType_NotificationFilter } from "../inputs/EnumType_NotificationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("NotificationScalarWhereInput", {
  isAbstract: true
})
export class NotificationScalarWhereInput {
  @TypeGraphQL.Field(_type => [NotificationScalarWhereInput], {
    nullable: true
  })
  AND?: NotificationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationScalarWhereInput], {
    nullable: true
  })
  OR?: NotificationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationScalarWhereInput], {
    nullable: true
  })
  NOT?: NotificationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  is_disabled?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  content?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  user_id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumType_NotificationFilter, {
    nullable: true
  })
  type?: EnumType_NotificationFilter | undefined;

  @TypeGraphQL.Field(_type => EnumStatus_NotificationFilter, {
    nullable: true
  })
  status?: EnumStatus_NotificationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  reference_id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  sender_id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updated_at?: DateTimeFilter | undefined;
}
