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
  userId = "userId",
  projectId = "projectId"
}
TypeGraphQL.registerEnumType(TaskScalarFieldEnum, {
  name: "TaskScalarFieldEnum",
  description: undefined,
});
