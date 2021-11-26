/* eslint-disable import/no-extraneous-dependencies */
import { GraphQLUpload } from 'graphql-upload';
import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';
import { Stream } from 'stream';
import { File } from '@generated/type-graphql';
import { Request } from 'express';
import { Dropbox } from 'dropbox';
import { PrismaClient } from '.prisma/client';

const config = {
  accessToken: process.env.DROPBOX_TOKEN,
};

const dbx = new Dropbox(config);

export interface Upload {
  filename: string;
  mimetype: string;
  encoding: string;
  createReadStream: () => Stream;
}

@Resolver()
export class UploadFile {
  @Mutation(() => File, {
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
