import { sign } from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import Cookies from 'cookies';

const loginJWTCookies = async (ctx, data) => {
  const cookies = new Cookies(ctx.req, ctx.res);

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
  });

  ctx.res.setHeader('Access-Control-Allow-Credentials', 'true');

  return userWithoutPassword;
};
export default loginJWTCookies;
