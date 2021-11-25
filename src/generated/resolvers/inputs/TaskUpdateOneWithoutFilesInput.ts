import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateOrConnectWithoutFilesInput } from "./TaskCreateOrConnectWithoutFilesInput";
import { TaskCreateWithoutFilesInput } from "./TaskCreateWithoutFilesInput";
import { TaskUpdateWithoutFilesInput } from "./TaskUpdateWithoutFilesInput";
import { TaskUpsertWithoutFilesInput } from "./TaskUpsertWithoutFilesInput";
import { TaskWhereUniqueInput } from "./TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpdateOneWithoutFilesInput", {
  isAbstract: true
})
export class TaskUpdateOneWithoutFilesInput {
  @TypeGraphQL.Field(_type => TaskCreateWithoutFilesInput, {
    nullable: true
  })
  create?: TaskCreateWithoutFilesInput | undefined;

  @TypeGraphQL.Field(_type => TaskCreateOrConnectWithoutFilesInput, {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutFilesInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpsertWithoutFilesInput, {
    nullable: true
  })
  upsert?: TaskUpsertWithoutFilesInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: true
  })
  connect?: TaskWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpdateWithoutFilesInput, {
    nullable: true
  })
  update?: TaskUpdateWithoutFilesInput | undefined;
}
