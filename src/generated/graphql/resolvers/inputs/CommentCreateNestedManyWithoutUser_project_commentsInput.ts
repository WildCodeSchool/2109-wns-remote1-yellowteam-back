import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyUser_project_commentsInputEnvelope } from "../inputs/CommentCreateManyUser_project_commentsInputEnvelope";
import { CommentCreateOrConnectWithoutUser_project_commentsInput } from "../inputs/CommentCreateOrConnectWithoutUser_project_commentsInput";
import { CommentCreateWithoutUser_project_commentsInput } from "../inputs/CommentCreateWithoutUser_project_commentsInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentCreateNestedManyWithoutUser_project_commentsInput", {
  isAbstract: true
})
export class CommentCreateNestedManyWithoutUser_project_commentsInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutUser_project_commentsInput], {
    nullable: true
  })
  create?: CommentCreateWithoutUser_project_commentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutUser_project_commentsInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutUser_project_commentsInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentCreateManyUser_project_commentsInputEnvelope, {
    nullable: true
  })
  createMany?: CommentCreateManyUser_project_commentsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentWhereUniqueInput[] | undefined;
}
