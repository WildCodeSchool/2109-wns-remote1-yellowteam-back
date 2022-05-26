import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ResetPasswordWhereInput } from "../../../inputs/ResetPasswordWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyResetPasswordArgs {
  @TypeGraphQL.Field(_type => ResetPasswordWhereInput, {
    nullable: true
  })
  where?: ResetPasswordWhereInput | undefined;
}
