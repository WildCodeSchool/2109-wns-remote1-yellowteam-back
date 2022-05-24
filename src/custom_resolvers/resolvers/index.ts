/* eslint-disable @typescript-eslint/ban-types */
import { NonEmptyArray } from 'type-graphql';
import * as AuthResolversImport from './Authentication';
import * as SearchResolverImport from './Search/index';
import * as TaskResolverImport from './Task/index';
import * as UploadResolverImport from './Upload/index';
import * as InvitationResolverImport from './Invitations/index';
import * as ProjectResolverImport from './Project';

const CustomProjectResolvers = Object.values(
  ProjectResolverImport
) as unknown as NonEmptyArray<Function>;

const CustomInvitationResolvers = Object.values(
  InvitationResolverImport
) as unknown as NonEmptyArray<Function>;

const CustomAuthResolvers = Object.values(
  AuthResolversImport
) as unknown as NonEmptyArray<Function>;

const CustomUploadResolvers = Object.values(
  UploadResolverImport
) as unknown as NonEmptyArray<Function>;

const CustomTaskResolvers = Object.values(
  TaskResolverImport
) as unknown as NonEmptyArray<Function>;

const CustomSearchResolvers = Object.values(
  SearchResolverImport
) as unknown as NonEmptyArray<Function>;

export const customResolvers = [
  ...CustomAuthResolvers,
  ...CustomSearchResolvers,
  ...CustomTaskResolvers,
  ...CustomUploadResolvers,
  ...CustomInvitationResolvers,
  ...CustomProjectResolvers,
] as unknown as NonEmptyArray<Function>;
