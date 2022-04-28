import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectAvgAggregate } from "../outputs/ProjectAvgAggregate";
import { ProjectCountAggregate } from "../outputs/ProjectCountAggregate";
import { ProjectMaxAggregate } from "../outputs/ProjectMaxAggregate";
import { ProjectMinAggregate } from "../outputs/ProjectMinAggregate";
import { ProjectSumAggregate } from "../outputs/ProjectSumAggregate";
import { Status } from "../../enums/Status";

@TypeGraphQL.ObjectType("ProjectGroupBy", {
  isAbstract: true
})
export class ProjectGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  project_owner_id!: string;

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
  status_project!: "IN_PROGRESS" | "NOT_STARTED" | "FIHISHED";

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

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  due_date!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updated_at!: Date;

  @TypeGraphQL.Field(_type => ProjectCountAggregate, {
    nullable: true
  })
  _count!: ProjectCountAggregate | null;

  @TypeGraphQL.Field(_type => ProjectAvgAggregate, {
    nullable: true
  })
  _avg!: ProjectAvgAggregate | null;

  @TypeGraphQL.Field(_type => ProjectSumAggregate, {
    nullable: true
  })
  _sum!: ProjectSumAggregate | null;

  @TypeGraphQL.Field(_type => ProjectMinAggregate, {
    nullable: true
  })
  _min!: ProjectMinAggregate | null;

  @TypeGraphQL.Field(_type => ProjectMaxAggregate, {
    nullable: true
  })
  _max!: ProjectMaxAggregate | null;
}
