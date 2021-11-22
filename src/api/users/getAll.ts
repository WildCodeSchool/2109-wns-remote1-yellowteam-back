/* eslint-disable no-console */
import prisma from '../../../prisma/prismaClient';
import UserHandlers from './interfaces';

const getAll: UserHandlers['getAll'] = async (req, res, next) => {
  try {
    const users = await prisma.user.findMany();

    const usersWithoutPassword = users.map((user) => {
      const { password, ...rest } = user;
      return rest;
    });

    res.status(200).json(usersWithoutPassword);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'unknown error caused by a request in user handler',
      type: 'INTERNAL_SERVER_ERROR',
    });
    next(error);
  }
};

export default getAll;
