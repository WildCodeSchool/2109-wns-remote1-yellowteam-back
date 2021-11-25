import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyProjectInputEnvelope } from "../inputs/CommentCreateManyProjectInputEnvelope";
import { CommentCreateOrConnectWithoutProjectInput } from "../inputs/CommentCreateOrConnectWithoutProjectInput";
import { CommentCreateWithoutProjectInput } from "../inputs/CommentCreateWithoutProjectInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

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
