import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateWithoutFilesInput } from "./TaskCreateWithoutFilesInput";
import { TaskUpdateWithoutFilesInput } from "./TaskUpdateWithoutFilesInput";

@TypeGraphQL.InputType("TaskUpsertWithoutFilesInput", {
  isAbstract: true
})
export class TaskUpsertWithoutFilesInput {
  @TypeGraphQL.Field(_type => TaskUpdateWithoutFilesInput, {
    nullable: false
  })
  update!: TaskUpdateWithoutFilesInput;

  @TypeGraphQL.Field(_type => TaskCreateWithoutFilesInput, {
    nullable: false
  })
  create!: TaskCreateWithoutFilesInput;
}
