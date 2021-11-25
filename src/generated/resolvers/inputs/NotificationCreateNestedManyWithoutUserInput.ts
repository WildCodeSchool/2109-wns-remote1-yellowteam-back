import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationCreateManyUserInputEnvelope } from "./NotificationCreateManyUserInputEnvelope";
import { NotificationCreateOrConnectWithoutUserInput } from "./NotificationCreateOrConnectWithoutUserInput";
import { NotificationCreateWithoutUserInput } from "./NotificationCreateWithoutUserInput";
import { NotificationWhereUniqueInput } from "./NotificationWhereUniqueInput";

@TypeGraphQL.InputType("NotificationCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class NotificationCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [NotificationCreateWithoutUserInput], {
    nullable: true
  })
  create?: NotificationCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: NotificationCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => NotificationCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: NotificationCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [NotificationWhereUniqueInput], {
    nullable: true
  })
  connect?: NotificationWhereUniqueInput[] | undefined;
}
