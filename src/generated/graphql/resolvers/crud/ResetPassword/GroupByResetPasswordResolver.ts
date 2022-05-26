import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByResetPasswordArgs } from "./args/GroupByResetPasswordArgs";
import { ResetPassword } from "../../../models/ResetPassword";
import { ResetPasswordGroupBy } from "../../outputs/ResetPasswordGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ResetPassword)
export class GroupByResetPasswordResolver {
  @TypeGraphQL.Query(_returns => [ResetPasswordGroupBy], {
    nullable: false
  })
  async groupByResetPassword(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByResetPasswordArgs): Promise<ResetPasswordGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).resetPassword.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
