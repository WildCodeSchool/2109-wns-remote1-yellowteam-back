import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { FileCreateManyTaskInput } from "../inputs/FileCreateManyTaskInput";

@TypeGraphQL.InputType("FileCreateManyTaskInputEnvelope", {
  isAbstract: true
})
export class FileCreateManyTaskInputEnvelope {
  @TypeGraphQL.Field(_type => [FileCreateManyTaskInput], {
    nullable: false
  })
  data!: FileCreateManyTaskInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
