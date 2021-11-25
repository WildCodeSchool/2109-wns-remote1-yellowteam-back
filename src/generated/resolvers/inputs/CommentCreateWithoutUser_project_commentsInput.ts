import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateNestedOneWithoutCommentsInput } from "./ProjectCreateNestedOneWithoutCommentsInput";
import { TaskCreateNestedOneWithoutCommentsInput } from "./TaskCreateNestedOneWithoutCommentsInput";
import { UserCreateNestedOneWithoutTask_commentsInput } from "./UserCreateNestedOneWithoutTask_commentsInput";

@TypeGraphQL.InputType("CommentCreateWithoutUser_project_commentsInput", {
  isAbstract: true
})
export class CommentCreateWithoutUser_project_commentsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  is_disabled!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  content!: string;

  @TypeGraphQL.Field(_type => ProjectCreateNestedOneWithoutCommentsInput, {
    nullable: true
  })
  project?: ProjectCreateNestedOneWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => TaskCreateNestedOneWithoutCommentsInput, {
    nullable: true
  })
  task?: TaskCreateNestedOneWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutTask_commentsInput, {
    nullable: true
  })
  user_task_comments?: UserCreateNestedOneWithoutTask_commentsInput | undefined;
}
