/* eslint-disable @typescript-eslint/no-explicit-any */
import { RequestHandler } from 'express';

export default interface ServiceHandler {
  forgotPassword: RequestHandler<
    Record<string, never>,
    string,
    { email: string }
  >;
  resetPassword: RequestHandler<
    Record<string, never>,
    string,
    { password: string; confirm_password: string; token: string }
  >;
  verifyCaptcha: RequestHandler<
    Record<string, never>,
    string,
    { token: string }
  >;
}
