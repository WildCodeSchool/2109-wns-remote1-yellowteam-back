import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyUser_project_commentsInputEnvelope } from "./CommentCreateManyUser_project_commentsInputEnvelope";
import { CommentCreateOrConnectWithoutUser_project_commentsInput } from "./CommentCreateOrConnectWithoutUser_project_commentsInput";
import { CommentCreateWithoutUser_project_commentsInput } from "./CommentCreateWithoutUser_project_commentsInput";
import { CommentScalarWhereInput } from "./CommentScalarWhereInput";
import { CommentUpdateManyWithWhereWithoutUser_project_commentsInput } from "./CommentUpdateManyWithWhereWithoutUser_project_commentsInput";
import { CommentUpdateWithWhereUniqueWithoutUser_project_commentsInput } from "./CommentUpdateWithWhereUniqueWithoutUser_project_commentsInput";
import { CommentUpsertWithWhereUniqueWithoutUser_project_commentsInput } from "./CommentUpsertWithWhereUniqueWithoutUser_project_commentsInput";
import { CommentWhereUniqueInput } from "./CommentWhereUniqueInput";

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
