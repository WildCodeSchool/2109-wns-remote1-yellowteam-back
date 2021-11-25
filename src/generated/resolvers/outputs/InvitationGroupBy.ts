import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InvitationCountAggregate } from "./InvitationCountAggregate";
import { InvitationMaxAggregate } from "./InvitationMaxAggregate";
import { InvitationMinAggregate } from "./InvitationMinAggregate";
import { Status_Invitation } from "../../enums/Status_Invitation";

@TypeGraphQL.ObjectType("InvitationGroupBy", {
  isAbstract: true
})
export class InvitationGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Status_Invitation, {
    nullable: false
  })
  status!: "PENDING" | "ACCEPTED" | "REJECTED";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  projectId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

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
