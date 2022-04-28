import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileCreateManyProjectInputEnvelope } from "../inputs/FileCreateManyProjectInputEnvelope";
import { FileCreateOrConnectWithoutProjectInput } from "../inputs/FileCreateOrConnectWithoutProjectInput";
import { FileCreateWithoutProjectInput } from "../inputs/FileCreateWithoutProjectInput";
import { FileScalarWhereInput } from "../inputs/FileScalarWhereInput";
import { FileUpdateManyWithWhereWithoutProjectInput } from "../inputs/FileUpdateManyWithWhereWithoutProjectInput";
import { FileUpdateWithWhereUniqueWithoutProjectInput } from "../inputs/FileUpdateWithWhereUniqueWithoutProjectInput";
import { FileUpsertWithWhereUniqueWithoutProjectInput } from "../inputs/FileUpsertWithWhereUniqueWithoutProjectInput";
import { FileWhereUniqueInput } from "../inputs/FileWhereUniqueInput";

@TypeGraphQL.InputType("FileUpdateManyWithoutProjectInput", {
  isAbstract: true
})
export class FileUpdateManyWithoutProjectInput {
  @TypeGraphQL.Field(_type => [FileCreateWithoutProjectInput], {
    nullable: true
  })
  create?: FileCreateWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [FileCreateOrConnectWithoutProjectInput], {
    nullable: true
  })
  connectOrCreate?: FileCreateOrConnectWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [FileUpsertWithWhereUniqueWithoutProjectInput], {
    nullable: true
  })
  upsert?: FileUpsertWithWhereUniqueWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => FileCreateManyProjectInputEnvelope, {
    nullable: true
  })
  createMany?: FileCreateManyProjectInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [FileUpdateWithWhereUniqueWithoutProjectInput], {
    nullable: true
  })
  update?: FileUpdateWithWhereUniqueWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [FileUpdateManyWithWhereWithoutProjectInput], {
    nullable: true
  })
  updateMany?: FileUpdateManyWithWhereWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [FileScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FileScalarWhereInput[] | undefined;
}
