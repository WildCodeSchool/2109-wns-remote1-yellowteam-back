import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateWithoutProjectInput } from "./TaskCreateWithoutProjectInput";
import { TaskUpdateWithoutProjectInput } from "./TaskUpdateWithoutProjectInput";
import { TaskWhereUniqueInput } from "./TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpsertWithWhereUniqueWithoutProjectInput", {
  isAbstract: true
})
export class TaskUpsertWithWhereUniqueWithoutProjectInput {
  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: false
  })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskUpdateWithoutProjectInput, {
    nullable: false
  })
  update!: TaskUpdateWithoutProjectInput;

  @TypeGraphQL.Field(_type => TaskCreateWithoutProjectInput, {
    nullable: false
  })
  create!: TaskCreateWithoutProjectInput;
}
