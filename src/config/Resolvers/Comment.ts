/* eslint-disable no-underscore-dangle */
import { restricted, unRestricted } from '../authConfig';

class CommentAuthConfig {
  aggregateComment = restricted;
  comment = unRestricted;
  comments = unRestricted;
  createComment = unRestricted;
  createManyComment = restricted;
  deleteComment = restricted;
  deleteManyComment = restricted;
  findFirstComment = unRestricted;
  groupByComment = restricted;
  updateComment = unRestricted;
  updateManyComment = restricted;
  upsertComment = restricted;
}

export default CommentAuthConfig;
