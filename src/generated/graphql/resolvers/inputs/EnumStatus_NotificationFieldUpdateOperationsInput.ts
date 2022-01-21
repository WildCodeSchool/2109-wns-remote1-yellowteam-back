import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Status_Notification } from "../../enums/Status_Notification";

@TypeGraphQL.InputType("EnumStatus_NotificationFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumStatus_NotificationFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => Status_Notification, {
    nullable: true
  })
  set?: "READ" | "UNREAD" | undefined;
}
