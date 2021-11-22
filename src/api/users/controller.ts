import UserHandlers from './interfaces';
import getAll from './getAll';

const controllers: UserHandlers = {
    getAll,
    getOne: undefined
};
export default controllers;