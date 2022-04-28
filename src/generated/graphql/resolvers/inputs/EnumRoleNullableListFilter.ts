import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Role } from "../../enums/Role";

@TypeGraphQL.InputType("EnumRoleNullableListFilter", {
  isAbstract: true
})
export class EnumRoleNullableListFilter {
  @TypeGraphQL.Field(_type => [Role], {
    nullable: true
  })
  equals?: Array<"SUPER_ADMIN" | "ADMIN" | "MANAGER" | "USER"> | undefined;

  @TypeGraphQL.Field(_type => Role, {
    nullable: true
  })
  has?: "SUPER_ADMIN" | "ADMIN" | "MANAGER" | "USER" | undefined;

  @TypeGraphQL.Field(_type => [Role], {
    nullable: true
  })
  hasEvery?: Array<"SUPER_ADMIN" | "ADMIN" | "MANAGER" | "USER"> | undefined;

  @TypeGraphQL.Field(_type => [Role], {
    nullable: true
  })
  hasSome?: Array<"SUPER_ADMIN" | "ADMIN" | "MANAGER" | "USER"> | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isEmpty?: boolean | undefined;
}
