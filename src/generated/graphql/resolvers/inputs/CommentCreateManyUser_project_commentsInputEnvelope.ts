import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyUser_project_commentsInput } from "../inputs/CommentCreateManyUser_project_commentsInput";

@TypeGraphQL.InputType("CommentCreateManyUser_project_commentsInputEnvelope", {
  isAbstract: true
})
export class CommentCreateManyUser_project_commentsInputEnvelope {
  @TypeGraphQL.Field(_type => [CommentCreateManyUser_project_commentsInput], {
    nullable: false
  })
  data!: CommentCreateManyUser_project_commentsInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
