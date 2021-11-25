import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InvitationCreateManyUserInputEnvelope } from "./InvitationCreateManyUserInputEnvelope";
import { InvitationCreateOrConnectWithoutUserInput } from "./InvitationCreateOrConnectWithoutUserInput";
import { InvitationCreateWithoutUserInput } from "./InvitationCreateWithoutUserInput";
import { InvitationWhereUniqueInput } from "./InvitationWhereUniqueInput";

@TypeGraphQL.InputType("InvitationCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class InvitationCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [InvitationCreateWithoutUserInput], {
    nullable: true
  })
  create?: InvitationCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [InvitationCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: InvitationCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => InvitationCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: InvitationCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [InvitationWhereUniqueInput], {
    nullable: true
  })
  connect?: InvitationWhereUniqueInput[] | undefined;
}
