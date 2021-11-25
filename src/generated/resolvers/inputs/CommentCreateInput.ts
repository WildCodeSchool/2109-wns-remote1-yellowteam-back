import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateNestedOneWithoutCommentsInput } from "./ProjectCreateNestedOneWithoutCommentsInput";
import { TaskCreateNestedOneWithoutCommentsInput } from "./TaskCreateNestedOneWithoutCommentsInput";
import { UserCreateNestedOneWithoutProject_commentsInput } from "./UserCreateNestedOneWithoutProject_commentsInput";
import { UserCreateNestedOneWithoutTask_commentsInput } from "./UserCreateNestedOneWithoutTask_commentsInput";

@TypeGraphQL.InputType("CommentCreateInput", {
  isAbstract: true
})
export class CommentCreateInput {
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

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutProject_commentsInput, {
    nullable: true
  })
  user_project_comments?: UserCreateNestedOneWithoutProject_commentsInput | undefined;
}
