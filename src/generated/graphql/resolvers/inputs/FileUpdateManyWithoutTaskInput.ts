import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileCreateManyTaskInputEnvelope } from "../inputs/FileCreateManyTaskInputEnvelope";
import { FileCreateOrConnectWithoutTaskInput } from "../inputs/FileCreateOrConnectWithoutTaskInput";
import { FileCreateWithoutTaskInput } from "../inputs/FileCreateWithoutTaskInput";
import { FileScalarWhereInput } from "../inputs/FileScalarWhereInput";
import { FileUpdateManyWithWhereWithoutTaskInput } from "../inputs/FileUpdateManyWithWhereWithoutTaskInput";
import { FileUpdateWithWhereUniqueWithoutTaskInput } from "../inputs/FileUpdateWithWhereUniqueWithoutTaskInput";
import { FileUpsertWithWhereUniqueWithoutTaskInput } from "../inputs/FileUpsertWithWhereUniqueWithoutTaskInput";
import { FileWhereUniqueInput } from "../inputs/FileWhereUniqueInput";

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
