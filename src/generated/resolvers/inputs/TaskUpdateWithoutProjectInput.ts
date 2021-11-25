import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "./BoolFieldUpdateOperationsInput";
import { CommentUpdateManyWithoutTaskInput } from "./CommentUpdateManyWithoutTaskInput";
import { DateTimeFieldUpdateOperationsInput } from "./DateTimeFieldUpdateOperationsInput";
import { EnumStatusFieldUpdateOperationsInput } from "./EnumStatusFieldUpdateOperationsInput";
import { FileUpdateManyWithoutTaskInput } from "./FileUpdateManyWithoutTaskInput";
import { IntFieldUpdateOperationsInput } from "./IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "./StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutTaskInput } from "./UserUpdateOneRequiredWithoutTaskInput";

@TypeGraphQL.InputType("TaskUpdateWithoutProjectInput", {
  isAbstract: true
})
export class TaskUpdateWithoutProjectInput {
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

  @TypeGraphQL.Field(_type => FileUpdateManyWithoutTaskInput, {
    nullable: true
  })
  files?: FileUpdateManyWithoutTaskInput | undefined;

  @TypeGraphQL.Field(_type => CommentUpdateManyWithoutTaskInput, {
    nullable: true
  })
  comments?: CommentUpdateManyWithoutTaskInput | undefined;
}
