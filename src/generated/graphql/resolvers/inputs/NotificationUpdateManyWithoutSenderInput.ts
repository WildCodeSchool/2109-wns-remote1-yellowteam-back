import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationCreateManySenderInputEnvelope } from "../inputs/NotificationCreateManySenderInputEnvelope";
import { NotificationCreateOrConnectWithoutSenderInput } from "../inputs/NotificationCreateOrConnectWithoutSenderInput";
import { NotificationCreateWithoutSenderInput } from "../inputs/NotificationCreateWithoutSenderInput";
import { NotificationScalarWhereInput } from "../inputs/NotificationScalarWhereInput";
import { NotificationUpdateManyWithWhereWithoutSenderInput } from "../inputs/NotificationUpdateManyWithWhereWithoutSenderInput";
import { NotificationUpdateWithWhereUniqueWithoutSenderInput } from "../inputs/NotificationUpdateWithWhereUniqueWithoutSenderInput";
import { NotificationUpsertWithWhereUniqueWithoutSenderInput } from "../inputs/NotificationUpsertWithWhereUniqueWithoutSenderInput";
import { NotificationWhereUniqueInput } from "../inputs/NotificationWhereUniqueInput";

@TypeGraphQL.InputType("NotificationUpdateManyWithoutSenderInput", {
  isAbstract: true
})
export class NotificationUpdateManyWithoutSenderInput {
  @TypeGraphQL.Field(_type => [NotificationCreateWithoutSenderInput], {
    nullable: true
  })
  create?: NotificationCreateWithoutSenderInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationCreateOrConnectWithoutSenderInput], {
    nullable: true
  })
  connectOrCreate?: NotificationCreateOrConnectWithoutSenderInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationUpsertWithWhereUniqueWithoutSenderInput], {
    nullable: true
  })
  upsert?: NotificationUpsertWithWhereUniqueWithoutSenderInput[] | undefined;

  @TypeGraphQL.Field(_type => NotificationCreateManySenderInputEnvelope, {
    nullable: true
  })
  createMany?: NotificationCreateManySenderInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [NotificationWhereUniqueInput], {
    nullable: true
  })
  set?: NotificationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: NotificationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationWhereUniqueInput], {
    nullable: true
  })
  delete?: NotificationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationWhereUniqueInput], {
    nullable: true
  })
  connect?: NotificationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationUpdateWithWhereUniqueWithoutSenderInput], {
    nullable: true
  })
  update?: NotificationUpdateWithWhereUniqueWithoutSenderInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationUpdateManyWithWhereWithoutSenderInput], {
    nullable: true
  })
  updateMany?: NotificationUpdateManyWithWhereWithoutSenderInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: NotificationScalarWhereInput[] | undefined;
}
