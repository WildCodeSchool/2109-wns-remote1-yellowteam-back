import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileUpdateWithoutUserInput } from "../inputs/FileUpdateWithoutUserInput";
import { FileWhereUniqueInput } from "../inputs/FileWhereUniqueInput";

@TypeGraphQL.InputType("FileUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class FileUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => FileWhereUniqueInput, {
    nullable: false
  })
  where!: FileWhereUniqueInput;

  @TypeGraphQL.Field(_type => FileUpdateWithoutUserInput, {
    nullable: false
  })
  data!: FileUpdateWithoutUserInput;
}
