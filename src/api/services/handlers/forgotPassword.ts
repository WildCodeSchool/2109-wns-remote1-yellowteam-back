/* eslint-disable @typescript-eslint/no-explicit-any */
import Emailhandler from '../interfaces';
import sendEmail from '../../../utils/sendEmail';
import { sign } from 'jsonwebtoken';
import prismaClient from '../../../../prisma/prismaClient';

const forgotPassword: Emailhandler['forgotPassword'] = async (
  req,
  res
): Promise<any> => {
  const { email } = req.body;

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
      },
      process.env.JWT_RESET_PASSWORD_SECRET as string,
      {
        expiresIn: '10m',
      }
    );

    await prismaClient.resetPassword.create({
      data: {
        token,
        user: {
          connect: {
            id: user.id,
          },
        },
      },
    });

    const link = `${process.env.APP_SERVICE_URL}/resetpassword?token=${token}&callback=${process.env.CLIENT_URL}`;

    await sendEmail(email, 'Reset your password', link, async (succes) =>
      console.log(succes)
    );

    return res.send('password reset link sent to your email account');
  } catch (error) {
    console.log(error);
  }
};

export default forgotPassword;
