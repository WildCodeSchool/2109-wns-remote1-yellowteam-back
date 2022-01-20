import * as TypeGraphQL from "type-graphql";

export enum CommentScalarFieldEnum {
  id = "id",
  is_disabled = "is_disabled",
  content = "content",
  task_comment_user_id = "task_comment_user_id",
  project_id = "project_id",
  task_id = "task_id",
  project_comment_user_id = "project_comment_user_id",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(CommentScalarFieldEnum, {
  name: "CommentScalarFieldEnum",
  description: undefined,
});
