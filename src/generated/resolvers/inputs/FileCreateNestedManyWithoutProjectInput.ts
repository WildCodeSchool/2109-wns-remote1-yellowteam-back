import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileCreateManyProjectInputEnvelope } from "./FileCreateManyProjectInputEnvelope";
import { FileCreateOrConnectWithoutProjectInput } from "./FileCreateOrConnectWithoutProjectInput";
import { FileCreateWithoutProjectInput } from "./FileCreateWithoutProjectInput";
import { FileWhereUniqueInput } from "./FileWhereUniqueInput";

@TypeGraphQL.InputType("FileCreateNestedManyWithoutProjectInput", {
  isAbstract: true
})
export class FileCreateNestedManyWithoutProjectInput {
  @TypeGraphQL.Field(_type => [FileCreateWithoutProjectInput], {
    nullable: true
  })
  create?: FileCreateWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [FileCreateOrConnectWithoutProjectInput], {
    nullable: true
  })
  connectOrCreate?: FileCreateOrConnectWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => FileCreateManyProjectInputEnvelope, {
    nullable: true
  })
  createMany?: FileCreateManyProjectInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FileWhereUniqueInput], {
    nullable: true
  })
  connect?: FileWhereUniqueInput[] | undefined;
}
