import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileScalarWhereInput } from "./FileScalarWhereInput";
import { FileUpdateManyMutationInput } from "./FileUpdateManyMutationInput";

@TypeGraphQL.InputType("FileUpdateManyWithWhereWithoutProjectInput", {
  isAbstract: true
})
export class FileUpdateManyWithWhereWithoutProjectInput {
  @TypeGraphQL.Field(_type => FileScalarWhereInput, {
    nullable: false
  })
  where!: FileScalarWhereInput;

  @TypeGraphQL.Field(_type => FileUpdateManyMutationInput, {
    nullable: false
  })
  data!: FileUpdateManyMutationInput;
}
