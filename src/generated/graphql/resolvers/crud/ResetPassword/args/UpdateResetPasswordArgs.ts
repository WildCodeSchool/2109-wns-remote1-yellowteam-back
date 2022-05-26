import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ResetPasswordUpdateInput } from "../../../inputs/ResetPasswordUpdateInput";
import { ResetPasswordWhereUniqueInput } from "../../../inputs/ResetPasswordWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateResetPasswordArgs {
  @TypeGraphQL.Field(_type => ResetPasswordUpdateInput, {
    nullable: false
  })
  data!: ResetPasswordUpdateInput;

  @TypeGraphQL.Field(_type => ResetPasswordWhereUniqueInput, {
    nullable: false
  })
  where!: ResetPasswordWhereUniqueInput;
}
