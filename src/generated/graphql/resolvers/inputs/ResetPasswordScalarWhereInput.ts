import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ResetPasswordScalarWhereInput", {
  isAbstract: true
})
export class ResetPasswordScalarWhereInput {
  @TypeGraphQL.Field(_type => [ResetPasswordScalarWhereInput], {
    nullable: true
  })
  AND?: ResetPasswordScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ResetPasswordScalarWhereInput], {
    nullable: true
  })
  OR?: ResetPasswordScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ResetPasswordScalarWhereInput], {
    nullable: true
  })
  NOT?: ResetPasswordScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;
}
