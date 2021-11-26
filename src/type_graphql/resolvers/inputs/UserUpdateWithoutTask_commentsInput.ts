import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CommentUpdateManyWithoutUser_project_commentsInput } from "../inputs/CommentUpdateManyWithoutUser_project_commentsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FileUpdateManyWithoutUserInput } from "../inputs/FileUpdateManyWithoutUserInput";
import { InvitationUpdateManyWithoutUserInput } from "../inputs/InvitationUpdateManyWithoutUserInput";
import { NotificationUpdateManyWithoutUserInput } from "../inputs/NotificationUpdateManyWithoutUserInput";
import { ProjectUpdateManyWithoutUsersInput } from "../inputs/ProjectUpdateManyWithoutUsersInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateManyWithoutUserInput } from "../inputs/TaskUpdateManyWithoutUserInput";
import { UserUpdateroleInput } from "../inputs/UserUpdateroleInput";

@TypeGraphQL.InputType("UserUpdateWithoutTask_commentsInput", {
  isAbstract: true
})
export class UserUpdateWithoutTask_commentsInput {
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

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  password?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  avatar?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  is_disabled?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: DateTimeFieldUpdateOperationsInput | undefined;

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
  task?: TaskUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => FileUpdateManyWithoutUserInput, {
    nullable: true
  })
  files?: FileUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => CommentUpdateManyWithoutUser_project_commentsInput, {
    nullable: true
  })
  project_comments?: CommentUpdateManyWithoutUser_project_commentsInput | undefined;

  @TypeGraphQL.Field(_type => InvitationUpdateManyWithoutUserInput, {
    nullable: true
  })
  invitations?: InvitationUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => NotificationUpdateManyWithoutUserInput, {
    nullable: true
  })
  notifications?: NotificationUpdateManyWithoutUserInput | undefined;
}