import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { Status_Notification } from "../../enums/Status_Notification";
import { Type_Notification } from "../../enums/Type_Notification";

@TypeGraphQL.ObjectType("NotificationMaxAggregate", {
  isAbstract: true
})
export class NotificationMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  is_disabled!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  user_id!: string | null;

  @TypeGraphQL.Field(_type => Type_Notification, {
    nullable: true
  })
  type!: "PROJECT" | "TASK" | null;

  @TypeGraphQL.Field(_type => Status_Notification, {
    nullable: true
  })
  status!: "READ" | "UNREAD" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  reference_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sender_id!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at!: Date | null;
}
