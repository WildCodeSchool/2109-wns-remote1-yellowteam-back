import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateManyUserInputEnvelope } from "../inputs/TaskCreateManyUserInputEnvelope";
import { TaskCreateOrConnectWithoutUserInput } from "../inputs/TaskCreateOrConnectWithoutUserInput";
import { TaskCreateWithoutUserInput } from "../inputs/TaskCreateWithoutUserInput";
import { TaskScalarWhereInput } from "../inputs/TaskScalarWhereInput";
import { TaskUpdateManyWithWhereWithoutUserInput } from "../inputs/TaskUpdateManyWithWhereWithoutUserInput";
import { TaskUpdateWithWhereUniqueWithoutUserInput } from "../inputs/TaskUpdateWithWhereUniqueWithoutUserInput";
import { TaskUpsertWithWhereUniqueWithoutUserInput } from "../inputs/TaskUpsertWithWhereUniqueWithoutUserInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpdateManyWithoutUserInput", {
  isAbstract: true
})
export class TaskUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [TaskCreateWithoutUserInput], {
    nullable: true
  })
  create?: TaskCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: TaskUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => TaskCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: TaskCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereUniqueInput], {
    nullable: true
  })
  set?: TaskWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TaskWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereUniqueInput], {
    nullable: true
  })
  delete?: TaskWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereUniqueInput], {
    nullable: true
  })
  connect?: TaskWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: TaskUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: TaskUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TaskScalarWhereInput[] | undefined;
}
