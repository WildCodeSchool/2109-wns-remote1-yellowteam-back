import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationScalarWhereInput } from "../inputs/NotificationScalarWhereInput";
import { NotificationUpdateManyMutationInput } from "../inputs/NotificationUpdateManyMutationInput";

@TypeGraphQL.InputType("NotificationUpdateManyWithWhereWithoutSenderInput", {
  isAbstract: true
})
export class NotificationUpdateManyWithWhereWithoutSenderInput {
  @TypeGraphQL.Field(_type => NotificationScalarWhereInput, {
    nullable: false
  })
  where!: NotificationScalarWhereInput;

  @TypeGraphQL.Field(_type => NotificationUpdateManyMutationInput, {
    nullable: false
  })
  data!: NotificationUpdateManyMutationInput;
}
