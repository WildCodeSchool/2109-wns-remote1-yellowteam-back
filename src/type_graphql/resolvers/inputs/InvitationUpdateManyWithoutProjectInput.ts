import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InvitationCreateManyProjectInputEnvelope } from "../inputs/InvitationCreateManyProjectInputEnvelope";
import { InvitationCreateOrConnectWithoutProjectInput } from "../inputs/InvitationCreateOrConnectWithoutProjectInput";
import { InvitationCreateWithoutProjectInput } from "../inputs/InvitationCreateWithoutProjectInput";
import { InvitationScalarWhereInput } from "../inputs/InvitationScalarWhereInput";
import { InvitationUpdateManyWithWhereWithoutProjectInput } from "../inputs/InvitationUpdateManyWithWhereWithoutProjectInput";
import { InvitationUpdateWithWhereUniqueWithoutProjectInput } from "../inputs/InvitationUpdateWithWhereUniqueWithoutProjectInput";
import { InvitationUpsertWithWhereUniqueWithoutProjectInput } from "../inputs/InvitationUpsertWithWhereUniqueWithoutProjectInput";
import { InvitationWhereUniqueInput } from "../inputs/InvitationWhereUniqueInput";

@TypeGraphQL.InputType("InvitationUpdateManyWithoutProjectInput", {
  isAbstract: true
})
export class InvitationUpdateManyWithoutProjectInput {
  @TypeGraphQL.Field(_type => [InvitationCreateWithoutProjectInput], {
    nullable: true
  })
  create?: InvitationCreateWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [InvitationCreateOrConnectWithoutProjectInput], {
    nullable: true
  })
  connectOrCreate?: InvitationCreateOrConnectWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [InvitationUpsertWithWhereUniqueWithoutProjectInput], {
    nullable: true
  })
  upsert?: InvitationUpsertWithWhereUniqueWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => InvitationCreateManyProjectInputEnvelope, {
    nullable: true
  })
  createMany?: InvitationCreateManyProjectInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [InvitationUpdateWithWhereUniqueWithoutProjectInput], {
    nullable: true
  })
  update?: InvitationUpdateWithWhereUniqueWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [InvitationUpdateManyWithWhereWithoutProjectInput], {
    nullable: true
  })
  updateMany?: InvitationUpdateManyWithWhereWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [InvitationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: InvitationScalarWhereInput[] | undefined;
}
