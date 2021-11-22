import prisma from '../../../prisma/prismaClient';
import UserHandlers from './interfaces';

/**
 * GET /users
 * @summary View all users
 * @tags users
 * @return {array<DisplayUser>} 200 - User list successfully retrieved
 */
const getAll: UserHandlers['getAll'] = async (req, res, next) => {
  try {
    const users = await prisma.user.findMany();
    // res.setHeader("*");
    res.status(200).json(
      users.map((user) => {
        const { password, ...rest } = user;
        return rest;
      })
    );
  } catch (error) {
    res.status(401).json({ error });
    next(error);
  }
};

export default getAll;
