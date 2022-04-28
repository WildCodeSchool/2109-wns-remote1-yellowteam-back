import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationCreateManySenderInput } from "../inputs/NotificationCreateManySenderInput";

@TypeGraphQL.InputType("NotificationCreateManySenderInputEnvelope", {
  isAbstract: true
})
export class NotificationCreateManySenderInputEnvelope {
  @TypeGraphQL.Field(_type => [NotificationCreateManySenderInput], {
    nullable: false
  })
  data!: NotificationCreateManySenderInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
