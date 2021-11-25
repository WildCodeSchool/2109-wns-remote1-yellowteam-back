import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateOrConnectWithoutCommentsInput } from "./TaskCreateOrConnectWithoutCommentsInput";
import { TaskCreateWithoutCommentsInput } from "./TaskCreateWithoutCommentsInput";
import { TaskWhereUniqueInput } from "./TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskCreateNestedOneWithoutCommentsInput", {
  isAbstract: true
})
export class TaskCreateNestedOneWithoutCommentsInput {
  @TypeGraphQL.Field(_type => TaskCreateWithoutCommentsInput, {
    nullable: true
  })
  create?: TaskCreateWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => TaskCreateOrConnectWithoutCommentsInput, {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: true
  })
  connect?: TaskWhereUniqueInput | undefined;
}
