import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InvitationWhereUniqueInput } from "../../../inputs/InvitationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteInvitationArgs {
  @TypeGraphQL.Field(_type => InvitationWhereUniqueInput, {
    nullable: false
  })
  where!: InvitationWhereUniqueInput;
}
