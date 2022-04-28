import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { FileCreateManyProjectInput } from "../inputs/FileCreateManyProjectInput";

@TypeGraphQL.InputType("FileCreateManyProjectInputEnvelope", {
  isAbstract: true
})
export class FileCreateManyProjectInputEnvelope {
  @TypeGraphQL.Field(_type => [FileCreateManyProjectInput], {
    nullable: false
  })
  data!: FileCreateManyProjectInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
