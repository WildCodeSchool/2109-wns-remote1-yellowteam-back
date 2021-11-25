import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumStatus_InvitationFilter } from "./NestedEnumStatus_InvitationFilter";
import { Status_Invitation } from "../../enums/Status_Invitation";

@TypeGraphQL.InputType("EnumStatus_InvitationFilter", {
  isAbstract: true
})
export class EnumStatus_InvitationFilter {
  @TypeGraphQL.Field(_type => Status_Invitation, {
    nullable: true
  })
  equals?: "PENDING" | "ACCEPTED" | "REJECTED" | undefined;

  @TypeGraphQL.Field(_type => [Status_Invitation], {
    nullable: true
  })
  in?: Array<"PENDING" | "ACCEPTED" | "REJECTED"> | undefined;

  @TypeGraphQL.Field(_type => [Status_Invitation], {
    nullable: true
  })
  notIn?: Array<"PENDING" | "ACCEPTED" | "REJECTED"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumStatus_InvitationFilter, {
    nullable: true
  })
  not?: NestedEnumStatus_InvitationFilter | undefined;
}
