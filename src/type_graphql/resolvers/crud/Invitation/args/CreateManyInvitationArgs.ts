import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InvitationCreateManyInput } from "../../../inputs/InvitationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyInvitationArgs {
  @TypeGraphQL.Field(_type => [InvitationCreateManyInput], {
    nullable: false
  })
  data!: InvitationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
