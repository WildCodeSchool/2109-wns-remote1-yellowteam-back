
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  id: string
  first_name: string
  last_name: string
  email: string
  password: string
  is_disabled: boolean
  avatar: string | null
  role: Role[]
  created_at: Date
  updated_at: Date
}

/**
 * Model Project
 * 
 */
export type Project = {
  id: string
  project_owner_id: string
  title: string
  description: string
  private: boolean
  is_disabled: boolean
  status_project: Status
  total_time_spent: number
  start_date: Date
  end_date: Date
  due_date: Date
  created_at: Date
  updated_at: Date
}

/**
 * Model Task
 * 
 */
export type Task = {
  id: string
  title: string
  description: string
  private: boolean
  is_disabled: boolean
  status_task: Status
  total_time_spent: number
  start_date: Date
  end_date: Date
  user_id: string | null
  project_id: string
  created_at: Date
  updated_at: Date
}

/**
 * Model Comment
 * 
 */
export type Comment = {
  id: string
  is_disabled: boolean
  content: string
  task_comment_user_id: string | null
  project_id: string | null
  task_id: string | null
  project_comment_user_id: string | null
  created_at: Date
  updated_at: Date
}

/**
 * Model File
 * 
 */
export type File = {
  id: string
  name: string
  path: string
  size: number
  type: string
  user_id: string | null
  project_id: string
  task_id: string | null
  is_disabled: boolean
  created_at: Date
  updated_at: Date
}

/**
 * Model Invitation
 * 
 */
export type Invitation = {
  id: string
  status: Status_Invitation
  email: string
  project_id: string
  user_id: string | null
  created_at: Date
  updated_at: Date
}

/**
 * Model Notification
 * 
 */
export type Notification = {
  id: string
  is_disabled: boolean
  title: string
  content: string
  user_id: string | null
  type: Type_Notification
  status: Status_Notification
  reference_id: string
  sender_id: string
  created_at: Date
  updated_at: Date
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const Role: {
  SUPER_ADMIN: 'SUPER_ADMIN',
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER',
  USER: 'USER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Status: {
  IN_PROGRESS: 'IN_PROGRESS',
  NOT_STARTED: 'NOT_STARTED',
  FIHISHED: 'FIHISHED'
};

export type Status = (typeof Status)[keyof typeof Status]


export const Status_Invitation: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED'
};

export type Status_Invitation = (typeof Status_Invitation)[keyof typeof Status_Invitation]


export const Type_Notification: {
  PROJECT: 'PROJECT',
  TASK: 'TASK'
};

export type Type_Notification = (typeof Type_Notification)[keyof typeof Type_Notification]


export const Status_Notification: {
  READ: 'READ',
  UNREAD: 'UNREAD'
};

