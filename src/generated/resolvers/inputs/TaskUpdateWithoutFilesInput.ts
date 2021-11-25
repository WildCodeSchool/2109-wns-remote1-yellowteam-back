import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "./BoolFieldUpdateOperationsInput";
import { CommentUpdateManyWithoutTaskInput } from "./CommentUpdateManyWithoutTaskInput";
import { DateTimeFieldUpdateOperationsInput } from "./DateTimeFieldUpdateOperationsInput";
import { EnumStatusFieldUpdateOperationsInput } from "./EnumStatusFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "./IntFieldUpdateOperationsInput";
import { ProjectUpdateOneRequiredWithoutTasksInput } from "./ProjectUpdateOneRequiredWithoutTasksInput";
import { StringFieldUpdateOperationsInput } from "./StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutTaskInput } from "./UserUpdateOneRequiredWithoutTaskInput";

@TypeGraphQL.InputType("TaskUpdateWithoutFilesInput", {
  isAbstract: true
})
export class TaskUpdateWithoutFilesInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  private?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  is_disabled?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumStatusFieldUpdateOperationsInput, {
    nullable: true
  })
  status_task?: EnumStatusFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  total_time_spent?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  start_date?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  end_date?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutTaskInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutTaskInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpdateOneRequiredWithoutTasksInput, {
    nullable: true
  })
  project?: ProjectUpdateOneRequiredWithoutTasksInput | undefined;

  @TypeGraphQL.Field(_type => CommentUpdateManyWithoutTaskInput, {
    nullable: true
  })
  comments?: CommentUpdateManyWithoutTaskInput | undefined;
}
