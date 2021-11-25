import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectWhereInput } from "./ProjectWhereInput";

@TypeGraphQL.InputType("ProjectListRelationFilter", {
  isAbstract: true
})
export class ProjectListRelationFilter {
  @TypeGraphQL.Field(_type => ProjectWhereInput, {
    nullable: true
  })
  every?: ProjectWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProjectWhereInput, {
    nullable: true
  })
  some?: ProjectWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProjectWhereInput, {
    nullable: true
  })
  none?: ProjectWhereInput | undefined;
}
