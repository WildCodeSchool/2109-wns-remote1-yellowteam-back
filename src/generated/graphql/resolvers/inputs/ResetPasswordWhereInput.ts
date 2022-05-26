import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("ResetPasswordWhereInput", {
  isAbstract: true
})
export class ResetPasswordWhereInput {
  @TypeGraphQL.Field(_type => [ResetPasswordWhereInput], {
    nullable: true
  })
  AND?: ResetPasswordWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ResetPasswordWhereInput], {
    nullable: true
  })
  OR?: ResetPasswordWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ResetPasswordWhereInput], {
    nullable: true
  })
  NOT?: ResetPasswordWhereInput[] | undefined;
}
