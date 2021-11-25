import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCountAggregate } from "./CommentCountAggregate";
import { CommentMaxAggregate } from "./CommentMaxAggregate";
import { CommentMinAggregate } from "./CommentMinAggregate";

@TypeGraphQL.ObjectType("CommentGroupBy", {
  isAbstract: true
})
export class CommentGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  is_disabled!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  content!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  user_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  project_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  task_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userId!: string | null;

  @TypeGraphQL.Field(_type => CommentCountAggregate, {
    nullable: true
  })
  _count!: CommentCountAggregate | null;

  @TypeGraphQL.Field(_type => CommentMinAggregate, {
    nullable: true
  })
  _min!: CommentMinAggregate | null;

  @TypeGraphQL.Field(_type => CommentMaxAggregate, {
    nullable: true
  })
  _max!: CommentMaxAggregate | null;
}
