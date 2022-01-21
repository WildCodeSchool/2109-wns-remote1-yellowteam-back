import * as TypeGraphQL from "type-graphql";

export enum InvitationScalarFieldEnum {
  id = "id",
  status = "status",
  email = "email",
  project_id = "project_id",
  user_id = "user_id",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(InvitationScalarFieldEnum, {
  name: "InvitationScalarFieldEnum",
  description: undefined,
});
