import * as TypeGraphQL from "type-graphql";
import { Notification } from "../../../models/Notification";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Notification)
export class NotificationRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() notification: Notification, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).notification.findUnique({
      where: {
        id: notification.id,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async sender(@TypeGraphQL.Root() notification: Notification, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).notification.findUnique({
      where: {
        id: notification.id,
      },
    }).sender({});
  }
}
