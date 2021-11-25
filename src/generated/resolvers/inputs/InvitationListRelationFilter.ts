import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InvitationWhereInput } from "./InvitationWhereInput";

@TypeGraphQL.InputType("InvitationListRelationFilter", {
  isAbstract: true
})
export class InvitationListRelationFilter {
  @TypeGraphQL.Field(_type => InvitationWhereInput, {
    nullable: true
  })
  every?: InvitationWhereInput | undefined;

  @TypeGraphQL.Field(_type => InvitationWhereInput, {
    nullable: true
  })
  some?: InvitationWhereInput | undefined;

  @TypeGraphQL.Field(_type => InvitationWhereInput, {
    nullable: true
  })
  none?: InvitationWhereInput | undefined;
}