export type Status_Notification = (typeof Status_Notification)[keyof typeof Status_Notification]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<GlobalReject>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<GlobalReject>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<GlobalReject>;

  /**
   * `prisma.file`: Exposes CRUD operations for the **File** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Files
    * const files = await prisma.file.findMany()
    * ```
    */
  get file(): Prisma.FileDelegate<GlobalReject>;

  /**
   * `prisma.invitation`: Exposes CRUD operations for the **Invitation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invitations
    * const invitations = await prisma.invitation.findMany()
    * ```
    */
  get invitation(): Prisma.InvitationDelegate<GlobalReject>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  /**
   * Prisma Client JS version: 3.11.0
   * Query Engine version: b371888aaf8f51357c7457d836b86d12da91658b
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    Project: 'Project',
    Task: 'Task',
    Comment: 'Comment',
    File: 'File',
    Invitation: 'Invitation',
    Notification: 'Notification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    projects: number
    tasks: number
    files: number
    task_comments: number
    project_comments: number
    invitations: number
    notifications: number
    owned_projects: number
    notifications_sent: number
  }

  export type UserCountOutputTypeSelect = {
    projects?: boolean
    tasks?: boolean
    files?: boolean
    task_comments?: boolean
    project_comments?: boolean
    invitations?: boolean
    notifications?: boolean
    owned_projects?: boolean
    notifications_sent?: boolean
  }

  export type UserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserCountOutputType
    : S extends undefined
    ? never
    : S extends UserCountOutputTypeArgs
    ?'include' extends U
    ? UserCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
    : UserCountOutputType
  : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type ProjectCountOutputType
   */


  export type ProjectCountOutputType = {
    users: number
    tasks: number
    files: number
    comments: number
    invitations: number
  }

  export type ProjectCountOutputTypeSelect = {
    users?: boolean
    tasks?: boolean
    files?: boolean
    comments?: boolean
    invitations?: boolean
  }

  export type ProjectCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ProjectCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ProjectCountOutputType
    : S extends undefined
    ? never
    : S extends ProjectCountOutputTypeArgs
    ?'include' extends U
    ? ProjectCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ProjectCountOutputType ? ProjectCountOutputType[P] : never
  } 
    : ProjectCountOutputType
  : ProjectCountOutputType




  // Custom InputTypes

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     * 
    **/
    select?: ProjectCountOutputTypeSelect | null
  }



  /**
   * Count Type TaskCountOutputType
   */


  export type TaskCountOutputType = {
    files: number
    comments: number
  }

  export type TaskCountOutputTypeSelect = {
    files?: boolean
    comments?: boolean
  }

  export type TaskCountOutputTypeGetPayload<
    S extends boolean | null | undefined | TaskCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? TaskCountOutputType
    : S extends undefined
    ? never
    : S extends TaskCountOutputTypeArgs
    ?'include' extends U
    ? TaskCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof TaskCountOutputType ? TaskCountOutputType[P] : never
  } 
    : TaskCountOutputType
  : TaskCountOutputType




  // Custom InputTypes

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     * 
    **/
    select?: TaskCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    first_name: string | null
    last_name: string | null
    email: string | null
    password: string | null
    is_disabled: boolean | null
    avatar: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    first_name: string | null
    last_name: string | null
    email: string | null
    password: string | null
    is_disabled: boolean | null
    avatar: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    first_name: number
    last_name: number
    email: number
    password: number
    is_disabled: number
    avatar: number
    role: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    is_disabled?: true
    avatar?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    is_disabled?: true
    avatar?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    is_disabled?: true
    avatar?: true
    role?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    first_name: string
    last_name: string
    email: string
    password: string
    is_disabled: boolean
    avatar: string | null
    role: Role[]
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    is_disabled?: boolean
    avatar?: boolean
    role?: boolean
    projects?: boolean | ProjectFindManyArgs
    tasks?: boolean | TaskFindManyArgs
    files?: boolean | FileFindManyArgs
    task_comments?: boolean | CommentFindManyArgs
    project_comments?: boolean | CommentFindManyArgs
    invitations?: boolean | InvitationFindManyArgs
    notifications?: boolean | NotificationFindManyArgs
    owned_projects?: boolean | ProjectFindManyArgs
    notifications_sent?: boolean | NotificationFindManyArgs
    created_at?: boolean
    updated_at?: boolean
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserInclude = {
    projects?: boolean | ProjectFindManyArgs
    tasks?: boolean | TaskFindManyArgs
    files?: boolean | FileFindManyArgs
    task_comments?: boolean | CommentFindManyArgs
    project_comments?: boolean | CommentFindManyArgs
    invitations?: boolean | InvitationFindManyArgs
    notifications?: boolean | NotificationFindManyArgs
    owned_projects?: boolean | ProjectFindManyArgs
    notifications_sent?: boolean | NotificationFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]:
        P extends 'projects' ? Array < ProjectGetPayload<S['include'][P]>>  :
        P extends 'tasks' ? Array < TaskGetPayload<S['include'][P]>>  :
        P extends 'files' ? Array < FileGetPayload<S['include'][P]>>  :
        P extends 'task_comments' ? Array < CommentGetPayload<S['include'][P]>>  :
        P extends 'project_comments' ? Array < CommentGetPayload<S['include'][P]>>  :
        P extends 'invitations' ? Array < InvitationGetPayload<S['include'][P]>>  :
        P extends 'notifications' ? Array < NotificationGetPayload<S['include'][P]>>  :
        P extends 'owned_projects' ? Array < ProjectGetPayload<S['include'][P]>>  :
        P extends 'notifications_sent' ? Array < NotificationGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'projects' ? Array < ProjectGetPayload<S['select'][P]>>  :
        P extends 'tasks' ? Array < TaskGetPayload<S['select'][P]>>  :
        P extends 'files' ? Array < FileGetPayload<S['select'][P]>>  :
        P extends 'task_comments' ? Array < CommentGetPayload<S['select'][P]>>  :
        P extends 'project_comments' ? Array < CommentGetPayload<S['select'][P]>>  :
        P extends 'invitations' ? Array < InvitationGetPayload<S['select'][P]>>  :
        P extends 'notifications' ? Array < NotificationGetPayload<S['select'][P]>>  :
        P extends 'owned_projects' ? Array < ProjectGetPayload<S['select'][P]>>  :
        P extends 'notifications_sent' ? Array < NotificationGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    projects<T extends ProjectFindManyArgs = {}>(args?: Subset<T, ProjectFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Project>>, PrismaPromise<Array<ProjectGetPayload<T>>>>;

    tasks<T extends TaskFindManyArgs = {}>(args?: Subset<T, TaskFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Task>>, PrismaPromise<Array<TaskGetPayload<T>>>>;

    files<T extends FileFindManyArgs = {}>(args?: Subset<T, FileFindManyArgs>): CheckSelect<T, PrismaPromise<Array<File>>, PrismaPromise<Array<FileGetPayload<T>>>>;

    task_comments<T extends CommentFindManyArgs = {}>(args?: Subset<T, CommentFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Comment>>, PrismaPromise<Array<CommentGetPayload<T>>>>;

    project_comments<T extends CommentFindManyArgs = {}>(args?: Subset<T, CommentFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Comment>>, PrismaPromise<Array<CommentGetPayload<T>>>>;

    invitations<T extends InvitationFindManyArgs = {}>(args?: Subset<T, InvitationFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Invitation>>, PrismaPromise<Array<InvitationGetPayload<T>>>>;

    notifications<T extends NotificationFindManyArgs = {}>(args?: Subset<T, NotificationFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Notification>>, PrismaPromise<Array<NotificationGetPayload<T>>>>;

    owned_projects<T extends ProjectFindManyArgs = {}>(args?: Subset<T, ProjectFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Project>>, PrismaPromise<Array<ProjectGetPayload<T>>>>;

    notifications_sent<T extends NotificationFindManyArgs = {}>(args?: Subset<T, NotificationFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Notification>>, PrismaPromise<Array<NotificationGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model Project
   */


  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    total_time_spent: number | null
  }

  export type ProjectSumAggregateOutputType = {
    total_time_spent: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    project_owner_id: string | null
    title: string | null
    description: string | null
    private: boolean | null
    is_disabled: boolean | null
    status_project: Status | null
    total_time_spent: number | null
    start_date: Date | null
    end_date: Date | null
    due_date: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    project_owner_id: string | null
    title: string | null
    description: string | null
    private: boolean | null
    is_disabled: boolean | null
    status_project: Status | null
    total_time_spent: number | null
    start_date: Date | null
    end_date: Date | null
    due_date: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    project_owner_id: number
    title: number
    description: number
    private: number
    is_disabled: number
    status_project: number
    total_time_spent: number
    start_date: number
    end_date: number
    due_date: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    total_time_spent?: true
  }

  export type ProjectSumAggregateInputType = {
    total_time_spent?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    project_owner_id?: true
    title?: true
    description?: true
    private?: true
    is_disabled?: true
    status_project?: true
    total_time_spent?: true
    start_date?: true
    end_date?: true
    due_date?: true
    created_at?: true
    updated_at?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    project_owner_id?: true
    title?: true
    description?: true
    private?: true
    is_disabled?: true
    status_project?: true
    total_time_spent?: true
    start_date?: true
    end_date?: true
    due_date?: true
    created_at?: true
    updated_at?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    project_owner_id?: true
    title?: true
    description?: true
    private?: true
    is_disabled?: true
    status_project?: true
    total_time_spent?: true
    start_date?: true
    end_date?: true
    due_date?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProjectAggregateArgs = {
    /**
     * Filter which Project to aggregate.
     * 
    **/
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     * 
    **/
    orderBy?: Enumerable<ProjectOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs = {
    where?: ProjectWhereInput
    orderBy?: Enumerable<ProjectOrderByWithAggregationInput>
    by: Array<ProjectScalarFieldEnum>
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }


  export type ProjectGroupByOutputType = {
    id: string
    project_owner_id: string
    title: string
    description: string
    private: boolean
    is_disabled: boolean
    status_project: Status
    total_time_spent: number
    start_date: Date
    end_date: Date
    due_date: Date
    created_at: Date
    updated_at: Date
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect = {
    id?: boolean
    users?: boolean | UserFindManyArgs
    owner?: boolean | UserArgs
    project_owner_id?: boolean
    title?: boolean
    description?: boolean
    private?: boolean
    is_disabled?: boolean
    status_project?: boolean
    total_time_spent?: boolean
    start_date?: boolean
    end_date?: boolean
    due_date?: boolean
    tasks?: boolean | TaskFindManyArgs
    files?: boolean | FileFindManyArgs
    comments?: boolean | CommentFindManyArgs
    invitations?: boolean | InvitationFindManyArgs
    created_at?: boolean
    updated_at?: boolean
    _count?: boolean | ProjectCountOutputTypeArgs
  }

  export type ProjectInclude = {
    users?: boolean | UserFindManyArgs
    owner?: boolean | UserArgs
    tasks?: boolean | TaskFindManyArgs
    files?: boolean | FileFindManyArgs
    comments?: boolean | CommentFindManyArgs
    invitations?: boolean | InvitationFindManyArgs
    _count?: boolean | ProjectCountOutputTypeArgs
  }

  export type ProjectGetPayload<
    S extends boolean | null | undefined | ProjectArgs,
    U = keyof S
      > = S extends true
        ? Project
    : S extends undefined
    ? never
    : S extends ProjectArgs | ProjectFindManyArgs
    ?'include' extends U
    ? Project  & {
    [P in TrueKeys<S['include']>]:
        P extends 'users' ? Array < UserGetPayload<S['include'][P]>>  :
        P extends 'owner' ? UserGetPayload<S['include'][P]> :
        P extends 'tasks' ? Array < TaskGetPayload<S['include'][P]>>  :
        P extends 'files' ? Array < FileGetPayload<S['include'][P]>>  :
        P extends 'comments' ? Array < CommentGetPayload<S['include'][P]>>  :
        P extends 'invitations' ? Array < InvitationGetPayload<S['include'][P]>>  :
        P extends '_count' ? ProjectCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'users' ? Array < UserGetPayload<S['select'][P]>>  :
        P extends 'owner' ? UserGetPayload<S['select'][P]> :
        P extends 'tasks' ? Array < TaskGetPayload<S['select'][P]>>  :
        P extends 'files' ? Array < FileGetPayload<S['select'][P]>>  :
        P extends 'comments' ? Array < CommentGetPayload<S['select'][P]>>  :
        P extends 'invitations' ? Array < InvitationGetPayload<S['select'][P]>>  :
        P extends '_count' ? ProjectCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Project ? Project[P] : never
  } 
    : Project
  : Project


  type ProjectCountArgs = Merge<
    Omit<ProjectFindManyArgs, 'select' | 'include'> & {
      select?: ProjectCountAggregateInputType | true
    }
  >

  export interface ProjectDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProjectFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProjectFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Project'> extends True ? CheckSelect<T, Prisma__ProjectClient<Project>, Prisma__ProjectClient<ProjectGetPayload<T>>> : CheckSelect<T, Prisma__ProjectClient<Project | null >, Prisma__ProjectClient<ProjectGetPayload<T> | null >>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProjectFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProjectFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Project'> extends True ? CheckSelect<T, Prisma__ProjectClient<Project>, Prisma__ProjectClient<ProjectGetPayload<T>>> : CheckSelect<T, Prisma__ProjectClient<Project | null >, Prisma__ProjectClient<ProjectGetPayload<T> | null >>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProjectFindManyArgs>(
      args?: SelectSubset<T, ProjectFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Project>>, PrismaPromise<Array<ProjectGetPayload<T>>>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
    **/
    create<T extends ProjectCreateArgs>(
      args: SelectSubset<T, ProjectCreateArgs>
    ): CheckSelect<T, Prisma__ProjectClient<Project>, Prisma__ProjectClient<ProjectGetPayload<T>>>

    /**
     * Create many Projects.
     *     @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     *     @example
     *     // Create many Projects
     *     const project = await prisma.project.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProjectCreateManyArgs>(
      args?: SelectSubset<T, ProjectCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
    **/
    delete<T extends ProjectDeleteArgs>(
      args: SelectSubset<T, ProjectDeleteArgs>
    ): CheckSelect<T, Prisma__ProjectClient<Project>, Prisma__ProjectClient<ProjectGetPayload<T>>>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProjectUpdateArgs>(
      args: SelectSubset<T, ProjectUpdateArgs>
    ): CheckSelect<T, Prisma__ProjectClient<Project>, Prisma__ProjectClient<ProjectGetPayload<T>>>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProjectDeleteManyArgs>(
      args?: SelectSubset<T, ProjectDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProjectUpdateManyArgs>(
      args: SelectSubset<T, ProjectUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
    **/
    upsert<T extends ProjectUpsertArgs>(
      args: SelectSubset<T, ProjectUpsertArgs>
    ): CheckSelect<T, Prisma__ProjectClient<Project>, Prisma__ProjectClient<ProjectGetPayload<T>>>

    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProjectClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    users<T extends UserFindManyArgs = {}>(args?: Subset<T, UserFindManyArgs>): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>;

    owner<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    tasks<T extends TaskFindManyArgs = {}>(args?: Subset<T, TaskFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Task>>, PrismaPromise<Array<TaskGetPayload<T>>>>;

    files<T extends FileFindManyArgs = {}>(args?: Subset<T, FileFindManyArgs>): CheckSelect<T, PrismaPromise<Array<File>>, PrismaPromise<Array<FileGetPayload<T>>>>;

    comments<T extends CommentFindManyArgs = {}>(args?: Subset<T, CommentFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Comment>>, PrismaPromise<Array<CommentGetPayload<T>>>>;

    invitations<T extends InvitationFindManyArgs = {}>(args?: Subset<T, InvitationFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Invitation>>, PrismaPromise<Array<InvitationGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Project
     * 
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectInclude | null
    /**
     * Throw an Error if a Project can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Project to fetch.
     * 
    **/
    where: ProjectWhereUniqueInput
  }


  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Project
     * 
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectInclude | null
    /**
     * Throw an Error if a Project can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Project to fetch.
     * 
    **/
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     * 
    **/
    orderBy?: Enumerable<ProjectOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     * 
    **/
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     * 
    **/
    distinct?: Enumerable<ProjectScalarFieldEnum>
  }


  /**
   * Project findMany
   */
  export type ProjectFindManyArgs = {
    /**
     * Select specific fields to fetch from the Project
     * 
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectInclude | null
    /**
     * Filter, which Projects to fetch.
     * 
    **/
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     * 
    **/
    orderBy?: Enumerable<ProjectOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     * 
    **/
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProjectScalarFieldEnum>
  }


  /**
   * Project create
   */
  export type ProjectCreateArgs = {
    /**
     * Select specific fields to fetch from the Project
     * 
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectInclude | null
    /**
     * The data needed to create a Project.
     * 
    **/
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }


  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs = {
    /**
     * The data used to create many Projects.
     * 
    **/
    data: Enumerable<ProjectCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Project update
   */
  export type ProjectUpdateArgs = {
    /**
     * Select specific fields to fetch from the Project
     * 
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectInclude | null
    /**
     * The data needed to update a Project.
     * 
    **/
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     * 
    **/
    where: ProjectWhereUniqueInput
  }


  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs = {
    /**
     * The data used to update Projects.
     * 
    **/
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     * 
    **/
    where?: ProjectWhereInput
  }


  /**
   * Project upsert
   */
  export type ProjectUpsertArgs = {
    /**
     * Select specific fields to fetch from the Project
     * 
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectInclude | null
    /**
     * The filter to search for the Project to update in case it exists.
     * 
    **/
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     * 
    **/
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }


  /**
   * Project delete
   */
  export type ProjectDeleteArgs = {
    /**
     * Select specific fields to fetch from the Project
     * 
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectInclude | null
    /**
     * Filter which Project to delete.
     * 
    **/
    where: ProjectWhereUniqueInput
  }


  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs = {
    /**
     * Filter which Projects to delete
     * 
    **/
    where?: ProjectWhereInput
  }


  /**
   * Project without action
   */
  export type ProjectArgs = {
    /**
     * Select specific fields to fetch from the Project
     * 
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectInclude | null
  }



  /**
   * Model Task
   */


  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    total_time_spent: number | null
  }

  export type TaskSumAggregateOutputType = {
    total_time_spent: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    private: boolean | null
    is_disabled: boolean | null
    status_task: Status | null
    total_time_spent: number | null
    start_date: Date | null
    end_date: Date | null
    user_id: string | null
    project_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    private: boolean | null
    is_disabled: boolean | null
    status_task: Status | null
    total_time_spent: number | null
    start_date: Date | null
    end_date: Date | null
    user_id: string | null
    project_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    title: number
    description: number
    private: number
    is_disabled: number
    status_task: number
    total_time_spent: number
    start_date: number
    end_date: number
    user_id: number
    project_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    total_time_spent?: true
  }

  export type TaskSumAggregateInputType = {
    total_time_spent?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    private?: true
    is_disabled?: true
    status_task?: true
    total_time_spent?: true
    start_date?: true
    end_date?: true
    user_id?: true
    project_id?: true
    created_at?: true
    updated_at?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    private?: true
    is_disabled?: true
    status_task?: true
    total_time_spent?: true
    start_date?: true
    end_date?: true
    user_id?: true
    project_id?: true
    created_at?: true
    updated_at?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    private?: true
    is_disabled?: true
    status_task?: true
    total_time_spent?: true
    start_date?: true
    end_date?: true
    user_id?: true
    project_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TaskAggregateArgs = {
    /**
     * Filter which Task to aggregate.
     * 
    **/
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     * 
    **/
    orderBy?: Enumerable<TaskOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs = {
    where?: TaskWhereInput
    orderBy?: Enumerable<TaskOrderByWithAggregationInput>
    by: Array<TaskScalarFieldEnum>
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }


  export type TaskGroupByOutputType = {
    id: string
    title: string
    description: string
    private: boolean
    is_disabled: boolean
    status_task: Status
    total_time_spent: number
    start_date: Date
    end_date: Date
    user_id: string | null
    project_id: string
    created_at: Date
    updated_at: Date
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = PrismaPromise<
    Array<
      PickArray<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect = {
    id?: boolean
    title?: boolean
    description?: boolean
    private?: boolean
    is_disabled?: boolean
    status_task?: boolean
    total_time_spent?: boolean
    start_date?: boolean
    end_date?: boolean
    user?: boolean | UserArgs
    user_id?: boolean
    project?: boolean | ProjectArgs
    project_id?: boolean
    files?: boolean | FileFindManyArgs
    comments?: boolean | CommentFindManyArgs
    created_at?: boolean
    updated_at?: boolean
    _count?: boolean | TaskCountOutputTypeArgs
  }

  export type TaskInclude = {
    user?: boolean | UserArgs
    project?: boolean | ProjectArgs
    files?: boolean | FileFindManyArgs
    comments?: boolean | CommentFindManyArgs
    _count?: boolean | TaskCountOutputTypeArgs
  }

  export type TaskGetPayload<
    S extends boolean | null | undefined | TaskArgs,
    U = keyof S
      > = S extends true
        ? Task
    : S extends undefined
    ? never
    : S extends TaskArgs | TaskFindManyArgs
    ?'include' extends U
    ? Task  & {
    [P in TrueKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> | null :
        P extends 'project' ? ProjectGetPayload<S['include'][P]> :
        P extends 'files' ? Array < FileGetPayload<S['include'][P]>>  :
        P extends 'comments' ? Array < CommentGetPayload<S['include'][P]>>  :
        P extends '_count' ? TaskCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> | null :
        P extends 'project' ? ProjectGetPayload<S['select'][P]> :
        P extends 'files' ? Array < FileGetPayload<S['select'][P]>>  :
        P extends 'comments' ? Array < CommentGetPayload<S['select'][P]>>  :
        P extends '_count' ? TaskCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Task ? Task[P] : never
  } 
    : Task
  : Task


  type TaskCountArgs = Merge<
    Omit<TaskFindManyArgs, 'select' | 'include'> & {
      select?: TaskCountAggregateInputType | true
    }
  >

  export interface TaskDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TaskFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TaskFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Task'> extends True ? CheckSelect<T, Prisma__TaskClient<Task>, Prisma__TaskClient<TaskGetPayload<T>>> : CheckSelect<T, Prisma__TaskClient<Task | null >, Prisma__TaskClient<TaskGetPayload<T> | null >>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TaskFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TaskFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Task'> extends True ? CheckSelect<T, Prisma__TaskClient<Task>, Prisma__TaskClient<TaskGetPayload<T>>> : CheckSelect<T, Prisma__TaskClient<Task | null >, Prisma__TaskClient<TaskGetPayload<T> | null >>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TaskFindManyArgs>(
      args?: SelectSubset<T, TaskFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Task>>, PrismaPromise<Array<TaskGetPayload<T>>>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
    **/
    create<T extends TaskCreateArgs>(
      args: SelectSubset<T, TaskCreateArgs>
    ): CheckSelect<T, Prisma__TaskClient<Task>, Prisma__TaskClient<TaskGetPayload<T>>>

    /**
     * Create many Tasks.
     *     @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     *     @example
     *     // Create many Tasks
     *     const task = await prisma.task.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TaskCreateManyArgs>(
      args?: SelectSubset<T, TaskCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
    **/
    delete<T extends TaskDeleteArgs>(
      args: SelectSubset<T, TaskDeleteArgs>
    ): CheckSelect<T, Prisma__TaskClient<Task>, Prisma__TaskClient<TaskGetPayload<T>>>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TaskUpdateArgs>(
      args: SelectSubset<T, TaskUpdateArgs>
    ): CheckSelect<T, Prisma__TaskClient<Task>, Prisma__TaskClient<TaskGetPayload<T>>>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TaskDeleteManyArgs>(
      args?: SelectSubset<T, TaskDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TaskUpdateManyArgs>(
      args: SelectSubset<T, TaskUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
    **/
    upsert<T extends TaskUpsertArgs>(
      args: SelectSubset<T, TaskUpsertArgs>
    ): CheckSelect<T, Prisma__TaskClient<Task>, Prisma__TaskClient<TaskGetPayload<T>>>

    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TaskClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    project<T extends ProjectArgs = {}>(args?: Subset<T, ProjectArgs>): CheckSelect<T, Prisma__ProjectClient<Project | null >, Prisma__ProjectClient<ProjectGetPayload<T> | null >>;

    files<T extends FileFindManyArgs = {}>(args?: Subset<T, FileFindManyArgs>): CheckSelect<T, PrismaPromise<Array<File>>, PrismaPromise<Array<FileGetPayload<T>>>>;

    comments<T extends CommentFindManyArgs = {}>(args?: Subset<T, CommentFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Comment>>, PrismaPromise<Array<CommentGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Task
     * 
    **/
    select?: TaskSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TaskInclude | null
    /**
     * Throw an Error if a Task can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Task to fetch.
     * 
    **/
    where: TaskWhereUniqueInput
  }


  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Task
     * 
    **/
    select?: TaskSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TaskInclude | null
    /**
     * Throw an Error if a Task can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Task to fetch.
     * 
    **/
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     * 
    **/
    orderBy?: Enumerable<TaskOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     * 
    **/
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     * 
    **/
    distinct?: Enumerable<TaskScalarFieldEnum>
  }


  /**
   * Task findMany
   */
  export type TaskFindManyArgs = {
    /**
     * Select specific fields to fetch from the Task
     * 
    **/
    select?: TaskSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TaskInclude | null
    /**
     * Filter, which Tasks to fetch.
     * 
    **/
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     * 
    **/
    orderBy?: Enumerable<TaskOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     * 
    **/
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TaskScalarFieldEnum>
  }


  /**
   * Task create
   */
  export type TaskCreateArgs = {
    /**
     * Select specific fields to fetch from the Task
     * 
    **/
    select?: TaskSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TaskInclude | null
    /**
     * The data needed to create a Task.
     * 
    **/
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }


  /**
   * Task createMany
   */
  export type TaskCreateManyArgs = {
    /**
     * The data used to create many Tasks.
     * 
    **/
    data: Enumerable<TaskCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Task update
   */
  export type TaskUpdateArgs = {
    /**
     * Select specific fields to fetch from the Task
     * 
    **/
    select?: TaskSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TaskInclude | null
    /**
     * The data needed to update a Task.
     * 
    **/
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     * 
    **/
    where: TaskWhereUniqueInput
  }


  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs = {
    /**
     * The data used to update Tasks.
     * 
    **/
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     * 
    **/
    where?: TaskWhereInput
  }


  /**
   * Task upsert
   */
  export type TaskUpsertArgs = {
    /**
     * Select specific fields to fetch from the Task
     * 
    **/
    select?: TaskSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TaskInclude | null
    /**
     * The filter to search for the Task to update in case it exists.
     * 
    **/
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     * 
    **/
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }


  /**
   * Task delete
   */
  export type TaskDeleteArgs = {
    /**
     * Select specific fields to fetch from the Task
     * 
    **/
    select?: TaskSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TaskInclude | null
    /**
     * Filter which Task to delete.
     * 
    **/
    where: TaskWhereUniqueInput
  }


  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs = {
    /**
     * Filter which Tasks to delete
     * 
    **/
    where?: TaskWhereInput
  }


  /**
   * Task without action
   */
  export type TaskArgs = {
    /**
     * Select specific fields to fetch from the Task
     * 
    **/
    select?: TaskSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TaskInclude | null
  }



  /**
   * Model Comment
   */


  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    is_disabled: boolean | null
    content: string | null
    task_comment_user_id: string | null
    project_id: string | null
    task_id: string | null
    project_comment_user_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    is_disabled: boolean | null
    content: string | null
    task_comment_user_id: string | null
    project_id: string | null
    task_id: string | null
    project_comment_user_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    is_disabled: number
    content: number
    task_comment_user_id: number
    project_id: number
    task_id: number
    project_comment_user_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    id?: true
    is_disabled?: true
    content?: true
    task_comment_user_id?: true
    project_id?: true
    task_id?: true
    project_comment_user_id?: true
    created_at?: true
    updated_at?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    is_disabled?: true
    content?: true
    task_comment_user_id?: true
    project_id?: true
    task_id?: true
    project_comment_user_id?: true
    created_at?: true
    updated_at?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    is_disabled?: true
    content?: true
    task_comment_user_id?: true
    project_id?: true
    task_id?: true
    project_comment_user_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CommentAggregateArgs = {
    /**
     * Filter which Comment to aggregate.
     * 
    **/
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     * 
    **/
    orderBy?: Enumerable<CommentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs = {
    where?: CommentWhereInput
    orderBy?: Enumerable<CommentOrderByWithAggregationInput>
    by: Array<CommentScalarFieldEnum>
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }


  export type CommentGroupByOutputType = {
    id: string
    is_disabled: boolean
    content: string
    task_comment_user_id: string | null
    project_id: string | null
    task_id: string | null
    project_comment_user_id: string | null
    created_at: Date
    updated_at: Date
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect = {
    id?: boolean
    is_disabled?: boolean
    content?: boolean
    task_comment_user_id?: boolean
    project?: boolean | ProjectArgs
    project_id?: boolean
    task?: boolean | TaskArgs
    task_id?: boolean
    user_task_comments?: boolean | UserArgs
    user_project_comments?: boolean | UserArgs
    project_comment_user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type CommentInclude = {
    project?: boolean | ProjectArgs
    task?: boolean | TaskArgs
    user_task_comments?: boolean | UserArgs
    user_project_comments?: boolean | UserArgs
  }

  export type CommentGetPayload<
    S extends boolean | null | undefined | CommentArgs,
    U = keyof S
      > = S extends true
        ? Comment
    : S extends undefined
    ? never
    : S extends CommentArgs | CommentFindManyArgs
    ?'include' extends U
    ? Comment  & {
    [P in TrueKeys<S['include']>]:
        P extends 'project' ? ProjectGetPayload<S['include'][P]> | null :
        P extends 'task' ? TaskGetPayload<S['include'][P]> | null :
        P extends 'user_task_comments' ? UserGetPayload<S['include'][P]> | null :
        P extends 'user_project_comments' ? UserGetPayload<S['include'][P]> | null :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'project' ? ProjectGetPayload<S['select'][P]> | null :
        P extends 'task' ? TaskGetPayload<S['select'][P]> | null :
        P extends 'user_task_comments' ? UserGetPayload<S['select'][P]> | null :
        P extends 'user_project_comments' ? UserGetPayload<S['select'][P]> | null :  P extends keyof Comment ? Comment[P] : never
  } 
    : Comment
  : Comment


  type CommentCountArgs = Merge<
    Omit<CommentFindManyArgs, 'select' | 'include'> & {
      select?: CommentCountAggregateInputType | true
    }
  >

  export interface CommentDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CommentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CommentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Comment'> extends True ? CheckSelect<T, Prisma__CommentClient<Comment>, Prisma__CommentClient<CommentGetPayload<T>>> : CheckSelect<T, Prisma__CommentClient<Comment | null >, Prisma__CommentClient<CommentGetPayload<T> | null >>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CommentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CommentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Comment'> extends True ? CheckSelect<T, Prisma__CommentClient<Comment>, Prisma__CommentClient<CommentGetPayload<T>>> : CheckSelect<T, Prisma__CommentClient<Comment | null >, Prisma__CommentClient<CommentGetPayload<T> | null >>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CommentFindManyArgs>(
      args?: SelectSubset<T, CommentFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Comment>>, PrismaPromise<Array<CommentGetPayload<T>>>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
    **/
    create<T extends CommentCreateArgs>(
      args: SelectSubset<T, CommentCreateArgs>
    ): CheckSelect<T, Prisma__CommentClient<Comment>, Prisma__CommentClient<CommentGetPayload<T>>>

    /**
     * Create many Comments.
     *     @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     *     @example
     *     // Create many Comments
     *     const comment = await prisma.comment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CommentCreateManyArgs>(
      args?: SelectSubset<T, CommentCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
    **/
    delete<T extends CommentDeleteArgs>(
      args: SelectSubset<T, CommentDeleteArgs>
    ): CheckSelect<T, Prisma__CommentClient<Comment>, Prisma__CommentClient<CommentGetPayload<T>>>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CommentUpdateArgs>(
      args: SelectSubset<T, CommentUpdateArgs>
    ): CheckSelect<T, Prisma__CommentClient<Comment>, Prisma__CommentClient<CommentGetPayload<T>>>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CommentDeleteManyArgs>(
      args?: SelectSubset<T, CommentDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CommentUpdateManyArgs>(
      args: SelectSubset<T, CommentUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
    **/
    upsert<T extends CommentUpsertArgs>(
      args: SelectSubset<T, CommentUpsertArgs>
    ): CheckSelect<T, Prisma__CommentClient<Comment>, Prisma__CommentClient<CommentGetPayload<T>>>

    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CommentClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    project<T extends ProjectArgs = {}>(args?: Subset<T, ProjectArgs>): CheckSelect<T, Prisma__ProjectClient<Project | null >, Prisma__ProjectClient<ProjectGetPayload<T> | null >>;

    task<T extends TaskArgs = {}>(args?: Subset<T, TaskArgs>): CheckSelect<T, Prisma__TaskClient<Task | null >, Prisma__TaskClient<TaskGetPayload<T> | null >>;

    user_task_comments<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    user_project_comments<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * Throw an Error if a Comment can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Comment to fetch.
     * 
    **/
    where: CommentWhereUniqueInput
  }


  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * Throw an Error if a Comment can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Comment to fetch.
     * 
    **/
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     * 
    **/
    orderBy?: Enumerable<CommentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     * 
    **/
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     * 
    **/
    distinct?: Enumerable<CommentScalarFieldEnum>
  }


  /**
   * Comment findMany
   */
  export type CommentFindManyArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * Filter, which Comments to fetch.
     * 
    **/
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     * 
    **/
    orderBy?: Enumerable<CommentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     * 
    **/
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CommentScalarFieldEnum>
  }


  /**
   * Comment create
   */
  export type CommentCreateArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * The data needed to create a Comment.
     * 
    **/
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }


  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs = {
    /**
     * The data used to create many Comments.
     * 
    **/
    data: Enumerable<CommentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Comment update
   */
  export type CommentUpdateArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * The data needed to update a Comment.
     * 
    **/
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     * 
    **/
    where: CommentWhereUniqueInput
  }


  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs = {
    /**
     * The data used to update Comments.
     * 
    **/
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     * 
    **/
    where?: CommentWhereInput
  }


  /**
   * Comment upsert
   */
  export type CommentUpsertArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * The filter to search for the Comment to update in case it exists.
     * 
    **/
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     * 
    **/
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }


  /**
   * Comment delete
   */
  export type CommentDeleteArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * Filter which Comment to delete.
     * 
    **/
    where: CommentWhereUniqueInput
  }


  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs = {
    /**
     * Filter which Comments to delete
     * 
    **/
    where?: CommentWhereInput
  }


  /**
   * Comment without action
   */
  export type CommentArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
  }



  /**
   * Model File
   */


  export type AggregateFile = {
    _count: FileCountAggregateOutputType | null
    _avg: FileAvgAggregateOutputType | null
    _sum: FileSumAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  export type FileAvgAggregateOutputType = {
    size: number | null
  }

  export type FileSumAggregateOutputType = {
    size: number | null
  }

  export type FileMinAggregateOutputType = {
    id: string | null
    name: string | null
    path: string | null
    size: number | null
    type: string | null
    user_id: string | null
    project_id: string | null
    task_id: string | null
    is_disabled: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type FileMaxAggregateOutputType = {
    id: string | null
    name: string | null
    path: string | null
    size: number | null
    type: string | null
    user_id: string | null
    project_id: string | null
    task_id: string | null
    is_disabled: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type FileCountAggregateOutputType = {
    id: number
    name: number
    path: number
    size: number
    type: number
    user_id: number
    project_id: number
    task_id: number
    is_disabled: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type FileAvgAggregateInputType = {
    size?: true
  }

  export type FileSumAggregateInputType = {
    size?: true
  }

  export type FileMinAggregateInputType = {
    id?: true
    name?: true
    path?: true
    size?: true
    type?: true
    user_id?: true
    project_id?: true
    task_id?: true
    is_disabled?: true
    created_at?: true
    updated_at?: true
  }

  export type FileMaxAggregateInputType = {
    id?: true
    name?: true
    path?: true
    size?: true
    type?: true
    user_id?: true
    project_id?: true
    task_id?: true
    is_disabled?: true
    created_at?: true
    updated_at?: true
  }

  export type FileCountAggregateInputType = {
    id?: true
    name?: true
    path?: true
    size?: true
    type?: true
    user_id?: true
    project_id?: true
    task_id?: true
    is_disabled?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type FileAggregateArgs = {
    /**
     * Filter which File to aggregate.
     * 
    **/
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     * 
    **/
    orderBy?: Enumerable<FileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Files
    **/
    _count?: true | FileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileMaxAggregateInputType
  }

  export type GetFileAggregateType<T extends FileAggregateArgs> = {
        [P in keyof T & keyof AggregateFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFile[P]>
      : GetScalarType<T[P], AggregateFile[P]>
  }




  export type FileGroupByArgs = {
    where?: FileWhereInput
    orderBy?: Enumerable<FileOrderByWithAggregationInput>
    by: Array<FileScalarFieldEnum>
    having?: FileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileCountAggregateInputType | true
    _avg?: FileAvgAggregateInputType
    _sum?: FileSumAggregateInputType
    _min?: FileMinAggregateInputType
    _max?: FileMaxAggregateInputType
  }


  export type FileGroupByOutputType = {
    id: string
    name: string
    path: string
    size: number
    type: string
    user_id: string | null
    project_id: string
    task_id: string | null
    is_disabled: boolean
    created_at: Date
    updated_at: Date
    _count: FileCountAggregateOutputType | null
    _avg: FileAvgAggregateOutputType | null
    _sum: FileSumAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  type GetFileGroupByPayload<T extends FileGroupByArgs> = PrismaPromise<
    Array<
      PickArray<FileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileGroupByOutputType[P]>
            : GetScalarType<T[P], FileGroupByOutputType[P]>
        }
      >
    >


  export type FileSelect = {
    id?: boolean
    name?: boolean
    path?: boolean
    size?: boolean
    type?: boolean
    user?: boolean | UserArgs
    user_id?: boolean
    project?: boolean | ProjectArgs
    project_id?: boolean
    task?: boolean | TaskArgs
    task_id?: boolean
    is_disabled?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type FileInclude = {
    user?: boolean | UserArgs
    project?: boolean | ProjectArgs
    task?: boolean | TaskArgs
  }

  export type FileGetPayload<
    S extends boolean | null | undefined | FileArgs,
    U = keyof S
      > = S extends true
        ? File
    : S extends undefined
    ? never
    : S extends FileArgs | FileFindManyArgs
    ?'include' extends U
    ? File  & {
    [P in TrueKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> | null :
        P extends 'project' ? ProjectGetPayload<S['include'][P]> :
        P extends 'task' ? TaskGetPayload<S['include'][P]> | null :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> | null :
        P extends 'project' ? ProjectGetPayload<S['select'][P]> :
        P extends 'task' ? TaskGetPayload<S['select'][P]> | null :  P extends keyof File ? File[P] : never
  } 
    : File
  : File


  type FileCountArgs = Merge<
    Omit<FileFindManyArgs, 'select' | 'include'> & {
      select?: FileCountAggregateInputType | true
    }
  >

  export interface FileDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one File that matches the filter.
     * @param {FileFindUniqueArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FileFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FileFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'File'> extends True ? CheckSelect<T, Prisma__FileClient<File>, Prisma__FileClient<FileGetPayload<T>>> : CheckSelect<T, Prisma__FileClient<File | null >, Prisma__FileClient<FileGetPayload<T> | null >>

    /**
     * Find the first File that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FileFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FileFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'File'> extends True ? CheckSelect<T, Prisma__FileClient<File>, Prisma__FileClient<FileGetPayload<T>>> : CheckSelect<T, Prisma__FileClient<File | null >, Prisma__FileClient<FileGetPayload<T> | null >>

    /**
     * Find zero or more Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Files
     * const files = await prisma.file.findMany()
     * 
     * // Get first 10 Files
     * const files = await prisma.file.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fileWithIdOnly = await prisma.file.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FileFindManyArgs>(
      args?: SelectSubset<T, FileFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<File>>, PrismaPromise<Array<FileGetPayload<T>>>>

    /**
     * Create a File.
     * @param {FileCreateArgs} args - Arguments to create a File.
     * @example
     * // Create one File
     * const File = await prisma.file.create({
     *   data: {
     *     // ... data to create a File
     *   }
     * })
     * 
    **/
    create<T extends FileCreateArgs>(
      args: SelectSubset<T, FileCreateArgs>
    ): CheckSelect<T, Prisma__FileClient<File>, Prisma__FileClient<FileGetPayload<T>>>

    /**
     * Create many Files.
     *     @param {FileCreateManyArgs} args - Arguments to create many Files.
     *     @example
     *     // Create many Files
     *     const file = await prisma.file.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FileCreateManyArgs>(
      args?: SelectSubset<T, FileCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a File.
     * @param {FileDeleteArgs} args - Arguments to delete one File.
     * @example
     * // Delete one File
     * const File = await prisma.file.delete({
     *   where: {
     *     // ... filter to delete one File
     *   }
     * })
     * 
    **/
    delete<T extends FileDeleteArgs>(
      args: SelectSubset<T, FileDeleteArgs>
    ): CheckSelect<T, Prisma__FileClient<File>, Prisma__FileClient<FileGetPayload<T>>>

    /**
     * Update one File.
     * @param {FileUpdateArgs} args - Arguments to update one File.
     * @example
     * // Update one File
     * const file = await prisma.file.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FileUpdateArgs>(
      args: SelectSubset<T, FileUpdateArgs>
    ): CheckSelect<T, Prisma__FileClient<File>, Prisma__FileClient<FileGetPayload<T>>>

    /**
     * Delete zero or more Files.
     * @param {FileDeleteManyArgs} args - Arguments to filter Files to delete.
     * @example
     * // Delete a few Files
     * const { count } = await prisma.file.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FileDeleteManyArgs>(
      args?: SelectSubset<T, FileDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Files
     * const file = await prisma.file.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FileUpdateManyArgs>(
      args: SelectSubset<T, FileUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one File.
     * @param {FileUpsertArgs} args - Arguments to update or create a File.
     * @example
     * // Update or create a File
     * const file = await prisma.file.upsert({
     *   create: {
     *     // ... data to create a File
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the File we want to update
     *   }
     * })
    **/
    upsert<T extends FileUpsertArgs>(
      args: SelectSubset<T, FileUpsertArgs>
    ): CheckSelect<T, Prisma__FileClient<File>, Prisma__FileClient<FileGetPayload<T>>>

    /**
     * Count the number of Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileCountArgs} args - Arguments to filter Files to count.
     * @example
     * // Count the number of Files
     * const count = await prisma.file.count({
     *   where: {
     *     // ... the filter for the Files we want to count
     *   }
     * })
    **/
    count<T extends FileCountArgs>(
      args?: Subset<T, FileCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FileAggregateArgs>(args: Subset<T, FileAggregateArgs>): PrismaPromise<GetFileAggregateType<T>>

    /**
     * Group by File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileGroupByArgs['orderBy'] }
        : { orderBy?: FileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for File.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FileClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    project<T extends ProjectArgs = {}>(args?: Subset<T, ProjectArgs>): CheckSelect<T, Prisma__ProjectClient<Project | null >, Prisma__ProjectClient<ProjectGetPayload<T> | null >>;

    task<T extends TaskArgs = {}>(args?: Subset<T, TaskArgs>): CheckSelect<T, Prisma__TaskClient<Task | null >, Prisma__TaskClient<TaskGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * File findUnique
   */
  export type FileFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the File
     * 
    **/
    select?: FileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FileInclude | null
    /**
     * Throw an Error if a File can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which File to fetch.
     * 
    **/
    where: FileWhereUniqueInput
  }


  /**
   * File findFirst
   */
  export type FileFindFirstArgs = {
    /**
     * Select specific fields to fetch from the File
     * 
    **/
    select?: FileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FileInclude | null
    /**
     * Throw an Error if a File can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which File to fetch.
     * 
    **/
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     * 
    **/
    orderBy?: Enumerable<FileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     * 
    **/
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     * 
    **/
    distinct?: Enumerable<FileScalarFieldEnum>
  }


  /**
   * File findMany
   */
  export type FileFindManyArgs = {
    /**
     * Select specific fields to fetch from the File
     * 
    **/
    select?: FileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FileInclude | null
    /**
     * Filter, which Files to fetch.
     * 
    **/
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     * 
    **/
    orderBy?: Enumerable<FileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Files.
     * 
    **/
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     * 
    **/
    skip?: number
    distinct?: Enumerable<FileScalarFieldEnum>
  }


  /**
   * File create
   */
  export type FileCreateArgs = {
    /**
     * Select specific fields to fetch from the File
     * 
    **/
    select?: FileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FileInclude | null
    /**
     * The data needed to create a File.
     * 
    **/
    data: XOR<FileCreateInput, FileUncheckedCreateInput>
  }


  /**
   * File createMany
   */
  export type FileCreateManyArgs = {
    /**
     * The data used to create many Files.
     * 
    **/
    data: Enumerable<FileCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * File update
   */
  export type FileUpdateArgs = {
    /**
     * Select specific fields to fetch from the File
     * 
    **/
    select?: FileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FileInclude | null
    /**
     * The data needed to update a File.
     * 
    **/
    data: XOR<FileUpdateInput, FileUncheckedUpdateInput>
    /**
     * Choose, which File to update.
     * 
    **/
    where: FileWhereUniqueInput
  }


  /**
   * File updateMany
   */
  export type FileUpdateManyArgs = {
    /**
     * The data used to update Files.
     * 
    **/
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyInput>
    /**
     * Filter which Files to update
     * 
    **/
    where?: FileWhereInput
  }


  /**
   * File upsert
   */
  export type FileUpsertArgs = {
    /**
     * Select specific fields to fetch from the File
     * 
    **/
    select?: FileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FileInclude | null
    /**
     * The filter to search for the File to update in case it exists.
     * 
    **/
    where: FileWhereUniqueInput
    /**
     * In case the File found by the `where` argument doesn't exist, create a new File with this data.
     * 
    **/
    create: XOR<FileCreateInput, FileUncheckedCreateInput>
    /**
     * In case the File was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<FileUpdateInput, FileUncheckedUpdateInput>
  }


  /**
   * File delete
   */
  export type FileDeleteArgs = {
    /**
     * Select specific fields to fetch from the File
     * 
    **/
    select?: FileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FileInclude | null
    /**
     * Filter which File to delete.
     * 
    **/
    where: FileWhereUniqueInput
  }


  /**
   * File deleteMany
   */
  export type FileDeleteManyArgs = {
    /**
     * Filter which Files to delete
     * 
    **/
    where?: FileWhereInput
  }


  /**
   * File without action
   */
  export type FileArgs = {
    /**
     * Select specific fields to fetch from the File
     * 
    **/
    select?: FileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FileInclude | null
  }



  /**
   * Model Invitation
   */


  export type AggregateInvitation = {
    _count: InvitationCountAggregateOutputType | null
    _min: InvitationMinAggregateOutputType | null
    _max: InvitationMaxAggregateOutputType | null
  }

  export type InvitationMinAggregateOutputType = {
    id: string | null
    status: Status_Invitation | null
    email: string | null
    project_id: string | null
    user_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type InvitationMaxAggregateOutputType = {
    id: string | null
    status: Status_Invitation | null
    email: string | null
    project_id: string | null
    user_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type InvitationCountAggregateOutputType = {
    id: number
    status: number
    email: number
    project_id: number
    user_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type InvitationMinAggregateInputType = {
    id?: true
    status?: true
    email?: true
    project_id?: true
    user_id?: true
    created_at?: true
    updated_at?: true
  }

  export type InvitationMaxAggregateInputType = {
    id?: true
    status?: true
    email?: true
    project_id?: true
    user_id?: true
    created_at?: true
    updated_at?: true
  }

  export type InvitationCountAggregateInputType = {
    id?: true
    status?: true
    email?: true
    project_id?: true
    user_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type InvitationAggregateArgs = {
    /**
     * Filter which Invitation to aggregate.
     * 
    **/
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     * 
    **/
    orderBy?: Enumerable<InvitationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invitations
    **/
    _count?: true | InvitationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvitationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvitationMaxAggregateInputType
  }

  export type GetInvitationAggregateType<T extends InvitationAggregateArgs> = {
        [P in keyof T & keyof AggregateInvitation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvitation[P]>
      : GetScalarType<T[P], AggregateInvitation[P]>
  }




  export type InvitationGroupByArgs = {
    where?: InvitationWhereInput
    orderBy?: Enumerable<InvitationOrderByWithAggregationInput>
    by: Array<InvitationScalarFieldEnum>
    having?: InvitationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvitationCountAggregateInputType | true
    _min?: InvitationMinAggregateInputType
    _max?: InvitationMaxAggregateInputType
  }


  export type InvitationGroupByOutputType = {
    id: string
    status: Status_Invitation
    email: string
    project_id: string
    user_id: string | null
    created_at: Date
    updated_at: Date
    _count: InvitationCountAggregateOutputType | null
    _min: InvitationMinAggregateOutputType | null
    _max: InvitationMaxAggregateOutputType | null
  }

  type GetInvitationGroupByPayload<T extends InvitationGroupByArgs> = PrismaPromise<
    Array<
      PickArray<InvitationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvitationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvitationGroupByOutputType[P]>
            : GetScalarType<T[P], InvitationGroupByOutputType[P]>
        }
      >
    >


  export type InvitationSelect = {
    id?: boolean
    status?: boolean
    email?: boolean
    project?: boolean | ProjectArgs
    project_id?: boolean
    user?: boolean | UserArgs
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type InvitationInclude = {
    project?: boolean | ProjectArgs
    user?: boolean | UserArgs
  }

  export type InvitationGetPayload<
    S extends boolean | null | undefined | InvitationArgs,
    U = keyof S
      > = S extends true
        ? Invitation
    : S extends undefined
    ? never
    : S extends InvitationArgs | InvitationFindManyArgs
    ?'include' extends U
    ? Invitation  & {
    [P in TrueKeys<S['include']>]:
        P extends 'project' ? ProjectGetPayload<S['include'][P]> :
        P extends 'user' ? UserGetPayload<S['include'][P]> | null :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'project' ? ProjectGetPayload<S['select'][P]> :
        P extends 'user' ? UserGetPayload<S['select'][P]> | null :  P extends keyof Invitation ? Invitation[P] : never
  } 
    : Invitation
  : Invitation


  type InvitationCountArgs = Merge<
    Omit<InvitationFindManyArgs, 'select' | 'include'> & {
      select?: InvitationCountAggregateInputType | true
    }
  >

  export interface InvitationDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Invitation that matches the filter.
     * @param {InvitationFindUniqueArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends InvitationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, InvitationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Invitation'> extends True ? CheckSelect<T, Prisma__InvitationClient<Invitation>, Prisma__InvitationClient<InvitationGetPayload<T>>> : CheckSelect<T, Prisma__InvitationClient<Invitation | null >, Prisma__InvitationClient<InvitationGetPayload<T> | null >>

    /**
     * Find the first Invitation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationFindFirstArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends InvitationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, InvitationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Invitation'> extends True ? CheckSelect<T, Prisma__InvitationClient<Invitation>, Prisma__InvitationClient<InvitationGetPayload<T>>> : CheckSelect<T, Prisma__InvitationClient<Invitation | null >, Prisma__InvitationClient<InvitationGetPayload<T> | null >>

    /**
     * Find zero or more Invitations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invitations
     * const invitations = await prisma.invitation.findMany()
     * 
     * // Get first 10 Invitations
     * const invitations = await prisma.invitation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invitationWithIdOnly = await prisma.invitation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends InvitationFindManyArgs>(
      args?: SelectSubset<T, InvitationFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Invitation>>, PrismaPromise<Array<InvitationGetPayload<T>>>>

    /**
     * Create a Invitation.
     * @param {InvitationCreateArgs} args - Arguments to create a Invitation.
     * @example
     * // Create one Invitation
     * const Invitation = await prisma.invitation.create({
     *   data: {
     *     // ... data to create a Invitation
     *   }
     * })
     * 
    **/
    create<T extends InvitationCreateArgs>(
      args: SelectSubset<T, InvitationCreateArgs>
    ): CheckSelect<T, Prisma__InvitationClient<Invitation>, Prisma__InvitationClient<InvitationGetPayload<T>>>

    /**
     * Create many Invitations.
     *     @param {InvitationCreateManyArgs} args - Arguments to create many Invitations.
     *     @example
     *     // Create many Invitations
     *     const invitation = await prisma.invitation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends InvitationCreateManyArgs>(
      args?: SelectSubset<T, InvitationCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Invitation.
     * @param {InvitationDeleteArgs} args - Arguments to delete one Invitation.
     * @example
     * // Delete one Invitation
     * const Invitation = await prisma.invitation.delete({
     *   where: {
     *     // ... filter to delete one Invitation
     *   }
     * })
     * 
    **/
    delete<T extends InvitationDeleteArgs>(
      args: SelectSubset<T, InvitationDeleteArgs>
    ): CheckSelect<T, Prisma__InvitationClient<Invitation>, Prisma__InvitationClient<InvitationGetPayload<T>>>

    /**
     * Update one Invitation.
     * @param {InvitationUpdateArgs} args - Arguments to update one Invitation.
     * @example
     * // Update one Invitation
     * const invitation = await prisma.invitation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends InvitationUpdateArgs>(
      args: SelectSubset<T, InvitationUpdateArgs>
    ): CheckSelect<T, Prisma__InvitationClient<Invitation>, Prisma__InvitationClient<InvitationGetPayload<T>>>

    /**
     * Delete zero or more Invitations.
     * @param {InvitationDeleteManyArgs} args - Arguments to filter Invitations to delete.
     * @example
     * // Delete a few Invitations
     * const { count } = await prisma.invitation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends InvitationDeleteManyArgs>(
      args?: SelectSubset<T, InvitationDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invitations
     * const invitation = await prisma.invitation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends InvitationUpdateManyArgs>(
      args: SelectSubset<T, InvitationUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Invitation.
     * @param {InvitationUpsertArgs} args - Arguments to update or create a Invitation.
     * @example
     * // Update or create a Invitation
     * const invitation = await prisma.invitation.upsert({
     *   create: {
     *     // ... data to create a Invitation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invitation we want to update
     *   }
     * })
    **/
    upsert<T extends InvitationUpsertArgs>(
      args: SelectSubset<T, InvitationUpsertArgs>
    ): CheckSelect<T, Prisma__InvitationClient<Invitation>, Prisma__InvitationClient<InvitationGetPayload<T>>>

    /**
     * Count the number of Invitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationCountArgs} args - Arguments to filter Invitations to count.
     * @example
     * // Count the number of Invitations
     * const count = await prisma.invitation.count({
     *   where: {
     *     // ... the filter for the Invitations we want to count
     *   }
     * })
    **/
    count<T extends InvitationCountArgs>(
      args?: Subset<T, InvitationCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvitationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvitationAggregateArgs>(args: Subset<T, InvitationAggregateArgs>): PrismaPromise<GetInvitationAggregateType<T>>

    /**
     * Group by Invitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InvitationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvitationGroupByArgs['orderBy'] }
        : { orderBy?: InvitationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvitationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvitationGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invitation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__InvitationClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    project<T extends ProjectArgs = {}>(args?: Subset<T, ProjectArgs>): CheckSelect<T, Prisma__ProjectClient<Project | null >, Prisma__ProjectClient<ProjectGetPayload<T> | null >>;

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Invitation findUnique
   */
  export type InvitationFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Invitation
     * 
    **/
    select?: InvitationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InvitationInclude | null
    /**
     * Throw an Error if a Invitation can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Invitation to fetch.
     * 
    **/
    where: InvitationWhereUniqueInput
  }


  /**
   * Invitation findFirst
   */
  export type InvitationFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Invitation
     * 
    **/
    select?: InvitationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InvitationInclude | null
    /**
     * Throw an Error if a Invitation can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Invitation to fetch.
     * 
    **/
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     * 
    **/
    orderBy?: Enumerable<InvitationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invitations.
     * 
    **/
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invitations.
     * 
    **/
    distinct?: Enumerable<InvitationScalarFieldEnum>
  }


  /**
   * Invitation findMany
   */
  export type InvitationFindManyArgs = {
    /**
     * Select specific fields to fetch from the Invitation
     * 
    **/
    select?: InvitationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InvitationInclude | null
    /**
     * Filter, which Invitations to fetch.
     * 
    **/
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     * 
    **/
    orderBy?: Enumerable<InvitationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invitations.
     * 
    **/
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     * 
    **/
    skip?: number
    distinct?: Enumerable<InvitationScalarFieldEnum>
  }


  /**
   * Invitation create
   */
  export type InvitationCreateArgs = {
    /**
     * Select specific fields to fetch from the Invitation
     * 
    **/
    select?: InvitationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InvitationInclude | null
    /**
     * The data needed to create a Invitation.
     * 
    **/
    data: XOR<InvitationCreateInput, InvitationUncheckedCreateInput>
  }


  /**
   * Invitation createMany
   */
  export type InvitationCreateManyArgs = {
    /**
     * The data used to create many Invitations.
     * 
    **/
    data: Enumerable<InvitationCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Invitation update
   */
  export type InvitationUpdateArgs = {
    /**
     * Select specific fields to fetch from the Invitation
     * 
    **/
    select?: InvitationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InvitationInclude | null
    /**
     * The data needed to update a Invitation.
     * 
    **/
    data: XOR<InvitationUpdateInput, InvitationUncheckedUpdateInput>
    /**
     * Choose, which Invitation to update.
     * 
    **/
    where: InvitationWhereUniqueInput
  }


  /**
   * Invitation updateMany
   */
  export type InvitationUpdateManyArgs = {
    /**
     * The data used to update Invitations.
     * 
    **/
    data: XOR<InvitationUpdateManyMutationInput, InvitationUncheckedUpdateManyInput>
    /**
     * Filter which Invitations to update
     * 
    **/
    where?: InvitationWhereInput
  }


  /**
   * Invitation upsert
   */
  export type InvitationUpsertArgs = {
    /**
     * Select specific fields to fetch from the Invitation
     * 
    **/
    select?: InvitationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InvitationInclude | null
    /**
     * The filter to search for the Invitation to update in case it exists.
     * 
    **/
    where: InvitationWhereUniqueInput
    /**
     * In case the Invitation found by the `where` argument doesn't exist, create a new Invitation with this data.
     * 
    **/
    create: XOR<InvitationCreateInput, InvitationUncheckedCreateInput>
    /**
     * In case the Invitation was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<InvitationUpdateInput, InvitationUncheckedUpdateInput>
  }


  /**
   * Invitation delete
   */
  export type InvitationDeleteArgs = {
    /**
     * Select specific fields to fetch from the Invitation
     * 
    **/
    select?: InvitationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InvitationInclude | null
    /**
     * Filter which Invitation to delete.
     * 
    **/
    where: InvitationWhereUniqueInput
  }


  /**
   * Invitation deleteMany
   */
  export type InvitationDeleteManyArgs = {
    /**
     * Filter which Invitations to delete
     * 
    **/
    where?: InvitationWhereInput
  }


  /**
   * Invitation without action
   */
  export type InvitationArgs = {
    /**
     * Select specific fields to fetch from the Invitation
     * 
    **/
    select?: InvitationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InvitationInclude | null
  }



  /**
   * Model Notification
   */


  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    is_disabled: boolean | null
    title: string | null
    content: string | null
    user_id: string | null
    type: Type_Notification | null
    status: Status_Notification | null
    reference_id: string | null
    sender_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    is_disabled: boolean | null
    title: string | null
    content: string | null
    user_id: string | null
    type: Type_Notification | null
    status: Status_Notification | null
    reference_id: string | null
    sender_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    is_disabled: number
    title: number
    content: number
    user_id: number
    type: number
    status: number
    reference_id: number
    sender_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    is_disabled?: true
    title?: true
    content?: true
    user_id?: true
    type?: true
    status?: true
    reference_id?: true
    sender_id?: true
    created_at?: true
    updated_at?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    is_disabled?: true
    title?: true
    content?: true
    user_id?: true
    type?: true
    status?: true
    reference_id?: true
    sender_id?: true
    created_at?: true
    updated_at?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    is_disabled?: true
    title?: true
    content?: true
    user_id?: true
    type?: true
    status?: true
    reference_id?: true
    sender_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type NotificationAggregateArgs = {
    /**
     * Filter which Notification to aggregate.
     * 
    **/
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     * 
    **/
    orderBy?: Enumerable<NotificationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs = {
    where?: NotificationWhereInput
    orderBy?: Enumerable<NotificationOrderByWithAggregationInput>
    by: Array<NotificationScalarFieldEnum>
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }


  export type NotificationGroupByOutputType = {
    id: string
    is_disabled: boolean
    title: string
    content: string
    user_id: string | null
    type: Type_Notification
    status: Status_Notification
    reference_id: string
    sender_id: string
    created_at: Date
    updated_at: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = PrismaPromise<
    Array<
      PickArray<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect = {
    id?: boolean
    is_disabled?: boolean
    title?: boolean
    content?: boolean
    user?: boolean | UserArgs
    user_id?: boolean
    type?: boolean
    status?: boolean
    reference_id?: boolean
    sender?: boolean | UserArgs
    sender_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type NotificationInclude = {
    user?: boolean | UserArgs
    sender?: boolean | UserArgs
  }

  export type NotificationGetPayload<
    S extends boolean | null | undefined | NotificationArgs,
    U = keyof S
      > = S extends true
        ? Notification
    : S extends undefined
    ? never
    : S extends NotificationArgs | NotificationFindManyArgs
    ?'include' extends U
    ? Notification  & {
    [P in TrueKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> | null :
        P extends 'sender' ? UserGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> | null :
        P extends 'sender' ? UserGetPayload<S['select'][P]> :  P extends keyof Notification ? Notification[P] : never
  } 
    : Notification
  : Notification


  type NotificationCountArgs = Merge<
    Omit<NotificationFindManyArgs, 'select' | 'include'> & {
      select?: NotificationCountAggregateInputType | true
    }
  >

  export interface NotificationDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends NotificationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, NotificationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Notification'> extends True ? CheckSelect<T, Prisma__NotificationClient<Notification>, Prisma__NotificationClient<NotificationGetPayload<T>>> : CheckSelect<T, Prisma__NotificationClient<Notification | null >, Prisma__NotificationClient<NotificationGetPayload<T> | null >>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends NotificationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, NotificationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Notification'> extends True ? CheckSelect<T, Prisma__NotificationClient<Notification>, Prisma__NotificationClient<NotificationGetPayload<T>>> : CheckSelect<T, Prisma__NotificationClient<Notification | null >, Prisma__NotificationClient<NotificationGetPayload<T> | null >>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends NotificationFindManyArgs>(
      args?: SelectSubset<T, NotificationFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Notification>>, PrismaPromise<Array<NotificationGetPayload<T>>>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
    **/
    create<T extends NotificationCreateArgs>(
      args: SelectSubset<T, NotificationCreateArgs>
    ): CheckSelect<T, Prisma__NotificationClient<Notification>, Prisma__NotificationClient<NotificationGetPayload<T>>>

    /**
     * Create many Notifications.
     *     @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     *     @example
     *     // Create many Notifications
     *     const notification = await prisma.notification.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends NotificationCreateManyArgs>(
      args?: SelectSubset<T, NotificationCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
    **/
    delete<T extends NotificationDeleteArgs>(
      args: SelectSubset<T, NotificationDeleteArgs>
    ): CheckSelect<T, Prisma__NotificationClient<Notification>, Prisma__NotificationClient<NotificationGetPayload<T>>>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends NotificationUpdateArgs>(
      args: SelectSubset<T, NotificationUpdateArgs>
    ): CheckSelect<T, Prisma__NotificationClient<Notification>, Prisma__NotificationClient<NotificationGetPayload<T>>>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends NotificationDeleteManyArgs>(
      args?: SelectSubset<T, NotificationDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends NotificationUpdateManyArgs>(
      args: SelectSubset<T, NotificationUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
    **/
    upsert<T extends NotificationUpsertArgs>(
      args: SelectSubset<T, NotificationUpsertArgs>
    ): CheckSelect<T, Prisma__NotificationClient<Notification>, Prisma__NotificationClient<NotificationGetPayload<T>>>

    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__NotificationClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    sender<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Notification
     * 
    **/
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotificationInclude | null
    /**
     * Throw an Error if a Notification can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Notification to fetch.
     * 
    **/
    where: NotificationWhereUniqueInput
  }


  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Notification
     * 
    **/
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotificationInclude | null
    /**
     * Throw an Error if a Notification can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Notification to fetch.
     * 
    **/
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     * 
    **/
    orderBy?: Enumerable<NotificationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     * 
    **/
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     * 
    **/
    distinct?: Enumerable<NotificationScalarFieldEnum>
  }


  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs = {
    /**
     * Select specific fields to fetch from the Notification
     * 
    **/
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotificationInclude | null
    /**
     * Filter, which Notifications to fetch.
     * 
    **/
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     * 
    **/
    orderBy?: Enumerable<NotificationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     * 
    **/
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     * 
    **/
    skip?: number
    distinct?: Enumerable<NotificationScalarFieldEnum>
  }


  /**
   * Notification create
   */
  export type NotificationCreateArgs = {
    /**
     * Select specific fields to fetch from the Notification
     * 
    **/
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotificationInclude | null
    /**
     * The data needed to create a Notification.
     * 
    **/
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }


  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs = {
    /**
     * The data used to create many Notifications.
     * 
    **/
    data: Enumerable<NotificationCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Notification update
   */
  export type NotificationUpdateArgs = {
    /**
     * Select specific fields to fetch from the Notification
     * 
    **/
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotificationInclude | null
    /**
     * The data needed to update a Notification.
     * 
    **/
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     * 
    **/
    where: NotificationWhereUniqueInput
  }


  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs = {
    /**
     * The data used to update Notifications.
     * 
    **/
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     * 
    **/
    where?: NotificationWhereInput
  }


  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs = {
    /**
     * Select specific fields to fetch from the Notification
     * 
    **/
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotificationInclude | null
    /**
     * The filter to search for the Notification to update in case it exists.
     * 
    **/
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     * 
    **/
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }


  /**
   * Notification delete
   */
  export type NotificationDeleteArgs = {
    /**
     * Select specific fields to fetch from the Notification
     * 
    **/
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotificationInclude | null
    /**
     * Filter which Notification to delete.
     * 
    **/
    where: NotificationWhereUniqueInput
  }


  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs = {
    /**
     * Filter which Notifications to delete
     * 
    **/
    where?: NotificationWhereInput
  }


  /**
   * Notification without action
   */
  export type NotificationArgs = {
    /**
     * Select specific fields to fetch from the Notification
     * 
    **/
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotificationInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const UserScalarFieldEnum: {
    id: 'id',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    password: 'password',
    is_disabled: 'is_disabled',
    avatar: 'avatar',
    role: 'role',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    project_owner_id: 'project_owner_id',
    title: 'title',
    description: 'description',
    private: 'private',
    is_disabled: 'is_disabled',
    status_project: 'status_project',
    total_time_spent: 'total_time_spent',
    start_date: 'start_date',
    end_date: 'end_date',
    due_date: 'due_date',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    private: 'private',
    is_disabled: 'is_disabled',
    status_task: 'status_task',
    total_time_spent: 'total_time_spent',
    start_date: 'start_date',
    end_date: 'end_date',
    user_id: 'user_id',
    project_id: 'project_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    is_disabled: 'is_disabled',
    content: 'content',
    task_comment_user_id: 'task_comment_user_id',
    project_id: 'project_id',
    task_id: 'task_id',
    project_comment_user_id: 'project_comment_user_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const FileScalarFieldEnum: {
    id: 'id',
    name: 'name',
    path: 'path',
    size: 'size',
    type: 'type',
    user_id: 'user_id',
    project_id: 'project_id',
    task_id: 'task_id',
    is_disabled: 'is_disabled',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type FileScalarFieldEnum = (typeof FileScalarFieldEnum)[keyof typeof FileScalarFieldEnum]


  export const InvitationScalarFieldEnum: {
    id: 'id',
    status: 'status',
    email: 'email',
    project_id: 'project_id',
    user_id: 'user_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type InvitationScalarFieldEnum = (typeof InvitationScalarFieldEnum)[keyof typeof InvitationScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    is_disabled: 'is_disabled',
    title: 'title',
    content: 'content',
    user_id: 'user_id',
    type: 'type',
    status: 'status',
    reference_id: 'reference_id',
    sender_id: 'sender_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    first_name?: StringFilter | string
    last_name?: StringFilter | string
    email?: StringFilter | string
    password?: StringFilter | string
    is_disabled?: BoolFilter | boolean
    avatar?: StringNullableFilter | string | null
    role?: EnumRoleNullableListFilter
    projects?: ProjectListRelationFilter
    tasks?: TaskListRelationFilter
    files?: FileListRelationFilter
    task_comments?: CommentListRelationFilter
    project_comments?: CommentListRelationFilter
    invitations?: InvitationListRelationFilter
    notifications?: NotificationListRelationFilter
    owned_projects?: ProjectListRelationFilter
    notifications_sent?: NotificationListRelationFilter
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    is_disabled?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    projects?: ProjectOrderByRelationAggregateInput
    tasks?: TaskOrderByRelationAggregateInput
    files?: FileOrderByRelationAggregateInput
    task_comments?: CommentOrderByRelationAggregateInput
    project_comments?: CommentOrderByRelationAggregateInput
    invitations?: InvitationOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    owned_projects?: ProjectOrderByRelationAggregateInput
    notifications_sent?: NotificationOrderByRelationAggregateInput
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserWhereUniqueInput = {
    id?: string
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    is_disabled?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    first_name?: StringWithAggregatesFilter | string
    last_name?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    is_disabled?: BoolWithAggregatesFilter | boolean
    avatar?: StringNullableWithAggregatesFilter | string | null
    role?: EnumRoleNullableListFilter
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ProjectWhereInput = {
    AND?: Enumerable<ProjectWhereInput>
    OR?: Enumerable<ProjectWhereInput>
    NOT?: Enumerable<ProjectWhereInput>
    id?: StringFilter | string
    users?: UserListRelationFilter
    owner?: XOR<UserRelationFilter, UserWhereInput>
    project_owner_id?: StringFilter | string
    title?: StringFilter | string
    description?: StringFilter | string
    private?: BoolFilter | boolean
    is_disabled?: BoolFilter | boolean
    status_project?: EnumStatusFilter | Status
    total_time_spent?: IntFilter | number
    start_date?: DateTimeFilter | Date | string
    end_date?: DateTimeFilter | Date | string
    due_date?: DateTimeFilter | Date | string
    tasks?: TaskListRelationFilter
    files?: FileListRelationFilter
    comments?: CommentListRelationFilter
    invitations?: InvitationListRelationFilter
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    users?: UserOrderByRelationAggregateInput
    owner?: UserOrderByWithRelationInput
    project_owner_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    private?: SortOrder
    is_disabled?: SortOrder
    status_project?: SortOrder
    total_time_spent?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    due_date?: SortOrder
    tasks?: TaskOrderByRelationAggregateInput
    files?: FileOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    invitations?: InvitationOrderByRelationAggregateInput
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProjectWhereUniqueInput = {
    id?: string
  }

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    project_owner_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    private?: SortOrder
    is_disabled?: SortOrder
    status_project?: SortOrder
    total_time_spent?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    due_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProjectScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProjectScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProjectScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    project_owner_id?: StringWithAggregatesFilter | string
    title?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    private?: BoolWithAggregatesFilter | boolean
    is_disabled?: BoolWithAggregatesFilter | boolean
    status_project?: EnumStatusWithAggregatesFilter | Status
    total_time_spent?: IntWithAggregatesFilter | number
    start_date?: DateTimeWithAggregatesFilter | Date | string
    end_date?: DateTimeWithAggregatesFilter | Date | string
    due_date?: DateTimeWithAggregatesFilter | Date | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TaskWhereInput = {
    AND?: Enumerable<TaskWhereInput>
    OR?: Enumerable<TaskWhereInput>
    NOT?: Enumerable<TaskWhereInput>
    id?: StringFilter | string
    title?: StringFilter | string
    description?: StringFilter | string
    private?: BoolFilter | boolean
    is_disabled?: BoolFilter | boolean
    status_task?: EnumStatusFilter | Status
    total_time_spent?: IntFilter | number
    start_date?: DateTimeFilter | Date | string
    end_date?: DateTimeFilter | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput> | null
    user_id?: StringNullableFilter | string | null
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    project_id?: StringFilter | string
    files?: FileListRelationFilter
    comments?: CommentListRelationFilter
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    private?: SortOrder
    is_disabled?: SortOrder
    status_task?: SortOrder
    total_time_spent?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    user?: UserOrderByWithRelationInput
    user_id?: SortOrder
    project?: ProjectOrderByWithRelationInput
    project_id?: SortOrder
    files?: FileOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TaskWhereUniqueInput = {
    id?: string
  }

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    private?: SortOrder
    is_disabled?: SortOrder
    status_task?: SortOrder
    total_time_spent?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    user_id?: SortOrder
    project_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _avg?: TaskAvgOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
    _sum?: TaskSumOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TaskScalarWhereWithAggregatesInput>
    OR?: Enumerable<TaskScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TaskScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    title?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    private?: BoolWithAggregatesFilter | boolean
    is_disabled?: BoolWithAggregatesFilter | boolean
    status_task?: EnumStatusWithAggregatesFilter | Status
    total_time_spent?: IntWithAggregatesFilter | number
    start_date?: DateTimeWithAggregatesFilter | Date | string
    end_date?: DateTimeWithAggregatesFilter | Date | string
    user_id?: StringNullableWithAggregatesFilter | string | null
    project_id?: StringWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type CommentWhereInput = {
    AND?: Enumerable<CommentWhereInput>
    OR?: Enumerable<CommentWhereInput>
    NOT?: Enumerable<CommentWhereInput>
    id?: StringFilter | string
    is_disabled?: BoolFilter | boolean
    content?: StringFilter | string
    task_comment_user_id?: StringNullableFilter | string | null
    project?: XOR<ProjectRelationFilter, ProjectWhereInput> | null
    project_id?: StringNullableFilter | string | null
    task?: XOR<TaskRelationFilter, TaskWhereInput> | null
    task_id?: StringNullableFilter | string | null
    user_task_comments?: XOR<UserRelationFilter, UserWhereInput> | null
    user_project_comments?: XOR<UserRelationFilter, UserWhereInput> | null
    project_comment_user_id?: StringNullableFilter | string | null
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    is_disabled?: SortOrder
    content?: SortOrder
    task_comment_user_id?: SortOrder
    project?: ProjectOrderByWithRelationInput
    project_id?: SortOrder
    task?: TaskOrderByWithRelationInput
    task_id?: SortOrder
    user_task_comments?: UserOrderByWithRelationInput
    user_project_comments?: UserOrderByWithRelationInput
    project_comment_user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CommentWhereUniqueInput = {
    id?: string
  }

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    is_disabled?: SortOrder
    content?: SortOrder
    task_comment_user_id?: SortOrder
    project_id?: SortOrder
    task_id?: SortOrder
    project_comment_user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CommentScalarWhereWithAggregatesInput>
    OR?: Enumerable<CommentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CommentScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    is_disabled?: BoolWithAggregatesFilter | boolean
    content?: StringWithAggregatesFilter | string
    task_comment_user_id?: StringNullableWithAggregatesFilter | string | null
    project_id?: StringNullableWithAggregatesFilter | string | null
    task_id?: StringNullableWithAggregatesFilter | string | null
    project_comment_user_id?: StringNullableWithAggregatesFilter | string | null
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type FileWhereInput = {
    AND?: Enumerable<FileWhereInput>
    OR?: Enumerable<FileWhereInput>
    NOT?: Enumerable<FileWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    path?: StringFilter | string
    size?: IntFilter | number
    type?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput> | null
    user_id?: StringNullableFilter | string | null
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    project_id?: StringFilter | string
    task?: XOR<TaskRelationFilter, TaskWhereInput> | null
    task_id?: StringNullableFilter | string | null
    is_disabled?: BoolFilter | boolean
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type FileOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    path?: SortOrder
    size?: SortOrder
    type?: SortOrder
    user?: UserOrderByWithRelationInput
    user_id?: SortOrder
    project?: ProjectOrderByWithRelationInput
    project_id?: SortOrder
    task?: TaskOrderByWithRelationInput
    task_id?: SortOrder
    is_disabled?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FileWhereUniqueInput = {
    id?: string
  }

  export type FileOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    path?: SortOrder
    size?: SortOrder
    type?: SortOrder
    user_id?: SortOrder
    project_id?: SortOrder
    task_id?: SortOrder
    is_disabled?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: FileCountOrderByAggregateInput
    _avg?: FileAvgOrderByAggregateInput
    _max?: FileMaxOrderByAggregateInput
    _min?: FileMinOrderByAggregateInput
    _sum?: FileSumOrderByAggregateInput
  }

  export type FileScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FileScalarWhereWithAggregatesInput>
    OR?: Enumerable<FileScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FileScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    path?: StringWithAggregatesFilter | string
    size?: IntWithAggregatesFilter | number
    type?: StringWithAggregatesFilter | string
    user_id?: StringNullableWithAggregatesFilter | string | null
    project_id?: StringWithAggregatesFilter | string
    task_id?: StringNullableWithAggregatesFilter | string | null
    is_disabled?: BoolWithAggregatesFilter | boolean
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type InvitationWhereInput = {
    AND?: Enumerable<InvitationWhereInput>
    OR?: Enumerable<InvitationWhereInput>
    NOT?: Enumerable<InvitationWhereInput>
    id?: StringFilter | string
    status?: EnumStatus_InvitationFilter | Status_Invitation
    email?: StringFilter | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    project_id?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput> | null
    user_id?: StringNullableFilter | string | null
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type InvitationOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    email?: SortOrder
    project?: ProjectOrderByWithRelationInput
    project_id?: SortOrder
    user?: UserOrderByWithRelationInput
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type InvitationWhereUniqueInput = {
    id?: string
  }

  export type InvitationOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    email?: SortOrder
    project_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: InvitationCountOrderByAggregateInput
    _max?: InvitationMaxOrderByAggregateInput
    _min?: InvitationMinOrderByAggregateInput
  }

  export type InvitationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<InvitationScalarWhereWithAggregatesInput>
    OR?: Enumerable<InvitationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<InvitationScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    status?: EnumStatus_InvitationWithAggregatesFilter | Status_Invitation
    email?: StringWithAggregatesFilter | string
    project_id?: StringWithAggregatesFilter | string
    user_id?: StringNullableWithAggregatesFilter | string | null
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type NotificationWhereInput = {
    AND?: Enumerable<NotificationWhereInput>
    OR?: Enumerable<NotificationWhereInput>
    NOT?: Enumerable<NotificationWhereInput>
    id?: StringFilter | string
    is_disabled?: BoolFilter | boolean
    title?: StringFilter | string
    content?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput> | null
    user_id?: StringNullableFilter | string | null
    type?: EnumType_NotificationFilter | Type_Notification
    status?: EnumStatus_NotificationFilter | Status_Notification
    reference_id?: StringFilter | string
    sender?: XOR<UserRelationFilter, UserWhereInput>
    sender_id?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    is_disabled?: SortOrder
    title?: SortOrder
    content?: SortOrder
    user?: UserOrderByWithRelationInput
    user_id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    reference_id?: SortOrder
    sender?: UserOrderByWithRelationInput
    sender_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type NotificationWhereUniqueInput = {
    id?: string
  }

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    is_disabled?: SortOrder
    title?: SortOrder
    content?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    reference_id?: SortOrder
    sender_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<NotificationScalarWhereWithAggregatesInput>
    OR?: Enumerable<NotificationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<NotificationScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    is_disabled?: BoolWithAggregatesFilter | boolean
    title?: StringWithAggregatesFilter | string
    content?: StringWithAggregatesFilter | string
    user_id?: StringNullableWithAggregatesFilter | string | null
    type?: EnumType_NotificationWithAggregatesFilter | Type_Notification
    status?: EnumStatus_NotificationWithAggregatesFilter | Status_Notification
    reference_id?: StringWithAggregatesFilter | string
    sender_id?: StringWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserCreateInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password: string
    is_disabled: boolean
    avatar?: string | null
    role?: UserCreateroleInput | Enumerable<Role>
    projects?: ProjectCreateNestedManyWithoutUsersInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    files?: FileCreateNestedManyWithoutUserInput
    task_comments?: CommentCreateNestedManyWithoutUser_task_commentsInput
    project_comments?: CommentCreateNestedManyWithoutUser_project_commentsInput
    invitations?: InvitationCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    owned_projects?: ProjectCreateNestedManyWithoutOwnerInput
    notifications_sent?: NotificationCreateNestedManyWithoutSenderInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password: string
    is_disabled: boolean
    avatar?: string | null
    role?: UserCreateroleInput | Enumerable<Role>
    projects?: ProjectUncheckedCreateNestedManyWithoutUsersInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    files?: FileUncheckedCreateNestedManyWithoutUserInput
    task_comments?: CommentUncheckedCreateNestedManyWithoutUser_task_commentsInput
    project_comments?: CommentUncheckedCreateNestedManyWithoutUser_project_commentsInput
    invitations?: InvitationUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    owned_projects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    notifications_sent?: NotificationUncheckedCreateNestedManyWithoutSenderInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: UserUpdateroleInput | Enumerable<Role>
    projects?: ProjectUpdateManyWithoutUsersInput
    tasks?: TaskUpdateManyWithoutUserInput
    files?: FileUpdateManyWithoutUserInput
    task_comments?: CommentUpdateManyWithoutUser_task_commentsInput
    project_comments?: CommentUpdateManyWithoutUser_project_commentsInput
    invitations?: InvitationUpdateManyWithoutUserInput
    notifications?: NotificationUpdateManyWithoutUserInput
    owned_projects?: ProjectUpdateManyWithoutOwnerInput
    notifications_sent?: NotificationUpdateManyWithoutSenderInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: UserUpdateroleInput | Enumerable<Role>
    projects?: ProjectUncheckedUpdateManyWithoutUsersInput
    tasks?: TaskUncheckedUpdateManyWithoutUserInput
    files?: FileUncheckedUpdateManyWithoutUserInput
    task_comments?: CommentUncheckedUpdateManyWithoutUser_task_commentsInput
    project_comments?: CommentUncheckedUpdateManyWithoutUser_project_commentsInput
    invitations?: InvitationUncheckedUpdateManyWithoutUserInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserInput
    owned_projects?: ProjectUncheckedUpdateManyWithoutOwnerInput
    notifications_sent?: NotificationUncheckedUpdateManyWithoutSenderInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password: string
    is_disabled: boolean
    avatar?: string | null
    role?: UserCreateroleInput | Enumerable<Role>
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: UserUpdateroleInput | Enumerable<Role>
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: UserUpdateroleInput | Enumerable<Role>
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    users?: UserCreateNestedManyWithoutProjectsInput
    owner: UserCreateNestedOneWithoutOwned_projectsInput
    title: string
    description: string
    private: boolean
    is_disabled: boolean
    status_project: Status
    total_time_spent?: number
    start_date: Date | string
    end_date: Date | string
    due_date: Date | string
    tasks?: TaskCreateNestedManyWithoutProjectInput
    files?: FileCreateNestedManyWithoutProjectInput
    comments?: CommentCreateNestedManyWithoutProjectInput
    invitations?: InvitationCreateNestedManyWithoutProjectInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    users?: UserUncheckedCreateNestedManyWithoutProjectsInput
    project_owner_id: string
    title: string
    description: string
    private: boolean
    is_disabled: boolean
    status_project: Status
    total_time_spent?: number
    start_date: Date | string
    end_date: Date | string
    due_date: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
    files?: FileUncheckedCreateNestedManyWithoutProjectInput
    comments?: CommentUncheckedCreateNestedManyWithoutProjectInput
    invitations?: InvitationUncheckedCreateNestedManyWithoutProjectInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutProjectsInput
    owner?: UserUpdateOneRequiredWithoutOwned_projectsInput
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    private?: BoolFieldUpdateOperationsInput | boolean
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    status_project?: EnumStatusFieldUpdateOperationsInput | Status
    total_time_spent?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutProjectInput
    files?: FileUpdateManyWithoutProjectInput
    comments?: CommentUpdateManyWithoutProjectInput
    invitations?: InvitationUpdateManyWithoutProjectInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutProjectsInput
    project_owner_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    private?: BoolFieldUpdateOperationsInput | boolean
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    status_project?: EnumStatusFieldUpdateOperationsInput | Status
    total_time_spent?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutProjectInput
    files?: FileUncheckedUpdateManyWithoutProjectInput
    comments?: CommentUncheckedUpdateManyWithoutProjectInput
    invitations?: InvitationUncheckedUpdateManyWithoutProjectInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateManyInput = {
    id?: string
    project_owner_id: string
    title: string
    description: string
    private: boolean
    is_disabled: boolean
    status_project: Status
    total_time_spent?: number
    start_date: Date | string
    end_date: Date | string
    due_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    private?: BoolFieldUpdateOperationsInput | boolean
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    status_project?: EnumStatusFieldUpdateOperationsInput | Status
    total_time_spent?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    project_owner_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    private?: BoolFieldUpdateOperationsInput | boolean
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    status_project?: EnumStatusFieldUpdateOperationsInput | Status
    total_time_spent?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateInput = {
    id?: string
    title: string
    description: string
    private: boolean
    is_disabled: boolean
    status_task: Status
    total_time_spent: number
    start_date: Date | string
    end_date: Date | string
    user?: UserCreateNestedOneWithoutTasksInput
    project: ProjectCreateNestedOneWithoutTasksInput
    files?: FileCreateNestedManyWithoutTaskInput
    comments?: CommentCreateNestedManyWithoutTaskInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TaskUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    private: boolean
    is_disabled: boolean
    status_task: Status
    total_time_spent: number
    start_date: Date | string
    end_date: Date | string
    user_id?: string | null
    project_id: string
    files?: FileUncheckedCreateNestedManyWithoutTaskInput
    comments?: CommentUncheckedCreateNestedManyWithoutTaskInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    private?: BoolFieldUpdateOperationsInput | boolean
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    status_task?: EnumStatusFieldUpdateOperationsInput | Status
    total_time_spent?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutTasksInput
    project?: ProjectUpdateOneRequiredWithoutTasksInput
    files?: FileUpdateManyWithoutTaskInput
    comments?: CommentUpdateManyWithoutTaskInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    private?: BoolFieldUpdateOperationsInput | boolean
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    status_task?: EnumStatusFieldUpdateOperationsInput | Status
    total_time_spent?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    project_id?: StringFieldUpdateOperationsInput | string
    files?: FileUncheckedUpdateManyWithoutTaskInput
    comments?: CommentUncheckedUpdateManyWithoutTaskInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateManyInput = {
    id?: string
    title: string
    description: string
    private: boolean
    is_disabled: boolean
    status_task: Status
    total_time_spent: number
    start_date: Date | string
    end_date: Date | string
    user_id?: string | null
    project_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    private?: BoolFieldUpdateOperationsInput | boolean
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    status_task?: EnumStatusFieldUpdateOperationsInput | Status
    total_time_spent?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    private?: BoolFieldUpdateOperationsInput | boolean
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    status_task?: EnumStatusFieldUpdateOperationsInput | Status
    total_time_spent?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    project_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateInput = {
    id?: string
    is_disabled: boolean
    content: string
    project?: ProjectCreateNestedOneWithoutCommentsInput
    task?: TaskCreateNestedOneWithoutCommentsInput
    user_task_comments?: UserCreateNestedOneWithoutTask_commentsInput
    user_project_comments?: UserCreateNestedOneWithoutProject_commentsInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    is_disabled: boolean
    content: string
    task_comment_user_id?: string | null
    project_id?: string | null
    task_id?: string | null
    project_comment_user_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    content?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneWithoutCommentsInput
    task?: TaskUpdateOneWithoutCommentsInput
    user_task_comments?: UserUpdateOneWithoutTask_commentsInput
    user_project_comments?: UserUpdateOneWithoutProject_commentsInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    content?: StringFieldUpdateOperationsInput | string
    task_comment_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    project_id?: NullableStringFieldUpdateOperationsInput | string | null
    task_id?: NullableStringFieldUpdateOperationsInput | string | null
    project_comment_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyInput = {
    id?: string
    is_disabled: boolean
    content: string
    task_comment_user_id?: string | null
    project_id?: string | null
    task_id?: string | null
    project_comment_user_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    content?: StringFieldUpdateOperationsInput | string
    task_comment_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    project_id?: NullableStringFieldUpdateOperationsInput | string | null
    task_id?: NullableStringFieldUpdateOperationsInput | string | null
    project_comment_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileCreateInput = {
    id?: string
    name: string
    path: string
    size: number
    type: string
    user?: UserCreateNestedOneWithoutFilesInput
    project: ProjectCreateNestedOneWithoutFilesInput
    task?: TaskCreateNestedOneWithoutFilesInput
    is_disabled: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FileUncheckedCreateInput = {
    id?: string
    name: string
    path: string
    size: number
    type: string
    user_id?: string | null
    project_id: string
    task_id?: string | null
    is_disabled: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutFilesInput
    project?: ProjectUpdateOneRequiredWithoutFilesInput
    task?: TaskUpdateOneWithoutFilesInput
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    project_id?: StringFieldUpdateOperationsInput | string
    task_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileCreateManyInput = {
    id?: string
    name: string
    path: string
    size: number
    type: string
    user_id?: string | null
    project_id: string
    task_id?: string | null
    is_disabled: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    project_id?: StringFieldUpdateOperationsInput | string
    task_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationCreateInput = {
    id?: string
    status: Status_Invitation
    email: string
    project: ProjectCreateNestedOneWithoutInvitationsInput
    user?: UserCreateNestedOneWithoutInvitationsInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type InvitationUncheckedCreateInput = {
    id?: string
    status: Status_Invitation
    email: string
    project_id: string
    user_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type InvitationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatus_InvitationFieldUpdateOperationsInput | Status_Invitation
    email?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneRequiredWithoutInvitationsInput
    user?: UserUpdateOneWithoutInvitationsInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatus_InvitationFieldUpdateOperationsInput | Status_Invitation
    email?: StringFieldUpdateOperationsInput | string
    project_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationCreateManyInput = {
    id?: string
    status: Status_Invitation
    email: string
    project_id: string
    user_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type InvitationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatus_InvitationFieldUpdateOperationsInput | Status_Invitation
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatus_InvitationFieldUpdateOperationsInput | Status_Invitation
    email?: StringFieldUpdateOperationsInput | string
    project_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    is_disabled: boolean
    title: string
    content: string
    user?: UserCreateNestedOneWithoutNotificationsInput
    type: Type_Notification
    status: Status_Notification
    reference_id: string
    sender: UserCreateNestedOneWithoutNotifications_sentInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    is_disabled: boolean
    title: string
    content: string
    user_id?: string | null
    type: Type_Notification
    status: Status_Notification
    reference_id: string
    sender_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutNotificationsInput
    type?: EnumType_NotificationFieldUpdateOperationsInput | Type_Notification
    status?: EnumStatus_NotificationFieldUpdateOperationsInput | Status_Notification
    reference_id?: StringFieldUpdateOperationsInput | string
    sender?: UserUpdateOneRequiredWithoutNotifications_sentInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumType_NotificationFieldUpdateOperationsInput | Type_Notification
    status?: EnumStatus_NotificationFieldUpdateOperationsInput | Status_Notification
    reference_id?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    is_disabled: boolean
    title: string
    content: string
    user_id?: string | null
    type: Type_Notification
    status: Status_Notification
    reference_id: string
    sender_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumType_NotificationFieldUpdateOperationsInput | Type_Notification
    status?: EnumStatus_NotificationFieldUpdateOperationsInput | Status_Notification
    reference_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumType_NotificationFieldUpdateOperationsInput | Type_Notification
    status?: EnumStatus_NotificationFieldUpdateOperationsInput | Status_Notification
    reference_id?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type EnumRoleNullableListFilter = {
    equals?: Enumerable<Role> | null
    has?: Role | null
    hasEvery?: Enumerable<Role>
    hasSome?: Enumerable<Role>
    isEmpty?: boolean
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type FileListRelationFilter = {
    every?: FileWhereInput
    some?: FileWhereInput
    none?: FileWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type InvitationListRelationFilter = {
    every?: InvitationWhereInput
    some?: InvitationWhereInput
    none?: InvitationWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvitationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    is_disabled?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    is_disabled?: SortOrder
    avatar?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    is_disabled?: SortOrder
    avatar?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type EnumStatusFilter = {
    equals?: Status
    in?: Enumerable<Status>
    notIn?: Enumerable<Status>
    not?: NestedEnumStatusFilter | Status
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    project_owner_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    private?: SortOrder
    is_disabled?: SortOrder
    status_project?: SortOrder
    total_time_spent?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    due_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    total_time_spent?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    project_owner_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    private?: SortOrder
    is_disabled?: SortOrder
    status_project?: SortOrder
    total_time_spent?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    due_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    project_owner_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    private?: SortOrder
    is_disabled?: SortOrder
    status_project?: SortOrder
    total_time_spent?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    due_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    total_time_spent?: SortOrder
  }

  export type EnumStatusWithAggregatesFilter = {
    equals?: Status
    in?: Enumerable<Status>
    notIn?: Enumerable<Status>
    not?: NestedEnumStatusWithAggregatesFilter | Status
    _count?: NestedIntFilter
    _min?: NestedEnumStatusFilter
    _max?: NestedEnumStatusFilter
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type ProjectRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    private?: SortOrder
    is_disabled?: SortOrder
    status_task?: SortOrder
    total_time_spent?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    user_id?: SortOrder
    project_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    total_time_spent?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    private?: SortOrder
    is_disabled?: SortOrder
    status_task?: SortOrder
    total_time_spent?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    user_id?: SortOrder
    project_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    private?: SortOrder
    is_disabled?: SortOrder
    status_task?: SortOrder
    total_time_spent?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    user_id?: SortOrder
    project_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
    total_time_spent?: SortOrder
  }

  export type TaskRelationFilter = {
    is?: TaskWhereInput | null
    isNot?: TaskWhereInput | null
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    is_disabled?: SortOrder
    content?: SortOrder
    task_comment_user_id?: SortOrder
    project_id?: SortOrder
    task_id?: SortOrder
    project_comment_user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    is_disabled?: SortOrder
    content?: SortOrder
    task_comment_user_id?: SortOrder
    project_id?: SortOrder
    task_id?: SortOrder
    project_comment_user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    is_disabled?: SortOrder
    content?: SortOrder
    task_comment_user_id?: SortOrder
    project_id?: SortOrder
    task_id?: SortOrder
    project_comment_user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FileCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    path?: SortOrder
    size?: SortOrder
    type?: SortOrder
    user_id?: SortOrder
    project_id?: SortOrder
    task_id?: SortOrder
    is_disabled?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FileAvgOrderByAggregateInput = {
    size?: SortOrder
  }

  export type FileMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    path?: SortOrder
    size?: SortOrder
    type?: SortOrder
    user_id?: SortOrder
    project_id?: SortOrder
    task_id?: SortOrder
    is_disabled?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FileMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    path?: SortOrder
    size?: SortOrder
    type?: SortOrder
    user_id?: SortOrder
    project_id?: SortOrder
    task_id?: SortOrder
    is_disabled?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FileSumOrderByAggregateInput = {
    size?: SortOrder
  }

  export type EnumStatus_InvitationFilter = {
    equals?: Status_Invitation
    in?: Enumerable<Status_Invitation>
    notIn?: Enumerable<Status_Invitation>
    not?: NestedEnumStatus_InvitationFilter | Status_Invitation
  }

  export type InvitationCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    email?: SortOrder
    project_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type InvitationMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    email?: SortOrder
    project_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type InvitationMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    email?: SortOrder
    project_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnumStatus_InvitationWithAggregatesFilter = {
    equals?: Status_Invitation
    in?: Enumerable<Status_Invitation>
    notIn?: Enumerable<Status_Invitation>
    not?: NestedEnumStatus_InvitationWithAggregatesFilter | Status_Invitation
    _count?: NestedIntFilter
    _min?: NestedEnumStatus_InvitationFilter
    _max?: NestedEnumStatus_InvitationFilter
  }

  export type EnumType_NotificationFilter = {
    equals?: Type_Notification
    in?: Enumerable<Type_Notification>
    notIn?: Enumerable<Type_Notification>
    not?: NestedEnumType_NotificationFilter | Type_Notification
  }

  export type EnumStatus_NotificationFilter = {
    equals?: Status_Notification
    in?: Enumerable<Status_Notification>
    notIn?: Enumerable<Status_Notification>
    not?: NestedEnumStatus_NotificationFilter | Status_Notification
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    is_disabled?: SortOrder
    title?: SortOrder
    content?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    reference_id?: SortOrder
    sender_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    is_disabled?: SortOrder
    title?: SortOrder
    content?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    reference_id?: SortOrder
    sender_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    is_disabled?: SortOrder
    title?: SortOrder
    content?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    reference_id?: SortOrder
    sender_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnumType_NotificationWithAggregatesFilter = {
    equals?: Type_Notification
    in?: Enumerable<Type_Notification>
    notIn?: Enumerable<Type_Notification>
    not?: NestedEnumType_NotificationWithAggregatesFilter | Type_Notification
    _count?: NestedIntFilter
    _min?: NestedEnumType_NotificationFilter
    _max?: NestedEnumType_NotificationFilter
  }

  export type EnumStatus_NotificationWithAggregatesFilter = {
    equals?: Status_Notification
    in?: Enumerable<Status_Notification>
    notIn?: Enumerable<Status_Notification>
    not?: NestedEnumStatus_NotificationWithAggregatesFilter | Status_Notification
    _count?: NestedIntFilter
    _min?: NestedEnumStatus_NotificationFilter
    _max?: NestedEnumStatus_NotificationFilter
  }

  export type UserCreateroleInput = {
    set: Enumerable<Role>
  }

  export type ProjectCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutUsersInput>, Enumerable<ProjectUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutUsersInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
  }

  export type TaskCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<TaskCreateWithoutUserInput>, Enumerable<TaskUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TaskCreateOrConnectWithoutUserInput>
    createMany?: TaskCreateManyUserInputEnvelope
    connect?: Enumerable<TaskWhereUniqueInput>
  }

  export type FileCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<FileCreateWithoutUserInput>, Enumerable<FileUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<FileCreateOrConnectWithoutUserInput>
    createMany?: FileCreateManyUserInputEnvelope
    connect?: Enumerable<FileWhereUniqueInput>
  }

  export type CommentCreateNestedManyWithoutUser_task_commentsInput = {
    create?: XOR<Enumerable<CommentCreateWithoutUser_task_commentsInput>, Enumerable<CommentUncheckedCreateWithoutUser_task_commentsInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutUser_task_commentsInput>
    createMany?: CommentCreateManyUser_task_commentsInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type CommentCreateNestedManyWithoutUser_project_commentsInput = {
    create?: XOR<Enumerable<CommentCreateWithoutUser_project_commentsInput>, Enumerable<CommentUncheckedCreateWithoutUser_project_commentsInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutUser_project_commentsInput>
    createMany?: CommentCreateManyUser_project_commentsInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type InvitationCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<InvitationCreateWithoutUserInput>, Enumerable<InvitationUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<InvitationCreateOrConnectWithoutUserInput>
    createMany?: InvitationCreateManyUserInputEnvelope
    connect?: Enumerable<InvitationWhereUniqueInput>
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<NotificationCreateWithoutUserInput>, Enumerable<NotificationUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<NotificationCreateOrConnectWithoutUserInput>
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: Enumerable<NotificationWhereUniqueInput>
  }

  export type ProjectCreateNestedManyWithoutOwnerInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutOwnerInput>, Enumerable<ProjectUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutOwnerInput>
    createMany?: ProjectCreateManyOwnerInputEnvelope
    connect?: Enumerable<ProjectWhereUniqueInput>
  }

  export type NotificationCreateNestedManyWithoutSenderInput = {
    create?: XOR<Enumerable<NotificationCreateWithoutSenderInput>, Enumerable<NotificationUncheckedCreateWithoutSenderInput>>
    connectOrCreate?: Enumerable<NotificationCreateOrConnectWithoutSenderInput>
    createMany?: NotificationCreateManySenderInputEnvelope
    connect?: Enumerable<NotificationWhereUniqueInput>
  }

  export type ProjectUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutUsersInput>, Enumerable<ProjectUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutUsersInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
  }

  export type TaskUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<TaskCreateWithoutUserInput>, Enumerable<TaskUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TaskCreateOrConnectWithoutUserInput>
    createMany?: TaskCreateManyUserInputEnvelope
    connect?: Enumerable<TaskWhereUniqueInput>
  }

  export type FileUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<FileCreateWithoutUserInput>, Enumerable<FileUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<FileCreateOrConnectWithoutUserInput>
    createMany?: FileCreateManyUserInputEnvelope
    connect?: Enumerable<FileWhereUniqueInput>
  }

  export type CommentUncheckedCreateNestedManyWithoutUser_task_commentsInput = {
    create?: XOR<Enumerable<CommentCreateWithoutUser_task_commentsInput>, Enumerable<CommentUncheckedCreateWithoutUser_task_commentsInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutUser_task_commentsInput>
    createMany?: CommentCreateManyUser_task_commentsInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type CommentUncheckedCreateNestedManyWithoutUser_project_commentsInput = {
    create?: XOR<Enumerable<CommentCreateWithoutUser_project_commentsInput>, Enumerable<CommentUncheckedCreateWithoutUser_project_commentsInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutUser_project_commentsInput>
    createMany?: CommentCreateManyUser_project_commentsInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type InvitationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<InvitationCreateWithoutUserInput>, Enumerable<InvitationUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<InvitationCreateOrConnectWithoutUserInput>
    createMany?: InvitationCreateManyUserInputEnvelope
    connect?: Enumerable<InvitationWhereUniqueInput>
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<NotificationCreateWithoutUserInput>, Enumerable<NotificationUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<NotificationCreateOrConnectWithoutUserInput>
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: Enumerable<NotificationWhereUniqueInput>
  }

  export type ProjectUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutOwnerInput>, Enumerable<ProjectUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutOwnerInput>
    createMany?: ProjectCreateManyOwnerInputEnvelope
    connect?: Enumerable<ProjectWhereUniqueInput>
  }

  export type NotificationUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<Enumerable<NotificationCreateWithoutSenderInput>, Enumerable<NotificationUncheckedCreateWithoutSenderInput>>
    connectOrCreate?: Enumerable<NotificationCreateOrConnectWithoutSenderInput>
    createMany?: NotificationCreateManySenderInputEnvelope
    connect?: Enumerable<NotificationWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateroleInput = {
    set?: Enumerable<Role>
    push?: Enumerable<Role>
  }

  export type ProjectUpdateManyWithoutUsersInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutUsersInput>, Enumerable<ProjectUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<ProjectUpsertWithWhereUniqueWithoutUsersInput>
    set?: Enumerable<ProjectWhereUniqueInput>
    disconnect?: Enumerable<ProjectWhereUniqueInput>
    delete?: Enumerable<ProjectWhereUniqueInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
    update?: Enumerable<ProjectUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<ProjectUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<ProjectScalarWhereInput>
  }

  export type TaskUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<TaskCreateWithoutUserInput>, Enumerable<TaskUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TaskCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<TaskUpsertWithWhereUniqueWithoutUserInput>
    createMany?: TaskCreateManyUserInputEnvelope
    set?: Enumerable<TaskWhereUniqueInput>
    disconnect?: Enumerable<TaskWhereUniqueInput>
    delete?: Enumerable<TaskWhereUniqueInput>
    connect?: Enumerable<TaskWhereUniqueInput>
    update?: Enumerable<TaskUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<TaskUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<TaskScalarWhereInput>
  }

  export type FileUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<FileCreateWithoutUserInput>, Enumerable<FileUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<FileCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<FileUpsertWithWhereUniqueWithoutUserInput>
    createMany?: FileCreateManyUserInputEnvelope
    set?: Enumerable<FileWhereUniqueInput>
    disconnect?: Enumerable<FileWhereUniqueInput>
    delete?: Enumerable<FileWhereUniqueInput>
    connect?: Enumerable<FileWhereUniqueInput>
    update?: Enumerable<FileUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<FileUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<FileScalarWhereInput>
  }

  export type CommentUpdateManyWithoutUser_task_commentsInput = {
    create?: XOR<Enumerable<CommentCreateWithoutUser_task_commentsInput>, Enumerable<CommentUncheckedCreateWithoutUser_task_commentsInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutUser_task_commentsInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutUser_task_commentsInput>
    createMany?: CommentCreateManyUser_task_commentsInputEnvelope
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    connect?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutUser_task_commentsInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutUser_task_commentsInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type CommentUpdateManyWithoutUser_project_commentsInput = {
    create?: XOR<Enumerable<CommentCreateWithoutUser_project_commentsInput>, Enumerable<CommentUncheckedCreateWithoutUser_project_commentsInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutUser_project_commentsInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutUser_project_commentsInput>
    createMany?: CommentCreateManyUser_project_commentsInputEnvelope
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    connect?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutUser_project_commentsInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutUser_project_commentsInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type InvitationUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<InvitationCreateWithoutUserInput>, Enumerable<InvitationUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<InvitationCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<InvitationUpsertWithWhereUniqueWithoutUserInput>
    createMany?: InvitationCreateManyUserInputEnvelope
    set?: Enumerable<InvitationWhereUniqueInput>
    disconnect?: Enumerable<InvitationWhereUniqueInput>
    delete?: Enumerable<InvitationWhereUniqueInput>
    connect?: Enumerable<InvitationWhereUniqueInput>
    update?: Enumerable<InvitationUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<InvitationUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<InvitationScalarWhereInput>
  }

  export type NotificationUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<NotificationCreateWithoutUserInput>, Enumerable<NotificationUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<NotificationCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<NotificationUpsertWithWhereUniqueWithoutUserInput>
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: Enumerable<NotificationWhereUniqueInput>
    disconnect?: Enumerable<NotificationWhereUniqueInput>
    delete?: Enumerable<NotificationWhereUniqueInput>
    connect?: Enumerable<NotificationWhereUniqueInput>
    update?: Enumerable<NotificationUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<NotificationUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<NotificationScalarWhereInput>
  }

  export type ProjectUpdateManyWithoutOwnerInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutOwnerInput>, Enumerable<ProjectUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutOwnerInput>
    upsert?: Enumerable<ProjectUpsertWithWhereUniqueWithoutOwnerInput>
    createMany?: ProjectCreateManyOwnerInputEnvelope
    set?: Enumerable<ProjectWhereUniqueInput>
    disconnect?: Enumerable<ProjectWhereUniqueInput>
    delete?: Enumerable<ProjectWhereUniqueInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
    update?: Enumerable<ProjectUpdateWithWhereUniqueWithoutOwnerInput>
    updateMany?: Enumerable<ProjectUpdateManyWithWhereWithoutOwnerInput>
    deleteMany?: Enumerable<ProjectScalarWhereInput>
  }

  export type NotificationUpdateManyWithoutSenderInput = {
    create?: XOR<Enumerable<NotificationCreateWithoutSenderInput>, Enumerable<NotificationUncheckedCreateWithoutSenderInput>>
    connectOrCreate?: Enumerable<NotificationCreateOrConnectWithoutSenderInput>
    upsert?: Enumerable<NotificationUpsertWithWhereUniqueWithoutSenderInput>
    createMany?: NotificationCreateManySenderInputEnvelope
    set?: Enumerable<NotificationWhereUniqueInput>
    disconnect?: Enumerable<NotificationWhereUniqueInput>
    delete?: Enumerable<NotificationWhereUniqueInput>
    connect?: Enumerable<NotificationWhereUniqueInput>
    update?: Enumerable<NotificationUpdateWithWhereUniqueWithoutSenderInput>
    updateMany?: Enumerable<NotificationUpdateManyWithWhereWithoutSenderInput>
    deleteMany?: Enumerable<NotificationScalarWhereInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProjectUncheckedUpdateManyWithoutUsersInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutUsersInput>, Enumerable<ProjectUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<ProjectUpsertWithWhereUniqueWithoutUsersInput>
    set?: Enumerable<ProjectWhereUniqueInput>
    disconnect?: Enumerable<ProjectWhereUniqueInput>
    delete?: Enumerable<ProjectWhereUniqueInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
    update?: Enumerable<ProjectUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<ProjectUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<ProjectScalarWhereInput>
  }

  export type TaskUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<TaskCreateWithoutUserInput>, Enumerable<TaskUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TaskCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<TaskUpsertWithWhereUniqueWithoutUserInput>
    createMany?: TaskCreateManyUserInputEnvelope
    set?: Enumerable<TaskWhereUniqueInput>
    disconnect?: Enumerable<TaskWhereUniqueInput>
    delete?: Enumerable<TaskWhereUniqueInput>
    connect?: Enumerable<TaskWhereUniqueInput>
    update?: Enumerable<TaskUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<TaskUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<TaskScalarWhereInput>
  }

  export type FileUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<FileCreateWithoutUserInput>, Enumerable<FileUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<FileCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<FileUpsertWithWhereUniqueWithoutUserInput>
    createMany?: FileCreateManyUserInputEnvelope
    set?: Enumerable<FileWhereUniqueInput>
    disconnect?: Enumerable<FileWhereUniqueInput>
    delete?: Enumerable<FileWhereUniqueInput>
    connect?: Enumerable<FileWhereUniqueInput>
    update?: Enumerable<FileUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<FileUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<FileScalarWhereInput>
  }

  export type CommentUncheckedUpdateManyWithoutUser_task_commentsInput = {
    create?: XOR<Enumerable<CommentCreateWithoutUser_task_commentsInput>, Enumerable<CommentUncheckedCreateWithoutUser_task_commentsInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutUser_task_commentsInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutUser_task_commentsInput>
    createMany?: CommentCreateManyUser_task_commentsInputEnvelope
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    connect?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutUser_task_commentsInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutUser_task_commentsInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type CommentUncheckedUpdateManyWithoutUser_project_commentsInput = {
    create?: XOR<Enumerable<CommentCreateWithoutUser_project_commentsInput>, Enumerable<CommentUncheckedCreateWithoutUser_project_commentsInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutUser_project_commentsInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutUser_project_commentsInput>
    createMany?: CommentCreateManyUser_project_commentsInputEnvelope
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    connect?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutUser_project_commentsInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutUser_project_commentsInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type InvitationUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<InvitationCreateWithoutUserInput>, Enumerable<InvitationUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<InvitationCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<InvitationUpsertWithWhereUniqueWithoutUserInput>
    createMany?: InvitationCreateManyUserInputEnvelope
    set?: Enumerable<InvitationWhereUniqueInput>
    disconnect?: Enumerable<InvitationWhereUniqueInput>
    delete?: Enumerable<InvitationWhereUniqueInput>
    connect?: Enumerable<InvitationWhereUniqueInput>
    update?: Enumerable<InvitationUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<InvitationUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<InvitationScalarWhereInput>
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<NotificationCreateWithoutUserInput>, Enumerable<NotificationUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<NotificationCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<NotificationUpsertWithWhereUniqueWithoutUserInput>
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: Enumerable<NotificationWhereUniqueInput>
    disconnect?: Enumerable<NotificationWhereUniqueInput>
    delete?: Enumerable<NotificationWhereUniqueInput>
    connect?: Enumerable<NotificationWhereUniqueInput>
    update?: Enumerable<NotificationUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<NotificationUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<NotificationScalarWhereInput>
  }

  export type ProjectUncheckedUpdateManyWithoutOwnerInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutOwnerInput>, Enumerable<ProjectUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutOwnerInput>
    upsert?: Enumerable<ProjectUpsertWithWhereUniqueWithoutOwnerInput>
    createMany?: ProjectCreateManyOwnerInputEnvelope
    set?: Enumerable<ProjectWhereUniqueInput>
    disconnect?: Enumerable<ProjectWhereUniqueInput>
    delete?: Enumerable<ProjectWhereUniqueInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
    update?: Enumerable<ProjectUpdateWithWhereUniqueWithoutOwnerInput>
    updateMany?: Enumerable<ProjectUpdateManyWithWhereWithoutOwnerInput>
    deleteMany?: Enumerable<ProjectScalarWhereInput>
  }

  export type NotificationUncheckedUpdateManyWithoutSenderInput = {
    create?: XOR<Enumerable<NotificationCreateWithoutSenderInput>, Enumerable<NotificationUncheckedCreateWithoutSenderInput>>
    connectOrCreate?: Enumerable<NotificationCreateOrConnectWithoutSenderInput>
    upsert?: Enumerable<NotificationUpsertWithWhereUniqueWithoutSenderInput>
    createMany?: NotificationCreateManySenderInputEnvelope
    set?: Enumerable<NotificationWhereUniqueInput>
    disconnect?: Enumerable<NotificationWhereUniqueInput>
    delete?: Enumerable<NotificationWhereUniqueInput>
    connect?: Enumerable<NotificationWhereUniqueInput>
    update?: Enumerable<NotificationUpdateWithWhereUniqueWithoutSenderInput>
    updateMany?: Enumerable<NotificationUpdateManyWithWhereWithoutSenderInput>
    deleteMany?: Enumerable<NotificationScalarWhereInput>
  }

  export type UserCreateNestedManyWithoutProjectsInput = {
    create?: XOR<Enumerable<UserCreateWithoutProjectsInput>, Enumerable<UserUncheckedCreateWithoutProjectsInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutProjectsInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type UserCreateNestedOneWithoutOwned_projectsInput = {
    create?: XOR<UserCreateWithoutOwned_projectsInput, UserUncheckedCreateWithoutOwned_projectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwned_projectsInput
    connect?: UserWhereUniqueInput
  }

  export type TaskCreateNestedManyWithoutProjectInput = {
    create?: XOR<Enumerable<TaskCreateWithoutProjectInput>, Enumerable<TaskUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<TaskCreateOrConnectWithoutProjectInput>
    createMany?: TaskCreateManyProjectInputEnvelope
    connect?: Enumerable<TaskWhereUniqueInput>
  }

  export type FileCreateNestedManyWithoutProjectInput = {
    create?: XOR<Enumerable<FileCreateWithoutProjectInput>, Enumerable<FileUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<FileCreateOrConnectWithoutProjectInput>
    createMany?: FileCreateManyProjectInputEnvelope
    connect?: Enumerable<FileWhereUniqueInput>
  }

  export type CommentCreateNestedManyWithoutProjectInput = {
    create?: XOR<Enumerable<CommentCreateWithoutProjectInput>, Enumerable<CommentUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutProjectInput>
    createMany?: CommentCreateManyProjectInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type InvitationCreateNestedManyWithoutProjectInput = {
    create?: XOR<Enumerable<InvitationCreateWithoutProjectInput>, Enumerable<InvitationUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<InvitationCreateOrConnectWithoutProjectInput>
    createMany?: InvitationCreateManyProjectInputEnvelope
    connect?: Enumerable<InvitationWhereUniqueInput>
  }

  export type UserUncheckedCreateNestedManyWithoutProjectsInput = {
    create?: XOR<Enumerable<UserCreateWithoutProjectsInput>, Enumerable<UserUncheckedCreateWithoutProjectsInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutProjectsInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type TaskUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<Enumerable<TaskCreateWithoutProjectInput>, Enumerable<TaskUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<TaskCreateOrConnectWithoutProjectInput>
    createMany?: TaskCreateManyProjectInputEnvelope
    connect?: Enumerable<TaskWhereUniqueInput>
  }

  export type FileUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<Enumerable<FileCreateWithoutProjectInput>, Enumerable<FileUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<FileCreateOrConnectWithoutProjectInput>
    createMany?: FileCreateManyProjectInputEnvelope
    connect?: Enumerable<FileWhereUniqueInput>
  }

  export type CommentUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<Enumerable<CommentCreateWithoutProjectInput>, Enumerable<CommentUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutProjectInput>
    createMany?: CommentCreateManyProjectInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type InvitationUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<Enumerable<InvitationCreateWithoutProjectInput>, Enumerable<InvitationUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<InvitationCreateOrConnectWithoutProjectInput>
    createMany?: InvitationCreateManyProjectInputEnvelope
    connect?: Enumerable<InvitationWhereUniqueInput>
  }

  export type UserUpdateManyWithoutProjectsInput = {
    create?: XOR<Enumerable<UserCreateWithoutProjectsInput>, Enumerable<UserUncheckedCreateWithoutProjectsInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutProjectsInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutProjectsInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutProjectsInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutProjectsInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type UserUpdateOneRequiredWithoutOwned_projectsInput = {
    create?: XOR<UserCreateWithoutOwned_projectsInput, UserUncheckedCreateWithoutOwned_projectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwned_projectsInput
    upsert?: UserUpsertWithoutOwned_projectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutOwned_projectsInput, UserUncheckedUpdateWithoutOwned_projectsInput>
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: Status
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TaskUpdateManyWithoutProjectInput = {
    create?: XOR<Enumerable<TaskCreateWithoutProjectInput>, Enumerable<TaskUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<TaskCreateOrConnectWithoutProjectInput>
    upsert?: Enumerable<TaskUpsertWithWhereUniqueWithoutProjectInput>
    createMany?: TaskCreateManyProjectInputEnvelope
    set?: Enumerable<TaskWhereUniqueInput>
    disconnect?: Enumerable<TaskWhereUniqueInput>
    delete?: Enumerable<TaskWhereUniqueInput>
    connect?: Enumerable<TaskWhereUniqueInput>
    update?: Enumerable<TaskUpdateWithWhereUniqueWithoutProjectInput>
    updateMany?: Enumerable<TaskUpdateManyWithWhereWithoutProjectInput>
    deleteMany?: Enumerable<TaskScalarWhereInput>
  }

  export type FileUpdateManyWithoutProjectInput = {
    create?: XOR<Enumerable<FileCreateWithoutProjectInput>, Enumerable<FileUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<FileCreateOrConnectWithoutProjectInput>
    upsert?: Enumerable<FileUpsertWithWhereUniqueWithoutProjectInput>
    createMany?: FileCreateManyProjectInputEnvelope
    set?: Enumerable<FileWhereUniqueInput>
    disconnect?: Enumerable<FileWhereUniqueInput>
    delete?: Enumerable<FileWhereUniqueInput>
    connect?: Enumerable<FileWhereUniqueInput>
    update?: Enumerable<FileUpdateWithWhereUniqueWithoutProjectInput>
    updateMany?: Enumerable<FileUpdateManyWithWhereWithoutProjectInput>
    deleteMany?: Enumerable<FileScalarWhereInput>
  }

  export type CommentUpdateManyWithoutProjectInput = {
    create?: XOR<Enumerable<CommentCreateWithoutProjectInput>, Enumerable<CommentUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutProjectInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutProjectInput>
    createMany?: CommentCreateManyProjectInputEnvelope
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    connect?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutProjectInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutProjectInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type InvitationUpdateManyWithoutProjectInput = {
    create?: XOR<Enumerable<InvitationCreateWithoutProjectInput>, Enumerable<InvitationUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<InvitationCreateOrConnectWithoutProjectInput>
    upsert?: Enumerable<InvitationUpsertWithWhereUniqueWithoutProjectInput>
    createMany?: InvitationCreateManyProjectInputEnvelope
    set?: Enumerable<InvitationWhereUniqueInput>
    disconnect?: Enumerable<InvitationWhereUniqueInput>
    delete?: Enumerable<InvitationWhereUniqueInput>
    connect?: Enumerable<InvitationWhereUniqueInput>
    update?: Enumerable<InvitationUpdateWithWhereUniqueWithoutProjectInput>
    updateMany?: Enumerable<InvitationUpdateManyWithWhereWithoutProjectInput>
    deleteMany?: Enumerable<InvitationScalarWhereInput>
  }

  export type UserUncheckedUpdateManyWithoutProjectsInput = {
    create?: XOR<Enumerable<UserCreateWithoutProjectsInput>, Enumerable<UserUncheckedCreateWithoutProjectsInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutProjectsInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutProjectsInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutProjectsInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutProjectsInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type TaskUncheckedUpdateManyWithoutProjectInput = {
    create?: XOR<Enumerable<TaskCreateWithoutProjectInput>, Enumerable<TaskUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<TaskCreateOrConnectWithoutProjectInput>
    upsert?: Enumerable<TaskUpsertWithWhereUniqueWithoutProjectInput>
    createMany?: TaskCreateManyProjectInputEnvelope
    set?: Enumerable<TaskWhereUniqueInput>
    disconnect?: Enumerable<TaskWhereUniqueInput>
    delete?: Enumerable<TaskWhereUniqueInput>
    connect?: Enumerable<TaskWhereUniqueInput>
    update?: Enumerable<TaskUpdateWithWhereUniqueWithoutProjectInput>
    updateMany?: Enumerable<TaskUpdateManyWithWhereWithoutProjectInput>
    deleteMany?: Enumerable<TaskScalarWhereInput>
  }

  export type FileUncheckedUpdateManyWithoutProjectInput = {
    create?: XOR<Enumerable<FileCreateWithoutProjectInput>, Enumerable<FileUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<FileCreateOrConnectWithoutProjectInput>
    upsert?: Enumerable<FileUpsertWithWhereUniqueWithoutProjectInput>
    createMany?: FileCreateManyProjectInputEnvelope
    set?: Enumerable<FileWhereUniqueInput>
    disconnect?: Enumerable<FileWhereUniqueInput>
    delete?: Enumerable<FileWhereUniqueInput>
    connect?: Enumerable<FileWhereUniqueInput>
    update?: Enumerable<FileUpdateWithWhereUniqueWithoutProjectInput>
    updateMany?: Enumerable<FileUpdateManyWithWhereWithoutProjectInput>
    deleteMany?: Enumerable<FileScalarWhereInput>
  }

  export type CommentUncheckedUpdateManyWithoutProjectInput = {
    create?: XOR<Enumerable<CommentCreateWithoutProjectInput>, Enumerable<CommentUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutProjectInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutProjectInput>
    createMany?: CommentCreateManyProjectInputEnvelope
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    connect?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutProjectInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutProjectInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type InvitationUncheckedUpdateManyWithoutProjectInput = {
    create?: XOR<Enumerable<InvitationCreateWithoutProjectInput>, Enumerable<InvitationUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<InvitationCreateOrConnectWithoutProjectInput>
    upsert?: Enumerable<InvitationUpsertWithWhereUniqueWithoutProjectInput>
    createMany?: InvitationCreateManyProjectInputEnvelope
    set?: Enumerable<InvitationWhereUniqueInput>
    disconnect?: Enumerable<InvitationWhereUniqueInput>
    delete?: Enumerable<InvitationWhereUniqueInput>
    connect?: Enumerable<InvitationWhereUniqueInput>
    update?: Enumerable<InvitationUpdateWithWhereUniqueWithoutProjectInput>
    updateMany?: Enumerable<InvitationUpdateManyWithWhereWithoutProjectInput>
    deleteMany?: Enumerable<InvitationScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutTasksInput = {
    create?: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutTasksInput = {
    create?: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTasksInput
    connect?: ProjectWhereUniqueInput
  }

  export type FileCreateNestedManyWithoutTaskInput = {
    create?: XOR<Enumerable<FileCreateWithoutTaskInput>, Enumerable<FileUncheckedCreateWithoutTaskInput>>
    connectOrCreate?: Enumerable<FileCreateOrConnectWithoutTaskInput>
    createMany?: FileCreateManyTaskInputEnvelope
    connect?: Enumerable<FileWhereUniqueInput>
  }

  export type CommentCreateNestedManyWithoutTaskInput = {
    create?: XOR<Enumerable<CommentCreateWithoutTaskInput>, Enumerable<CommentUncheckedCreateWithoutTaskInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutTaskInput>
    createMany?: CommentCreateManyTaskInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type FileUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<Enumerable<FileCreateWithoutTaskInput>, Enumerable<FileUncheckedCreateWithoutTaskInput>>
    connectOrCreate?: Enumerable<FileCreateOrConnectWithoutTaskInput>
    createMany?: FileCreateManyTaskInputEnvelope
    connect?: Enumerable<FileWhereUniqueInput>
  }

  export type CommentUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<Enumerable<CommentCreateWithoutTaskInput>, Enumerable<CommentUncheckedCreateWithoutTaskInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutTaskInput>
    createMany?: CommentCreateManyTaskInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type UserUpdateOneWithoutTasksInput = {
    create?: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput
    upsert?: UserUpsertWithoutTasksInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutTasksInput, UserUncheckedUpdateWithoutTasksInput>
  }

  export type ProjectUpdateOneRequiredWithoutTasksInput = {
    create?: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTasksInput
    upsert?: ProjectUpsertWithoutTasksInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<ProjectUpdateWithoutTasksInput, ProjectUncheckedUpdateWithoutTasksInput>
  }

  export type FileUpdateManyWithoutTaskInput = {
    create?: XOR<Enumerable<FileCreateWithoutTaskInput>, Enumerable<FileUncheckedCreateWithoutTaskInput>>
    connectOrCreate?: Enumerable<FileCreateOrConnectWithoutTaskInput>
    upsert?: Enumerable<FileUpsertWithWhereUniqueWithoutTaskInput>
    createMany?: FileCreateManyTaskInputEnvelope
    set?: Enumerable<FileWhereUniqueInput>
    disconnect?: Enumerable<FileWhereUniqueInput>
    delete?: Enumerable<FileWhereUniqueInput>
    connect?: Enumerable<FileWhereUniqueInput>
    update?: Enumerable<FileUpdateWithWhereUniqueWithoutTaskInput>
    updateMany?: Enumerable<FileUpdateManyWithWhereWithoutTaskInput>
    deleteMany?: Enumerable<FileScalarWhereInput>
  }

  export type CommentUpdateManyWithoutTaskInput = {
    create?: XOR<Enumerable<CommentCreateWithoutTaskInput>, Enumerable<CommentUncheckedCreateWithoutTaskInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutTaskInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutTaskInput>
    createMany?: CommentCreateManyTaskInputEnvelope
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    connect?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutTaskInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutTaskInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type FileUncheckedUpdateManyWithoutTaskInput = {
    create?: XOR<Enumerable<FileCreateWithoutTaskInput>, Enumerable<FileUncheckedCreateWithoutTaskInput>>
    connectOrCreate?: Enumerable<FileCreateOrConnectWithoutTaskInput>
    upsert?: Enumerable<FileUpsertWithWhereUniqueWithoutTaskInput>
    createMany?: FileCreateManyTaskInputEnvelope
    set?: Enumerable<FileWhereUniqueInput>
    disconnect?: Enumerable<FileWhereUniqueInput>
    delete?: Enumerable<FileWhereUniqueInput>
    connect?: Enumerable<FileWhereUniqueInput>
    update?: Enumerable<FileUpdateWithWhereUniqueWithoutTaskInput>
    updateMany?: Enumerable<FileUpdateManyWithWhereWithoutTaskInput>
    deleteMany?: Enumerable<FileScalarWhereInput>
  }

  export type CommentUncheckedUpdateManyWithoutTaskInput = {
    create?: XOR<Enumerable<CommentCreateWithoutTaskInput>, Enumerable<CommentUncheckedCreateWithoutTaskInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutTaskInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutTaskInput>
    createMany?: CommentCreateManyTaskInputEnvelope
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    connect?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutTaskInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutTaskInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type ProjectCreateNestedOneWithoutCommentsInput = {
    create?: XOR<ProjectCreateWithoutCommentsInput, ProjectUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutCommentsInput
    connect?: ProjectWhereUniqueInput
  }

  export type TaskCreateNestedOneWithoutCommentsInput = {
    create?: XOR<TaskCreateWithoutCommentsInput, TaskUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutCommentsInput
    connect?: TaskWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTask_commentsInput = {
    create?: XOR<UserCreateWithoutTask_commentsInput, UserUncheckedCreateWithoutTask_commentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTask_commentsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutProject_commentsInput = {
    create?: XOR<UserCreateWithoutProject_commentsInput, UserUncheckedCreateWithoutProject_commentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProject_commentsInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectUpdateOneWithoutCommentsInput = {
    create?: XOR<ProjectCreateWithoutCommentsInput, ProjectUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutCommentsInput
    upsert?: ProjectUpsertWithoutCommentsInput
    disconnect?: boolean
    delete?: boolean
    connect?: ProjectWhereUniqueInput
    update?: XOR<ProjectUpdateWithoutCommentsInput, ProjectUncheckedUpdateWithoutCommentsInput>
  }

  export type TaskUpdateOneWithoutCommentsInput = {
    create?: XOR<TaskCreateWithoutCommentsInput, TaskUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutCommentsInput
    upsert?: TaskUpsertWithoutCommentsInput
    disconnect?: boolean
    delete?: boolean
    connect?: TaskWhereUniqueInput
    update?: XOR<TaskUpdateWithoutCommentsInput, TaskUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateOneWithoutTask_commentsInput = {
    create?: XOR<UserCreateWithoutTask_commentsInput, UserUncheckedCreateWithoutTask_commentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTask_commentsInput
    upsert?: UserUpsertWithoutTask_commentsInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutTask_commentsInput, UserUncheckedUpdateWithoutTask_commentsInput>
  }

  export type UserUpdateOneWithoutProject_commentsInput = {
    create?: XOR<UserCreateWithoutProject_commentsInput, UserUncheckedCreateWithoutProject_commentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProject_commentsInput
    upsert?: UserUpsertWithoutProject_commentsInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutProject_commentsInput, UserUncheckedUpdateWithoutProject_commentsInput>
  }

  export type UserCreateNestedOneWithoutFilesInput = {
    create?: XOR<UserCreateWithoutFilesInput, UserUncheckedCreateWithoutFilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFilesInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutFilesInput = {
    create?: XOR<ProjectCreateWithoutFilesInput, ProjectUncheckedCreateWithoutFilesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutFilesInput
    connect?: ProjectWhereUniqueInput
  }

  export type TaskCreateNestedOneWithoutFilesInput = {
    create?: XOR<TaskCreateWithoutFilesInput, TaskUncheckedCreateWithoutFilesInput>
    connectOrCreate?: TaskCreateOrConnectWithoutFilesInput
    connect?: TaskWhereUniqueInput
  }

  export type UserUpdateOneWithoutFilesInput = {
    create?: XOR<UserCreateWithoutFilesInput, UserUncheckedCreateWithoutFilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFilesInput
    upsert?: UserUpsertWithoutFilesInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutFilesInput, UserUncheckedUpdateWithoutFilesInput>
  }

  export type ProjectUpdateOneRequiredWithoutFilesInput = {
    create?: XOR<ProjectCreateWithoutFilesInput, ProjectUncheckedCreateWithoutFilesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutFilesInput
    upsert?: ProjectUpsertWithoutFilesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<ProjectUpdateWithoutFilesInput, ProjectUncheckedUpdateWithoutFilesInput>
  }

  export type TaskUpdateOneWithoutFilesInput = {
    create?: XOR<TaskCreateWithoutFilesInput, TaskUncheckedCreateWithoutFilesInput>
    connectOrCreate?: TaskCreateOrConnectWithoutFilesInput
    upsert?: TaskUpsertWithoutFilesInput
    disconnect?: boolean
    delete?: boolean
    connect?: TaskWhereUniqueInput
    update?: XOR<TaskUpdateWithoutFilesInput, TaskUncheckedUpdateWithoutFilesInput>
  }

  export type ProjectCreateNestedOneWithoutInvitationsInput = {
    create?: XOR<ProjectCreateWithoutInvitationsInput, ProjectUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutInvitationsInput
    connect?: ProjectWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutInvitationsInput = {
    create?: XOR<UserCreateWithoutInvitationsInput, UserUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvitationsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumStatus_InvitationFieldUpdateOperationsInput = {
    set?: Status_Invitation
  }

  export type ProjectUpdateOneRequiredWithoutInvitationsInput = {
    create?: XOR<ProjectCreateWithoutInvitationsInput, ProjectUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutInvitationsInput
    upsert?: ProjectUpsertWithoutInvitationsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<ProjectUpdateWithoutInvitationsInput, ProjectUncheckedUpdateWithoutInvitationsInput>
  }

  export type UserUpdateOneWithoutInvitationsInput = {
    create?: XOR<UserCreateWithoutInvitationsInput, UserUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvitationsInput
    upsert?: UserUpsertWithoutInvitationsInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutInvitationsInput, UserUncheckedUpdateWithoutInvitationsInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutNotifications_sentInput = {
    create?: XOR<UserCreateWithoutNotifications_sentInput, UserUncheckedCreateWithoutNotifications_sentInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotifications_sentInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type EnumType_NotificationFieldUpdateOperationsInput = {
    set?: Type_Notification
  }

  export type EnumStatus_NotificationFieldUpdateOperationsInput = {
    set?: Status_Notification
  }

  export type UserUpdateOneRequiredWithoutNotifications_sentInput = {
    create?: XOR<UserCreateWithoutNotifications_sentInput, UserUncheckedCreateWithoutNotifications_sentInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotifications_sentInput
    upsert?: UserUpsertWithoutNotifications_sentInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutNotifications_sentInput, UserUncheckedUpdateWithoutNotifications_sentInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedEnumStatusFilter = {
    equals?: Status
    in?: Enumerable<Status>
    notIn?: Enumerable<Status>
    not?: NestedEnumStatusFilter | Status
  }

  export type NestedEnumStatusWithAggregatesFilter = {
    equals?: Status
    in?: Enumerable<Status>
    notIn?: Enumerable<Status>
    not?: NestedEnumStatusWithAggregatesFilter | Status
    _count?: NestedIntFilter
    _min?: NestedEnumStatusFilter
    _max?: NestedEnumStatusFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedEnumStatus_InvitationFilter = {
    equals?: Status_Invitation
    in?: Enumerable<Status_Invitation>
    notIn?: Enumerable<Status_Invitation>
    not?: NestedEnumStatus_InvitationFilter | Status_Invitation
  }

  export type NestedEnumStatus_InvitationWithAggregatesFilter = {
    equals?: Status_Invitation
    in?: Enumerable<Status_Invitation>
    notIn?: Enumerable<Status_Invitation>
    not?: NestedEnumStatus_InvitationWithAggregatesFilter | Status_Invitation
    _count?: NestedIntFilter
    _min?: NestedEnumStatus_InvitationFilter
    _max?: NestedEnumStatus_InvitationFilter
  }

  export type NestedEnumType_NotificationFilter = {
    equals?: Type_Notification
    in?: Enumerable<Type_Notification>
    notIn?: Enumerable<Type_Notification>
    not?: NestedEnumType_NotificationFilter | Type_Notification
  }

  export type NestedEnumStatus_NotificationFilter = {
    equals?: Status_Notification
    in?: Enumerable<Status_Notification>
    notIn?: Enumerable<Status_Notification>
    not?: NestedEnumStatus_NotificationFilter | Status_Notification
  }

  export type NestedEnumType_NotificationWithAggregatesFilter = {
    equals?: Type_Notification
    in?: Enumerable<Type_Notification>
    notIn?: Enumerable<Type_Notification>
    not?: NestedEnumType_NotificationWithAggregatesFilter | Type_Notification
    _count?: NestedIntFilter
    _min?: NestedEnumType_NotificationFilter
    _max?: NestedEnumType_NotificationFilter
  }

  export type NestedEnumStatus_NotificationWithAggregatesFilter = {
    equals?: Status_Notification
    in?: Enumerable<Status_Notification>
    notIn?: Enumerable<Status_Notification>
    not?: NestedEnumStatus_NotificationWithAggregatesFilter | Status_Notification
    _count?: NestedIntFilter
    _min?: NestedEnumStatus_NotificationFilter
    _max?: NestedEnumStatus_NotificationFilter
  }

  export type ProjectCreateWithoutUsersInput = {
    id?: string
    owner: UserCreateNestedOneWithoutOwned_projectsInput
    title: string
    description: string
    private: boolean
    is_disabled: boolean
    status_project: Status
    total_time_spent?: number
    start_date: Date | string
    end_date: Date | string
    due_date: Date | string
    tasks?: TaskCreateNestedManyWithoutProjectInput
    files?: FileCreateNestedManyWithoutProjectInput
    comments?: CommentCreateNestedManyWithoutProjectInput
    invitations?: InvitationCreateNestedManyWithoutProjectInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProjectUncheckedCreateWithoutUsersInput = {
    id?: string
    project_owner_id: string
    title: string
    description: string
    private: boolean
    is_disabled: boolean
    status_project: Status
    total_time_spent?: number
    start_date: Date | string
    end_date: Date | string
    due_date: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
    files?: FileUncheckedCreateNestedManyWithoutProjectInput
    comments?: CommentUncheckedCreateNestedManyWithoutProjectInput
    invitations?: InvitationUncheckedCreateNestedManyWithoutProjectInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProjectCreateOrConnectWithoutUsersInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutUsersInput, ProjectUncheckedCreateWithoutUsersInput>
  }

  export type TaskCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    private: boolean
    is_disabled: boolean
    status_task: Status
    total_time_spent: number
    start_date: Date | string
    end_date: Date | string
    project: ProjectCreateNestedOneWithoutTasksInput
    files?: FileCreateNestedManyWithoutTaskInput
    comments?: CommentCreateNestedManyWithoutTaskInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TaskUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    private: boolean
    is_disabled: boolean
    status_task: Status
    total_time_spent: number
    start_date: Date | string
    end_date: Date | string
    project_id: string
    files?: FileUncheckedCreateNestedManyWithoutTaskInput
    comments?: CommentUncheckedCreateNestedManyWithoutTaskInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TaskCreateOrConnectWithoutUserInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput>
  }

  export type TaskCreateManyUserInputEnvelope = {
    data: Enumerable<TaskCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type FileCreateWithoutUserInput = {
    id?: string
    name: string
    path: string
    size: number
    type: string
    project: ProjectCreateNestedOneWithoutFilesInput
    task?: TaskCreateNestedOneWithoutFilesInput
    is_disabled: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FileUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    path: string
    size: number
    type: string
    project_id: string
    task_id?: string | null
    is_disabled: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FileCreateOrConnectWithoutUserInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutUserInput, FileUncheckedCreateWithoutUserInput>
  }

  export type FileCreateManyUserInputEnvelope = {
    data: Enumerable<FileCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutUser_task_commentsInput = {
    id?: string
    is_disabled: boolean
    content: string
    project?: ProjectCreateNestedOneWithoutCommentsInput
    task?: TaskCreateNestedOneWithoutCommentsInput
    user_project_comments?: UserCreateNestedOneWithoutProject_commentsInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CommentUncheckedCreateWithoutUser_task_commentsInput = {
    id?: string
    is_disabled: boolean
    content: string
    task_comment_user_id?: string | null
    project_id?: string | null
    task_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CommentCreateOrConnectWithoutUser_task_commentsInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUser_task_commentsInput, CommentUncheckedCreateWithoutUser_task_commentsInput>
  }

  export type CommentCreateManyUser_task_commentsInputEnvelope = {
    data: Enumerable<CommentCreateManyUser_task_commentsInput>
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutUser_project_commentsInput = {
    id?: string
    is_disabled: boolean
    content: string
    project?: ProjectCreateNestedOneWithoutCommentsInput
    task?: TaskCreateNestedOneWithoutCommentsInput
    user_task_comments?: UserCreateNestedOneWithoutTask_commentsInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CommentUncheckedCreateWithoutUser_project_commentsInput = {
    id?: string
    is_disabled: boolean
    content: string
    project_id?: string | null
    task_id?: string | null
    project_comment_user_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CommentCreateOrConnectWithoutUser_project_commentsInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUser_project_commentsInput, CommentUncheckedCreateWithoutUser_project_commentsInput>
  }

  export type CommentCreateManyUser_project_commentsInputEnvelope = {
    data: Enumerable<CommentCreateManyUser_project_commentsInput>
    skipDuplicates?: boolean
  }

  export type InvitationCreateWithoutUserInput = {
    id?: string
    status: Status_Invitation
    email: string
    project: ProjectCreateNestedOneWithoutInvitationsInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type InvitationUncheckedCreateWithoutUserInput = {
    id?: string
    status: Status_Invitation
    email: string
    project_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type InvitationCreateOrConnectWithoutUserInput = {
    where: InvitationWhereUniqueInput
    create: XOR<InvitationCreateWithoutUserInput, InvitationUncheckedCreateWithoutUserInput>
  }

  export type InvitationCreateManyUserInputEnvelope = {
    data: Enumerable<InvitationCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    is_disabled: boolean
    title: string
    content: string
    type: Type_Notification
    status: Status_Notification
    reference_id: string
    sender: UserCreateNestedOneWithoutNotifications_sentInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    is_disabled: boolean
    title: string
    content: string
    type: Type_Notification
    status: Status_Notification
    reference_id: string
    sender_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: Enumerable<NotificationCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutOwnerInput = {
    id?: string
    users?: UserCreateNestedManyWithoutProjectsInput
    title: string
    description: string
    private: boolean
    is_disabled: boolean
    status_project: Status
    total_time_spent?: number
    start_date: Date | string
    end_date: Date | string
    due_date: Date | string
    tasks?: TaskCreateNestedManyWithoutProjectInput
    files?: FileCreateNestedManyWithoutProjectInput
    comments?: CommentCreateNestedManyWithoutProjectInput
    invitations?: InvitationCreateNestedManyWithoutProjectInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProjectUncheckedCreateWithoutOwnerInput = {
    id?: string
    users?: UserUncheckedCreateNestedManyWithoutProjectsInput
    title: string
    description: string
    private: boolean
    is_disabled: boolean
    status_project: Status
    total_time_spent?: number
    start_date: Date | string
    end_date: Date | string
    due_date: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
    files?: FileUncheckedCreateNestedManyWithoutProjectInput
    comments?: CommentUncheckedCreateNestedManyWithoutProjectInput
    invitations?: InvitationUncheckedCreateNestedManyWithoutProjectInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProjectCreateOrConnectWithoutOwnerInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput>
  }

  export type ProjectCreateManyOwnerInputEnvelope = {
    data: Enumerable<ProjectCreateManyOwnerInput>
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutSenderInput = {
    id?: string
    is_disabled: boolean
    title: string
    content: string
    user?: UserCreateNestedOneWithoutNotificationsInput
    type: Type_Notification
    status: Status_Notification
    reference_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type NotificationUncheckedCreateWithoutSenderInput = {
    id?: string
    is_disabled: boolean
    title: string
    content: string
    user_id?: string | null
    type: Type_Notification
    status: Status_Notification
    reference_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type NotificationCreateOrConnectWithoutSenderInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutSenderInput, NotificationUncheckedCreateWithoutSenderInput>
  }

  export type NotificationCreateManySenderInputEnvelope = {
    data: Enumerable<NotificationCreateManySenderInput>
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithWhereUniqueWithoutUsersInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutUsersInput, ProjectUncheckedUpdateWithoutUsersInput>
    create: XOR<ProjectCreateWithoutUsersInput, ProjectUncheckedCreateWithoutUsersInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutUsersInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutUsersInput, ProjectUncheckedUpdateWithoutUsersInput>
  }

  export type ProjectUpdateManyWithWhereWithoutUsersInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutProjectsInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: Enumerable<ProjectScalarWhereInput>
    OR?: Enumerable<ProjectScalarWhereInput>
    NOT?: Enumerable<ProjectScalarWhereInput>
    id?: StringFilter | string
    project_owner_id?: StringFilter | string
    title?: StringFilter | string
    description?: StringFilter | string
    private?: BoolFilter | boolean
    is_disabled?: BoolFilter | boolean
    status_project?: EnumStatusFilter | Status
    total_time_spent?: IntFilter | number
    start_date?: DateTimeFilter | Date | string
    end_date?: DateTimeFilter | Date | string
    due_date?: DateTimeFilter | Date | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type TaskUpsertWithWhereUniqueWithoutUserInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutUserInput, TaskUncheckedUpdateWithoutUserInput>
    create: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutUserInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutUserInput, TaskUncheckedUpdateWithoutUserInput>
  }

  export type TaskUpdateManyWithWhereWithoutUserInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutTasksInput>
  }

  export type TaskScalarWhereInput = {
    AND?: Enumerable<TaskScalarWhereInput>
    OR?: Enumerable<TaskScalarWhereInput>
    NOT?: Enumerable<TaskScalarWhereInput>
    id?: StringFilter | string
    title?: StringFilter | string
    description?: StringFilter | string
    private?: BoolFilter | boolean
    is_disabled?: BoolFilter | boolean
    status_task?: EnumStatusFilter | Status
    total_time_spent?: IntFilter | number
    start_date?: DateTimeFilter | Date | string
    end_date?: DateTimeFilter | Date | string
    user_id?: StringNullableFilter | string | null
    project_id?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type FileUpsertWithWhereUniqueWithoutUserInput = {
    where: FileWhereUniqueInput
    update: XOR<FileUpdateWithoutUserInput, FileUncheckedUpdateWithoutUserInput>
    create: XOR<FileCreateWithoutUserInput, FileUncheckedCreateWithoutUserInput>
  }

  export type FileUpdateWithWhereUniqueWithoutUserInput = {
    where: FileWhereUniqueInput
    data: XOR<FileUpdateWithoutUserInput, FileUncheckedUpdateWithoutUserInput>
  }

  export type FileUpdateManyWithWhereWithoutUserInput = {
    where: FileScalarWhereInput
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyWithoutFilesInput>
  }

  export type FileScalarWhereInput = {
    AND?: Enumerable<FileScalarWhereInput>
    OR?: Enumerable<FileScalarWhereInput>
    NOT?: Enumerable<FileScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    path?: StringFilter | string
    size?: IntFilter | number
    type?: StringFilter | string
    user_id?: StringNullableFilter | string | null
    project_id?: StringFilter | string
    task_id?: StringNullableFilter | string | null
    is_disabled?: BoolFilter | boolean
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutUser_task_commentsInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutUser_task_commentsInput, CommentUncheckedUpdateWithoutUser_task_commentsInput>
    create: XOR<CommentCreateWithoutUser_task_commentsInput, CommentUncheckedCreateWithoutUser_task_commentsInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutUser_task_commentsInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutUser_task_commentsInput, CommentUncheckedUpdateWithoutUser_task_commentsInput>
  }

  export type CommentUpdateManyWithWhereWithoutUser_task_commentsInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutTask_commentsInput>
  }

  export type CommentScalarWhereInput = {
    AND?: Enumerable<CommentScalarWhereInput>
    OR?: Enumerable<CommentScalarWhereInput>
    NOT?: Enumerable<CommentScalarWhereInput>
    id?: StringFilter | string
    is_disabled?: BoolFilter | boolean
    content?: StringFilter | string
    task_comment_user_id?: StringNullableFilter | string | null
    project_id?: StringNullableFilter | string | null
    task_id?: StringNullableFilter | string | null
    project_comment_user_id?: StringNullableFilter | string | null
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutUser_project_commentsInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutUser_project_commentsInput, CommentUncheckedUpdateWithoutUser_project_commentsInput>
    create: XOR<CommentCreateWithoutUser_project_commentsInput, CommentUncheckedCreateWithoutUser_project_commentsInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutUser_project_commentsInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutUser_project_commentsInput, CommentUncheckedUpdateWithoutUser_project_commentsInput>
  }

  export type CommentUpdateManyWithWhereWithoutUser_project_commentsInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutProject_commentsInput>
  }

  export type InvitationUpsertWithWhereUniqueWithoutUserInput = {
    where: InvitationWhereUniqueInput
    update: XOR<InvitationUpdateWithoutUserInput, InvitationUncheckedUpdateWithoutUserInput>
    create: XOR<InvitationCreateWithoutUserInput, InvitationUncheckedCreateWithoutUserInput>
  }

  export type InvitationUpdateWithWhereUniqueWithoutUserInput = {
    where: InvitationWhereUniqueInput
    data: XOR<InvitationUpdateWithoutUserInput, InvitationUncheckedUpdateWithoutUserInput>
  }

  export type InvitationUpdateManyWithWhereWithoutUserInput = {
    where: InvitationScalarWhereInput
    data: XOR<InvitationUpdateManyMutationInput, InvitationUncheckedUpdateManyWithoutInvitationsInput>
  }

  export type InvitationScalarWhereInput = {
    AND?: Enumerable<InvitationScalarWhereInput>
    OR?: Enumerable<InvitationScalarWhereInput>
    NOT?: Enumerable<InvitationScalarWhereInput>
    id?: StringFilter | string
    status?: EnumStatus_InvitationFilter | Status_Invitation
    email?: StringFilter | string
    project_id?: StringFilter | string
    user_id?: StringNullableFilter | string | null
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutNotificationsInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: Enumerable<NotificationScalarWhereInput>
    OR?: Enumerable<NotificationScalarWhereInput>
    NOT?: Enumerable<NotificationScalarWhereInput>
    id?: StringFilter | string
    is_disabled?: BoolFilter | boolean
    title?: StringFilter | string
    content?: StringFilter | string
    user_id?: StringNullableFilter | string | null
    type?: EnumType_NotificationFilter | Type_Notification
    status?: EnumStatus_NotificationFilter | Status_Notification
    reference_id?: StringFilter | string
    sender_id?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type ProjectUpsertWithWhereUniqueWithoutOwnerInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutOwnerInput, ProjectUncheckedUpdateWithoutOwnerInput>
    create: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutOwnerInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutOwnerInput, ProjectUncheckedUpdateWithoutOwnerInput>
  }

  export type ProjectUpdateManyWithWhereWithoutOwnerInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutOwned_projectsInput>
  }

  export type NotificationUpsertWithWhereUniqueWithoutSenderInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutSenderInput, NotificationUncheckedUpdateWithoutSenderInput>
    create: XOR<NotificationCreateWithoutSenderInput, NotificationUncheckedCreateWithoutSenderInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutSenderInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutSenderInput, NotificationUncheckedUpdateWithoutSenderInput>
  }

  export type NotificationUpdateManyWithWhereWithoutSenderInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutNotifications_sentInput>
  }

  export type UserCreateWithoutProjectsInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password: string
    is_disabled: boolean
    avatar?: string | null
    role?: UserCreateroleInput | Enumerable<Role>
    tasks?: TaskCreateNestedManyWithoutUserInput
    files?: FileCreateNestedManyWithoutUserInput
    task_comments?: CommentCreateNestedManyWithoutUser_task_commentsInput
    project_comments?: CommentCreateNestedManyWithoutUser_project_commentsInput
    invitations?: InvitationCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    owned_projects?: ProjectCreateNestedManyWithoutOwnerInput
    notifications_sent?: NotificationCreateNestedManyWithoutSenderInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUncheckedCreateWithoutProjectsInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password: string
    is_disabled: boolean
    avatar?: string | null
    role?: UserCreateroleInput | Enumerable<Role>
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    files?: FileUncheckedCreateNestedManyWithoutUserInput
    task_comments?: CommentUncheckedCreateNestedManyWithoutUser_task_commentsInput
    project_comments?: CommentUncheckedCreateNestedManyWithoutUser_project_commentsInput
    invitations?: InvitationUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    owned_projects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    notifications_sent?: NotificationUncheckedCreateNestedManyWithoutSenderInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserCreateOrConnectWithoutProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
  }

  export type UserCreateWithoutOwned_projectsInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password: string
    is_disabled: boolean
    avatar?: string | null
    role?: UserCreateroleInput | Enumerable<Role>
    projects?: ProjectCreateNestedManyWithoutUsersInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    files?: FileCreateNestedManyWithoutUserInput
    task_comments?: CommentCreateNestedManyWithoutUser_task_commentsInput
    project_comments?: CommentCreateNestedManyWithoutUser_project_commentsInput
    invitations?: InvitationCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    notifications_sent?: NotificationCreateNestedManyWithoutSenderInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUncheckedCreateWithoutOwned_projectsInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password: string
    is_disabled: boolean
    avatar?: string | null
    role?: UserCreateroleInput | Enumerable<Role>
    projects?: ProjectUncheckedCreateNestedManyWithoutUsersInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    files?: FileUncheckedCreateNestedManyWithoutUserInput
    task_comments?: CommentUncheckedCreateNestedManyWithoutUser_task_commentsInput
    project_comments?: CommentUncheckedCreateNestedManyWithoutUser_project_commentsInput
    invitations?: InvitationUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    notifications_sent?: NotificationUncheckedCreateNestedManyWithoutSenderInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserCreateOrConnectWithoutOwned_projectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwned_projectsInput, UserUncheckedCreateWithoutOwned_projectsInput>
  }

  export type TaskCreateWithoutProjectInput = {
    id?: string
    title: string
    description: string
    private: boolean
    is_disabled: boolean
    status_task: Status
    total_time_spent: number
    start_date: Date | string
    end_date: Date | string
    user?: UserCreateNestedOneWithoutTasksInput
    files?: FileCreateNestedManyWithoutTaskInput
    comments?: CommentCreateNestedManyWithoutTaskInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TaskUncheckedCreateWithoutProjectInput = {
    id?: string
    title: string
    description: string
    private: boolean
    is_disabled: boolean
    status_task: Status
    total_time_spent: number
    start_date: Date | string
    end_date: Date | string
    user_id?: string | null
    files?: FileUncheckedCreateNestedManyWithoutTaskInput
    comments?: CommentUncheckedCreateNestedManyWithoutTaskInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TaskCreateOrConnectWithoutProjectInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput>
  }

  export type TaskCreateManyProjectInputEnvelope = {
    data: Enumerable<TaskCreateManyProjectInput>
    skipDuplicates?: boolean
  }

  export type FileCreateWithoutProjectInput = {
    id?: string
    name: string
    path: string
    size: number
    type: string
    user?: UserCreateNestedOneWithoutFilesInput
    task?: TaskCreateNestedOneWithoutFilesInput
    is_disabled: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FileUncheckedCreateWithoutProjectInput = {
    id?: string
    name: string
    path: string
    size: number
    type: string
    user_id?: string | null
    task_id?: string | null
    is_disabled: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FileCreateOrConnectWithoutProjectInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutProjectInput, FileUncheckedCreateWithoutProjectInput>
  }

  export type FileCreateManyProjectInputEnvelope = {
    data: Enumerable<FileCreateManyProjectInput>
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutProjectInput = {
    id?: string
    is_disabled: boolean
    content: string
    task?: TaskCreateNestedOneWithoutCommentsInput
    user_task_comments?: UserCreateNestedOneWithoutTask_commentsInput
    user_project_comments?: UserCreateNestedOneWithoutProject_commentsInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CommentUncheckedCreateWithoutProjectInput = {
    id?: string
    is_disabled: boolean
    content: string
    task_comment_user_id?: string | null
    task_id?: string | null
    project_comment_user_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CommentCreateOrConnectWithoutProjectInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutProjectInput, CommentUncheckedCreateWithoutProjectInput>
  }

  export type CommentCreateManyProjectInputEnvelope = {
    data: Enumerable<CommentCreateManyProjectInput>
    skipDuplicates?: boolean
  }

  export type InvitationCreateWithoutProjectInput = {
    id?: string
    status: Status_Invitation
    email: string
    user?: UserCreateNestedOneWithoutInvitationsInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type InvitationUncheckedCreateWithoutProjectInput = {
    id?: string
    status: Status_Invitation
    email: string
    user_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type InvitationCreateOrConnectWithoutProjectInput = {
    where: InvitationWhereUniqueInput
    create: XOR<InvitationCreateWithoutProjectInput, InvitationUncheckedCreateWithoutProjectInput>
  }

  export type InvitationCreateManyProjectInputEnvelope = {
    data: Enumerable<InvitationCreateManyProjectInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutProjectsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutProjectsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type UserUpdateManyWithWhereWithoutProjectsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUsersInput>
  }

  export type UserScalarWhereInput = {
    AND?: Enumerable<UserScalarWhereInput>
    OR?: Enumerable<UserScalarWhereInput>
    NOT?: Enumerable<UserScalarWhereInput>
    id?: StringFilter | string
    first_name?: StringFilter | string
    last_name?: StringFilter | string
    email?: StringFilter | string
    password?: StringFilter | string
    is_disabled?: BoolFilter | boolean
    avatar?: StringNullableFilter | string | null
    role?: EnumRoleNullableListFilter
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type UserUpsertWithoutOwned_projectsInput = {
    update: XOR<UserUpdateWithoutOwned_projectsInput, UserUncheckedUpdateWithoutOwned_projectsInput>
    create: XOR<UserCreateWithoutOwned_projectsInput, UserUncheckedCreateWithoutOwned_projectsInput>
  }

  export type UserUpdateWithoutOwned_projectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: UserUpdateroleInput | Enumerable<Role>
    projects?: ProjectUpdateManyWithoutUsersInput
    tasks?: TaskUpdateManyWithoutUserInput
    files?: FileUpdateManyWithoutUserInput
    task_comments?: CommentUpdateManyWithoutUser_task_commentsInput
    project_comments?: CommentUpdateManyWithoutUser_project_commentsInput
    invitations?: InvitationUpdateManyWithoutUserInput
    notifications?: NotificationUpdateManyWithoutUserInput
    notifications_sent?: NotificationUpdateManyWithoutSenderInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutOwned_projectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: UserUpdateroleInput | Enumerable<Role>
    projects?: ProjectUncheckedUpdateManyWithoutUsersInput
    tasks?: TaskUncheckedUpdateManyWithoutUserInput
    files?: FileUncheckedUpdateManyWithoutUserInput
    task_comments?: CommentUncheckedUpdateManyWithoutUser_task_commentsInput
    project_comments?: CommentUncheckedUpdateManyWithoutUser_project_commentsInput
    invitations?: InvitationUncheckedUpdateManyWithoutUserInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserInput
    notifications_sent?: NotificationUncheckedUpdateManyWithoutSenderInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUpsertWithWhereUniqueWithoutProjectInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutProjectInput, TaskUncheckedUpdateWithoutProjectInput>
    create: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutProjectInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutProjectInput, TaskUncheckedUpdateWithoutProjectInput>
  }

  export type TaskUpdateManyWithWhereWithoutProjectInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutTasksInput>
  }

  export type FileUpsertWithWhereUniqueWithoutProjectInput = {
    where: FileWhereUniqueInput
    update: XOR<FileUpdateWithoutProjectInput, FileUncheckedUpdateWithoutProjectInput>
    create: XOR<FileCreateWithoutProjectInput, FileUncheckedCreateWithoutProjectInput>
  }

  export type FileUpdateWithWhereUniqueWithoutProjectInput = {
    where: FileWhereUniqueInput
    data: XOR<FileUpdateWithoutProjectInput, FileUncheckedUpdateWithoutProjectInput>
  }

  export type FileUpdateManyWithWhereWithoutProjectInput = {
    where: FileScalarWhereInput
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyWithoutFilesInput>
  }

  export type CommentUpsertWithWhereUniqueWithoutProjectInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutProjectInput, CommentUncheckedUpdateWithoutProjectInput>
    create: XOR<CommentCreateWithoutProjectInput, CommentUncheckedCreateWithoutProjectInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutProjectInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutProjectInput, CommentUncheckedUpdateWithoutProjectInput>
  }

  export type CommentUpdateManyWithWhereWithoutProjectInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutCommentsInput>
  }

  export type InvitationUpsertWithWhereUniqueWithoutProjectInput = {
    where: InvitationWhereUniqueInput
    update: XOR<InvitationUpdateWithoutProjectInput, InvitationUncheckedUpdateWithoutProjectInput>
    create: XOR<InvitationCreateWithoutProjectInput, InvitationUncheckedCreateWithoutProjectInput>
  }

  export type InvitationUpdateWithWhereUniqueWithoutProjectInput = {
    where: InvitationWhereUniqueInput
    data: XOR<InvitationUpdateWithoutProjectInput, InvitationUncheckedUpdateWithoutProjectInput>
  }

  export type InvitationUpdateManyWithWhereWithoutProjectInput = {
    where: InvitationScalarWhereInput
    data: XOR<InvitationUpdateManyMutationInput, InvitationUncheckedUpdateManyWithoutInvitationsInput>
  }

  export type UserCreateWithoutTasksInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password: string
    is_disabled: boolean
    avatar?: string | null
    role?: UserCreateroleInput | Enumerable<Role>
    projects?: ProjectCreateNestedManyWithoutUsersInput
    files?: FileCreateNestedManyWithoutUserInput
    task_comments?: CommentCreateNestedManyWithoutUser_task_commentsInput
    project_comments?: CommentCreateNestedManyWithoutUser_project_commentsInput
    invitations?: InvitationCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    owned_projects?: ProjectCreateNestedManyWithoutOwnerInput
    notifications_sent?: NotificationCreateNestedManyWithoutSenderInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUncheckedCreateWithoutTasksInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password: string
    is_disabled: boolean
    avatar?: string | null
    role?: UserCreateroleInput | Enumerable<Role>
    projects?: ProjectUncheckedCreateNestedManyWithoutUsersInput
    files?: FileUncheckedCreateNestedManyWithoutUserInput
    task_comments?: CommentUncheckedCreateNestedManyWithoutUser_task_commentsInput
    project_comments?: CommentUncheckedCreateNestedManyWithoutUser_project_commentsInput
    invitations?: InvitationUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    owned_projects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    notifications_sent?: NotificationUncheckedCreateNestedManyWithoutSenderInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserCreateOrConnectWithoutTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
  }

  export type ProjectCreateWithoutTasksInput = {
    id?: string
    users?: UserCreateNestedManyWithoutProjectsInput
    owner: UserCreateNestedOneWithoutOwned_projectsInput
    title: string
    description: string
    private: boolean
    is_disabled: boolean
    status_project: Status
    total_time_spent?: number
    start_date: Date | string
    end_date: Date | string
    due_date: Date | string
    files?: FileCreateNestedManyWithoutProjectInput
    comments?: CommentCreateNestedManyWithoutProjectInput
    invitations?: InvitationCreateNestedManyWithoutProjectInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProjectUncheckedCreateWithoutTasksInput = {
    id?: string
    users?: UserUncheckedCreateNestedManyWithoutProjectsInput
    project_owner_id: string
    title: string
    description: string
    private: boolean
    is_disabled: boolean
    status_project: Status
    total_time_spent?: number
    start_date: Date | string
    end_date: Date | string
    due_date: Date | string
    files?: FileUncheckedCreateNestedManyWithoutProjectInput
    comments?: CommentUncheckedCreateNestedManyWithoutProjectInput
    invitations?: InvitationUncheckedCreateNestedManyWithoutProjectInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProjectCreateOrConnectWithoutTasksInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
  }

  export type FileCreateWithoutTaskInput = {
    id?: string
    name: string
    path: string
    size: number
    type: string
    user?: UserCreateNestedOneWithoutFilesInput
    project: ProjectCreateNestedOneWithoutFilesInput
    is_disabled: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FileUncheckedCreateWithoutTaskInput = {
    id?: string
    name: string
    path: string
    size: number
    type: string
    user_id?: string | null
    project_id: string
    is_disabled: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FileCreateOrConnectWithoutTaskInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutTaskInput, FileUncheckedCreateWithoutTaskInput>
  }

  export type FileCreateManyTaskInputEnvelope = {
    data: Enumerable<FileCreateManyTaskInput>
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutTaskInput = {
    id?: string
    is_disabled: boolean
    content: string
    project?: ProjectCreateNestedOneWithoutCommentsInput
    user_task_comments?: UserCreateNestedOneWithoutTask_commentsInput
    user_project_comments?: UserCreateNestedOneWithoutProject_commentsInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CommentUncheckedCreateWithoutTaskInput = {
    id?: string
    is_disabled: boolean
    content: string
    task_comment_user_id?: string | null
    project_id?: string | null
    project_comment_user_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CommentCreateOrConnectWithoutTaskInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutTaskInput, CommentUncheckedCreateWithoutTaskInput>
  }

  export type CommentCreateManyTaskInputEnvelope = {
    data: Enumerable<CommentCreateManyTaskInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTasksInput = {
    update: XOR<UserUpdateWithoutTasksInput, UserUncheckedUpdateWithoutTasksInput>
    create: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
  }

  export type UserUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: UserUpdateroleInput | Enumerable<Role>
    projects?: ProjectUpdateManyWithoutUsersInput
    files?: FileUpdateManyWithoutUserInput
    task_comments?: CommentUpdateManyWithoutUser_task_commentsInput
    project_comments?: CommentUpdateManyWithoutUser_project_commentsInput
    invitations?: InvitationUpdateManyWithoutUserInput
    notifications?: NotificationUpdateManyWithoutUserInput
    owned_projects?: ProjectUpdateManyWithoutOwnerInput
    notifications_sent?: NotificationUpdateManyWithoutSenderInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: UserUpdateroleInput | Enumerable<Role>
    projects?: ProjectUncheckedUpdateManyWithoutUsersInput
    files?: FileUncheckedUpdateManyWithoutUserInput
    task_comments?: CommentUncheckedUpdateManyWithoutUser_task_commentsInput
    project_comments?: CommentUncheckedUpdateManyWithoutUser_project_commentsInput
    invitations?: InvitationUncheckedUpdateManyWithoutUserInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserInput
    owned_projects?: ProjectUncheckedUpdateManyWithoutOwnerInput
    notifications_sent?: NotificationUncheckedUpdateManyWithoutSenderInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpsertWithoutTasksInput = {
    update: XOR<ProjectUpdateWithoutTasksInput, ProjectUncheckedUpdateWithoutTasksInput>
    create: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
  }

  export type ProjectUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutProjectsInput
    owner?: UserUpdateOneRequiredWithoutOwned_projectsInput
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    private?: BoolFieldUpdateOperationsInput | boolean
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    status_project?: EnumStatusFieldUpdateOperationsInput | Status
    total_time_spent?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileUpdateManyWithoutProjectInput
    comments?: CommentUpdateManyWithoutProjectInput
    invitations?: InvitationUpdateManyWithoutProjectInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutProjectsInput
    project_owner_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    private?: BoolFieldUpdateOperationsInput | boolean
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    status_project?: EnumStatusFieldUpdateOperationsInput | Status
    total_time_spent?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileUncheckedUpdateManyWithoutProjectInput
    comments?: CommentUncheckedUpdateManyWithoutProjectInput
    invitations?: InvitationUncheckedUpdateManyWithoutProjectInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUpsertWithWhereUniqueWithoutTaskInput = {
    where: FileWhereUniqueInput
    update: XOR<FileUpdateWithoutTaskInput, FileUncheckedUpdateWithoutTaskInput>
    create: XOR<FileCreateWithoutTaskInput, FileUncheckedCreateWithoutTaskInput>
  }

  export type FileUpdateWithWhereUniqueWithoutTaskInput = {
    where: FileWhereUniqueInput
    data: XOR<FileUpdateWithoutTaskInput, FileUncheckedUpdateWithoutTaskInput>
  }

  export type FileUpdateManyWithWhereWithoutTaskInput = {
    where: FileScalarWhereInput
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyWithoutFilesInput>
  }

  export type CommentUpsertWithWhereUniqueWithoutTaskInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutTaskInput, CommentUncheckedUpdateWithoutTaskInput>
    create: XOR<CommentCreateWithoutTaskInput, CommentUncheckedCreateWithoutTaskInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutTaskInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutTaskInput, CommentUncheckedUpdateWithoutTaskInput>
  }

  export type CommentUpdateManyWithWhereWithoutTaskInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutCommentsInput>
  }

  export type ProjectCreateWithoutCommentsInput = {
    id?: string
    users?: UserCreateNestedManyWithoutProjectsInput
    owner: UserCreateNestedOneWithoutOwned_projectsInput
    title: string
    description: string
    private: boolean
    is_disabled: boolean
    status_project: Status
    total_time_spent?: number
    start_date: Date | string
    end_date: Date | string
    due_date: Date | string
    tasks?: TaskCreateNestedManyWithoutProjectInput
    files?: FileCreateNestedManyWithoutProjectInput
    invitations?: InvitationCreateNestedManyWithoutProjectInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProjectUncheckedCreateWithoutCommentsInput = {
    id?: string
    users?: UserUncheckedCreateNestedManyWithoutProjectsInput
    project_owner_id: string
    title: string
    description: string
    private: boolean
    is_disabled: boolean
    status_project: Status
    total_time_spent?: number
    start_date: Date | string
    end_date: Date | string
    due_date: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
    files?: FileUncheckedCreateNestedManyWithoutProjectInput
    invitations?: InvitationUncheckedCreateNestedManyWithoutProjectInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProjectCreateOrConnectWithoutCommentsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutCommentsInput, ProjectUncheckedCreateWithoutCommentsInput>
  }

  export type TaskCreateWithoutCommentsInput = {
    id?: string
    title: string
    description: string
    private: boolean
    is_disabled: boolean
    status_task: Status
    total_time_spent: number
    start_date: Date | string
    end_date: Date | string
    user?: UserCreateNestedOneWithoutTasksInput
    project: ProjectCreateNestedOneWithoutTasksInput
    files?: FileCreateNestedManyWithoutTaskInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TaskUncheckedCreateWithoutCommentsInput = {
    id?: string
    title: string
    description: string
    private: boolean
    is_disabled: boolean
    status_task: Status
    total_time_spent: number
    start_date: Date | string
    end_date: Date | string
    user_id?: string | null
    project_id: string
    files?: FileUncheckedCreateNestedManyWithoutTaskInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TaskCreateOrConnectWithoutCommentsInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutCommentsInput, TaskUncheckedCreateWithoutCommentsInput>
  }

  export type UserCreateWithoutTask_commentsInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password: string
    is_disabled: boolean
    avatar?: string | null
    role?: UserCreateroleInput | Enumerable<Role>
    projects?: ProjectCreateNestedManyWithoutUsersInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    files?: FileCreateNestedManyWithoutUserInput
    project_comments?: CommentCreateNestedManyWithoutUser_project_commentsInput
    invitations?: InvitationCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    owned_projects?: ProjectCreateNestedManyWithoutOwnerInput
    notifications_sent?: NotificationCreateNestedManyWithoutSenderInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUncheckedCreateWithoutTask_commentsInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password: string
    is_disabled: boolean
    avatar?: string | null
    role?: UserCreateroleInput | Enumerable<Role>
    projects?: ProjectUncheckedCreateNestedManyWithoutUsersInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    files?: FileUncheckedCreateNestedManyWithoutUserInput
    project_comments?: CommentUncheckedCreateNestedManyWithoutUser_project_commentsInput
    invitations?: InvitationUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    owned_projects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    notifications_sent?: NotificationUncheckedCreateNestedManyWithoutSenderInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserCreateOrConnectWithoutTask_commentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTask_commentsInput, UserUncheckedCreateWithoutTask_commentsInput>
  }

  export type UserCreateWithoutProject_commentsInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password: string
    is_disabled: boolean
    avatar?: string | null
    role?: UserCreateroleInput | Enumerable<Role>
    projects?: ProjectCreateNestedManyWithoutUsersInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    files?: FileCreateNestedManyWithoutUserInput
    task_comments?: CommentCreateNestedManyWithoutUser_task_commentsInput
    invitations?: InvitationCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    owned_projects?: ProjectCreateNestedManyWithoutOwnerInput
    notifications_sent?: NotificationCreateNestedManyWithoutSenderInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUncheckedCreateWithoutProject_commentsInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password: string
    is_disabled: boolean
    avatar?: string | null
    role?: UserCreateroleInput | Enumerable<Role>
    projects?: ProjectUncheckedCreateNestedManyWithoutUsersInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    files?: FileUncheckedCreateNestedManyWithoutUserInput
    task_comments?: CommentUncheckedCreateNestedManyWithoutUser_task_commentsInput
    invitations?: InvitationUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    owned_projects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    notifications_sent?: NotificationUncheckedCreateNestedManyWithoutSenderInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserCreateOrConnectWithoutProject_commentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProject_commentsInput, UserUncheckedCreateWithoutProject_commentsInput>
  }

  export type ProjectUpsertWithoutCommentsInput = {
    update: XOR<ProjectUpdateWithoutCommentsInput, ProjectUncheckedUpdateWithoutCommentsInput>
    create: XOR<ProjectCreateWithoutCommentsInput, ProjectUncheckedCreateWithoutCommentsInput>
  }

  export type ProjectUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutProjectsInput
    owner?: UserUpdateOneRequiredWithoutOwned_projectsInput
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    private?: BoolFieldUpdateOperationsInput | boolean
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    status_project?: EnumStatusFieldUpdateOperationsInput | Status
    total_time_spent?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutProjectInput
    files?: FileUpdateManyWithoutProjectInput
    invitations?: InvitationUpdateManyWithoutProjectInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutProjectsInput
    project_owner_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    private?: BoolFieldUpdateOperationsInput | boolean
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    status_project?: EnumStatusFieldUpdateOperationsInput | Status
    total_time_spent?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutProjectInput
    files?: FileUncheckedUpdateManyWithoutProjectInput
    invitations?: InvitationUncheckedUpdateManyWithoutProjectInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUpsertWithoutCommentsInput = {
    update: XOR<TaskUpdateWithoutCommentsInput, TaskUncheckedUpdateWithoutCommentsInput>
    create: XOR<TaskCreateWithoutCommentsInput, TaskUncheckedCreateWithoutCommentsInput>
  }

  export type TaskUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    private?: BoolFieldUpdateOperationsInput | boolean
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    status_task?: EnumStatusFieldUpdateOperationsInput | Status
    total_time_spent?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutTasksInput
    project?: ProjectUpdateOneRequiredWithoutTasksInput
    files?: FileUpdateManyWithoutTaskInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    private?: BoolFieldUpdateOperationsInput | boolean
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    status_task?: EnumStatusFieldUpdateOperationsInput | Status
    total_time_spent?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    project_id?: StringFieldUpdateOperationsInput | string
    files?: FileUncheckedUpdateManyWithoutTaskInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutTask_commentsInput = {
    update: XOR<UserUpdateWithoutTask_commentsInput, UserUncheckedUpdateWithoutTask_commentsInput>
    create: XOR<UserCreateWithoutTask_commentsInput, UserUncheckedCreateWithoutTask_commentsInput>
  }

  export type UserUpdateWithoutTask_commentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: UserUpdateroleInput | Enumerable<Role>
    projects?: ProjectUpdateManyWithoutUsersInput
    tasks?: TaskUpdateManyWithoutUserInput
    files?: FileUpdateManyWithoutUserInput
    project_comments?: CommentUpdateManyWithoutUser_project_commentsInput
    invitations?: InvitationUpdateManyWithoutUserInput
    notifications?: NotificationUpdateManyWithoutUserInput
    owned_projects?: ProjectUpdateManyWithoutOwnerInput
    notifications_sent?: NotificationUpdateManyWithoutSenderInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutTask_commentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: UserUpdateroleInput | Enumerable<Role>
    projects?: ProjectUncheckedUpdateManyWithoutUsersInput
    tasks?: TaskUncheckedUpdateManyWithoutUserInput
    files?: FileUncheckedUpdateManyWithoutUserInput
    project_comments?: CommentUncheckedUpdateManyWithoutUser_project_commentsInput
    invitations?: InvitationUncheckedUpdateManyWithoutUserInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserInput
    owned_projects?: ProjectUncheckedUpdateManyWithoutOwnerInput
    notifications_sent?: NotificationUncheckedUpdateManyWithoutSenderInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutProject_commentsInput = {
    update: XOR<UserUpdateWithoutProject_commentsInput, UserUncheckedUpdateWithoutProject_commentsInput>
    create: XOR<UserCreateWithoutProject_commentsInput, UserUncheckedCreateWithoutProject_commentsInput>
  }

  export type UserUpdateWithoutProject_commentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: UserUpdateroleInput | Enumerable<Role>
    projects?: ProjectUpdateManyWithoutUsersInput
    tasks?: TaskUpdateManyWithoutUserInput
    files?: FileUpdateManyWithoutUserInput
    task_comments?: CommentUpdateManyWithoutUser_task_commentsInput
    invitations?: InvitationUpdateManyWithoutUserInput
    notifications?: NotificationUpdateManyWithoutUserInput
    owned_projects?: ProjectUpdateManyWithoutOwnerInput
    notifications_sent?: NotificationUpdateManyWithoutSenderInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutProject_commentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: UserUpdateroleInput | Enumerable<Role>
    projects?: ProjectUncheckedUpdateManyWithoutUsersInput
    tasks?: TaskUncheckedUpdateManyWithoutUserInput
    files?: FileUncheckedUpdateManyWithoutUserInput
    task_comments?: CommentUncheckedUpdateManyWithoutUser_task_commentsInput
    invitations?: InvitationUncheckedUpdateManyWithoutUserInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserInput
    owned_projects?: ProjectUncheckedUpdateManyWithoutOwnerInput
    notifications_sent?: NotificationUncheckedUpdateManyWithoutSenderInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutFilesInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password: string
    is_disabled: boolean
    avatar?: string | null
    role?: UserCreateroleInput | Enumerable<Role>
    projects?: ProjectCreateNestedManyWithoutUsersInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    task_comments?: CommentCreateNestedManyWithoutUser_task_commentsInput
    project_comments?: CommentCreateNestedManyWithoutUser_project_commentsInput
    invitations?: InvitationCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    owned_projects?: ProjectCreateNestedManyWithoutOwnerInput
    notifications_sent?: NotificationCreateNestedManyWithoutSenderInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUncheckedCreateWithoutFilesInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password: string
    is_disabled: boolean
    avatar?: string | null
    role?: UserCreateroleInput | Enumerable<Role>
    projects?: ProjectUncheckedCreateNestedManyWithoutUsersInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    task_comments?: CommentUncheckedCreateNestedManyWithoutUser_task_commentsInput
    project_comments?: CommentUncheckedCreateNestedManyWithoutUser_project_commentsInput
    invitations?: InvitationUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    owned_projects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    notifications_sent?: NotificationUncheckedCreateNestedManyWithoutSenderInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserCreateOrConnectWithoutFilesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFilesInput, UserUncheckedCreateWithoutFilesInput>
  }

  export type ProjectCreateWithoutFilesInput = {
    id?: string
    users?: UserCreateNestedManyWithoutProjectsInput
    owner: UserCreateNestedOneWithoutOwned_projectsInput
    title: string
    description: string
    private: boolean
    is_disabled: boolean
    status_project: Status
    total_time_spent?: number
    start_date: Date | string
    end_date: Date | string
    due_date: Date | string
    tasks?: TaskCreateNestedManyWithoutProjectInput
    comments?: CommentCreateNestedManyWithoutProjectInput
    invitations?: InvitationCreateNestedManyWithoutProjectInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProjectUncheckedCreateWithoutFilesInput = {
    id?: string
    users?: UserUncheckedCreateNestedManyWithoutProjectsInput
    project_owner_id: string
    title: string
    description: string
    private: boolean
    is_disabled: boolean
    status_project: Status
    total_time_spent?: number
    start_date: Date | string
    end_date: Date | string
    due_date: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
    comments?: CommentUncheckedCreateNestedManyWithoutProjectInput
    invitations?: InvitationUncheckedCreateNestedManyWithoutProjectInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProjectCreateOrConnectWithoutFilesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutFilesInput, ProjectUncheckedCreateWithoutFilesInput>
  }

  export type TaskCreateWithoutFilesInput = {
    id?: string
    title: string
    description: string
    private: boolean
    is_disabled: boolean
    status_task: Status
    total_time_spent: number
    start_date: Date | string
    end_date: Date | string
    user?: UserCreateNestedOneWithoutTasksInput
    project: ProjectCreateNestedOneWithoutTasksInput
    comments?: CommentCreateNestedManyWithoutTaskInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TaskUncheckedCreateWithoutFilesInput = {
    id?: string
    title: string
    description: string
    private: boolean
    is_disabled: boolean
    status_task: Status
    total_time_spent: number
    start_date: Date | string
    end_date: Date | string
    user_id?: string | null
    project_id: string
    comments?: CommentUncheckedCreateNestedManyWithoutTaskInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TaskCreateOrConnectWithoutFilesInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutFilesInput, TaskUncheckedCreateWithoutFilesInput>
  }

  export type UserUpsertWithoutFilesInput = {
    update: XOR<UserUpdateWithoutFilesInput, UserUncheckedUpdateWithoutFilesInput>
    create: XOR<UserCreateWithoutFilesInput, UserUncheckedCreateWithoutFilesInput>
  }

  export type UserUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: UserUpdateroleInput | Enumerable<Role>
    projects?: ProjectUpdateManyWithoutUsersInput
    tasks?: TaskUpdateManyWithoutUserInput
    task_comments?: CommentUpdateManyWithoutUser_task_commentsInput
    project_comments?: CommentUpdateManyWithoutUser_project_commentsInput
    invitations?: InvitationUpdateManyWithoutUserInput
    notifications?: NotificationUpdateManyWithoutUserInput
    owned_projects?: ProjectUpdateManyWithoutOwnerInput
    notifications_sent?: NotificationUpdateManyWithoutSenderInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: UserUpdateroleInput | Enumerable<Role>
    projects?: ProjectUncheckedUpdateManyWithoutUsersInput
    tasks?: TaskUncheckedUpdateManyWithoutUserInput
    task_comments?: CommentUncheckedUpdateManyWithoutUser_task_commentsInput
    project_comments?: CommentUncheckedUpdateManyWithoutUser_project_commentsInput
    invitations?: InvitationUncheckedUpdateManyWithoutUserInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserInput
    owned_projects?: ProjectUncheckedUpdateManyWithoutOwnerInput
    notifications_sent?: NotificationUncheckedUpdateManyWithoutSenderInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpsertWithoutFilesInput = {
    update: XOR<ProjectUpdateWithoutFilesInput, ProjectUncheckedUpdateWithoutFilesInput>
    create: XOR<ProjectCreateWithoutFilesInput, ProjectUncheckedCreateWithoutFilesInput>
  }

  export type ProjectUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutProjectsInput
    owner?: UserUpdateOneRequiredWithoutOwned_projectsInput
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    private?: BoolFieldUpdateOperationsInput | boolean
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    status_project?: EnumStatusFieldUpdateOperationsInput | Status
    total_time_spent?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutProjectInput
    comments?: CommentUpdateManyWithoutProjectInput
    invitations?: InvitationUpdateManyWithoutProjectInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutProjectsInput
    project_owner_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    private?: BoolFieldUpdateOperationsInput | boolean
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    status_project?: EnumStatusFieldUpdateOperationsInput | Status
    total_time_spent?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutProjectInput
    comments?: CommentUncheckedUpdateManyWithoutProjectInput
    invitations?: InvitationUncheckedUpdateManyWithoutProjectInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUpsertWithoutFilesInput = {
    update: XOR<TaskUpdateWithoutFilesInput, TaskUncheckedUpdateWithoutFilesInput>
    create: XOR<TaskCreateWithoutFilesInput, TaskUncheckedCreateWithoutFilesInput>
  }

  export type TaskUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    private?: BoolFieldUpdateOperationsInput | boolean
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    status_task?: EnumStatusFieldUpdateOperationsInput | Status
    total_time_spent?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutTasksInput
    project?: ProjectUpdateOneRequiredWithoutTasksInput
    comments?: CommentUpdateManyWithoutTaskInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    private?: BoolFieldUpdateOperationsInput | boolean
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    status_task?: EnumStatusFieldUpdateOperationsInput | Status
    total_time_spent?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    project_id?: StringFieldUpdateOperationsInput | string
    comments?: CommentUncheckedUpdateManyWithoutTaskInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateWithoutInvitationsInput = {
    id?: string
    users?: UserCreateNestedManyWithoutProjectsInput
    owner: UserCreateNestedOneWithoutOwned_projectsInput
    title: string
    description: string
    private: boolean
    is_disabled: boolean
    status_project: Status
    total_time_spent?: number
    start_date: Date | string
    end_date: Date | string
    due_date: Date | string
    tasks?: TaskCreateNestedManyWithoutProjectInput
    files?: FileCreateNestedManyWithoutProjectInput
    comments?: CommentCreateNestedManyWithoutProjectInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProjectUncheckedCreateWithoutInvitationsInput = {
    id?: string
    users?: UserUncheckedCreateNestedManyWithoutProjectsInput
    project_owner_id: string
    title: string
    description: string
    private: boolean
    is_disabled: boolean
    status_project: Status
    total_time_spent?: number
    start_date: Date | string
    end_date: Date | string
    due_date: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
    files?: FileUncheckedCreateNestedManyWithoutProjectInput
    comments?: CommentUncheckedCreateNestedManyWithoutProjectInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProjectCreateOrConnectWithoutInvitationsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutInvitationsInput, ProjectUncheckedCreateWithoutInvitationsInput>
  }

  export type UserCreateWithoutInvitationsInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password: string
    is_disabled: boolean
    avatar?: string | null
    role?: UserCreateroleInput | Enumerable<Role>
    projects?: ProjectCreateNestedManyWithoutUsersInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    files?: FileCreateNestedManyWithoutUserInput
    task_comments?: CommentCreateNestedManyWithoutUser_task_commentsInput
    project_comments?: CommentCreateNestedManyWithoutUser_project_commentsInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    owned_projects?: ProjectCreateNestedManyWithoutOwnerInput
    notifications_sent?: NotificationCreateNestedManyWithoutSenderInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUncheckedCreateWithoutInvitationsInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password: string
    is_disabled: boolean
    avatar?: string | null
    role?: UserCreateroleInput | Enumerable<Role>
    projects?: ProjectUncheckedCreateNestedManyWithoutUsersInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    files?: FileUncheckedCreateNestedManyWithoutUserInput
    task_comments?: CommentUncheckedCreateNestedManyWithoutUser_task_commentsInput
    project_comments?: CommentUncheckedCreateNestedManyWithoutUser_project_commentsInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    owned_projects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    notifications_sent?: NotificationUncheckedCreateNestedManyWithoutSenderInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserCreateOrConnectWithoutInvitationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInvitationsInput, UserUncheckedCreateWithoutInvitationsInput>
  }

  export type ProjectUpsertWithoutInvitationsInput = {
    update: XOR<ProjectUpdateWithoutInvitationsInput, ProjectUncheckedUpdateWithoutInvitationsInput>
    create: XOR<ProjectCreateWithoutInvitationsInput, ProjectUncheckedCreateWithoutInvitationsInput>
  }

  export type ProjectUpdateWithoutInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutProjectsInput
    owner?: UserUpdateOneRequiredWithoutOwned_projectsInput
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    private?: BoolFieldUpdateOperationsInput | boolean
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    status_project?: EnumStatusFieldUpdateOperationsInput | Status
    total_time_spent?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutProjectInput
    files?: FileUpdateManyWithoutProjectInput
    comments?: CommentUpdateManyWithoutProjectInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateWithoutInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutProjectsInput
    project_owner_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    private?: BoolFieldUpdateOperationsInput | boolean
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    status_project?: EnumStatusFieldUpdateOperationsInput | Status
    total_time_spent?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutProjectInput
    files?: FileUncheckedUpdateManyWithoutProjectInput
    comments?: CommentUncheckedUpdateManyWithoutProjectInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutInvitationsInput = {
    update: XOR<UserUpdateWithoutInvitationsInput, UserUncheckedUpdateWithoutInvitationsInput>
    create: XOR<UserCreateWithoutInvitationsInput, UserUncheckedCreateWithoutInvitationsInput>
  }

  export type UserUpdateWithoutInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: UserUpdateroleInput | Enumerable<Role>
    projects?: ProjectUpdateManyWithoutUsersInput
    tasks?: TaskUpdateManyWithoutUserInput
    files?: FileUpdateManyWithoutUserInput
    task_comments?: CommentUpdateManyWithoutUser_task_commentsInput
    project_comments?: CommentUpdateManyWithoutUser_project_commentsInput
    notifications?: NotificationUpdateManyWithoutUserInput
    owned_projects?: ProjectUpdateManyWithoutOwnerInput
    notifications_sent?: NotificationUpdateManyWithoutSenderInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: UserUpdateroleInput | Enumerable<Role>
    projects?: ProjectUncheckedUpdateManyWithoutUsersInput
    tasks?: TaskUncheckedUpdateManyWithoutUserInput
    files?: FileUncheckedUpdateManyWithoutUserInput
    task_comments?: CommentUncheckedUpdateManyWithoutUser_task_commentsInput
    project_comments?: CommentUncheckedUpdateManyWithoutUser_project_commentsInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserInput
    owned_projects?: ProjectUncheckedUpdateManyWithoutOwnerInput
    notifications_sent?: NotificationUncheckedUpdateManyWithoutSenderInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password: string
    is_disabled: boolean
    avatar?: string | null
    role?: UserCreateroleInput | Enumerable<Role>
    projects?: ProjectCreateNestedManyWithoutUsersInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    files?: FileCreateNestedManyWithoutUserInput
    task_comments?: CommentCreateNestedManyWithoutUser_task_commentsInput
    project_comments?: CommentCreateNestedManyWithoutUser_project_commentsInput
    invitations?: InvitationCreateNestedManyWithoutUserInput
    owned_projects?: ProjectCreateNestedManyWithoutOwnerInput
    notifications_sent?: NotificationCreateNestedManyWithoutSenderInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password: string
    is_disabled: boolean
    avatar?: string | null
    role?: UserCreateroleInput | Enumerable<Role>
    projects?: ProjectUncheckedCreateNestedManyWithoutUsersInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    files?: FileUncheckedCreateNestedManyWithoutUserInput
    task_comments?: CommentUncheckedCreateNestedManyWithoutUser_task_commentsInput
    project_comments?: CommentUncheckedCreateNestedManyWithoutUser_project_commentsInput
    invitations?: InvitationUncheckedCreateNestedManyWithoutUserInput
    owned_projects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    notifications_sent?: NotificationUncheckedCreateNestedManyWithoutSenderInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserCreateWithoutNotifications_sentInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password: string
    is_disabled: boolean
    avatar?: string | null
    role?: UserCreateroleInput | Enumerable<Role>
    projects?: ProjectCreateNestedManyWithoutUsersInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    files?: FileCreateNestedManyWithoutUserInput
    task_comments?: CommentCreateNestedManyWithoutUser_task_commentsInput
    project_comments?: CommentCreateNestedManyWithoutUser_project_commentsInput
    invitations?: InvitationCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    owned_projects?: ProjectCreateNestedManyWithoutOwnerInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUncheckedCreateWithoutNotifications_sentInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password: string
    is_disabled: boolean
    avatar?: string | null
    role?: UserCreateroleInput | Enumerable<Role>
    projects?: ProjectUncheckedCreateNestedManyWithoutUsersInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    files?: FileUncheckedCreateNestedManyWithoutUserInput
    task_comments?: CommentUncheckedCreateNestedManyWithoutUser_task_commentsInput
    project_comments?: CommentUncheckedCreateNestedManyWithoutUser_project_commentsInput
    invitations?: InvitationUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    owned_projects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserCreateOrConnectWithoutNotifications_sentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotifications_sentInput, UserUncheckedCreateWithoutNotifications_sentInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: UserUpdateroleInput | Enumerable<Role>
    projects?: ProjectUpdateManyWithoutUsersInput
    tasks?: TaskUpdateManyWithoutUserInput
    files?: FileUpdateManyWithoutUserInput
    task_comments?: CommentUpdateManyWithoutUser_task_commentsInput
    project_comments?: CommentUpdateManyWithoutUser_project_commentsInput
    invitations?: InvitationUpdateManyWithoutUserInput
    owned_projects?: ProjectUpdateManyWithoutOwnerInput
    notifications_sent?: NotificationUpdateManyWithoutSenderInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: UserUpdateroleInput | Enumerable<Role>
    projects?: ProjectUncheckedUpdateManyWithoutUsersInput
    tasks?: TaskUncheckedUpdateManyWithoutUserInput
    files?: FileUncheckedUpdateManyWithoutUserInput
    task_comments?: CommentUncheckedUpdateManyWithoutUser_task_commentsInput
    project_comments?: CommentUncheckedUpdateManyWithoutUser_project_commentsInput
    invitations?: InvitationUncheckedUpdateManyWithoutUserInput
    owned_projects?: ProjectUncheckedUpdateManyWithoutOwnerInput
    notifications_sent?: NotificationUncheckedUpdateManyWithoutSenderInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutNotifications_sentInput = {
    update: XOR<UserUpdateWithoutNotifications_sentInput, UserUncheckedUpdateWithoutNotifications_sentInput>
    create: XOR<UserCreateWithoutNotifications_sentInput, UserUncheckedCreateWithoutNotifications_sentInput>
  }

  export type UserUpdateWithoutNotifications_sentInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: UserUpdateroleInput | Enumerable<Role>
    projects?: ProjectUpdateManyWithoutUsersInput
    tasks?: TaskUpdateManyWithoutUserInput
    files?: FileUpdateManyWithoutUserInput
    task_comments?: CommentUpdateManyWithoutUser_task_commentsInput
    project_comments?: CommentUpdateManyWithoutUser_project_commentsInput
    invitations?: InvitationUpdateManyWithoutUserInput
    notifications?: NotificationUpdateManyWithoutUserInput
    owned_projects?: ProjectUpdateManyWithoutOwnerInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutNotifications_sentInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: UserUpdateroleInput | Enumerable<Role>
    projects?: ProjectUncheckedUpdateManyWithoutUsersInput
    tasks?: TaskUncheckedUpdateManyWithoutUserInput
    files?: FileUncheckedUpdateManyWithoutUserInput
    task_comments?: CommentUncheckedUpdateManyWithoutUser_task_commentsInput
    project_comments?: CommentUncheckedUpdateManyWithoutUser_project_commentsInput
    invitations?: InvitationUncheckedUpdateManyWithoutUserInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserInput
    owned_projects?: ProjectUncheckedUpdateManyWithoutOwnerInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateManyUserInput = {
    id?: string
    title: string
    description: string
    private: boolean
    is_disabled: boolean
    status_task: Status
    total_time_spent: number
    start_date: Date | string
    end_date: Date | string
    project_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FileCreateManyUserInput = {
    id?: string
    name: string
    path: string
    size: number
    type: string
    project_id: string
    task_id?: string | null
    is_disabled: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CommentCreateManyUser_task_commentsInput = {
    id?: string
    is_disabled: boolean
    content: string
    task_comment_user_id?: string | null
    project_id?: string | null
    task_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CommentCreateManyUser_project_commentsInput = {
    id?: string
    is_disabled: boolean
    content: string
    project_id?: string | null
    task_id?: string | null
    project_comment_user_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type InvitationCreateManyUserInput = {
    id?: string
    status: Status_Invitation
    email: string
    project_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    is_disabled: boolean
    title: string
    content: string
    type: Type_Notification
    status: Status_Notification
    reference_id: string
    sender_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProjectCreateManyOwnerInput = {
    id?: string
    title: string
    description: string
    private: boolean
    is_disabled: boolean
    status_project: Status
    total_time_spent?: number
    start_date: Date | string
    end_date: Date | string
    due_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type NotificationCreateManySenderInput = {
    id?: string
    is_disabled: boolean
    title: string
    content: string
    user_id?: string | null
    type: Type_Notification
    status: Status_Notification
    reference_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProjectUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner?: UserUpdateOneRequiredWithoutOwned_projectsInput
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    private?: BoolFieldUpdateOperationsInput | boolean
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    status_project?: EnumStatusFieldUpdateOperationsInput | Status
    total_time_spent?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutProjectInput
    files?: FileUpdateManyWithoutProjectInput
    comments?: CommentUpdateManyWithoutProjectInput
    invitations?: InvitationUpdateManyWithoutProjectInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    project_owner_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    private?: BoolFieldUpdateOperationsInput | boolean
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    status_project?: EnumStatusFieldUpdateOperationsInput | Status
    total_time_spent?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutProjectInput
    files?: FileUncheckedUpdateManyWithoutProjectInput
    comments?: CommentUncheckedUpdateManyWithoutProjectInput
    invitations?: InvitationUncheckedUpdateManyWithoutProjectInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    project_owner_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    private?: BoolFieldUpdateOperationsInput | boolean
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    status_project?: EnumStatusFieldUpdateOperationsInput | Status
    total_time_spent?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    private?: BoolFieldUpdateOperationsInput | boolean
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    status_task?: EnumStatusFieldUpdateOperationsInput | Status
    total_time_spent?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutTasksInput
    files?: FileUpdateManyWithoutTaskInput
    comments?: CommentUpdateManyWithoutTaskInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    private?: BoolFieldUpdateOperationsInput | boolean
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    status_task?: EnumStatusFieldUpdateOperationsInput | Status
    total_time_spent?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    project_id?: StringFieldUpdateOperationsInput | string
    files?: FileUncheckedUpdateManyWithoutTaskInput
    comments?: CommentUncheckedUpdateManyWithoutTaskInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    private?: BoolFieldUpdateOperationsInput | boolean
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    status_task?: EnumStatusFieldUpdateOperationsInput | Status
    total_time_spent?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    project_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneRequiredWithoutFilesInput
    task?: TaskUpdateOneWithoutFilesInput
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    project_id?: StringFieldUpdateOperationsInput | string
    task_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUncheckedUpdateManyWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    project_id?: StringFieldUpdateOperationsInput | string
    task_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutUser_task_commentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    content?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneWithoutCommentsInput
    task?: TaskUpdateOneWithoutCommentsInput
    user_project_comments?: UserUpdateOneWithoutProject_commentsInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateWithoutUser_task_commentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    content?: StringFieldUpdateOperationsInput | string
    task_comment_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    project_id?: NullableStringFieldUpdateOperationsInput | string | null
    task_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutTask_commentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    content?: StringFieldUpdateOperationsInput | string
    task_comment_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    project_id?: NullableStringFieldUpdateOperationsInput | string | null
    task_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutUser_project_commentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    content?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneWithoutCommentsInput
    task?: TaskUpdateOneWithoutCommentsInput
    user_task_comments?: UserUpdateOneWithoutTask_commentsInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateWithoutUser_project_commentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    content?: StringFieldUpdateOperationsInput | string
    project_id?: NullableStringFieldUpdateOperationsInput | string | null
    task_id?: NullableStringFieldUpdateOperationsInput | string | null
    project_comment_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutProject_commentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    content?: StringFieldUpdateOperationsInput | string
    project_id?: NullableStringFieldUpdateOperationsInput | string | null
    task_id?: NullableStringFieldUpdateOperationsInput | string | null
    project_comment_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatus_InvitationFieldUpdateOperationsInput | Status_Invitation
    email?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneRequiredWithoutInvitationsInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatus_InvitationFieldUpdateOperationsInput | Status_Invitation
    email?: StringFieldUpdateOperationsInput | string
    project_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationUncheckedUpdateManyWithoutInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatus_InvitationFieldUpdateOperationsInput | Status_Invitation
    email?: StringFieldUpdateOperationsInput | string
    project_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumType_NotificationFieldUpdateOperationsInput | Type_Notification
    status?: EnumStatus_NotificationFieldUpdateOperationsInput | Status_Notification
    reference_id?: StringFieldUpdateOperationsInput | string
    sender?: UserUpdateOneRequiredWithoutNotifications_sentInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumType_NotificationFieldUpdateOperationsInput | Type_Notification
    status?: EnumStatus_NotificationFieldUpdateOperationsInput | Status_Notification
    reference_id?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumType_NotificationFieldUpdateOperationsInput | Type_Notification
    status?: EnumStatus_NotificationFieldUpdateOperationsInput | Status_Notification
    reference_id?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutProjectsInput
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    private?: BoolFieldUpdateOperationsInput | boolean
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    status_project?: EnumStatusFieldUpdateOperationsInput | Status
    total_time_spent?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutProjectInput
    files?: FileUpdateManyWithoutProjectInput
    comments?: CommentUpdateManyWithoutProjectInput
    invitations?: InvitationUpdateManyWithoutProjectInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutProjectsInput
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    private?: BoolFieldUpdateOperationsInput | boolean
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    status_project?: EnumStatusFieldUpdateOperationsInput | Status
    total_time_spent?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutProjectInput
    files?: FileUncheckedUpdateManyWithoutProjectInput
    comments?: CommentUncheckedUpdateManyWithoutProjectInput
    invitations?: InvitationUncheckedUpdateManyWithoutProjectInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyWithoutOwned_projectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    private?: BoolFieldUpdateOperationsInput | boolean
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    status_project?: EnumStatusFieldUpdateOperationsInput | Status
    total_time_spent?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutNotificationsInput
    type?: EnumType_NotificationFieldUpdateOperationsInput | Type_Notification
    status?: EnumStatus_NotificationFieldUpdateOperationsInput | Status_Notification
    reference_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumType_NotificationFieldUpdateOperationsInput | Type_Notification
    status?: EnumStatus_NotificationFieldUpdateOperationsInput | Status_Notification
    reference_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutNotifications_sentInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumType_NotificationFieldUpdateOperationsInput | Type_Notification
    status?: EnumStatus_NotificationFieldUpdateOperationsInput | Status_Notification
    reference_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateManyProjectInput = {
    id?: string
    title: string
    description: string
    private: boolean
    is_disabled: boolean
    status_task: Status
    total_time_spent: number
    start_date: Date | string
    end_date: Date | string
    user_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FileCreateManyProjectInput = {
    id?: string
    name: string
    path: string
    size: number
    type: string
    user_id?: string | null
    task_id?: string | null
    is_disabled: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CommentCreateManyProjectInput = {
    id?: string
    is_disabled: boolean
    content: string
    task_comment_user_id?: string | null
    task_id?: string | null
    project_comment_user_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type InvitationCreateManyProjectInput = {
    id?: string
    status: Status_Invitation
    email: string
    user_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: UserUpdateroleInput | Enumerable<Role>
    tasks?: TaskUpdateManyWithoutUserInput
    files?: FileUpdateManyWithoutUserInput
    task_comments?: CommentUpdateManyWithoutUser_task_commentsInput
    project_comments?: CommentUpdateManyWithoutUser_project_commentsInput
    invitations?: InvitationUpdateManyWithoutUserInput
    notifications?: NotificationUpdateManyWithoutUserInput
    owned_projects?: ProjectUpdateManyWithoutOwnerInput
    notifications_sent?: NotificationUpdateManyWithoutSenderInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: UserUpdateroleInput | Enumerable<Role>
    tasks?: TaskUncheckedUpdateManyWithoutUserInput
    files?: FileUncheckedUpdateManyWithoutUserInput
    task_comments?: CommentUncheckedUpdateManyWithoutUser_task_commentsInput
    project_comments?: CommentUncheckedUpdateManyWithoutUser_project_commentsInput
    invitations?: InvitationUncheckedUpdateManyWithoutUserInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserInput
    owned_projects?: ProjectUncheckedUpdateManyWithoutOwnerInput
    notifications_sent?: NotificationUncheckedUpdateManyWithoutSenderInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: UserUpdateroleInput | Enumerable<Role>
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    private?: BoolFieldUpdateOperationsInput | boolean
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    status_task?: EnumStatusFieldUpdateOperationsInput | Status
    total_time_spent?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutTasksInput
    files?: FileUpdateManyWithoutTaskInput
    comments?: CommentUpdateManyWithoutTaskInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    private?: BoolFieldUpdateOperationsInput | boolean
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    status_task?: EnumStatusFieldUpdateOperationsInput | Status
    total_time_spent?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    files?: FileUncheckedUpdateManyWithoutTaskInput
    comments?: CommentUncheckedUpdateManyWithoutTaskInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutFilesInput
    task?: TaskUpdateOneWithoutFilesInput
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    task_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    content?: StringFieldUpdateOperationsInput | string
    task?: TaskUpdateOneWithoutCommentsInput
    user_task_comments?: UserUpdateOneWithoutTask_commentsInput
    user_project_comments?: UserUpdateOneWithoutProject_commentsInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    content?: StringFieldUpdateOperationsInput | string
    task_comment_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    task_id?: NullableStringFieldUpdateOperationsInput | string | null
    project_comment_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    content?: StringFieldUpdateOperationsInput | string
    task_comment_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    task_id?: NullableStringFieldUpdateOperationsInput | string | null
    project_comment_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatus_InvitationFieldUpdateOperationsInput | Status_Invitation
    email?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutInvitationsInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatus_InvitationFieldUpdateOperationsInput | Status_Invitation
    email?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileCreateManyTaskInput = {
    id?: string
    name: string
    path: string
    size: number
    type: string
    user_id?: string | null
    project_id: string
    is_disabled: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CommentCreateManyTaskInput = {
    id?: string
    is_disabled: boolean
    content: string
    task_comment_user_id?: string | null
    project_id?: string | null
    project_comment_user_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FileUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutFilesInput
    project?: ProjectUpdateOneRequiredWithoutFilesInput
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    project_id?: StringFieldUpdateOperationsInput | string
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    content?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneWithoutCommentsInput
    user_task_comments?: UserUpdateOneWithoutTask_commentsInput
    user_project_comments?: UserUpdateOneWithoutProject_commentsInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_disabled?: BoolFieldUpdateOperationsInput | boolean
    content?: StringFieldUpdateOperationsInput | string
    task_comment_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    project_id?: NullableStringFieldUpdateOperationsInput | string | null
    project_comment_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}