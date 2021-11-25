import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateOrConnectWithoutCommentsInput } from "./ProjectCreateOrConnectWithoutCommentsInput";
import { ProjectCreateWithoutCommentsInput } from "./ProjectCreateWithoutCommentsInput";
import { ProjectWhereUniqueInput } from "./ProjectWhereUniqueInput";

@TypeGraphQL.InputType("ProjectCreateNestedOneWithoutCommentsInput", {
  isAbstract: true
})
export class ProjectCreateNestedOneWithoutCommentsInput {
  @TypeGraphQL.Field(_type => ProjectCreateWithoutCommentsInput, {
    nullable: true
  })
  create?: ProjectCreateWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateOrConnectWithoutCommentsInput, {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput | undefined;
}
