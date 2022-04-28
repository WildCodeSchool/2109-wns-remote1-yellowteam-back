import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ProjectUpdateOneWithoutCommentsInput } from "../inputs/ProjectUpdateOneWithoutCommentsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateOneWithoutCommentsInput } from "../inputs/TaskUpdateOneWithoutCommentsInput";
import { UserUpdateOneWithoutProject_commentsInput } from "../inputs/UserUpdateOneWithoutProject_commentsInput";

@TypeGraphQL.InputType("CommentUpdateWithoutUser_task_commentsInput", {
  isAbstract: true
})
export class CommentUpdateWithoutUser_task_commentsInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  is_disabled?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  content?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpdateOneWithoutCommentsInput, {
    nullable: true
  })
  project?: ProjectUpdateOneWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpdateOneWithoutCommentsInput, {
    nullable: true
  })
  task?: TaskUpdateOneWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutProject_commentsInput, {
    nullable: true
  })
  user_project_comments?: UserUpdateOneWithoutProject_commentsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: DateTimeFieldUpdateOperationsInput | undefined;
}
