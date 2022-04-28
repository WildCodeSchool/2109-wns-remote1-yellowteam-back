import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { InvitationUpdateWithoutProjectInput } from "../inputs/InvitationUpdateWithoutProjectInput";
import { InvitationWhereUniqueInput } from "../inputs/InvitationWhereUniqueInput";

@TypeGraphQL.InputType("InvitationUpdateWithWhereUniqueWithoutProjectInput", {
  isAbstract: true
})
export class InvitationUpdateWithWhereUniqueWithoutProjectInput {
  @TypeGraphQL.Field(_type => InvitationWhereUniqueInput, {
    nullable: false
  })
  where!: InvitationWhereUniqueInput;

  @TypeGraphQL.Field(_type => InvitationUpdateWithoutProjectInput, {
    nullable: false
  })
  data!: InvitationUpdateWithoutProjectInput;
}
