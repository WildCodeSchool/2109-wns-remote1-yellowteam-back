import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "./BoolFieldUpdateOperationsInput";
import { ProjectUpdateOneWithoutCommentsInput } from "./ProjectUpdateOneWithoutCommentsInput";
import { StringFieldUpdateOperationsInput } from "./StringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutProject_commentsInput } from "./UserUpdateOneWithoutProject_commentsInput";
import { UserUpdateOneWithoutTask_commentsInput } from "./UserUpdateOneWithoutTask_commentsInput";

@TypeGraphQL.InputType("CommentUpdateWithoutTaskInput", {
  isAbstract: true
})
export class CommentUpdateWithoutTaskInput {
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

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutTask_commentsInput, {
    nullable: true
  })
  user_task_comments?: UserUpdateOneWithoutTask_commentsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutProject_commentsInput, {
    nullable: true
  })
  user_project_comments?: UserUpdateOneWithoutProject_commentsInput | undefined;
}
