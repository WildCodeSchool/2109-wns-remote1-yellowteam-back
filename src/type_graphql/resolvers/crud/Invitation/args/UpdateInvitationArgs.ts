import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InvitationUpdateInput } from "../../../inputs/InvitationUpdateInput";
import { InvitationWhereUniqueInput } from "../../../inputs/InvitationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateInvitationArgs {
  @TypeGraphQL.Field(_type => InvitationUpdateInput, {
    nullable: false
  })
  data!: InvitationUpdateInput;

  @TypeGraphQL.Field(_type => InvitationWhereUniqueInput, {
    nullable: false
  })
  where!: InvitationWhereUniqueInput;
}
