import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Comment } from "./Comment";
import { File } from "./File";
import { Invitation } from "./Invitation";
import { Notification } from "./Notification";
import { Project } from "./Project";
import { Task } from "./Task";
import { Role } from "../enums/Role";
import { UserCount } from "../resolvers/outputs/UserCount";

@TypeGraphQL.ObjectType("User", {
  isAbstract: true
})
export class User {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  first_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  last_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  is_disabled!: boolean;

  @TypeGraphQL.Field(_type => [Role], {
    nullable: false
  })
  role!: Array<"SUPER_ADMIN" | "ADMIN" | "MANAGER" | "USER">;

  projects?: Project[];

  task?: Task[];

  files?: File[];

  task_comments?: Comment[];

  project_comments?: Comment[];

  invitations?: Invitation[];

  notifications?: Notification[];

  @TypeGraphQL.Field(_type => UserCount, {
    nullable: false
  })
  _count!: UserCount;
}
