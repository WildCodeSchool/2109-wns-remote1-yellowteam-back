import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Status } from "../../enums/Status";

@TypeGraphQL.InputType("NestedEnumStatusFilter", {
  isAbstract: true
})
export class NestedEnumStatusFilter {
  @TypeGraphQL.Field(_type => Status, {
    nullable: true
  })
  equals?: "IN_PROGRESS" | "NOT_STARTED" | "FIHISHED" | undefined;

  @TypeGraphQL.Field(_type => [Status], {
    nullable: true
  })
  in?: Array<"IN_PROGRESS" | "NOT_STARTED" | "FIHISHED"> | undefined;

  @TypeGraphQL.Field(_type => [Status], {
    nullable: true
  })
  notIn?: Array<"IN_PROGRESS" | "NOT_STARTED" | "FIHISHED"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumStatusFilter, {
    nullable: true
  })
  not?: NestedEnumStatusFilter | undefined;
}
