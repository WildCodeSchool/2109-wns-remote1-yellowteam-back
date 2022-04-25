/* eslint-disable @typescript-eslint/no-unused-vars */
import { LoginInput } from 'src/custom_resolvers/Inputs/login';
import { GQLContext } from 'src/interfaces';
import { UserWithoutCountAndPassword } from 'src/interfaces/user';

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

  const { password, ...userWithoutPassword } = user;

  setCookieToken(token, ctx);

  return userWithoutPassword;
};
export default loginJWTCookies;
