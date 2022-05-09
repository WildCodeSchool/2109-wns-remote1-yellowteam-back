import { signRefreshToken } from './../services/authentication';
/* eslint-disable @typescript-eslint/no-unused-vars */
import { LoginInput } from '../custom_resolvers/Inputs/login';
import { UserWithoutCountAndPassword } from '../interfaces/user';
import { GQLContext } from 'src/interfaces';

import {
  checkPassword,
  setCookieToken,
  signToken,
} from '../services/authentication';

const loginJWTCookies = async (
  ctx: GQLContext,
  data: LoginInput
): Promise<UserWithoutCountAndPassword> => {
  const user = await ctx.prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (!user) throw new Error("User doesn't exist");

  checkPassword(data.password, user.password, ctx);

  const token = signToken(user);
  const refreshToken = signRefreshToken(user);

  const { password, ...userWithoutPassword } = user;

  setCookieToken(token, 'token', ctx);
  setCookieToken(refreshToken, 'refreshToken', ctx);

  return userWithoutPassword;
};
export default loginJWTCookies;
