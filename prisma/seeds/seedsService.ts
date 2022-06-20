/* eslint-disable @typescript-eslint/no-explicit-any */
import { DateTime } from 'luxon';
import { Status, Status_Notification } from '@prisma/client';

/* eslint-disable no-console */
export const startDate = (): DateTime => {
  const date = new Date(Date.now());
  const startDateGenerate = DateTime.fromJSDate(date);
  return startDateGenerate;
};

export const endDate = (start: DateTime): DateTime => {
  const endDateGenerate = start.plus({
    days: Math.floor(Math.random() * 30),
    month: Math.floor(Math.random() * 4),
  });
  return endDateGenerate;
};

export const dueDate = (end: DateTime): DateTime => {
  const endDateGenerate = end.plus({
    month: Math.floor(Math.random() * 4),
    days: Math.floor(Math.random() * 30),
  });
  return endDateGenerate;
};

export const randomStatus = (): Status => {
  const status: Status[] = ['IN_PROGRESS', 'NOT_STARTED', 'FIHISHED'];
  return status[Math.floor(Math.random() * status.length)] as Status;
};
export const randomNotificationStatus = (): Status_Notification => {
  const status: Status_Notification[] = ['READ', 'UNREAD'];
  return status[
    Math.floor(Math.random() * status.length)
  ] as Status_Notification;
};

export const randomize = (ressource: Array<any>): number =>
  Math.floor(Math.random() * ressource.length);

export const logGenerated = ({
  entity,
  name,
}: {
  entity: any[];
  name: string;
}): void => console.log(`✅ Generated ${entity.length} ${name} ...`);
