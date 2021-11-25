import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyProjectInputEnvelope } from "./CommentCreateManyProjectInputEnvelope";
import { CommentCreateOrConnectWithoutProjectInput } from "./CommentCreateOrConnectWithoutProjectInput";
import { CommentCreateWithoutProjectInput } from "./CommentCreateWithoutProjectInput";
import { CommentWhereUniqueInput } from "./CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentCreateNestedManyWithoutProjectInput", {
  isAbstract: true
})
export class CommentCreateNestedManyWithoutProjectInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutProjectInput], {
    nullable: true
  })
  create?: CommentCreateWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutProjectInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentCreateManyProjectInputEnvelope, {
    nullable: true
  })
  createMany?: CommentCreateManyProjectInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentWhereUniqueInput[] | undefined;
}
