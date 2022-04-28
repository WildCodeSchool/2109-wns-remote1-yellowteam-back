import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyUser_project_commentsInputEnvelope } from "../inputs/CommentCreateManyUser_project_commentsInputEnvelope";
import { CommentCreateOrConnectWithoutUser_project_commentsInput } from "../inputs/CommentCreateOrConnectWithoutUser_project_commentsInput";
import { CommentCreateWithoutUser_project_commentsInput } from "../inputs/CommentCreateWithoutUser_project_commentsInput";
import { CommentScalarWhereInput } from "../inputs/CommentScalarWhereInput";
import { CommentUpdateManyWithWhereWithoutUser_project_commentsInput } from "../inputs/CommentUpdateManyWithWhereWithoutUser_project_commentsInput";
import { CommentUpdateWithWhereUniqueWithoutUser_project_commentsInput } from "../inputs/CommentUpdateWithWhereUniqueWithoutUser_project_commentsInput";
import { CommentUpsertWithWhereUniqueWithoutUser_project_commentsInput } from "../inputs/CommentUpsertWithWhereUniqueWithoutUser_project_commentsInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpdateManyWithoutUser_project_commentsInput", {
  isAbstract: true
})
export class CommentUpdateManyWithoutUser_project_commentsInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutUser_project_commentsInput], {
    nullable: true
  })
  create?: CommentCreateWithoutUser_project_commentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutUser_project_commentsInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutUser_project_commentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpsertWithWhereUniqueWithoutUser_project_commentsInput], {
    nullable: true
  })
  upsert?: CommentUpsertWithWhereUniqueWithoutUser_project_commentsInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentCreateManyUser_project_commentsInputEnvelope, {
    nullable: true
  })
  createMany?: CommentCreateManyUser_project_commentsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  set?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  delete?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpdateWithWhereUniqueWithoutUser_project_commentsInput], {
    nullable: true
  })
  update?: CommentUpdateWithWhereUniqueWithoutUser_project_commentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpdateManyWithWhereWithoutUser_project_commentsInput], {
    nullable: true
  })
  updateMany?: CommentUpdateManyWithWhereWithoutUser_project_commentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CommentScalarWhereInput[] | undefined;
}
