import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommentOrderByWithAggregationInput } from "../../../inputs/CommentOrderByWithAggregationInput";
import { CommentScalarWhereWithAggregatesInput } from "../../../inputs/CommentScalarWhereWithAggregatesInput";
import { CommentWhereInput } from "../../../inputs/CommentWhereInput";
import { CommentScalarFieldEnum } from "../../../../enums/CommentScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCommentArgs {
  @TypeGraphQL.Field(_type => CommentWhereInput, {
    nullable: true
  })
  where?: CommentWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CommentOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: CommentOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "is_disabled" | "content" | "user_id" | "project_id" | "task_id" | "userId" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => CommentScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CommentScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
