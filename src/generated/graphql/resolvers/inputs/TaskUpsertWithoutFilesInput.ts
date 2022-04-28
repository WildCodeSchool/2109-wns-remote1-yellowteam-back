import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateWithoutFilesInput } from "../inputs/TaskCreateWithoutFilesInput";
import { TaskUpdateWithoutFilesInput } from "../inputs/TaskUpdateWithoutFilesInput";

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
