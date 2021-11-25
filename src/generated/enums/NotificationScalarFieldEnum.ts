import * as TypeGraphQL from "type-graphql";

export enum NotificationScalarFieldEnum {
  id = "id",
  is_disabled = "is_disabled",
  title = "title",
  content = "content",
  userId = "userId",
  type = "type",
  status = "status",
  reference_id = "reference_id",
  senderId = "senderId"
}
TypeGraphQL.registerEnumType(NotificationScalarFieldEnum, {
  name: "NotificationScalarFieldEnum",
  description: undefined,
});
