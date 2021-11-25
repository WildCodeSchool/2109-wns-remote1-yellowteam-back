import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateNestedManyWithoutProjectInput } from "./CommentCreateNestedManyWithoutProjectInput";
import { InvitationCreateNestedManyWithoutProjectInput } from "./InvitationCreateNestedManyWithoutProjectInput";
import { TaskCreateNestedManyWithoutProjectInput } from "./TaskCreateNestedManyWithoutProjectInput";
import { UserCreateNestedManyWithoutProjectsInput } from "./UserCreateNestedManyWithoutProjectsInput";
import { Status } from "../../enums/Status";

@TypeGraphQL.InputType("ProjectCreateWithoutFilesInput", {
  isAbstract: true
})
export class ProjectCreateWithoutFilesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

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

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutProjectsInput, {
    nullable: true
  })
  users?: UserCreateNestedManyWithoutProjectsInput | undefined;

  @TypeGraphQL.Field(_type => TaskCreateNestedManyWithoutProjectInput, {
    nullable: true
  })
  tasks?: TaskCreateNestedManyWithoutProjectInput | undefined;

  @TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutProjectInput, {
    nullable: true
  })
  comments?: CommentCreateNestedManyWithoutProjectInput | undefined;

  @TypeGraphQL.Field(_type => InvitationCreateNestedManyWithoutProjectInput, {
    nullable: true
  })
  invitations?: InvitationCreateNestedManyWithoutProjectInput | undefined;
}
