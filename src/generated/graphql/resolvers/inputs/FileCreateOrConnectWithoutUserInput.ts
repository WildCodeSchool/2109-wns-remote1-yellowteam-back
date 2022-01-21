import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileCreateWithoutUserInput } from "../inputs/FileCreateWithoutUserInput";
import { FileWhereUniqueInput } from "../inputs/FileWhereUniqueInput";

@TypeGraphQL.InputType("FileCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class FileCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => FileWhereUniqueInput, {
    nullable: false
  })
  where!: FileWhereUniqueInput;

  @TypeGraphQL.Field(_type => FileCreateWithoutUserInput, {
    nullable: false
  })
  create!: FileCreateWithoutUserInput;
}
