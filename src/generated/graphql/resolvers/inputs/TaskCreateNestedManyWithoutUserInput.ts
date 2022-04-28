import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateManyUserInputEnvelope } from "../inputs/TaskCreateManyUserInputEnvelope";
import { TaskCreateOrConnectWithoutUserInput } from "../inputs/TaskCreateOrConnectWithoutUserInput";
import { TaskCreateWithoutUserInput } from "../inputs/TaskCreateWithoutUserInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

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
