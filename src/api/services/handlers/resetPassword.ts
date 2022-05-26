/* eslint-disable @typescript-eslint/no-unused-vars */
import prismaClient from '../../../../prisma/prismaClient';
import { decode, JwtPayload, verify } from 'jsonwebtoken';
import Emailhandler from '../interfaces';
import bcrypt from 'bcryptjs';

const resetPassword: Emailhandler['resetPassword'] = async (req, res) => {
  const { password: newPassword, token } = req.body;
  try {
    const user = decode(token) as JwtPayload;

    const resetPasswordSession = await prismaClient.resetPassword.findUnique({
      where: {
        token,
      },
    });

    if (!resetPasswordSession) {
      return res.status(400).send('This token is invalid');
    }

    verify(
      token,
      process.env.JWT_RESET_PASSWORD_SECRET as string,
      (err, decoded) => {
        if (err) {
          return res.status(500).send('invalid token');
        }
        console.log(decoded);
        return decoded;
      }
    );

    const encryptedPassword = await bcrypt.hash(newPassword, 10);

    const updatedUser = await prismaClient.user.update({
      where: {
        email: user.email,
      },
      data: {
        password: encryptedPassword,
      },
    });

    return res.status(200).send('Password reset successfully');
  } catch (error) {
    console.log(error);
  }
};

export default resetPassword;
