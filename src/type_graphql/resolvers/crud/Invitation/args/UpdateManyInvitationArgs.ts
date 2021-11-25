import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InvitationUpdateManyMutationInput } from "../../../inputs/InvitationUpdateManyMutationInput";
import { InvitationWhereInput } from "../../../inputs/InvitationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyInvitationArgs {
  @TypeGraphQL.Field(_type => InvitationUpdateManyMutationInput, {
    nullable: false
  })
  data!: InvitationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => InvitationWhereInput, {
    nullable: true
  })
  where?: InvitationWhereInput | undefined;
}
