import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileAvgAggregate } from "./FileAvgAggregate";
import { FileCountAggregate } from "./FileCountAggregate";
import { FileMaxAggregate } from "./FileMaxAggregate";
import { FileMinAggregate } from "./FileMinAggregate";
import { FileSumAggregate } from "./FileSumAggregate";

@TypeGraphQL.ObjectType("AggregateFile", {
  isAbstract: true
})
export class AggregateFile {
  @TypeGraphQL.Field(_type => FileCountAggregate, {
    nullable: true
  })
  _count!: FileCountAggregate | null;

  @TypeGraphQL.Field(_type => FileAvgAggregate, {
    nullable: true
  })
  _avg!: FileAvgAggregate | null;

  @TypeGraphQL.Field(_type => FileSumAggregate, {
    nullable: true
  })
  _sum!: FileSumAggregate | null;

  @TypeGraphQL.Field(_type => FileMinAggregate, {
    nullable: true
  })
  _min!: FileMinAggregate | null;

  @TypeGraphQL.Field(_type => FileMaxAggregate, {
    nullable: true
  })
  _max!: FileMaxAggregate | null;
}
