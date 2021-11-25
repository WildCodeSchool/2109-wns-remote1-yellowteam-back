import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateNestedManyWithoutUser_project_commentsInput } from "./CommentCreateNestedManyWithoutUser_project_commentsInput";
import { CommentCreateNestedManyWithoutUser_task_commentsInput } from "./CommentCreateNestedManyWithoutUser_task_commentsInput";
import { FileCreateNestedManyWithoutUserInput } from "./FileCreateNestedManyWithoutUserInput";
import { InvitationCreateNestedManyWithoutUserInput } from "./InvitationCreateNestedManyWithoutUserInput";
import { NotificationCreateNestedManyWithoutUserInput } from "./NotificationCreateNestedManyWithoutUserInput";
import { ProjectCreateNestedManyWithoutUsersInput } from "./ProjectCreateNestedManyWithoutUsersInput";
import { TaskCreateNestedManyWithoutUserInput } from "./TaskCreateNestedManyWithoutUserInput";
import { UserCreateroleInput } from "./UserCreateroleInput";

@TypeGraphQL.InputType("UserCreateInput", {
  isAbstract: true
})
export class UserCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  first_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  last_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  is_disabled!: boolean;

  @TypeGraphQL.Field(_type => UserCreateroleInput, {
    nullable: true
  })
  role?: UserCreateroleInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateNestedManyWithoutUsersInput, {
    nullable: true
  })
  projects?: ProjectCreateNestedManyWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => TaskCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  task?: TaskCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => FileCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  files?: FileCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutUser_task_commentsInput, {
    nullable: true
  })
  task_comments?: CommentCreateNestedManyWithoutUser_task_commentsInput | undefined;

  @TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutUser_project_commentsInput, {
    nullable: true
  })
  project_comments?: CommentCreateNestedManyWithoutUser_project_commentsInput | undefined;

  @TypeGraphQL.Field(_type => InvitationCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  invitations?: InvitationCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => NotificationCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  notifications?: NotificationCreateNestedManyWithoutUserInput | undefined;
}
