import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ResetPasswordCreateManyInput } from "../../../inputs/ResetPasswordCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyResetPasswordArgs {
  @TypeGraphQL.Field(_type => [ResetPasswordCreateManyInput], {
    nullable: false
  })
  data!: ResetPasswordCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
