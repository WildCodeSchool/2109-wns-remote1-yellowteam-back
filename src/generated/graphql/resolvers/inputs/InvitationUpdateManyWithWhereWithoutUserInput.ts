import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { InvitationScalarWhereInput } from "../inputs/InvitationScalarWhereInput";
import { InvitationUpdateManyMutationInput } from "../inputs/InvitationUpdateManyMutationInput";

@TypeGraphQL.InputType("InvitationUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class InvitationUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => InvitationScalarWhereInput, {
    nullable: false
  })
  where!: InvitationScalarWhereInput;

  @TypeGraphQL.Field(_type => InvitationUpdateManyMutationInput, {
    nullable: false
  })
  data!: InvitationUpdateManyMutationInput;
}
