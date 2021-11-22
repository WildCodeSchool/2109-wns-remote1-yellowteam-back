import UserHandlers from './interfaces';

import getAll from './getAll';
import getOne from './getOne';

const controllers: UserHandlers = {
    getAll,
    getOne,
};
export default controllers;