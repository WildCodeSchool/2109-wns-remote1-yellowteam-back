import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationCreateWithoutSenderInput } from "../inputs/NotificationCreateWithoutSenderInput";
import { NotificationUpdateWithoutSenderInput } from "../inputs/NotificationUpdateWithoutSenderInput";
import { NotificationWhereUniqueInput } from "../inputs/NotificationWhereUniqueInput";

@TypeGraphQL.InputType("NotificationUpsertWithWhereUniqueWithoutSenderInput", {
  isAbstract: true
})
export class NotificationUpsertWithWhereUniqueWithoutSenderInput {
  @TypeGraphQL.Field(_type => NotificationWhereUniqueInput, {
    nullable: false
  })
  where!: NotificationWhereUniqueInput;

  @TypeGraphQL.Field(_type => NotificationUpdateWithoutSenderInput, {
    nullable: false
  })
  update!: NotificationUpdateWithoutSenderInput;

  @TypeGraphQL.Field(_type => NotificationCreateWithoutSenderInput, {
    nullable: false
  })
  create!: NotificationCreateWithoutSenderInput;
}
