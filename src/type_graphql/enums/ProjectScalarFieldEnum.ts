import * as TypeGraphQL from "type-graphql";

export enum ProjectScalarFieldEnum {
  id = "id",
  ownerId = "ownerId",
  title = "title",
  description = "description",
  "private" = "private",
  is_disabled = "is_disabled",
  status_project = "status_project",
  total_time_spent = "total_time_spent",
  start_date = "start_date",
  end_date = "end_date",
  due_date = "due_date",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(ProjectScalarFieldEnum, {
  name: "ProjectScalarFieldEnum",
  description: undefined,
});
