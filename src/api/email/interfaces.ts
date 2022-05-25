/* eslint-disable @typescript-eslint/no-explicit-any */
import { RequestHandler } from 'express';

export default interface Emailhandler {
  forgotPassword: RequestHandler<Record<string, never>, any, { email: string }>;
  resetPassword: RequestHandler<Record<string, never>, any, { token: string }>;
}
