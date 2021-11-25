import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateManyProjectInputEnvelope } from "./TaskCreateManyProjectInputEnvelope";
import { TaskCreateOrConnectWithoutProjectInput } from "./TaskCreateOrConnectWithoutProjectInput";
import { TaskCreateWithoutProjectInput } from "./TaskCreateWithoutProjectInput";
import { TaskScalarWhereInput } from "./TaskScalarWhereInput";
import { TaskUpdateManyWithWhereWithoutProjectInput } from "./TaskUpdateManyWithWhereWithoutProjectInput";
import { TaskUpdateWithWhereUniqueWithoutProjectInput } from "./TaskUpdateWithWhereUniqueWithoutProjectInput";
import { TaskUpsertWithWhereUniqueWithoutProjectInput } from "./TaskUpsertWithWhereUniqueWithoutProjectInput";
import { TaskWhereUniqueInput } from "./TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpdateManyWithoutProjectInput", {
  isAbstract: true
})
export class TaskUpdateManyWithoutProjectInput {
  @TypeGraphQL.Field(_type => [TaskCreateWithoutProjectInput], {
    nullable: true
  })
  create?: TaskCreateWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskCreateOrConnectWithoutProjectInput], {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskUpsertWithWhereUniqueWithoutProjectInput], {
    nullable: true
  })
  upsert?: TaskUpsertWithWhereUniqueWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => TaskCreateManyProjectInputEnvelope, {
    nullable: true
  })
  createMany?: TaskCreateManyProjectInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [TaskUpdateWithWhereUniqueWithoutProjectInput], {
    nullable: true
  })
  update?: TaskUpdateWithWhereUniqueWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskUpdateManyWithWhereWithoutProjectInput], {
    nullable: true
  })
  updateMany?: TaskUpdateManyWithWhereWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TaskScalarWhereInput[] | undefined;
}
