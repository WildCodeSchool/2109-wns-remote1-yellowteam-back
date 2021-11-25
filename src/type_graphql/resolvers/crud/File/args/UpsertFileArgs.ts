import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FileCreateInput } from "../../../inputs/FileCreateInput";
import { FileUpdateInput } from "../../../inputs/FileUpdateInput";
import { FileWhereUniqueInput } from "../../../inputs/FileWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertFileArgs {
  @TypeGraphQL.Field(_type => FileWhereUniqueInput, {
    nullable: false
  })
  where!: FileWhereUniqueInput;

  @TypeGraphQL.Field(_type => FileCreateInput, {
    nullable: false
  })
  create!: FileCreateInput;

  @TypeGraphQL.Field(_type => FileUpdateInput, {
    nullable: false
  })
  update!: FileUpdateInput;
}
