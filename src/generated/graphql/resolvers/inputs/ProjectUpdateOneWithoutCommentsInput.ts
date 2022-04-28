import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateOrConnectWithoutCommentsInput } from "../inputs/ProjectCreateOrConnectWithoutCommentsInput";
import { ProjectCreateWithoutCommentsInput } from "../inputs/ProjectCreateWithoutCommentsInput";
import { ProjectUpdateWithoutCommentsInput } from "../inputs/ProjectUpdateWithoutCommentsInput";
import { ProjectUpsertWithoutCommentsInput } from "../inputs/ProjectUpsertWithoutCommentsInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType("ProjectUpdateOneWithoutCommentsInput", {
  isAbstract: true
})
export class ProjectUpdateOneWithoutCommentsInput {
  @TypeGraphQL.Field(_type => ProjectCreateWithoutCommentsInput, {
    nullable: true
  })
  create?: ProjectCreateWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateOrConnectWithoutCommentsInput, {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpsertWithoutCommentsInput, {
    nullable: true
  })
  upsert?: ProjectUpsertWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpdateWithoutCommentsInput, {
    nullable: true
  })
  update?: ProjectUpdateWithoutCommentsInput | undefined;
}
