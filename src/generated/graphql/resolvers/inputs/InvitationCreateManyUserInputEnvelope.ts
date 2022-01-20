import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InvitationCreateManyUserInput } from "../inputs/InvitationCreateManyUserInput";

@TypeGraphQL.InputType("InvitationCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class InvitationCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [InvitationCreateManyUserInput], {
    nullable: false
  })
  data!: InvitationCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
