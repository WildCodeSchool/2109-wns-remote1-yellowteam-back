import {
  Comment,
  File,
  Invitation,
  Notification,
  Project,
  Role,
  Task,
} from '@prisma/client';
import * as TypeGraphQL from 'type-graphql';

@TypeGraphQL.ObjectType({
  isAbstract: true,
})
export class User {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @TypeGraphQL.Field((_Type) => TypeGraphQL.Int, {
    nullable: false,
  })
  id!: number;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @TypeGraphQL.Field((_Type) => String, {
    nullable: false,
  })
  first_name!: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @TypeGraphQL.Field((_Type) => String, {
    nullable: false,
  })
  last_name!: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @TypeGraphQL.Field((_Type) => String, {
    nullable: false,
  })
  email!: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @TypeGraphQL.Field((_Type) => String, {
    nullable: false,
  })
  //   ! à conserver ? displayname!: string;
  password?: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @TypeGraphQL.Field((_Type) => Boolean, {
    nullable: false,
  })
  is_disabled!: boolean;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @TypeGraphQL.Field((_Type) => String, {
    nullable: false,
  })
  avatar!: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @TypeGraphQL.Field((_Type) => String, {
    nullable: false,
  })
  role!: Role[];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @TypeGraphQL.Field((_Type) => String, {
    nullable: true,
  })
  projects?: Project[];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @TypeGraphQL.Field((_Type) => String, {
    nullable: true,
  })
  task?: Task[];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @TypeGraphQL.Field((_Type) => String, {
    nullable: true,
  })
  files?: File[];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @TypeGraphQL.Field((_Type) => String, {
    nullable: true,
  })
  task_comments?: Comment[];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @TypeGraphQL.Field((_Type) => String, {
    nullable: true,
  })
  project_comments?: Comment[];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @TypeGraphQL.Field((_Type) => String, {
    nullable: true,
  })
  invitations?: Invitation[];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @TypeGraphQL.Field((_Type) => String, {
    nullable: true,
  })
  notifications?: Notification[];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @TypeGraphQL.Field((_Type) => String, {
    nullable: true,
  })
  owned_projects?: Project[];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @TypeGraphQL.Field((_Type) => String, {
    nullable: true,
  })
  notifications_sent?: Notification[];
}
