import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumStatus_InvitationFieldUpdateOperationsInput } from "./EnumStatus_InvitationFieldUpdateOperationsInput";
import { ProjectUpdateOneRequiredWithoutInvitationsInput } from "./ProjectUpdateOneRequiredWithoutInvitationsInput";
import { StringFieldUpdateOperationsInput } from "./StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("InvitationUpdateWithoutUserInput", {
  isAbstract: true
})
export class InvitationUpdateWithoutUserInput {
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
}
