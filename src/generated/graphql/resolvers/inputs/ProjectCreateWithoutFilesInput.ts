import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateNestedManyWithoutProjectInput } from "../inputs/CommentCreateNestedManyWithoutProjectInput";
import { InvitationCreateNestedManyWithoutProjectInput } from "../inputs/InvitationCreateNestedManyWithoutProjectInput";
import { TaskCreateNestedManyWithoutProjectInput } from "../inputs/TaskCreateNestedManyWithoutProjectInput";
import { UserCreateNestedManyWithoutProjectsInput } from "../inputs/UserCreateNestedManyWithoutProjectsInput";
import { UserCreateNestedOneWithoutOwned_projectsInput } from "../inputs/UserCreateNestedOneWithoutOwned_projectsInput";
import { Status } from "../../enums/Status";

@TypeGraphQL.InputType("ProjectCreateWithoutFilesInput", {
  isAbstract: true
})
export class ProjectCreateWithoutFilesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutProjectsInput, {
    nullable: true
  })
  users?: UserCreateNestedManyWithoutProjectsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutOwned_projectsInput, {
    nullable: false
  })
  owner!: UserCreateNestedOneWithoutOwned_projectsInput;

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
    nullable: true
  })
  total_time_spent?: number | undefined;

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

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;
}
