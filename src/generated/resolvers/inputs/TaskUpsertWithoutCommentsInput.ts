import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateWithoutCommentsInput } from "./TaskCreateWithoutCommentsInput";
import { TaskUpdateWithoutCommentsInput } from "./TaskUpdateWithoutCommentsInput";

@TypeGraphQL.InputType("TaskUpsertWithoutCommentsInput", {
  isAbstract: true
})
export class TaskUpsertWithoutCommentsInput {
  @TypeGraphQL.Field(_type => TaskUpdateWithoutCommentsInput, {
    nullable: false
  })
  update!: TaskUpdateWithoutCommentsInput;

  @TypeGraphQL.Field(_type => TaskCreateWithoutCommentsInput, {
    nullable: false
  })
  create!: TaskCreateWithoutCommentsInput;
}
