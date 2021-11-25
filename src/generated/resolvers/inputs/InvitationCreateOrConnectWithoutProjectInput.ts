import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InvitationCreateWithoutProjectInput } from "./InvitationCreateWithoutProjectInput";
import { InvitationWhereUniqueInput } from "./InvitationWhereUniqueInput";

@TypeGraphQL.InputType("InvitationCreateOrConnectWithoutProjectInput", {
  isAbstract: true
})
export class InvitationCreateOrConnectWithoutProjectInput {
  @TypeGraphQL.Field(_type => InvitationWhereUniqueInput, {
    nullable: false
  })
  where!: InvitationWhereUniqueInput;

  @TypeGraphQL.Field(_type => InvitationCreateWithoutProjectInput, {
    nullable: false
  })
  create!: InvitationCreateWithoutProjectInput;
}
