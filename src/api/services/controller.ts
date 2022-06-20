import ServiceHandler from './interfaces';
import forgotPassword from './handlers/forgotPassword';
import resetPassword from './handlers/resetPassword';
import verifyCaptcha from './handlers/verifyCaptcha';

const controllers: ServiceHandler = {
  forgotPassword,
  resetPassword,
  verifyCaptcha,
};

export default controllers;
