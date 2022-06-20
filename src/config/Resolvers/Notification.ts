import { restricted, unRestricted } from '../authConfig';

class NotificationAuthConfig {
  aggregateNotification = restricted;
  notification = unRestricted;
  notifications = unRestricted;
  createNotification = unRestricted;
  createManyNotification = restricted;
  deleteNotification = restricted;
  deleteManyNotification = restricted;
  findFirstNotification = unRestricted;
  groupByNotification = restricted;
  updateNotification = unRestricted;
  updateManyNotification = restricted;
  upsertNotification = restricted;
}

export default NotificationAuthConfig;
