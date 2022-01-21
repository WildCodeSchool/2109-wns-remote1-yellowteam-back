import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByInvitationArgs } from "./args/GroupByInvitationArgs";
import { Invitation } from "../../../models/Invitation";
import { InvitationGroupBy } from "../../outputs/InvitationGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Invitation)
export class GroupByInvitationResolver {
  @TypeGraphQL.Query(_returns => [InvitationGroupBy], {
    nullable: false
  })
  async groupByInvitation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByInvitationArgs): Promise<InvitationGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).invitation.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
