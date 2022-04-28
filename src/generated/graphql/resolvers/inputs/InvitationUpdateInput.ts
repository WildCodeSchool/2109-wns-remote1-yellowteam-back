import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumStatus_InvitationFieldUpdateOperationsInput } from "../inputs/EnumStatus_InvitationFieldUpdateOperationsInput";
import { ProjectUpdateOneRequiredWithoutInvitationsInput } from "../inputs/ProjectUpdateOneRequiredWithoutInvitationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutInvitationsInput } from "../inputs/UserUpdateOneWithoutInvitationsInput";

@TypeGraphQL.InputType("InvitationUpdateInput", {
  isAbstract: true
})
export class InvitationUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumStatus_InvitationFieldUpdateOperationsInput, {
    nullable: true
  })
  status?: EnumStatus_InvitationFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpdateOneRequiredWithoutInvitationsInput, {
    nullable: true
  })
  project?: ProjectUpdateOneRequiredWithoutInvitationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutInvitationsInput, {
    nullable: true
  })
  user?: UserUpdateOneWithoutInvitationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: DateTimeFieldUpdateOperationsInput | undefined;
}
