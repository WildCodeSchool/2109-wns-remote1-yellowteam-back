import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateOrConnectWithoutCommentsInput } from "./ProjectCreateOrConnectWithoutCommentsInput";
import { ProjectCreateWithoutCommentsInput } from "./ProjectCreateWithoutCommentsInput";
import { ProjectUpdateWithoutCommentsInput } from "./ProjectUpdateWithoutCommentsInput";
import { ProjectUpsertWithoutCommentsInput } from "./ProjectUpsertWithoutCommentsInput";
import { ProjectWhereUniqueInput } from "./ProjectWhereUniqueInput";

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
