import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Project } from "../models/Project";
import { Task } from "../models/Task";
import { User } from "../models/User";

@TypeGraphQL.ObjectType("File", {
  isAbstract: true
})
export class File {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

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

  user?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  user_id!: string;

  project?: Project;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  project_id!: string;

  task?: Task | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  task_id?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  is_disabled!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updated_at!: Date;
}
