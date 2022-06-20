import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueResetPasswordArgs } from "./args/FindUniqueResetPasswordArgs";
import { ResetPassword } from "../../../models/ResetPassword";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ResetPassword)
export class FindUniqueResetPasswordResolver {
  @TypeGraphQL.Query(_returns => ResetPassword, {
    nullable: true
  })
  async resetPassword(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueResetPasswordArgs): Promise<ResetPassword | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).resetPassword.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
