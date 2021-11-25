import * as TypeGraphQL from 'type-graphql';
import { GraphQLUpload } from 'graphql-upload';
import { Arg, Ctx } from 'type-graphql';
import { createWriteStream } from 'fs';
import { Stream } from 'stream';
import { getPrismaFromContext } from 'src/type_graphql/helpers';
import { PrismaClient } from '.prisma/client';

interface Upload {
  filename: string;
  mimetype: string;
  encoding: string;
  createReadStream: () => Stream;
}

@TypeGraphQL.Resolver()
export class UploadFile {
  @TypeGraphQL.Mutation((_returns) => Boolean, {
    nullable: false,
  })
  async uploadFile(
    @Ctx() ctx: { prisma: PrismaClient },
    @Arg('file', () => GraphQLUpload) { createReadStream, filename }: Upload
  ): Promise<Boolean> {
    console.log(
      await new Promise(async (resolve, reject) =>
        createReadStream()
          .pipe(createWriteStream(__dirname + `/../../../uploads/${filename}`))
          .on('finish', async (e) => {
            console.log(e);
            const file = await ctx.prisma.file.create({
              data: {
                name: 'test',
                path: 'test',
                size: 2,
                type: 'test',
                is_disabled: false,
                user: {
                  connect: {
                    id: '0d5215f1-f3f2-40c9-8875-35e7d3c01341',
                  },
                },
                project: {
                  connect: {
                    id: '2e4912bb-7491-4251-ab70-108495cc6039',
                  },
                },
              },
            });
            console.log(file);
            resolve(true);
          })
          .on('error', (e) => {
            console.log(e);
            reject(false);
          })
      )
    );
    return true;
  }
}
