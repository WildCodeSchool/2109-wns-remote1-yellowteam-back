import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ResetPasswordCreateInput } from "../../../inputs/ResetPasswordCreateInput";

@TypeGraphQL.ArgsType()
export class CreateResetPasswordArgs {
  @TypeGraphQL.Field(_type => ResetPasswordCreateInput, {
    nullable: false
  })
  data!: ResetPasswordCreateInput;
}
