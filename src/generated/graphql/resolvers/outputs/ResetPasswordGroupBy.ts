import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ResetPasswordCountAggregate } from "../outputs/ResetPasswordCountAggregate";
import { ResetPasswordMaxAggregate } from "../outputs/ResetPasswordMaxAggregate";
import { ResetPasswordMinAggregate } from "../outputs/ResetPasswordMinAggregate";

@TypeGraphQL.ObjectType("ResetPasswordGroupBy", {
  isAbstract: true
})
export class ResetPasswordGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  user_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  token!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updated_at!: Date;

  @TypeGraphQL.Field(_type => ResetPasswordCountAggregate, {
    nullable: true
  })
  _count!: ResetPasswordCountAggregate | null;

  @TypeGraphQL.Field(_type => ResetPasswordMinAggregate, {
    nullable: true
  })
  _min!: ResetPasswordMinAggregate | null;

  @TypeGraphQL.Field(_type => ResetPasswordMaxAggregate, {
    nullable: true
  })
  _max!: ResetPasswordMaxAggregate | null;
}
