import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileCreateWithoutUserInput } from "../inputs/FileCreateWithoutUserInput";
import { FileUpdateWithoutUserInput } from "../inputs/FileUpdateWithoutUserInput";
import { FileWhereUniqueInput } from "../inputs/FileWhereUniqueInput";

@TypeGraphQL.InputType("FileUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class FileUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => FileWhereUniqueInput, {
    nullable: false
  })
  where!: FileWhereUniqueInput;

  @TypeGraphQL.Field(_type => FileUpdateWithoutUserInput, {
    nullable: false
  })
  update!: FileUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => FileCreateWithoutUserInput, {
    nullable: false
  })
  create!: FileCreateWithoutUserInput;
}
