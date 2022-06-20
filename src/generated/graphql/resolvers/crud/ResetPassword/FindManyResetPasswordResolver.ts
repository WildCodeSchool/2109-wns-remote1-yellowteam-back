import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyResetPasswordArgs } from "./args/FindManyResetPasswordArgs";
import { ResetPassword } from "../../../models/ResetPassword";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ResetPassword)
export class FindManyResetPasswordResolver {
  @TypeGraphQL.Query(_returns => [ResetPassword], {
    nullable: false
  })
  async resetPasswords(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyResetPasswordArgs): Promise<ResetPassword[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).resetPassword.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
