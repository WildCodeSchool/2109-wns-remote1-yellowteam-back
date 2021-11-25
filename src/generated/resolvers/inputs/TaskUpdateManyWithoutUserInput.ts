import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateManyUserInputEnvelope } from "./TaskCreateManyUserInputEnvelope";
import { TaskCreateOrConnectWithoutUserInput } from "./TaskCreateOrConnectWithoutUserInput";
import { TaskCreateWithoutUserInput } from "./TaskCreateWithoutUserInput";
import { TaskScalarWhereInput } from "./TaskScalarWhereInput";
import { TaskUpdateManyWithWhereWithoutUserInput } from "./TaskUpdateManyWithWhereWithoutUserInput";
import { TaskUpdateWithWhereUniqueWithoutUserInput } from "./TaskUpdateWithWhereUniqueWithoutUserInput";
import { TaskUpsertWithWhereUniqueWithoutUserInput } from "./TaskUpsertWithWhereUniqueWithoutUserInput";
import { TaskWhereUniqueInput } from "./TaskWhereUniqueInput";

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
