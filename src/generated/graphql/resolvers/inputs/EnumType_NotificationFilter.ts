import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumType_NotificationFilter } from "../inputs/NestedEnumType_NotificationFilter";
import { Type_Notification } from "../../enums/Type_Notification";

@TypeGraphQL.InputType("EnumType_NotificationFilter", {
  isAbstract: true
})
export class EnumType_NotificationFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumType_NotificationFilter, {
    nullable: true
  })
  not?: NestedEnumType_NotificationFilter | undefined;
}
