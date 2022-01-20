import * as TypeGraphQL from "type-graphql";
import { Comment } from "../../../models/Comment";
import { File } from "../../../models/File";
import { Invitation } from "../../../models/Invitation";
import { Project } from "../../../models/Project";
import { Task } from "../../../models/Task";
import { User } from "../../../models/User";
import { ProjectCommentsArgs } from "./args/ProjectCommentsArgs";
import { ProjectFilesArgs } from "./args/ProjectFilesArgs";
import { ProjectInvitationsArgs } from "./args/ProjectInvitationsArgs";
import { ProjectTasksArgs } from "./args/ProjectTasksArgs";
import { ProjectUsersArgs } from "./args/ProjectUsersArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Project)
export class ProjectRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [User], {
    nullable: false
  })
  async users(@TypeGraphQL.Root() project: Project, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProjectUsersArgs): Promise<User[]> {
    return getPrismaFromContext(ctx).project.findUnique({
      where: {
        id: project.id,
      },
    }).users(args);
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async owner(@TypeGraphQL.Root() project: Project, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).project.findUnique({
      where: {
        id: project.id,
      },
    }).owner({});
  }

  @TypeGraphQL.FieldResolver(_type => [Task], {
    nullable: false
  })
  async tasks(@TypeGraphQL.Root() project: Project, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProjectTasksArgs): Promise<Task[]> {
    return getPrismaFromContext(ctx).project.findUnique({
      where: {
        id: project.id,
      },
    }).tasks(args);
  }

  @TypeGraphQL.FieldResolver(_type => [File], {
    nullable: false
  })
  async files(@TypeGraphQL.Root() project: Project, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProjectFilesArgs): Promise<File[]> {
    return getPrismaFromContext(ctx).project.findUnique({
      where: {
        id: project.id,
      },
    }).files(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Comment], {
    nullable: false
  })
  async comments(@TypeGraphQL.Root() project: Project, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProjectCommentsArgs): Promise<Comment[]> {
    return getPrismaFromContext(ctx).project.findUnique({
      where: {
        id: project.id,
      },
    }).comments(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Invitation], {
    nullable: false
  })
  async invitations(@TypeGraphQL.Root() project: Project, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProjectInvitationsArgs): Promise<Invitation[]> {
    return getPrismaFromContext(ctx).project.findUnique({
      where: {
        id: project.id,
      },
    }).invitations(args);
  }
}
