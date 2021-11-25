import * as TypeGraphQL from 'type-graphql';
import { GraphQLUpload } from 'graphql-upload';
import { Arg, Ctx } from 'type-graphql';
import { createWriteStream } from 'fs';
import { Stream } from 'stream';

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
    @Ctx() ctx: any,
    @Arg('file', () => GraphQLUpload) { createReadStream, filename }: Upload
  ): Promise<Boolean> {
    console.log('ok your in');
    console.log(filename);
    return new Promise(async (resolve, reject) =>
      createReadStream()
        .pipe(createWriteStream(__dirname + `/../../../uploads/${filename}`))
        .on('finish', (e) => {
          console.log(e);
          resolve(true);
        })
        .on('error', (e) => {
          console.log(e);
          reject(false);
        })
    );
  }
}
