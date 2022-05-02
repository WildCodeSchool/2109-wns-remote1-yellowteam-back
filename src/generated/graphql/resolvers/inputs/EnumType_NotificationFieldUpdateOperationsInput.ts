import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Type_Notification } from "../../enums/Type_Notification";

@TypeGraphQL.InputType("EnumType_NotificationFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumType_NotificationFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => Type_Notification, {
    nullable: true
  })
  set?: "PROJECT" | "TASK" | "INVITATION" | undefined;
}
