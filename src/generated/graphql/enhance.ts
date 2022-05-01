import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
  Project: crudResolvers.ProjectCrudResolver,
  Task: crudResolvers.TaskCrudResolver,
  Comment: crudResolvers.CommentCrudResolver,
  File: crudResolvers.FileCrudResolver,
  Invitation: crudResolvers.InvitationCrudResolver,
  Notification: crudResolvers.NotificationCrudResolver
};
const actionResolversMap = {
  User: {
    user: actionResolvers.FindUniqueUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    users: actionResolvers.FindManyUserResolver,
    createUser: actionResolvers.CreateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    deleteUser: actionResolvers.DeleteUserResolver,
    updateUser: actionResolvers.UpdateUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    upsertUser: actionResolvers.UpsertUserResolver,
    aggregateUser: actionResolvers.AggregateUserResolver,
    groupByUser: actionResolvers.GroupByUserResolver
  },
  Project: {
    project: actionResolvers.FindUniqueProjectResolver,
    findFirstProject: actionResolvers.FindFirstProjectResolver,
    projects: actionResolvers.FindManyProjectResolver,
    createProject: actionResolvers.CreateProjectResolver,
    createManyProject: actionResolvers.CreateManyProjectResolver,
    deleteProject: actionResolvers.DeleteProjectResolver,
    updateProject: actionResolvers.UpdateProjectResolver,
    deleteManyProject: actionResolvers.DeleteManyProjectResolver,
    updateManyProject: actionResolvers.UpdateManyProjectResolver,
    upsertProject: actionResolvers.UpsertProjectResolver,
    aggregateProject: actionResolvers.AggregateProjectResolver,
    groupByProject: actionResolvers.GroupByProjectResolver
  },
  Task: {
    task: actionResolvers.FindUniqueTaskResolver,
    findFirstTask: actionResolvers.FindFirstTaskResolver,
    tasks: actionResolvers.FindManyTaskResolver,
    createTask: actionResolvers.CreateTaskResolver,
    createManyTask: actionResolvers.CreateManyTaskResolver,
    deleteTask: actionResolvers.DeleteTaskResolver,
    updateTask: actionResolvers.UpdateTaskResolver,
    deleteManyTask: actionResolvers.DeleteManyTaskResolver,
    updateManyTask: actionResolvers.UpdateManyTaskResolver,
    upsertTask: actionResolvers.UpsertTaskResolver,
    aggregateTask: actionResolvers.AggregateTaskResolver,
    groupByTask: actionResolvers.GroupByTaskResolver
  },
  Comment: {
    comment: actionResolvers.FindUniqueCommentResolver,
    findFirstComment: actionResolvers.FindFirstCommentResolver,
    comments: actionResolvers.FindManyCommentResolver,
    createComment: actionResolvers.CreateCommentResolver,
    createManyComment: actionResolvers.CreateManyCommentResolver,
    deleteComment: actionResolvers.DeleteCommentResolver,
    updateComment: actionResolvers.UpdateCommentResolver,
    deleteManyComment: actionResolvers.DeleteManyCommentResolver,
    updateManyComment: actionResolvers.UpdateManyCommentResolver,
    upsertComment: actionResolvers.UpsertCommentResolver,
    aggregateComment: actionResolvers.AggregateCommentResolver,
    groupByComment: actionResolvers.GroupByCommentResolver
  },
  File: {
    file: actionResolvers.FindUniqueFileResolver,
    findFirstFile: actionResolvers.FindFirstFileResolver,
    files: actionResolvers.FindManyFileResolver,
    createFile: actionResolvers.CreateFileResolver,
    createManyFile: actionResolvers.CreateManyFileResolver,
    deleteFile: actionResolvers.DeleteFileResolver,
    updateFile: actionResolvers.UpdateFileResolver,
    deleteManyFile: actionResolvers.DeleteManyFileResolver,
    updateManyFile: actionResolvers.UpdateManyFileResolver,
    upsertFile: actionResolvers.UpsertFileResolver,
    aggregateFile: actionResolvers.AggregateFileResolver,
    groupByFile: actionResolvers.GroupByFileResolver
  },
  Invitation: {
    invitation: actionResolvers.FindUniqueInvitationResolver,
    findFirstInvitation: actionResolvers.FindFirstInvitationResolver,
    invitations: actionResolvers.FindManyInvitationResolver,
    createInvitation: actionResolvers.CreateInvitationResolver,
    createManyInvitation: actionResolvers.CreateManyInvitationResolver,
    deleteInvitation: actionResolvers.DeleteInvitationResolver,
    updateInvitation: actionResolvers.UpdateInvitationResolver,
    deleteManyInvitation: actionResolvers.DeleteManyInvitationResolver,
    updateManyInvitation: actionResolvers.UpdateManyInvitationResolver,
    upsertInvitation: actionResolvers.UpsertInvitationResolver,
    aggregateInvitation: actionResolvers.AggregateInvitationResolver,
    groupByInvitation: actionResolvers.GroupByInvitationResolver
  },
  Notification: {
    notification: actionResolvers.FindUniqueNotificationResolver,
    findFirstNotification: actionResolvers.FindFirstNotificationResolver,
    notifications: actionResolvers.FindManyNotificationResolver,
    createNotification: actionResolvers.CreateNotificationResolver,
    createManyNotification: actionResolvers.CreateManyNotificationResolver,
    deleteNotification: actionResolvers.DeleteNotificationResolver,
    updateNotification: actionResolvers.UpdateNotificationResolver,
    deleteManyNotification: actionResolvers.DeleteManyNotificationResolver,
    updateManyNotification: actionResolvers.UpdateManyNotificationResolver,
    upsertNotification: actionResolvers.UpsertNotificationResolver,
    aggregateNotification: actionResolvers.AggregateNotificationResolver,
    groupByNotification: actionResolvers.GroupByNotificationResolver
  }
};
const crudResolversInfo = {
  User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"],
  Project: ["project", "findFirstProject", "projects", "createProject", "createManyProject", "deleteProject", "updateProject", "deleteManyProject", "updateManyProject", "upsertProject", "aggregateProject", "groupByProject"],
  Task: ["task", "findFirstTask", "tasks", "createTask", "createManyTask", "deleteTask", "updateTask", "deleteManyTask", "updateManyTask", "upsertTask", "aggregateTask", "groupByTask"],
  Comment: ["comment", "findFirstComment", "comments", "createComment", "createManyComment", "deleteComment", "updateComment", "deleteManyComment", "updateManyComment", "upsertComment", "aggregateComment", "groupByComment"],
  File: ["file", "findFirstFile", "files", "createFile", "createManyFile", "deleteFile", "updateFile", "deleteManyFile", "updateManyFile", "upsertFile", "aggregateFile", "groupByFile"],
  Invitation: ["invitation", "findFirstInvitation", "invitations", "createInvitation", "createManyInvitation", "deleteInvitation", "updateInvitation", "deleteManyInvitation", "updateManyInvitation", "upsertInvitation", "aggregateInvitation", "groupByInvitation"],
  Notification: ["notification", "findFirstNotification", "notifications", "createNotification", "createManyNotification", "deleteNotification", "updateNotification", "deleteManyNotification", "updateManyNotification", "upsertNotification", "aggregateNotification", "groupByNotification"]
};
const argsInfo = {
  FindUniqueUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUserArgs: ["data"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  DeleteUserArgs: ["where"],
  UpdateUserArgs: ["data", "where"],
  DeleteManyUserArgs: ["where"],
  UpdateManyUserArgs: ["data", "where"],
  UpsertUserArgs: ["where", "create", "update"],
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueProjectArgs: ["where"],
  FindFirstProjectArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyProjectArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateProjectArgs: ["data"],
  CreateManyProjectArgs: ["data", "skipDuplicates"],
  DeleteProjectArgs: ["where"],
  UpdateProjectArgs: ["data", "where"],
  DeleteManyProjectArgs: ["where"],
  UpdateManyProjectArgs: ["data", "where"],
  UpsertProjectArgs: ["where", "create", "update"],
  AggregateProjectArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByProjectArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueTaskArgs: ["where"],
  FindFirstTaskArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTaskArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateTaskArgs: ["data"],
  CreateManyTaskArgs: ["data", "skipDuplicates"],
  DeleteTaskArgs: ["where"],
  UpdateTaskArgs: ["data", "where"],
  DeleteManyTaskArgs: ["where"],
  UpdateManyTaskArgs: ["data", "where"],
  UpsertTaskArgs: ["where", "create", "update"],
  AggregateTaskArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByTaskArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueCommentArgs: ["where"],
  FindFirstCommentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCommentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateCommentArgs: ["data"],
  CreateManyCommentArgs: ["data", "skipDuplicates"],
  DeleteCommentArgs: ["where"],
  UpdateCommentArgs: ["data", "where"],
  DeleteManyCommentArgs: ["where"],
  UpdateManyCommentArgs: ["data", "where"],
  UpsertCommentArgs: ["where", "create", "update"],
  AggregateCommentArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByCommentArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueFileArgs: ["where"],
  FindFirstFileArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyFileArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateFileArgs: ["data"],
  CreateManyFileArgs: ["data", "skipDuplicates"],
  DeleteFileArgs: ["where"],
  UpdateFileArgs: ["data", "where"],
  DeleteManyFileArgs: ["where"],
  UpdateManyFileArgs: ["data", "where"],
  UpsertFileArgs: ["where", "create", "update"],
  AggregateFileArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByFileArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueInvitationArgs: ["where"],
  FindFirstInvitationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyInvitationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateInvitationArgs: ["data"],
  CreateManyInvitationArgs: ["data", "skipDuplicates"],
  DeleteInvitationArgs: ["where"],
  UpdateInvitationArgs: ["data", "where"],
  DeleteManyInvitationArgs: ["where"],
  UpdateManyInvitationArgs: ["data", "where"],
  UpsertInvitationArgs: ["where", "create", "update"],
  AggregateInvitationArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByInvitationArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueNotificationArgs: ["where"],
  FindFirstNotificationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyNotificationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateNotificationArgs: ["data"],
  CreateManyNotificationArgs: ["data", "skipDuplicates"],
  DeleteNotificationArgs: ["where"],
  UpdateNotificationArgs: ["data", "where"],
  DeleteManyNotificationArgs: ["where"],
  UpdateManyNotificationArgs: ["data", "where"],
  UpsertNotificationArgs: ["where", "create", "update"],
  AggregateNotificationArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByNotificationArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  User: relationResolvers.UserRelationsResolver,
  Project: relationResolvers.ProjectRelationsResolver,
  Task: relationResolvers.TaskRelationsResolver,
  Comment: relationResolvers.CommentRelationsResolver,
  File: relationResolvers.FileRelationsResolver,
  Invitation: relationResolvers.InvitationRelationsResolver,
  Notification: relationResolvers.NotificationRelationsResolver
};
const relationResolversInfo = {
  User: ["projects", "tasks", "files", "task_comments", "project_comments", "invitations", "notifications", "owned_projects", "notifications_sent"],
  Project: ["users", "owner", "tasks", "files", "comments", "invitations"],
  Task: ["user", "project", "files", "comments"],
  Comment: ["project", "task", "user_task_comments", "user_project_comments"],
  File: ["user", "project", "task"],
  Invitation: ["project", "user"],
  Notification: ["user", "sender"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  User: ["id", "first_name", "last_name", "email", "phone_number", "password", "is_disabled", "avatar", "role", "created_at", "updated_at"],
  Project: ["id", "project_owner_id", "title", "description", "private", "is_disabled", "status_project", "total_time_spent", "start_date", "end_date", "due_date", "created_at", "updated_at"],
  Task: ["id", "title", "description", "private", "is_disabled", "status_task", "total_time_spent", "start_date", "end_date", "user_id", "project_id", "created_at", "updated_at"],
  Comment: ["id", "is_disabled", "content", "task_comment_user_id", "project_id", "task_id", "project_comment_user_id", "created_at", "updated_at"],
  File: ["id", "name", "path", "size", "type", "user_id", "project_id", "task_id", "is_disabled", "created_at", "updated_at"],
  Invitation: ["id", "status", "email", "project_id", "user_id", "created_at", "updated_at"],
  Notification: ["id", "is_disabled", "title", "content", "user_id", "type", "status", "reference_id", "sender_id", "created_at", "updated_at"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateUser: ["_count", "_min", "_max"],
  UserGroupBy: ["id", "first_name", "last_name", "email", "phone_number", "password", "is_disabled", "avatar", "role", "created_at", "updated_at", "_count", "_min", "_max"],
  AggregateProject: ["_count", "_avg", "_sum", "_min", "_max"],
  ProjectGroupBy: ["id", "project_owner_id", "title", "description", "private", "is_disabled", "status_project", "total_time_spent", "start_date", "end_date", "due_date", "created_at", "updated_at", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateTask: ["_count", "_avg", "_sum", "_min", "_max"],
  TaskGroupBy: ["id", "title", "description", "private", "is_disabled", "status_task", "total_time_spent", "start_date", "end_date", "user_id", "project_id", "created_at", "updated_at", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateComment: ["_count", "_min", "_max"],
  CommentGroupBy: ["id", "is_disabled", "content", "task_comment_user_id", "project_id", "task_id", "project_comment_user_id", "created_at", "updated_at", "_count", "_min", "_max"],
  AggregateFile: ["_count", "_avg", "_sum", "_min", "_max"],
  FileGroupBy: ["id", "name", "path", "size", "type", "user_id", "project_id", "task_id", "is_disabled", "created_at", "updated_at", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateInvitation: ["_count", "_min", "_max"],
  InvitationGroupBy: ["id", "status", "email", "project_id", "user_id", "created_at", "updated_at", "_count", "_min", "_max"],
  AggregateNotification: ["_count", "_min", "_max"],
  NotificationGroupBy: ["id", "is_disabled", "title", "content", "user_id", "type", "status", "reference_id", "sender_id", "created_at", "updated_at", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCount: ["projects", "tasks", "files", "task_comments", "project_comments", "invitations", "notifications", "owned_projects", "notifications_sent"],
  UserCountAggregate: ["id", "first_name", "last_name", "email", "phone_number", "password", "is_disabled", "avatar", "role", "created_at", "updated_at", "_all"],
  UserMinAggregate: ["id", "first_name", "last_name", "email", "phone_number", "password", "is_disabled", "avatar", "created_at", "updated_at"],
  UserMaxAggregate: ["id", "first_name", "last_name", "email", "phone_number", "password", "is_disabled", "avatar", "created_at", "updated_at"],
  ProjectCount: ["users", "tasks", "files", "comments", "invitations"],
  ProjectCountAggregate: ["id", "project_owner_id", "title", "description", "private", "is_disabled", "status_project", "total_time_spent", "start_date", "end_date", "due_date", "created_at", "updated_at", "_all"],
  ProjectAvgAggregate: ["total_time_spent"],
  ProjectSumAggregate: ["total_time_spent"],
  ProjectMinAggregate: ["id", "project_owner_id", "title", "description", "private", "is_disabled", "status_project", "total_time_spent", "start_date", "end_date", "due_date", "created_at", "updated_at"],
  ProjectMaxAggregate: ["id", "project_owner_id", "title", "description", "private", "is_disabled", "status_project", "total_time_spent", "start_date", "end_date", "due_date", "created_at", "updated_at"],
  TaskCount: ["files", "comments"],
  TaskCountAggregate: ["id", "title", "description", "private", "is_disabled", "status_task", "total_time_spent", "start_date", "end_date", "user_id", "project_id", "created_at", "updated_at", "_all"],
  TaskAvgAggregate: ["total_time_spent"],
  TaskSumAggregate: ["total_time_spent"],
  TaskMinAggregate: ["id", "title", "description", "private", "is_disabled", "status_task", "total_time_spent", "start_date", "end_date", "user_id", "project_id", "created_at", "updated_at"],
  TaskMaxAggregate: ["id", "title", "description", "private", "is_disabled", "status_task", "total_time_spent", "start_date", "end_date", "user_id", "project_id", "created_at", "updated_at"],
  CommentCountAggregate: ["id", "is_disabled", "content", "task_comment_user_id", "project_id", "task_id", "project_comment_user_id", "created_at", "updated_at", "_all"],
  CommentMinAggregate: ["id", "is_disabled", "content", "task_comment_user_id", "project_id", "task_id", "project_comment_user_id", "created_at", "updated_at"],
  CommentMaxAggregate: ["id", "is_disabled", "content", "task_comment_user_id", "project_id", "task_id", "project_comment_user_id", "created_at", "updated_at"],
  FileCountAggregate: ["id", "name", "path", "size", "type", "user_id", "project_id", "task_id", "is_disabled", "created_at", "updated_at", "_all"],
  FileAvgAggregate: ["size"],
  FileSumAggregate: ["size"],
  FileMinAggregate: ["id", "name", "path", "size", "type", "user_id", "project_id", "task_id", "is_disabled", "created_at", "updated_at"],
  FileMaxAggregate: ["id", "name", "path", "size", "type", "user_id", "project_id", "task_id", "is_disabled", "created_at", "updated_at"],
  InvitationCountAggregate: ["id", "status", "email", "project_id", "user_id", "created_at", "updated_at", "_all"],
  InvitationMinAggregate: ["id", "status", "email", "project_id", "user_id", "created_at", "updated_at"],
  InvitationMaxAggregate: ["id", "status", "email", "project_id", "user_id", "created_at", "updated_at"],
  NotificationCountAggregate: ["id", "is_disabled", "title", "content", "user_id", "type", "status", "reference_id", "sender_id", "created_at", "updated_at", "_all"],
  NotificationMinAggregate: ["id", "is_disabled", "title", "content", "user_id", "type", "status", "reference_id", "sender_id", "created_at", "updated_at"],
  NotificationMaxAggregate: ["id", "is_disabled", "title", "content", "user_id", "type", "status", "reference_id", "sender_id", "created_at", "updated_at"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  UserWhereInput: ["AND", "OR", "NOT", "id", "first_name", "last_name", "email", "phone_number", "password", "is_disabled", "avatar", "role", "projects", "tasks", "files", "task_comments", "project_comments", "invitations", "notifications", "owned_projects", "notifications_sent", "created_at", "updated_at"],
  UserOrderByWithRelationInput: ["id", "first_name", "last_name", "email", "phone_number", "password", "is_disabled", "avatar", "role", "projects", "tasks", "files", "task_comments", "project_comments", "invitations", "notifications", "owned_projects", "notifications_sent", "created_at", "updated_at"],
  UserWhereUniqueInput: ["id", "email"],
  UserOrderByWithAggregationInput: ["id", "first_name", "last_name", "email", "phone_number", "password", "is_disabled", "avatar", "role", "created_at", "updated_at", "_count", "_max", "_min"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "first_name", "last_name", "email", "phone_number", "password", "is_disabled", "avatar", "role", "created_at", "updated_at"],
  ProjectWhereInput: ["AND", "OR", "NOT", "id", "users", "owner", "project_owner_id", "title", "description", "private", "is_disabled", "status_project", "total_time_spent", "start_date", "end_date", "due_date", "tasks", "files", "comments", "invitations", "created_at", "updated_at"],
  ProjectOrderByWithRelationInput: ["id", "users", "owner", "project_owner_id", "title", "description", "private", "is_disabled", "status_project", "total_time_spent", "start_date", "end_date", "due_date", "tasks", "files", "comments", "invitations", "created_at", "updated_at"],
  ProjectWhereUniqueInput: ["id"],
  ProjectOrderByWithAggregationInput: ["id", "project_owner_id", "title", "description", "private", "is_disabled", "status_project", "total_time_spent", "start_date", "end_date", "due_date", "created_at", "updated_at", "_count", "_avg", "_max", "_min", "_sum"],
  ProjectScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "project_owner_id", "title", "description", "private", "is_disabled", "status_project", "total_time_spent", "start_date", "end_date", "due_date", "created_at", "updated_at"],
  TaskWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "private", "is_disabled", "status_task", "total_time_spent", "start_date", "end_date", "user", "user_id", "project", "project_id", "files", "comments", "created_at", "updated_at"],
  TaskOrderByWithRelationInput: ["id", "title", "description", "private", "is_disabled", "status_task", "total_time_spent", "start_date", "end_date", "user", "user_id", "project", "project_id", "files", "comments", "created_at", "updated_at"],
  TaskWhereUniqueInput: ["id"],
  TaskOrderByWithAggregationInput: ["id", "title", "description", "private", "is_disabled", "status_task", "total_time_spent", "start_date", "end_date", "user_id", "project_id", "created_at", "updated_at", "_count", "_avg", "_max", "_min", "_sum"],
  TaskScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "description", "private", "is_disabled", "status_task", "total_time_spent", "start_date", "end_date", "user_id", "project_id", "created_at", "updated_at"],
  CommentWhereInput: ["AND", "OR", "NOT", "id", "is_disabled", "content", "task_comment_user_id", "project", "project_id", "task", "task_id", "user_task_comments", "user_project_comments", "project_comment_user_id", "created_at", "updated_at"],
  CommentOrderByWithRelationInput: ["id", "is_disabled", "content", "task_comment_user_id", "project", "project_id", "task", "task_id", "user_task_comments", "user_project_comments", "project_comment_user_id", "created_at", "updated_at"],
  CommentWhereUniqueInput: ["id"],
  CommentOrderByWithAggregationInput: ["id", "is_disabled", "content", "task_comment_user_id", "project_id", "task_id", "project_comment_user_id", "created_at", "updated_at", "_count", "_max", "_min"],
  CommentScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "is_disabled", "content", "task_comment_user_id", "project_id", "task_id", "project_comment_user_id", "created_at", "updated_at"],
  FileWhereInput: ["AND", "OR", "NOT", "id", "name", "path", "size", "type", "user", "user_id", "project", "project_id", "task", "task_id", "is_disabled", "created_at", "updated_at"],
  FileOrderByWithRelationInput: ["id", "name", "path", "size", "type", "user", "user_id", "project", "project_id", "task", "task_id", "is_disabled", "created_at", "updated_at"],
  FileWhereUniqueInput: ["id"],
  FileOrderByWithAggregationInput: ["id", "name", "path", "size", "type", "user_id", "project_id", "task_id", "is_disabled", "created_at", "updated_at", "_count", "_avg", "_max", "_min", "_sum"],
  FileScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "path", "size", "type", "user_id", "project_id", "task_id", "is_disabled", "created_at", "updated_at"],
  InvitationWhereInput: ["AND", "OR", "NOT", "id", "status", "email", "project", "project_id", "user", "user_id", "created_at", "updated_at"],
  InvitationOrderByWithRelationInput: ["id", "status", "email", "project", "project_id", "user", "user_id", "created_at", "updated_at"],
  InvitationWhereUniqueInput: ["id"],
  InvitationOrderByWithAggregationInput: ["id", "status", "email", "project_id", "user_id", "created_at", "updated_at", "_count", "_max", "_min"],
  InvitationScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "status", "email", "project_id", "user_id", "created_at", "updated_at"],
  NotificationWhereInput: ["AND", "OR", "NOT", "id", "is_disabled", "title", "content", "user", "user_id", "type", "status", "reference_id", "sender", "sender_id", "created_at", "updated_at"],
  NotificationOrderByWithRelationInput: ["id", "is_disabled", "title", "content", "user", "user_id", "type", "status", "reference_id", "sender", "sender_id", "created_at", "updated_at"],
  NotificationWhereUniqueInput: ["id"],
  NotificationOrderByWithAggregationInput: ["id", "is_disabled", "title", "content", "user_id", "type", "status", "reference_id", "sender_id", "created_at", "updated_at", "_count", "_max", "_min"],
  NotificationScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "is_disabled", "title", "content", "user_id", "type", "status", "reference_id", "sender_id", "created_at", "updated_at"],
  UserCreateInput: ["id", "first_name", "last_name", "email", "phone_number", "password", "is_disabled", "avatar", "role", "projects", "tasks", "files", "task_comments", "project_comments", "invitations", "notifications", "owned_projects", "notifications_sent", "created_at", "updated_at"],
  UserUpdateInput: ["id", "first_name", "last_name", "email", "phone_number", "password", "is_disabled", "avatar", "role", "projects", "tasks", "files", "task_comments", "project_comments", "invitations", "notifications", "owned_projects", "notifications_sent", "created_at", "updated_at"],
  UserCreateManyInput: ["id", "first_name", "last_name", "email", "phone_number", "password", "is_disabled", "avatar", "role", "created_at", "updated_at"],
  UserUpdateManyMutationInput: ["id", "first_name", "last_name", "email", "phone_number", "password", "is_disabled", "avatar", "role", "created_at", "updated_at"],
  ProjectCreateInput: ["id", "users", "owner", "title", "description", "private", "is_disabled", "status_project", "total_time_spent", "start_date", "end_date", "due_date", "tasks", "files", "comments", "invitations", "created_at", "updated_at"],
  ProjectUpdateInput: ["id", "users", "owner", "title", "description", "private", "is_disabled", "status_project", "total_time_spent", "start_date", "end_date", "due_date", "tasks", "files", "comments", "invitations", "created_at", "updated_at"],
  ProjectCreateManyInput: ["id", "project_owner_id", "title", "description", "private", "is_disabled", "status_project", "total_time_spent", "start_date", "end_date", "due_date", "created_at", "updated_at"],
  ProjectUpdateManyMutationInput: ["id", "title", "description", "private", "is_disabled", "status_project", "total_time_spent", "start_date", "end_date", "due_date", "created_at", "updated_at"],
  TaskCreateInput: ["id", "title", "description", "private", "is_disabled", "status_task", "total_time_spent", "start_date", "end_date", "user", "project", "files", "comments", "created_at", "updated_at"],
  TaskUpdateInput: ["id", "title", "description", "private", "is_disabled", "status_task", "total_time_spent", "start_date", "end_date", "user", "project", "files", "comments", "created_at", "updated_at"],
  TaskCreateManyInput: ["id", "title", "description", "private", "is_disabled", "status_task", "total_time_spent", "start_date", "end_date", "user_id", "project_id", "created_at", "updated_at"],
  TaskUpdateManyMutationInput: ["id", "title", "description", "private", "is_disabled", "status_task", "total_time_spent", "start_date", "end_date", "created_at", "updated_at"],
  CommentCreateInput: ["id", "is_disabled", "content", "project", "task", "user_task_comments", "user_project_comments", "created_at", "updated_at"],
  CommentUpdateInput: ["id", "is_disabled", "content", "project", "task", "user_task_comments", "user_project_comments", "created_at", "updated_at"],
  CommentCreateManyInput: ["id", "is_disabled", "content", "task_comment_user_id", "project_id", "task_id", "project_comment_user_id", "created_at", "updated_at"],
  CommentUpdateManyMutationInput: ["id", "is_disabled", "content", "created_at", "updated_at"],
  FileCreateInput: ["id", "name", "path", "size", "type", "user", "project", "task", "is_disabled", "created_at", "updated_at"],
  FileUpdateInput: ["id", "name", "path", "size", "type", "user", "project", "task", "is_disabled", "created_at", "updated_at"],
  FileCreateManyInput: ["id", "name", "path", "size", "type", "user_id", "project_id", "task_id", "is_disabled", "created_at", "updated_at"],
  FileUpdateManyMutationInput: ["id", "name", "path", "size", "type", "is_disabled", "created_at", "updated_at"],
  InvitationCreateInput: ["id", "status", "email", "project", "user", "created_at", "updated_at"],
  InvitationUpdateInput: ["id", "status", "email", "project", "user", "created_at", "updated_at"],
  InvitationCreateManyInput: ["id", "status", "email", "project_id", "user_id", "created_at", "updated_at"],
  InvitationUpdateManyMutationInput: ["id", "status", "email", "created_at", "updated_at"],
  NotificationCreateInput: ["id", "is_disabled", "title", "content", "user", "type", "status", "reference_id", "sender", "created_at", "updated_at"],
  NotificationUpdateInput: ["id", "is_disabled", "title", "content", "user", "type", "status", "reference_id", "sender", "created_at", "updated_at"],
  NotificationCreateManyInput: ["id", "is_disabled", "title", "content", "user_id", "type", "status", "reference_id", "sender_id", "created_at", "updated_at"],
  NotificationUpdateManyMutationInput: ["id", "is_disabled", "title", "content", "type", "status", "reference_id", "created_at", "updated_at"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  BoolFilter: ["equals", "not"],
  EnumRoleNullableListFilter: ["equals", "has", "hasEvery", "hasSome", "isEmpty"],
  ProjectListRelationFilter: ["every", "some", "none"],
  TaskListRelationFilter: ["every", "some", "none"],
  FileListRelationFilter: ["every", "some", "none"],
  CommentListRelationFilter: ["every", "some", "none"],
  InvitationListRelationFilter: ["every", "some", "none"],
  NotificationListRelationFilter: ["every", "some", "none"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  ProjectOrderByRelationAggregateInput: ["_count"],
  TaskOrderByRelationAggregateInput: ["_count"],
  FileOrderByRelationAggregateInput: ["_count"],
  CommentOrderByRelationAggregateInput: ["_count"],
  InvitationOrderByRelationAggregateInput: ["_count"],
  NotificationOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "first_name", "last_name", "email", "phone_number", "password", "is_disabled", "avatar", "role", "created_at", "updated_at"],
  UserMaxOrderByAggregateInput: ["id", "first_name", "last_name", "email", "phone_number", "password", "is_disabled", "avatar", "created_at", "updated_at"],
  UserMinOrderByAggregateInput: ["id", "first_name", "last_name", "email", "phone_number", "password", "is_disabled", "avatar", "created_at", "updated_at"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  UserListRelationFilter: ["every", "some", "none"],
  UserRelationFilter: ["is", "isNot"],
  EnumStatusFilter: ["equals", "in", "notIn", "not"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  UserOrderByRelationAggregateInput: ["_count"],
  ProjectCountOrderByAggregateInput: ["id", "project_owner_id", "title", "description", "private", "is_disabled", "status_project", "total_time_spent", "start_date", "end_date", "due_date", "created_at", "updated_at"],
  ProjectAvgOrderByAggregateInput: ["total_time_spent"],
  ProjectMaxOrderByAggregateInput: ["id", "project_owner_id", "title", "description", "private", "is_disabled", "status_project", "total_time_spent", "start_date", "end_date", "due_date", "created_at", "updated_at"],
  ProjectMinOrderByAggregateInput: ["id", "project_owner_id", "title", "description", "private", "is_disabled", "status_project", "total_time_spent", "start_date", "end_date", "due_date", "created_at", "updated_at"],
  ProjectSumOrderByAggregateInput: ["total_time_spent"],
  EnumStatusWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  ProjectRelationFilter: ["is", "isNot"],
  TaskCountOrderByAggregateInput: ["id", "title", "description", "private", "is_disabled", "status_task", "total_time_spent", "start_date", "end_date", "user_id", "project_id", "created_at", "updated_at"],
  TaskAvgOrderByAggregateInput: ["total_time_spent"],
  TaskMaxOrderByAggregateInput: ["id", "title", "description", "private", "is_disabled", "status_task", "total_time_spent", "start_date", "end_date", "user_id", "project_id", "created_at", "updated_at"],
  TaskMinOrderByAggregateInput: ["id", "title", "description", "private", "is_disabled", "status_task", "total_time_spent", "start_date", "end_date", "user_id", "project_id", "created_at", "updated_at"],
  TaskSumOrderByAggregateInput: ["total_time_spent"],
  TaskRelationFilter: ["is", "isNot"],
  CommentCountOrderByAggregateInput: ["id", "is_disabled", "content", "task_comment_user_id", "project_id", "task_id", "project_comment_user_id", "created_at", "updated_at"],
  CommentMaxOrderByAggregateInput: ["id", "is_disabled", "content", "task_comment_user_id", "project_id", "task_id", "project_comment_user_id", "created_at", "updated_at"],
  CommentMinOrderByAggregateInput: ["id", "is_disabled", "content", "task_comment_user_id", "project_id", "task_id", "project_comment_user_id", "created_at", "updated_at"],
  FileCountOrderByAggregateInput: ["id", "name", "path", "size", "type", "user_id", "project_id", "task_id", "is_disabled", "created_at", "updated_at"],
  FileAvgOrderByAggregateInput: ["size"],
  FileMaxOrderByAggregateInput: ["id", "name", "path", "size", "type", "user_id", "project_id", "task_id", "is_disabled", "created_at", "updated_at"],
  FileMinOrderByAggregateInput: ["id", "name", "path", "size", "type", "user_id", "project_id", "task_id", "is_disabled", "created_at", "updated_at"],
  FileSumOrderByAggregateInput: ["size"],
  EnumStatus_InvitationFilter: ["equals", "in", "notIn", "not"],
  InvitationCountOrderByAggregateInput: ["id", "status", "email", "project_id", "user_id", "created_at", "updated_at"],
  InvitationMaxOrderByAggregateInput: ["id", "status", "email", "project_id", "user_id", "created_at", "updated_at"],
  InvitationMinOrderByAggregateInput: ["id", "status", "email", "project_id", "user_id", "created_at", "updated_at"],
  EnumStatus_InvitationWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  EnumType_NotificationFilter: ["equals", "in", "notIn", "not"],
  EnumStatus_NotificationFilter: ["equals", "in", "notIn", "not"],
  NotificationCountOrderByAggregateInput: ["id", "is_disabled", "title", "content", "user_id", "type", "status", "reference_id", "sender_id", "created_at", "updated_at"],
  NotificationMaxOrderByAggregateInput: ["id", "is_disabled", "title", "content", "user_id", "type", "status", "reference_id", "sender_id", "created_at", "updated_at"],
  NotificationMinOrderByAggregateInput: ["id", "is_disabled", "title", "content", "user_id", "type", "status", "reference_id", "sender_id", "created_at", "updated_at"],
  EnumType_NotificationWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  EnumStatus_NotificationWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  UserCreateroleInput: ["set"],
  ProjectCreateNestedManyWithoutUsersInput: ["create", "connectOrCreate", "connect"],
  TaskCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  FileCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  CommentCreateNestedManyWithoutUser_task_commentsInput: ["create", "connectOrCreate", "createMany", "connect"],
  CommentCreateNestedManyWithoutUser_project_commentsInput: ["create", "connectOrCreate", "createMany", "connect"],
  InvitationCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  NotificationCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  ProjectCreateNestedManyWithoutOwnerInput: ["create", "connectOrCreate", "createMany", "connect"],
  NotificationCreateNestedManyWithoutSenderInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  BoolFieldUpdateOperationsInput: ["set"],
  UserUpdateroleInput: ["set", "push"],
  ProjectUpdateManyWithoutUsersInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  TaskUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  FileUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CommentUpdateManyWithoutUser_task_commentsInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CommentUpdateManyWithoutUser_project_commentsInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  InvitationUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  NotificationUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ProjectUpdateManyWithoutOwnerInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  NotificationUpdateManyWithoutSenderInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  UserCreateNestedManyWithoutProjectsInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedOneWithoutOwned_projectsInput: ["create", "connectOrCreate", "connect"],
  TaskCreateNestedManyWithoutProjectInput: ["create", "connectOrCreate", "createMany", "connect"],
  FileCreateNestedManyWithoutProjectInput: ["create", "connectOrCreate", "createMany", "connect"],
  CommentCreateNestedManyWithoutProjectInput: ["create", "connectOrCreate", "createMany", "connect"],
  InvitationCreateNestedManyWithoutProjectInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserUpdateManyWithoutProjectsInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserUpdateOneRequiredWithoutOwned_projectsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  EnumStatusFieldUpdateOperationsInput: ["set"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  TaskUpdateManyWithoutProjectInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  FileUpdateManyWithoutProjectInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CommentUpdateManyWithoutProjectInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  InvitationUpdateManyWithoutProjectInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutTasksInput: ["create", "connectOrCreate", "connect"],
  ProjectCreateNestedOneWithoutTasksInput: ["create", "connectOrCreate", "connect"],
  FileCreateNestedManyWithoutTaskInput: ["create", "connectOrCreate", "createMany", "connect"],
  CommentCreateNestedManyWithoutTaskInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserUpdateOneWithoutTasksInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  ProjectUpdateOneRequiredWithoutTasksInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  FileUpdateManyWithoutTaskInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CommentUpdateManyWithoutTaskInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ProjectCreateNestedOneWithoutCommentsInput: ["create", "connectOrCreate", "connect"],
  TaskCreateNestedOneWithoutCommentsInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedOneWithoutTask_commentsInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedOneWithoutProject_commentsInput: ["create", "connectOrCreate", "connect"],
  ProjectUpdateOneWithoutCommentsInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  TaskUpdateOneWithoutCommentsInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  UserUpdateOneWithoutTask_commentsInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  UserUpdateOneWithoutProject_commentsInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  UserCreateNestedOneWithoutFilesInput: ["create", "connectOrCreate", "connect"],
  ProjectCreateNestedOneWithoutFilesInput: ["create", "connectOrCreate", "connect"],
  TaskCreateNestedOneWithoutFilesInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneWithoutFilesInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  ProjectUpdateOneRequiredWithoutFilesInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  TaskUpdateOneWithoutFilesInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  ProjectCreateNestedOneWithoutInvitationsInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedOneWithoutInvitationsInput: ["create", "connectOrCreate", "connect"],
  EnumStatus_InvitationFieldUpdateOperationsInput: ["set"],
  ProjectUpdateOneRequiredWithoutInvitationsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserUpdateOneWithoutInvitationsInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  UserCreateNestedOneWithoutNotificationsInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedOneWithoutNotifications_sentInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneWithoutNotificationsInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  EnumType_NotificationFieldUpdateOperationsInput: ["set"],
  EnumStatus_NotificationFieldUpdateOperationsInput: ["set"],
  UserUpdateOneRequiredWithoutNotifications_sentInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedEnumStatusFilter: ["equals", "in", "notIn", "not"],
  NestedEnumStatusWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumStatus_InvitationFilter: ["equals", "in", "notIn", "not"],
  NestedEnumStatus_InvitationWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumType_NotificationFilter: ["equals", "in", "notIn", "not"],
  NestedEnumStatus_NotificationFilter: ["equals", "in", "notIn", "not"],
  NestedEnumType_NotificationWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumStatus_NotificationWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  ProjectCreateWithoutUsersInput: ["id", "owner", "title", "description", "private", "is_disabled", "status_project", "total_time_spent", "start_date", "end_date", "due_date", "tasks", "files", "comments", "invitations", "created_at", "updated_at"],
  ProjectCreateOrConnectWithoutUsersInput: ["where", "create"],
  TaskCreateWithoutUserInput: ["id", "title", "description", "private", "is_disabled", "status_task", "total_time_spent", "start_date", "end_date", "project", "files", "comments", "created_at", "updated_at"],
  TaskCreateOrConnectWithoutUserInput: ["where", "create"],
  TaskCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  FileCreateWithoutUserInput: ["id", "name", "path", "size", "type", "project", "task", "is_disabled", "created_at", "updated_at"],
  FileCreateOrConnectWithoutUserInput: ["where", "create"],
  FileCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  CommentCreateWithoutUser_task_commentsInput: ["id", "is_disabled", "content", "project", "task", "user_project_comments", "created_at", "updated_at"],
  CommentCreateOrConnectWithoutUser_task_commentsInput: ["where", "create"],
  CommentCreateManyUser_task_commentsInputEnvelope: ["data", "skipDuplicates"],
  CommentCreateWithoutUser_project_commentsInput: ["id", "is_disabled", "content", "project", "task", "user_task_comments", "created_at", "updated_at"],
  CommentCreateOrConnectWithoutUser_project_commentsInput: ["where", "create"],
  CommentCreateManyUser_project_commentsInputEnvelope: ["data", "skipDuplicates"],
  InvitationCreateWithoutUserInput: ["id", "status", "email", "project", "created_at", "updated_at"],
  InvitationCreateOrConnectWithoutUserInput: ["where", "create"],
  InvitationCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  NotificationCreateWithoutUserInput: ["id", "is_disabled", "title", "content", "type", "status", "reference_id", "sender", "created_at", "updated_at"],
  NotificationCreateOrConnectWithoutUserInput: ["where", "create"],
  NotificationCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  ProjectCreateWithoutOwnerInput: ["id", "users", "title", "description", "private", "is_disabled", "status_project", "total_time_spent", "start_date", "end_date", "due_date", "tasks", "files", "comments", "invitations", "created_at", "updated_at"],
  ProjectCreateOrConnectWithoutOwnerInput: ["where", "create"],
  ProjectCreateManyOwnerInputEnvelope: ["data", "skipDuplicates"],
  NotificationCreateWithoutSenderInput: ["id", "is_disabled", "title", "content", "user", "type", "status", "reference_id", "created_at", "updated_at"],
  NotificationCreateOrConnectWithoutSenderInput: ["where", "create"],
  NotificationCreateManySenderInputEnvelope: ["data", "skipDuplicates"],
  ProjectUpsertWithWhereUniqueWithoutUsersInput: ["where", "update", "create"],
  ProjectUpdateWithWhereUniqueWithoutUsersInput: ["where", "data"],
  ProjectUpdateManyWithWhereWithoutUsersInput: ["where", "data"],
  ProjectScalarWhereInput: ["AND", "OR", "NOT", "id", "project_owner_id", "title", "description", "private", "is_disabled", "status_project", "total_time_spent", "start_date", "end_date", "due_date", "created_at", "updated_at"],
  TaskUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  TaskUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  TaskUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  TaskScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "private", "is_disabled", "status_task", "total_time_spent", "start_date", "end_date", "user_id", "project_id", "created_at", "updated_at"],
  FileUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  FileUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  FileUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  FileScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "path", "size", "type", "user_id", "project_id", "task_id", "is_disabled", "created_at", "updated_at"],
  CommentUpsertWithWhereUniqueWithoutUser_task_commentsInput: ["where", "update", "create"],
  CommentUpdateWithWhereUniqueWithoutUser_task_commentsInput: ["where", "data"],
  CommentUpdateManyWithWhereWithoutUser_task_commentsInput: ["where", "data"],
  CommentScalarWhereInput: ["AND", "OR", "NOT", "id", "is_disabled", "content", "task_comment_user_id", "project_id", "task_id", "project_comment_user_id", "created_at", "updated_at"],
  CommentUpsertWithWhereUniqueWithoutUser_project_commentsInput: ["where", "update", "create"],
  CommentUpdateWithWhereUniqueWithoutUser_project_commentsInput: ["where", "data"],
  CommentUpdateManyWithWhereWithoutUser_project_commentsInput: ["where", "data"],
  InvitationUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  InvitationUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  InvitationUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  InvitationScalarWhereInput: ["AND", "OR", "NOT", "id", "status", "email", "project_id", "user_id", "created_at", "updated_at"],
  NotificationUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  NotificationUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  NotificationUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  NotificationScalarWhereInput: ["AND", "OR", "NOT", "id", "is_disabled", "title", "content", "user_id", "type", "status", "reference_id", "sender_id", "created_at", "updated_at"],
  ProjectUpsertWithWhereUniqueWithoutOwnerInput: ["where", "update", "create"],
  ProjectUpdateWithWhereUniqueWithoutOwnerInput: ["where", "data"],
  ProjectUpdateManyWithWhereWithoutOwnerInput: ["where", "data"],
  NotificationUpsertWithWhereUniqueWithoutSenderInput: ["where", "update", "create"],
  NotificationUpdateWithWhereUniqueWithoutSenderInput: ["where", "data"],
  NotificationUpdateManyWithWhereWithoutSenderInput: ["where", "data"],
  UserCreateWithoutProjectsInput: ["id", "first_name", "last_name", "email", "phone_number", "password", "is_disabled", "avatar", "role", "tasks", "files", "task_comments", "project_comments", "invitations", "notifications", "owned_projects", "notifications_sent", "created_at", "updated_at"],
  UserCreateOrConnectWithoutProjectsInput: ["where", "create"],
  UserCreateWithoutOwned_projectsInput: ["id", "first_name", "last_name", "email", "phone_number", "password", "is_disabled", "avatar", "role", "projects", "tasks", "files", "task_comments", "project_comments", "invitations", "notifications", "notifications_sent", "created_at", "updated_at"],
  UserCreateOrConnectWithoutOwned_projectsInput: ["where", "create"],
  TaskCreateWithoutProjectInput: ["id", "title", "description", "private", "is_disabled", "status_task", "total_time_spent", "start_date", "end_date", "user", "files", "comments", "created_at", "updated_at"],
  TaskCreateOrConnectWithoutProjectInput: ["where", "create"],
  TaskCreateManyProjectInputEnvelope: ["data", "skipDuplicates"],
  FileCreateWithoutProjectInput: ["id", "name", "path", "size", "type", "user", "task", "is_disabled", "created_at", "updated_at"],
  FileCreateOrConnectWithoutProjectInput: ["where", "create"],
  FileCreateManyProjectInputEnvelope: ["data", "skipDuplicates"],
  CommentCreateWithoutProjectInput: ["id", "is_disabled", "content", "task", "user_task_comments", "user_project_comments", "created_at", "updated_at"],
  CommentCreateOrConnectWithoutProjectInput: ["where", "create"],
  CommentCreateManyProjectInputEnvelope: ["data", "skipDuplicates"],
  InvitationCreateWithoutProjectInput: ["id", "status", "email", "user", "created_at", "updated_at"],
  InvitationCreateOrConnectWithoutProjectInput: ["where", "create"],
  InvitationCreateManyProjectInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithWhereUniqueWithoutProjectsInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutProjectsInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutProjectsInput: ["where", "data"],
  UserScalarWhereInput: ["AND", "OR", "NOT", "id", "first_name", "last_name", "email", "phone_number", "password", "is_disabled", "avatar", "role", "created_at", "updated_at"],
  UserUpsertWithoutOwned_projectsInput: ["update", "create"],
  UserUpdateWithoutOwned_projectsInput: ["id", "first_name", "last_name", "email", "phone_number", "password", "is_disabled", "avatar", "role", "projects", "tasks", "files", "task_comments", "project_comments", "invitations", "notifications", "notifications_sent", "created_at", "updated_at"],
  TaskUpsertWithWhereUniqueWithoutProjectInput: ["where", "update", "create"],
  TaskUpdateWithWhereUniqueWithoutProjectInput: ["where", "data"],
  TaskUpdateManyWithWhereWithoutProjectInput: ["where", "data"],
  FileUpsertWithWhereUniqueWithoutProjectInput: ["where", "update", "create"],
  FileUpdateWithWhereUniqueWithoutProjectInput: ["where", "data"],
  FileUpdateManyWithWhereWithoutProjectInput: ["where", "data"],
  CommentUpsertWithWhereUniqueWithoutProjectInput: ["where", "update", "create"],
  CommentUpdateWithWhereUniqueWithoutProjectInput: ["where", "data"],
  CommentUpdateManyWithWhereWithoutProjectInput: ["where", "data"],
  InvitationUpsertWithWhereUniqueWithoutProjectInput: ["where", "update", "create"],
  InvitationUpdateWithWhereUniqueWithoutProjectInput: ["where", "data"],
  InvitationUpdateManyWithWhereWithoutProjectInput: ["where", "data"],
  UserCreateWithoutTasksInput: ["id", "first_name", "last_name", "email", "phone_number", "password", "is_disabled", "avatar", "role", "projects", "files", "task_comments", "project_comments", "invitations", "notifications", "owned_projects", "notifications_sent", "created_at", "updated_at"],
  UserCreateOrConnectWithoutTasksInput: ["where", "create"],
  ProjectCreateWithoutTasksInput: ["id", "users", "owner", "title", "description", "private", "is_disabled", "status_project", "total_time_spent", "start_date", "end_date", "due_date", "files", "comments", "invitations", "created_at", "updated_at"],
  ProjectCreateOrConnectWithoutTasksInput: ["where", "create"],
  FileCreateWithoutTaskInput: ["id", "name", "path", "size", "type", "user", "project", "is_disabled", "created_at", "updated_at"],
  FileCreateOrConnectWithoutTaskInput: ["where", "create"],
  FileCreateManyTaskInputEnvelope: ["data", "skipDuplicates"],
  CommentCreateWithoutTaskInput: ["id", "is_disabled", "content", "project", "user_task_comments", "user_project_comments", "created_at", "updated_at"],
  CommentCreateOrConnectWithoutTaskInput: ["where", "create"],
  CommentCreateManyTaskInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithoutTasksInput: ["update", "create"],
  UserUpdateWithoutTasksInput: ["id", "first_name", "last_name", "email", "phone_number", "password", "is_disabled", "avatar", "role", "projects", "files", "task_comments", "project_comments", "invitations", "notifications", "owned_projects", "notifications_sent", "created_at", "updated_at"],
  ProjectUpsertWithoutTasksInput: ["update", "create"],
  ProjectUpdateWithoutTasksInput: ["id", "users", "owner", "title", "description", "private", "is_disabled", "status_project", "total_time_spent", "start_date", "end_date", "due_date", "files", "comments", "invitations", "created_at", "updated_at"],
  FileUpsertWithWhereUniqueWithoutTaskInput: ["where", "update", "create"],
  FileUpdateWithWhereUniqueWithoutTaskInput: ["where", "data"],
  FileUpdateManyWithWhereWithoutTaskInput: ["where", "data"],
  CommentUpsertWithWhereUniqueWithoutTaskInput: ["where", "update", "create"],
  CommentUpdateWithWhereUniqueWithoutTaskInput: ["where", "data"],
  CommentUpdateManyWithWhereWithoutTaskInput: ["where", "data"],
  ProjectCreateWithoutCommentsInput: ["id", "users", "owner", "title", "description", "private", "is_disabled", "status_project", "total_time_spent", "start_date", "end_date", "due_date", "tasks", "files", "invitations", "created_at", "updated_at"],
  ProjectCreateOrConnectWithoutCommentsInput: ["where", "create"],
  TaskCreateWithoutCommentsInput: ["id", "title", "description", "private", "is_disabled", "status_task", "total_time_spent", "start_date", "end_date", "user", "project", "files", "created_at", "updated_at"],
  TaskCreateOrConnectWithoutCommentsInput: ["where", "create"],
  UserCreateWithoutTask_commentsInput: ["id", "first_name", "last_name", "email", "phone_number", "password", "is_disabled", "avatar", "role", "projects", "tasks", "files", "project_comments", "invitations", "notifications", "owned_projects", "notifications_sent", "created_at", "updated_at"],
  UserCreateOrConnectWithoutTask_commentsInput: ["where", "create"],
  UserCreateWithoutProject_commentsInput: ["id", "first_name", "last_name", "email", "phone_number", "password", "is_disabled", "avatar", "role", "projects", "tasks", "files", "task_comments", "invitations", "notifications", "owned_projects", "notifications_sent", "created_at", "updated_at"],
  UserCreateOrConnectWithoutProject_commentsInput: ["where", "create"],
  ProjectUpsertWithoutCommentsInput: ["update", "create"],
  ProjectUpdateWithoutCommentsInput: ["id", "users", "owner", "title", "description", "private", "is_disabled", "status_project", "total_time_spent", "start_date", "end_date", "due_date", "tasks", "files", "invitations", "created_at", "updated_at"],
  TaskUpsertWithoutCommentsInput: ["update", "create"],
  TaskUpdateWithoutCommentsInput: ["id", "title", "description", "private", "is_disabled", "status_task", "total_time_spent", "start_date", "end_date", "user", "project", "files", "created_at", "updated_at"],
  UserUpsertWithoutTask_commentsInput: ["update", "create"],
  UserUpdateWithoutTask_commentsInput: ["id", "first_name", "last_name", "email", "phone_number", "password", "is_disabled", "avatar", "role", "projects", "tasks", "files", "project_comments", "invitations", "notifications", "owned_projects", "notifications_sent", "created_at", "updated_at"],
  UserUpsertWithoutProject_commentsInput: ["update", "create"],
  UserUpdateWithoutProject_commentsInput: ["id", "first_name", "last_name", "email", "phone_number", "password", "is_disabled", "avatar", "role", "projects", "tasks", "files", "task_comments", "invitations", "notifications", "owned_projects", "notifications_sent", "created_at", "updated_at"],
  UserCreateWithoutFilesInput: ["id", "first_name", "last_name", "email", "phone_number", "password", "is_disabled", "avatar", "role", "projects", "tasks", "task_comments", "project_comments", "invitations", "notifications", "owned_projects", "notifications_sent", "created_at", "updated_at"],
  UserCreateOrConnectWithoutFilesInput: ["where", "create"],
  ProjectCreateWithoutFilesInput: ["id", "users", "owner", "title", "description", "private", "is_disabled", "status_project", "total_time_spent", "start_date", "end_date", "due_date", "tasks", "comments", "invitations", "created_at", "updated_at"],
  ProjectCreateOrConnectWithoutFilesInput: ["where", "create"],
  TaskCreateWithoutFilesInput: ["id", "title", "description", "private", "is_disabled", "status_task", "total_time_spent", "start_date", "end_date", "user", "project", "comments", "created_at", "updated_at"],
  TaskCreateOrConnectWithoutFilesInput: ["where", "create"],
  UserUpsertWithoutFilesInput: ["update", "create"],
  UserUpdateWithoutFilesInput: ["id", "first_name", "last_name", "email", "phone_number", "password", "is_disabled", "avatar", "role", "projects", "tasks", "task_comments", "project_comments", "invitations", "notifications", "owned_projects", "notifications_sent", "created_at", "updated_at"],
  ProjectUpsertWithoutFilesInput: ["update", "create"],
  ProjectUpdateWithoutFilesInput: ["id", "users", "owner", "title", "description", "private", "is_disabled", "status_project", "total_time_spent", "start_date", "end_date", "due_date", "tasks", "comments", "invitations", "created_at", "updated_at"],
  TaskUpsertWithoutFilesInput: ["update", "create"],
  TaskUpdateWithoutFilesInput: ["id", "title", "description", "private", "is_disabled", "status_task", "total_time_spent", "start_date", "end_date", "user", "project", "comments", "created_at", "updated_at"],
  ProjectCreateWithoutInvitationsInput: ["id", "users", "owner", "title", "description", "private", "is_disabled", "status_project", "total_time_spent", "start_date", "end_date", "due_date", "tasks", "files", "comments", "created_at", "updated_at"],
  ProjectCreateOrConnectWithoutInvitationsInput: ["where", "create"],
  UserCreateWithoutInvitationsInput: ["id", "first_name", "last_name", "email", "phone_number", "password", "is_disabled", "avatar", "role", "projects", "tasks", "files", "task_comments", "project_comments", "notifications", "owned_projects", "notifications_sent", "created_at", "updated_at"],
  UserCreateOrConnectWithoutInvitationsInput: ["where", "create"],
  ProjectUpsertWithoutInvitationsInput: ["update", "create"],
  ProjectUpdateWithoutInvitationsInput: ["id", "users", "owner", "title", "description", "private", "is_disabled", "status_project", "total_time_spent", "start_date", "end_date", "due_date", "tasks", "files", "comments", "created_at", "updated_at"],
  UserUpsertWithoutInvitationsInput: ["update", "create"],
  UserUpdateWithoutInvitationsInput: ["id", "first_name", "last_name", "email", "phone_number", "password", "is_disabled", "avatar", "role", "projects", "tasks", "files", "task_comments", "project_comments", "notifications", "owned_projects", "notifications_sent", "created_at", "updated_at"],
  UserCreateWithoutNotificationsInput: ["id", "first_name", "last_name", "email", "phone_number", "password", "is_disabled", "avatar", "role", "projects", "tasks", "files", "task_comments", "project_comments", "invitations", "owned_projects", "notifications_sent", "created_at", "updated_at"],
  UserCreateOrConnectWithoutNotificationsInput: ["where", "create"],
  UserCreateWithoutNotifications_sentInput: ["id", "first_name", "last_name", "email", "phone_number", "password", "is_disabled", "avatar", "role", "projects", "tasks", "files", "task_comments", "project_comments", "invitations", "notifications", "owned_projects", "created_at", "updated_at"],
  UserCreateOrConnectWithoutNotifications_sentInput: ["where", "create"],
  UserUpsertWithoutNotificationsInput: ["update", "create"],
  UserUpdateWithoutNotificationsInput: ["id", "first_name", "last_name", "email", "phone_number", "password", "is_disabled", "avatar", "role", "projects", "tasks", "files", "task_comments", "project_comments", "invitations", "owned_projects", "notifications_sent", "created_at", "updated_at"],
  UserUpsertWithoutNotifications_sentInput: ["update", "create"],
  UserUpdateWithoutNotifications_sentInput: ["id", "first_name", "last_name", "email", "phone_number", "password", "is_disabled", "avatar", "role", "projects", "tasks", "files", "task_comments", "project_comments", "invitations", "notifications", "owned_projects", "created_at", "updated_at"],
  TaskCreateManyUserInput: ["id", "title", "description", "private", "is_disabled", "status_task", "total_time_spent", "start_date", "end_date", "project_id", "created_at", "updated_at"],
  FileCreateManyUserInput: ["id", "name", "path", "size", "type", "project_id", "task_id", "is_disabled", "created_at", "updated_at"],
  CommentCreateManyUser_task_commentsInput: ["id", "is_disabled", "content", "task_comment_user_id", "project_id", "task_id", "created_at", "updated_at"],
  CommentCreateManyUser_project_commentsInput: ["id", "is_disabled", "content", "project_id", "task_id", "project_comment_user_id", "created_at", "updated_at"],
  InvitationCreateManyUserInput: ["id", "status", "email", "project_id", "created_at", "updated_at"],
  NotificationCreateManyUserInput: ["id", "is_disabled", "title", "content", "type", "status", "reference_id", "sender_id", "created_at", "updated_at"],
  ProjectCreateManyOwnerInput: ["id", "title", "description", "private", "is_disabled", "status_project", "total_time_spent", "start_date", "end_date", "due_date", "created_at", "updated_at"],
  NotificationCreateManySenderInput: ["id", "is_disabled", "title", "content", "user_id", "type", "status", "reference_id", "created_at", "updated_at"],
  ProjectUpdateWithoutUsersInput: ["id", "owner", "title", "description", "private", "is_disabled", "status_project", "total_time_spent", "start_date", "end_date", "due_date", "tasks", "files", "comments", "invitations", "created_at", "updated_at"],
  TaskUpdateWithoutUserInput: ["id", "title", "description", "private", "is_disabled", "status_task", "total_time_spent", "start_date", "end_date", "project", "files", "comments", "created_at", "updated_at"],
  FileUpdateWithoutUserInput: ["id", "name", "path", "size", "type", "project", "task", "is_disabled", "created_at", "updated_at"],
  CommentUpdateWithoutUser_task_commentsInput: ["id", "is_disabled", "content", "project", "task", "user_project_comments", "created_at", "updated_at"],
  CommentUpdateWithoutUser_project_commentsInput: ["id", "is_disabled", "content", "project", "task", "user_task_comments", "created_at", "updated_at"],
  InvitationUpdateWithoutUserInput: ["id", "status", "email", "project", "created_at", "updated_at"],
  NotificationUpdateWithoutUserInput: ["id", "is_disabled", "title", "content", "type", "status", "reference_id", "sender", "created_at", "updated_at"],
  ProjectUpdateWithoutOwnerInput: ["id", "users", "title", "description", "private", "is_disabled", "status_project", "total_time_spent", "start_date", "end_date", "due_date", "tasks", "files", "comments", "invitations", "created_at", "updated_at"],
  NotificationUpdateWithoutSenderInput: ["id", "is_disabled", "title", "content", "user", "type", "status", "reference_id", "created_at", "updated_at"],
  TaskCreateManyProjectInput: ["id", "title", "description", "private", "is_disabled", "status_task", "total_time_spent", "start_date", "end_date", "user_id", "created_at", "updated_at"],
  FileCreateManyProjectInput: ["id", "name", "path", "size", "type", "user_id", "task_id", "is_disabled", "created_at", "updated_at"],
  CommentCreateManyProjectInput: ["id", "is_disabled", "content", "task_comment_user_id", "task_id", "project_comment_user_id", "created_at", "updated_at"],
  InvitationCreateManyProjectInput: ["id", "status", "email", "user_id", "created_at", "updated_at"],
  UserUpdateWithoutProjectsInput: ["id", "first_name", "last_name", "email", "phone_number", "password", "is_disabled", "avatar", "role", "tasks", "files", "task_comments", "project_comments", "invitations", "notifications", "owned_projects", "notifications_sent", "created_at", "updated_at"],
  TaskUpdateWithoutProjectInput: ["id", "title", "description", "private", "is_disabled", "status_task", "total_time_spent", "start_date", "end_date", "user", "files", "comments", "created_at", "updated_at"],
  FileUpdateWithoutProjectInput: ["id", "name", "path", "size", "type", "user", "task", "is_disabled", "created_at", "updated_at"],
  CommentUpdateWithoutProjectInput: ["id", "is_disabled", "content", "task", "user_task_comments", "user_project_comments", "created_at", "updated_at"],
  InvitationUpdateWithoutProjectInput: ["id", "status", "email", "user", "created_at", "updated_at"],
  FileCreateManyTaskInput: ["id", "name", "path", "size", "type", "user_id", "project_id", "is_disabled", "created_at", "updated_at"],
  CommentCreateManyTaskInput: ["id", "is_disabled", "content", "task_comment_user_id", "project_id", "project_comment_user_id", "created_at", "updated_at"],
  FileUpdateWithoutTaskInput: ["id", "name", "path", "size", "type", "user", "project", "is_disabled", "created_at", "updated_at"],
  CommentUpdateWithoutTaskInput: ["id", "is_disabled", "content", "project", "user_task_comments", "user_project_comments", "created_at", "updated_at"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

