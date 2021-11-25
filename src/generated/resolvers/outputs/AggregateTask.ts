import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskAvgAggregate } from "./TaskAvgAggregate";
import { TaskCountAggregate } from "./TaskCountAggregate";
import { TaskMaxAggregate } from "./TaskMaxAggregate";
import { TaskMinAggregate } from "./TaskMinAggregate";
import { TaskSumAggregate } from "./TaskSumAggregate";

@TypeGraphQL.ObjectType("AggregateTask", {
  isAbstract: true
})
export class AggregateTask {
  @TypeGraphQL.Field(_type => TaskCountAggregate, {
    nullable: true
  })
  _count!: TaskCountAggregate | null;

  @TypeGraphQL.Field(_type => TaskAvgAggregate, {
    nullable: true
  })
  _avg!: TaskAvgAggregate | null;

  @TypeGraphQL.Field(_type => TaskSumAggregate, {
    nullable: true
  })
  _sum!: TaskSumAggregate | null;

  @TypeGraphQL.Field(_type => TaskMinAggregate, {
    nullable: true
  })
  _min!: TaskMinAggregate | null;

  @TypeGraphQL.Field(_type => TaskMaxAggregate, {
    nullable: true
  })
  _max!: TaskMaxAggregate | null;
}
