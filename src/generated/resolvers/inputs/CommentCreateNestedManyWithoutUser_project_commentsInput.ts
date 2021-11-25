import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyUser_project_commentsInputEnvelope } from "./CommentCreateManyUser_project_commentsInputEnvelope";
import { CommentCreateOrConnectWithoutUser_project_commentsInput } from "./CommentCreateOrConnectWithoutUser_project_commentsInput";
import { CommentCreateWithoutUser_project_commentsInput } from "./CommentCreateWithoutUser_project_commentsInput";
import { CommentWhereUniqueInput } from "./CommentWhereUniqueInput";

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
