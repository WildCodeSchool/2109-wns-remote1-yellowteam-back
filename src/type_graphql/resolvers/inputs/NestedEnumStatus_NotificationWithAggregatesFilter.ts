import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumStatus_NotificationFilter } from "../inputs/NestedEnumStatus_NotificationFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { Status_Notification } from "../../enums/Status_Notification";

@TypeGraphQL.InputType("NestedEnumStatus_NotificationWithAggregatesFilter", {
  isAbstract: true
})
export class NestedEnumStatus_NotificationWithAggregatesFilter {
  @TypeGraphQL.Field(_type => Status_Notification, {
    nullable: true
  })
  equals?: "READ" | "UNREAD" | undefined;

  @TypeGraphQL.Field(_type => [Status_Notification], {
    nullable: true
  })
  in?: Array<"READ" | "UNREAD"> | undefined;

  @TypeGraphQL.Field(_type => [Status_Notification], {
    nullable: true
  })
  notIn?: Array<"READ" | "UNREAD"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumStatus_NotificationWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumStatus_NotificationWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumStatus_NotificationFilter, {
    nullable: true
  })
  _min?: NestedEnumStatus_NotificationFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumStatus_NotificationFilter, {
    nullable: true
  })
  _max?: NestedEnumStatus_NotificationFilter | undefined;
}
