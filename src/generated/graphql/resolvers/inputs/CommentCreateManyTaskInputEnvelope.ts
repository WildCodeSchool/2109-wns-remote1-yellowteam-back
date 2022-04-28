import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyTaskInput } from "../inputs/CommentCreateManyTaskInput";

@TypeGraphQL.InputType("CommentCreateManyTaskInputEnvelope", {
  isAbstract: true
})
export class CommentCreateManyTaskInputEnvelope {
  @TypeGraphQL.Field(_type => [CommentCreateManyTaskInput], {
    nullable: false
  })
  data!: CommentCreateManyTaskInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
