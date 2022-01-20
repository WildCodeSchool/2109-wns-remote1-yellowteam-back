import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CommentUpdateManyWithoutProjectInput } from "../inputs/CommentUpdateManyWithoutProjectInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumStatusFieldUpdateOperationsInput } from "../inputs/EnumStatusFieldUpdateOperationsInput";
import { FileUpdateManyWithoutProjectInput } from "../inputs/FileUpdateManyWithoutProjectInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { InvitationUpdateManyWithoutProjectInput } from "../inputs/InvitationUpdateManyWithoutProjectInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateManyWithoutProjectInput } from "../inputs/TaskUpdateManyWithoutProjectInput";
import { UserUpdateManyWithoutProjectsInput } from "../inputs/UserUpdateManyWithoutProjectsInput";
import { UserUpdateOneRequiredWithoutOwned_projectsInput } from "../inputs/UserUpdateOneRequiredWithoutOwned_projectsInput";

@TypeGraphQL.InputType("ProjectUpdateInput", {
  isAbstract: true
})
export class ProjectUpdateInput {
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

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateManyWithoutProjectsInput, {
    nullable: true
  })
  users?: UserUpdateManyWithoutProjectsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutOwned_projectsInput, {
    nullable: true
  })
  owner?: UserUpdateOneRequiredWithoutOwned_projectsInput | undefined;

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
