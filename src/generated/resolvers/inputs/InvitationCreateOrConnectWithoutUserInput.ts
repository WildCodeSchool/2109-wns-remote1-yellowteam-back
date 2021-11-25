import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InvitationCreateWithoutUserInput } from "./InvitationCreateWithoutUserInput";
import { InvitationWhereUniqueInput } from "./InvitationWhereUniqueInput";

@TypeGraphQL.InputType("InvitationCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class InvitationCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => InvitationWhereUniqueInput, {
    nullable: false
  })
  where!: InvitationWhereUniqueInput;

  @TypeGraphQL.Field(_type => InvitationCreateWithoutUserInput, {
    nullable: false
  })
  create!: InvitationCreateWithoutUserInput;
}
