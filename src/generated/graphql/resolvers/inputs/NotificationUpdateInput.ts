import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumStatus_NotificationFieldUpdateOperationsInput } from "../inputs/EnumStatus_NotificationFieldUpdateOperationsInput";
import { EnumType_NotificationFieldUpdateOperationsInput } from "../inputs/EnumType_NotificationFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutNotifications_sentInput } from "../inputs/UserUpdateOneRequiredWithoutNotifications_sentInput";
import { UserUpdateOneWithoutNotificationsInput } from "../inputs/UserUpdateOneWithoutNotificationsInput";

@TypeGraphQL.InputType("NotificationUpdateInput", {
  isAbstract: true
})
export class NotificationUpdateInput {
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

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutNotificationsInput, {
    nullable: true
  })
  user?: UserUpdateOneWithoutNotificationsInput | undefined;

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

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutNotifications_sentInput, {
    nullable: true
  })
  sender?: UserUpdateOneRequiredWithoutNotifications_sentInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: DateTimeFieldUpdateOperationsInput | undefined;
}
