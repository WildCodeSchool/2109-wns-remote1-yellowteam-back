import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyProjectInput } from "../inputs/CommentCreateManyProjectInput";

@TypeGraphQL.InputType("CommentCreateManyProjectInputEnvelope", {
  isAbstract: true
})
export class CommentCreateManyProjectInputEnvelope {
  @TypeGraphQL.Field(_type => [CommentCreateManyProjectInput], {
    nullable: false
  })
  data!: CommentCreateManyProjectInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
