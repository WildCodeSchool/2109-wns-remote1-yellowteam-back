import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileCreateManyUserInputEnvelope } from "../inputs/FileCreateManyUserInputEnvelope";
import { FileCreateOrConnectWithoutUserInput } from "../inputs/FileCreateOrConnectWithoutUserInput";
import { FileCreateWithoutUserInput } from "../inputs/FileCreateWithoutUserInput";
import { FileScalarWhereInput } from "../inputs/FileScalarWhereInput";
import { FileUpdateManyWithWhereWithoutUserInput } from "../inputs/FileUpdateManyWithWhereWithoutUserInput";
import { FileUpdateWithWhereUniqueWithoutUserInput } from "../inputs/FileUpdateWithWhereUniqueWithoutUserInput";
import { FileUpsertWithWhereUniqueWithoutUserInput } from "../inputs/FileUpsertWithWhereUniqueWithoutUserInput";
import { FileWhereUniqueInput } from "../inputs/FileWhereUniqueInput";

@TypeGraphQL.InputType("FileUpdateManyWithoutUserInput", {
  isAbstract: true
})
export class FileUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [FileCreateWithoutUserInput], {
    nullable: true
  })
  create?: FileCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FileCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: FileCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FileUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: FileUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => FileCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: FileCreateManyUserInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [FileUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: FileUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FileUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: FileUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FileScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FileScalarWhereInput[] | undefined;
}
