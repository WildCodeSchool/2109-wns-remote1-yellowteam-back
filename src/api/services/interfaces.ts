/* eslint-disable @typescript-eslint/no-explicit-any */
import { RequestHandler } from 'express';

export default interface ServiceHandler {
  forgotPassword: RequestHandler<Record<string, never>, any, { email: string }>;
  resetPassword: RequestHandler<
    Record<string, never>,
    any,
    { password: string; confirm_password: string; token: string }
  >;
}
