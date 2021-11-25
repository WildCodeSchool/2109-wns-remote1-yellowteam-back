import * as TypeGraphQL from "type-graphql";
import { Comment } from "../../../models/Comment";
import { Project } from "../../../models/Project";
import { Task } from "../../../models/Task";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Comment)
export class CommentRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Project, {
    nullable: true
  })
  async project(@TypeGraphQL.Root() comment: Comment, @TypeGraphQL.Ctx() ctx: any): Promise<Project | null> {
    return getPrismaFromContext(ctx).comment.findUnique({
      where: {
        id: comment.id,
      },
    }).project({});
  }

  @TypeGraphQL.FieldResolver(_type => Task, {
    nullable: true
  })
  async task(@TypeGraphQL.Root() comment: Comment, @TypeGraphQL.Ctx() ctx: any): Promise<Task | null> {
    return getPrismaFromContext(ctx).comment.findUnique({
      where: {
        id: comment.id,
      },
    }).task({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async user_task_comments(@TypeGraphQL.Root() comment: Comment, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).comment.findUnique({
      where: {
        id: comment.id,
      },
    }).user_task_comments({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async user_project_comments(@TypeGraphQL.Root() comment: Comment, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).comment.findUnique({
      where: {
        id: comment.id,
      },
    }).user_project_comments({});
  }
}
