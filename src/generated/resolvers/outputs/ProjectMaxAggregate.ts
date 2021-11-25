import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Status } from "../../enums/Status";

@TypeGraphQL.ObjectType("ProjectMaxAggregate", {
  isAbstract: true
})
export class ProjectMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ownerId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  private!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  is_disabled!: boolean | null;

  @TypeGraphQL.Field(_type => Status, {
    nullable: true
  })
  status_project!: "IN_PROGRESS" | "NOT_STARTED" | "FIHISHED" | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  total_time_spent!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  start_date!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  end_date!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  due_date!: Date | null;
}
