import { restricted, unRestricted } from '../authConfig';

class TaskAuthConfig {
  aggregateTask = restricted;
  task = unRestricted;
  tasks = unRestricted;
  createTask = unRestricted;
  createManyTask = restricted;
  deleteTask = restricted;
  deleteManyTask = restricted;
  findFirstTask = unRestricted;
  groupByTask = restricted;
  updateTask = unRestricted;
  updateManyTask = restricted;
  upsertTask = restricted;
}

export default TaskAuthConfig;
