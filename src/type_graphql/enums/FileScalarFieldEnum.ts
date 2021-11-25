import * as TypeGraphQL from "type-graphql";

export enum FileScalarFieldEnum {
  id = "id",
  name = "name",
  path = "path",
  size = "size",
  type = "type",
  userId = "userId",
  projectId = "projectId",
  taskId = "taskId",
  is_disabled = "is_disabled",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(FileScalarFieldEnum, {
  name: "FileScalarFieldEnum",
  description: undefined,
});
