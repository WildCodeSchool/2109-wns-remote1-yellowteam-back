import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateOrConnectWithoutTasksInput } from "./ProjectCreateOrConnectWithoutTasksInput";
import { ProjectCreateWithoutTasksInput } from "./ProjectCreateWithoutTasksInput";
import { ProjectWhereUniqueInput } from "./ProjectWhereUniqueInput";

@TypeGraphQL.InputType("ProjectCreateNestedOneWithoutTasksInput", {
  isAbstract: true
})
export class ProjectCreateNestedOneWithoutTasksInput {
  @TypeGraphQL.Field(_type => ProjectCreateWithoutTasksInput, {
    nullable: true
  })
  create?: ProjectCreateWithoutTasksInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateOrConnectWithoutTasksInput, {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutTasksInput | undefined;

  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput | undefined;
}
