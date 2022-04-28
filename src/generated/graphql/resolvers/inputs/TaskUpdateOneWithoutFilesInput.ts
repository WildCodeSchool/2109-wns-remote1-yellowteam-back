import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateOrConnectWithoutFilesInput } from "../inputs/TaskCreateOrConnectWithoutFilesInput";
import { TaskCreateWithoutFilesInput } from "../inputs/TaskCreateWithoutFilesInput";
import { TaskUpdateWithoutFilesInput } from "../inputs/TaskUpdateWithoutFilesInput";
import { TaskUpsertWithoutFilesInput } from "../inputs/TaskUpsertWithoutFilesInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

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
