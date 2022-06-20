import checkSelf from '../../../src/middlewares/checkSelf';
import { UseMiddleware } from 'type-graphql';
import { restricted, unRestricted } from '../authConfig';

class UserAuthConfig {
  aggregateUser = restricted;
  user = [...unRestricted, UseMiddleware(checkSelf)];
  users = restricted;
  createUser = restricted;
  createManyUser = restricted;
  deleteUser = restricted;
  deleteManyUser = restricted;
  findFirstUser = restricted;
  groupByUser = restricted;
  updateUser = [UseMiddleware(checkSelf)];
  updateManyUser = restricted;
  upsertUser = restricted;
}

export default UserAuthConfig;
