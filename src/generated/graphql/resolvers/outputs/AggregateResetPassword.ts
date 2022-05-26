import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ResetPasswordCountAggregate } from "../outputs/ResetPasswordCountAggregate";
import { ResetPasswordMaxAggregate } from "../outputs/ResetPasswordMaxAggregate";
import { ResetPasswordMinAggregate } from "../outputs/ResetPasswordMinAggregate";

@TypeGraphQL.ObjectType("AggregateResetPassword", {
  isAbstract: true
})
export class AggregateResetPassword {
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
