import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FileCreateManyInput } from "../../../inputs/FileCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyFileArgs {
  @TypeGraphQL.Field(_type => [FileCreateManyInput], {
    nullable: false
  })
  data!: FileCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
