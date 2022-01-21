import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InvitationCreateInput } from "../../../inputs/InvitationCreateInput";
import { InvitationUpdateInput } from "../../../inputs/InvitationUpdateInput";
import { InvitationWhereUniqueInput } from "../../../inputs/InvitationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertInvitationArgs {
  @TypeGraphQL.Field(_type => InvitationWhereUniqueInput, {
    nullable: false
  })
  where!: InvitationWhereUniqueInput;

  @TypeGraphQL.Field(_type => InvitationCreateInput, {
    nullable: false
  })
  create!: InvitationCreateInput;

  @TypeGraphQL.Field(_type => InvitationUpdateInput, {
    nullable: false
  })
  update!: InvitationUpdateInput;
}
