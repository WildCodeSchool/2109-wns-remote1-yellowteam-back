import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InvitationOrderByWithRelationInput } from "../../../inputs/InvitationOrderByWithRelationInput";
import { InvitationWhereInput } from "../../../inputs/InvitationWhereInput";
import { InvitationWhereUniqueInput } from "../../../inputs/InvitationWhereUniqueInput";
import { InvitationScalarFieldEnum } from "../../../../enums/InvitationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyInvitationArgs {
  @TypeGraphQL.Field(_type => InvitationWhereInput, {
    nullable: true
  })
  where?: InvitationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [InvitationOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: InvitationOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => InvitationWhereUniqueInput, {
    nullable: true
  })
  cursor?: InvitationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [InvitationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "status" | "email" | "projectId" | "userId"> | undefined;
}
