import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileCreateManyUserInputEnvelope } from "./FileCreateManyUserInputEnvelope";
import { FileCreateOrConnectWithoutUserInput } from "./FileCreateOrConnectWithoutUserInput";
import { FileCreateWithoutUserInput } from "./FileCreateWithoutUserInput";
import { FileScalarWhereInput } from "./FileScalarWhereInput";
import { FileUpdateManyWithWhereWithoutUserInput } from "./FileUpdateManyWithWhereWithoutUserInput";
import { FileUpdateWithWhereUniqueWithoutUserInput } from "./FileUpdateWithWhereUniqueWithoutUserInput";
import { FileUpsertWithWhereUniqueWithoutUserInput } from "./FileUpsertWithWhereUniqueWithoutUserInput";
import { FileWhereUniqueInput } from "./FileWhereUniqueInput";

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
