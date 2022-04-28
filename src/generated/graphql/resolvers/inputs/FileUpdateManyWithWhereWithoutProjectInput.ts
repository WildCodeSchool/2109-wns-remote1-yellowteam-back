import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { FileScalarWhereInput } from "../inputs/FileScalarWhereInput";
import { FileUpdateManyMutationInput } from "../inputs/FileUpdateManyMutationInput";

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
