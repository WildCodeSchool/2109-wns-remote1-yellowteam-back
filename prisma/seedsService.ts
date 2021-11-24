import { Status } from '.prisma/client';

/* eslint-disable no-console */
export const startDate = () =>
  new Date(
    new Date(Date.now()).setDate(
      new Date().getDate() + Math.floor(Math.random() * 100)
    )
  ).toISOString();

export const endDate = (start: String) =>
  new Date(
    new Date(start as string).setDate(
      new Date().getDate() + 5 + Math.floor(Math.random() * 100)
    )
  ).toISOString();

export const dueDate = (end: String) =>
  new Date(
    new Date(end as string).setDate(
      new Date().getDate() + 10 + Math.floor(Math.random() * 10)
    )
  ).toISOString();

export const randomStatus = () => {
  const status: Status[] = ['IN_PROGRESS', 'NOT_STARTED', 'FIHISHED'];
  return status[Math.floor(Math.random() * status.length)] as Status;
};

export const logGenerated = (entity: any[]) =>
  console.log(`✅ Generated ${entity.length} Managers ...`);
