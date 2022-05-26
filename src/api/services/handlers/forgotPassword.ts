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

  // Le JWT contenu dans le lien de réinitialisation de mot de passe est crypté avec l'email de l'utilisateur et une clé secrète
  const JWT_RESET_KEY = process.env.JWT_RESET_PASSWORD_SECRET + email;
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
      JWT_RESET_KEY,
      {
        expiresIn: '10m',
      }
    );

    const link = `${process.env.NEXT_PUBLIC_APP_SERVICE_URL}/resetpassword?token=${token}&callback=${process.env.CLIENT_URL}`;

    await sendEmail(email, 'Reset your password', link, async (succes) =>
      console.log(succes)
    );

    return res.send('password reset link sent to your email account');
  } catch (error) {
    console.log(error);
  }
};

export default forgotPassword;
