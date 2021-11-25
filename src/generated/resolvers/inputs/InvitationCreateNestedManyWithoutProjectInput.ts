import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InvitationCreateManyProjectInputEnvelope } from "./InvitationCreateManyProjectInputEnvelope";
import { InvitationCreateOrConnectWithoutProjectInput } from "./InvitationCreateOrConnectWithoutProjectInput";
import { InvitationCreateWithoutProjectInput } from "./InvitationCreateWithoutProjectInput";
import { InvitationWhereUniqueInput } from "./InvitationWhereUniqueInput";

@TypeGraphQL.InputType("InvitationCreateNestedManyWithoutProjectInput", {
  isAbstract: true
})
export class InvitationCreateNestedManyWithoutProjectInput {
  @TypeGraphQL.Field(_type => [InvitationCreateWithoutProjectInput], {
    nullable: true
  })
  create?: InvitationCreateWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [InvitationCreateOrConnectWithoutProjectInput], {
    nullable: true
  })
  connectOrCreate?: InvitationCreateOrConnectWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => InvitationCreateManyProjectInputEnvelope, {
    nullable: true
  })
  createMany?: InvitationCreateManyProjectInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [InvitationWhereUniqueInput], {
    nullable: true
  })
  connect?: InvitationWhereUniqueInput[] | undefined;
}
