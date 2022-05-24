/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Project,
  ProjectWhereUniqueInput,
  User,
  UserWhereUniqueInput,
} from '../../../src/generated/graphql';
import { ArgsType, Field } from 'type-graphql';
import { AddUserToProjectInput } from '../Inputs/addUserToProject';

@ArgsType()
export class AddUserToProjectArgs {
  @Field((_type) => ProjectWhereUniqueInput)
  where: ProjectWhereUniqueInput;

  @Field((_type) => AddUserToProjectInput)
  data: AddUserToProjectInput;
}
