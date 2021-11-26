import * as TypeGraphQL from 'type-graphql';
import { GraphQLUpload } from 'graphql-upload';
import { Arg, Ctx } from 'type-graphql';
import { createWriteStream } from 'fs';
import { Stream } from 'stream';
import { Request } from 'express';
import { PrismaClient } from '.prisma/client';
import { Dropbox } from 'dropbox';
import { File } from '../../type_graphql/models';

const config = {
  accessToken: process.env.DROPBOX_TOKEN,
};

const dbx = new Dropbox(config);

interface Upload {
  filename: string;
  mimetype: string;
  encoding: string;
  createReadStream: () => Stream;
}

@TypeGraphQL.Resolver()
export class UploadFile {
  @TypeGraphQL.Mutation((_returns) => File, {
    nullable: false,
  })
  async uploadFile(
    @Ctx() ctx: { prisma: PrismaClient; req: Request },
    @Arg('file', () => GraphQLUpload) { createReadStream, filename }: Upload
  ): Promise<File> {
    const { userId, projectId } = ctx.req.query;

    const file = await dbx.filesUpload({
      contents: createReadStream(),
      path: `/${userId}/${projectId}/${filename}`,
    });
    const link = await dbx.sharingCreateSharedLinkWithSettings({
      path: file.result.path_display as string,
    });

    const newFile = await ctx.prisma.file.create({
      data: {
        name: filename,
        path: link.result.url,
        size: 2,
        type: 'test',
        is_disabled: false,
        user: {
          connect: {
            id: userId as string,
          },
        },
        project: {
          connect: {
            id: projectId as string,
          },
        },
      },
    });

    return newFile;
  }
}
