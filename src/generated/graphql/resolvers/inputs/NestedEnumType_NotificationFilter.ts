import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { Type_Notification } from "../../enums/Type_Notification";

@TypeGraphQL.InputType("NestedEnumType_NotificationFilter", {
  isAbstract: true
})
export class NestedEnumType_NotificationFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumType_NotificationFilter, {
    nullable: true
  })
  not?: NestedEnumType_NotificationFilter | undefined;
}
