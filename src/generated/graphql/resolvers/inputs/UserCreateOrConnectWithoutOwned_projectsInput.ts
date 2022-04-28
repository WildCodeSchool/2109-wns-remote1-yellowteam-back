import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutOwned_projectsInput } from "../inputs/UserCreateWithoutOwned_projectsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutOwned_projectsInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutOwned_projectsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutOwned_projectsInput, {
    nullable: false
  })
  create!: UserCreateWithoutOwned_projectsInput;
}
