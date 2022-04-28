
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 3.11.0
 * Query Engine version: b371888aaf8f51357c7457d836b86d12da91658b
 */
Prisma.prismaVersion = {
  client: "3.11.0",
  engine: "b371888aaf8f51357c7457d836b86d12da91658b"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = 'DbNull'
Prisma.JsonNull = 'JsonNull'
Prisma.AnyNull = 'AnyNull'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  first_name: 'first_name',
  last_name: 'last_name',
  email: 'email',
  password: 'password',
  is_disabled: 'is_disabled',
  avatar: 'avatar',
  role: 'role',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.ProjectScalarFieldEnum = makeEnum({
  id: 'id',
  project_owner_id: 'project_owner_id',
  title: 'title',
  description: 'description',
  private: 'private',
  is_disabled: 'is_disabled',
  status_project: 'status_project',
  total_time_spent: 'total_time_spent',
  start_date: 'start_date',
  end_date: 'end_date',
  due_date: 'due_date',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.TaskScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  description: 'description',
  private: 'private',
  is_disabled: 'is_disabled',
  status_task: 'status_task',
  total_time_spent: 'total_time_spent',
  start_date: 'start_date',
  end_date: 'end_date',
  user_id: 'user_id',
  project_id: 'project_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.CommentScalarFieldEnum = makeEnum({
  id: 'id',
  is_disabled: 'is_disabled',
  content: 'content',
  task_comment_user_id: 'task_comment_user_id',
  project_id: 'project_id',
  task_id: 'task_id',
  project_comment_user_id: 'project_comment_user_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.FileScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  path: 'path',
  size: 'size',
  type: 'type',
  user_id: 'user_id',
  project_id: 'project_id',
  task_id: 'task_id',
  is_disabled: 'is_disabled',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.InvitationScalarFieldEnum = makeEnum({
  id: 'id',
  status: 'status',
  email: 'email',
  project_id: 'project_id',
  user_id: 'user_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.NotificationScalarFieldEnum = makeEnum({
  id: 'id',
  is_disabled: 'is_disabled',
  title: 'title',
  content: 'content',
  user_id: 'user_id',
  type: 'type',
  status: 'status',
  reference_id: 'reference_id',
  sender_id: 'sender_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});
exports.Role = makeEnum({
  SUPER_ADMIN: 'SUPER_ADMIN',
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER',
  USER: 'USER'
});

exports.Status = makeEnum({
  IN_PROGRESS: 'IN_PROGRESS',
  NOT_STARTED: 'NOT_STARTED',
  FIHISHED: 'FIHISHED'
});

exports.Status_Invitation = makeEnum({
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED'
});

exports.Type_Notification = makeEnum({
  PROJECT: 'PROJECT',
  TASK: 'TASK'
});

exports.Status_Notification = makeEnum({
  READ: 'READ',
  UNREAD: 'UNREAD'
});

exports.Prisma.ModelName = makeEnum({
  User: 'User',
  Project: 'Project',
  Task: 'Task',
  Comment: 'Comment',
  File: 'File',
  Invitation: 'Invitation',
  Notification: 'Notification'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
