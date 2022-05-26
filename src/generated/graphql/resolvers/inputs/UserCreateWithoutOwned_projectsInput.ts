import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateNestedManyWithoutUser_project_commentsInput } from "../inputs/CommentCreateNestedManyWithoutUser_project_commentsInput";
import { CommentCreateNestedManyWithoutUser_task_commentsInput } from "../inputs/CommentCreateNestedManyWithoutUser_task_commentsInput";
import { FileCreateNestedManyWithoutUserInput } from "../inputs/FileCreateNestedManyWithoutUserInput";
import { InvitationCreateNestedManyWithoutUserInput } from "../inputs/InvitationCreateNestedManyWithoutUserInput";
import { NotificationCreateNestedManyWithoutSenderInput } from "../inputs/NotificationCreateNestedManyWithoutSenderInput";
import { NotificationCreateNestedManyWithoutUserInput } from "../inputs/NotificationCreateNestedManyWithoutUserInput";
import { ProjectCreateNestedManyWithoutUsersInput } from "../inputs/ProjectCreateNestedManyWithoutUsersInput";
import { ResetPasswordCreateNestedManyWithoutUserInput } from "../inputs/ResetPasswordCreateNestedManyWithoutUserInput";
import { TaskCreateNestedManyWithoutUserInput } from "../inputs/TaskCreateNestedManyWithoutUserInput";
import { UserCreateroleInput } from "../inputs/UserCreateroleInput";

@TypeGraphQL.InputType("UserCreateWithoutOwned_projectsInput", {
  isAbstract: true
})
export class UserCreateWithoutOwned_projectsInput {
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
    nullable: true
  })
  phone_number?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  cover_picture?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  is_disabled!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  avatar?: string | undefined;

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
  tasks?: TaskCreateNestedManyWithoutUserInput | undefined;

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

  @TypeGraphQL.Field(_type => NotificationCreateNestedManyWithoutSenderInput, {
    nullable: true
  })
  notifications_sent?: NotificationCreateNestedManyWithoutSenderInput | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => ResetPasswordCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  ResetPassword?: ResetPasswordCreateNestedManyWithoutUserInput | undefined;
}
