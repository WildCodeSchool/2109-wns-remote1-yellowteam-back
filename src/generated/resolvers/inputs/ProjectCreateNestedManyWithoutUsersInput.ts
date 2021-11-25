import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateOrConnectWithoutUsersInput } from "./ProjectCreateOrConnectWithoutUsersInput";
import { ProjectCreateWithoutUsersInput } from "./ProjectCreateWithoutUsersInput";
import { ProjectWhereUniqueInput } from "./ProjectWhereUniqueInput";

@TypeGraphQL.InputType("ProjectCreateNestedManyWithoutUsersInput", {
  isAbstract: true
})
export class ProjectCreateNestedManyWithoutUsersInput {
  @TypeGraphQL.Field(_type => [ProjectCreateWithoutUsersInput], {
    nullable: true
  })
  create?: ProjectCreateWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectCreateOrConnectWithoutUsersInput], {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectWhereUniqueInput], {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput[] | undefined;
}
