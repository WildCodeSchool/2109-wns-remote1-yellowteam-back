import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InvitationWhereInput } from "../../../inputs/InvitationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyInvitationArgs {
  @TypeGraphQL.Field(_type => InvitationWhereInput, {
    nullable: true
  })
  where?: InvitationWhereInput | undefined;
}
