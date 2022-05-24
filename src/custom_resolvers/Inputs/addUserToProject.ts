/* eslint-disable @typescript-eslint/no-unused-vars */
import { ProjectWhereUniqueInput } from '../../../src/generated/graphql';
import { Field, InputType } from 'type-graphql';

@InputType('AddUserToProjectInput', {
  isAbstract: true,
})
export class AddUserToProjectInput {
  @Field((_type) => String, {
    nullable: false,
  })
  userId: string;
}
