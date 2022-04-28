import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileCreateManyUserInput } from "../inputs/FileCreateManyUserInput";

@TypeGraphQL.InputType("FileCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class FileCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [FileCreateManyUserInput], {
    nullable: false
  })
  data!: FileCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
