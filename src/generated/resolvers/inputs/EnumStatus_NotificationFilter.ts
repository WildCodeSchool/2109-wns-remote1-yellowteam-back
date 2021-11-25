import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumStatus_NotificationFilter } from "./NestedEnumStatus_NotificationFilter";
import { Status_Notification } from "../../enums/Status_Notification";

@TypeGraphQL.InputType("EnumStatus_NotificationFilter", {
  isAbstract: true
})
export class EnumStatus_NotificationFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumStatus_NotificationFilter, {
    nullable: true
  })
  not?: NestedEnumStatus_NotificationFilter | undefined;
}
