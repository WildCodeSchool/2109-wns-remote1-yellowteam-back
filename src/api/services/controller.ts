import ServiceHandler from './interfaces';
import forgotPassword from './handlers/forgotPassword';
import resetPassword from './handlers/resetPassword';

const controllers: ServiceHandler = {
  forgotPassword,
  resetPassword,
};

export default controllers;
