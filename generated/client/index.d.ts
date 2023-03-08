
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  id: number
  user_name: string
  full_name: string
  email: string
  photo_url: string
  mobile_number: string
}

/**
 * Model BankAccountDetails
 * 
 */
export type BankAccountDetails = {
  id: number
  user_id: number
  full_name: string
  email: string
  upi_id: string
  paytm_number: string
}


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
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

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
   * `prisma.bankAccountDetails`: Exposes CRUD operations for the **BankAccountDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BankAccountDetails
    * const bankAccountDetails = await prisma.bankAccountDetails.findMany()
    * ```
    */
  get bankAccountDetails(): Prisma.BankAccountDetailsDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.11.0
   * Query Engine version: 8fde8fef4033376662cad983758335009d522acb
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
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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
  : T extends Uint8Array
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

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


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    BankAccountDetails: 'BankAccountDetails'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
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
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
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
     * Overwrites the datasource url from your schema.prisma file
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
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
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

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    user_name: string | null
    full_name: string | null
    email: string | null
    photo_url: string | null
    mobile_number: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    user_name: string | null
    full_name: string | null
    email: string | null
    photo_url: string | null
    mobile_number: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    user_name: number
    full_name: number
    email: number
    photo_url: number
    mobile_number: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    user_name?: true
    full_name?: true
    email?: true
    photo_url?: true
    mobile_number?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    user_name?: true
    full_name?: true
    email?: true
    photo_url?: true
    mobile_number?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    user_name?: true
    full_name?: true
    email?: true
    photo_url?: true
    mobile_number?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    by: UserScalarFieldEnum[]
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    user_name: string
    full_name: string
    email: string
    photo_url: string
    mobile_number: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
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
    user_name?: boolean
    full_name?: boolean
    email?: boolean
    photo_url?: boolean
    mobile_number?: boolean
    bank_details?: boolean | BankAccountDetailsArgs
  }


  export type UserInclude = {
    bank_details?: boolean | BankAccountDetailsArgs
  }

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'bank_details' ? BankAccountDetailsGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'bank_details' ? BankAccountDetailsGetPayload<S['select'][P]> | null :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

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
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

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
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

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
    ): Prisma.PrismaPromise<Array<UserGetPayload<T>>>

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
    ): Prisma__UserClient<UserGetPayload<T>>

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
    ): Prisma.PrismaPromise<BatchPayload>

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
    ): Prisma__UserClient<UserGetPayload<T>>

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
    ): Prisma__UserClient<UserGetPayload<T>>

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
    ): Prisma.PrismaPromise<BatchPayload>

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
    ): Prisma.PrismaPromise<BatchPayload>

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
    ): Prisma__UserClient<UserGetPayload<T>>

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
    ): Prisma.PrismaPromise<
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    bank_details<T extends BankAccountDetailsArgs= {}>(args?: Subset<T, BankAccountDetailsArgs>): Prisma__BankAccountDetailsClient<BankAccountDetailsGetPayload<T> | Null>;

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
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
  }



  /**
   * Model BankAccountDetails
   */


  export type AggregateBankAccountDetails = {
    _count: BankAccountDetailsCountAggregateOutputType | null
    _avg: BankAccountDetailsAvgAggregateOutputType | null
    _sum: BankAccountDetailsSumAggregateOutputType | null
    _min: BankAccountDetailsMinAggregateOutputType | null
    _max: BankAccountDetailsMaxAggregateOutputType | null
  }

  export type BankAccountDetailsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type BankAccountDetailsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type BankAccountDetailsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    full_name: string | null
    email: string | null
    upi_id: string | null
    paytm_number: string | null
  }

  export type BankAccountDetailsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    full_name: string | null
    email: string | null
    upi_id: string | null
    paytm_number: string | null
  }

  export type BankAccountDetailsCountAggregateOutputType = {
    id: number
    user_id: number
    full_name: number
    email: number
    upi_id: number
    paytm_number: number
    _all: number
  }


  export type BankAccountDetailsAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type BankAccountDetailsSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type BankAccountDetailsMinAggregateInputType = {
    id?: true
    user_id?: true
    full_name?: true
    email?: true
    upi_id?: true
    paytm_number?: true
  }

  export type BankAccountDetailsMaxAggregateInputType = {
    id?: true
    user_id?: true
    full_name?: true
    email?: true
    upi_id?: true
    paytm_number?: true
  }

  export type BankAccountDetailsCountAggregateInputType = {
    id?: true
    user_id?: true
    full_name?: true
    email?: true
    upi_id?: true
    paytm_number?: true
    _all?: true
  }

  export type BankAccountDetailsAggregateArgs = {
    /**
     * Filter which BankAccountDetails to aggregate.
     */
    where?: BankAccountDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankAccountDetails to fetch.
     */
    orderBy?: Enumerable<BankAccountDetailsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BankAccountDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankAccountDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankAccountDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BankAccountDetails
    **/
    _count?: true | BankAccountDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BankAccountDetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BankAccountDetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BankAccountDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BankAccountDetailsMaxAggregateInputType
  }

  export type GetBankAccountDetailsAggregateType<T extends BankAccountDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateBankAccountDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBankAccountDetails[P]>
      : GetScalarType<T[P], AggregateBankAccountDetails[P]>
  }




  export type BankAccountDetailsGroupByArgs = {
    where?: BankAccountDetailsWhereInput
    orderBy?: Enumerable<BankAccountDetailsOrderByWithAggregationInput>
    by: BankAccountDetailsScalarFieldEnum[]
    having?: BankAccountDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BankAccountDetailsCountAggregateInputType | true
    _avg?: BankAccountDetailsAvgAggregateInputType
    _sum?: BankAccountDetailsSumAggregateInputType
    _min?: BankAccountDetailsMinAggregateInputType
    _max?: BankAccountDetailsMaxAggregateInputType
  }


  export type BankAccountDetailsGroupByOutputType = {
    id: number
    user_id: number
    full_name: string
    email: string
    upi_id: string
    paytm_number: string
    _count: BankAccountDetailsCountAggregateOutputType | null
    _avg: BankAccountDetailsAvgAggregateOutputType | null
    _sum: BankAccountDetailsSumAggregateOutputType | null
    _min: BankAccountDetailsMinAggregateOutputType | null
    _max: BankAccountDetailsMaxAggregateOutputType | null
  }

  type GetBankAccountDetailsGroupByPayload<T extends BankAccountDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<BankAccountDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BankAccountDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BankAccountDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], BankAccountDetailsGroupByOutputType[P]>
        }
      >
    >


  export type BankAccountDetailsSelect = {
    id?: boolean
    user_id?: boolean
    full_name?: boolean
    email?: boolean
    upi_id?: boolean
    paytm_number?: boolean
    user?: boolean | UserArgs
  }


  export type BankAccountDetailsInclude = {
    user?: boolean | UserArgs
  }

  export type BankAccountDetailsGetPayload<S extends boolean | null | undefined | BankAccountDetailsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BankAccountDetails :
    S extends undefined ? never :
    S extends { include: any } & (BankAccountDetailsArgs | BankAccountDetailsFindManyArgs)
    ? BankAccountDetails  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (BankAccountDetailsArgs | BankAccountDetailsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> | null :  P extends keyof BankAccountDetails ? BankAccountDetails[P] : never
  } 
      : BankAccountDetails


  type BankAccountDetailsCountArgs = 
    Omit<BankAccountDetailsFindManyArgs, 'select' | 'include'> & {
      select?: BankAccountDetailsCountAggregateInputType | true
    }

  export interface BankAccountDetailsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one BankAccountDetails that matches the filter.
     * @param {BankAccountDetailsFindUniqueArgs} args - Arguments to find a BankAccountDetails
     * @example
     * // Get one BankAccountDetails
     * const bankAccountDetails = await prisma.bankAccountDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BankAccountDetailsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BankAccountDetailsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'BankAccountDetails'> extends True ? Prisma__BankAccountDetailsClient<BankAccountDetailsGetPayload<T>> : Prisma__BankAccountDetailsClient<BankAccountDetailsGetPayload<T> | null, null>

    /**
     * Find one BankAccountDetails that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BankAccountDetailsFindUniqueOrThrowArgs} args - Arguments to find a BankAccountDetails
     * @example
     * // Get one BankAccountDetails
     * const bankAccountDetails = await prisma.bankAccountDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BankAccountDetailsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BankAccountDetailsFindUniqueOrThrowArgs>
    ): Prisma__BankAccountDetailsClient<BankAccountDetailsGetPayload<T>>

    /**
     * Find the first BankAccountDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountDetailsFindFirstArgs} args - Arguments to find a BankAccountDetails
     * @example
     * // Get one BankAccountDetails
     * const bankAccountDetails = await prisma.bankAccountDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BankAccountDetailsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BankAccountDetailsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'BankAccountDetails'> extends True ? Prisma__BankAccountDetailsClient<BankAccountDetailsGetPayload<T>> : Prisma__BankAccountDetailsClient<BankAccountDetailsGetPayload<T> | null, null>

    /**
     * Find the first BankAccountDetails that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountDetailsFindFirstOrThrowArgs} args - Arguments to find a BankAccountDetails
     * @example
     * // Get one BankAccountDetails
     * const bankAccountDetails = await prisma.bankAccountDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BankAccountDetailsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BankAccountDetailsFindFirstOrThrowArgs>
    ): Prisma__BankAccountDetailsClient<BankAccountDetailsGetPayload<T>>

    /**
     * Find zero or more BankAccountDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountDetailsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BankAccountDetails
     * const bankAccountDetails = await prisma.bankAccountDetails.findMany()
     * 
     * // Get first 10 BankAccountDetails
     * const bankAccountDetails = await prisma.bankAccountDetails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bankAccountDetailsWithIdOnly = await prisma.bankAccountDetails.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BankAccountDetailsFindManyArgs>(
      args?: SelectSubset<T, BankAccountDetailsFindManyArgs>
    ): Prisma.PrismaPromise<Array<BankAccountDetailsGetPayload<T>>>

    /**
     * Create a BankAccountDetails.
     * @param {BankAccountDetailsCreateArgs} args - Arguments to create a BankAccountDetails.
     * @example
     * // Create one BankAccountDetails
     * const BankAccountDetails = await prisma.bankAccountDetails.create({
     *   data: {
     *     // ... data to create a BankAccountDetails
     *   }
     * })
     * 
    **/
    create<T extends BankAccountDetailsCreateArgs>(
      args: SelectSubset<T, BankAccountDetailsCreateArgs>
    ): Prisma__BankAccountDetailsClient<BankAccountDetailsGetPayload<T>>

    /**
     * Create many BankAccountDetails.
     *     @param {BankAccountDetailsCreateManyArgs} args - Arguments to create many BankAccountDetails.
     *     @example
     *     // Create many BankAccountDetails
     *     const bankAccountDetails = await prisma.bankAccountDetails.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BankAccountDetailsCreateManyArgs>(
      args?: SelectSubset<T, BankAccountDetailsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BankAccountDetails.
     * @param {BankAccountDetailsDeleteArgs} args - Arguments to delete one BankAccountDetails.
     * @example
     * // Delete one BankAccountDetails
     * const BankAccountDetails = await prisma.bankAccountDetails.delete({
     *   where: {
     *     // ... filter to delete one BankAccountDetails
     *   }
     * })
     * 
    **/
    delete<T extends BankAccountDetailsDeleteArgs>(
      args: SelectSubset<T, BankAccountDetailsDeleteArgs>
    ): Prisma__BankAccountDetailsClient<BankAccountDetailsGetPayload<T>>

    /**
     * Update one BankAccountDetails.
     * @param {BankAccountDetailsUpdateArgs} args - Arguments to update one BankAccountDetails.
     * @example
     * // Update one BankAccountDetails
     * const bankAccountDetails = await prisma.bankAccountDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BankAccountDetailsUpdateArgs>(
      args: SelectSubset<T, BankAccountDetailsUpdateArgs>
    ): Prisma__BankAccountDetailsClient<BankAccountDetailsGetPayload<T>>

    /**
     * Delete zero or more BankAccountDetails.
     * @param {BankAccountDetailsDeleteManyArgs} args - Arguments to filter BankAccountDetails to delete.
     * @example
     * // Delete a few BankAccountDetails
     * const { count } = await prisma.bankAccountDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BankAccountDetailsDeleteManyArgs>(
      args?: SelectSubset<T, BankAccountDetailsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BankAccountDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BankAccountDetails
     * const bankAccountDetails = await prisma.bankAccountDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BankAccountDetailsUpdateManyArgs>(
      args: SelectSubset<T, BankAccountDetailsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BankAccountDetails.
     * @param {BankAccountDetailsUpsertArgs} args - Arguments to update or create a BankAccountDetails.
     * @example
     * // Update or create a BankAccountDetails
     * const bankAccountDetails = await prisma.bankAccountDetails.upsert({
     *   create: {
     *     // ... data to create a BankAccountDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BankAccountDetails we want to update
     *   }
     * })
    **/
    upsert<T extends BankAccountDetailsUpsertArgs>(
      args: SelectSubset<T, BankAccountDetailsUpsertArgs>
    ): Prisma__BankAccountDetailsClient<BankAccountDetailsGetPayload<T>>

    /**
     * Count the number of BankAccountDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountDetailsCountArgs} args - Arguments to filter BankAccountDetails to count.
     * @example
     * // Count the number of BankAccountDetails
     * const count = await prisma.bankAccountDetails.count({
     *   where: {
     *     // ... the filter for the BankAccountDetails we want to count
     *   }
     * })
    **/
    count<T extends BankAccountDetailsCountArgs>(
      args?: Subset<T, BankAccountDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BankAccountDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BankAccountDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BankAccountDetailsAggregateArgs>(args: Subset<T, BankAccountDetailsAggregateArgs>): Prisma.PrismaPromise<GetBankAccountDetailsAggregateType<T>>

    /**
     * Group by BankAccountDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountDetailsGroupByArgs} args - Group by arguments.
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
      T extends BankAccountDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BankAccountDetailsGroupByArgs['orderBy'] }
        : { orderBy?: BankAccountDetailsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BankAccountDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBankAccountDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for BankAccountDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BankAccountDetailsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

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
   * BankAccountDetails base type for findUnique actions
   */
  export type BankAccountDetailsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the BankAccountDetails
     */
    select?: BankAccountDetailsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BankAccountDetailsInclude | null
    /**
     * Filter, which BankAccountDetails to fetch.
     */
    where: BankAccountDetailsWhereUniqueInput
  }

  /**
   * BankAccountDetails findUnique
   */
  export interface BankAccountDetailsFindUniqueArgs extends BankAccountDetailsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BankAccountDetails findUniqueOrThrow
   */
  export type BankAccountDetailsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BankAccountDetails
     */
    select?: BankAccountDetailsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BankAccountDetailsInclude | null
    /**
     * Filter, which BankAccountDetails to fetch.
     */
    where: BankAccountDetailsWhereUniqueInput
  }


  /**
   * BankAccountDetails base type for findFirst actions
   */
  export type BankAccountDetailsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the BankAccountDetails
     */
    select?: BankAccountDetailsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BankAccountDetailsInclude | null
    /**
     * Filter, which BankAccountDetails to fetch.
     */
    where?: BankAccountDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankAccountDetails to fetch.
     */
    orderBy?: Enumerable<BankAccountDetailsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BankAccountDetails.
     */
    cursor?: BankAccountDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankAccountDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankAccountDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BankAccountDetails.
     */
    distinct?: Enumerable<BankAccountDetailsScalarFieldEnum>
  }

  /**
   * BankAccountDetails findFirst
   */
  export interface BankAccountDetailsFindFirstArgs extends BankAccountDetailsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BankAccountDetails findFirstOrThrow
   */
  export type BankAccountDetailsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BankAccountDetails
     */
    select?: BankAccountDetailsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BankAccountDetailsInclude | null
    /**
     * Filter, which BankAccountDetails to fetch.
     */
    where?: BankAccountDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankAccountDetails to fetch.
     */
    orderBy?: Enumerable<BankAccountDetailsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BankAccountDetails.
     */
    cursor?: BankAccountDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankAccountDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankAccountDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BankAccountDetails.
     */
    distinct?: Enumerable<BankAccountDetailsScalarFieldEnum>
  }


  /**
   * BankAccountDetails findMany
   */
  export type BankAccountDetailsFindManyArgs = {
    /**
     * Select specific fields to fetch from the BankAccountDetails
     */
    select?: BankAccountDetailsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BankAccountDetailsInclude | null
    /**
     * Filter, which BankAccountDetails to fetch.
     */
    where?: BankAccountDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankAccountDetails to fetch.
     */
    orderBy?: Enumerable<BankAccountDetailsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BankAccountDetails.
     */
    cursor?: BankAccountDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankAccountDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankAccountDetails.
     */
    skip?: number
    distinct?: Enumerable<BankAccountDetailsScalarFieldEnum>
  }


  /**
   * BankAccountDetails create
   */
  export type BankAccountDetailsCreateArgs = {
    /**
     * Select specific fields to fetch from the BankAccountDetails
     */
    select?: BankAccountDetailsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BankAccountDetailsInclude | null
    /**
     * The data needed to create a BankAccountDetails.
     */
    data: XOR<BankAccountDetailsCreateInput, BankAccountDetailsUncheckedCreateInput>
  }


  /**
   * BankAccountDetails createMany
   */
  export type BankAccountDetailsCreateManyArgs = {
    /**
     * The data used to create many BankAccountDetails.
     */
    data: Enumerable<BankAccountDetailsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * BankAccountDetails update
   */
  export type BankAccountDetailsUpdateArgs = {
    /**
     * Select specific fields to fetch from the BankAccountDetails
     */
    select?: BankAccountDetailsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BankAccountDetailsInclude | null
    /**
     * The data needed to update a BankAccountDetails.
     */
    data: XOR<BankAccountDetailsUpdateInput, BankAccountDetailsUncheckedUpdateInput>
    /**
     * Choose, which BankAccountDetails to update.
     */
    where: BankAccountDetailsWhereUniqueInput
  }


  /**
   * BankAccountDetails updateMany
   */
  export type BankAccountDetailsUpdateManyArgs = {
    /**
     * The data used to update BankAccountDetails.
     */
    data: XOR<BankAccountDetailsUpdateManyMutationInput, BankAccountDetailsUncheckedUpdateManyInput>
    /**
     * Filter which BankAccountDetails to update
     */
    where?: BankAccountDetailsWhereInput
  }


  /**
   * BankAccountDetails upsert
   */
  export type BankAccountDetailsUpsertArgs = {
    /**
     * Select specific fields to fetch from the BankAccountDetails
     */
    select?: BankAccountDetailsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BankAccountDetailsInclude | null
    /**
     * The filter to search for the BankAccountDetails to update in case it exists.
     */
    where: BankAccountDetailsWhereUniqueInput
    /**
     * In case the BankAccountDetails found by the `where` argument doesn't exist, create a new BankAccountDetails with this data.
     */
    create: XOR<BankAccountDetailsCreateInput, BankAccountDetailsUncheckedCreateInput>
    /**
     * In case the BankAccountDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BankAccountDetailsUpdateInput, BankAccountDetailsUncheckedUpdateInput>
  }


  /**
   * BankAccountDetails delete
   */
  export type BankAccountDetailsDeleteArgs = {
    /**
     * Select specific fields to fetch from the BankAccountDetails
     */
    select?: BankAccountDetailsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BankAccountDetailsInclude | null
    /**
     * Filter which BankAccountDetails to delete.
     */
    where: BankAccountDetailsWhereUniqueInput
  }


  /**
   * BankAccountDetails deleteMany
   */
  export type BankAccountDetailsDeleteManyArgs = {
    /**
     * Filter which BankAccountDetails to delete
     */
    where?: BankAccountDetailsWhereInput
  }


  /**
   * BankAccountDetails without action
   */
  export type BankAccountDetailsArgs = {
    /**
     * Select specific fields to fetch from the BankAccountDetails
     */
    select?: BankAccountDetailsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BankAccountDetailsInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const BankAccountDetailsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    full_name: 'full_name',
    email: 'email',
    upi_id: 'upi_id',
    paytm_number: 'paytm_number'
  };

  export type BankAccountDetailsScalarFieldEnum = (typeof BankAccountDetailsScalarFieldEnum)[keyof typeof BankAccountDetailsScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    user_name: 'user_name',
    full_name: 'full_name',
    email: 'email',
    photo_url: 'photo_url',
    mobile_number: 'mobile_number'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    user_name?: StringFilter | string
    full_name?: StringFilter | string
    email?: StringFilter | string
    photo_url?: StringFilter | string
    mobile_number?: StringFilter | string
    bank_details?: XOR<BankAccountDetailsRelationFilter, BankAccountDetailsWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    user_name?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    photo_url?: SortOrder
    mobile_number?: SortOrder
    bank_details?: BankAccountDetailsOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = {
    id?: number
    user_name?: string
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    user_name?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    photo_url?: SortOrder
    mobile_number?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    user_name?: StringWithAggregatesFilter | string
    full_name?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    photo_url?: StringWithAggregatesFilter | string
    mobile_number?: StringWithAggregatesFilter | string
  }

  export type BankAccountDetailsWhereInput = {
    AND?: Enumerable<BankAccountDetailsWhereInput>
    OR?: Enumerable<BankAccountDetailsWhereInput>
    NOT?: Enumerable<BankAccountDetailsWhereInput>
    id?: IntFilter | number
    user_id?: IntFilter | number
    full_name?: StringFilter | string
    email?: StringFilter | string
    upi_id?: StringFilter | string
    paytm_number?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput> | null
  }

  export type BankAccountDetailsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    upi_id?: SortOrder
    paytm_number?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type BankAccountDetailsWhereUniqueInput = {
    id?: number
    user_id?: number
    email?: string
  }

  export type BankAccountDetailsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    upi_id?: SortOrder
    paytm_number?: SortOrder
    _count?: BankAccountDetailsCountOrderByAggregateInput
    _avg?: BankAccountDetailsAvgOrderByAggregateInput
    _max?: BankAccountDetailsMaxOrderByAggregateInput
    _min?: BankAccountDetailsMinOrderByAggregateInput
    _sum?: BankAccountDetailsSumOrderByAggregateInput
  }

  export type BankAccountDetailsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BankAccountDetailsScalarWhereWithAggregatesInput>
    OR?: Enumerable<BankAccountDetailsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BankAccountDetailsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    user_id?: IntWithAggregatesFilter | number
    full_name?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    upi_id?: StringWithAggregatesFilter | string
    paytm_number?: StringWithAggregatesFilter | string
  }

  export type UserCreateInput = {
    user_name: string
    full_name: string
    email: string
    photo_url: string
    mobile_number: string
    bank_details?: BankAccountDetailsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    user_name: string
    full_name: string
    email: string
    photo_url: string
    mobile_number: string
    bank_details?: BankAccountDetailsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo_url?: StringFieldUpdateOperationsInput | string
    mobile_number?: StringFieldUpdateOperationsInput | string
    bank_details?: BankAccountDetailsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo_url?: StringFieldUpdateOperationsInput | string
    mobile_number?: StringFieldUpdateOperationsInput | string
    bank_details?: BankAccountDetailsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    user_name: string
    full_name: string
    email: string
    photo_url: string
    mobile_number: string
  }

  export type UserUpdateManyMutationInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo_url?: StringFieldUpdateOperationsInput | string
    mobile_number?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo_url?: StringFieldUpdateOperationsInput | string
    mobile_number?: StringFieldUpdateOperationsInput | string
  }

  export type BankAccountDetailsCreateInput = {
    full_name: string
    email: string
    upi_id: string
    paytm_number: string
    user?: UserCreateNestedOneWithoutBank_detailsInput
  }

  export type BankAccountDetailsUncheckedCreateInput = {
    id?: number
    user_id: number
    full_name: string
    email: string
    upi_id: string
    paytm_number: string
  }

  export type BankAccountDetailsUpdateInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    upi_id?: StringFieldUpdateOperationsInput | string
    paytm_number?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutBank_detailsNestedInput
  }

  export type BankAccountDetailsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    upi_id?: StringFieldUpdateOperationsInput | string
    paytm_number?: StringFieldUpdateOperationsInput | string
  }

  export type BankAccountDetailsCreateManyInput = {
    id?: number
    user_id: number
    full_name: string
    email: string
    upi_id: string
    paytm_number: string
  }

  export type BankAccountDetailsUpdateManyMutationInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    upi_id?: StringFieldUpdateOperationsInput | string
    paytm_number?: StringFieldUpdateOperationsInput | string
  }

  export type BankAccountDetailsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    upi_id?: StringFieldUpdateOperationsInput | string
    paytm_number?: StringFieldUpdateOperationsInput | string
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

  export type BankAccountDetailsRelationFilter = {
    is?: BankAccountDetailsWhereInput | null
    isNot?: BankAccountDetailsWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    user_name?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    photo_url?: SortOrder
    mobile_number?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    user_name?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    photo_url?: SortOrder
    mobile_number?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    user_name?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    photo_url?: SortOrder
    mobile_number?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type UserRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type BankAccountDetailsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    upi_id?: SortOrder
    paytm_number?: SortOrder
  }

  export type BankAccountDetailsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type BankAccountDetailsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    upi_id?: SortOrder
    paytm_number?: SortOrder
  }

  export type BankAccountDetailsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    upi_id?: SortOrder
    paytm_number?: SortOrder
  }

  export type BankAccountDetailsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type BankAccountDetailsCreateNestedOneWithoutUserInput = {
    create?: XOR<BankAccountDetailsCreateWithoutUserInput, BankAccountDetailsUncheckedCreateWithoutUserInput>
    connectOrCreate?: BankAccountDetailsCreateOrConnectWithoutUserInput
    connect?: BankAccountDetailsWhereUniqueInput
  }

  export type BankAccountDetailsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<BankAccountDetailsCreateWithoutUserInput, BankAccountDetailsUncheckedCreateWithoutUserInput>
    connectOrCreate?: BankAccountDetailsCreateOrConnectWithoutUserInput
    connect?: BankAccountDetailsWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BankAccountDetailsUpdateOneWithoutUserNestedInput = {
    create?: XOR<BankAccountDetailsCreateWithoutUserInput, BankAccountDetailsUncheckedCreateWithoutUserInput>
    connectOrCreate?: BankAccountDetailsCreateOrConnectWithoutUserInput
    upsert?: BankAccountDetailsUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: BankAccountDetailsWhereUniqueInput
    update?: XOR<BankAccountDetailsUpdateWithoutUserInput, BankAccountDetailsUncheckedUpdateWithoutUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BankAccountDetailsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<BankAccountDetailsCreateWithoutUserInput, BankAccountDetailsUncheckedCreateWithoutUserInput>
    connectOrCreate?: BankAccountDetailsCreateOrConnectWithoutUserInput
    upsert?: BankAccountDetailsUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: BankAccountDetailsWhereUniqueInput
    update?: XOR<BankAccountDetailsUpdateWithoutUserInput, BankAccountDetailsUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutBank_detailsInput = {
    create?: XOR<UserCreateWithoutBank_detailsInput, UserUncheckedCreateWithoutBank_detailsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBank_detailsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutBank_detailsNestedInput = {
    create?: XOR<UserCreateWithoutBank_detailsInput, UserUncheckedCreateWithoutBank_detailsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBank_detailsInput
    upsert?: UserUpsertWithoutBank_detailsInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutBank_detailsInput, UserUncheckedUpdateWithoutBank_detailsInput>
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

  export type BankAccountDetailsCreateWithoutUserInput = {
    full_name: string
    email: string
    upi_id: string
    paytm_number: string
  }

  export type BankAccountDetailsUncheckedCreateWithoutUserInput = {
    id?: number
    full_name: string
    email: string
    upi_id: string
    paytm_number: string
  }

  export type BankAccountDetailsCreateOrConnectWithoutUserInput = {
    where: BankAccountDetailsWhereUniqueInput
    create: XOR<BankAccountDetailsCreateWithoutUserInput, BankAccountDetailsUncheckedCreateWithoutUserInput>
  }

  export type BankAccountDetailsUpsertWithoutUserInput = {
    update: XOR<BankAccountDetailsUpdateWithoutUserInput, BankAccountDetailsUncheckedUpdateWithoutUserInput>
    create: XOR<BankAccountDetailsCreateWithoutUserInput, BankAccountDetailsUncheckedCreateWithoutUserInput>
  }

  export type BankAccountDetailsUpdateWithoutUserInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    upi_id?: StringFieldUpdateOperationsInput | string
    paytm_number?: StringFieldUpdateOperationsInput | string
  }

  export type BankAccountDetailsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    upi_id?: StringFieldUpdateOperationsInput | string
    paytm_number?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutBank_detailsInput = {
    user_name: string
    full_name: string
    email: string
    photo_url: string
    mobile_number: string
  }

  export type UserUncheckedCreateWithoutBank_detailsInput = {
    id?: number
    user_name: string
    full_name: string
    email: string
    photo_url: string
    mobile_number: string
  }

  export type UserCreateOrConnectWithoutBank_detailsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBank_detailsInput, UserUncheckedCreateWithoutBank_detailsInput>
  }

  export type UserUpsertWithoutBank_detailsInput = {
    update: XOR<UserUpdateWithoutBank_detailsInput, UserUncheckedUpdateWithoutBank_detailsInput>
    create: XOR<UserCreateWithoutBank_detailsInput, UserUncheckedCreateWithoutBank_detailsInput>
  }

  export type UserUpdateWithoutBank_detailsInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo_url?: StringFieldUpdateOperationsInput | string
    mobile_number?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutBank_detailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo_url?: StringFieldUpdateOperationsInput | string
    mobile_number?: StringFieldUpdateOperationsInput | string
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
  export const dmmf: runtime.BaseDMMF
}