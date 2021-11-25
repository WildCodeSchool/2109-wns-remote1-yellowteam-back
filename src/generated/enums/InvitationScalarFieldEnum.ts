import * as TypeGraphQL from "type-graphql";

export enum InvitationScalarFieldEnum {
  id = "id",
  status = "status",
  email = "email",
  projectId = "projectId",
  userId = "userId"
}
TypeGraphQL.registerEnumType(InvitationScalarFieldEnum, {
  name: "InvitationScalarFieldEnum",
  description: undefined,
});
