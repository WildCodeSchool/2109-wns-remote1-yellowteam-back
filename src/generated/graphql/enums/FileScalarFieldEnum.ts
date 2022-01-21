import * as TypeGraphQL from "type-graphql";

export enum FileScalarFieldEnum {
  id = "id",
  name = "name",
  path = "path",
  size = "size",
  type = "type",
  user_id = "user_id",
  project_id = "project_id",
  task_id = "task_id",
  is_disabled = "is_disabled",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(FileScalarFieldEnum, {
  name: "FileScalarFieldEnum",
  description: undefined,
});
