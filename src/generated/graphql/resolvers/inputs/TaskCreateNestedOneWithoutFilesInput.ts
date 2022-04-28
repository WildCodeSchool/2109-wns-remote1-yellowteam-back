import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateOrConnectWithoutFilesInput } from "../inputs/TaskCreateOrConnectWithoutFilesInput";
import { TaskCreateWithoutFilesInput } from "../inputs/TaskCreateWithoutFilesInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskCreateNestedOneWithoutFilesInput", {
  isAbstract: true
})
export class TaskCreateNestedOneWithoutFilesInput {
  @TypeGraphQL.Field(_type => TaskCreateWithoutFilesInput, {
    nullable: true
  })
  create?: TaskCreateWithoutFilesInput | undefined;

  @TypeGraphQL.Field(_type => TaskCreateOrConnectWithoutFilesInput, {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutFilesInput | undefined;

  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: true
  })
  connect?: TaskWhereUniqueInput | undefined;
}
