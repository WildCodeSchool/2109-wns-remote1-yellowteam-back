import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ResetPasswordOrderByWithAggregationInput } from "../../../inputs/ResetPasswordOrderByWithAggregationInput";
import { ResetPasswordScalarWhereWithAggregatesInput } from "../../../inputs/ResetPasswordScalarWhereWithAggregatesInput";
import { ResetPasswordWhereInput } from "../../../inputs/ResetPasswordWhereInput";
import { ResetPasswordScalarFieldEnum } from "../../../../enums/ResetPasswordScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByResetPasswordArgs {
  @TypeGraphQL.Field(_type => ResetPasswordWhereInput, {
    nullable: true
  })
  where?: ResetPasswordWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ResetPasswordOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ResetPasswordOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ResetPasswordScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "user_id" | "token" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => ResetPasswordScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ResetPasswordScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
