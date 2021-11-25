import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationCreateWithoutUserInput } from "./NotificationCreateWithoutUserInput";
import { NotificationUpdateWithoutUserInput } from "./NotificationUpdateWithoutUserInput";
import { NotificationWhereUniqueInput } from "./NotificationWhereUniqueInput";

@TypeGraphQL.InputType("NotificationUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class NotificationUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => NotificationWhereUniqueInput, {
    nullable: false
  })
  where!: NotificationWhereUniqueInput;

  @TypeGraphQL.Field(_type => NotificationUpdateWithoutUserInput, {
    nullable: false
  })
  update!: NotificationUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => NotificationCreateWithoutUserInput, {
    nullable: false
  })
  create!: NotificationCreateWithoutUserInput;
}
