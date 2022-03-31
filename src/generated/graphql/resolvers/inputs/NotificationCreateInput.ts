import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutNotificationsInput } from "../inputs/UserCreateNestedOneWithoutNotificationsInput";
import { UserCreateNestedOneWithoutNotifications_sentInput } from "../inputs/UserCreateNestedOneWithoutNotifications_sentInput";
import { Status_Notification } from "../../enums/Status_Notification";
import { Type_Notification } from "../../enums/Type_Notification";

@TypeGraphQL.InputType("NotificationCreateInput", {
  isAbstract: true
})
export class NotificationCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  is_disabled!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  content!: string;

  @TypeGraphQL.Field(_type => Type_Notification, {
    nullable: false
  })
  type!: "PROJECT" | "TASK";

  @TypeGraphQL.Field(_type => Status_Notification, {
    nullable: false
  })
  status!: "READ" | "UNREAD";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  reference_id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutNotificationsInput, {
    nullable: true
  })
  user?: UserCreateNestedOneWithoutNotificationsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutNotifications_sentInput, {
    nullable: false
  })
  sender!: UserCreateNestedOneWithoutNotifications_sentInput;
}
