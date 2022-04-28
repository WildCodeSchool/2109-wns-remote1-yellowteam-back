import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { Status_Invitation } from "../../enums/Status_Invitation";

@TypeGraphQL.ObjectType("InvitationMinAggregate", {
  isAbstract: true
})
export class InvitationMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => Status_Invitation, {
    nullable: true
  })
  status!: "PENDING" | "ACCEPTED" | "REJECTED" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  project_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  user_id!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at!: Date | null;
}
