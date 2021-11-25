import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileWhereInput } from "../inputs/FileWhereInput";

@TypeGraphQL.InputType("FileListRelationFilter", {
  isAbstract: true
})
export class FileListRelationFilter {
  @TypeGraphQL.Field(_type => FileWhereInput, {
    nullable: true
  })
  every?: FileWhereInput | undefined;

  @TypeGraphQL.Field(_type => FileWhereInput, {
    nullable: true
  })
  some?: FileWhereInput | undefined;

  @TypeGraphQL.Field(_type => FileWhereInput, {
    nullable: true
  })
  none?: FileWhereInput | undefined;
}
