import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ResetPasswordOrderByWithRelationInput } from "../../../inputs/ResetPasswordOrderByWithRelationInput";
import { ResetPasswordWhereInput } from "../../../inputs/ResetPasswordWhereInput";
import { ResetPasswordWhereUniqueInput } from "../../../inputs/ResetPasswordWhereUniqueInput";
import { ResetPasswordScalarFieldEnum } from "../../../../enums/ResetPasswordScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class UserResetPasswordArgs {
  @TypeGraphQL.Field(_type => ResetPasswordWhereInput, {
    nullable: true
  })
  where?: ResetPasswordWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ResetPasswordOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ResetPasswordOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ResetPasswordWhereUniqueInput, {
    nullable: true
  })
  cursor?: ResetPasswordWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ResetPasswordScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "user_id" | "token" | "created_at" | "updated_at"> | undefined;
}
