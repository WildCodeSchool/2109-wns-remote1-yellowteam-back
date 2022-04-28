import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileCreateManyUserInputEnvelope } from "../inputs/FileCreateManyUserInputEnvelope";
import { FileCreateOrConnectWithoutUserInput } from "../inputs/FileCreateOrConnectWithoutUserInput";
import { FileCreateWithoutUserInput } from "../inputs/FileCreateWithoutUserInput";
import { FileWhereUniqueInput } from "../inputs/FileWhereUniqueInput";

@TypeGraphQL.InputType("FileCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class FileCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [FileCreateWithoutUserInput], {
    nullable: true
  })
  create?: FileCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FileCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: FileCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => FileCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: FileCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FileWhereUniqueInput], {
    nullable: true
  })
  connect?: FileWhereUniqueInput[] | undefined;
}
