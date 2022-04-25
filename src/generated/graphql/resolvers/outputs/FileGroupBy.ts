import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileAvgAggregate } from "../outputs/FileAvgAggregate";
import { FileCountAggregate } from "../outputs/FileCountAggregate";
import { FileMaxAggregate } from "../outputs/FileMaxAggregate";
import { FileMinAggregate } from "../outputs/FileMinAggregate";
import { FileSumAggregate } from "../outputs/FileSumAggregate";

@TypeGraphQL.ObjectType("FileGroupBy", {
  isAbstract: true
})
export class FileGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  path!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  size!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  type!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  user_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  project_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  task_id!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  is_disabled!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updated_at!: Date;

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
