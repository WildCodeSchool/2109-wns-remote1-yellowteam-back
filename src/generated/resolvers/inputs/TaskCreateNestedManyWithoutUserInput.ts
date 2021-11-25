import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateManyUserInputEnvelope } from "./TaskCreateManyUserInputEnvelope";
import { TaskCreateOrConnectWithoutUserInput } from "./TaskCreateOrConnectWithoutUserInput";
import { TaskCreateWithoutUserInput } from "./TaskCreateWithoutUserInput";
import { TaskWhereUniqueInput } from "./TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class TaskCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [TaskCreateWithoutUserInput], {
    nullable: true
  })
  create?: TaskCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => TaskCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: TaskCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereUniqueInput], {
    nullable: true
  })
  connect?: TaskWhereUniqueInput[] | undefined;
}
