import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationCreateManyUserInputEnvelope } from "./NotificationCreateManyUserInputEnvelope";
import { NotificationCreateOrConnectWithoutUserInput } from "./NotificationCreateOrConnectWithoutUserInput";
import { NotificationCreateWithoutUserInput } from "./NotificationCreateWithoutUserInput";
import { NotificationScalarWhereInput } from "./NotificationScalarWhereInput";
import { NotificationUpdateManyWithWhereWithoutUserInput } from "./NotificationUpdateManyWithWhereWithoutUserInput";
import { NotificationUpdateWithWhereUniqueWithoutUserInput } from "./NotificationUpdateWithWhereUniqueWithoutUserInput";
import { NotificationUpsertWithWhereUniqueWithoutUserInput } from "./NotificationUpsertWithWhereUniqueWithoutUserInput";
import { NotificationWhereUniqueInput } from "./NotificationWhereUniqueInput";

@TypeGraphQL.InputType("NotificationUpdateManyWithoutUserInput", {
  isAbstract: true
})
export class NotificationUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [NotificationCreateWithoutUserInput], {
    nullable: true
  })
  create?: NotificationCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: NotificationCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => NotificationCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: NotificationCreateManyUserInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [NotificationUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: NotificationUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: NotificationUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: NotificationScalarWhereInput[] | undefined;
}
