import { RequestHandler } from 'express';
import { User } from '.prisma/client';

type UserWithoutPassword = Omit<User, 'password'>;

export default interface UserHandlers {
  getAll: RequestHandler<
    Record<string, never>,
    UserWithoutPassword[] | ApiError,
    null
  >;
  getOne: RequestHandler<{ id: string }, UserWithoutPassword, null>;
}
