import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ResetPasswordScalarWhereInput } from "../inputs/ResetPasswordScalarWhereInput";
import { ResetPasswordUpdateManyMutationInput } from "../inputs/ResetPasswordUpdateManyMutationInput";

@TypeGraphQL.InputType("ResetPasswordUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class ResetPasswordUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => ResetPasswordScalarWhereInput, {
    nullable: false
  })
  where!: ResetPasswordScalarWhereInput;

  @TypeGraphQL.Field(_type => ResetPasswordUpdateManyMutationInput, {
    nullable: false
  })
  data!: ResetPasswordUpdateManyMutationInput;
}
