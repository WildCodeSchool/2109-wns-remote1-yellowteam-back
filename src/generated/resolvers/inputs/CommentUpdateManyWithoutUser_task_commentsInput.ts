import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyUser_task_commentsInputEnvelope } from "./CommentCreateManyUser_task_commentsInputEnvelope";
import { CommentCreateOrConnectWithoutUser_task_commentsInput } from "./CommentCreateOrConnectWithoutUser_task_commentsInput";
import { CommentCreateWithoutUser_task_commentsInput } from "./CommentCreateWithoutUser_task_commentsInput";
import { CommentScalarWhereInput } from "./CommentScalarWhereInput";
import { CommentUpdateManyWithWhereWithoutUser_task_commentsInput } from "./CommentUpdateManyWithWhereWithoutUser_task_commentsInput";
import { CommentUpdateWithWhereUniqueWithoutUser_task_commentsInput } from "./CommentUpdateWithWhereUniqueWithoutUser_task_commentsInput";
import { CommentUpsertWithWhereUniqueWithoutUser_task_commentsInput } from "./CommentUpsertWithWhereUniqueWithoutUser_task_commentsInput";
import { CommentWhereUniqueInput } from "./CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpdateManyWithoutUser_task_commentsInput", {
  isAbstract: true
})
export class CommentUpdateManyWithoutUser_task_commentsInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutUser_task_commentsInput], {
    nullable: true
  })
  create?: CommentCreateWithoutUser_task_commentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutUser_task_commentsInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutUser_task_commentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpsertWithWhereUniqueWithoutUser_task_commentsInput], {
    nullable: true
  })
  upsert?: CommentUpsertWithWhereUniqueWithoutUser_task_commentsInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentCreateManyUser_task_commentsInputEnvelope, {
    nullable: true
  })
  createMany?: CommentCreateManyUser_task_commentsInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [CommentUpdateWithWhereUniqueWithoutUser_task_commentsInput], {
    nullable: true
  })
  update?: CommentUpdateWithWhereUniqueWithoutUser_task_commentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpdateManyWithWhereWithoutUser_task_commentsInput], {
    nullable: true
  })
  updateMany?: CommentUpdateManyWithWhereWithoutUser_task_commentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CommentScalarWhereInput[] | undefined;
}
