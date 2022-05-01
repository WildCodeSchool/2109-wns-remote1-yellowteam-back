import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumType_NotificationFilter } from "../inputs/NestedEnumType_NotificationFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { Type_Notification } from "../../enums/Type_Notification";

@TypeGraphQL.InputType("NestedEnumType_NotificationWithAggregatesFilter", {
  isAbstract: true
})
export class NestedEnumType_NotificationWithAggregatesFilter {
  @TypeGraphQL.Field(_type => Type_Notification, {
    nullable: true
  })
  equals?: "PROJECT" | "TASK" | "INVITATION" | undefined;

  @TypeGraphQL.Field(_type => [Type_Notification], {
    nullable: true
  })
  in?: Array<"PROJECT" | "TASK" | "INVITATION"> | undefined;

  @TypeGraphQL.Field(_type => [Type_Notification], {
    nullable: true
  })
  notIn?: Array<"PROJECT" | "TASK" | "INVITATION"> | undefined;

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
