import * as TypeGraphQL from "type-graphql";
import { Invitation } from "../../../models/Invitation";
import { Project } from "../../../models/Project";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Invitation)
export class InvitationRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Project, {
    nullable: false
  })
  async project(@TypeGraphQL.Root() invitation: Invitation, @TypeGraphQL.Ctx() ctx: any): Promise<Project> {
    return getPrismaFromContext(ctx).invitation.findUnique({
      where: {
        id: invitation.id,
      },
    }).project({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async user(@TypeGraphQL.Root() invitation: Invitation, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).invitation.findUnique({
      where: {
        id: invitation.id,
      },
    }).user({});
  }
}
