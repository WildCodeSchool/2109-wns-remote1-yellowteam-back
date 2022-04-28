import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { FileCreateWithoutProjectInput } from "../inputs/FileCreateWithoutProjectInput";
import { FileUpdateWithoutProjectInput } from "../inputs/FileUpdateWithoutProjectInput";
import { FileWhereUniqueInput } from "../inputs/FileWhereUniqueInput";

@TypeGraphQL.InputType("FileUpsertWithWhereUniqueWithoutProjectInput", {
  isAbstract: true
})
export class FileUpsertWithWhereUniqueWithoutProjectInput {
  @TypeGraphQL.Field(_type => FileWhereUniqueInput, {
    nullable: false
  })
  where!: FileWhereUniqueInput;

  @TypeGraphQL.Field(_type => FileUpdateWithoutProjectInput, {
    nullable: false
  })
  update!: FileUpdateWithoutProjectInput;

  @TypeGraphQL.Field(_type => FileCreateWithoutProjectInput, {
    nullable: false
  })
  create!: FileCreateWithoutProjectInput;
}
