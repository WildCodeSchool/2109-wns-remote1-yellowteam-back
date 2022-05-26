import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ResetPasswordUpdateManyMutationInput } from "../../../inputs/ResetPasswordUpdateManyMutationInput";
import { ResetPasswordWhereInput } from "../../../inputs/ResetPasswordWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyResetPasswordArgs {
  @TypeGraphQL.Field(_type => ResetPasswordUpdateManyMutationInput, {
    nullable: false
  })
  data!: ResetPasswordUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ResetPasswordWhereInput, {
    nullable: true
  })
  where?: ResetPasswordWhereInput | undefined;
}
