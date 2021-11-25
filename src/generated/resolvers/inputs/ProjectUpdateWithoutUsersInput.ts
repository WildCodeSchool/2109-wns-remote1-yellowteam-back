import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "./BoolFieldUpdateOperationsInput";
import { CommentUpdateManyWithoutProjectInput } from "./CommentUpdateManyWithoutProjectInput";
import { DateTimeFieldUpdateOperationsInput } from "./DateTimeFieldUpdateOperationsInput";
import { EnumStatusFieldUpdateOperationsInput } from "./EnumStatusFieldUpdateOperationsInput";
import { FileUpdateManyWithoutProjectInput } from "./FileUpdateManyWithoutProjectInput";
import { IntFieldUpdateOperationsInput } from "./IntFieldUpdateOperationsInput";
import { InvitationUpdateManyWithoutProjectInput } from "./InvitationUpdateManyWithoutProjectInput";
import { StringFieldUpdateOperationsInput } from "./StringFieldUpdateOperationsInput";
import { TaskUpdateManyWithoutProjectInput } from "./TaskUpdateManyWithoutProjectInput";

@TypeGraphQL.InputType("ProjectUpdateWithoutUsersInput", {
  isAbstract: true
})
export class ProjectUpdateWithoutUsersInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  ownerId?: StringFieldUpdateOperationsInput | undefined;

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
  status_project?: EnumStatusFieldUpdateOperationsInput | undefined;

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

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  due_date?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpdateManyWithoutProjectInput, {
    nullable: true
  })
  tasks?: TaskUpdateManyWithoutProjectInput | undefined;

  @TypeGraphQL.Field(_type => FileUpdateManyWithoutProjectInput, {
    nullable: true
  })
  files?: FileUpdateManyWithoutProjectInput | undefined;

  @TypeGraphQL.Field(_type => CommentUpdateManyWithoutProjectInput, {
    nullable: true
  })
  comments?: CommentUpdateManyWithoutProjectInput | undefined;

  @TypeGraphQL.Field(_type => InvitationUpdateManyWithoutProjectInput, {
    nullable: true
  })
  invitations?: InvitationUpdateManyWithoutProjectInput | undefined;
}
