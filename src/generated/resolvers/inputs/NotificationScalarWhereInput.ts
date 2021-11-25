import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "./BoolFilter";
import { EnumStatus_NotificationFilter } from "./EnumStatus_NotificationFilter";
import { EnumType_NotificationFilter } from "./EnumType_NotificationFilter";
import { StringFilter } from "./StringFilter";

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
  userId?: StringFilter | undefined;

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
  senderId?: StringFilter | undefined;
}
