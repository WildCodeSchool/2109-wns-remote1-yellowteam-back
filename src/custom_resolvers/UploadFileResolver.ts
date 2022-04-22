/* eslint-disable no-console */
import { GraphQLUpload } from 'graphql-upload';
import { Arg, Authorized, Ctx, Mutation, Resolver } from 'type-graphql';
import { Stream, Readable } from 'stream';
import * as Minio from 'minio';
import { ApolloError } from 'apollo-server-core';
import { Request } from 'express';
import { PrismaClient } from '.prisma/client';
import { File, Role } from 'src/generated/graphql';
import getFileType from '@utils/getFileType';

const { MINIO_USERNAME, MINIO_PASSWORD, MINIO_ENDPOINT } = process.env;

const minioClient = new Minio.Client({
  endPoint: MINIO_ENDPOINT as string,
  port: 80,
  useSSL: false,
  accessKey: MINIO_USERNAME as string,
  secretKey: MINIO_PASSWORD as string,
});

export interface Upload {
  filename: string;
  mimetype: string;
  encoding: string;
  createReadStream: () => Stream;
}

@Resolver()
export class UploadFile {
  @Authorized(Role.SUPER_ADMIN, Role.ADMIN, Role.USER, Role.MANAGER)
  @Mutation(() => File, {
    nullable: false,
  })
  async uploadFile(
    @Ctx() ctx: { prisma: PrismaClient; req: Request },
    @Arg('file', () => GraphQLUpload)
    { createReadStream, filename }: Upload
  ): Promise<File> {
    const { userId, projectId, size } = ctx.req.query;

    const stream = createReadStream();

    const metadata = {
      'Content-type': 'image',
    };
    console.log('log', MINIO_USERNAME, MINIO_PASSWORD);

    try {
      await minioClient.putObject(
        'dcreport',
        filename,
        stream as Readable,
        metadata
      );

      const newFile = await ctx.prisma.file.create({
        data: {
          name: filename,
          path: `https://minio-dc-s3.digitalcopilote.re/ytask/${filename}`,
          size: parseInt(size as string, 10) || 0,
          type: getFileType(filename),
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
    } catch (error) {
      console.log(error);
      throw new ApolloError('error during upload', error as string);
    }
  }
}
