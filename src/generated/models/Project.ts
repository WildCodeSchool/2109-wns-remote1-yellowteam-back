import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Comment } from "./Comment";
import { File } from "./File";
import { Invitation } from "./Invitation";
import { Task } from "./Task";
import { User } from "./User";
import { Status } from "../enums/Status";
import { ProjectCount } from "../resolvers/outputs/ProjectCount";

@TypeGraphQL.ObjectType("Project", {
  isAbstract: true
})
export class Project {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  users?: User[];

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ownerId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  private!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  is_disabled!: boolean;

  @TypeGraphQL.Field(_type => Status, {
    nullable: false
  })
  status_project!: "IN_PROGRESS" | "NOT_STARTED" | "FIHISHED";

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  total_time_spent!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  start_date!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  end_date!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  due_date!: Date;

  tasks?: Task[];

  files?: File[];

  comments?: Comment[];

  invitations?: Invitation[];

  @TypeGraphQL.Field(_type => ProjectCount, {
    nullable: false
  })
  _count!: ProjectCount;
}
