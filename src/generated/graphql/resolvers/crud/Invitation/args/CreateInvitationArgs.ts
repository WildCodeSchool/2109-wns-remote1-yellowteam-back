import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InvitationCreateInput } from "../../../inputs/InvitationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateInvitationArgs {
  @TypeGraphQL.Field(_type => InvitationCreateInput, {
    nullable: false
  })
  data!: InvitationCreateInput;
}
