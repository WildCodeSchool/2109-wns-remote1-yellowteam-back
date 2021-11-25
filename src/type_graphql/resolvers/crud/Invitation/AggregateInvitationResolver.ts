import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateInvitationArgs } from "./args/AggregateInvitationArgs";
import { Invitation } from "../../../models/Invitation";
import { AggregateInvitation } from "../../outputs/AggregateInvitation";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Invitation)
export class AggregateInvitationResolver {
  @TypeGraphQL.Query(_returns => AggregateInvitation, {
    nullable: false
  })
  async aggregateInvitation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateInvitationArgs): Promise<AggregateInvitation> {
    return getPrismaFromContext(ctx).invitation.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
