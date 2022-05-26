/* eslint-disable @typescript-eslint/no-unused-vars */
import prismaClient from '../../../../prisma/prismaClient';
import { decode, JwtPayload, verify } from 'jsonwebtoken';
import Emailhandler from '../interfaces';
import bcrypt from 'bcryptjs';

const resetPassword: Emailhandler['resetPassword'] = async (req, res) => {
  const { password: newPassword, token } = req.body;
  try {
    const user = decode(token) as JwtPayload;

    // Le JWT contenu dans le lien de réinitialisation de mot de passe est crypté avec l'email de l'utilisateur et une clé secrète
    const JWT_RESET_KEY = process.env.JWT_RESET_PASSWORD_SECRET + user.email;

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

    const { password, ...userWithoutPassword } = updatedUser;

    return res.status(200).send({ ...userWithoutPassword });
  } catch (error) {
    console.log(error);
  }
};

export default resetPassword;
