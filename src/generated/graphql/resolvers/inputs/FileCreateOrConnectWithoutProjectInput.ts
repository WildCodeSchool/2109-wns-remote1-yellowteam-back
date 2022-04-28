import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { FileCreateWithoutProjectInput } from "../inputs/FileCreateWithoutProjectInput";
import { FileWhereUniqueInput } from "../inputs/FileWhereUniqueInput";

@TypeGraphQL.InputType("FileCreateOrConnectWithoutProjectInput", {
  isAbstract: true
})
export class FileCreateOrConnectWithoutProjectInput {
  @TypeGraphQL.Field(_type => FileWhereUniqueInput, {
    nullable: false
  })
  where!: FileWhereUniqueInput;

  @TypeGraphQL.Field(_type => FileCreateWithoutProjectInput, {
    nullable: false
  })
  create!: FileCreateWithoutProjectInput;
}
