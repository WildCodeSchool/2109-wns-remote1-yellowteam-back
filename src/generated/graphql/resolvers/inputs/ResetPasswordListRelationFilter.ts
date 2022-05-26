import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ResetPasswordWhereInput } from "../inputs/ResetPasswordWhereInput";

@TypeGraphQL.InputType("ResetPasswordListRelationFilter", {
  isAbstract: true
})
export class ResetPasswordListRelationFilter {
  @TypeGraphQL.Field(_type => ResetPasswordWhereInput, {
    nullable: true
  })
  every?: ResetPasswordWhereInput | undefined;

  @TypeGraphQL.Field(_type => ResetPasswordWhereInput, {
    nullable: true
  })
  some?: ResetPasswordWhereInput | undefined;

  @TypeGraphQL.Field(_type => ResetPasswordWhereInput, {
    nullable: true
  })
  none?: ResetPasswordWhereInput | undefined;
}
