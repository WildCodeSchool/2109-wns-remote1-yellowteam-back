import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "./BoolFieldUpdateOperationsInput";
import { EnumStatus_NotificationFieldUpdateOperationsInput } from "./EnumStatus_NotificationFieldUpdateOperationsInput";
import { EnumType_NotificationFieldUpdateOperationsInput } from "./EnumType_NotificationFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "./StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("NotificationUpdateWithoutUserInput", {
  isAbstract: true
})
export class NotificationUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  is_disabled?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  content?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumType_NotificationFieldUpdateOperationsInput, {
    nullable: true
  })
  type?: EnumType_NotificationFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumStatus_NotificationFieldUpdateOperationsInput, {
    nullable: true
  })
  status?: EnumStatus_NotificationFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  reference_id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  senderId?: StringFieldUpdateOperationsInput | undefined;
}
