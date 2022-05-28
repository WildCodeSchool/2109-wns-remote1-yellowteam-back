import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'joi';
import createHttpError from 'http-errors';

export default function postSchemaValidator(schema: ObjectSchema) {
  return function (req: Request, res: Response, next: NextFunction): void {
    const options = { abortEarly: false };

    const result = schema.validate(req.body, options);
    const { error } = result;
    const valid = error == null;

    console.log(error);

    if (!valid) {
      res.status(422);
      next(createHttpError(422, { message: error.message }));
    }
    next();
  };
}
