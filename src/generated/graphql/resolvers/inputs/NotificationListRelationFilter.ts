import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationWhereInput } from "../inputs/NotificationWhereInput";

@TypeGraphQL.InputType("NotificationListRelationFilter", {
  isAbstract: true
})
export class NotificationListRelationFilter {
  @TypeGraphQL.Field(_type => NotificationWhereInput, {
    nullable: true
  })
  every?: NotificationWhereInput | undefined;

  @TypeGraphQL.Field(_type => NotificationWhereInput, {
    nullable: true
  })
  some?: NotificationWhereInput | undefined;

  @TypeGraphQL.Field(_type => NotificationWhereInput, {
    nullable: true
  })
  none?: NotificationWhereInput | undefined;
}
