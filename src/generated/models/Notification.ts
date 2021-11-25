import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { User } from "./User";
import { Status_Notification } from "../enums/Status_Notification";
import { Type_Notification } from "../enums/Type_Notification";

@TypeGraphQL.ObjectType("Notification", {
  isAbstract: true
})
export class Notification {
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

  user?: User;

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
}
