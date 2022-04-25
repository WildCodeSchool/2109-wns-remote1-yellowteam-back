/* eslint-disable @typescript-eslint/ban-types */
import { NonEmptyArray } from 'type-graphql';
import * as AuthResolversImport from './Authentication';
import * as SearchResolverImport from './Search/index';
import * as TaskResolverImport from './Task/index';

const CustomAuthResolvers = Object.values(
  AuthResolversImport
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
] as unknown as NonEmptyArray<Function>;
