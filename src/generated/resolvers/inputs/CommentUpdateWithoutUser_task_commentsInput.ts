import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "./BoolFieldUpdateOperationsInput";
import { ProjectUpdateOneWithoutCommentsInput } from "./ProjectUpdateOneWithoutCommentsInput";
import { StringFieldUpdateOperationsInput } from "./StringFieldUpdateOperationsInput";
import { TaskUpdateOneWithoutCommentsInput } from "./TaskUpdateOneWithoutCommentsInput";
import { UserUpdateOneWithoutProject_commentsInput } from "./UserUpdateOneWithoutProject_commentsInput";

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
}
