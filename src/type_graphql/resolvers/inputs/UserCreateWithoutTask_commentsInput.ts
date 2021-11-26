import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateNestedManyWithoutUser_project_commentsInput } from "../inputs/CommentCreateNestedManyWithoutUser_project_commentsInput";
import { FileCreateNestedManyWithoutUserInput } from "../inputs/FileCreateNestedManyWithoutUserInput";
import { InvitationCreateNestedManyWithoutUserInput } from "../inputs/InvitationCreateNestedManyWithoutUserInput";
import { NotificationCreateNestedManyWithoutUserInput } from "../inputs/NotificationCreateNestedManyWithoutUserInput";
import { ProjectCreateNestedManyWithoutUsersInput } from "../inputs/ProjectCreateNestedManyWithoutUsersInput";
import { TaskCreateNestedManyWithoutUserInput } from "../inputs/TaskCreateNestedManyWithoutUserInput";
import { UserCreateroleInput } from "../inputs/UserCreateroleInput";

@TypeGraphQL.InputType("UserCreateWithoutTask_commentsInput", {
  isAbstract: true
})
export class UserCreateWithoutTask_commentsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

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

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  avatar!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  is_disabled!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateroleInput, {
    nullable: true
  })
  role?: UserCreateroleInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateNestedManyWithoutUsersInput, {
    nullable: true
  })
  projects?: ProjectCreateNestedManyWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => TaskCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  task?: TaskCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => FileCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  files?: FileCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutUser_project_commentsInput, {
    nullable: true
  })
  project_comments?: CommentCreateNestedManyWithoutUser_project_commentsInput | undefined;

  @TypeGraphQL.Field(_type => InvitationCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  invitations?: InvitationCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => NotificationCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  notifications?: NotificationCreateNestedManyWithoutUserInput | undefined;
}