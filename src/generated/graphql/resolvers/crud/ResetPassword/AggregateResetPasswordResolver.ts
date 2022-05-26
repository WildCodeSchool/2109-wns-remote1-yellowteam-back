import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateResetPasswordArgs } from "./args/AggregateResetPasswordArgs";
import { ResetPassword } from "../../../models/ResetPassword";
import { AggregateResetPassword } from "../../outputs/AggregateResetPassword";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ResetPassword)
export class AggregateResetPasswordResolver {
  @TypeGraphQL.Query(_returns => AggregateResetPassword, {
    nullable: false
  })
  async aggregateResetPassword(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateResetPasswordArgs): Promise<AggregateResetPassword> {
    return getPrismaFromContext(ctx).resetPassword.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
