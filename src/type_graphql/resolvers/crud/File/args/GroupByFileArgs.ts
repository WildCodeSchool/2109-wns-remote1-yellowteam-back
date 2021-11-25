import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FileOrderByWithAggregationInput } from "../../../inputs/FileOrderByWithAggregationInput";
import { FileScalarWhereWithAggregatesInput } from "../../../inputs/FileScalarWhereWithAggregatesInput";
import { FileWhereInput } from "../../../inputs/FileWhereInput";
import { FileScalarFieldEnum } from "../../../../enums/FileScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByFileArgs {
  @TypeGraphQL.Field(_type => FileWhereInput, {
    nullable: true
  })
  where?: FileWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FileOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: FileOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [FileScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "path" | "size" | "type" | "userId" | "projectId" | "taskId" | "is_disabled" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => FileScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: FileScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
