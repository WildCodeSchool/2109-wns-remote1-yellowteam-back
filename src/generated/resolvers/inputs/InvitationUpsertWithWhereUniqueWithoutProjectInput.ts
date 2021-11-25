import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InvitationCreateWithoutProjectInput } from "./InvitationCreateWithoutProjectInput";
import { InvitationUpdateWithoutProjectInput } from "./InvitationUpdateWithoutProjectInput";
import { InvitationWhereUniqueInput } from "./InvitationWhereUniqueInput";

@TypeGraphQL.InputType("InvitationUpsertWithWhereUniqueWithoutProjectInput", {
  isAbstract: true
})
export class InvitationUpsertWithWhereUniqueWithoutProjectInput {
  @TypeGraphQL.Field(_type => InvitationWhereUniqueInput, {
    nullable: false
  })
  where!: InvitationWhereUniqueInput;

  @TypeGraphQL.Field(_type => InvitationUpdateWithoutProjectInput, {
    nullable: false
  })
  update!: InvitationUpdateWithoutProjectInput;

  @TypeGraphQL.Field(_type => InvitationCreateWithoutProjectInput, {
    nullable: false
  })
  create!: InvitationCreateWithoutProjectInput;
}
