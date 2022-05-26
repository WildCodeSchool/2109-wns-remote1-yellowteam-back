/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

export interface RequestWIthUser extends Request {
  user: JwtPayload;
}

function checkToken(req: any, res: Response, next: NextFunction): void {
  try {
    const { token } = req.cookies;

    if (typeof token === 'undefined') {
      throw new Error('You need to login.');
    }

    req.user = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as JwtPayload;

    return next();
  } catch (err) {
    res.status(401);

    return next(err);
  }
}

export default checkToken;
