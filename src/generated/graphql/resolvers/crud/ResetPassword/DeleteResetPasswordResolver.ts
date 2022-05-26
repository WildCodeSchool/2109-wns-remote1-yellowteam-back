import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteResetPasswordArgs } from "./args/DeleteResetPasswordArgs";
import { ResetPassword } from "../../../models/ResetPassword";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ResetPassword)
export class DeleteResetPasswordResolver {
  @TypeGraphQL.Mutation(_returns => ResetPassword, {
    nullable: true
  })
  async deleteResetPassword(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteResetPasswordArgs): Promise<ResetPassword | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).resetPassword.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
