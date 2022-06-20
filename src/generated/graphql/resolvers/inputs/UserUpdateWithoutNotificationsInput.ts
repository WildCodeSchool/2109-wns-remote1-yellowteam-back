import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CommentUpdateManyWithoutUser_project_commentsInput } from "../inputs/CommentUpdateManyWithoutUser_project_commentsInput";
import { CommentUpdateManyWithoutUser_task_commentsInput } from "../inputs/CommentUpdateManyWithoutUser_task_commentsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FileUpdateManyWithoutUserInput } from "../inputs/FileUpdateManyWithoutUserInput";
import { InvitationUpdateManyWithoutUserInput } from "../inputs/InvitationUpdateManyWithoutUserInput";
import { NotificationUpdateManyWithoutSenderInput } from "../inputs/NotificationUpdateManyWithoutSenderInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProjectUpdateManyWithoutOwnerInput } from "../inputs/ProjectUpdateManyWithoutOwnerInput";
import { ProjectUpdateManyWithoutUsersInput } from "../inputs/ProjectUpdateManyWithoutUsersInput";
import { ResetPasswordUpdateManyWithoutUserInput } from "../inputs/ResetPasswordUpdateManyWithoutUserInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateManyWithoutUserInput } from "../inputs/TaskUpdateManyWithoutUserInput";
import { UserUpdateroleInput } from "../inputs/UserUpdateroleInput";

@TypeGraphQL.InputType("UserUpdateWithoutNotificationsInput", {
  isAbstract: true
})
export class UserUpdateWithoutNotificationsInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  first_name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  last_name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  phone_number?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  cover_picture?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  password?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  is_disabled?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  avatar?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateroleInput, {
    nullable: true
  })
  role?: UserUpdateroleInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpdateManyWithoutUsersInput, {
    nullable: true
  })
  projects?: ProjectUpdateManyWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpdateManyWithoutUserInput, {
    nullable: true
  })
  tasks?: TaskUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => FileUpdateManyWithoutUserInput, {
    nullable: true
  })
  files?: FileUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => CommentUpdateManyWithoutUser_task_commentsInput, {
    nullable: true
  })
  task_comments?: CommentUpdateManyWithoutUser_task_commentsInput | undefined;

  @TypeGraphQL.Field(_type => CommentUpdateManyWithoutUser_project_commentsInput, {
    nullable: true
  })
  project_comments?: CommentUpdateManyWithoutUser_project_commentsInput | undefined;

  @TypeGraphQL.Field(_type => InvitationUpdateManyWithoutUserInput, {
    nullable: true
  })
  invitations?: InvitationUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpdateManyWithoutOwnerInput, {
    nullable: true
  })
  owned_projects?: ProjectUpdateManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(_type => NotificationUpdateManyWithoutSenderInput, {
    nullable: true
  })
  notifications_sent?: NotificationUpdateManyWithoutSenderInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ResetPasswordUpdateManyWithoutUserInput, {
    nullable: true
  })
  ResetPassword?: ResetPasswordUpdateManyWithoutUserInput | undefined;
}
