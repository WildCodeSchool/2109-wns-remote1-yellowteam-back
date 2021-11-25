import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskUpdateWithoutUserInput } from "./TaskUpdateWithoutUserInput";
import { TaskWhereUniqueInput } from "./TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class TaskUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: false
  })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskUpdateWithoutUserInput, {
    nullable: false
  })
  data!: TaskUpdateWithoutUserInput;
}
