import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumStatus_InvitationFilter } from "./NestedEnumStatus_InvitationFilter";
import { NestedEnumStatus_InvitationWithAggregatesFilter } from "./NestedEnumStatus_InvitationWithAggregatesFilter";
import { NestedIntFilter } from "./NestedIntFilter";
import { Status_Invitation } from "../../enums/Status_Invitation";

@TypeGraphQL.InputType("EnumStatus_InvitationWithAggregatesFilter", {
  isAbstract: true
})
export class EnumStatus_InvitationWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumStatus_InvitationWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumStatus_InvitationWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumStatus_InvitationFilter, {
    nullable: true
  })
  _min?: NestedEnumStatus_InvitationFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumStatus_InvitationFilter, {
    nullable: true
  })
  _max?: NestedEnumStatus_InvitationFilter | undefined;
}
