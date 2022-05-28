import checkIfOwner from '../../../src/middlewares/checkIfOwner';
import { UseMiddleware } from 'type-graphql';
import { restricted, unRestricted } from '../authConfig';

class ProjectAuthConfig {
  aggregateProject = restricted;
  project = unRestricted;
  projects = unRestricted;
  createProject = unRestricted;
  createManyProject = restricted;
  deleteProject = [UseMiddleware(checkIfOwner)];
  deleteManyProject = restricted;
  findFirstProject = unRestricted;
  groupByProject = restricted;
  updateProject = [UseMiddleware(checkIfOwner)];
  updateManyProject = restricted;
  upsertProject = restricted;
}

export default ProjectAuthConfig;
