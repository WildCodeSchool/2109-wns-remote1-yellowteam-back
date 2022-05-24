import { Role } from '@prisma/client';
import { Authorized } from 'type-graphql';
import {
  ResolversEnhanceMap,
  applyResolversEnhanceMap,
  applyModelsEnhanceMap,
  ModelsEnhanceMap,
} from '../generated/graphql/enhance';
import CommentAuthConfig from './Resolvers/Comment';
import FileAuthConfig from './Resolvers/Files';
import InvitationAuthConfig from './Resolvers/Invitation';
import NotificationAuthConfig from './Resolvers/Notification';
import ProjectAuthConfig from './Resolvers/Project';
import TaskAuthConfig from './Resolvers/Task';
import UserAuthConfig from './Resolvers/User';

export const restricted = [Authorized(Role.ADMIN, Role.SUPER_ADMIN)];

export const unRestricted = [
  Authorized(Role.ADMIN, Role.SUPER_ADMIN, Role.USER, Role.MANAGER),
];

const resolversEnhanceMap: ResolversEnhanceMap = {
  Comment: new CommentAuthConfig(),
  File: new FileAuthConfig(),
  Invitation: new InvitationAuthConfig(),
  Notification: new NotificationAuthConfig(),
  Project: new ProjectAuthConfig(),
  Task: new TaskAuthConfig(),
  User: new UserAuthConfig(),
};

const modelsEnhanceMap: ModelsEnhanceMap = {
  Task: {
    fields: {
      _all: unRestricted,
    },
  },
  File: {
    fields: {
      _all: unRestricted,
    },
  },
  Comment: {
    fields: {
      _all: unRestricted,
    },
  },
  Invitation: {
    fields: {
      _all: unRestricted,
    },
  },
  Notification: {
    fields: {
      _all: unRestricted,
    },
  },
  User: {
    fields: {
      _all: unRestricted,
    },
  },
  Project: {
    fields: {
      _all: unRestricted,
    },
  },
};

export const Resolve = (): void => {
  applyResolversEnhanceMap(resolversEnhanceMap);
  applyModelsEnhanceMap(modelsEnhanceMap);
};
