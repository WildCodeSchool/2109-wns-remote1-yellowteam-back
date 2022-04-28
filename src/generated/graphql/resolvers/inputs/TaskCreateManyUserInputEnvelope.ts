import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateManyUserInput } from "../inputs/TaskCreateManyUserInput";

@TypeGraphQL.InputType("TaskCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class TaskCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [TaskCreateManyUserInput], {
    nullable: false
  })
  data!: TaskCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
