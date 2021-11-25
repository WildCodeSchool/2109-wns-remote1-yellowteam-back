import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "./BoolFilter";
import { IntFilter } from "./IntFilter";
import { ProjectRelationFilter } from "./ProjectRelationFilter";
import { StringFilter } from "./StringFilter";
import { TaskRelationFilter } from "./TaskRelationFilter";
import { UserRelationFilter } from "./UserRelationFilter";

@TypeGraphQL.InputType("FileWhereInput", {
  isAbstract: true
})
export class FileWhereInput {
  @TypeGraphQL.Field(_type => [FileWhereInput], {
    nullable: true
  })
  AND?: FileWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FileWhereInput], {
    nullable: true
  })
  OR?: FileWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FileWhereInput], {
    nullable: true
  })
  NOT?: FileWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  path?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  size?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  type?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ProjectRelationFilter, {
    nullable: true
  })
  project?: ProjectRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  projectId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => TaskRelationFilter, {
    nullable: true
  })
  task?: TaskRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  taskId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  is_disabled?: BoolFilter | undefined;
}
