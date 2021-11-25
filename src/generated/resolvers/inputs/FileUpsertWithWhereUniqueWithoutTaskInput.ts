import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileCreateWithoutTaskInput } from "./FileCreateWithoutTaskInput";
import { FileUpdateWithoutTaskInput } from "./FileUpdateWithoutTaskInput";
import { FileWhereUniqueInput } from "./FileWhereUniqueInput";

@TypeGraphQL.InputType("FileUpsertWithWhereUniqueWithoutTaskInput", {
  isAbstract: true
})
export class FileUpsertWithWhereUniqueWithoutTaskInput {
  @TypeGraphQL.Field(_type => FileWhereUniqueInput, {
    nullable: false
  })
  where!: FileWhereUniqueInput;

  @TypeGraphQL.Field(_type => FileUpdateWithoutTaskInput, {
    nullable: false
  })
  update!: FileUpdateWithoutTaskInput;

  @TypeGraphQL.Field(_type => FileCreateWithoutTaskInput, {
    nullable: false
  })
  create!: FileCreateWithoutTaskInput;
}
