import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { InvitationCreateWithoutUserInput } from "../inputs/InvitationCreateWithoutUserInput";
import { InvitationUpdateWithoutUserInput } from "../inputs/InvitationUpdateWithoutUserInput";
import { InvitationWhereUniqueInput } from "../inputs/InvitationWhereUniqueInput";

@TypeGraphQL.InputType("InvitationUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class InvitationUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => InvitationWhereUniqueInput, {
    nullable: false
  })
  where!: InvitationWhereUniqueInput;

  @TypeGraphQL.Field(_type => InvitationUpdateWithoutUserInput, {
    nullable: false
  })
  update!: InvitationUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => InvitationCreateWithoutUserInput, {
    nullable: false
  })
  create!: InvitationCreateWithoutUserInput;
}
