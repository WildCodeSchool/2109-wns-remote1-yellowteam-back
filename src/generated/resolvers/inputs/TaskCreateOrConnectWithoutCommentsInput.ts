import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateWithoutCommentsInput } from "./TaskCreateWithoutCommentsInput";
import { TaskWhereUniqueInput } from "./TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskCreateOrConnectWithoutCommentsInput", {
  isAbstract: true
})
export class TaskCreateOrConnectWithoutCommentsInput {
  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: false
  })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskCreateWithoutCommentsInput, {
    nullable: false
  })
  create!: TaskCreateWithoutCommentsInput;
}
