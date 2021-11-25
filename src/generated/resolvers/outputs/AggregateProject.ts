import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectAvgAggregate } from "./ProjectAvgAggregate";
import { ProjectCountAggregate } from "./ProjectCountAggregate";
import { ProjectMaxAggregate } from "./ProjectMaxAggregate";
import { ProjectMinAggregate } from "./ProjectMinAggregate";
import { ProjectSumAggregate } from "./ProjectSumAggregate";

@TypeGraphQL.ObjectType("AggregateProject", {
  isAbstract: true
})
export class AggregateProject {
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
