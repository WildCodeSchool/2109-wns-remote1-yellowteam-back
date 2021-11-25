import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateManyProjectInputEnvelope } from "./TaskCreateManyProjectInputEnvelope";
import { TaskCreateOrConnectWithoutProjectInput } from "./TaskCreateOrConnectWithoutProjectInput";
import { TaskCreateWithoutProjectInput } from "./TaskCreateWithoutProjectInput";
import { TaskWhereUniqueInput } from "./TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskCreateNestedManyWithoutProjectInput", {
  isAbstract: true
})
export class TaskCreateNestedManyWithoutProjectInput {
  @TypeGraphQL.Field(_type => [TaskCreateWithoutProjectInput], {
    nullable: true
  })
  create?: TaskCreateWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskCreateOrConnectWithoutProjectInput], {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => TaskCreateManyProjectInputEnvelope, {
    nullable: true
  })
  createMany?: TaskCreateManyProjectInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereUniqueInput], {
    nullable: true
  })
  connect?: TaskWhereUniqueInput[] | undefined;
}
