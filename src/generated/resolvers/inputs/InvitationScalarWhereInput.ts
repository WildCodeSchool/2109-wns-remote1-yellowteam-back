import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumStatus_InvitationFilter } from "./EnumStatus_InvitationFilter";
import { StringFilter } from "./StringFilter";

@TypeGraphQL.InputType("InvitationScalarWhereInput", {
  isAbstract: true
})
export class InvitationScalarWhereInput {
  @TypeGraphQL.Field(_type => [InvitationScalarWhereInput], {
    nullable: true
  })
  AND?: InvitationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [InvitationScalarWhereInput], {
    nullable: true
  })
  OR?: InvitationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [InvitationScalarWhereInput], {
    nullable: true
  })
  NOT?: InvitationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumStatus_InvitationFilter, {
    nullable: true
  })
  status?: EnumStatus_InvitationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  projectId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;
}
