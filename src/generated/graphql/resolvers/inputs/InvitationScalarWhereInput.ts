import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumStatus_InvitationFilter } from "../inputs/EnumStatus_InvitationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

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
  project_id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  user_id?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updated_at?: DateTimeFilter | undefined;
}
