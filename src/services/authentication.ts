import { ApolloError } from 'apollo-server-core';
import bcrypt from 'bcryptjs';
import Cookies from 'cookies';
import { sign } from 'jsonwebtoken';
import { User } from '../generated/graphql';
import { GQLContext } from '../interfaces/index';

/**
 * This function check if the input password match with the salted one
 * @param {string} password - is the password to check
 * @param {string} passwordFromDatabase - is the salted password from the database
 * @returns  true or Error - as the result of the check
 */

export const checkPassword = (
  password: string,
  passwordFromDatabase: string,
  ctx: GQLContext
): boolean => {
  if (!bcrypt.compareSync(password, passwordFromDatabase)) {
    ctx.res.cookie('token', '');
    throw new ApolloError('Invalid password');
  }
  return true;
};

/**
 * @param user - is the user to check
 * @returns token - as the JWT token with the user informations as payload
 */

export const signToken = (user: User): string => {
  const token = sign(
    {
      email: user.email,
      id: user.id,
      role: user.role,
      first_name: user.first_name,
      last_name: user.last_name,
    },
    process.env.JWT_SECRET as string,
    {
      expiresIn: '1d',
    }
  );
  return token;
};

/**
 * @param user - is the user to check
 * @returns token - as the JWT refresh token with the user informations as payload
 */

export const signRefreshToken = (user: User): string => {
  const token = sign(
    {
      email: user.email,
      id: user.id,
      role: user.role,
      first_name: user.first_name,
      last_name: user.last_name,
    },
    process.env.JWT_SECRET as string,
    {
      expiresIn: '1m',
    }
  );
  return token;
};

/**
 * @param token - is the token set is cookies
 * @param ctx - is the context of the API
 * @returns void - when the token is set in the cookies
 */

export const setCookieToken = (
  token: string,
  cookieName: string,
  ctx: GQLContext
): void => {
  const cookies = new Cookies(ctx.req, ctx.res, {
    secure: process.env.NODE_ENV === 'production',
  });

  cookies.set(cookieName, token, {
    httpOnly: process.env.NODE_ENV === 'production',
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
  });

  ctx.res.setHeader('Access-Control-Allow-Credentials', 'true');
};
