/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import {
  Invitation,
  CreateInvitationArgs,
} from '../../../../src/generated/graphql';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../../src/generated/graphql/helpers';
import { WebsocketContext } from '../../../../src/interfaces';
import { PubSub } from 'type-graphql';
import { NotificationPayload } from '../../../../src/custom_resolvers/models/notification';
import { send } from 'process';
import { Status_Notification, Type_Notification } from '@prisma/client';

@TypeGraphQL.Resolver((_of) => Invitation)
export class CreateInvitationResolver {
  @TypeGraphQL.Mutation((_returns) => Invitation, {
    nullable: false,
  })
  async customCreateInvitation(
    @TypeGraphQL.Ctx() ctx: WebsocketContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateInvitationArgs,
    @PubSub() pubSub: TypeGraphQL.PubSubEngine
  ): Promise<Invitation> {
    const { _count } = transformFields(graphqlFields(info as any));

    const sender = await ctx.prisma.user.findUnique({
      where: {
        email: args.data.email,
      },
      rejectOnNotFound: true,
    });

    const receiver = await ctx.prisma.user.findUnique({
      where: {
        email: args.data.user?.connect?.email,
      },
      rejectOnNotFound: true,
    });

    const project = await ctx.prisma.project.findUnique({
      where: {
        id: args.data.project?.connect?.id,
      },
      rejectOnNotFound: true,
    });

    await ctx.prisma.notification.create({
      data: {
        content: `${sender.first_name} ${sender.last_name} invited you to join the project ${project.title}`,
        sender: {
          connect: {
            id: sender.id,
          },
        },
        reference_id: project.id,
        status: Status_Notification.UNREAD,
        type: Type_Notification.INVITATION,
        title: 'New invitation',
        is_disabled: false,
        user: {
          connect: {
            id: receiver.id,
          },
        },
      },
    });

    const payload: NotificationPayload = {
      senderId: sender?.id,
      userId: receiver?.id,
      message: `${sender.first_name} ${sender.last_name} invited you to join ${project?.title} project`,
    };

    await pubSub.publish('NOTIFICATIONS', payload);

    return getPrismaFromContext(ctx).invitation.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
