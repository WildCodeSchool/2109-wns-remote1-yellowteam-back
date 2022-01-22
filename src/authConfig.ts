/* eslint-disable import/no-extraneous-dependencies */
import { Role } from '@prisma/client';
import { Authorized } from 'type-graphql';
import {
  ResolversEnhanceMap,
  applyResolversEnhanceMap,
} from './generated/graphql/enhance';

// TODO  - Change the roles before production

const resolversEnhanceMap: ResolversEnhanceMap = {
  Comment: {
    _all: [Authorized(Role.SUPER_ADMIN, Role.ADMIN)],
  },
  File: {
    _all: [Authorized(Role.SUPER_ADMIN, Role.ADMIN)],
  },
  Invitation: {
    _all: [Authorized(Role.SUPER_ADMIN, Role.ADMIN)],
  },
  Notification: {
    _all: [Authorized(Role.SUPER_ADMIN, Role.ADMIN)],
  },
  Project: {
    _all: [Authorized(Role.SUPER_ADMIN, Role.ADMIN, Role.MANAGER, Role.USER)],
  },
  Task: {
    _all: [Authorized(Role.SUPER_ADMIN, Role.ADMIN, Role.MANAGER, Role.USER)],
  },
  User: {
    _all: [Authorized(Role.SUPER_ADMIN, Role.ADMIN, Role.MANAGER, Role.USER)],
  },
};

export const Resolve = () => applyResolversEnhanceMap(resolversEnhanceMap);
