import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationCreateManyUserInputEnvelope } from "../inputs/NotificationCreateManyUserInputEnvelope";
import { NotificationCreateOrConnectWithoutUserInput } from "../inputs/NotificationCreateOrConnectWithoutUserInput";
import { NotificationCreateWithoutUserInput } from "../inputs/NotificationCreateWithoutUserInput";
import { NotificationScalarWhereInput } from "../inputs/NotificationScalarWhereInput";
import { NotificationUpdateManyWithWhereWithoutUserInput } from "../inputs/NotificationUpdateManyWithWhereWithoutUserInput";
import { NotificationUpdateWithWhereUniqueWithoutUserInput } from "../inputs/NotificationUpdateWithWhereUniqueWithoutUserInput";
import { NotificationUpsertWithWhereUniqueWithoutUserInput } from "../inputs/NotificationUpsertWithWhereUniqueWithoutUserInput";
import { NotificationWhereUniqueInput } from "../inputs/NotificationWhereUniqueInput";

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
