/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { sign } from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import Cookies from 'cookies';
import { UserWithoutCountAndPassword } from 'src/custom_resolvers/models/register';
import { Context } from 'apollo-server-core';
import { LoginInput } from 'src/custom_resolvers/models/login';

const loginJWTCookies = async (
  ctx: Context<Record<string, any>>,
  data: LoginInput
): Promise<UserWithoutCountAndPassword> => {
  const cookies = new Cookies(ctx.req, ctx.res, {
    secure: process.env.NODE_ENV === 'production',
  });

  const user = await ctx.prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (!user) throw new Error("User doesn't exist");
  if (!bcrypt.compareSync(data.password, user.password)) {
    ctx.res.cookie('token', '');
    throw new Error('Invalid password');
  }

  const token = sign(
    {
      email: user.email,
      id: user.id,
      role: user.role,
    },
    process.env.JWT_SECRET as string,
    {
      expiresIn: '1d',
    }
  );

  const { password, ...userWithoutPassword } = user;

  cookies.set('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
  });

  ctx.res.setHeader('Access-Control-Allow-Credentials', 'true');

  return userWithoutPassword;
};
export default loginJWTCookies;
