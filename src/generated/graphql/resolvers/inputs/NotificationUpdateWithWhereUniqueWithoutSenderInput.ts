import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationUpdateWithoutSenderInput } from "../inputs/NotificationUpdateWithoutSenderInput";
import { NotificationWhereUniqueInput } from "../inputs/NotificationWhereUniqueInput";

@TypeGraphQL.InputType("NotificationUpdateWithWhereUniqueWithoutSenderInput", {
  isAbstract: true
})
export class NotificationUpdateWithWhereUniqueWithoutSenderInput {
  @TypeGraphQL.Field(_type => NotificationWhereUniqueInput, {
    nullable: false
  })
  where!: NotificationWhereUniqueInput;

  @TypeGraphQL.Field(_type => NotificationUpdateWithoutSenderInput, {
    nullable: false
  })
  data!: NotificationUpdateWithoutSenderInput;
}
