import * as TypeGraphQL from "type-graphql";

export enum TaskScalarFieldEnum {
  id = "id",
  title = "title",
  description = "description",
  "private" = "private",
  is_disabled = "is_disabled",
  status_task = "status_task",
  total_time_spent = "total_time_spent",
  start_date = "start_date",
  end_date = "end_date",
  user_id = "user_id",
  project_id = "project_id",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(TaskScalarFieldEnum, {
  name: "TaskScalarFieldEnum",
  description: undefined,
});
