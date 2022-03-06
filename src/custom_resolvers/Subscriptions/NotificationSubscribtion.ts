import { Resolver, Root, Subscription } from 'type-graphql';
import { NotificationPayload } from '../models/NotificationPayload';

@Resolver()
class NotificationSubscriptionResolver {
  @Subscription({
    topics: 'NOTIFICATIONS',
  })
  newNotification(
    @Root() notificationPayload: NotificationPayload
  ): NotificationPayload {
    return notificationPayload;
  }
}

export default NotificationSubscriptionResolver;
