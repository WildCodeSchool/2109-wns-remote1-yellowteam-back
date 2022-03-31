import { Field, InputType } from 'type-graphql';

@InputType()
export class TaskStatusInput {
  @Field()
  taskId: string;

  @Field()
  status: 'IN_PROGRESS' | 'NOT_STARTED' | 'FIHISHED';
}
