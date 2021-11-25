import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "./BoolFieldUpdateOperationsInput";
import { CommentUpdateManyWithoutUser_project_commentsInput } from "./CommentUpdateManyWithoutUser_project_commentsInput";
import { CommentUpdateManyWithoutUser_task_commentsInput } from "./CommentUpdateManyWithoutUser_task_commentsInput";
import { FileUpdateManyWithoutUserInput } from "./FileUpdateManyWithoutUserInput";
import { InvitationUpdateManyWithoutUserInput } from "./InvitationUpdateManyWithoutUserInput";
import { NotificationUpdateManyWithoutUserInput } from "./NotificationUpdateManyWithoutUserInput";
import { ProjectUpdateManyWithoutUsersInput } from "./ProjectUpdateManyWithoutUsersInput";
import { StringFieldUpdateOperationsInput } from "./StringFieldUpdateOperationsInput";
import { TaskUpdateManyWithoutUserInput } from "./TaskUpdateManyWithoutUserInput";
import { UserUpdateroleInput } from "./UserUpdateroleInput";

@TypeGraphQL.InputType("UserUpdateInput", {
  isAbstract: true
})
export class UserUpdateInput {
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

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  is_disabled?: BoolFieldUpdateOperationsInput | undefined;

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

  @TypeGraphQL.Field(_type => NotificationUpdateManyWithoutUserInput, {
    nullable: true
  })
  notifications?: NotificationUpdateManyWithoutUserInput | undefined;
}
