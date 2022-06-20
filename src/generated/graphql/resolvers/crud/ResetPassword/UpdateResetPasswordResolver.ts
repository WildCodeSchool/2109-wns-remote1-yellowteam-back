import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateResetPasswordArgs } from "./args/UpdateResetPasswordArgs";
import { ResetPassword } from "../../../models/ResetPassword";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ResetPassword)
export class UpdateResetPasswordResolver {
  @TypeGraphQL.Mutation(_returns => ResetPassword, {
    nullable: true
  })
  async updateResetPassword(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateResetPasswordArgs): Promise<ResetPassword | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).resetPassword.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
