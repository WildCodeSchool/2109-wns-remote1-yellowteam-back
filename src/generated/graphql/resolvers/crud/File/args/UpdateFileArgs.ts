import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FileUpdateInput } from "../../../inputs/FileUpdateInput";
import { FileWhereUniqueInput } from "../../../inputs/FileWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateFileArgs {
  @TypeGraphQL.Field(_type => FileUpdateInput, {
    nullable: false
  })
  data!: FileUpdateInput;

  @TypeGraphQL.Field(_type => FileWhereUniqueInput, {
    nullable: false
  })
  where!: FileWhereUniqueInput;
}
