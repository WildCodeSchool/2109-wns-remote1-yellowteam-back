/* eslint-disable no-console */
import { GraphQLUpload } from 'graphql-upload';
import { Arg, Authorized, Ctx, Mutation, Resolver } from 'type-graphql';
import { Stream, Readable } from 'stream';
import { ApolloError } from 'apollo-server-core';
import { GQLContext } from '../../../../src/interfaces';
import { Role, User } from '../../../../src/generated/graphql';
import { minioService } from '../../../../src/services/minioService';

export interface Upload {
  filename: string;
  mimetype: string;
  encoding: string;
  createReadStream: () => Stream;
}

@Resolver()
export class UploadProfilePicture {
  @Authorized(Role.SUPER_ADMIN, Role.ADMIN, Role.USER, Role.MANAGER)
  @Mutation(() => User, {
    nullable: false,
  })
  async uploadProfilePicture(
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

      const { avatar } = await ctx.prisma.user.findUnique({
        where: {
          id: userId,
        },
        rejectOnNotFound: true,
      });

      const previousFileName = avatar?.split('/')[
        avatar?.split('/').length - 1
      ] as string;

      await minioService.replaceProfilePicture(
        previousFileName,
        filename,
        userId,
        stream as Readable,
        metadata
      );

      const updatedUser = await ctx.prisma.user.update({
        data: {
          avatar: `https://minio-dc-s3.digitalcopilote.re/ytask/profile_picture/${userId}/${filename}`,
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
