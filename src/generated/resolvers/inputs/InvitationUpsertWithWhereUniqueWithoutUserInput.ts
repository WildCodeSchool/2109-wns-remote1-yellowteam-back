import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InvitationCreateWithoutUserInput } from "./InvitationCreateWithoutUserInput";
import { InvitationUpdateWithoutUserInput } from "./InvitationUpdateWithoutUserInput";
import { InvitationWhereUniqueInput } from "./InvitationWhereUniqueInput";

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
