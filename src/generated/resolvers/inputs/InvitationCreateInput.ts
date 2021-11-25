import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateNestedOneWithoutInvitationsInput } from "./ProjectCreateNestedOneWithoutInvitationsInput";
import { UserCreateNestedOneWithoutInvitationsInput } from "./UserCreateNestedOneWithoutInvitationsInput";
import { Status_Invitation } from "../../enums/Status_Invitation";

@TypeGraphQL.InputType("InvitationCreateInput", {
  isAbstract: true
})
export class InvitationCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Status_Invitation, {
    nullable: false
  })
  status!: "PENDING" | "ACCEPTED" | "REJECTED";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => ProjectCreateNestedOneWithoutInvitationsInput, {
    nullable: false
  })
  project!: ProjectCreateNestedOneWithoutInvitationsInput;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutInvitationsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutInvitationsInput;
}
