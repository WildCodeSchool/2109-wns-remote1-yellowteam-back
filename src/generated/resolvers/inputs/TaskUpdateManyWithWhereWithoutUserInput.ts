import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskScalarWhereInput } from "./TaskScalarWhereInput";
import { TaskUpdateManyMutationInput } from "./TaskUpdateManyMutationInput";

@TypeGraphQL.InputType("TaskUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class TaskUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => TaskScalarWhereInput, {
    nullable: false
  })
  where!: TaskScalarWhereInput;

  @TypeGraphQL.Field(_type => TaskUpdateManyMutationInput, {
    nullable: false
  })
  data!: TaskUpdateManyMutationInput;
}
