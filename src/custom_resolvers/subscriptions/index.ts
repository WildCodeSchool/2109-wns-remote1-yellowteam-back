/* eslint-disable @typescript-eslint/ban-types */
import { NonEmptyArray } from 'type-graphql';
import * as SubscriptionsImports from './Notifications/index';

export const SubscriptionResolvers = Object.values(
  SubscriptionsImports
) as unknown as NonEmptyArray<Function>;
