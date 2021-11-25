import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateOrConnectWithoutCommentsInput } from "./TaskCreateOrConnectWithoutCommentsInput";
import { TaskCreateWithoutCommentsInput } from "./TaskCreateWithoutCommentsInput";
import { TaskUpdateWithoutCommentsInput } from "./TaskUpdateWithoutCommentsInput";
import { TaskUpsertWithoutCommentsInput } from "./TaskUpsertWithoutCommentsInput";
import { TaskWhereUniqueInput } from "./TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpdateOneWithoutCommentsInput", {
  isAbstract: true
})
export class TaskUpdateOneWithoutCommentsInput {
  @TypeGraphQL.Field(_type => TaskCreateWithoutCommentsInput, {
    nullable: true
  })
  create?: TaskCreateWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => TaskCreateOrConnectWithoutCommentsInput, {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpsertWithoutCommentsInput, {
    nullable: true
  })
  upsert?: TaskUpsertWithoutCommentsInput | undefined;

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

  @TypeGraphQL.Field(_type => TaskUpdateWithoutCommentsInput, {
    nullable: true
  })
  update?: TaskUpdateWithoutCommentsInput | undefined;
}
