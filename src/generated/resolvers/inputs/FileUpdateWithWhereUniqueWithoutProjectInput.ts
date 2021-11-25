import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileUpdateWithoutProjectInput } from "./FileUpdateWithoutProjectInput";
import { FileWhereUniqueInput } from "./FileWhereUniqueInput";

@TypeGraphQL.InputType("FileUpdateWithWhereUniqueWithoutProjectInput", {
  isAbstract: true
})
export class FileUpdateWithWhereUniqueWithoutProjectInput {
  @TypeGraphQL.Field(_type => FileWhereUniqueInput, {
    nullable: false
  })
  where!: FileWhereUniqueInput;

  @TypeGraphQL.Field(_type => FileUpdateWithoutProjectInput, {
    nullable: false
  })
  data!: FileUpdateWithoutProjectInput;
}
