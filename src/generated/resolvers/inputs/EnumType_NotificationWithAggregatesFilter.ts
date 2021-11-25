import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumType_NotificationFilter } from "./NestedEnumType_NotificationFilter";
import { NestedEnumType_NotificationWithAggregatesFilter } from "./NestedEnumType_NotificationWithAggregatesFilter";
import { NestedIntFilter } from "./NestedIntFilter";
import { Type_Notification } from "../../enums/Type_Notification";

@TypeGraphQL.InputType("EnumType_NotificationWithAggregatesFilter", {
  isAbstract: true
})
export class EnumType_NotificationWithAggregatesFilter {
  @TypeGraphQL.Field(_type => Type_Notification, {
    nullable: true
  })
  equals?: "PROJECT" | "TASK" | undefined;

  @TypeGraphQL.Field(_type => [Type_Notification], {
    nullable: true
  })
  in?: Array<"PROJECT" | "TASK"> | undefined;

  @TypeGraphQL.Field(_type => [Type_Notification], {
    nullable: true
  })
  notIn?: Array<"PROJECT" | "TASK"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumType_NotificationWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumType_NotificationWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumType_NotificationFilter, {
    nullable: true
  })
  _min?: NestedEnumType_NotificationFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumType_NotificationFilter, {
    nullable: true
  })
  _max?: NestedEnumType_NotificationFilter | undefined;
}
