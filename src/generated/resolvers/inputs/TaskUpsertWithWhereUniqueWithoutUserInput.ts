import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateWithoutUserInput } from "./TaskCreateWithoutUserInput";
import { TaskUpdateWithoutUserInput } from "./TaskUpdateWithoutUserInput";
import { TaskWhereUniqueInput } from "./TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class TaskUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: false
  })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskUpdateWithoutUserInput, {
    nullable: false
  })
  update!: TaskUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => TaskCreateWithoutUserInput, {
    nullable: false
  })
  create!: TaskCreateWithoutUserInput;
}
