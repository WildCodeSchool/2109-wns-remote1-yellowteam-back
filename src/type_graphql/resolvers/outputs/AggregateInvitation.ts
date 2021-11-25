import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InvitationCountAggregate } from "../outputs/InvitationCountAggregate";
import { InvitationMaxAggregate } from "../outputs/InvitationMaxAggregate";
import { InvitationMinAggregate } from "../outputs/InvitationMinAggregate";

@TypeGraphQL.ObjectType("AggregateInvitation", {
  isAbstract: true
})
export class AggregateInvitation {
  @TypeGraphQL.Field(_type => InvitationCountAggregate, {
    nullable: true
  })
  _count!: InvitationCountAggregate | null;

  @TypeGraphQL.Field(_type => InvitationMinAggregate, {
    nullable: true
  })
  _min!: InvitationMinAggregate | null;

  @TypeGraphQL.Field(_type => InvitationMaxAggregate, {
    nullable: true
  })
  _max!: InvitationMaxAggregate | null;
}
