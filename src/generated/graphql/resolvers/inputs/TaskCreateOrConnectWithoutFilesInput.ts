import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateWithoutFilesInput } from "../inputs/TaskCreateWithoutFilesInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskCreateOrConnectWithoutFilesInput", {
  isAbstract: true
})
export class TaskCreateOrConnectWithoutFilesInput {
  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: false
  })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskCreateWithoutFilesInput, {
    nullable: false
  })
  create!: TaskCreateWithoutFilesInput;
}
