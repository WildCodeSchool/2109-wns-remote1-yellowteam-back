import * as TypeGraphQL from "type-graphql";

export enum Status {
  IN_PROGRESS = "IN_PROGRESS",
  NOT_STARTED = "NOT_STARTED",
  FIHISHED = "FIHISHED"
}
TypeGraphQL.registerEnumType(Status, {
  name: "Status",
  description: undefined,
});
