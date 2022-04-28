import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileUpdateWithoutTaskInput } from "../inputs/FileUpdateWithoutTaskInput";
import { FileWhereUniqueInput } from "../inputs/FileWhereUniqueInput";

@TypeGraphQL.InputType("FileUpdateWithWhereUniqueWithoutTaskInput", {
  isAbstract: true
})
export class FileUpdateWithWhereUniqueWithoutTaskInput {
  @TypeGraphQL.Field(_type => FileWhereUniqueInput, {
    nullable: false
  })
  where!: FileWhereUniqueInput;

  @TypeGraphQL.Field(_type => FileUpdateWithoutTaskInput, {
    nullable: false
  })
  data!: FileUpdateWithoutTaskInput;
}
