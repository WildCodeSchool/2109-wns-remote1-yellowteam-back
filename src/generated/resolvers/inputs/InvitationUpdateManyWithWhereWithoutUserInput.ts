import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InvitationScalarWhereInput } from "./InvitationScalarWhereInput";
import { InvitationUpdateManyMutationInput } from "./InvitationUpdateManyMutationInput";

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
