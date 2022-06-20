import * as TypeGraphQL from "type-graphql";

export enum Type_Notification {
  PROJECT = "PROJECT",
  TASK = "TASK",
  INVITATION = "INVITATION"
}
TypeGraphQL.registerEnumType(Type_Notification, {
  name: "Type_Notification",
  description: undefined,
});
