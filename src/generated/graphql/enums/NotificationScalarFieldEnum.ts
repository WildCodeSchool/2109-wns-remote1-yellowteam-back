import * as TypeGraphQL from "type-graphql";

export enum NotificationScalarFieldEnum {
  id = "id",
  is_disabled = "is_disabled",
  title = "title",
  content = "content",
  user_id = "user_id",
  type = "type",
  status = "status",
  reference_id = "reference_id",
  sender_id = "sender_id",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(NotificationScalarFieldEnum, {
  name: "NotificationScalarFieldEnum",
  description: undefined,
});
