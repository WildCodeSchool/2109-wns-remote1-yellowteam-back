import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ResetPasswordCreateManyUserInput } from "../inputs/ResetPasswordCreateManyUserInput";

@TypeGraphQL.InputType("ResetPasswordCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class ResetPasswordCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [ResetPasswordCreateManyUserInput], {
    nullable: false
  })
  data!: ResetPasswordCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
