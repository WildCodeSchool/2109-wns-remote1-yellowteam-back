import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { User } from "../models/User";

@TypeGraphQL.ObjectType("ResetPassword", {
  isAbstract: true
})
export class ResetPassword {
  id?: string;

  user?: User;

  user_id?: string;

  token?: string;

  created_at?: Date;

  updated_at?: Date;
}
