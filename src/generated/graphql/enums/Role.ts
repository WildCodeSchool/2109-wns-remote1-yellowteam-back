import * as TypeGraphQL from "type-graphql";

export enum Role {
  SUPER_ADMIN = "SUPER_ADMIN",
  ADMIN = "ADMIN",
  MANAGER = "MANAGER",
  USER = "USER"
}
TypeGraphQL.registerEnumType(Role, {
  name: "Role",
  description: undefined,
});
