import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InvitationCreateManyUserInputEnvelope } from "./InvitationCreateManyUserInputEnvelope";
import { InvitationCreateOrConnectWithoutUserInput } from "./InvitationCreateOrConnectWithoutUserInput";
import { InvitationCreateWithoutUserInput } from "./InvitationCreateWithoutUserInput";
import { InvitationScalarWhereInput } from "./InvitationScalarWhereInput";
import { InvitationUpdateManyWithWhereWithoutUserInput } from "./InvitationUpdateManyWithWhereWithoutUserInput";
import { InvitationUpdateWithWhereUniqueWithoutUserInput } from "./InvitationUpdateWithWhereUniqueWithoutUserInput";
import { InvitationUpsertWithWhereUniqueWithoutUserInput } from "./InvitationUpsertWithWhereUniqueWithoutUserInput";
import { InvitationWhereUniqueInput } from "./InvitationWhereUniqueInput";

@TypeGraphQL.InputType("InvitationUpdateManyWithoutUserInput", {
  isAbstract: true
})
export class InvitationUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [InvitationCreateWithoutUserInput], {
    nullable: true
  })
  create?: InvitationCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [InvitationCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: InvitationCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [InvitationUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: InvitationUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => InvitationCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: InvitationCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [InvitationWhereUniqueInput], {
    nullable: true
  })
  set?: InvitationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [InvitationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: InvitationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [InvitationWhereUniqueInput], {
    nullable: true
  })
  delete?: InvitationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [InvitationWhereUniqueInput], {
    nullable: true
  })
  connect?: InvitationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [InvitationUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: InvitationUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [InvitationUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: InvitationUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [InvitationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: InvitationScalarWhereInput[] | undefined;
}
