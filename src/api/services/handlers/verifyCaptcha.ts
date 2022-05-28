/* eslint-disable @typescript-eslint/no-unused-vars */
import prismaClient from '../../../../prisma/prismaClient';
import { decode, JwtPayload, verify } from 'jsonwebtoken';
import Emailhandler from '../interfaces';
import bcrypt from 'bcryptjs';
import axios from 'axios';

console.log('secret', process.env.CAPTCHA_SECRET_KEY);

const resetPassword: Emailhandler['verifyCaptcha'] = async (req, res) => {
  const { token } = req.body;
  console.log('token', token);
  try {
    const data = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.CAPTCHA_SECRET_KEY}&response=${token}`
    );

    console.log(data.data);

    return res.status(200).send('Captcha verified successfully');
  } catch (error) {
    console.log(error);
  }
};

export default resetPassword;
