import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { InvitationCreateManyProjectInput } from "../inputs/InvitationCreateManyProjectInput";

@TypeGraphQL.InputType("InvitationCreateManyProjectInputEnvelope", {
  isAbstract: true
})
export class InvitationCreateManyProjectInputEnvelope {
  @TypeGraphQL.Field(_type => [InvitationCreateManyProjectInput], {
    nullable: false
  })
  data!: InvitationCreateManyProjectInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
