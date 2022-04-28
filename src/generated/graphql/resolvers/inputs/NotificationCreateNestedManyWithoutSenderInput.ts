import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationCreateManySenderInputEnvelope } from "../inputs/NotificationCreateManySenderInputEnvelope";
import { NotificationCreateOrConnectWithoutSenderInput } from "../inputs/NotificationCreateOrConnectWithoutSenderInput";
import { NotificationCreateWithoutSenderInput } from "../inputs/NotificationCreateWithoutSenderInput";
import { NotificationWhereUniqueInput } from "../inputs/NotificationWhereUniqueInput";

@TypeGraphQL.InputType("NotificationCreateNestedManyWithoutSenderInput", {
  isAbstract: true
})
export class NotificationCreateNestedManyWithoutSenderInput {
  @TypeGraphQL.Field(_type => [NotificationCreateWithoutSenderInput], {
    nullable: true
  })
  create?: NotificationCreateWithoutSenderInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationCreateOrConnectWithoutSenderInput], {
    nullable: true
  })
  connectOrCreate?: NotificationCreateOrConnectWithoutSenderInput[] | undefined;

  @TypeGraphQL.Field(_type => NotificationCreateManySenderInputEnvelope, {
    nullable: true
  })
  createMany?: NotificationCreateManySenderInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [NotificationWhereUniqueInput], {
    nullable: true
  })
  connect?: NotificationWhereUniqueInput[] | undefined;
}
