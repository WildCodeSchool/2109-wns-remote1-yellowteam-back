import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "./BoolFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "./IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "./StringFieldUpdateOperationsInput";
import { TaskUpdateOneWithoutFilesInput } from "./TaskUpdateOneWithoutFilesInput";
import { UserUpdateOneRequiredWithoutFilesInput } from "./UserUpdateOneRequiredWithoutFilesInput";

@TypeGraphQL.InputType("FileUpdateWithoutProjectInput", {
  isAbstract: true
})
export class FileUpdateWithoutProjectInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  path?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  size?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  type?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  is_disabled?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutFilesInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutFilesInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpdateOneWithoutFilesInput, {
    nullable: true
  })
  task?: TaskUpdateOneWithoutFilesInput | undefined;
}
