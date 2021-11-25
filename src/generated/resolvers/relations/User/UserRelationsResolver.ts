import * as TypeGraphQL from "type-graphql";
import { Comment } from "../../../models/Comment";
import { File } from "../../../models/File";
import { Invitation } from "../../../models/Invitation";
import { Notification } from "../../../models/Notification";
import { Project } from "../../../models/Project";
import { Task } from "../../../models/Task";
import { User } from "../../../models/User";
import { UserFilesArgs } from "./args/UserFilesArgs";
import { UserInvitationsArgs } from "./args/UserInvitationsArgs";
import { UserNotificationsArgs } from "./args/UserNotificationsArgs";
import { UserProject_commentsArgs } from "./args/UserProject_commentsArgs";
import { UserProjectsArgs } from "./args/UserProjectsArgs";
import { UserTaskArgs } from "./args/UserTaskArgs";
import { UserTask_commentsArgs } from "./args/UserTask_commentsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Project], {
    nullable: false
  })
  async projects(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserProjectsArgs): Promise<Project[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).projects(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Task], {
    nullable: false
  })
  async task(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserTaskArgs): Promise<Task[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).task(args);
  }

  @TypeGraphQL.FieldResolver(_type => [File], {
    nullable: false
  })
  async files(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserFilesArgs): Promise<File[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).files(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Comment], {
    nullable: false
  })
  async task_comments(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserTask_commentsArgs): Promise<Comment[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).task_comments(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Comment], {
    nullable: false
  })
  async project_comments(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserProject_commentsArgs): Promise<Comment[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).project_comments(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Invitation], {
    nullable: false
  })
  async invitations(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserInvitationsArgs): Promise<Invitation[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).invitations(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Notification], {
    nullable: false
  })
  async notifications(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserNotificationsArgs): Promise<Notification[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).notifications(args);
  }
}
