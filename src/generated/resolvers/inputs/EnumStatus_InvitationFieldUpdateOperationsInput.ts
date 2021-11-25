import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Status_Invitation } from "../../enums/Status_Invitation";

@TypeGraphQL.InputType("EnumStatus_InvitationFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumStatus_InvitationFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => Status_Invitation, {
    nullable: true
  })
  set?: "PENDING" | "ACCEPTED" | "REJECTED" | undefined;
}
