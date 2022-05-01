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

    const payload: NotificationPayload = {
      senderId: '100_100_1337',
      userId: ctx.user.id,
      message: `SOMEONE INVITED YOU TO JOIN THIS PROJECT`,
    };

    await pubSub.publish('NOTIFICATIONS', payload);

    return getPrismaFromContext(ctx).invitation.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
