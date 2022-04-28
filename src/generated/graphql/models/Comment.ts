import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../client";
import { DecimalJSScalar } from "../scalars";
import { Project } from "../models/Project";
import { Task } from "../models/Task";
import { User } from "../models/User";

@TypeGraphQL.ObjectType("Comment", {
  isAbstract: true
})
export class Comment {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  is_disabled!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  content!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  task_comment_user_id?: string | null;

  project?: Project | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  project_id?: string | null;

  task?: Task | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  task_id?: string | null;

  user_task_comments?: User | null;

  user_project_comments?: User | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  project_comment_user_id?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updated_at!: Date;
}
