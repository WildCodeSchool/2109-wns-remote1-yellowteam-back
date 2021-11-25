import * as TypeGraphQL from "type-graphql";

export enum Status_Notification {
  READ = "READ",
  UNREAD = "UNREAD"
}
TypeGraphQL.registerEnumType(Status_Notification, {
  name: "Status_Notification",
  description: undefined,
});
