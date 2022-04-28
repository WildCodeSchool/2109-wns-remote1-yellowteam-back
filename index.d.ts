/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaClient, PrismaPromise } from 'src/generated/client';

interface ApiError {
  message: string;
  type: string;
}
type Query<T, T2> = (
  parent: any,
  args: T2,
  context: {
    prisma: PrismaClient;
  }
) => PrismaPromise<T>;

interface Queries<T, T2> {
  [name: string]: Query<T, T2>;
}
