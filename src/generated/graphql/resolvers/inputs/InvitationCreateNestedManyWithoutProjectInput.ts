import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { InvitationCreateManyProjectInputEnvelope } from "../inputs/InvitationCreateManyProjectInputEnvelope";
import { InvitationCreateOrConnectWithoutProjectInput } from "../inputs/InvitationCreateOrConnectWithoutProjectInput";
import { InvitationCreateWithoutProjectInput } from "../inputs/InvitationCreateWithoutProjectInput";
import { InvitationWhereUniqueInput } from "../inputs/InvitationWhereUniqueInput";

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
