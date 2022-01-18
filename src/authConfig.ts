/* eslint-disable import/no-extraneous-dependencies */
import {
  ResolversEnhanceMap,
  applyResolversEnhanceMap,
} from '@generated/type-graphql';
import { Authorized } from 'type-graphql';
import { Role } from '@prisma/client';

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
    _all: [Authorized(Role.SUPER_ADMIN, Role.ADMIN)],
  },
  Task: {
    _all: [Authorized(Role.SUPER_ADMIN, Role.ADMIN)],
  },
  User: {
    _all: [Authorized(Role.SUPER_ADMIN, Role.ADMIN)],
  },
};

export const Resolve = () => applyResolversEnhanceMap(resolversEnhanceMap);
