import * as TypeGraphQL from "type-graphql";

export enum CommentScalarFieldEnum {
  id = "id",
  is_disabled = "is_disabled",
  content = "content",
  user_id = "user_id",
  project_id = "project_id",
  task_id = "task_id",
  userId = "userId",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(CommentScalarFieldEnum, {
  name: "CommentScalarFieldEnum",
  description: undefined,
});
