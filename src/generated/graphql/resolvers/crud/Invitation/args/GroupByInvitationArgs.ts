import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InvitationOrderByWithAggregationInput } from "../../../inputs/InvitationOrderByWithAggregationInput";
import { InvitationScalarWhereWithAggregatesInput } from "../../../inputs/InvitationScalarWhereWithAggregatesInput";
import { InvitationWhereInput } from "../../../inputs/InvitationWhereInput";
import { InvitationScalarFieldEnum } from "../../../../enums/InvitationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByInvitationArgs {
  @TypeGraphQL.Field(_type => InvitationWhereInput, {
    nullable: true
  })
  where?: InvitationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [InvitationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: InvitationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [InvitationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "status" | "email" | "project_id" | "user_id" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => InvitationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: InvitationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
