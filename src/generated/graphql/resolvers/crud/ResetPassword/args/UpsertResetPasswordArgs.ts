import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ResetPasswordCreateInput } from "../../../inputs/ResetPasswordCreateInput";
import { ResetPasswordUpdateInput } from "../../../inputs/ResetPasswordUpdateInput";
import { ResetPasswordWhereUniqueInput } from "../../../inputs/ResetPasswordWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertResetPasswordArgs {
  @TypeGraphQL.Field(_type => ResetPasswordWhereUniqueInput, {
    nullable: false
  })
  where!: ResetPasswordWhereUniqueInput;

  @TypeGraphQL.Field(_type => ResetPasswordCreateInput, {
    nullable: false
  })
  create!: ResetPasswordCreateInput;

  @TypeGraphQL.Field(_type => ResetPasswordUpdateInput, {
    nullable: false
  })
  update!: ResetPasswordUpdateInput;
}
