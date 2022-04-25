import * as TypeGraphQL from "type-graphql";
import { File } from "../../../models/File";
import { Project } from "../../../models/Project";
import { Task } from "../../../models/Task";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => File)
export class FileRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async user(@TypeGraphQL.Root() file: File, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).file.findUnique({
      where: {
        id: file.id,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => Project, {
    nullable: false
  })
  async project(@TypeGraphQL.Root() file: File, @TypeGraphQL.Ctx() ctx: any): Promise<Project> {
    return getPrismaFromContext(ctx).file.findUnique({
      where: {
        id: file.id,
      },
    }).project({});
  }

  @TypeGraphQL.FieldResolver(_type => Task, {
    nullable: true
  })
  async task(@TypeGraphQL.Root() file: File, @TypeGraphQL.Ctx() ctx: any): Promise<Task | null> {
    return getPrismaFromContext(ctx).file.findUnique({
      where: {
        id: file.id,
      },
    }).task({});
  }
}
