/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { ValidationErrorItem } from 'joi';

interface Error {
  details: Array<ValidationErrorItem>;
  message: string;
}

export default function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  _next: NextFunction
): void {
  const status = res.statusCode === 200 ? 500 : res.statusCode;
  // eslint-disable-next-line no-console
  console.error(
    err,
    err.details
      ? err.details.map((detail) => detail.message)
      : 'Undefined Error'
  );
  res.status(status).send({
    status: status,
    message: err.message,
    details: err.details ? err.details.map((detail) => detail.message) : '🛠',
  });
}
