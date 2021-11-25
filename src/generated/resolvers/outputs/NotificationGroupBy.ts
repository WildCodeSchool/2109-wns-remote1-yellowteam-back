import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationCountAggregate } from "./NotificationCountAggregate";
import { NotificationMaxAggregate } from "./NotificationMaxAggregate";
import { NotificationMinAggregate } from "./NotificationMinAggregate";
import { Status_Notification } from "../../enums/Status_Notification";
import { Type_Notification } from "../../enums/Type_Notification";

@TypeGraphQL.ObjectType("NotificationGroupBy", {
  isAbstract: true
})
export class NotificationGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  is_disabled!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  content!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => Type_Notification, {
    nullable: false
  })
  type!: "PROJECT" | "TASK";

  @TypeGraphQL.Field(_type => Status_Notification, {
    nullable: false
  })
  status!: "READ" | "UNREAD";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  reference_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  senderId!: string;

  @TypeGraphQL.Field(_type => NotificationCountAggregate, {
    nullable: true
  })
  _count!: NotificationCountAggregate | null;

  @TypeGraphQL.Field(_type => NotificationMinAggregate, {
    nullable: true
  })
  _min!: NotificationMinAggregate | null;

  @TypeGraphQL.Field(_type => NotificationMaxAggregate, {
    nullable: true
  })
  _max!: NotificationMaxAggregate | null;
}
