import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileAvgAggregate } from "../outputs/FileAvgAggregate";
import { FileCountAggregate } from "../outputs/FileCountAggregate";
import { FileMaxAggregate } from "../outputs/FileMaxAggregate";
import { FileMinAggregate } from "../outputs/FileMinAggregate";
import { FileSumAggregate } from "../outputs/FileSumAggregate";

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
