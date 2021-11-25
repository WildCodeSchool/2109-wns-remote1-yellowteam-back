import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileCreateManyTaskInputEnvelope } from "./FileCreateManyTaskInputEnvelope";
import { FileCreateOrConnectWithoutTaskInput } from "./FileCreateOrConnectWithoutTaskInput";
import { FileCreateWithoutTaskInput } from "./FileCreateWithoutTaskInput";
import { FileScalarWhereInput } from "./FileScalarWhereInput";
import { FileUpdateManyWithWhereWithoutTaskInput } from "./FileUpdateManyWithWhereWithoutTaskInput";
import { FileUpdateWithWhereUniqueWithoutTaskInput } from "./FileUpdateWithWhereUniqueWithoutTaskInput";
import { FileUpsertWithWhereUniqueWithoutTaskInput } from "./FileUpsertWithWhereUniqueWithoutTaskInput";
import { FileWhereUniqueInput } from "./FileWhereUniqueInput";

@TypeGraphQL.InputType("FileUpdateManyWithoutTaskInput", {
  isAbstract: true
})
export class FileUpdateManyWithoutTaskInput {
  @TypeGraphQL.Field(_type => [FileCreateWithoutTaskInput], {
    nullable: true
  })
  create?: FileCreateWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => [FileCreateOrConnectWithoutTaskInput], {
    nullable: true
  })
  connectOrCreate?: FileCreateOrConnectWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => [FileUpsertWithWhereUniqueWithoutTaskInput], {
    nullable: true
  })
  upsert?: FileUpsertWithWhereUniqueWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => FileCreateManyTaskInputEnvelope, {
    nullable: true
  })
  createMany?: FileCreateManyTaskInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FileWhereUniqueInput], {
    nullable: true
  })
  set?: FileWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FileWhereUniqueInput], {
    nullable: true
  })
  disconnect?: FileWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FileWhereUniqueInput], {
    nullable: true
  })
  delete?: FileWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FileWhereUniqueInput], {
    nullable: true
  })
  connect?: FileWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FileUpdateWithWhereUniqueWithoutTaskInput], {
    nullable: true
  })
  update?: FileUpdateWithWhereUniqueWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => [FileUpdateManyWithWhereWithoutTaskInput], {
    nullable: true
  })
  updateMany?: FileUpdateManyWithWhereWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => [FileScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FileScalarWhereInput[] | undefined;
}
