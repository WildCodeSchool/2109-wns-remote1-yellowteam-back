import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskAvgAggregate } from "./TaskAvgAggregate";
import { TaskCountAggregate } from "./TaskCountAggregate";
import { TaskMaxAggregate } from "./TaskMaxAggregate";
import { TaskMinAggregate } from "./TaskMinAggregate";
import { TaskSumAggregate } from "./TaskSumAggregate";
import { Status } from "../../enums/Status";

@TypeGraphQL.ObjectType("TaskGroupBy", {
  isAbstract: true
})
export class TaskGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  private!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  is_disabled!: boolean;

  @TypeGraphQL.Field(_type => Status, {
    nullable: false
  })
  status_task!: "IN_PROGRESS" | "NOT_STARTED" | "FIHISHED";

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  total_time_spent!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  start_date!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  end_date!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  projectId!: string;

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
