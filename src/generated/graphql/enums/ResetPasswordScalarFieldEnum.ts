import * as TypeGraphQL from "type-graphql";

export enum ResetPasswordScalarFieldEnum {
  id = "id",
  user_id = "user_id",
  token = "token",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(ResetPasswordScalarFieldEnum, {
  name: "ResetPasswordScalarFieldEnum",
  description: undefined,
});
