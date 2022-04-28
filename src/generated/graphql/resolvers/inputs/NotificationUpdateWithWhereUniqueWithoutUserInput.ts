import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationUpdateWithoutUserInput } from "../inputs/NotificationUpdateWithoutUserInput";
import { NotificationWhereUniqueInput } from "../inputs/NotificationWhereUniqueInput";

@TypeGraphQL.InputType("NotificationUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class NotificationUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => NotificationWhereUniqueInput, {
    nullable: false
  })
  where!: NotificationWhereUniqueInput;

  @TypeGraphQL.Field(_type => NotificationUpdateWithoutUserInput, {
    nullable: false
  })
  data!: NotificationUpdateWithoutUserInput;
}
