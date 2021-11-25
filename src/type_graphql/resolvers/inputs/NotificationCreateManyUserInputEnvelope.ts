import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationCreateManyUserInput } from "../inputs/NotificationCreateManyUserInput";

@TypeGraphQL.InputType("NotificationCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class NotificationCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [NotificationCreateManyUserInput], {
    nullable: false
  })
  data!: NotificationCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
