import { DateTime } from 'luxon';
import { Status } from '.prisma/client';

/* eslint-disable no-console */
export const startDate = () => {
  const date = new Date(Date.now());
  const startDateGenerate = DateTime.fromJSDate(date);
  return startDateGenerate;
};

export const endDate = (start: DateTime) => {
  const endDateGenerate = start.plus({
    days: Math.floor(Math.random() * 30),
    month: Math.floor(Math.random() * 4),
  });
  return endDateGenerate;
};

export const dueDate = (end: DateTime) => {
  const endDateGenerate = end.plus({
    month: Math.floor(Math.random() * 4),
    days: Math.floor(Math.random() * 30),
  });
  return endDateGenerate;
};

export const randomStatus = () => {
  const status: Status[] = ['IN_PROGRESS', 'NOT_STARTED', 'FIHISHED'];
  return status[Math.floor(Math.random() * status.length)] as Status;
};

export const logGenerated = (entity: any[]) =>
  console.log(`✅ Generated ${entity.length} Managers ...`);
