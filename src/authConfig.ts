/* eslint-disable import/no-extraneous-dependencies */
import {
  ResolversEnhanceMap,
  applyResolversEnhanceMap,
} from '@generated/type-graphql';
import { Authorized } from 'type-graphql';
import { Role } from '@prisma/client';

console.log('Role', Role);

const resolversEnhanceMap: ResolversEnhanceMap = {
  Comment: {
    _all: [Authorized(Role.SUPER_ADMIN)],
  },
  File: {
    _all: [Authorized(Role.SUPER_ADMIN)],
  },
  Invitation: {
    _all: [Authorized(Role.SUPER_ADMIN)],
  },
  Notification: {
    _all: [Authorized(Role.SUPER_ADMIN)],
  },
  Project: {
    _all: [Authorized(Role.SUPER_ADMIN)],
  },
  Task: {
    _all: [Authorized(Role.SUPER_ADMIN)],
  },
  User: {
    _all: [Authorized(Role.SUPER_ADMIN)],
  },
};

applyResolversEnhanceMap(resolversEnhanceMap);
