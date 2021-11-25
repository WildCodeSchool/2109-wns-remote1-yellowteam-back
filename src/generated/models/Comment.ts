import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Project } from "./Project";
import { Task } from "./Task";
import { User } from "./User";

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
  user_id?: string | null;

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
  userId?: string | null;
}
