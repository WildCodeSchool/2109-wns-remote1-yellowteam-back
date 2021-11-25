import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Project } from "./Project";
import { User } from "./User";
import { Status_Invitation } from "../enums/Status_Invitation";

@TypeGraphQL.ObjectType("Invitation", {
  isAbstract: true
})
export class Invitation {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Status_Invitation, {
    nullable: false
  })
  status!: "PENDING" | "ACCEPTED" | "REJECTED";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  project?: Project;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  projectId!: string;

  user?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;
}
