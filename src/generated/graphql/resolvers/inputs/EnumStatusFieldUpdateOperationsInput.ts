import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { Status } from "../../enums/Status";

@TypeGraphQL.InputType("EnumStatusFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumStatusFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => Status, {
    nullable: true
  })
  set?: "IN_PROGRESS" | "NOT_STARTED" | "FIHISHED" | undefined;
}
