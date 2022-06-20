/* eslint-disable no-useless-escape */
import Joi from 'joi';

const resetPasswordSchema = Joi.object({
  token: Joi.string().required(),
  password: Joi.string()
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
    .error(() =>
      Error(
        'Password must contain at least one lowercase letter, one uppercase letter, one number and one special character'
      )
    ),
});

export default resetPasswordSchema;
