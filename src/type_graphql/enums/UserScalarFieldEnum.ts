import * as TypeGraphQL from "type-graphql";

export enum UserScalarFieldEnum {
  id = "id",
  first_name = "first_name",
  last_name = "last_name",
  email = "email",
  password = "password",
  avatar = "avatar",
  is_disabled = "is_disabled",
  role = "role",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});