import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FileUpdateManyMutationInput } from "../../../inputs/FileUpdateManyMutationInput";
import { FileWhereInput } from "../../../inputs/FileWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyFileArgs {
  @TypeGraphQL.Field(_type => FileUpdateManyMutationInput, {
    nullable: false
  })
  data!: FileUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => FileWhereInput, {
    nullable: true
  })
  where?: FileWhereInput | undefined;
}
