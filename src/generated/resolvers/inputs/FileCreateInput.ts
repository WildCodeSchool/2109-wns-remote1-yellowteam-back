import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateNestedOneWithoutFilesInput } from "./ProjectCreateNestedOneWithoutFilesInput";
import { TaskCreateNestedOneWithoutFilesInput } from "./TaskCreateNestedOneWithoutFilesInput";
import { UserCreateNestedOneWithoutFilesInput } from "./UserCreateNestedOneWithoutFilesInput";

@TypeGraphQL.InputType("FileCreateInput", {
  isAbstract: true
})
export class FileCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  path!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  size!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  type!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  is_disabled!: boolean;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutFilesInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutFilesInput;

  @TypeGraphQL.Field(_type => ProjectCreateNestedOneWithoutFilesInput, {
    nullable: false
  })
  project!: ProjectCreateNestedOneWithoutFilesInput;

  @TypeGraphQL.Field(_type => TaskCreateNestedOneWithoutFilesInput, {
    nullable: true
  })
  task?: TaskCreateNestedOneWithoutFilesInput | undefined;
}
