/* eslint-disable @typescript-eslint/no-unused-vars */
import Emailhandler from '../interfaces';
import axios from 'axios';

const resetPassword: Emailhandler['verifyCaptcha'] = async (req, res) => {
  const { token } = req.body;
  try {
    await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.CAPTCHA_SECRET_KEY}&response=${token}`
    );
    return res.status(200).send('Captcha verified successfully');
  } catch (error) {
    console.log(error);
  }
};

export default resetPassword;
