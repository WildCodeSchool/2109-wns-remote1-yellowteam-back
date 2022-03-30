import { Task } from 'src/generated/graphql';
import { Field, InputType } from 'type-graphql';

@InputType()
export class TaskStatusInput {
  @Field()
  task: Task;

  @Field()
  status: 'IN_PROGRESS' | 'NOT_STARTED' | 'FIHISHED';
}
