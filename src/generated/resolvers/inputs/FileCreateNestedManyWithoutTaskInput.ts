import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileCreateManyTaskInputEnvelope } from "./FileCreateManyTaskInputEnvelope";
import { FileCreateOrConnectWithoutTaskInput } from "./FileCreateOrConnectWithoutTaskInput";
import { FileCreateWithoutTaskInput } from "./FileCreateWithoutTaskInput";
import { FileWhereUniqueInput } from "./FileWhereUniqueInput";

@TypeGraphQL.InputType("FileCreateNestedManyWithoutTaskInput", {
  isAbstract: true
})
export class FileCreateNestedManyWithoutTaskInput {
  @TypeGraphQL.Field(_type => [FileCreateWithoutTaskInput], {
    nullable: true
  })
  create?: FileCreateWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => [FileCreateOrConnectWithoutTaskInput], {
    nullable: true
  })
  connectOrCreate?: FileCreateOrConnectWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => FileCreateManyTaskInputEnvelope, {
    nullable: true
  })
  createMany?: FileCreateManyTaskInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FileWhereUniqueInput], {
    nullable: true
  })
  connect?: FileWhereUniqueInput[] | undefined;
}
