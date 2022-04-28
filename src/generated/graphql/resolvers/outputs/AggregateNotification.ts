import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationCountAggregate } from "../outputs/NotificationCountAggregate";
import { NotificationMaxAggregate } from "../outputs/NotificationMaxAggregate";
import { NotificationMinAggregate } from "../outputs/NotificationMinAggregate";

@TypeGraphQL.ObjectType("AggregateNotification", {
  isAbstract: true
})
export class AggregateNotification {
  @TypeGraphQL.Field(_type => NotificationCountAggregate, {
    nullable: true
  })
  _count!: NotificationCountAggregate | null;

  @TypeGraphQL.Field(_type => NotificationMinAggregate, {
    nullable: true
  })
  _min!: NotificationMinAggregate | null;

  @TypeGraphQL.Field(_type => NotificationMaxAggregate, {
    nullable: true
  })
  _max!: NotificationMaxAggregate | null;
}
