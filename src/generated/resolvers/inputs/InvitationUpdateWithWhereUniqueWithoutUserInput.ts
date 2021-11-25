import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InvitationUpdateWithoutUserInput } from "./InvitationUpdateWithoutUserInput";
import { InvitationWhereUniqueInput } from "./InvitationWhereUniqueInput";

@TypeGraphQL.InputType("InvitationUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class InvitationUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => InvitationWhereUniqueInput, {
    nullable: false
  })
  where!: InvitationWhereUniqueInput;

  @TypeGraphQL.Field(_type => InvitationUpdateWithoutUserInput, {
    nullable: false
  })
  data!: InvitationUpdateWithoutUserInput;
}
