import { restricted, unRestricted } from '../authConfig';

class FileAuthConfig {
  aggregateFile = restricted;
  file = unRestricted;
  files = unRestricted;
  createFile = unRestricted;
  createManyFile = restricted;
  deleteFile = restricted;
  deleteManyFile = restricted;
  findFirstFile = unRestricted;
  groupByFile = restricted;
  updateFile = unRestricted;
  updateManyFile = restricted;
  upsertFile = restricted;
}

export default FileAuthConfig;
