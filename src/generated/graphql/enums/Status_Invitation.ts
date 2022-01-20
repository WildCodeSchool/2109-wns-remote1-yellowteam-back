import * as TypeGraphQL from "type-graphql";

export enum Status_Invitation {
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED"
}
TypeGraphQL.registerEnumType(Status_Invitation, {
  name: "Status_Invitation",
  description: undefined,
});
