/* eslint-disable @typescript-eslint/no-explicit-any */
import Emailhandler from './interfaces';
import sendEmail from '../../utils/sendEmail';
import { sign } from 'jsonwebtoken';
import prismaClient from '../../../prisma/prismaClient';

const forgotPassword: Emailhandler['forgotPassword'] = async (
  req,
  res
): Promise<any> => {
  const { email } = req.body;
  console.log(req.body);
  try {
    const user = await prismaClient.user.findUnique({
      where: {
        email,
      },
      rejectOnNotFound: true,
    });

    const token = sign(
      {
        email: email,
        first_name: user.first_name,
        last_name: user.last_name,
      },
      process.env.JWT_SECRET as string,
      {
        expiresIn: '10m',
      }
    );

    const link = `${process.env.HOSTNAME}/email/resetpassword?token=${token}`;

    await sendEmail(email, 'Reset your password', link, async (succes) =>
      console.log(succes)
    );

    return res.send('password reset link sent to your email account');
  } catch (error) {
    console.log(error);
  }
};

export default forgotPassword;
