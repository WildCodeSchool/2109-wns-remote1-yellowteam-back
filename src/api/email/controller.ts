import Emailhandler from './interfaces';
import forgotPassword from './forgotPassword';
import resetPassword from './resetPassword';

const controllers: Emailhandler = {
  forgotPassword,
  resetPassword,
};

export default controllers;
