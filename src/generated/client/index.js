
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal
} = require('./runtime/index')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = 'DbNull'
Prisma.JsonNull = 'JsonNull'
Prisma.AnyNull = 'AnyNull'


const path = require('path')

const { findSync } = require('./runtime')

const dirname = findSync(process.cwd(), [
    "src/generated/client",
    "generated/client",
], ['d'], ['d'], 1)[0] || __dirname
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

const dmmf = JSON.parse(dmmfString)
exports.Prisma.dmmf = JSON.parse(dmmfString)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/julien/DEV/2109-wns-remote1-yellowteam-back/src/generated/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma",
  "clientVersion": "3.11.0",
  "engineVersion": "b371888aaf8f51357c7457d836b86d12da91658b",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql"
}
config.document = dmmf
config.dirname = dirname




const { warnEnvConflicts } = require('./runtime/index')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
})
const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

path.join(__dirname, "libquery_engine-darwin-arm64.dylib.node");
path.join(process.cwd(), "src/generated/client/libquery_engine-darwin-arm64.dylib.node")
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "src/generated/client/schema.prisma")