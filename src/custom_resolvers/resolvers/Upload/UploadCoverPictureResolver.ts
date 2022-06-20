/* eslint-disable no-console */
import { GraphQLUpload } from 'graphql-upload';
import { Arg, Authorized, Ctx, Mutation, Resolver } from 'type-graphql';
import { Stream, Readable } from 'stream';
import { ApolloError } from 'apollo-server-core';
import { GQLContext } from '../../../interfaces';
import { Role, User } from '../../../generated/graphql';
import { minioService } from '../../../services/minioService';

export interface Upload {
  filename: string;
  mimetype: string;
  encoding: string;
  createReadStream: () => Stream;
}

@Resolver()
export class UploadCoverPicture {
  @Authorized(Role.SUPER_ADMIN, Role.ADMIN, Role.USER, Role.MANAGER)
  @Mutation(() => User, {
    nullable: false,
  })
  async uploadCoverPicture(
    @Ctx() ctx: GQLContext,
    @Arg('file', () => GraphQLUpload)
    { createReadStream, filename }: Upload
  ): Promise<User> {
    const { userId } = ctx.req.query;

    try {
      const stream = createReadStream();

      const metadata = {
        'Content-type': 'image',
      };

      const { cover_picture } = await ctx.prisma.user.findUnique({
        where: {
          id: userId as string,
        },
        rejectOnNotFound: true,
      });

      const previousFileName = cover_picture?.split('/')[
        cover_picture?.split('/').length - 1
      ] as string;

      await minioService.replaceFile(
        previousFileName,
        filename,
        userId as string,
        stream as Readable,
        'cover_picture',
        metadata
      );

      const updatedUser = await ctx.prisma.user.update({
        data: {
          cover_picture: `https://minio-dc-s3.digitalcopilote.re/ytask/cover_picture/${userId}/${filename}`,
        },
        where: {
          id: userId as string,
        },
      });

      return updatedUser;
    } catch (error) {
      console.log(error);
      throw new ApolloError('error during upload', error as string);
    }
  }
}
