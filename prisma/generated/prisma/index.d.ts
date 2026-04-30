
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model FileRecord
 * 
 */
export type FileRecord = $Result.DefaultSelection<Prisma.$FileRecordPayload>
/**
 * Model Phase
 * 
 */
export type Phase = $Result.DefaultSelection<Prisma.$PhasePayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model ProjectAsset
 * 
 */
export type ProjectAsset = $Result.DefaultSelection<Prisma.$ProjectAssetPayload>
/**
 * Model Team
 * 
 */
export type Team = $Result.DefaultSelection<Prisma.$TeamPayload>
/**
 * Model TeamMember
 * 
 */
export type TeamMember = $Result.DefaultSelection<Prisma.$TeamMemberPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const FileCategory: {
  MODEL_3D: 'MODEL_3D',
  DRAWING: 'DRAWING',
  DOCUMENT: 'DOCUMENT',
  IMAGE: 'IMAGE',
  OTHER: 'OTHER'
};

export type FileCategory = (typeof FileCategory)[keyof typeof FileCategory]


export const ProcessStatus: {
  uploading: 'uploading',
  processing: 'processing',
  completed: 'completed',
  error: 'error'
};

export type ProcessStatus = (typeof ProcessStatus)[keyof typeof ProcessStatus]


export const ProjectStatus: {
  ACTIVE: 'ACTIVE',
  ON_HOLD: 'ON_HOLD',
  COMPLETED: 'COMPLETED',
  ARCHIVED: 'ARCHIVED'
};

export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus]


export const ProjectVisibility: {
  PRIVATE: 'PRIVATE',
  PUBLIC: 'PUBLIC'
};

export type ProjectVisibility = (typeof ProjectVisibility)[keyof typeof ProjectVisibility]


export const AssetType: {
  FOLDER: 'FOLDER',
  POST: 'POST',
  LINK: 'LINK'
};

export type AssetType = (typeof AssetType)[keyof typeof AssetType]


export const TeamRole: {
  OWNER: 'OWNER',
  ADMIN: 'ADMIN',
  EDITOR: 'EDITOR',
  VIEWER: 'VIEWER'
};

export type TeamRole = (typeof TeamRole)[keyof typeof TeamRole]


export const Role: {
  Free: 'Free',
  Pro: 'Pro'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type FileCategory = $Enums.FileCategory

export const FileCategory: typeof $Enums.FileCategory

export type ProcessStatus = $Enums.ProcessStatus

export const ProcessStatus: typeof $Enums.ProcessStatus

export type ProjectStatus = $Enums.ProjectStatus

export const ProjectStatus: typeof $Enums.ProjectStatus

export type ProjectVisibility = $Enums.ProjectVisibility

export const ProjectVisibility: typeof $Enums.ProjectVisibility

export type AssetType = $Enums.AssetType

export const AssetType: typeof $Enums.AssetType

export type TeamRole = $Enums.TeamRole

export const TeamRole: typeof $Enums.TeamRole

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fileRecord`: Exposes CRUD operations for the **FileRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FileRecords
    * const fileRecords = await prisma.fileRecord.findMany()
    * ```
    */
  get fileRecord(): Prisma.FileRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.phase`: Exposes CRUD operations for the **Phase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Phases
    * const phases = await prisma.phase.findMany()
    * ```
    */
  get phase(): Prisma.PhaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectAsset`: Exposes CRUD operations for the **ProjectAsset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectAssets
    * const projectAssets = await prisma.projectAsset.findMany()
    * ```
    */
  get projectAsset(): Prisma.ProjectAssetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.TeamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teamMember`: Exposes CRUD operations for the **TeamMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeamMembers
    * const teamMembers = await prisma.teamMember.findMany()
    * ```
    */
  get teamMember(): Prisma.TeamMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

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
   * Prisma.skip
   */
  export import skip = runtime.skip


  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.7.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Account: 'Account',
    Comment: 'Comment',
    FileRecord: 'FileRecord',
    Phase: 'Phase',
    Post: 'Post',
    Project: 'Project',
    ProjectAsset: 'ProjectAsset',
    Team: 'Team',
    TeamMember: 'TeamMember',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "account" | "comment" | "fileRecord" | "phase" | "post" | "project" | "projectAsset" | "team" | "teamMember" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      FileRecord: {
        payload: Prisma.$FileRecordPayload<ExtArgs>
        fields: Prisma.FileRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FileRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FileRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileRecordPayload>
          }
          findFirst: {
            args: Prisma.FileRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FileRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileRecordPayload>
          }
          findMany: {
            args: Prisma.FileRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileRecordPayload>[]
          }
          create: {
            args: Prisma.FileRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileRecordPayload>
          }
          createMany: {
            args: Prisma.FileRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FileRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileRecordPayload>[]
          }
          delete: {
            args: Prisma.FileRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileRecordPayload>
          }
          update: {
            args: Prisma.FileRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileRecordPayload>
          }
          deleteMany: {
            args: Prisma.FileRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FileRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FileRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileRecordPayload>[]
          }
          upsert: {
            args: Prisma.FileRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileRecordPayload>
          }
          aggregate: {
            args: Prisma.FileRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFileRecord>
          }
          groupBy: {
            args: Prisma.FileRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<FileRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.FileRecordCountArgs<ExtArgs>
            result: $Utils.Optional<FileRecordCountAggregateOutputType> | number
          }
        }
      }
      Phase: {
        payload: Prisma.$PhasePayload<ExtArgs>
        fields: Prisma.PhaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhasePayload>
          }
          findFirst: {
            args: Prisma.PhaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhasePayload>
          }
          findMany: {
            args: Prisma.PhaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhasePayload>[]
          }
          create: {
            args: Prisma.PhaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhasePayload>
          }
          createMany: {
            args: Prisma.PhaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PhaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhasePayload>[]
          }
          delete: {
            args: Prisma.PhaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhasePayload>
          }
          update: {
            args: Prisma.PhaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhasePayload>
          }
          deleteMany: {
            args: Prisma.PhaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PhaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhasePayload>[]
          }
          upsert: {
            args: Prisma.PhaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhasePayload>
          }
          aggregate: {
            args: Prisma.PhaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhase>
          }
          groupBy: {
            args: Prisma.PhaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhaseCountArgs<ExtArgs>
            result: $Utils.Optional<PhaseCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      ProjectAsset: {
        payload: Prisma.$ProjectAssetPayload<ExtArgs>
        fields: Prisma.ProjectAssetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectAssetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAssetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectAssetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAssetPayload>
          }
          findFirst: {
            args: Prisma.ProjectAssetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAssetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectAssetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAssetPayload>
          }
          findMany: {
            args: Prisma.ProjectAssetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAssetPayload>[]
          }
          create: {
            args: Prisma.ProjectAssetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAssetPayload>
          }
          createMany: {
            args: Prisma.ProjectAssetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectAssetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAssetPayload>[]
          }
          delete: {
            args: Prisma.ProjectAssetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAssetPayload>
          }
          update: {
            args: Prisma.ProjectAssetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAssetPayload>
          }
          deleteMany: {
            args: Prisma.ProjectAssetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectAssetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectAssetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAssetPayload>[]
          }
          upsert: {
            args: Prisma.ProjectAssetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAssetPayload>
          }
          aggregate: {
            args: Prisma.ProjectAssetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectAsset>
          }
          groupBy: {
            args: Prisma.ProjectAssetGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectAssetGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectAssetCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectAssetCountAggregateOutputType> | number
          }
        }
      }
      Team: {
        payload: Prisma.$TeamPayload<ExtArgs>
        fields: Prisma.TeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findFirst: {
            args: Prisma.TeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findMany: {
            args: Prisma.TeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          create: {
            args: Prisma.TeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          createMany: {
            args: Prisma.TeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          delete: {
            args: Prisma.TeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          update: {
            args: Prisma.TeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          deleteMany: {
            args: Prisma.TeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          upsert: {
            args: Prisma.TeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.TeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamCountArgs<ExtArgs>
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
      TeamMember: {
        payload: Prisma.$TeamMemberPayload<ExtArgs>
        fields: Prisma.TeamMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          findFirst: {
            args: Prisma.TeamMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          findMany: {
            args: Prisma.TeamMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>[]
          }
          create: {
            args: Prisma.TeamMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          createMany: {
            args: Prisma.TeamMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>[]
          }
          delete: {
            args: Prisma.TeamMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          update: {
            args: Prisma.TeamMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          deleteMany: {
            args: Prisma.TeamMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>[]
          }
          upsert: {
            args: Prisma.TeamMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          aggregate: {
            args: Prisma.TeamMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeamMember>
          }
          groupBy: {
            args: Prisma.TeamMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamMemberCountArgs<ExtArgs>
            result: $Utils.Optional<TeamMemberCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    account?: AccountOmit
    comment?: CommentOmit
    fileRecord?: FileRecordOmit
    phase?: PhaseOmit
    post?: PostOmit
    project?: ProjectOmit
    projectAsset?: ProjectAssetOmit
    team?: TeamOmit
    teamMember?: TeamMemberOmit
    user?: UserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CommentCountOutputType
   */

  export type CommentCountOutputType = {
    replies: number
  }

  export type CommentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replies?: boolean | CommentCountOutputTypeCountRepliesArgs
  }

  // Custom InputTypes
  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentCountOutputType
     */
    select?: CommentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeCountRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput | $Types.Skip
  }


  /**
   * Count Type PhaseCountOutputType
   */

  export type PhaseCountOutputType = {
    rootAssets: number
  }

  export type PhaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rootAssets?: boolean | PhaseCountOutputTypeCountRootAssetsArgs
  }

  // Custom InputTypes
  /**
   * PhaseCountOutputType without action
   */
  export type PhaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhaseCountOutputType
     */
    select?: PhaseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PhaseCountOutputType without action
   */
  export type PhaseCountOutputTypeCountRootAssetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectAssetWhereInput | $Types.Skip
  }


  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    files: number
    comments: number
    projectAssets: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    files?: boolean | PostCountOutputTypeCountFilesArgs
    comments?: boolean | PostCountOutputTypeCountCommentsArgs
    projectAssets?: boolean | PostCountOutputTypeCountProjectAssetsArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileRecordWhereInput | $Types.Skip
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput | $Types.Skip
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountProjectAssetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectAssetWhereInput | $Types.Skip
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    phases: number
    assets: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    phases?: boolean | ProjectCountOutputTypeCountPhasesArgs
    assets?: boolean | ProjectCountOutputTypeCountAssetsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountPhasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhaseWhereInput | $Types.Skip
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountAssetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectAssetWhereInput | $Types.Skip
  }


  /**
   * Count Type ProjectAssetCountOutputType
   */

  export type ProjectAssetCountOutputType = {
    children: number
  }

  export type ProjectAssetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | ProjectAssetCountOutputTypeCountChildrenArgs
  }

  // Custom InputTypes
  /**
   * ProjectAssetCountOutputType without action
   */
  export type ProjectAssetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAssetCountOutputType
     */
    select?: ProjectAssetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectAssetCountOutputType without action
   */
  export type ProjectAssetCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectAssetWhereInput | $Types.Skip
  }


  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    members: number
    posts: number
    files: number
    projects: number
  }

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | TeamCountOutputTypeCountMembersArgs
    posts?: boolean | TeamCountOutputTypeCountPostsArgs
    files?: boolean | TeamCountOutputTypeCountFilesArgs
    projects?: boolean | TeamCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamMemberWhereInput | $Types.Skip
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput | $Types.Skip
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileRecordWhereInput | $Types.Skip
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput | $Types.Skip
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    teamMembers: number
    accounts: number
    fileRecords: number
    posts: number
    comments: number
    projects: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teamMembers?: boolean | UserCountOutputTypeCountTeamMembersArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    fileRecords?: boolean | UserCountOutputTypeCountFileRecordsArgs
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    projects?: boolean | UserCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTeamMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamMemberWhereInput | $Types.Skip
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput | $Types.Skip
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFileRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileRecordWhereInput | $Types.Skip
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput | $Types.Skip
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput | $Types.Skip
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput | $Types.Skip
  }


  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    password: string | null
    provider: string | null
    providerAccountId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    password: string | null
    provider: string | null
    providerAccountId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    password: number
    provider: number
    providerAccountId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true | $Types.Skip
    userId?: true | $Types.Skip
    password?: true | $Types.Skip
    provider?: true | $Types.Skip
    providerAccountId?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type AccountMaxAggregateInputType = {
    id?: true | $Types.Skip
    userId?: true | $Types.Skip
    password?: true | $Types.Skip
    provider?: true | $Types.Skip
    providerAccountId?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type AccountCountAggregateInputType = {
    id?: true | $Types.Skip
    userId?: true | $Types.Skip
    password?: true | $Types.Skip
    provider?: true | $Types.Skip
    providerAccountId?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput | $Types.Skip
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[] | $Types.Skip
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    password: string | null
    provider: string
    providerAccountId: string
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    userId?: boolean | $Types.Skip
    password?: boolean | $Types.Skip
    provider?: boolean | $Types.Skip
    providerAccountId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    userId?: boolean | $Types.Skip
    password?: boolean | $Types.Skip
    provider?: boolean | $Types.Skip
    providerAccountId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    userId?: boolean | $Types.Skip
    password?: boolean | $Types.Skip
    provider?: boolean | $Types.Skip
    providerAccountId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean | $Types.Skip
    userId?: boolean | $Types.Skip
    password?: boolean | $Types.Skip
    provider?: boolean | $Types.Skip
    providerAccountId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "password" | "provider" | "providerAccountId" | "createdAt" | "updatedAt", ExtArgs["result"]["account"], $Types.Skip>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      password: string | null
      provider: string
      providerAccountId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput | $Types.Skip
    /**
     * Limit how many Accounts to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput | $Types.Skip
    /**
     * Limit how many Accounts to update.
     */
    limit?: number | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput | $Types.Skip
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
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
    content: string | null
    postId: string | null
    userId: string | null
    parentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    content: string | null
    postId: string | null
    userId: string | null
    parentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    content: number
    postId: number
    userId: number
    parentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    id?: true | $Types.Skip
    content?: true | $Types.Skip
    postId?: true | $Types.Skip
    userId?: true | $Types.Skip
    parentId?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type CommentMaxAggregateInputType = {
    id?: true | $Types.Skip
    content?: true | $Types.Skip
    postId?: true | $Types.Skip
    userId?: true | $Types.Skip
    parentId?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type CommentCountAggregateInputType = {
    id?: true | $Types.Skip
    content?: true | $Types.Skip
    postId?: true | $Types.Skip
    userId?: true | $Types.Skip
    parentId?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number | $Types.Skip
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




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput | $Types.Skip
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[] | $Types.Skip
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    content: string
    postId: string
    userId: string
    parentId: string | null
    createdAt: Date
    updatedAt: Date
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    content?: boolean | $Types.Skip
    postId?: boolean | $Types.Skip
    userId?: boolean | $Types.Skip
    parentId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    post?: boolean | PostDefaultArgs<ExtArgs> | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    parent?: boolean | Comment$parentArgs<ExtArgs> | $Types.Skip
    replies?: boolean | Comment$repliesArgs<ExtArgs> | $Types.Skip
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    content?: boolean | $Types.Skip
    postId?: boolean | $Types.Skip
    userId?: boolean | $Types.Skip
    parentId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    post?: boolean | PostDefaultArgs<ExtArgs> | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    parent?: boolean | Comment$parentArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    content?: boolean | $Types.Skip
    postId?: boolean | $Types.Skip
    userId?: boolean | $Types.Skip
    parentId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    post?: boolean | PostDefaultArgs<ExtArgs> | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    parent?: boolean | Comment$parentArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean | $Types.Skip
    content?: boolean | $Types.Skip
    postId?: boolean | $Types.Skip
    userId?: boolean | $Types.Skip
    parentId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "postId" | "userId" | "parentId" | "createdAt" | "updatedAt", ExtArgs["result"]["comment"], $Types.Skip>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs> | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    parent?: boolean | Comment$parentArgs<ExtArgs> | $Types.Skip
    replies?: boolean | Comment$repliesArgs<ExtArgs> | $Types.Skip
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs> | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    parent?: boolean | Comment$parentArgs<ExtArgs> | $Types.Skip
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs> | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    parent?: boolean | Comment$parentArgs<ExtArgs> | $Types.Skip
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      parent: Prisma.$CommentPayload<ExtArgs> | null
      replies: Prisma.$CommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      postId: string
      userId: string
      parentId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
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
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
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
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

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
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parent<T extends Comment$parentArgs<ExtArgs> = {}>(args?: Subset<T, Comment$parentArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    replies<T extends Comment$repliesArgs<ExtArgs> = {}>(args?: Subset<T, Comment$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly content: FieldRef<"Comment", 'String'>
    readonly postId: FieldRef<"Comment", 'String'>
    readonly userId: FieldRef<"Comment", 'String'>
    readonly parentId: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
    readonly updatedAt: FieldRef<"Comment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput | $Types.Skip
    /**
     * Limit how many Comments to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput | $Types.Skip
    /**
     * Limit how many Comments to update.
     */
    limit?: number | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput | $Types.Skip
    /**
     * Limit how many Comments to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Comment.parent
   */
  export type Comment$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput | $Types.Skip
  }

  /**
   * Comment.replies
   */
  export type Comment$repliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput | $Types.Skip
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[] | $Types.Skip
    cursor?: CommentWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model FileRecord
   */

  export type AggregateFileRecord = {
    _count: FileRecordCountAggregateOutputType | null
    _min: FileRecordMinAggregateOutputType | null
    _max: FileRecordMaxAggregateOutputType | null
  }

  export type FileRecordMinAggregateOutputType = {
    id: string | null
    shortId: string | null
    name: string | null
    fileId: string | null
    viewerFileId: string | null
    category: $Enums.FileCategory | null
    extension: string | null
    size: string | null
    status: $Enums.ProcessStatus | null
    errorMessage: string | null
    teamId: string | null
    uploaderId: string | null
    postId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FileRecordMaxAggregateOutputType = {
    id: string | null
    shortId: string | null
    name: string | null
    fileId: string | null
    viewerFileId: string | null
    category: $Enums.FileCategory | null
    extension: string | null
    size: string | null
    status: $Enums.ProcessStatus | null
    errorMessage: string | null
    teamId: string | null
    uploaderId: string | null
    postId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FileRecordCountAggregateOutputType = {
    id: number
    shortId: number
    name: number
    fileId: number
    viewerFileId: number
    category: number
    extension: number
    size: number
    status: number
    errorMessage: number
    teamId: number
    uploaderId: number
    postId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FileRecordMinAggregateInputType = {
    id?: true | $Types.Skip
    shortId?: true | $Types.Skip
    name?: true | $Types.Skip
    fileId?: true | $Types.Skip
    viewerFileId?: true | $Types.Skip
    category?: true | $Types.Skip
    extension?: true | $Types.Skip
    size?: true | $Types.Skip
    status?: true | $Types.Skip
    errorMessage?: true | $Types.Skip
    teamId?: true | $Types.Skip
    uploaderId?: true | $Types.Skip
    postId?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type FileRecordMaxAggregateInputType = {
    id?: true | $Types.Skip
    shortId?: true | $Types.Skip
    name?: true | $Types.Skip
    fileId?: true | $Types.Skip
    viewerFileId?: true | $Types.Skip
    category?: true | $Types.Skip
    extension?: true | $Types.Skip
    size?: true | $Types.Skip
    status?: true | $Types.Skip
    errorMessage?: true | $Types.Skip
    teamId?: true | $Types.Skip
    uploaderId?: true | $Types.Skip
    postId?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type FileRecordCountAggregateInputType = {
    id?: true | $Types.Skip
    shortId?: true | $Types.Skip
    name?: true | $Types.Skip
    fileId?: true | $Types.Skip
    viewerFileId?: true | $Types.Skip
    category?: true | $Types.Skip
    extension?: true | $Types.Skip
    size?: true | $Types.Skip
    status?: true | $Types.Skip
    errorMessage?: true | $Types.Skip
    teamId?: true | $Types.Skip
    uploaderId?: true | $Types.Skip
    postId?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type FileRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FileRecord to aggregate.
     */
    where?: FileRecordWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileRecords to fetch.
     */
    orderBy?: FileRecordOrderByWithRelationInput | FileRecordOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FileRecordWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileRecords from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileRecords.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FileRecords
    **/
    _count?: true | FileRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileRecordMaxAggregateInputType
  }

  export type GetFileRecordAggregateType<T extends FileRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateFileRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFileRecord[P]>
      : GetScalarType<T[P], AggregateFileRecord[P]>
  }




  export type FileRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileRecordWhereInput | $Types.Skip
    orderBy?: FileRecordOrderByWithAggregationInput | FileRecordOrderByWithAggregationInput[] | $Types.Skip
    by: FileRecordScalarFieldEnum[] | FileRecordScalarFieldEnum
    having?: FileRecordScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: FileRecordCountAggregateInputType | true
    _min?: FileRecordMinAggregateInputType
    _max?: FileRecordMaxAggregateInputType
  }

  export type FileRecordGroupByOutputType = {
    id: string
    shortId: string | null
    name: string
    fileId: string
    viewerFileId: string | null
    category: $Enums.FileCategory
    extension: string | null
    size: string
    status: $Enums.ProcessStatus
    errorMessage: string | null
    teamId: string | null
    uploaderId: string
    postId: string | null
    createdAt: Date
    updatedAt: Date
    _count: FileRecordCountAggregateOutputType | null
    _min: FileRecordMinAggregateOutputType | null
    _max: FileRecordMaxAggregateOutputType | null
  }

  type GetFileRecordGroupByPayload<T extends FileRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FileRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileRecordGroupByOutputType[P]>
            : GetScalarType<T[P], FileRecordGroupByOutputType[P]>
        }
      >
    >


  export type FileRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    shortId?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    fileId?: boolean | $Types.Skip
    viewerFileId?: boolean | $Types.Skip
    category?: boolean | $Types.Skip
    extension?: boolean | $Types.Skip
    size?: boolean | $Types.Skip
    status?: boolean | $Types.Skip
    errorMessage?: boolean | $Types.Skip
    teamId?: boolean | $Types.Skip
    uploaderId?: boolean | $Types.Skip
    postId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    team?: boolean | FileRecord$teamArgs<ExtArgs> | $Types.Skip
    uploader?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    post?: boolean | FileRecord$postArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["fileRecord"]>

  export type FileRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    shortId?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    fileId?: boolean | $Types.Skip
    viewerFileId?: boolean | $Types.Skip
    category?: boolean | $Types.Skip
    extension?: boolean | $Types.Skip
    size?: boolean | $Types.Skip
    status?: boolean | $Types.Skip
    errorMessage?: boolean | $Types.Skip
    teamId?: boolean | $Types.Skip
    uploaderId?: boolean | $Types.Skip
    postId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    team?: boolean | FileRecord$teamArgs<ExtArgs> | $Types.Skip
    uploader?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    post?: boolean | FileRecord$postArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["fileRecord"]>

  export type FileRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    shortId?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    fileId?: boolean | $Types.Skip
    viewerFileId?: boolean | $Types.Skip
    category?: boolean | $Types.Skip
    extension?: boolean | $Types.Skip
    size?: boolean | $Types.Skip
    status?: boolean | $Types.Skip
    errorMessage?: boolean | $Types.Skip
    teamId?: boolean | $Types.Skip
    uploaderId?: boolean | $Types.Skip
    postId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    team?: boolean | FileRecord$teamArgs<ExtArgs> | $Types.Skip
    uploader?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    post?: boolean | FileRecord$postArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["fileRecord"]>

  export type FileRecordSelectScalar = {
    id?: boolean | $Types.Skip
    shortId?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    fileId?: boolean | $Types.Skip
    viewerFileId?: boolean | $Types.Skip
    category?: boolean | $Types.Skip
    extension?: boolean | $Types.Skip
    size?: boolean | $Types.Skip
    status?: boolean | $Types.Skip
    errorMessage?: boolean | $Types.Skip
    teamId?: boolean | $Types.Skip
    uploaderId?: boolean | $Types.Skip
    postId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
  }

  export type FileRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shortId" | "name" | "fileId" | "viewerFileId" | "category" | "extension" | "size" | "status" | "errorMessage" | "teamId" | "uploaderId" | "postId" | "createdAt" | "updatedAt", ExtArgs["result"]["fileRecord"], $Types.Skip>
  export type FileRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | FileRecord$teamArgs<ExtArgs> | $Types.Skip
    uploader?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    post?: boolean | FileRecord$postArgs<ExtArgs> | $Types.Skip
  }
  export type FileRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | FileRecord$teamArgs<ExtArgs> | $Types.Skip
    uploader?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    post?: boolean | FileRecord$postArgs<ExtArgs> | $Types.Skip
  }
  export type FileRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | FileRecord$teamArgs<ExtArgs> | $Types.Skip
    uploader?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    post?: boolean | FileRecord$postArgs<ExtArgs> | $Types.Skip
  }

  export type $FileRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FileRecord"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs> | null
      uploader: Prisma.$UserPayload<ExtArgs>
      post: Prisma.$PostPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shortId: string | null
      name: string
      fileId: string
      viewerFileId: string | null
      category: $Enums.FileCategory
      extension: string | null
      size: string
      status: $Enums.ProcessStatus
      errorMessage: string | null
      teamId: string | null
      uploaderId: string
      postId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fileRecord"]>
    composites: {}
  }

  type FileRecordGetPayload<S extends boolean | null | undefined | FileRecordDefaultArgs> = $Result.GetResult<Prisma.$FileRecordPayload, S>

  type FileRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FileRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FileRecordCountAggregateInputType | true
    }

  export interface FileRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FileRecord'], meta: { name: 'FileRecord' } }
    /**
     * Find zero or one FileRecord that matches the filter.
     * @param {FileRecordFindUniqueArgs} args - Arguments to find a FileRecord
     * @example
     * // Get one FileRecord
     * const fileRecord = await prisma.fileRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FileRecordFindUniqueArgs>(args: SelectSubset<T, FileRecordFindUniqueArgs<ExtArgs>>): Prisma__FileRecordClient<$Result.GetResult<Prisma.$FileRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FileRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FileRecordFindUniqueOrThrowArgs} args - Arguments to find a FileRecord
     * @example
     * // Get one FileRecord
     * const fileRecord = await prisma.fileRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FileRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, FileRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FileRecordClient<$Result.GetResult<Prisma.$FileRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FileRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileRecordFindFirstArgs} args - Arguments to find a FileRecord
     * @example
     * // Get one FileRecord
     * const fileRecord = await prisma.fileRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FileRecordFindFirstArgs>(args?: SelectSubset<T, FileRecordFindFirstArgs<ExtArgs>>): Prisma__FileRecordClient<$Result.GetResult<Prisma.$FileRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FileRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileRecordFindFirstOrThrowArgs} args - Arguments to find a FileRecord
     * @example
     * // Get one FileRecord
     * const fileRecord = await prisma.fileRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FileRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, FileRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__FileRecordClient<$Result.GetResult<Prisma.$FileRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FileRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FileRecords
     * const fileRecords = await prisma.fileRecord.findMany()
     * 
     * // Get first 10 FileRecords
     * const fileRecords = await prisma.fileRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fileRecordWithIdOnly = await prisma.fileRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FileRecordFindManyArgs>(args?: SelectSubset<T, FileRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FileRecord.
     * @param {FileRecordCreateArgs} args - Arguments to create a FileRecord.
     * @example
     * // Create one FileRecord
     * const FileRecord = await prisma.fileRecord.create({
     *   data: {
     *     // ... data to create a FileRecord
     *   }
     * })
     * 
     */
    create<T extends FileRecordCreateArgs>(args: SelectSubset<T, FileRecordCreateArgs<ExtArgs>>): Prisma__FileRecordClient<$Result.GetResult<Prisma.$FileRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FileRecords.
     * @param {FileRecordCreateManyArgs} args - Arguments to create many FileRecords.
     * @example
     * // Create many FileRecords
     * const fileRecord = await prisma.fileRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FileRecordCreateManyArgs>(args?: SelectSubset<T, FileRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FileRecords and returns the data saved in the database.
     * @param {FileRecordCreateManyAndReturnArgs} args - Arguments to create many FileRecords.
     * @example
     * // Create many FileRecords
     * const fileRecord = await prisma.fileRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FileRecords and only return the `id`
     * const fileRecordWithIdOnly = await prisma.fileRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FileRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, FileRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FileRecord.
     * @param {FileRecordDeleteArgs} args - Arguments to delete one FileRecord.
     * @example
     * // Delete one FileRecord
     * const FileRecord = await prisma.fileRecord.delete({
     *   where: {
     *     // ... filter to delete one FileRecord
     *   }
     * })
     * 
     */
    delete<T extends FileRecordDeleteArgs>(args: SelectSubset<T, FileRecordDeleteArgs<ExtArgs>>): Prisma__FileRecordClient<$Result.GetResult<Prisma.$FileRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FileRecord.
     * @param {FileRecordUpdateArgs} args - Arguments to update one FileRecord.
     * @example
     * // Update one FileRecord
     * const fileRecord = await prisma.fileRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FileRecordUpdateArgs>(args: SelectSubset<T, FileRecordUpdateArgs<ExtArgs>>): Prisma__FileRecordClient<$Result.GetResult<Prisma.$FileRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FileRecords.
     * @param {FileRecordDeleteManyArgs} args - Arguments to filter FileRecords to delete.
     * @example
     * // Delete a few FileRecords
     * const { count } = await prisma.fileRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FileRecordDeleteManyArgs>(args?: SelectSubset<T, FileRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FileRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FileRecords
     * const fileRecord = await prisma.fileRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FileRecordUpdateManyArgs>(args: SelectSubset<T, FileRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FileRecords and returns the data updated in the database.
     * @param {FileRecordUpdateManyAndReturnArgs} args - Arguments to update many FileRecords.
     * @example
     * // Update many FileRecords
     * const fileRecord = await prisma.fileRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FileRecords and only return the `id`
     * const fileRecordWithIdOnly = await prisma.fileRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FileRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, FileRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FileRecord.
     * @param {FileRecordUpsertArgs} args - Arguments to update or create a FileRecord.
     * @example
     * // Update or create a FileRecord
     * const fileRecord = await prisma.fileRecord.upsert({
     *   create: {
     *     // ... data to create a FileRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FileRecord we want to update
     *   }
     * })
     */
    upsert<T extends FileRecordUpsertArgs>(args: SelectSubset<T, FileRecordUpsertArgs<ExtArgs>>): Prisma__FileRecordClient<$Result.GetResult<Prisma.$FileRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FileRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileRecordCountArgs} args - Arguments to filter FileRecords to count.
     * @example
     * // Count the number of FileRecords
     * const count = await prisma.fileRecord.count({
     *   where: {
     *     // ... the filter for the FileRecords we want to count
     *   }
     * })
    **/
    count<T extends FileRecordCountArgs>(
      args?: Subset<T, FileRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FileRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FileRecordAggregateArgs>(args: Subset<T, FileRecordAggregateArgs>): Prisma.PrismaPromise<GetFileRecordAggregateType<T>>

    /**
     * Group by FileRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileRecordGroupByArgs} args - Group by arguments.
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
      T extends FileRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileRecordGroupByArgs['orderBy'] }
        : { orderBy?: FileRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, FileRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FileRecord model
   */
  readonly fields: FileRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FileRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FileRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends FileRecord$teamArgs<ExtArgs> = {}>(args?: Subset<T, FileRecord$teamArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    uploader<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends FileRecord$postArgs<ExtArgs> = {}>(args?: Subset<T, FileRecord$postArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FileRecord model
   */
  interface FileRecordFieldRefs {
    readonly id: FieldRef<"FileRecord", 'String'>
    readonly shortId: FieldRef<"FileRecord", 'String'>
    readonly name: FieldRef<"FileRecord", 'String'>
    readonly fileId: FieldRef<"FileRecord", 'String'>
    readonly viewerFileId: FieldRef<"FileRecord", 'String'>
    readonly category: FieldRef<"FileRecord", 'FileCategory'>
    readonly extension: FieldRef<"FileRecord", 'String'>
    readonly size: FieldRef<"FileRecord", 'String'>
    readonly status: FieldRef<"FileRecord", 'ProcessStatus'>
    readonly errorMessage: FieldRef<"FileRecord", 'String'>
    readonly teamId: FieldRef<"FileRecord", 'String'>
    readonly uploaderId: FieldRef<"FileRecord", 'String'>
    readonly postId: FieldRef<"FileRecord", 'String'>
    readonly createdAt: FieldRef<"FileRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"FileRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FileRecord findUnique
   */
  export type FileRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileRecord
     */
    select?: FileRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileRecord
     */
    omit?: FileRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileRecordInclude<ExtArgs> | null
    /**
     * Filter, which FileRecord to fetch.
     */
    where: FileRecordWhereUniqueInput
  }

  /**
   * FileRecord findUniqueOrThrow
   */
  export type FileRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileRecord
     */
    select?: FileRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileRecord
     */
    omit?: FileRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileRecordInclude<ExtArgs> | null
    /**
     * Filter, which FileRecord to fetch.
     */
    where: FileRecordWhereUniqueInput
  }

  /**
   * FileRecord findFirst
   */
  export type FileRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileRecord
     */
    select?: FileRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileRecord
     */
    omit?: FileRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileRecordInclude<ExtArgs> | null
    /**
     * Filter, which FileRecord to fetch.
     */
    where?: FileRecordWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileRecords to fetch.
     */
    orderBy?: FileRecordOrderByWithRelationInput | FileRecordOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FileRecords.
     */
    cursor?: FileRecordWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileRecords from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileRecords.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileRecords.
     */
    distinct?: FileRecordScalarFieldEnum | FileRecordScalarFieldEnum[] | $Types.Skip
  }

  /**
   * FileRecord findFirstOrThrow
   */
  export type FileRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileRecord
     */
    select?: FileRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileRecord
     */
    omit?: FileRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileRecordInclude<ExtArgs> | null
    /**
     * Filter, which FileRecord to fetch.
     */
    where?: FileRecordWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileRecords to fetch.
     */
    orderBy?: FileRecordOrderByWithRelationInput | FileRecordOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FileRecords.
     */
    cursor?: FileRecordWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileRecords from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileRecords.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileRecords.
     */
    distinct?: FileRecordScalarFieldEnum | FileRecordScalarFieldEnum[] | $Types.Skip
  }

  /**
   * FileRecord findMany
   */
  export type FileRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileRecord
     */
    select?: FileRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileRecord
     */
    omit?: FileRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileRecordInclude<ExtArgs> | null
    /**
     * Filter, which FileRecords to fetch.
     */
    where?: FileRecordWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileRecords to fetch.
     */
    orderBy?: FileRecordOrderByWithRelationInput | FileRecordOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FileRecords.
     */
    cursor?: FileRecordWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileRecords from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileRecords.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileRecords.
     */
    distinct?: FileRecordScalarFieldEnum | FileRecordScalarFieldEnum[] | $Types.Skip
  }

  /**
   * FileRecord create
   */
  export type FileRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileRecord
     */
    select?: FileRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileRecord
     */
    omit?: FileRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a FileRecord.
     */
    data: XOR<FileRecordCreateInput, FileRecordUncheckedCreateInput>
  }

  /**
   * FileRecord createMany
   */
  export type FileRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FileRecords.
     */
    data: FileRecordCreateManyInput | FileRecordCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * FileRecord createManyAndReturn
   */
  export type FileRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileRecord
     */
    select?: FileRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FileRecord
     */
    omit?: FileRecordOmit<ExtArgs> | null
    /**
     * The data used to create many FileRecords.
     */
    data: FileRecordCreateManyInput | FileRecordCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FileRecord update
   */
  export type FileRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileRecord
     */
    select?: FileRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileRecord
     */
    omit?: FileRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a FileRecord.
     */
    data: XOR<FileRecordUpdateInput, FileRecordUncheckedUpdateInput>
    /**
     * Choose, which FileRecord to update.
     */
    where: FileRecordWhereUniqueInput
  }

  /**
   * FileRecord updateMany
   */
  export type FileRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FileRecords.
     */
    data: XOR<FileRecordUpdateManyMutationInput, FileRecordUncheckedUpdateManyInput>
    /**
     * Filter which FileRecords to update
     */
    where?: FileRecordWhereInput | $Types.Skip
    /**
     * Limit how many FileRecords to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * FileRecord updateManyAndReturn
   */
  export type FileRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileRecord
     */
    select?: FileRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FileRecord
     */
    omit?: FileRecordOmit<ExtArgs> | null
    /**
     * The data used to update FileRecords.
     */
    data: XOR<FileRecordUpdateManyMutationInput, FileRecordUncheckedUpdateManyInput>
    /**
     * Filter which FileRecords to update
     */
    where?: FileRecordWhereInput | $Types.Skip
    /**
     * Limit how many FileRecords to update.
     */
    limit?: number | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FileRecord upsert
   */
  export type FileRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileRecord
     */
    select?: FileRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileRecord
     */
    omit?: FileRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the FileRecord to update in case it exists.
     */
    where: FileRecordWhereUniqueInput
    /**
     * In case the FileRecord found by the `where` argument doesn't exist, create a new FileRecord with this data.
     */
    create: XOR<FileRecordCreateInput, FileRecordUncheckedCreateInput>
    /**
     * In case the FileRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FileRecordUpdateInput, FileRecordUncheckedUpdateInput>
  }

  /**
   * FileRecord delete
   */
  export type FileRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileRecord
     */
    select?: FileRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileRecord
     */
    omit?: FileRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileRecordInclude<ExtArgs> | null
    /**
     * Filter which FileRecord to delete.
     */
    where: FileRecordWhereUniqueInput
  }

  /**
   * FileRecord deleteMany
   */
  export type FileRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FileRecords to delete
     */
    where?: FileRecordWhereInput | $Types.Skip
    /**
     * Limit how many FileRecords to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * FileRecord.team
   */
  export type FileRecord$teamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput | $Types.Skip
  }

  /**
   * FileRecord.post
   */
  export type FileRecord$postArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput | $Types.Skip
  }

  /**
   * FileRecord without action
   */
  export type FileRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileRecord
     */
    select?: FileRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileRecord
     */
    omit?: FileRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileRecordInclude<ExtArgs> | null
  }


  /**
   * Model Phase
   */

  export type AggregatePhase = {
    _count: PhaseCountAggregateOutputType | null
    _avg: PhaseAvgAggregateOutputType | null
    _sum: PhaseSumAggregateOutputType | null
    _min: PhaseMinAggregateOutputType | null
    _max: PhaseMaxAggregateOutputType | null
  }

  export type PhaseAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type PhaseSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type PhaseMinAggregateOutputType = {
    id: string | null
    name: string | null
    sortOrder: number | null
    projectId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PhaseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    sortOrder: number | null
    projectId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PhaseCountAggregateOutputType = {
    id: number
    name: number
    sortOrder: number
    projectId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PhaseAvgAggregateInputType = {
    sortOrder?: true | $Types.Skip
  }

  export type PhaseSumAggregateInputType = {
    sortOrder?: true | $Types.Skip
  }

  export type PhaseMinAggregateInputType = {
    id?: true | $Types.Skip
    name?: true | $Types.Skip
    sortOrder?: true | $Types.Skip
    projectId?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type PhaseMaxAggregateInputType = {
    id?: true | $Types.Skip
    name?: true | $Types.Skip
    sortOrder?: true | $Types.Skip
    projectId?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type PhaseCountAggregateInputType = {
    id?: true | $Types.Skip
    name?: true | $Types.Skip
    sortOrder?: true | $Types.Skip
    projectId?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type PhaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Phase to aggregate.
     */
    where?: PhaseWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Phases to fetch.
     */
    orderBy?: PhaseOrderByWithRelationInput | PhaseOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhaseWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Phases from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Phases.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Phases
    **/
    _count?: true | PhaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PhaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PhaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhaseMaxAggregateInputType
  }

  export type GetPhaseAggregateType<T extends PhaseAggregateArgs> = {
        [P in keyof T & keyof AggregatePhase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhase[P]>
      : GetScalarType<T[P], AggregatePhase[P]>
  }




  export type PhaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhaseWhereInput | $Types.Skip
    orderBy?: PhaseOrderByWithAggregationInput | PhaseOrderByWithAggregationInput[] | $Types.Skip
    by: PhaseScalarFieldEnum[] | PhaseScalarFieldEnum
    having?: PhaseScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: PhaseCountAggregateInputType | true
    _avg?: PhaseAvgAggregateInputType
    _sum?: PhaseSumAggregateInputType
    _min?: PhaseMinAggregateInputType
    _max?: PhaseMaxAggregateInputType
  }

  export type PhaseGroupByOutputType = {
    id: string
    name: string
    sortOrder: number
    projectId: string
    createdAt: Date
    updatedAt: Date
    _count: PhaseCountAggregateOutputType | null
    _avg: PhaseAvgAggregateOutputType | null
    _sum: PhaseSumAggregateOutputType | null
    _min: PhaseMinAggregateOutputType | null
    _max: PhaseMaxAggregateOutputType | null
  }

  type GetPhaseGroupByPayload<T extends PhaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhaseGroupByOutputType[P]>
            : GetScalarType<T[P], PhaseGroupByOutputType[P]>
        }
      >
    >


  export type PhaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    sortOrder?: boolean | $Types.Skip
    projectId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    project?: boolean | ProjectDefaultArgs<ExtArgs> | $Types.Skip
    rootAssets?: boolean | Phase$rootAssetsArgs<ExtArgs> | $Types.Skip
    _count?: boolean | PhaseCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["phase"]>

  export type PhaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    sortOrder?: boolean | $Types.Skip
    projectId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    project?: boolean | ProjectDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["phase"]>

  export type PhaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    sortOrder?: boolean | $Types.Skip
    projectId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    project?: boolean | ProjectDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["phase"]>

  export type PhaseSelectScalar = {
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    sortOrder?: boolean | $Types.Skip
    projectId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
  }

  export type PhaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "sortOrder" | "projectId" | "createdAt" | "updatedAt", ExtArgs["result"]["phase"], $Types.Skip>
  export type PhaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs> | $Types.Skip
    rootAssets?: boolean | Phase$rootAssetsArgs<ExtArgs> | $Types.Skip
    _count?: boolean | PhaseCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type PhaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type PhaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs> | $Types.Skip
  }

  export type $PhasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Phase"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      rootAssets: Prisma.$ProjectAssetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      sortOrder: number
      projectId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["phase"]>
    composites: {}
  }

  type PhaseGetPayload<S extends boolean | null | undefined | PhaseDefaultArgs> = $Result.GetResult<Prisma.$PhasePayload, S>

  type PhaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PhaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PhaseCountAggregateInputType | true
    }

  export interface PhaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Phase'], meta: { name: 'Phase' } }
    /**
     * Find zero or one Phase that matches the filter.
     * @param {PhaseFindUniqueArgs} args - Arguments to find a Phase
     * @example
     * // Get one Phase
     * const phase = await prisma.phase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhaseFindUniqueArgs>(args: SelectSubset<T, PhaseFindUniqueArgs<ExtArgs>>): Prisma__PhaseClient<$Result.GetResult<Prisma.$PhasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Phase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PhaseFindUniqueOrThrowArgs} args - Arguments to find a Phase
     * @example
     * // Get one Phase
     * const phase = await prisma.phase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhaseFindUniqueOrThrowArgs>(args: SelectSubset<T, PhaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhaseClient<$Result.GetResult<Prisma.$PhasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Phase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhaseFindFirstArgs} args - Arguments to find a Phase
     * @example
     * // Get one Phase
     * const phase = await prisma.phase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhaseFindFirstArgs>(args?: SelectSubset<T, PhaseFindFirstArgs<ExtArgs>>): Prisma__PhaseClient<$Result.GetResult<Prisma.$PhasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Phase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhaseFindFirstOrThrowArgs} args - Arguments to find a Phase
     * @example
     * // Get one Phase
     * const phase = await prisma.phase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhaseFindFirstOrThrowArgs>(args?: SelectSubset<T, PhaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhaseClient<$Result.GetResult<Prisma.$PhasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Phases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Phases
     * const phases = await prisma.phase.findMany()
     * 
     * // Get first 10 Phases
     * const phases = await prisma.phase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const phaseWithIdOnly = await prisma.phase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PhaseFindManyArgs>(args?: SelectSubset<T, PhaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Phase.
     * @param {PhaseCreateArgs} args - Arguments to create a Phase.
     * @example
     * // Create one Phase
     * const Phase = await prisma.phase.create({
     *   data: {
     *     // ... data to create a Phase
     *   }
     * })
     * 
     */
    create<T extends PhaseCreateArgs>(args: SelectSubset<T, PhaseCreateArgs<ExtArgs>>): Prisma__PhaseClient<$Result.GetResult<Prisma.$PhasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Phases.
     * @param {PhaseCreateManyArgs} args - Arguments to create many Phases.
     * @example
     * // Create many Phases
     * const phase = await prisma.phase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhaseCreateManyArgs>(args?: SelectSubset<T, PhaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Phases and returns the data saved in the database.
     * @param {PhaseCreateManyAndReturnArgs} args - Arguments to create many Phases.
     * @example
     * // Create many Phases
     * const phase = await prisma.phase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Phases and only return the `id`
     * const phaseWithIdOnly = await prisma.phase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PhaseCreateManyAndReturnArgs>(args?: SelectSubset<T, PhaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Phase.
     * @param {PhaseDeleteArgs} args - Arguments to delete one Phase.
     * @example
     * // Delete one Phase
     * const Phase = await prisma.phase.delete({
     *   where: {
     *     // ... filter to delete one Phase
     *   }
     * })
     * 
     */
    delete<T extends PhaseDeleteArgs>(args: SelectSubset<T, PhaseDeleteArgs<ExtArgs>>): Prisma__PhaseClient<$Result.GetResult<Prisma.$PhasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Phase.
     * @param {PhaseUpdateArgs} args - Arguments to update one Phase.
     * @example
     * // Update one Phase
     * const phase = await prisma.phase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhaseUpdateArgs>(args: SelectSubset<T, PhaseUpdateArgs<ExtArgs>>): Prisma__PhaseClient<$Result.GetResult<Prisma.$PhasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Phases.
     * @param {PhaseDeleteManyArgs} args - Arguments to filter Phases to delete.
     * @example
     * // Delete a few Phases
     * const { count } = await prisma.phase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhaseDeleteManyArgs>(args?: SelectSubset<T, PhaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Phases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Phases
     * const phase = await prisma.phase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhaseUpdateManyArgs>(args: SelectSubset<T, PhaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Phases and returns the data updated in the database.
     * @param {PhaseUpdateManyAndReturnArgs} args - Arguments to update many Phases.
     * @example
     * // Update many Phases
     * const phase = await prisma.phase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Phases and only return the `id`
     * const phaseWithIdOnly = await prisma.phase.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PhaseUpdateManyAndReturnArgs>(args: SelectSubset<T, PhaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Phase.
     * @param {PhaseUpsertArgs} args - Arguments to update or create a Phase.
     * @example
     * // Update or create a Phase
     * const phase = await prisma.phase.upsert({
     *   create: {
     *     // ... data to create a Phase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Phase we want to update
     *   }
     * })
     */
    upsert<T extends PhaseUpsertArgs>(args: SelectSubset<T, PhaseUpsertArgs<ExtArgs>>): Prisma__PhaseClient<$Result.GetResult<Prisma.$PhasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Phases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhaseCountArgs} args - Arguments to filter Phases to count.
     * @example
     * // Count the number of Phases
     * const count = await prisma.phase.count({
     *   where: {
     *     // ... the filter for the Phases we want to count
     *   }
     * })
    **/
    count<T extends PhaseCountArgs>(
      args?: Subset<T, PhaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Phase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PhaseAggregateArgs>(args: Subset<T, PhaseAggregateArgs>): Prisma.PrismaPromise<GetPhaseAggregateType<T>>

    /**
     * Group by Phase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhaseGroupByArgs} args - Group by arguments.
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
      T extends PhaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhaseGroupByArgs['orderBy'] }
        : { orderBy?: PhaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PhaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Phase model
   */
  readonly fields: PhaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Phase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rootAssets<T extends Phase$rootAssetsArgs<ExtArgs> = {}>(args?: Subset<T, Phase$rootAssetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectAssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Phase model
   */
  interface PhaseFieldRefs {
    readonly id: FieldRef<"Phase", 'String'>
    readonly name: FieldRef<"Phase", 'String'>
    readonly sortOrder: FieldRef<"Phase", 'Int'>
    readonly projectId: FieldRef<"Phase", 'String'>
    readonly createdAt: FieldRef<"Phase", 'DateTime'>
    readonly updatedAt: FieldRef<"Phase", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Phase findUnique
   */
  export type PhaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phase
     */
    select?: PhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phase
     */
    omit?: PhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhaseInclude<ExtArgs> | null
    /**
     * Filter, which Phase to fetch.
     */
    where: PhaseWhereUniqueInput
  }

  /**
   * Phase findUniqueOrThrow
   */
  export type PhaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phase
     */
    select?: PhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phase
     */
    omit?: PhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhaseInclude<ExtArgs> | null
    /**
     * Filter, which Phase to fetch.
     */
    where: PhaseWhereUniqueInput
  }

  /**
   * Phase findFirst
   */
  export type PhaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phase
     */
    select?: PhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phase
     */
    omit?: PhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhaseInclude<ExtArgs> | null
    /**
     * Filter, which Phase to fetch.
     */
    where?: PhaseWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Phases to fetch.
     */
    orderBy?: PhaseOrderByWithRelationInput | PhaseOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Phases.
     */
    cursor?: PhaseWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Phases from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Phases.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Phases.
     */
    distinct?: PhaseScalarFieldEnum | PhaseScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Phase findFirstOrThrow
   */
  export type PhaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phase
     */
    select?: PhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phase
     */
    omit?: PhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhaseInclude<ExtArgs> | null
    /**
     * Filter, which Phase to fetch.
     */
    where?: PhaseWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Phases to fetch.
     */
    orderBy?: PhaseOrderByWithRelationInput | PhaseOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Phases.
     */
    cursor?: PhaseWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Phases from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Phases.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Phases.
     */
    distinct?: PhaseScalarFieldEnum | PhaseScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Phase findMany
   */
  export type PhaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phase
     */
    select?: PhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phase
     */
    omit?: PhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhaseInclude<ExtArgs> | null
    /**
     * Filter, which Phases to fetch.
     */
    where?: PhaseWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Phases to fetch.
     */
    orderBy?: PhaseOrderByWithRelationInput | PhaseOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Phases.
     */
    cursor?: PhaseWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Phases from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Phases.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Phases.
     */
    distinct?: PhaseScalarFieldEnum | PhaseScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Phase create
   */
  export type PhaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phase
     */
    select?: PhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phase
     */
    omit?: PhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Phase.
     */
    data: XOR<PhaseCreateInput, PhaseUncheckedCreateInput>
  }

  /**
   * Phase createMany
   */
  export type PhaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Phases.
     */
    data: PhaseCreateManyInput | PhaseCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Phase createManyAndReturn
   */
  export type PhaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phase
     */
    select?: PhaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Phase
     */
    omit?: PhaseOmit<ExtArgs> | null
    /**
     * The data used to create many Phases.
     */
    data: PhaseCreateManyInput | PhaseCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Phase update
   */
  export type PhaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phase
     */
    select?: PhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phase
     */
    omit?: PhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Phase.
     */
    data: XOR<PhaseUpdateInput, PhaseUncheckedUpdateInput>
    /**
     * Choose, which Phase to update.
     */
    where: PhaseWhereUniqueInput
  }

  /**
   * Phase updateMany
   */
  export type PhaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Phases.
     */
    data: XOR<PhaseUpdateManyMutationInput, PhaseUncheckedUpdateManyInput>
    /**
     * Filter which Phases to update
     */
    where?: PhaseWhereInput | $Types.Skip
    /**
     * Limit how many Phases to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Phase updateManyAndReturn
   */
  export type PhaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phase
     */
    select?: PhaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Phase
     */
    omit?: PhaseOmit<ExtArgs> | null
    /**
     * The data used to update Phases.
     */
    data: XOR<PhaseUpdateManyMutationInput, PhaseUncheckedUpdateManyInput>
    /**
     * Filter which Phases to update
     */
    where?: PhaseWhereInput | $Types.Skip
    /**
     * Limit how many Phases to update.
     */
    limit?: number | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Phase upsert
   */
  export type PhaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phase
     */
    select?: PhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phase
     */
    omit?: PhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Phase to update in case it exists.
     */
    where: PhaseWhereUniqueInput
    /**
     * In case the Phase found by the `where` argument doesn't exist, create a new Phase with this data.
     */
    create: XOR<PhaseCreateInput, PhaseUncheckedCreateInput>
    /**
     * In case the Phase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhaseUpdateInput, PhaseUncheckedUpdateInput>
  }

  /**
   * Phase delete
   */
  export type PhaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phase
     */
    select?: PhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phase
     */
    omit?: PhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhaseInclude<ExtArgs> | null
    /**
     * Filter which Phase to delete.
     */
    where: PhaseWhereUniqueInput
  }

  /**
   * Phase deleteMany
   */
  export type PhaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Phases to delete
     */
    where?: PhaseWhereInput | $Types.Skip
    /**
     * Limit how many Phases to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Phase.rootAssets
   */
  export type Phase$rootAssetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAsset
     */
    select?: ProjectAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAsset
     */
    omit?: ProjectAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAssetInclude<ExtArgs> | null
    where?: ProjectAssetWhereInput | $Types.Skip
    orderBy?: ProjectAssetOrderByWithRelationInput | ProjectAssetOrderByWithRelationInput[] | $Types.Skip
    cursor?: ProjectAssetWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: ProjectAssetScalarFieldEnum | ProjectAssetScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Phase without action
   */
  export type PhaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phase
     */
    select?: PhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phase
     */
    omit?: PhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhaseInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    shortId: string | null
    title: string | null
    category: string | null
    description: string | null
    type: string | null
    coverImage: string | null
    uploaderId: string | null
    permission: string | null
    teamId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    shortId: string | null
    title: string | null
    category: string | null
    description: string | null
    type: string | null
    coverImage: string | null
    uploaderId: string | null
    permission: string | null
    teamId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    shortId: number
    title: number
    category: number
    description: number
    type: number
    keywords: number
    coverImage: number
    images: number
    uploaderId: number
    relatedPosts: number
    permission: number
    teamId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PostMinAggregateInputType = {
    id?: true | $Types.Skip
    shortId?: true | $Types.Skip
    title?: true | $Types.Skip
    category?: true | $Types.Skip
    description?: true | $Types.Skip
    type?: true | $Types.Skip
    coverImage?: true | $Types.Skip
    uploaderId?: true | $Types.Skip
    permission?: true | $Types.Skip
    teamId?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type PostMaxAggregateInputType = {
    id?: true | $Types.Skip
    shortId?: true | $Types.Skip
    title?: true | $Types.Skip
    category?: true | $Types.Skip
    description?: true | $Types.Skip
    type?: true | $Types.Skip
    coverImage?: true | $Types.Skip
    uploaderId?: true | $Types.Skip
    permission?: true | $Types.Skip
    teamId?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type PostCountAggregateInputType = {
    id?: true | $Types.Skip
    shortId?: true | $Types.Skip
    title?: true | $Types.Skip
    category?: true | $Types.Skip
    description?: true | $Types.Skip
    type?: true | $Types.Skip
    keywords?: true | $Types.Skip
    coverImage?: true | $Types.Skip
    images?: true | $Types.Skip
    uploaderId?: true | $Types.Skip
    relatedPosts?: true | $Types.Skip
    permission?: true | $Types.Skip
    teamId?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput | $Types.Skip
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[] | $Types.Skip
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: PostCountAggregateInputType | true
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    shortId: string
    title: string
    category: string
    description: string | null
    type: string
    keywords: string[]
    coverImage: string | null
    images: string[]
    uploaderId: string
    relatedPosts: string[]
    permission: string
    teamId: string | null
    createdAt: Date
    updatedAt: Date
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    shortId?: boolean | $Types.Skip
    title?: boolean | $Types.Skip
    category?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
    type?: boolean | $Types.Skip
    keywords?: boolean | $Types.Skip
    coverImage?: boolean | $Types.Skip
    images?: boolean | $Types.Skip
    uploaderId?: boolean | $Types.Skip
    relatedPosts?: boolean | $Types.Skip
    permission?: boolean | $Types.Skip
    teamId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    files?: boolean | Post$filesArgs<ExtArgs> | $Types.Skip
    uploader?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    team?: boolean | Post$teamArgs<ExtArgs> | $Types.Skip
    comments?: boolean | Post$commentsArgs<ExtArgs> | $Types.Skip
    projectAssets?: boolean | Post$projectAssetsArgs<ExtArgs> | $Types.Skip
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    shortId?: boolean | $Types.Skip
    title?: boolean | $Types.Skip
    category?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
    type?: boolean | $Types.Skip
    keywords?: boolean | $Types.Skip
    coverImage?: boolean | $Types.Skip
    images?: boolean | $Types.Skip
    uploaderId?: boolean | $Types.Skip
    relatedPosts?: boolean | $Types.Skip
    permission?: boolean | $Types.Skip
    teamId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    uploader?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    team?: boolean | Post$teamArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    shortId?: boolean | $Types.Skip
    title?: boolean | $Types.Skip
    category?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
    type?: boolean | $Types.Skip
    keywords?: boolean | $Types.Skip
    coverImage?: boolean | $Types.Skip
    images?: boolean | $Types.Skip
    uploaderId?: boolean | $Types.Skip
    relatedPosts?: boolean | $Types.Skip
    permission?: boolean | $Types.Skip
    teamId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    uploader?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    team?: boolean | Post$teamArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean | $Types.Skip
    shortId?: boolean | $Types.Skip
    title?: boolean | $Types.Skip
    category?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
    type?: boolean | $Types.Skip
    keywords?: boolean | $Types.Skip
    coverImage?: boolean | $Types.Skip
    images?: boolean | $Types.Skip
    uploaderId?: boolean | $Types.Skip
    relatedPosts?: boolean | $Types.Skip
    permission?: boolean | $Types.Skip
    teamId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shortId" | "title" | "category" | "description" | "type" | "keywords" | "coverImage" | "images" | "uploaderId" | "relatedPosts" | "permission" | "teamId" | "createdAt" | "updatedAt", ExtArgs["result"]["post"], $Types.Skip>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    files?: boolean | Post$filesArgs<ExtArgs> | $Types.Skip
    uploader?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    team?: boolean | Post$teamArgs<ExtArgs> | $Types.Skip
    comments?: boolean | Post$commentsArgs<ExtArgs> | $Types.Skip
    projectAssets?: boolean | Post$projectAssetsArgs<ExtArgs> | $Types.Skip
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploader?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    team?: boolean | Post$teamArgs<ExtArgs> | $Types.Skip
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploader?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    team?: boolean | Post$teamArgs<ExtArgs> | $Types.Skip
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      files: Prisma.$FileRecordPayload<ExtArgs>[]
      uploader: Prisma.$UserPayload<ExtArgs>
      team: Prisma.$TeamPayload<ExtArgs> | null
      comments: Prisma.$CommentPayload<ExtArgs>[]
      projectAssets: Prisma.$ProjectAssetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shortId: string
      title: string
      category: string
      description: string | null
      type: string
      keywords: string[]
      coverImage: string | null
      images: string[]
      uploaderId: string
      relatedPosts: string[]
      permission: string
      teamId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    files<T extends Post$filesArgs<ExtArgs> = {}>(args?: Subset<T, Post$filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    uploader<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    team<T extends Post$teamArgs<ExtArgs> = {}>(args?: Subset<T, Post$teamArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    comments<T extends Post$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Post$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projectAssets<T extends Post$projectAssetsArgs<ExtArgs> = {}>(args?: Subset<T, Post$projectAssetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectAssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly shortId: FieldRef<"Post", 'String'>
    readonly title: FieldRef<"Post", 'String'>
    readonly category: FieldRef<"Post", 'String'>
    readonly description: FieldRef<"Post", 'String'>
    readonly type: FieldRef<"Post", 'String'>
    readonly keywords: FieldRef<"Post", 'String[]'>
    readonly coverImage: FieldRef<"Post", 'String'>
    readonly images: FieldRef<"Post", 'String[]'>
    readonly uploaderId: FieldRef<"Post", 'String'>
    readonly relatedPosts: FieldRef<"Post", 'String[]'>
    readonly permission: FieldRef<"Post", 'String'>
    readonly teamId: FieldRef<"Post", 'String'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput | $Types.Skip
    /**
     * Limit how many Posts to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput | $Types.Skip
    /**
     * Limit how many Posts to update.
     */
    limit?: number | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput | $Types.Skip
    /**
     * Limit how many Posts to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Post.files
   */
  export type Post$filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileRecord
     */
    select?: FileRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileRecord
     */
    omit?: FileRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileRecordInclude<ExtArgs> | null
    where?: FileRecordWhereInput | $Types.Skip
    orderBy?: FileRecordOrderByWithRelationInput | FileRecordOrderByWithRelationInput[] | $Types.Skip
    cursor?: FileRecordWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: FileRecordScalarFieldEnum | FileRecordScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Post.team
   */
  export type Post$teamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput | $Types.Skip
  }

  /**
   * Post.comments
   */
  export type Post$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput | $Types.Skip
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[] | $Types.Skip
    cursor?: CommentWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Post.projectAssets
   */
  export type Post$projectAssetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAsset
     */
    select?: ProjectAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAsset
     */
    omit?: ProjectAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAssetInclude<ExtArgs> | null
    where?: ProjectAssetWhereInput | $Types.Skip
    orderBy?: ProjectAssetOrderByWithRelationInput | ProjectAssetOrderByWithRelationInput[] | $Types.Skip
    cursor?: ProjectAssetWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: ProjectAssetScalarFieldEnum | ProjectAssetScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    client: string | null
    location: string | null
    coverImage: string | null
    status: $Enums.ProjectStatus | null
    visibility: $Enums.ProjectVisibility | null
    teamId: string | null
    creatorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    client: string | null
    location: string | null
    coverImage: string | null
    status: $Enums.ProjectStatus | null
    visibility: $Enums.ProjectVisibility | null
    teamId: string | null
    creatorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    description: number
    client: number
    location: number
    coverImage: number
    status: number
    visibility: number
    teamId: number
    creatorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true | $Types.Skip
    name?: true | $Types.Skip
    description?: true | $Types.Skip
    client?: true | $Types.Skip
    location?: true | $Types.Skip
    coverImage?: true | $Types.Skip
    status?: true | $Types.Skip
    visibility?: true | $Types.Skip
    teamId?: true | $Types.Skip
    creatorId?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type ProjectMaxAggregateInputType = {
    id?: true | $Types.Skip
    name?: true | $Types.Skip
    description?: true | $Types.Skip
    client?: true | $Types.Skip
    location?: true | $Types.Skip
    coverImage?: true | $Types.Skip
    status?: true | $Types.Skip
    visibility?: true | $Types.Skip
    teamId?: true | $Types.Skip
    creatorId?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type ProjectCountAggregateInputType = {
    id?: true | $Types.Skip
    name?: true | $Types.Skip
    description?: true | $Types.Skip
    client?: true | $Types.Skip
    location?: true | $Types.Skip
    coverImage?: true | $Types.Skip
    status?: true | $Types.Skip
    visibility?: true | $Types.Skip
    teamId?: true | $Types.Skip
    creatorId?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
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




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput | $Types.Skip
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[] | $Types.Skip
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    name: string
    description: string | null
    client: string | null
    location: string | null
    coverImage: string | null
    status: $Enums.ProjectStatus
    visibility: $Enums.ProjectVisibility
    teamId: string
    creatorId: string
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
    client?: boolean | $Types.Skip
    location?: boolean | $Types.Skip
    coverImage?: boolean | $Types.Skip
    status?: boolean | $Types.Skip
    visibility?: boolean | $Types.Skip
    teamId?: boolean | $Types.Skip
    creatorId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    team?: boolean | TeamDefaultArgs<ExtArgs> | $Types.Skip
    creator?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    phases?: boolean | Project$phasesArgs<ExtArgs> | $Types.Skip
    assets?: boolean | Project$assetsArgs<ExtArgs> | $Types.Skip
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
    client?: boolean | $Types.Skip
    location?: boolean | $Types.Skip
    coverImage?: boolean | $Types.Skip
    status?: boolean | $Types.Skip
    visibility?: boolean | $Types.Skip
    teamId?: boolean | $Types.Skip
    creatorId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    team?: boolean | TeamDefaultArgs<ExtArgs> | $Types.Skip
    creator?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
    client?: boolean | $Types.Skip
    location?: boolean | $Types.Skip
    coverImage?: boolean | $Types.Skip
    status?: boolean | $Types.Skip
    visibility?: boolean | $Types.Skip
    teamId?: boolean | $Types.Skip
    creatorId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    team?: boolean | TeamDefaultArgs<ExtArgs> | $Types.Skip
    creator?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
    client?: boolean | $Types.Skip
    location?: boolean | $Types.Skip
    coverImage?: boolean | $Types.Skip
    status?: boolean | $Types.Skip
    visibility?: boolean | $Types.Skip
    teamId?: boolean | $Types.Skip
    creatorId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "client" | "location" | "coverImage" | "status" | "visibility" | "teamId" | "creatorId" | "createdAt" | "updatedAt", ExtArgs["result"]["project"], $Types.Skip>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs> | $Types.Skip
    creator?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    phases?: boolean | Project$phasesArgs<ExtArgs> | $Types.Skip
    assets?: boolean | Project$assetsArgs<ExtArgs> | $Types.Skip
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs> | $Types.Skip
    creator?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs> | $Types.Skip
    creator?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs>
      creator: Prisma.$UserPayload<ExtArgs>
      phases: Prisma.$PhasePayload<ExtArgs>[]
      assets: Prisma.$ProjectAssetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      client: string | null
      location: string | null
      coverImage: string | null
      status: $Enums.ProjectStatus
      visibility: $Enums.ProjectVisibility
      teamId: string
      creatorId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
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
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

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
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    phases<T extends Project$phasesArgs<ExtArgs> = {}>(args?: Subset<T, Project$phasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assets<T extends Project$assetsArgs<ExtArgs> = {}>(args?: Subset<T, Project$assetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectAssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly client: FieldRef<"Project", 'String'>
    readonly location: FieldRef<"Project", 'String'>
    readonly coverImage: FieldRef<"Project", 'String'>
    readonly status: FieldRef<"Project", 'ProjectStatus'>
    readonly visibility: FieldRef<"Project", 'ProjectVisibility'>
    readonly teamId: FieldRef<"Project", 'String'>
    readonly creatorId: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput | $Types.Skip
    /**
     * Limit how many Projects to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput | $Types.Skip
    /**
     * Limit how many Projects to update.
     */
    limit?: number | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput | $Types.Skip
    /**
     * Limit how many Projects to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Project.phases
   */
  export type Project$phasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phase
     */
    select?: PhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phase
     */
    omit?: PhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhaseInclude<ExtArgs> | null
    where?: PhaseWhereInput | $Types.Skip
    orderBy?: PhaseOrderByWithRelationInput | PhaseOrderByWithRelationInput[] | $Types.Skip
    cursor?: PhaseWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: PhaseScalarFieldEnum | PhaseScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Project.assets
   */
  export type Project$assetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAsset
     */
    select?: ProjectAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAsset
     */
    omit?: ProjectAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAssetInclude<ExtArgs> | null
    where?: ProjectAssetWhereInput | $Types.Skip
    orderBy?: ProjectAssetOrderByWithRelationInput | ProjectAssetOrderByWithRelationInput[] | $Types.Skip
    cursor?: ProjectAssetWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: ProjectAssetScalarFieldEnum | ProjectAssetScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model ProjectAsset
   */

  export type AggregateProjectAsset = {
    _count: ProjectAssetCountAggregateOutputType | null
    _avg: ProjectAssetAvgAggregateOutputType | null
    _sum: ProjectAssetSumAggregateOutputType | null
    _min: ProjectAssetMinAggregateOutputType | null
    _max: ProjectAssetMaxAggregateOutputType | null
  }

  export type ProjectAssetAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type ProjectAssetSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type ProjectAssetMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    type: $Enums.AssetType | null
    sortOrder: number | null
    parentId: string | null
    projectId: string | null
    phaseId: string | null
    postId: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectAssetMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    type: $Enums.AssetType | null
    sortOrder: number | null
    parentId: string | null
    projectId: string | null
    phaseId: string | null
    postId: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectAssetCountAggregateOutputType = {
    id: number
    name: number
    description: number
    type: number
    sortOrder: number
    parentId: number
    projectId: number
    phaseId: number
    postId: number
    url: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectAssetAvgAggregateInputType = {
    sortOrder?: true | $Types.Skip
  }

  export type ProjectAssetSumAggregateInputType = {
    sortOrder?: true | $Types.Skip
  }

  export type ProjectAssetMinAggregateInputType = {
    id?: true | $Types.Skip
    name?: true | $Types.Skip
    description?: true | $Types.Skip
    type?: true | $Types.Skip
    sortOrder?: true | $Types.Skip
    parentId?: true | $Types.Skip
    projectId?: true | $Types.Skip
    phaseId?: true | $Types.Skip
    postId?: true | $Types.Skip
    url?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type ProjectAssetMaxAggregateInputType = {
    id?: true | $Types.Skip
    name?: true | $Types.Skip
    description?: true | $Types.Skip
    type?: true | $Types.Skip
    sortOrder?: true | $Types.Skip
    parentId?: true | $Types.Skip
    projectId?: true | $Types.Skip
    phaseId?: true | $Types.Skip
    postId?: true | $Types.Skip
    url?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type ProjectAssetCountAggregateInputType = {
    id?: true | $Types.Skip
    name?: true | $Types.Skip
    description?: true | $Types.Skip
    type?: true | $Types.Skip
    sortOrder?: true | $Types.Skip
    parentId?: true | $Types.Skip
    projectId?: true | $Types.Skip
    phaseId?: true | $Types.Skip
    postId?: true | $Types.Skip
    url?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type ProjectAssetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectAsset to aggregate.
     */
    where?: ProjectAssetWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectAssets to fetch.
     */
    orderBy?: ProjectAssetOrderByWithRelationInput | ProjectAssetOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectAssetWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectAssets from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectAssets.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectAssets
    **/
    _count?: true | ProjectAssetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAssetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectAssetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectAssetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectAssetMaxAggregateInputType
  }

  export type GetProjectAssetAggregateType<T extends ProjectAssetAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectAsset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectAsset[P]>
      : GetScalarType<T[P], AggregateProjectAsset[P]>
  }




  export type ProjectAssetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectAssetWhereInput | $Types.Skip
    orderBy?: ProjectAssetOrderByWithAggregationInput | ProjectAssetOrderByWithAggregationInput[] | $Types.Skip
    by: ProjectAssetScalarFieldEnum[] | ProjectAssetScalarFieldEnum
    having?: ProjectAssetScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: ProjectAssetCountAggregateInputType | true
    _avg?: ProjectAssetAvgAggregateInputType
    _sum?: ProjectAssetSumAggregateInputType
    _min?: ProjectAssetMinAggregateInputType
    _max?: ProjectAssetMaxAggregateInputType
  }

  export type ProjectAssetGroupByOutputType = {
    id: string
    name: string | null
    description: string | null
    type: $Enums.AssetType
    sortOrder: number
    parentId: string | null
    projectId: string
    phaseId: string | null
    postId: string | null
    url: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProjectAssetCountAggregateOutputType | null
    _avg: ProjectAssetAvgAggregateOutputType | null
    _sum: ProjectAssetSumAggregateOutputType | null
    _min: ProjectAssetMinAggregateOutputType | null
    _max: ProjectAssetMaxAggregateOutputType | null
  }

  type GetProjectAssetGroupByPayload<T extends ProjectAssetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectAssetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectAssetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectAssetGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectAssetGroupByOutputType[P]>
        }
      >
    >


  export type ProjectAssetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
    type?: boolean | $Types.Skip
    sortOrder?: boolean | $Types.Skip
    parentId?: boolean | $Types.Skip
    projectId?: boolean | $Types.Skip
    phaseId?: boolean | $Types.Skip
    postId?: boolean | $Types.Skip
    url?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    parent?: boolean | ProjectAsset$parentArgs<ExtArgs> | $Types.Skip
    children?: boolean | ProjectAsset$childrenArgs<ExtArgs> | $Types.Skip
    project?: boolean | ProjectDefaultArgs<ExtArgs> | $Types.Skip
    phase?: boolean | ProjectAsset$phaseArgs<ExtArgs> | $Types.Skip
    post?: boolean | ProjectAsset$postArgs<ExtArgs> | $Types.Skip
    _count?: boolean | ProjectAssetCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["projectAsset"]>

  export type ProjectAssetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
    type?: boolean | $Types.Skip
    sortOrder?: boolean | $Types.Skip
    parentId?: boolean | $Types.Skip
    projectId?: boolean | $Types.Skip
    phaseId?: boolean | $Types.Skip
    postId?: boolean | $Types.Skip
    url?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    parent?: boolean | ProjectAsset$parentArgs<ExtArgs> | $Types.Skip
    project?: boolean | ProjectDefaultArgs<ExtArgs> | $Types.Skip
    phase?: boolean | ProjectAsset$phaseArgs<ExtArgs> | $Types.Skip
    post?: boolean | ProjectAsset$postArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["projectAsset"]>

  export type ProjectAssetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
    type?: boolean | $Types.Skip
    sortOrder?: boolean | $Types.Skip
    parentId?: boolean | $Types.Skip
    projectId?: boolean | $Types.Skip
    phaseId?: boolean | $Types.Skip
    postId?: boolean | $Types.Skip
    url?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    parent?: boolean | ProjectAsset$parentArgs<ExtArgs> | $Types.Skip
    project?: boolean | ProjectDefaultArgs<ExtArgs> | $Types.Skip
    phase?: boolean | ProjectAsset$phaseArgs<ExtArgs> | $Types.Skip
    post?: boolean | ProjectAsset$postArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["projectAsset"]>

  export type ProjectAssetSelectScalar = {
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
    type?: boolean | $Types.Skip
    sortOrder?: boolean | $Types.Skip
    parentId?: boolean | $Types.Skip
    projectId?: boolean | $Types.Skip
    phaseId?: boolean | $Types.Skip
    postId?: boolean | $Types.Skip
    url?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
  }

  export type ProjectAssetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "type" | "sortOrder" | "parentId" | "projectId" | "phaseId" | "postId" | "url" | "createdAt" | "updatedAt", ExtArgs["result"]["projectAsset"], $Types.Skip>
  export type ProjectAssetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | ProjectAsset$parentArgs<ExtArgs> | $Types.Skip
    children?: boolean | ProjectAsset$childrenArgs<ExtArgs> | $Types.Skip
    project?: boolean | ProjectDefaultArgs<ExtArgs> | $Types.Skip
    phase?: boolean | ProjectAsset$phaseArgs<ExtArgs> | $Types.Skip
    post?: boolean | ProjectAsset$postArgs<ExtArgs> | $Types.Skip
    _count?: boolean | ProjectAssetCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type ProjectAssetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | ProjectAsset$parentArgs<ExtArgs> | $Types.Skip
    project?: boolean | ProjectDefaultArgs<ExtArgs> | $Types.Skip
    phase?: boolean | ProjectAsset$phaseArgs<ExtArgs> | $Types.Skip
    post?: boolean | ProjectAsset$postArgs<ExtArgs> | $Types.Skip
  }
  export type ProjectAssetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | ProjectAsset$parentArgs<ExtArgs> | $Types.Skip
    project?: boolean | ProjectDefaultArgs<ExtArgs> | $Types.Skip
    phase?: boolean | ProjectAsset$phaseArgs<ExtArgs> | $Types.Skip
    post?: boolean | ProjectAsset$postArgs<ExtArgs> | $Types.Skip
  }

  export type $ProjectAssetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectAsset"
    objects: {
      parent: Prisma.$ProjectAssetPayload<ExtArgs> | null
      children: Prisma.$ProjectAssetPayload<ExtArgs>[]
      project: Prisma.$ProjectPayload<ExtArgs>
      phase: Prisma.$PhasePayload<ExtArgs> | null
      post: Prisma.$PostPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      description: string | null
      type: $Enums.AssetType
      sortOrder: number
      parentId: string | null
      projectId: string
      phaseId: string | null
      postId: string | null
      url: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["projectAsset"]>
    composites: {}
  }

  type ProjectAssetGetPayload<S extends boolean | null | undefined | ProjectAssetDefaultArgs> = $Result.GetResult<Prisma.$ProjectAssetPayload, S>

  type ProjectAssetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectAssetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectAssetCountAggregateInputType | true
    }

  export interface ProjectAssetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectAsset'], meta: { name: 'ProjectAsset' } }
    /**
     * Find zero or one ProjectAsset that matches the filter.
     * @param {ProjectAssetFindUniqueArgs} args - Arguments to find a ProjectAsset
     * @example
     * // Get one ProjectAsset
     * const projectAsset = await prisma.projectAsset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectAssetFindUniqueArgs>(args: SelectSubset<T, ProjectAssetFindUniqueArgs<ExtArgs>>): Prisma__ProjectAssetClient<$Result.GetResult<Prisma.$ProjectAssetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectAsset that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectAssetFindUniqueOrThrowArgs} args - Arguments to find a ProjectAsset
     * @example
     * // Get one ProjectAsset
     * const projectAsset = await prisma.projectAsset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectAssetFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectAssetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectAssetClient<$Result.GetResult<Prisma.$ProjectAssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectAsset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAssetFindFirstArgs} args - Arguments to find a ProjectAsset
     * @example
     * // Get one ProjectAsset
     * const projectAsset = await prisma.projectAsset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectAssetFindFirstArgs>(args?: SelectSubset<T, ProjectAssetFindFirstArgs<ExtArgs>>): Prisma__ProjectAssetClient<$Result.GetResult<Prisma.$ProjectAssetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectAsset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAssetFindFirstOrThrowArgs} args - Arguments to find a ProjectAsset
     * @example
     * // Get one ProjectAsset
     * const projectAsset = await prisma.projectAsset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectAssetFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectAssetFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectAssetClient<$Result.GetResult<Prisma.$ProjectAssetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectAssets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAssetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectAssets
     * const projectAssets = await prisma.projectAsset.findMany()
     * 
     * // Get first 10 ProjectAssets
     * const projectAssets = await prisma.projectAsset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectAssetWithIdOnly = await prisma.projectAsset.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectAssetFindManyArgs>(args?: SelectSubset<T, ProjectAssetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectAssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectAsset.
     * @param {ProjectAssetCreateArgs} args - Arguments to create a ProjectAsset.
     * @example
     * // Create one ProjectAsset
     * const ProjectAsset = await prisma.projectAsset.create({
     *   data: {
     *     // ... data to create a ProjectAsset
     *   }
     * })
     * 
     */
    create<T extends ProjectAssetCreateArgs>(args: SelectSubset<T, ProjectAssetCreateArgs<ExtArgs>>): Prisma__ProjectAssetClient<$Result.GetResult<Prisma.$ProjectAssetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectAssets.
     * @param {ProjectAssetCreateManyArgs} args - Arguments to create many ProjectAssets.
     * @example
     * // Create many ProjectAssets
     * const projectAsset = await prisma.projectAsset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectAssetCreateManyArgs>(args?: SelectSubset<T, ProjectAssetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectAssets and returns the data saved in the database.
     * @param {ProjectAssetCreateManyAndReturnArgs} args - Arguments to create many ProjectAssets.
     * @example
     * // Create many ProjectAssets
     * const projectAsset = await prisma.projectAsset.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectAssets and only return the `id`
     * const projectAssetWithIdOnly = await prisma.projectAsset.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectAssetCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectAssetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectAssetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectAsset.
     * @param {ProjectAssetDeleteArgs} args - Arguments to delete one ProjectAsset.
     * @example
     * // Delete one ProjectAsset
     * const ProjectAsset = await prisma.projectAsset.delete({
     *   where: {
     *     // ... filter to delete one ProjectAsset
     *   }
     * })
     * 
     */
    delete<T extends ProjectAssetDeleteArgs>(args: SelectSubset<T, ProjectAssetDeleteArgs<ExtArgs>>): Prisma__ProjectAssetClient<$Result.GetResult<Prisma.$ProjectAssetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectAsset.
     * @param {ProjectAssetUpdateArgs} args - Arguments to update one ProjectAsset.
     * @example
     * // Update one ProjectAsset
     * const projectAsset = await prisma.projectAsset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectAssetUpdateArgs>(args: SelectSubset<T, ProjectAssetUpdateArgs<ExtArgs>>): Prisma__ProjectAssetClient<$Result.GetResult<Prisma.$ProjectAssetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectAssets.
     * @param {ProjectAssetDeleteManyArgs} args - Arguments to filter ProjectAssets to delete.
     * @example
     * // Delete a few ProjectAssets
     * const { count } = await prisma.projectAsset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectAssetDeleteManyArgs>(args?: SelectSubset<T, ProjectAssetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectAssets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAssetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectAssets
     * const projectAsset = await prisma.projectAsset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectAssetUpdateManyArgs>(args: SelectSubset<T, ProjectAssetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectAssets and returns the data updated in the database.
     * @param {ProjectAssetUpdateManyAndReturnArgs} args - Arguments to update many ProjectAssets.
     * @example
     * // Update many ProjectAssets
     * const projectAsset = await prisma.projectAsset.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectAssets and only return the `id`
     * const projectAssetWithIdOnly = await prisma.projectAsset.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectAssetUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectAssetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectAssetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectAsset.
     * @param {ProjectAssetUpsertArgs} args - Arguments to update or create a ProjectAsset.
     * @example
     * // Update or create a ProjectAsset
     * const projectAsset = await prisma.projectAsset.upsert({
     *   create: {
     *     // ... data to create a ProjectAsset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectAsset we want to update
     *   }
     * })
     */
    upsert<T extends ProjectAssetUpsertArgs>(args: SelectSubset<T, ProjectAssetUpsertArgs<ExtArgs>>): Prisma__ProjectAssetClient<$Result.GetResult<Prisma.$ProjectAssetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectAssets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAssetCountArgs} args - Arguments to filter ProjectAssets to count.
     * @example
     * // Count the number of ProjectAssets
     * const count = await prisma.projectAsset.count({
     *   where: {
     *     // ... the filter for the ProjectAssets we want to count
     *   }
     * })
    **/
    count<T extends ProjectAssetCountArgs>(
      args?: Subset<T, ProjectAssetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectAssetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectAsset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAssetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAssetAggregateArgs>(args: Subset<T, ProjectAssetAggregateArgs>): Prisma.PrismaPromise<GetProjectAssetAggregateType<T>>

    /**
     * Group by ProjectAsset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAssetGroupByArgs} args - Group by arguments.
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
      T extends ProjectAssetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectAssetGroupByArgs['orderBy'] }
        : { orderBy?: ProjectAssetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ProjectAssetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectAssetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectAsset model
   */
  readonly fields: ProjectAssetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectAsset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectAssetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends ProjectAsset$parentArgs<ExtArgs> = {}>(args?: Subset<T, ProjectAsset$parentArgs<ExtArgs>>): Prisma__ProjectAssetClient<$Result.GetResult<Prisma.$ProjectAssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    children<T extends ProjectAsset$childrenArgs<ExtArgs> = {}>(args?: Subset<T, ProjectAsset$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectAssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    phase<T extends ProjectAsset$phaseArgs<ExtArgs> = {}>(args?: Subset<T, ProjectAsset$phaseArgs<ExtArgs>>): Prisma__PhaseClient<$Result.GetResult<Prisma.$PhasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    post<T extends ProjectAsset$postArgs<ExtArgs> = {}>(args?: Subset<T, ProjectAsset$postArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectAsset model
   */
  interface ProjectAssetFieldRefs {
    readonly id: FieldRef<"ProjectAsset", 'String'>
    readonly name: FieldRef<"ProjectAsset", 'String'>
    readonly description: FieldRef<"ProjectAsset", 'String'>
    readonly type: FieldRef<"ProjectAsset", 'AssetType'>
    readonly sortOrder: FieldRef<"ProjectAsset", 'Int'>
    readonly parentId: FieldRef<"ProjectAsset", 'String'>
    readonly projectId: FieldRef<"ProjectAsset", 'String'>
    readonly phaseId: FieldRef<"ProjectAsset", 'String'>
    readonly postId: FieldRef<"ProjectAsset", 'String'>
    readonly url: FieldRef<"ProjectAsset", 'String'>
    readonly createdAt: FieldRef<"ProjectAsset", 'DateTime'>
    readonly updatedAt: FieldRef<"ProjectAsset", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectAsset findUnique
   */
  export type ProjectAssetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAsset
     */
    select?: ProjectAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAsset
     */
    omit?: ProjectAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAssetInclude<ExtArgs> | null
    /**
     * Filter, which ProjectAsset to fetch.
     */
    where: ProjectAssetWhereUniqueInput
  }

  /**
   * ProjectAsset findUniqueOrThrow
   */
  export type ProjectAssetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAsset
     */
    select?: ProjectAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAsset
     */
    omit?: ProjectAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAssetInclude<ExtArgs> | null
    /**
     * Filter, which ProjectAsset to fetch.
     */
    where: ProjectAssetWhereUniqueInput
  }

  /**
   * ProjectAsset findFirst
   */
  export type ProjectAssetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAsset
     */
    select?: ProjectAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAsset
     */
    omit?: ProjectAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAssetInclude<ExtArgs> | null
    /**
     * Filter, which ProjectAsset to fetch.
     */
    where?: ProjectAssetWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectAssets to fetch.
     */
    orderBy?: ProjectAssetOrderByWithRelationInput | ProjectAssetOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectAssets.
     */
    cursor?: ProjectAssetWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectAssets from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectAssets.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectAssets.
     */
    distinct?: ProjectAssetScalarFieldEnum | ProjectAssetScalarFieldEnum[] | $Types.Skip
  }

  /**
   * ProjectAsset findFirstOrThrow
   */
  export type ProjectAssetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAsset
     */
    select?: ProjectAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAsset
     */
    omit?: ProjectAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAssetInclude<ExtArgs> | null
    /**
     * Filter, which ProjectAsset to fetch.
     */
    where?: ProjectAssetWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectAssets to fetch.
     */
    orderBy?: ProjectAssetOrderByWithRelationInput | ProjectAssetOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectAssets.
     */
    cursor?: ProjectAssetWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectAssets from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectAssets.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectAssets.
     */
    distinct?: ProjectAssetScalarFieldEnum | ProjectAssetScalarFieldEnum[] | $Types.Skip
  }

  /**
   * ProjectAsset findMany
   */
  export type ProjectAssetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAsset
     */
    select?: ProjectAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAsset
     */
    omit?: ProjectAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAssetInclude<ExtArgs> | null
    /**
     * Filter, which ProjectAssets to fetch.
     */
    where?: ProjectAssetWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectAssets to fetch.
     */
    orderBy?: ProjectAssetOrderByWithRelationInput | ProjectAssetOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectAssets.
     */
    cursor?: ProjectAssetWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectAssets from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectAssets.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectAssets.
     */
    distinct?: ProjectAssetScalarFieldEnum | ProjectAssetScalarFieldEnum[] | $Types.Skip
  }

  /**
   * ProjectAsset create
   */
  export type ProjectAssetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAsset
     */
    select?: ProjectAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAsset
     */
    omit?: ProjectAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAssetInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectAsset.
     */
    data: XOR<ProjectAssetCreateInput, ProjectAssetUncheckedCreateInput>
  }

  /**
   * ProjectAsset createMany
   */
  export type ProjectAssetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectAssets.
     */
    data: ProjectAssetCreateManyInput | ProjectAssetCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * ProjectAsset createManyAndReturn
   */
  export type ProjectAssetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAsset
     */
    select?: ProjectAssetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAsset
     */
    omit?: ProjectAssetOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectAssets.
     */
    data: ProjectAssetCreateManyInput | ProjectAssetCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAssetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectAsset update
   */
  export type ProjectAssetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAsset
     */
    select?: ProjectAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAsset
     */
    omit?: ProjectAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAssetInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectAsset.
     */
    data: XOR<ProjectAssetUpdateInput, ProjectAssetUncheckedUpdateInput>
    /**
     * Choose, which ProjectAsset to update.
     */
    where: ProjectAssetWhereUniqueInput
  }

  /**
   * ProjectAsset updateMany
   */
  export type ProjectAssetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectAssets.
     */
    data: XOR<ProjectAssetUpdateManyMutationInput, ProjectAssetUncheckedUpdateManyInput>
    /**
     * Filter which ProjectAssets to update
     */
    where?: ProjectAssetWhereInput | $Types.Skip
    /**
     * Limit how many ProjectAssets to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * ProjectAsset updateManyAndReturn
   */
  export type ProjectAssetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAsset
     */
    select?: ProjectAssetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAsset
     */
    omit?: ProjectAssetOmit<ExtArgs> | null
    /**
     * The data used to update ProjectAssets.
     */
    data: XOR<ProjectAssetUpdateManyMutationInput, ProjectAssetUncheckedUpdateManyInput>
    /**
     * Filter which ProjectAssets to update
     */
    where?: ProjectAssetWhereInput | $Types.Skip
    /**
     * Limit how many ProjectAssets to update.
     */
    limit?: number | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAssetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectAsset upsert
   */
  export type ProjectAssetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAsset
     */
    select?: ProjectAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAsset
     */
    omit?: ProjectAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAssetInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectAsset to update in case it exists.
     */
    where: ProjectAssetWhereUniqueInput
    /**
     * In case the ProjectAsset found by the `where` argument doesn't exist, create a new ProjectAsset with this data.
     */
    create: XOR<ProjectAssetCreateInput, ProjectAssetUncheckedCreateInput>
    /**
     * In case the ProjectAsset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectAssetUpdateInput, ProjectAssetUncheckedUpdateInput>
  }

  /**
   * ProjectAsset delete
   */
  export type ProjectAssetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAsset
     */
    select?: ProjectAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAsset
     */
    omit?: ProjectAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAssetInclude<ExtArgs> | null
    /**
     * Filter which ProjectAsset to delete.
     */
    where: ProjectAssetWhereUniqueInput
  }

  /**
   * ProjectAsset deleteMany
   */
  export type ProjectAssetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectAssets to delete
     */
    where?: ProjectAssetWhereInput | $Types.Skip
    /**
     * Limit how many ProjectAssets to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * ProjectAsset.parent
   */
  export type ProjectAsset$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAsset
     */
    select?: ProjectAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAsset
     */
    omit?: ProjectAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAssetInclude<ExtArgs> | null
    where?: ProjectAssetWhereInput | $Types.Skip
  }

  /**
   * ProjectAsset.children
   */
  export type ProjectAsset$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAsset
     */
    select?: ProjectAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAsset
     */
    omit?: ProjectAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAssetInclude<ExtArgs> | null
    where?: ProjectAssetWhereInput | $Types.Skip
    orderBy?: ProjectAssetOrderByWithRelationInput | ProjectAssetOrderByWithRelationInput[] | $Types.Skip
    cursor?: ProjectAssetWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: ProjectAssetScalarFieldEnum | ProjectAssetScalarFieldEnum[] | $Types.Skip
  }

  /**
   * ProjectAsset.phase
   */
  export type ProjectAsset$phaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phase
     */
    select?: PhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phase
     */
    omit?: PhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhaseInclude<ExtArgs> | null
    where?: PhaseWhereInput | $Types.Skip
  }

  /**
   * ProjectAsset.post
   */
  export type ProjectAsset$postArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput | $Types.Skip
  }

  /**
   * ProjectAsset without action
   */
  export type ProjectAssetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAsset
     */
    select?: ProjectAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAsset
     */
    omit?: ProjectAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAssetInclude<ExtArgs> | null
  }


  /**
   * Model Team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    avatar: string | null
    color: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    avatar: string | null
    color: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    name: number
    description: number
    avatar: number
    color: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TeamMinAggregateInputType = {
    id?: true | $Types.Skip
    name?: true | $Types.Skip
    description?: true | $Types.Skip
    avatar?: true | $Types.Skip
    color?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type TeamMaxAggregateInputType = {
    id?: true | $Types.Skip
    name?: true | $Types.Skip
    description?: true | $Types.Skip
    avatar?: true | $Types.Skip
    color?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type TeamCountAggregateInputType = {
    id?: true | $Types.Skip
    name?: true | $Types.Skip
    description?: true | $Types.Skip
    avatar?: true | $Types.Skip
    color?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type TeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput | $Types.Skip
    orderBy?: TeamOrderByWithAggregationInput | TeamOrderByWithAggregationInput[] | $Types.Skip
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: TeamScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: TeamCountAggregateInputType | true
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    id: string
    name: string
    description: string | null
    avatar: string | null
    color: string | null
    createdAt: Date
    updatedAt: Date
    _count: TeamCountAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type TeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
    avatar?: boolean | $Types.Skip
    color?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    members?: boolean | Team$membersArgs<ExtArgs> | $Types.Skip
    posts?: boolean | Team$postsArgs<ExtArgs> | $Types.Skip
    files?: boolean | Team$filesArgs<ExtArgs> | $Types.Skip
    projects?: boolean | Team$projectsArgs<ExtArgs> | $Types.Skip
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["team"]>

  export type TeamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
    avatar?: boolean | $Types.Skip
    color?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
  }, ExtArgs["result"]["team"]>

  export type TeamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
    avatar?: boolean | $Types.Skip
    color?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
  }, ExtArgs["result"]["team"]>

  export type TeamSelectScalar = {
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
    avatar?: boolean | $Types.Skip
    color?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
  }

  export type TeamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "avatar" | "color" | "createdAt" | "updatedAt", ExtArgs["result"]["team"], $Types.Skip>
  export type TeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | Team$membersArgs<ExtArgs> | $Types.Skip
    posts?: boolean | Team$postsArgs<ExtArgs> | $Types.Skip
    files?: boolean | Team$filesArgs<ExtArgs> | $Types.Skip
    projects?: boolean | Team$projectsArgs<ExtArgs> | $Types.Skip
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type TeamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TeamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Team"
    objects: {
      members: Prisma.$TeamMemberPayload<ExtArgs>[]
      posts: Prisma.$PostPayload<ExtArgs>[]
      files: Prisma.$FileRecordPayload<ExtArgs>[]
      projects: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      avatar: string | null
      color: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["team"]>
    composites: {}
  }

  type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> = $Result.GetResult<Prisma.$TeamPayload, S>

  type TeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface TeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Team'], meta: { name: 'Team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamFindUniqueArgs>(args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Team that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamFindFirstArgs>(args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamFindManyArgs>(args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
     */
    create<T extends TeamCreateArgs>(args: SelectSubset<T, TeamCreateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teams.
     * @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamCreateManyArgs>(args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teams and returns the data saved in the database.
     * @param {TeamCreateManyAndReturnArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
     */
    delete<T extends TeamDeleteArgs>(args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamUpdateArgs>(args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamDeleteManyArgs>(args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamUpdateManyArgs>(args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams and returns the data updated in the database.
     * @param {TeamUpdateManyAndReturnArgs} args - Arguments to update many Teams.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeamUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     */
    upsert<T extends TeamUpsertArgs>(args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
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
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Team model
   */
  readonly fields: TeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends Team$membersArgs<ExtArgs> = {}>(args?: Subset<T, Team$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends Team$postsArgs<ExtArgs> = {}>(args?: Subset<T, Team$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    files<T extends Team$filesArgs<ExtArgs> = {}>(args?: Subset<T, Team$filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projects<T extends Team$projectsArgs<ExtArgs> = {}>(args?: Subset<T, Team$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Team model
   */
  interface TeamFieldRefs {
    readonly id: FieldRef<"Team", 'String'>
    readonly name: FieldRef<"Team", 'String'>
    readonly description: FieldRef<"Team", 'String'>
    readonly avatar: FieldRef<"Team", 'String'>
    readonly color: FieldRef<"Team", 'String'>
    readonly createdAt: FieldRef<"Team", 'DateTime'>
    readonly updatedAt: FieldRef<"Team", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Team findUnique
   */
  export type TeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findFirst
   */
  export type TeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Team findMany
   */
  export type TeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Team create
   */
  export type TeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to create a Team.
     */
    data: XOR<TeamCreateInput, TeamUncheckedCreateInput>
  }

  /**
   * Team createMany
   */
  export type TeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Team createManyAndReturn
   */
  export type TeamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Team update
   */
  export type TeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to update a Team.
     */
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
    /**
     * Choose, which Team to update.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput | $Types.Skip
    /**
     * Limit how many Teams to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Team updateManyAndReturn
   */
  export type TeamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput | $Types.Skip
    /**
     * Limit how many Teams to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Team upsert
   */
  export type TeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: TeamWhereUniqueInput
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
  }

  /**
   * Team delete
   */
  export type TeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter which Team to delete.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamWhereInput | $Types.Skip
    /**
     * Limit how many Teams to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Team.members
   */
  export type Team$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    where?: TeamMemberWhereInput | $Types.Skip
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[] | $Types.Skip
    cursor?: TeamMemberWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Team.posts
   */
  export type Team$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput | $Types.Skip
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[] | $Types.Skip
    cursor?: PostWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Team.files
   */
  export type Team$filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileRecord
     */
    select?: FileRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileRecord
     */
    omit?: FileRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileRecordInclude<ExtArgs> | null
    where?: FileRecordWhereInput | $Types.Skip
    orderBy?: FileRecordOrderByWithRelationInput | FileRecordOrderByWithRelationInput[] | $Types.Skip
    cursor?: FileRecordWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: FileRecordScalarFieldEnum | FileRecordScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Team.projects
   */
  export type Team$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput | $Types.Skip
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[] | $Types.Skip
    cursor?: ProjectWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Team without action
   */
  export type TeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
  }


  /**
   * Model TeamMember
   */

  export type AggregateTeamMember = {
    _count: TeamMemberCountAggregateOutputType | null
    _min: TeamMemberMinAggregateOutputType | null
    _max: TeamMemberMaxAggregateOutputType | null
  }

  export type TeamMemberMinAggregateOutputType = {
    id: string | null
    role: $Enums.TeamRole | null
    teamId: string | null
    userId: string | null
    joinedAt: Date | null
  }

  export type TeamMemberMaxAggregateOutputType = {
    id: string | null
    role: $Enums.TeamRole | null
    teamId: string | null
    userId: string | null
    joinedAt: Date | null
  }

  export type TeamMemberCountAggregateOutputType = {
    id: number
    role: number
    teamId: number
    userId: number
    joinedAt: number
    _all: number
  }


  export type TeamMemberMinAggregateInputType = {
    id?: true | $Types.Skip
    role?: true | $Types.Skip
    teamId?: true | $Types.Skip
    userId?: true | $Types.Skip
    joinedAt?: true | $Types.Skip
  }

  export type TeamMemberMaxAggregateInputType = {
    id?: true | $Types.Skip
    role?: true | $Types.Skip
    teamId?: true | $Types.Skip
    userId?: true | $Types.Skip
    joinedAt?: true | $Types.Skip
  }

  export type TeamMemberCountAggregateInputType = {
    id?: true | $Types.Skip
    role?: true | $Types.Skip
    teamId?: true | $Types.Skip
    userId?: true | $Types.Skip
    joinedAt?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type TeamMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamMember to aggregate.
     */
    where?: TeamMemberWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamMemberWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeamMembers
    **/
    _count?: true | TeamMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMemberMaxAggregateInputType
  }

  export type GetTeamMemberAggregateType<T extends TeamMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateTeamMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeamMember[P]>
      : GetScalarType<T[P], AggregateTeamMember[P]>
  }




  export type TeamMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamMemberWhereInput | $Types.Skip
    orderBy?: TeamMemberOrderByWithAggregationInput | TeamMemberOrderByWithAggregationInput[] | $Types.Skip
    by: TeamMemberScalarFieldEnum[] | TeamMemberScalarFieldEnum
    having?: TeamMemberScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: TeamMemberCountAggregateInputType | true
    _min?: TeamMemberMinAggregateInputType
    _max?: TeamMemberMaxAggregateInputType
  }

  export type TeamMemberGroupByOutputType = {
    id: string
    role: $Enums.TeamRole
    teamId: string
    userId: string
    joinedAt: Date
    _count: TeamMemberCountAggregateOutputType | null
    _min: TeamMemberMinAggregateOutputType | null
    _max: TeamMemberMaxAggregateOutputType | null
  }

  type GetTeamMemberGroupByPayload<T extends TeamMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamMemberGroupByOutputType[P]>
            : GetScalarType<T[P], TeamMemberGroupByOutputType[P]>
        }
      >
    >


  export type TeamMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    role?: boolean | $Types.Skip
    teamId?: boolean | $Types.Skip
    userId?: boolean | $Types.Skip
    joinedAt?: boolean | $Types.Skip
    team?: boolean | TeamDefaultArgs<ExtArgs> | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["teamMember"]>

  export type TeamMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    role?: boolean | $Types.Skip
    teamId?: boolean | $Types.Skip
    userId?: boolean | $Types.Skip
    joinedAt?: boolean | $Types.Skip
    team?: boolean | TeamDefaultArgs<ExtArgs> | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["teamMember"]>

  export type TeamMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    role?: boolean | $Types.Skip
    teamId?: boolean | $Types.Skip
    userId?: boolean | $Types.Skip
    joinedAt?: boolean | $Types.Skip
    team?: boolean | TeamDefaultArgs<ExtArgs> | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["teamMember"]>

  export type TeamMemberSelectScalar = {
    id?: boolean | $Types.Skip
    role?: boolean | $Types.Skip
    teamId?: boolean | $Types.Skip
    userId?: boolean | $Types.Skip
    joinedAt?: boolean | $Types.Skip
  }

  export type TeamMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role" | "teamId" | "userId" | "joinedAt", ExtArgs["result"]["teamMember"], $Types.Skip>
  export type TeamMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs> | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type TeamMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs> | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type TeamMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs> | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }

  export type $TeamMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeamMember"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      role: $Enums.TeamRole
      teamId: string
      userId: string
      joinedAt: Date
    }, ExtArgs["result"]["teamMember"]>
    composites: {}
  }

  type TeamMemberGetPayload<S extends boolean | null | undefined | TeamMemberDefaultArgs> = $Result.GetResult<Prisma.$TeamMemberPayload, S>

  type TeamMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamMemberCountAggregateInputType | true
    }

  export interface TeamMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeamMember'], meta: { name: 'TeamMember' } }
    /**
     * Find zero or one TeamMember that matches the filter.
     * @param {TeamMemberFindUniqueArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamMemberFindUniqueArgs>(args: SelectSubset<T, TeamMemberFindUniqueArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeamMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamMemberFindUniqueOrThrowArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberFindFirstArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamMemberFindFirstArgs>(args?: SelectSubset<T, TeamMemberFindFirstArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberFindFirstOrThrowArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeamMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeamMembers
     * const teamMembers = await prisma.teamMember.findMany()
     * 
     * // Get first 10 TeamMembers
     * const teamMembers = await prisma.teamMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamMemberWithIdOnly = await prisma.teamMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamMemberFindManyArgs>(args?: SelectSubset<T, TeamMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeamMember.
     * @param {TeamMemberCreateArgs} args - Arguments to create a TeamMember.
     * @example
     * // Create one TeamMember
     * const TeamMember = await prisma.teamMember.create({
     *   data: {
     *     // ... data to create a TeamMember
     *   }
     * })
     * 
     */
    create<T extends TeamMemberCreateArgs>(args: SelectSubset<T, TeamMemberCreateArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeamMembers.
     * @param {TeamMemberCreateManyArgs} args - Arguments to create many TeamMembers.
     * @example
     * // Create many TeamMembers
     * const teamMember = await prisma.teamMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamMemberCreateManyArgs>(args?: SelectSubset<T, TeamMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeamMembers and returns the data saved in the database.
     * @param {TeamMemberCreateManyAndReturnArgs} args - Arguments to create many TeamMembers.
     * @example
     * // Create many TeamMembers
     * const teamMember = await prisma.teamMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeamMembers and only return the `id`
     * const teamMemberWithIdOnly = await prisma.teamMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeamMember.
     * @param {TeamMemberDeleteArgs} args - Arguments to delete one TeamMember.
     * @example
     * // Delete one TeamMember
     * const TeamMember = await prisma.teamMember.delete({
     *   where: {
     *     // ... filter to delete one TeamMember
     *   }
     * })
     * 
     */
    delete<T extends TeamMemberDeleteArgs>(args: SelectSubset<T, TeamMemberDeleteArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeamMember.
     * @param {TeamMemberUpdateArgs} args - Arguments to update one TeamMember.
     * @example
     * // Update one TeamMember
     * const teamMember = await prisma.teamMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamMemberUpdateArgs>(args: SelectSubset<T, TeamMemberUpdateArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeamMembers.
     * @param {TeamMemberDeleteManyArgs} args - Arguments to filter TeamMembers to delete.
     * @example
     * // Delete a few TeamMembers
     * const { count } = await prisma.teamMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamMemberDeleteManyArgs>(args?: SelectSubset<T, TeamMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeamMembers
     * const teamMember = await prisma.teamMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamMemberUpdateManyArgs>(args: SelectSubset<T, TeamMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamMembers and returns the data updated in the database.
     * @param {TeamMemberUpdateManyAndReturnArgs} args - Arguments to update many TeamMembers.
     * @example
     * // Update many TeamMembers
     * const teamMember = await prisma.teamMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeamMembers and only return the `id`
     * const teamMemberWithIdOnly = await prisma.teamMember.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeamMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeamMember.
     * @param {TeamMemberUpsertArgs} args - Arguments to update or create a TeamMember.
     * @example
     * // Update or create a TeamMember
     * const teamMember = await prisma.teamMember.upsert({
     *   create: {
     *     // ... data to create a TeamMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeamMember we want to update
     *   }
     * })
     */
    upsert<T extends TeamMemberUpsertArgs>(args: SelectSubset<T, TeamMemberUpsertArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeamMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberCountArgs} args - Arguments to filter TeamMembers to count.
     * @example
     * // Count the number of TeamMembers
     * const count = await prisma.teamMember.count({
     *   where: {
     *     // ... the filter for the TeamMembers we want to count
     *   }
     * })
    **/
    count<T extends TeamMemberCountArgs>(
      args?: Subset<T, TeamMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeamMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamMemberAggregateArgs>(args: Subset<T, TeamMemberAggregateArgs>): Prisma.PrismaPromise<GetTeamMemberAggregateType<T>>

    /**
     * Group by TeamMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberGroupByArgs} args - Group by arguments.
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
      T extends TeamMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamMemberGroupByArgs['orderBy'] }
        : { orderBy?: TeamMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TeamMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeamMember model
   */
  readonly fields: TeamMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeamMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TeamMember model
   */
  interface TeamMemberFieldRefs {
    readonly id: FieldRef<"TeamMember", 'String'>
    readonly role: FieldRef<"TeamMember", 'TeamRole'>
    readonly teamId: FieldRef<"TeamMember", 'String'>
    readonly userId: FieldRef<"TeamMember", 'String'>
    readonly joinedAt: FieldRef<"TeamMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TeamMember findUnique
   */
  export type TeamMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember findUniqueOrThrow
   */
  export type TeamMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember findFirst
   */
  export type TeamMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where?: TeamMemberWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamMembers.
     */
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[] | $Types.Skip
  }

  /**
   * TeamMember findFirstOrThrow
   */
  export type TeamMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where?: TeamMemberWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamMembers.
     */
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[] | $Types.Skip
  }

  /**
   * TeamMember findMany
   */
  export type TeamMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMembers to fetch.
     */
    where?: TeamMemberWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamMembers.
     */
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[] | $Types.Skip
  }

  /**
   * TeamMember create
   */
  export type TeamMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a TeamMember.
     */
    data: XOR<TeamMemberCreateInput, TeamMemberUncheckedCreateInput>
  }

  /**
   * TeamMember createMany
   */
  export type TeamMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeamMembers.
     */
    data: TeamMemberCreateManyInput | TeamMemberCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * TeamMember createManyAndReturn
   */
  export type TeamMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * The data used to create many TeamMembers.
     */
    data: TeamMemberCreateManyInput | TeamMemberCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamMember update
   */
  export type TeamMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a TeamMember.
     */
    data: XOR<TeamMemberUpdateInput, TeamMemberUncheckedUpdateInput>
    /**
     * Choose, which TeamMember to update.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember updateMany
   */
  export type TeamMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeamMembers.
     */
    data: XOR<TeamMemberUpdateManyMutationInput, TeamMemberUncheckedUpdateManyInput>
    /**
     * Filter which TeamMembers to update
     */
    where?: TeamMemberWhereInput | $Types.Skip
    /**
     * Limit how many TeamMembers to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * TeamMember updateManyAndReturn
   */
  export type TeamMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * The data used to update TeamMembers.
     */
    data: XOR<TeamMemberUpdateManyMutationInput, TeamMemberUncheckedUpdateManyInput>
    /**
     * Filter which TeamMembers to update
     */
    where?: TeamMemberWhereInput | $Types.Skip
    /**
     * Limit how many TeamMembers to update.
     */
    limit?: number | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamMember upsert
   */
  export type TeamMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the TeamMember to update in case it exists.
     */
    where: TeamMemberWhereUniqueInput
    /**
     * In case the TeamMember found by the `where` argument doesn't exist, create a new TeamMember with this data.
     */
    create: XOR<TeamMemberCreateInput, TeamMemberUncheckedCreateInput>
    /**
     * In case the TeamMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamMemberUpdateInput, TeamMemberUncheckedUpdateInput>
  }

  /**
   * TeamMember delete
   */
  export type TeamMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter which TeamMember to delete.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember deleteMany
   */
  export type TeamMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamMembers to delete
     */
    where?: TeamMemberWhereInput | $Types.Skip
    /**
     * Limit how many TeamMembers to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * TeamMember without action
   */
  export type TeamMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
  }


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
    userName: string | null
    email: string | null
    role: $Enums.Role | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    userName: string | null
    email: string | null
    role: $Enums.Role | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    userName: number
    email: number
    role: number
    image: number
    userCollection: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true | $Types.Skip
    userName?: true | $Types.Skip
    email?: true | $Types.Skip
    role?: true | $Types.Skip
    image?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type UserMaxAggregateInputType = {
    id?: true | $Types.Skip
    userName?: true | $Types.Skip
    email?: true | $Types.Skip
    role?: true | $Types.Skip
    image?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type UserCountAggregateInputType = {
    id?: true | $Types.Skip
    userName?: true | $Types.Skip
    email?: true | $Types.Skip
    role?: true | $Types.Skip
    image?: true | $Types.Skip
    userCollection?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number | $Types.Skip
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput | $Types.Skip
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[] | $Types.Skip
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    userName: string
    email: string
    role: $Enums.Role
    image: string | null
    userCollection: string[]
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    userName?: boolean | $Types.Skip
    email?: boolean | $Types.Skip
    role?: boolean | $Types.Skip
    image?: boolean | $Types.Skip
    userCollection?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    teamMembers?: boolean | User$teamMembersArgs<ExtArgs> | $Types.Skip
    accounts?: boolean | User$accountsArgs<ExtArgs> | $Types.Skip
    fileRecords?: boolean | User$fileRecordsArgs<ExtArgs> | $Types.Skip
    posts?: boolean | User$postsArgs<ExtArgs> | $Types.Skip
    comments?: boolean | User$commentsArgs<ExtArgs> | $Types.Skip
    projects?: boolean | User$projectsArgs<ExtArgs> | $Types.Skip
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    userName?: boolean | $Types.Skip
    email?: boolean | $Types.Skip
    role?: boolean | $Types.Skip
    image?: boolean | $Types.Skip
    userCollection?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    userName?: boolean | $Types.Skip
    email?: boolean | $Types.Skip
    role?: boolean | $Types.Skip
    image?: boolean | $Types.Skip
    userCollection?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean | $Types.Skip
    userName?: boolean | $Types.Skip
    email?: boolean | $Types.Skip
    role?: boolean | $Types.Skip
    image?: boolean | $Types.Skip
    userCollection?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userName" | "email" | "role" | "image" | "userCollection" | "createdAt" | "updatedAt", ExtArgs["result"]["user"], $Types.Skip>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teamMembers?: boolean | User$teamMembersArgs<ExtArgs> | $Types.Skip
    accounts?: boolean | User$accountsArgs<ExtArgs> | $Types.Skip
    fileRecords?: boolean | User$fileRecordsArgs<ExtArgs> | $Types.Skip
    posts?: boolean | User$postsArgs<ExtArgs> | $Types.Skip
    comments?: boolean | User$commentsArgs<ExtArgs> | $Types.Skip
    projects?: boolean | User$projectsArgs<ExtArgs> | $Types.Skip
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      teamMembers: Prisma.$TeamMemberPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      fileRecords: Prisma.$FileRecordPayload<ExtArgs>[]
      posts: Prisma.$PostPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      projects: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userName: string
      email: string
      role: $Enums.Role
      image: string | null
      userCollection: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
      T extends $Utils.Record<'select', any>
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
      ByFields extends MaybeTupleToUnion<T['by']>,
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
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teamMembers<T extends User$teamMembersArgs<ExtArgs> = {}>(args?: Subset<T, User$teamMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fileRecords<T extends User$fileRecordsArgs<ExtArgs> = {}>(args?: Subset<T, User$fileRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projects<T extends User$projectsArgs<ExtArgs> = {}>(args?: Subset<T, User$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly userName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly image: FieldRef<"User", 'String'>
    readonly userCollection: FieldRef<"User", 'String[]'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[] | $Types.Skip
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[] | $Types.Skip
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[] | $Types.Skip
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput | $Types.Skip
    /**
     * Limit how many Users to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput | $Types.Skip
    /**
     * Limit how many Users to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput | $Types.Skip
    /**
     * Limit how many Users to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * User.teamMembers
   */
  export type User$teamMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    where?: TeamMemberWhereInput | $Types.Skip
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[] | $Types.Skip
    cursor?: TeamMemberWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[] | $Types.Skip
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput | $Types.Skip
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[] | $Types.Skip
    cursor?: AccountWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[] | $Types.Skip
  }

  /**
   * User.fileRecords
   */
  export type User$fileRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileRecord
     */
    select?: FileRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileRecord
     */
    omit?: FileRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileRecordInclude<ExtArgs> | null
    where?: FileRecordWhereInput | $Types.Skip
    orderBy?: FileRecordOrderByWithRelationInput | FileRecordOrderByWithRelationInput[] | $Types.Skip
    cursor?: FileRecordWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: FileRecordScalarFieldEnum | FileRecordScalarFieldEnum[] | $Types.Skip
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput | $Types.Skip
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[] | $Types.Skip
    cursor?: PostWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[] | $Types.Skip
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput | $Types.Skip
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[] | $Types.Skip
    cursor?: CommentWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[] | $Types.Skip
  }

  /**
   * User.projects
   */
  export type User$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput | $Types.Skip
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[] | $Types.Skip
    cursor?: ProjectWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[] | $Types.Skip
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    password: 'password',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    content: 'content',
    postId: 'postId',
    userId: 'userId',
    parentId: 'parentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const FileRecordScalarFieldEnum: {
    id: 'id',
    shortId: 'shortId',
    name: 'name',
    fileId: 'fileId',
    viewerFileId: 'viewerFileId',
    category: 'category',
    extension: 'extension',
    size: 'size',
    status: 'status',
    errorMessage: 'errorMessage',
    teamId: 'teamId',
    uploaderId: 'uploaderId',
    postId: 'postId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FileRecordScalarFieldEnum = (typeof FileRecordScalarFieldEnum)[keyof typeof FileRecordScalarFieldEnum]


  export const PhaseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    sortOrder: 'sortOrder',
    projectId: 'projectId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PhaseScalarFieldEnum = (typeof PhaseScalarFieldEnum)[keyof typeof PhaseScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    shortId: 'shortId',
    title: 'title',
    category: 'category',
    description: 'description',
    type: 'type',
    keywords: 'keywords',
    coverImage: 'coverImage',
    images: 'images',
    uploaderId: 'uploaderId',
    relatedPosts: 'relatedPosts',
    permission: 'permission',
    teamId: 'teamId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    client: 'client',
    location: 'location',
    coverImage: 'coverImage',
    status: 'status',
    visibility: 'visibility',
    teamId: 'teamId',
    creatorId: 'creatorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ProjectAssetScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    type: 'type',
    sortOrder: 'sortOrder',
    parentId: 'parentId',
    projectId: 'projectId',
    phaseId: 'phaseId',
    postId: 'postId',
    url: 'url',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectAssetScalarFieldEnum = (typeof ProjectAssetScalarFieldEnum)[keyof typeof ProjectAssetScalarFieldEnum]


  export const TeamScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    avatar: 'avatar',
    color: 'color',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const TeamMemberScalarFieldEnum: {
    id: 'id',
    role: 'role',
    teamId: 'teamId',
    userId: 'userId',
    joinedAt: 'joinedAt'
  };

  export type TeamMemberScalarFieldEnum = (typeof TeamMemberScalarFieldEnum)[keyof typeof TeamMemberScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    userName: 'userName',
    email: 'email',
    role: 'role',
    image: 'image',
    userCollection: 'userCollection',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'FileCategory'
   */
  export type EnumFileCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FileCategory'>
    


  /**
   * Reference to a field of type 'FileCategory[]'
   */
  export type ListEnumFileCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FileCategory[]'>
    


  /**
   * Reference to a field of type 'ProcessStatus'
   */
  export type EnumProcessStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProcessStatus'>
    


  /**
   * Reference to a field of type 'ProcessStatus[]'
   */
  export type ListEnumProcessStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProcessStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ProjectStatus'
   */
  export type EnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus'>
    


  /**
   * Reference to a field of type 'ProjectStatus[]'
   */
  export type ListEnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus[]'>
    


  /**
   * Reference to a field of type 'ProjectVisibility'
   */
  export type EnumProjectVisibilityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectVisibility'>
    


  /**
   * Reference to a field of type 'ProjectVisibility[]'
   */
  export type ListEnumProjectVisibilityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectVisibility[]'>
    


  /**
   * Reference to a field of type 'AssetType'
   */
  export type EnumAssetTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssetType'>
    


  /**
   * Reference to a field of type 'AssetType[]'
   */
  export type ListEnumAssetTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssetType[]'>
    


  /**
   * Reference to a field of type 'TeamRole'
   */
  export type EnumTeamRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TeamRole'>
    


  /**
   * Reference to a field of type 'TeamRole[]'
   */
  export type ListEnumTeamRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TeamRole[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[] | $Types.Skip
    OR?: AccountWhereInput[] | $Types.Skip
    NOT?: AccountWhereInput | AccountWhereInput[] | $Types.Skip
    id?: StringFilter<"Account"> | string | $Types.Skip
    userId?: StringFilter<"Account"> | string | $Types.Skip
    password?: StringNullableFilter<"Account"> | string | null | $Types.Skip
    provider?: StringFilter<"Account"> | string | $Types.Skip
    providerAccountId?: StringFilter<"Account"> | string | $Types.Skip
    createdAt?: DateTimeFilter<"Account"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Account"> | Date | string | $Types.Skip
    user?: XOR<UserScalarRelationFilter, UserWhereInput> | $Types.Skip
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    userId?: SortOrder | $Types.Skip
    password?: SortOrderInput | SortOrder | $Types.Skip
    provider?: SortOrder | $Types.Skip
    providerAccountId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    user?: UserOrderByWithRelationInput | $Types.Skip
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string | $Types.Skip
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput | $Types.Skip
    AND?: AccountWhereInput | AccountWhereInput[] | $Types.Skip
    OR?: AccountWhereInput[] | $Types.Skip
    NOT?: AccountWhereInput | AccountWhereInput[] | $Types.Skip
    userId?: StringFilter<"Account"> | string | $Types.Skip
    password?: StringNullableFilter<"Account"> | string | null | $Types.Skip
    provider?: StringFilter<"Account"> | string | $Types.Skip
    providerAccountId?: StringFilter<"Account"> | string | $Types.Skip
    createdAt?: DateTimeFilter<"Account"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Account"> | Date | string | $Types.Skip
    user?: XOR<UserScalarRelationFilter, UserWhereInput> | $Types.Skip
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    userId?: SortOrder | $Types.Skip
    password?: SortOrderInput | SortOrder | $Types.Skip
    provider?: SortOrder | $Types.Skip
    providerAccountId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    _count?: AccountCountOrderByAggregateInput | $Types.Skip
    _max?: AccountMaxOrderByAggregateInput | $Types.Skip
    _min?: AccountMinOrderByAggregateInput | $Types.Skip
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: AccountScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: StringWithAggregatesFilter<"Account"> | string | $Types.Skip
    userId?: StringWithAggregatesFilter<"Account"> | string | $Types.Skip
    password?: StringNullableWithAggregatesFilter<"Account"> | string | null | $Types.Skip
    provider?: StringWithAggregatesFilter<"Account"> | string | $Types.Skip
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string | $Types.Skip
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string | $Types.Skip
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string | $Types.Skip
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[] | $Types.Skip
    OR?: CommentWhereInput[] | $Types.Skip
    NOT?: CommentWhereInput | CommentWhereInput[] | $Types.Skip
    id?: StringFilter<"Comment"> | string | $Types.Skip
    content?: StringFilter<"Comment"> | string | $Types.Skip
    postId?: StringFilter<"Comment"> | string | $Types.Skip
    userId?: StringFilter<"Comment"> | string | $Types.Skip
    parentId?: StringNullableFilter<"Comment"> | string | null | $Types.Skip
    createdAt?: DateTimeFilter<"Comment"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Comment"> | Date | string | $Types.Skip
    post?: XOR<PostScalarRelationFilter, PostWhereInput> | $Types.Skip
    user?: XOR<UserScalarRelationFilter, UserWhereInput> | $Types.Skip
    parent?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null | $Types.Skip
    replies?: CommentListRelationFilter | $Types.Skip
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    content?: SortOrder | $Types.Skip
    postId?: SortOrder | $Types.Skip
    userId?: SortOrder | $Types.Skip
    parentId?: SortOrderInput | SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    post?: PostOrderByWithRelationInput | $Types.Skip
    user?: UserOrderByWithRelationInput | $Types.Skip
    parent?: CommentOrderByWithRelationInput | $Types.Skip
    replies?: CommentOrderByRelationAggregateInput | $Types.Skip
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string | $Types.Skip
    AND?: CommentWhereInput | CommentWhereInput[] | $Types.Skip
    OR?: CommentWhereInput[] | $Types.Skip
    NOT?: CommentWhereInput | CommentWhereInput[] | $Types.Skip
    content?: StringFilter<"Comment"> | string | $Types.Skip
    postId?: StringFilter<"Comment"> | string | $Types.Skip
    userId?: StringFilter<"Comment"> | string | $Types.Skip
    parentId?: StringNullableFilter<"Comment"> | string | null | $Types.Skip
    createdAt?: DateTimeFilter<"Comment"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Comment"> | Date | string | $Types.Skip
    post?: XOR<PostScalarRelationFilter, PostWhereInput> | $Types.Skip
    user?: XOR<UserScalarRelationFilter, UserWhereInput> | $Types.Skip
    parent?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null | $Types.Skip
    replies?: CommentListRelationFilter | $Types.Skip
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    content?: SortOrder | $Types.Skip
    postId?: SortOrder | $Types.Skip
    userId?: SortOrder | $Types.Skip
    parentId?: SortOrderInput | SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    _count?: CommentCountOrderByAggregateInput | $Types.Skip
    _max?: CommentMaxOrderByAggregateInput | $Types.Skip
    _min?: CommentMinOrderByAggregateInput | $Types.Skip
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: CommentScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: StringWithAggregatesFilter<"Comment"> | string | $Types.Skip
    content?: StringWithAggregatesFilter<"Comment"> | string | $Types.Skip
    postId?: StringWithAggregatesFilter<"Comment"> | string | $Types.Skip
    userId?: StringWithAggregatesFilter<"Comment"> | string | $Types.Skip
    parentId?: StringNullableWithAggregatesFilter<"Comment"> | string | null | $Types.Skip
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string | $Types.Skip
    updatedAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string | $Types.Skip
  }

  export type FileRecordWhereInput = {
    AND?: FileRecordWhereInput | FileRecordWhereInput[] | $Types.Skip
    OR?: FileRecordWhereInput[] | $Types.Skip
    NOT?: FileRecordWhereInput | FileRecordWhereInput[] | $Types.Skip
    id?: StringFilter<"FileRecord"> | string | $Types.Skip
    shortId?: StringNullableFilter<"FileRecord"> | string | null | $Types.Skip
    name?: StringFilter<"FileRecord"> | string | $Types.Skip
    fileId?: StringFilter<"FileRecord"> | string | $Types.Skip
    viewerFileId?: StringNullableFilter<"FileRecord"> | string | null | $Types.Skip
    category?: EnumFileCategoryFilter<"FileRecord"> | $Enums.FileCategory | $Types.Skip
    extension?: StringNullableFilter<"FileRecord"> | string | null | $Types.Skip
    size?: StringFilter<"FileRecord"> | string | $Types.Skip
    status?: EnumProcessStatusFilter<"FileRecord"> | $Enums.ProcessStatus | $Types.Skip
    errorMessage?: StringNullableFilter<"FileRecord"> | string | null | $Types.Skip
    teamId?: StringNullableFilter<"FileRecord"> | string | null | $Types.Skip
    uploaderId?: StringFilter<"FileRecord"> | string | $Types.Skip
    postId?: StringNullableFilter<"FileRecord"> | string | null | $Types.Skip
    createdAt?: DateTimeFilter<"FileRecord"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"FileRecord"> | Date | string | $Types.Skip
    team?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null | $Types.Skip
    uploader?: XOR<UserScalarRelationFilter, UserWhereInput> | $Types.Skip
    post?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null | $Types.Skip
  }

  export type FileRecordOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    shortId?: SortOrderInput | SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    fileId?: SortOrder | $Types.Skip
    viewerFileId?: SortOrderInput | SortOrder | $Types.Skip
    category?: SortOrder | $Types.Skip
    extension?: SortOrderInput | SortOrder | $Types.Skip
    size?: SortOrder | $Types.Skip
    status?: SortOrder | $Types.Skip
    errorMessage?: SortOrderInput | SortOrder | $Types.Skip
    teamId?: SortOrderInput | SortOrder | $Types.Skip
    uploaderId?: SortOrder | $Types.Skip
    postId?: SortOrderInput | SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    team?: TeamOrderByWithRelationInput | $Types.Skip
    uploader?: UserOrderByWithRelationInput | $Types.Skip
    post?: PostOrderByWithRelationInput | $Types.Skip
  }

  export type FileRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string | $Types.Skip
    shortId?: string | $Types.Skip
    fileId?: string | $Types.Skip
    AND?: FileRecordWhereInput | FileRecordWhereInput[] | $Types.Skip
    OR?: FileRecordWhereInput[] | $Types.Skip
    NOT?: FileRecordWhereInput | FileRecordWhereInput[] | $Types.Skip
    name?: StringFilter<"FileRecord"> | string | $Types.Skip
    viewerFileId?: StringNullableFilter<"FileRecord"> | string | null | $Types.Skip
    category?: EnumFileCategoryFilter<"FileRecord"> | $Enums.FileCategory | $Types.Skip
    extension?: StringNullableFilter<"FileRecord"> | string | null | $Types.Skip
    size?: StringFilter<"FileRecord"> | string | $Types.Skip
    status?: EnumProcessStatusFilter<"FileRecord"> | $Enums.ProcessStatus | $Types.Skip
    errorMessage?: StringNullableFilter<"FileRecord"> | string | null | $Types.Skip
    teamId?: StringNullableFilter<"FileRecord"> | string | null | $Types.Skip
    uploaderId?: StringFilter<"FileRecord"> | string | $Types.Skip
    postId?: StringNullableFilter<"FileRecord"> | string | null | $Types.Skip
    createdAt?: DateTimeFilter<"FileRecord"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"FileRecord"> | Date | string | $Types.Skip
    team?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null | $Types.Skip
    uploader?: XOR<UserScalarRelationFilter, UserWhereInput> | $Types.Skip
    post?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null | $Types.Skip
  }, "id" | "shortId" | "fileId">

  export type FileRecordOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    shortId?: SortOrderInput | SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    fileId?: SortOrder | $Types.Skip
    viewerFileId?: SortOrderInput | SortOrder | $Types.Skip
    category?: SortOrder | $Types.Skip
    extension?: SortOrderInput | SortOrder | $Types.Skip
    size?: SortOrder | $Types.Skip
    status?: SortOrder | $Types.Skip
    errorMessage?: SortOrderInput | SortOrder | $Types.Skip
    teamId?: SortOrderInput | SortOrder | $Types.Skip
    uploaderId?: SortOrder | $Types.Skip
    postId?: SortOrderInput | SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    _count?: FileRecordCountOrderByAggregateInput | $Types.Skip
    _max?: FileRecordMaxOrderByAggregateInput | $Types.Skip
    _min?: FileRecordMinOrderByAggregateInput | $Types.Skip
  }

  export type FileRecordScalarWhereWithAggregatesInput = {
    AND?: FileRecordScalarWhereWithAggregatesInput | FileRecordScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: FileRecordScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: FileRecordScalarWhereWithAggregatesInput | FileRecordScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: StringWithAggregatesFilter<"FileRecord"> | string | $Types.Skip
    shortId?: StringNullableWithAggregatesFilter<"FileRecord"> | string | null | $Types.Skip
    name?: StringWithAggregatesFilter<"FileRecord"> | string | $Types.Skip
    fileId?: StringWithAggregatesFilter<"FileRecord"> | string | $Types.Skip
    viewerFileId?: StringNullableWithAggregatesFilter<"FileRecord"> | string | null | $Types.Skip
    category?: EnumFileCategoryWithAggregatesFilter<"FileRecord"> | $Enums.FileCategory | $Types.Skip
    extension?: StringNullableWithAggregatesFilter<"FileRecord"> | string | null | $Types.Skip
    size?: StringWithAggregatesFilter<"FileRecord"> | string | $Types.Skip
    status?: EnumProcessStatusWithAggregatesFilter<"FileRecord"> | $Enums.ProcessStatus | $Types.Skip
    errorMessage?: StringNullableWithAggregatesFilter<"FileRecord"> | string | null | $Types.Skip
    teamId?: StringNullableWithAggregatesFilter<"FileRecord"> | string | null | $Types.Skip
    uploaderId?: StringWithAggregatesFilter<"FileRecord"> | string | $Types.Skip
    postId?: StringNullableWithAggregatesFilter<"FileRecord"> | string | null | $Types.Skip
    createdAt?: DateTimeWithAggregatesFilter<"FileRecord"> | Date | string | $Types.Skip
    updatedAt?: DateTimeWithAggregatesFilter<"FileRecord"> | Date | string | $Types.Skip
  }

  export type PhaseWhereInput = {
    AND?: PhaseWhereInput | PhaseWhereInput[] | $Types.Skip
    OR?: PhaseWhereInput[] | $Types.Skip
    NOT?: PhaseWhereInput | PhaseWhereInput[] | $Types.Skip
    id?: StringFilter<"Phase"> | string | $Types.Skip
    name?: StringFilter<"Phase"> | string | $Types.Skip
    sortOrder?: IntFilter<"Phase"> | number | $Types.Skip
    projectId?: StringFilter<"Phase"> | string | $Types.Skip
    createdAt?: DateTimeFilter<"Phase"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Phase"> | Date | string | $Types.Skip
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput> | $Types.Skip
    rootAssets?: ProjectAssetListRelationFilter | $Types.Skip
  }

  export type PhaseOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    sortOrder?: SortOrder | $Types.Skip
    projectId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    project?: ProjectOrderByWithRelationInput | $Types.Skip
    rootAssets?: ProjectAssetOrderByRelationAggregateInput | $Types.Skip
  }

  export type PhaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string | $Types.Skip
    AND?: PhaseWhereInput | PhaseWhereInput[] | $Types.Skip
    OR?: PhaseWhereInput[] | $Types.Skip
    NOT?: PhaseWhereInput | PhaseWhereInput[] | $Types.Skip
    name?: StringFilter<"Phase"> | string | $Types.Skip
    sortOrder?: IntFilter<"Phase"> | number | $Types.Skip
    projectId?: StringFilter<"Phase"> | string | $Types.Skip
    createdAt?: DateTimeFilter<"Phase"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Phase"> | Date | string | $Types.Skip
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput> | $Types.Skip
    rootAssets?: ProjectAssetListRelationFilter | $Types.Skip
  }, "id">

  export type PhaseOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    sortOrder?: SortOrder | $Types.Skip
    projectId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    _count?: PhaseCountOrderByAggregateInput | $Types.Skip
    _avg?: PhaseAvgOrderByAggregateInput | $Types.Skip
    _max?: PhaseMaxOrderByAggregateInput | $Types.Skip
    _min?: PhaseMinOrderByAggregateInput | $Types.Skip
    _sum?: PhaseSumOrderByAggregateInput | $Types.Skip
  }

  export type PhaseScalarWhereWithAggregatesInput = {
    AND?: PhaseScalarWhereWithAggregatesInput | PhaseScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: PhaseScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: PhaseScalarWhereWithAggregatesInput | PhaseScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: StringWithAggregatesFilter<"Phase"> | string | $Types.Skip
    name?: StringWithAggregatesFilter<"Phase"> | string | $Types.Skip
    sortOrder?: IntWithAggregatesFilter<"Phase"> | number | $Types.Skip
    projectId?: StringWithAggregatesFilter<"Phase"> | string | $Types.Skip
    createdAt?: DateTimeWithAggregatesFilter<"Phase"> | Date | string | $Types.Skip
    updatedAt?: DateTimeWithAggregatesFilter<"Phase"> | Date | string | $Types.Skip
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[] | $Types.Skip
    OR?: PostWhereInput[] | $Types.Skip
    NOT?: PostWhereInput | PostWhereInput[] | $Types.Skip
    id?: StringFilter<"Post"> | string | $Types.Skip
    shortId?: StringFilter<"Post"> | string | $Types.Skip
    title?: StringFilter<"Post"> | string | $Types.Skip
    category?: StringFilter<"Post"> | string | $Types.Skip
    description?: StringNullableFilter<"Post"> | string | null | $Types.Skip
    type?: StringFilter<"Post"> | string | $Types.Skip
    keywords?: StringNullableListFilter<"Post"> | $Types.Skip
    coverImage?: StringNullableFilter<"Post"> | string | null | $Types.Skip
    images?: StringNullableListFilter<"Post"> | $Types.Skip
    uploaderId?: StringFilter<"Post"> | string | $Types.Skip
    relatedPosts?: StringNullableListFilter<"Post"> | $Types.Skip
    permission?: StringFilter<"Post"> | string | $Types.Skip
    teamId?: StringNullableFilter<"Post"> | string | null | $Types.Skip
    createdAt?: DateTimeFilter<"Post"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Post"> | Date | string | $Types.Skip
    files?: FileRecordListRelationFilter | $Types.Skip
    uploader?: XOR<UserScalarRelationFilter, UserWhereInput> | $Types.Skip
    team?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null | $Types.Skip
    comments?: CommentListRelationFilter | $Types.Skip
    projectAssets?: ProjectAssetListRelationFilter | $Types.Skip
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    shortId?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    category?: SortOrder | $Types.Skip
    description?: SortOrderInput | SortOrder | $Types.Skip
    type?: SortOrder | $Types.Skip
    keywords?: SortOrder | $Types.Skip
    coverImage?: SortOrderInput | SortOrder | $Types.Skip
    images?: SortOrder | $Types.Skip
    uploaderId?: SortOrder | $Types.Skip
    relatedPosts?: SortOrder | $Types.Skip
    permission?: SortOrder | $Types.Skip
    teamId?: SortOrderInput | SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    files?: FileRecordOrderByRelationAggregateInput | $Types.Skip
    uploader?: UserOrderByWithRelationInput | $Types.Skip
    team?: TeamOrderByWithRelationInput | $Types.Skip
    comments?: CommentOrderByRelationAggregateInput | $Types.Skip
    projectAssets?: ProjectAssetOrderByRelationAggregateInput | $Types.Skip
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string | $Types.Skip
    shortId?: string | $Types.Skip
    AND?: PostWhereInput | PostWhereInput[] | $Types.Skip
    OR?: PostWhereInput[] | $Types.Skip
    NOT?: PostWhereInput | PostWhereInput[] | $Types.Skip
    title?: StringFilter<"Post"> | string | $Types.Skip
    category?: StringFilter<"Post"> | string | $Types.Skip
    description?: StringNullableFilter<"Post"> | string | null | $Types.Skip
    type?: StringFilter<"Post"> | string | $Types.Skip
    keywords?: StringNullableListFilter<"Post"> | $Types.Skip
    coverImage?: StringNullableFilter<"Post"> | string | null | $Types.Skip
    images?: StringNullableListFilter<"Post"> | $Types.Skip
    uploaderId?: StringFilter<"Post"> | string | $Types.Skip
    relatedPosts?: StringNullableListFilter<"Post"> | $Types.Skip
    permission?: StringFilter<"Post"> | string | $Types.Skip
    teamId?: StringNullableFilter<"Post"> | string | null | $Types.Skip
    createdAt?: DateTimeFilter<"Post"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Post"> | Date | string | $Types.Skip
    files?: FileRecordListRelationFilter | $Types.Skip
    uploader?: XOR<UserScalarRelationFilter, UserWhereInput> | $Types.Skip
    team?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null | $Types.Skip
    comments?: CommentListRelationFilter | $Types.Skip
    projectAssets?: ProjectAssetListRelationFilter | $Types.Skip
  }, "id" | "shortId">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    shortId?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    category?: SortOrder | $Types.Skip
    description?: SortOrderInput | SortOrder | $Types.Skip
    type?: SortOrder | $Types.Skip
    keywords?: SortOrder | $Types.Skip
    coverImage?: SortOrderInput | SortOrder | $Types.Skip
    images?: SortOrder | $Types.Skip
    uploaderId?: SortOrder | $Types.Skip
    relatedPosts?: SortOrder | $Types.Skip
    permission?: SortOrder | $Types.Skip
    teamId?: SortOrderInput | SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    _count?: PostCountOrderByAggregateInput | $Types.Skip
    _max?: PostMaxOrderByAggregateInput | $Types.Skip
    _min?: PostMinOrderByAggregateInput | $Types.Skip
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: PostScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: StringWithAggregatesFilter<"Post"> | string | $Types.Skip
    shortId?: StringWithAggregatesFilter<"Post"> | string | $Types.Skip
    title?: StringWithAggregatesFilter<"Post"> | string | $Types.Skip
    category?: StringWithAggregatesFilter<"Post"> | string | $Types.Skip
    description?: StringNullableWithAggregatesFilter<"Post"> | string | null | $Types.Skip
    type?: StringWithAggregatesFilter<"Post"> | string | $Types.Skip
    keywords?: StringNullableListFilter<"Post"> | $Types.Skip
    coverImage?: StringNullableWithAggregatesFilter<"Post"> | string | null | $Types.Skip
    images?: StringNullableListFilter<"Post"> | $Types.Skip
    uploaderId?: StringWithAggregatesFilter<"Post"> | string | $Types.Skip
    relatedPosts?: StringNullableListFilter<"Post"> | $Types.Skip
    permission?: StringWithAggregatesFilter<"Post"> | string | $Types.Skip
    teamId?: StringNullableWithAggregatesFilter<"Post"> | string | null | $Types.Skip
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string | $Types.Skip
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string | $Types.Skip
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[] | $Types.Skip
    OR?: ProjectWhereInput[] | $Types.Skip
    NOT?: ProjectWhereInput | ProjectWhereInput[] | $Types.Skip
    id?: StringFilter<"Project"> | string | $Types.Skip
    name?: StringFilter<"Project"> | string | $Types.Skip
    description?: StringNullableFilter<"Project"> | string | null | $Types.Skip
    client?: StringNullableFilter<"Project"> | string | null | $Types.Skip
    location?: StringNullableFilter<"Project"> | string | null | $Types.Skip
    coverImage?: StringNullableFilter<"Project"> | string | null | $Types.Skip
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus | $Types.Skip
    visibility?: EnumProjectVisibilityFilter<"Project"> | $Enums.ProjectVisibility | $Types.Skip
    teamId?: StringFilter<"Project"> | string | $Types.Skip
    creatorId?: StringFilter<"Project"> | string | $Types.Skip
    createdAt?: DateTimeFilter<"Project"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Project"> | Date | string | $Types.Skip
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput> | $Types.Skip
    creator?: XOR<UserScalarRelationFilter, UserWhereInput> | $Types.Skip
    phases?: PhaseListRelationFilter | $Types.Skip
    assets?: ProjectAssetListRelationFilter | $Types.Skip
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    description?: SortOrderInput | SortOrder | $Types.Skip
    client?: SortOrderInput | SortOrder | $Types.Skip
    location?: SortOrderInput | SortOrder | $Types.Skip
    coverImage?: SortOrderInput | SortOrder | $Types.Skip
    status?: SortOrder | $Types.Skip
    visibility?: SortOrder | $Types.Skip
    teamId?: SortOrder | $Types.Skip
    creatorId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    team?: TeamOrderByWithRelationInput | $Types.Skip
    creator?: UserOrderByWithRelationInput | $Types.Skip
    phases?: PhaseOrderByRelationAggregateInput | $Types.Skip
    assets?: ProjectAssetOrderByRelationAggregateInput | $Types.Skip
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string | $Types.Skip
    AND?: ProjectWhereInput | ProjectWhereInput[] | $Types.Skip
    OR?: ProjectWhereInput[] | $Types.Skip
    NOT?: ProjectWhereInput | ProjectWhereInput[] | $Types.Skip
    name?: StringFilter<"Project"> | string | $Types.Skip
    description?: StringNullableFilter<"Project"> | string | null | $Types.Skip
    client?: StringNullableFilter<"Project"> | string | null | $Types.Skip
    location?: StringNullableFilter<"Project"> | string | null | $Types.Skip
    coverImage?: StringNullableFilter<"Project"> | string | null | $Types.Skip
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus | $Types.Skip
    visibility?: EnumProjectVisibilityFilter<"Project"> | $Enums.ProjectVisibility | $Types.Skip
    teamId?: StringFilter<"Project"> | string | $Types.Skip
    creatorId?: StringFilter<"Project"> | string | $Types.Skip
    createdAt?: DateTimeFilter<"Project"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Project"> | Date | string | $Types.Skip
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput> | $Types.Skip
    creator?: XOR<UserScalarRelationFilter, UserWhereInput> | $Types.Skip
    phases?: PhaseListRelationFilter | $Types.Skip
    assets?: ProjectAssetListRelationFilter | $Types.Skip
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    description?: SortOrderInput | SortOrder | $Types.Skip
    client?: SortOrderInput | SortOrder | $Types.Skip
    location?: SortOrderInput | SortOrder | $Types.Skip
    coverImage?: SortOrderInput | SortOrder | $Types.Skip
    status?: SortOrder | $Types.Skip
    visibility?: SortOrder | $Types.Skip
    teamId?: SortOrder | $Types.Skip
    creatorId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    _count?: ProjectCountOrderByAggregateInput | $Types.Skip
    _max?: ProjectMaxOrderByAggregateInput | $Types.Skip
    _min?: ProjectMinOrderByAggregateInput | $Types.Skip
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: ProjectScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: StringWithAggregatesFilter<"Project"> | string | $Types.Skip
    name?: StringWithAggregatesFilter<"Project"> | string | $Types.Skip
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null | $Types.Skip
    client?: StringNullableWithAggregatesFilter<"Project"> | string | null | $Types.Skip
    location?: StringNullableWithAggregatesFilter<"Project"> | string | null | $Types.Skip
    coverImage?: StringNullableWithAggregatesFilter<"Project"> | string | null | $Types.Skip
    status?: EnumProjectStatusWithAggregatesFilter<"Project"> | $Enums.ProjectStatus | $Types.Skip
    visibility?: EnumProjectVisibilityWithAggregatesFilter<"Project"> | $Enums.ProjectVisibility | $Types.Skip
    teamId?: StringWithAggregatesFilter<"Project"> | string | $Types.Skip
    creatorId?: StringWithAggregatesFilter<"Project"> | string | $Types.Skip
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string | $Types.Skip
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string | $Types.Skip
  }

  export type ProjectAssetWhereInput = {
    AND?: ProjectAssetWhereInput | ProjectAssetWhereInput[] | $Types.Skip
    OR?: ProjectAssetWhereInput[] | $Types.Skip
    NOT?: ProjectAssetWhereInput | ProjectAssetWhereInput[] | $Types.Skip
    id?: StringFilter<"ProjectAsset"> | string | $Types.Skip
    name?: StringNullableFilter<"ProjectAsset"> | string | null | $Types.Skip
    description?: StringNullableFilter<"ProjectAsset"> | string | null | $Types.Skip
    type?: EnumAssetTypeFilter<"ProjectAsset"> | $Enums.AssetType | $Types.Skip
    sortOrder?: IntFilter<"ProjectAsset"> | number | $Types.Skip
    parentId?: StringNullableFilter<"ProjectAsset"> | string | null | $Types.Skip
    projectId?: StringFilter<"ProjectAsset"> | string | $Types.Skip
    phaseId?: StringNullableFilter<"ProjectAsset"> | string | null | $Types.Skip
    postId?: StringNullableFilter<"ProjectAsset"> | string | null | $Types.Skip
    url?: StringNullableFilter<"ProjectAsset"> | string | null | $Types.Skip
    createdAt?: DateTimeFilter<"ProjectAsset"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"ProjectAsset"> | Date | string | $Types.Skip
    parent?: XOR<ProjectAssetNullableScalarRelationFilter, ProjectAssetWhereInput> | null | $Types.Skip
    children?: ProjectAssetListRelationFilter | $Types.Skip
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput> | $Types.Skip
    phase?: XOR<PhaseNullableScalarRelationFilter, PhaseWhereInput> | null | $Types.Skip
    post?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null | $Types.Skip
  }

  export type ProjectAssetOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrderInput | SortOrder | $Types.Skip
    description?: SortOrderInput | SortOrder | $Types.Skip
    type?: SortOrder | $Types.Skip
    sortOrder?: SortOrder | $Types.Skip
    parentId?: SortOrderInput | SortOrder | $Types.Skip
    projectId?: SortOrder | $Types.Skip
    phaseId?: SortOrderInput | SortOrder | $Types.Skip
    postId?: SortOrderInput | SortOrder | $Types.Skip
    url?: SortOrderInput | SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    parent?: ProjectAssetOrderByWithRelationInput | $Types.Skip
    children?: ProjectAssetOrderByRelationAggregateInput | $Types.Skip
    project?: ProjectOrderByWithRelationInput | $Types.Skip
    phase?: PhaseOrderByWithRelationInput | $Types.Skip
    post?: PostOrderByWithRelationInput | $Types.Skip
  }

  export type ProjectAssetWhereUniqueInput = Prisma.AtLeast<{
    id?: string | $Types.Skip
    AND?: ProjectAssetWhereInput | ProjectAssetWhereInput[] | $Types.Skip
    OR?: ProjectAssetWhereInput[] | $Types.Skip
    NOT?: ProjectAssetWhereInput | ProjectAssetWhereInput[] | $Types.Skip
    name?: StringNullableFilter<"ProjectAsset"> | string | null | $Types.Skip
    description?: StringNullableFilter<"ProjectAsset"> | string | null | $Types.Skip
    type?: EnumAssetTypeFilter<"ProjectAsset"> | $Enums.AssetType | $Types.Skip
    sortOrder?: IntFilter<"ProjectAsset"> | number | $Types.Skip
    parentId?: StringNullableFilter<"ProjectAsset"> | string | null | $Types.Skip
    projectId?: StringFilter<"ProjectAsset"> | string | $Types.Skip
    phaseId?: StringNullableFilter<"ProjectAsset"> | string | null | $Types.Skip
    postId?: StringNullableFilter<"ProjectAsset"> | string | null | $Types.Skip
    url?: StringNullableFilter<"ProjectAsset"> | string | null | $Types.Skip
    createdAt?: DateTimeFilter<"ProjectAsset"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"ProjectAsset"> | Date | string | $Types.Skip
    parent?: XOR<ProjectAssetNullableScalarRelationFilter, ProjectAssetWhereInput> | null | $Types.Skip
    children?: ProjectAssetListRelationFilter | $Types.Skip
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput> | $Types.Skip
    phase?: XOR<PhaseNullableScalarRelationFilter, PhaseWhereInput> | null | $Types.Skip
    post?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null | $Types.Skip
  }, "id">

  export type ProjectAssetOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrderInput | SortOrder | $Types.Skip
    description?: SortOrderInput | SortOrder | $Types.Skip
    type?: SortOrder | $Types.Skip
    sortOrder?: SortOrder | $Types.Skip
    parentId?: SortOrderInput | SortOrder | $Types.Skip
    projectId?: SortOrder | $Types.Skip
    phaseId?: SortOrderInput | SortOrder | $Types.Skip
    postId?: SortOrderInput | SortOrder | $Types.Skip
    url?: SortOrderInput | SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    _count?: ProjectAssetCountOrderByAggregateInput | $Types.Skip
    _avg?: ProjectAssetAvgOrderByAggregateInput | $Types.Skip
    _max?: ProjectAssetMaxOrderByAggregateInput | $Types.Skip
    _min?: ProjectAssetMinOrderByAggregateInput | $Types.Skip
    _sum?: ProjectAssetSumOrderByAggregateInput | $Types.Skip
  }

  export type ProjectAssetScalarWhereWithAggregatesInput = {
    AND?: ProjectAssetScalarWhereWithAggregatesInput | ProjectAssetScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: ProjectAssetScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: ProjectAssetScalarWhereWithAggregatesInput | ProjectAssetScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: StringWithAggregatesFilter<"ProjectAsset"> | string | $Types.Skip
    name?: StringNullableWithAggregatesFilter<"ProjectAsset"> | string | null | $Types.Skip
    description?: StringNullableWithAggregatesFilter<"ProjectAsset"> | string | null | $Types.Skip
    type?: EnumAssetTypeWithAggregatesFilter<"ProjectAsset"> | $Enums.AssetType | $Types.Skip
    sortOrder?: IntWithAggregatesFilter<"ProjectAsset"> | number | $Types.Skip
    parentId?: StringNullableWithAggregatesFilter<"ProjectAsset"> | string | null | $Types.Skip
    projectId?: StringWithAggregatesFilter<"ProjectAsset"> | string | $Types.Skip
    phaseId?: StringNullableWithAggregatesFilter<"ProjectAsset"> | string | null | $Types.Skip
    postId?: StringNullableWithAggregatesFilter<"ProjectAsset"> | string | null | $Types.Skip
    url?: StringNullableWithAggregatesFilter<"ProjectAsset"> | string | null | $Types.Skip
    createdAt?: DateTimeWithAggregatesFilter<"ProjectAsset"> | Date | string | $Types.Skip
    updatedAt?: DateTimeWithAggregatesFilter<"ProjectAsset"> | Date | string | $Types.Skip
  }

  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[] | $Types.Skip
    OR?: TeamWhereInput[] | $Types.Skip
    NOT?: TeamWhereInput | TeamWhereInput[] | $Types.Skip
    id?: StringFilter<"Team"> | string | $Types.Skip
    name?: StringFilter<"Team"> | string | $Types.Skip
    description?: StringNullableFilter<"Team"> | string | null | $Types.Skip
    avatar?: StringNullableFilter<"Team"> | string | null | $Types.Skip
    color?: StringNullableFilter<"Team"> | string | null | $Types.Skip
    createdAt?: DateTimeFilter<"Team"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Team"> | Date | string | $Types.Skip
    members?: TeamMemberListRelationFilter | $Types.Skip
    posts?: PostListRelationFilter | $Types.Skip
    files?: FileRecordListRelationFilter | $Types.Skip
    projects?: ProjectListRelationFilter | $Types.Skip
  }

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    description?: SortOrderInput | SortOrder | $Types.Skip
    avatar?: SortOrderInput | SortOrder | $Types.Skip
    color?: SortOrderInput | SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    members?: TeamMemberOrderByRelationAggregateInput | $Types.Skip
    posts?: PostOrderByRelationAggregateInput | $Types.Skip
    files?: FileRecordOrderByRelationAggregateInput | $Types.Skip
    projects?: ProjectOrderByRelationAggregateInput | $Types.Skip
  }

  export type TeamWhereUniqueInput = Prisma.AtLeast<{
    id?: string | $Types.Skip
    AND?: TeamWhereInput | TeamWhereInput[] | $Types.Skip
    OR?: TeamWhereInput[] | $Types.Skip
    NOT?: TeamWhereInput | TeamWhereInput[] | $Types.Skip
    name?: StringFilter<"Team"> | string | $Types.Skip
    description?: StringNullableFilter<"Team"> | string | null | $Types.Skip
    avatar?: StringNullableFilter<"Team"> | string | null | $Types.Skip
    color?: StringNullableFilter<"Team"> | string | null | $Types.Skip
    createdAt?: DateTimeFilter<"Team"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Team"> | Date | string | $Types.Skip
    members?: TeamMemberListRelationFilter | $Types.Skip
    posts?: PostListRelationFilter | $Types.Skip
    files?: FileRecordListRelationFilter | $Types.Skip
    projects?: ProjectListRelationFilter | $Types.Skip
  }, "id">

  export type TeamOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    description?: SortOrderInput | SortOrder | $Types.Skip
    avatar?: SortOrderInput | SortOrder | $Types.Skip
    color?: SortOrderInput | SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    _count?: TeamCountOrderByAggregateInput | $Types.Skip
    _max?: TeamMaxOrderByAggregateInput | $Types.Skip
    _min?: TeamMinOrderByAggregateInput | $Types.Skip
  }

  export type TeamScalarWhereWithAggregatesInput = {
    AND?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: TeamScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: StringWithAggregatesFilter<"Team"> | string | $Types.Skip
    name?: StringWithAggregatesFilter<"Team"> | string | $Types.Skip
    description?: StringNullableWithAggregatesFilter<"Team"> | string | null | $Types.Skip
    avatar?: StringNullableWithAggregatesFilter<"Team"> | string | null | $Types.Skip
    color?: StringNullableWithAggregatesFilter<"Team"> | string | null | $Types.Skip
    createdAt?: DateTimeWithAggregatesFilter<"Team"> | Date | string | $Types.Skip
    updatedAt?: DateTimeWithAggregatesFilter<"Team"> | Date | string | $Types.Skip
  }

  export type TeamMemberWhereInput = {
    AND?: TeamMemberWhereInput | TeamMemberWhereInput[] | $Types.Skip
    OR?: TeamMemberWhereInput[] | $Types.Skip
    NOT?: TeamMemberWhereInput | TeamMemberWhereInput[] | $Types.Skip
    id?: StringFilter<"TeamMember"> | string | $Types.Skip
    role?: EnumTeamRoleFilter<"TeamMember"> | $Enums.TeamRole | $Types.Skip
    teamId?: StringFilter<"TeamMember"> | string | $Types.Skip
    userId?: StringFilter<"TeamMember"> | string | $Types.Skip
    joinedAt?: DateTimeFilter<"TeamMember"> | Date | string | $Types.Skip
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput> | $Types.Skip
    user?: XOR<UserScalarRelationFilter, UserWhereInput> | $Types.Skip
  }

  export type TeamMemberOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    role?: SortOrder | $Types.Skip
    teamId?: SortOrder | $Types.Skip
    userId?: SortOrder | $Types.Skip
    joinedAt?: SortOrder | $Types.Skip
    team?: TeamOrderByWithRelationInput | $Types.Skip
    user?: UserOrderByWithRelationInput | $Types.Skip
  }

  export type TeamMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string | $Types.Skip
    teamId_userId?: TeamMemberTeamIdUserIdCompoundUniqueInput | $Types.Skip
    AND?: TeamMemberWhereInput | TeamMemberWhereInput[] | $Types.Skip
    OR?: TeamMemberWhereInput[] | $Types.Skip
    NOT?: TeamMemberWhereInput | TeamMemberWhereInput[] | $Types.Skip
    role?: EnumTeamRoleFilter<"TeamMember"> | $Enums.TeamRole | $Types.Skip
    teamId?: StringFilter<"TeamMember"> | string | $Types.Skip
    userId?: StringFilter<"TeamMember"> | string | $Types.Skip
    joinedAt?: DateTimeFilter<"TeamMember"> | Date | string | $Types.Skip
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput> | $Types.Skip
    user?: XOR<UserScalarRelationFilter, UserWhereInput> | $Types.Skip
  }, "id" | "teamId_userId">

  export type TeamMemberOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    role?: SortOrder | $Types.Skip
    teamId?: SortOrder | $Types.Skip
    userId?: SortOrder | $Types.Skip
    joinedAt?: SortOrder | $Types.Skip
    _count?: TeamMemberCountOrderByAggregateInput | $Types.Skip
    _max?: TeamMemberMaxOrderByAggregateInput | $Types.Skip
    _min?: TeamMemberMinOrderByAggregateInput | $Types.Skip
  }

  export type TeamMemberScalarWhereWithAggregatesInput = {
    AND?: TeamMemberScalarWhereWithAggregatesInput | TeamMemberScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: TeamMemberScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: TeamMemberScalarWhereWithAggregatesInput | TeamMemberScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: StringWithAggregatesFilter<"TeamMember"> | string | $Types.Skip
    role?: EnumTeamRoleWithAggregatesFilter<"TeamMember"> | $Enums.TeamRole | $Types.Skip
    teamId?: StringWithAggregatesFilter<"TeamMember"> | string | $Types.Skip
    userId?: StringWithAggregatesFilter<"TeamMember"> | string | $Types.Skip
    joinedAt?: DateTimeWithAggregatesFilter<"TeamMember"> | Date | string | $Types.Skip
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[] | $Types.Skip
    OR?: UserWhereInput[] | $Types.Skip
    NOT?: UserWhereInput | UserWhereInput[] | $Types.Skip
    id?: StringFilter<"User"> | string | $Types.Skip
    userName?: StringFilter<"User"> | string | $Types.Skip
    email?: StringFilter<"User"> | string | $Types.Skip
    role?: EnumRoleFilter<"User"> | $Enums.Role | $Types.Skip
    image?: StringNullableFilter<"User"> | string | null | $Types.Skip
    userCollection?: StringNullableListFilter<"User"> | $Types.Skip
    createdAt?: DateTimeFilter<"User"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"User"> | Date | string | $Types.Skip
    teamMembers?: TeamMemberListRelationFilter | $Types.Skip
    accounts?: AccountListRelationFilter | $Types.Skip
    fileRecords?: FileRecordListRelationFilter | $Types.Skip
    posts?: PostListRelationFilter | $Types.Skip
    comments?: CommentListRelationFilter | $Types.Skip
    projects?: ProjectListRelationFilter | $Types.Skip
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    userName?: SortOrder | $Types.Skip
    email?: SortOrder | $Types.Skip
    role?: SortOrder | $Types.Skip
    image?: SortOrderInput | SortOrder | $Types.Skip
    userCollection?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    teamMembers?: TeamMemberOrderByRelationAggregateInput | $Types.Skip
    accounts?: AccountOrderByRelationAggregateInput | $Types.Skip
    fileRecords?: FileRecordOrderByRelationAggregateInput | $Types.Skip
    posts?: PostOrderByRelationAggregateInput | $Types.Skip
    comments?: CommentOrderByRelationAggregateInput | $Types.Skip
    projects?: ProjectOrderByRelationAggregateInput | $Types.Skip
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string | $Types.Skip
    userName?: string | $Types.Skip
    email?: string | $Types.Skip
    AND?: UserWhereInput | UserWhereInput[] | $Types.Skip
    OR?: UserWhereInput[] | $Types.Skip
    NOT?: UserWhereInput | UserWhereInput[] | $Types.Skip
    role?: EnumRoleFilter<"User"> | $Enums.Role | $Types.Skip
    image?: StringNullableFilter<"User"> | string | null | $Types.Skip
    userCollection?: StringNullableListFilter<"User"> | $Types.Skip
    createdAt?: DateTimeFilter<"User"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"User"> | Date | string | $Types.Skip
    teamMembers?: TeamMemberListRelationFilter | $Types.Skip
    accounts?: AccountListRelationFilter | $Types.Skip
    fileRecords?: FileRecordListRelationFilter | $Types.Skip
    posts?: PostListRelationFilter | $Types.Skip
    comments?: CommentListRelationFilter | $Types.Skip
    projects?: ProjectListRelationFilter | $Types.Skip
  }, "id" | "userName" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    userName?: SortOrder | $Types.Skip
    email?: SortOrder | $Types.Skip
    role?: SortOrder | $Types.Skip
    image?: SortOrderInput | SortOrder | $Types.Skip
    userCollection?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    _count?: UserCountOrderByAggregateInput | $Types.Skip
    _max?: UserMaxOrderByAggregateInput | $Types.Skip
    _min?: UserMinOrderByAggregateInput | $Types.Skip
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: UserScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: StringWithAggregatesFilter<"User"> | string | $Types.Skip
    userName?: StringWithAggregatesFilter<"User"> | string | $Types.Skip
    email?: StringWithAggregatesFilter<"User"> | string | $Types.Skip
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role | $Types.Skip
    image?: StringNullableWithAggregatesFilter<"User"> | string | null | $Types.Skip
    userCollection?: StringNullableListFilter<"User"> | $Types.Skip
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string | $Types.Skip
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string | $Types.Skip
  }

  export type AccountCreateInput = {
    id?: string | $Types.Skip
    password?: string | null | $Types.Skip
    provider: string
    providerAccountId: string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string | $Types.Skip
    userId: string
    password?: string | null | $Types.Skip
    provider: string
    providerAccountId: string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    provider?: StringFieldUpdateOperationsInput | string | $Types.Skip
    providerAccountId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput | $Types.Skip
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    userId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    provider?: StringFieldUpdateOperationsInput | string | $Types.Skip
    providerAccountId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type AccountCreateManyInput = {
    id?: string | $Types.Skip
    userId: string
    password?: string | null | $Types.Skip
    provider: string
    providerAccountId: string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    provider?: StringFieldUpdateOperationsInput | string | $Types.Skip
    providerAccountId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    userId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    provider?: StringFieldUpdateOperationsInput | string | $Types.Skip
    providerAccountId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type CommentCreateInput = {
    id?: string | $Types.Skip
    content: string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    post: PostCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput | $Types.Skip
    replies?: CommentCreateNestedManyWithoutParentInput | $Types.Skip
  }

  export type CommentUncheckedCreateInput = {
    id?: string | $Types.Skip
    content: string
    postId: string
    userId: string
    parentId?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput | $Types.Skip
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    content?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput | $Types.Skip
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput | $Types.Skip
    parent?: CommentUpdateOneWithoutRepliesNestedInput | $Types.Skip
    replies?: CommentUpdateManyWithoutParentNestedInput | $Types.Skip
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    content?: StringFieldUpdateOperationsInput | string | $Types.Skip
    postId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    userId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    parentId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput | $Types.Skip
  }

  export type CommentCreateManyInput = {
    id?: string | $Types.Skip
    content: string
    postId: string
    userId: string
    parentId?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    content?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    content?: StringFieldUpdateOperationsInput | string | $Types.Skip
    postId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    userId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    parentId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type FileRecordCreateInput = {
    id?: string | $Types.Skip
    shortId?: string | null | $Types.Skip
    name: string
    fileId: string
    viewerFileId?: string | null | $Types.Skip
    category?: $Enums.FileCategory | $Types.Skip
    extension?: string | null | $Types.Skip
    size?: string | $Types.Skip
    status?: $Enums.ProcessStatus | $Types.Skip
    errorMessage?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    team?: TeamCreateNestedOneWithoutFilesInput | $Types.Skip
    uploader: UserCreateNestedOneWithoutFileRecordsInput
    post?: PostCreateNestedOneWithoutFilesInput | $Types.Skip
  }

  export type FileRecordUncheckedCreateInput = {
    id?: string | $Types.Skip
    shortId?: string | null | $Types.Skip
    name: string
    fileId: string
    viewerFileId?: string | null | $Types.Skip
    category?: $Enums.FileCategory | $Types.Skip
    extension?: string | null | $Types.Skip
    size?: string | $Types.Skip
    status?: $Enums.ProcessStatus | $Types.Skip
    errorMessage?: string | null | $Types.Skip
    teamId?: string | null | $Types.Skip
    uploaderId: string
    postId?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type FileRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    shortId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    fileId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    viewerFileId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    category?: EnumFileCategoryFieldUpdateOperationsInput | $Enums.FileCategory | $Types.Skip
    extension?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    size?: StringFieldUpdateOperationsInput | string | $Types.Skip
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus | $Types.Skip
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    team?: TeamUpdateOneWithoutFilesNestedInput | $Types.Skip
    uploader?: UserUpdateOneRequiredWithoutFileRecordsNestedInput | $Types.Skip
    post?: PostUpdateOneWithoutFilesNestedInput | $Types.Skip
  }

  export type FileRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    shortId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    fileId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    viewerFileId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    category?: EnumFileCategoryFieldUpdateOperationsInput | $Enums.FileCategory | $Types.Skip
    extension?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    size?: StringFieldUpdateOperationsInput | string | $Types.Skip
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus | $Types.Skip
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    teamId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    uploaderId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    postId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type FileRecordCreateManyInput = {
    id?: string | $Types.Skip
    shortId?: string | null | $Types.Skip
    name: string
    fileId: string
    viewerFileId?: string | null | $Types.Skip
    category?: $Enums.FileCategory | $Types.Skip
    extension?: string | null | $Types.Skip
    size?: string | $Types.Skip
    status?: $Enums.ProcessStatus | $Types.Skip
    errorMessage?: string | null | $Types.Skip
    teamId?: string | null | $Types.Skip
    uploaderId: string
    postId?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type FileRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    shortId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    fileId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    viewerFileId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    category?: EnumFileCategoryFieldUpdateOperationsInput | $Enums.FileCategory | $Types.Skip
    extension?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    size?: StringFieldUpdateOperationsInput | string | $Types.Skip
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus | $Types.Skip
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type FileRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    shortId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    fileId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    viewerFileId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    category?: EnumFileCategoryFieldUpdateOperationsInput | $Enums.FileCategory | $Types.Skip
    extension?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    size?: StringFieldUpdateOperationsInput | string | $Types.Skip
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus | $Types.Skip
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    teamId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    uploaderId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    postId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type PhaseCreateInput = {
    id?: string | $Types.Skip
    name: string
    sortOrder?: number | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    project: ProjectCreateNestedOneWithoutPhasesInput
    rootAssets?: ProjectAssetCreateNestedManyWithoutPhaseInput | $Types.Skip
  }

  export type PhaseUncheckedCreateInput = {
    id?: string | $Types.Skip
    name: string
    sortOrder?: number | $Types.Skip
    projectId: string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    rootAssets?: ProjectAssetUncheckedCreateNestedManyWithoutPhaseInput | $Types.Skip
  }

  export type PhaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    sortOrder?: IntFieldUpdateOperationsInput | number | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    project?: ProjectUpdateOneRequiredWithoutPhasesNestedInput | $Types.Skip
    rootAssets?: ProjectAssetUpdateManyWithoutPhaseNestedInput | $Types.Skip
  }

  export type PhaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    sortOrder?: IntFieldUpdateOperationsInput | number | $Types.Skip
    projectId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    rootAssets?: ProjectAssetUncheckedUpdateManyWithoutPhaseNestedInput | $Types.Skip
  }

  export type PhaseCreateManyInput = {
    id?: string | $Types.Skip
    name: string
    sortOrder?: number | $Types.Skip
    projectId: string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type PhaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    sortOrder?: IntFieldUpdateOperationsInput | number | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type PhaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    sortOrder?: IntFieldUpdateOperationsInput | number | $Types.Skip
    projectId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type PostCreateInput = {
    id?: string | $Types.Skip
    shortId: string
    title: string
    category: string
    description?: string | null | $Types.Skip
    type: string
    keywords?: PostCreatekeywordsInput | string[] | $Types.Skip
    coverImage?: string | null | $Types.Skip
    images?: PostCreateimagesInput | string[] | $Types.Skip
    relatedPosts?: PostCreaterelatedPostsInput | string[] | $Types.Skip
    permission: string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    files?: FileRecordCreateNestedManyWithoutPostInput | $Types.Skip
    uploader: UserCreateNestedOneWithoutPostsInput
    team?: TeamCreateNestedOneWithoutPostsInput | $Types.Skip
    comments?: CommentCreateNestedManyWithoutPostInput | $Types.Skip
    projectAssets?: ProjectAssetCreateNestedManyWithoutPostInput | $Types.Skip
  }

  export type PostUncheckedCreateInput = {
    id?: string | $Types.Skip
    shortId: string
    title: string
    category: string
    description?: string | null | $Types.Skip
    type: string
    keywords?: PostCreatekeywordsInput | string[] | $Types.Skip
    coverImage?: string | null | $Types.Skip
    images?: PostCreateimagesInput | string[] | $Types.Skip
    uploaderId: string
    relatedPosts?: PostCreaterelatedPostsInput | string[] | $Types.Skip
    permission: string
    teamId?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    files?: FileRecordUncheckedCreateNestedManyWithoutPostInput | $Types.Skip
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput | $Types.Skip
    projectAssets?: ProjectAssetUncheckedCreateNestedManyWithoutPostInput | $Types.Skip
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    shortId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    category?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    type?: StringFieldUpdateOperationsInput | string | $Types.Skip
    keywords?: PostUpdatekeywordsInput | string[] | $Types.Skip
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    images?: PostUpdateimagesInput | string[] | $Types.Skip
    relatedPosts?: PostUpdaterelatedPostsInput | string[] | $Types.Skip
    permission?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    files?: FileRecordUpdateManyWithoutPostNestedInput | $Types.Skip
    uploader?: UserUpdateOneRequiredWithoutPostsNestedInput | $Types.Skip
    team?: TeamUpdateOneWithoutPostsNestedInput | $Types.Skip
    comments?: CommentUpdateManyWithoutPostNestedInput | $Types.Skip
    projectAssets?: ProjectAssetUpdateManyWithoutPostNestedInput | $Types.Skip
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    shortId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    category?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    type?: StringFieldUpdateOperationsInput | string | $Types.Skip
    keywords?: PostUpdatekeywordsInput | string[] | $Types.Skip
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    images?: PostUpdateimagesInput | string[] | $Types.Skip
    uploaderId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    relatedPosts?: PostUpdaterelatedPostsInput | string[] | $Types.Skip
    permission?: StringFieldUpdateOperationsInput | string | $Types.Skip
    teamId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    files?: FileRecordUncheckedUpdateManyWithoutPostNestedInput | $Types.Skip
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput | $Types.Skip
    projectAssets?: ProjectAssetUncheckedUpdateManyWithoutPostNestedInput | $Types.Skip
  }

  export type PostCreateManyInput = {
    id?: string | $Types.Skip
    shortId: string
    title: string
    category: string
    description?: string | null | $Types.Skip
    type: string
    keywords?: PostCreatekeywordsInput | string[] | $Types.Skip
    coverImage?: string | null | $Types.Skip
    images?: PostCreateimagesInput | string[] | $Types.Skip
    uploaderId: string
    relatedPosts?: PostCreaterelatedPostsInput | string[] | $Types.Skip
    permission: string
    teamId?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    shortId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    category?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    type?: StringFieldUpdateOperationsInput | string | $Types.Skip
    keywords?: PostUpdatekeywordsInput | string[] | $Types.Skip
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    images?: PostUpdateimagesInput | string[] | $Types.Skip
    relatedPosts?: PostUpdaterelatedPostsInput | string[] | $Types.Skip
    permission?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    shortId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    category?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    type?: StringFieldUpdateOperationsInput | string | $Types.Skip
    keywords?: PostUpdatekeywordsInput | string[] | $Types.Skip
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    images?: PostUpdateimagesInput | string[] | $Types.Skip
    uploaderId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    relatedPosts?: PostUpdaterelatedPostsInput | string[] | $Types.Skip
    permission?: StringFieldUpdateOperationsInput | string | $Types.Skip
    teamId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type ProjectCreateInput = {
    id?: string | $Types.Skip
    name: string
    description?: string | null | $Types.Skip
    client?: string | null | $Types.Skip
    location?: string | null | $Types.Skip
    coverImage?: string | null | $Types.Skip
    status?: $Enums.ProjectStatus | $Types.Skip
    visibility?: $Enums.ProjectVisibility | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    team: TeamCreateNestedOneWithoutProjectsInput
    creator: UserCreateNestedOneWithoutProjectsInput
    phases?: PhaseCreateNestedManyWithoutProjectInput | $Types.Skip
    assets?: ProjectAssetCreateNestedManyWithoutProjectInput | $Types.Skip
  }

  export type ProjectUncheckedCreateInput = {
    id?: string | $Types.Skip
    name: string
    description?: string | null | $Types.Skip
    client?: string | null | $Types.Skip
    location?: string | null | $Types.Skip
    coverImage?: string | null | $Types.Skip
    status?: $Enums.ProjectStatus | $Types.Skip
    visibility?: $Enums.ProjectVisibility | $Types.Skip
    teamId: string
    creatorId: string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    phases?: PhaseUncheckedCreateNestedManyWithoutProjectInput | $Types.Skip
    assets?: ProjectAssetUncheckedCreateNestedManyWithoutProjectInput | $Types.Skip
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    client?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    location?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus | $Types.Skip
    visibility?: EnumProjectVisibilityFieldUpdateOperationsInput | $Enums.ProjectVisibility | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    team?: TeamUpdateOneRequiredWithoutProjectsNestedInput | $Types.Skip
    creator?: UserUpdateOneRequiredWithoutProjectsNestedInput | $Types.Skip
    phases?: PhaseUpdateManyWithoutProjectNestedInput | $Types.Skip
    assets?: ProjectAssetUpdateManyWithoutProjectNestedInput | $Types.Skip
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    client?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    location?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus | $Types.Skip
    visibility?: EnumProjectVisibilityFieldUpdateOperationsInput | $Enums.ProjectVisibility | $Types.Skip
    teamId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    creatorId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    phases?: PhaseUncheckedUpdateManyWithoutProjectNestedInput | $Types.Skip
    assets?: ProjectAssetUncheckedUpdateManyWithoutProjectNestedInput | $Types.Skip
  }

  export type ProjectCreateManyInput = {
    id?: string | $Types.Skip
    name: string
    description?: string | null | $Types.Skip
    client?: string | null | $Types.Skip
    location?: string | null | $Types.Skip
    coverImage?: string | null | $Types.Skip
    status?: $Enums.ProjectStatus | $Types.Skip
    visibility?: $Enums.ProjectVisibility | $Types.Skip
    teamId: string
    creatorId: string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    client?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    location?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus | $Types.Skip
    visibility?: EnumProjectVisibilityFieldUpdateOperationsInput | $Enums.ProjectVisibility | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    client?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    location?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus | $Types.Skip
    visibility?: EnumProjectVisibilityFieldUpdateOperationsInput | $Enums.ProjectVisibility | $Types.Skip
    teamId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    creatorId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type ProjectAssetCreateInput = {
    id?: string | $Types.Skip
    name?: string | null | $Types.Skip
    description?: string | null | $Types.Skip
    type?: $Enums.AssetType | $Types.Skip
    sortOrder?: number | $Types.Skip
    url?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    parent?: ProjectAssetCreateNestedOneWithoutChildrenInput | $Types.Skip
    children?: ProjectAssetCreateNestedManyWithoutParentInput | $Types.Skip
    project: ProjectCreateNestedOneWithoutAssetsInput
    phase?: PhaseCreateNestedOneWithoutRootAssetsInput | $Types.Skip
    post?: PostCreateNestedOneWithoutProjectAssetsInput | $Types.Skip
  }

  export type ProjectAssetUncheckedCreateInput = {
    id?: string | $Types.Skip
    name?: string | null | $Types.Skip
    description?: string | null | $Types.Skip
    type?: $Enums.AssetType | $Types.Skip
    sortOrder?: number | $Types.Skip
    parentId?: string | null | $Types.Skip
    projectId: string
    phaseId?: string | null | $Types.Skip
    postId?: string | null | $Types.Skip
    url?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    children?: ProjectAssetUncheckedCreateNestedManyWithoutParentInput | $Types.Skip
  }

  export type ProjectAssetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType | $Types.Skip
    sortOrder?: IntFieldUpdateOperationsInput | number | $Types.Skip
    url?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    parent?: ProjectAssetUpdateOneWithoutChildrenNestedInput | $Types.Skip
    children?: ProjectAssetUpdateManyWithoutParentNestedInput | $Types.Skip
    project?: ProjectUpdateOneRequiredWithoutAssetsNestedInput | $Types.Skip
    phase?: PhaseUpdateOneWithoutRootAssetsNestedInput | $Types.Skip
    post?: PostUpdateOneWithoutProjectAssetsNestedInput | $Types.Skip
  }

  export type ProjectAssetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType | $Types.Skip
    sortOrder?: IntFieldUpdateOperationsInput | number | $Types.Skip
    parentId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    projectId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    phaseId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    postId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    url?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    children?: ProjectAssetUncheckedUpdateManyWithoutParentNestedInput | $Types.Skip
  }

  export type ProjectAssetCreateManyInput = {
    id?: string | $Types.Skip
    name?: string | null | $Types.Skip
    description?: string | null | $Types.Skip
    type?: $Enums.AssetType | $Types.Skip
    sortOrder?: number | $Types.Skip
    parentId?: string | null | $Types.Skip
    projectId: string
    phaseId?: string | null | $Types.Skip
    postId?: string | null | $Types.Skip
    url?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type ProjectAssetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType | $Types.Skip
    sortOrder?: IntFieldUpdateOperationsInput | number | $Types.Skip
    url?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type ProjectAssetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType | $Types.Skip
    sortOrder?: IntFieldUpdateOperationsInput | number | $Types.Skip
    parentId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    projectId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    phaseId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    postId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    url?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type TeamCreateInput = {
    id?: string | $Types.Skip
    name: string
    description?: string | null | $Types.Skip
    avatar?: string | null | $Types.Skip
    color?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    members?: TeamMemberCreateNestedManyWithoutTeamInput | $Types.Skip
    posts?: PostCreateNestedManyWithoutTeamInput | $Types.Skip
    files?: FileRecordCreateNestedManyWithoutTeamInput | $Types.Skip
    projects?: ProjectCreateNestedManyWithoutTeamInput | $Types.Skip
  }

  export type TeamUncheckedCreateInput = {
    id?: string | $Types.Skip
    name: string
    description?: string | null | $Types.Skip
    avatar?: string | null | $Types.Skip
    color?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    members?: TeamMemberUncheckedCreateNestedManyWithoutTeamInput | $Types.Skip
    posts?: PostUncheckedCreateNestedManyWithoutTeamInput | $Types.Skip
    files?: FileRecordUncheckedCreateNestedManyWithoutTeamInput | $Types.Skip
    projects?: ProjectUncheckedCreateNestedManyWithoutTeamInput | $Types.Skip
  }

  export type TeamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatar?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    color?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    members?: TeamMemberUpdateManyWithoutTeamNestedInput | $Types.Skip
    posts?: PostUpdateManyWithoutTeamNestedInput | $Types.Skip
    files?: FileRecordUpdateManyWithoutTeamNestedInput | $Types.Skip
    projects?: ProjectUpdateManyWithoutTeamNestedInput | $Types.Skip
  }

  export type TeamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatar?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    color?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    members?: TeamMemberUncheckedUpdateManyWithoutTeamNestedInput | $Types.Skip
    posts?: PostUncheckedUpdateManyWithoutTeamNestedInput | $Types.Skip
    files?: FileRecordUncheckedUpdateManyWithoutTeamNestedInput | $Types.Skip
    projects?: ProjectUncheckedUpdateManyWithoutTeamNestedInput | $Types.Skip
  }

  export type TeamCreateManyInput = {
    id?: string | $Types.Skip
    name: string
    description?: string | null | $Types.Skip
    avatar?: string | null | $Types.Skip
    color?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type TeamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatar?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    color?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type TeamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatar?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    color?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type TeamMemberCreateInput = {
    id?: string | $Types.Skip
    role?: $Enums.TeamRole | $Types.Skip
    joinedAt?: Date | string | $Types.Skip
    team: TeamCreateNestedOneWithoutMembersInput
    user: UserCreateNestedOneWithoutTeamMembersInput
  }

  export type TeamMemberUncheckedCreateInput = {
    id?: string | $Types.Skip
    role?: $Enums.TeamRole | $Types.Skip
    teamId: string
    userId: string
    joinedAt?: Date | string | $Types.Skip
  }

  export type TeamMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    role?: EnumTeamRoleFieldUpdateOperationsInput | $Enums.TeamRole | $Types.Skip
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    team?: TeamUpdateOneRequiredWithoutMembersNestedInput | $Types.Skip
    user?: UserUpdateOneRequiredWithoutTeamMembersNestedInput | $Types.Skip
  }

  export type TeamMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    role?: EnumTeamRoleFieldUpdateOperationsInput | $Enums.TeamRole | $Types.Skip
    teamId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    userId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type TeamMemberCreateManyInput = {
    id?: string | $Types.Skip
    role?: $Enums.TeamRole | $Types.Skip
    teamId: string
    userId: string
    joinedAt?: Date | string | $Types.Skip
  }

  export type TeamMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    role?: EnumTeamRoleFieldUpdateOperationsInput | $Enums.TeamRole | $Types.Skip
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type TeamMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    role?: EnumTeamRoleFieldUpdateOperationsInput | $Enums.TeamRole | $Types.Skip
    teamId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    userId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type UserCreateInput = {
    id?: string | $Types.Skip
    userName: string
    email: string
    role?: $Enums.Role | $Types.Skip
    image?: string | null | $Types.Skip
    userCollection?: UserCreateuserCollectionInput | string[] | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    teamMembers?: TeamMemberCreateNestedManyWithoutUserInput | $Types.Skip
    accounts?: AccountCreateNestedManyWithoutUserInput | $Types.Skip
    fileRecords?: FileRecordCreateNestedManyWithoutUploaderInput | $Types.Skip
    posts?: PostCreateNestedManyWithoutUploaderInput | $Types.Skip
    comments?: CommentCreateNestedManyWithoutUserInput | $Types.Skip
    projects?: ProjectCreateNestedManyWithoutCreatorInput | $Types.Skip
  }

  export type UserUncheckedCreateInput = {
    id?: string | $Types.Skip
    userName: string
    email: string
    role?: $Enums.Role | $Types.Skip
    image?: string | null | $Types.Skip
    userCollection?: UserCreateuserCollectionInput | string[] | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    teamMembers?: TeamMemberUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    fileRecords?: FileRecordUncheckedCreateNestedManyWithoutUploaderInput | $Types.Skip
    posts?: PostUncheckedCreateNestedManyWithoutUploaderInput | $Types.Skip
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    projects?: ProjectUncheckedCreateNestedManyWithoutCreatorInput | $Types.Skip
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    userName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role | $Types.Skip
    image?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    userCollection?: UserUpdateuserCollectionInput | string[] | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    teamMembers?: TeamMemberUpdateManyWithoutUserNestedInput | $Types.Skip
    accounts?: AccountUpdateManyWithoutUserNestedInput | $Types.Skip
    fileRecords?: FileRecordUpdateManyWithoutUploaderNestedInput | $Types.Skip
    posts?: PostUpdateManyWithoutUploaderNestedInput | $Types.Skip
    comments?: CommentUpdateManyWithoutUserNestedInput | $Types.Skip
    projects?: ProjectUpdateManyWithoutCreatorNestedInput | $Types.Skip
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    userName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role | $Types.Skip
    image?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    userCollection?: UserUpdateuserCollectionInput | string[] | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    teamMembers?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    fileRecords?: FileRecordUncheckedUpdateManyWithoutUploaderNestedInput | $Types.Skip
    posts?: PostUncheckedUpdateManyWithoutUploaderNestedInput | $Types.Skip
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    projects?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput | $Types.Skip
  }

  export type UserCreateManyInput = {
    id?: string | $Types.Skip
    userName: string
    email: string
    role?: $Enums.Role | $Types.Skip
    image?: string | null | $Types.Skip
    userCollection?: UserCreateuserCollectionInput | string[] | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    userName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role | $Types.Skip
    image?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    userCollection?: UserUpdateuserCollectionInput | string[] | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    userName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role | $Types.Skip
    image?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    userCollection?: UserUpdateuserCollectionInput | string[] | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    mode?: QueryMode | $Types.Skip
    not?: NestedStringFilter<$PrismaModel> | string | $Types.Skip
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    mode?: QueryMode | $Types.Skip
    not?: NestedStringNullableFilter<$PrismaModel> | string | null | $Types.Skip
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string | $Types.Skip
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput | $Types.Skip
    isNot?: UserWhereInput | $Types.Skip
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder | $Types.Skip
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    userId?: SortOrder | $Types.Skip
    password?: SortOrder | $Types.Skip
    provider?: SortOrder | $Types.Skip
    providerAccountId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    userId?: SortOrder | $Types.Skip
    password?: SortOrder | $Types.Skip
    provider?: SortOrder | $Types.Skip
    providerAccountId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    userId?: SortOrder | $Types.Skip
    password?: SortOrder | $Types.Skip
    provider?: SortOrder | $Types.Skip
    providerAccountId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    mode?: QueryMode | $Types.Skip
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedStringFilter<$PrismaModel> | $Types.Skip
    _max?: NestedStringFilter<$PrismaModel> | $Types.Skip
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    mode?: QueryMode | $Types.Skip
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null | $Types.Skip
    _count?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _min?: NestedStringNullableFilter<$PrismaModel> | $Types.Skip
    _max?: NestedStringNullableFilter<$PrismaModel> | $Types.Skip
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedDateTimeFilter<$PrismaModel> | $Types.Skip
    _max?: NestedDateTimeFilter<$PrismaModel> | $Types.Skip
  }

  export type PostScalarRelationFilter = {
    is?: PostWhereInput | $Types.Skip
    isNot?: PostWhereInput | $Types.Skip
  }

  export type CommentNullableScalarRelationFilter = {
    is?: CommentWhereInput | null | $Types.Skip
    isNot?: CommentWhereInput | null | $Types.Skip
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput | $Types.Skip
    some?: CommentWhereInput | $Types.Skip
    none?: CommentWhereInput | $Types.Skip
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    content?: SortOrder | $Types.Skip
    postId?: SortOrder | $Types.Skip
    userId?: SortOrder | $Types.Skip
    parentId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    content?: SortOrder | $Types.Skip
    postId?: SortOrder | $Types.Skip
    userId?: SortOrder | $Types.Skip
    parentId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    content?: SortOrder | $Types.Skip
    postId?: SortOrder | $Types.Skip
    userId?: SortOrder | $Types.Skip
    parentId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type EnumFileCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.FileCategory | EnumFileCategoryFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.FileCategory[] | ListEnumFileCategoryFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.FileCategory[] | ListEnumFileCategoryFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumFileCategoryFilter<$PrismaModel> | $Enums.FileCategory | $Types.Skip
  }

  export type EnumProcessStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProcessStatus | EnumProcessStatusFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.ProcessStatus[] | ListEnumProcessStatusFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.ProcessStatus[] | ListEnumProcessStatusFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumProcessStatusFilter<$PrismaModel> | $Enums.ProcessStatus | $Types.Skip
  }

  export type TeamNullableScalarRelationFilter = {
    is?: TeamWhereInput | null | $Types.Skip
    isNot?: TeamWhereInput | null | $Types.Skip
  }

  export type PostNullableScalarRelationFilter = {
    is?: PostWhereInput | null | $Types.Skip
    isNot?: PostWhereInput | null | $Types.Skip
  }

  export type FileRecordCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    shortId?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    fileId?: SortOrder | $Types.Skip
    viewerFileId?: SortOrder | $Types.Skip
    category?: SortOrder | $Types.Skip
    extension?: SortOrder | $Types.Skip
    size?: SortOrder | $Types.Skip
    status?: SortOrder | $Types.Skip
    errorMessage?: SortOrder | $Types.Skip
    teamId?: SortOrder | $Types.Skip
    uploaderId?: SortOrder | $Types.Skip
    postId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type FileRecordMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    shortId?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    fileId?: SortOrder | $Types.Skip
    viewerFileId?: SortOrder | $Types.Skip
    category?: SortOrder | $Types.Skip
    extension?: SortOrder | $Types.Skip
    size?: SortOrder | $Types.Skip
    status?: SortOrder | $Types.Skip
    errorMessage?: SortOrder | $Types.Skip
    teamId?: SortOrder | $Types.Skip
    uploaderId?: SortOrder | $Types.Skip
    postId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type FileRecordMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    shortId?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    fileId?: SortOrder | $Types.Skip
    viewerFileId?: SortOrder | $Types.Skip
    category?: SortOrder | $Types.Skip
    extension?: SortOrder | $Types.Skip
    size?: SortOrder | $Types.Skip
    status?: SortOrder | $Types.Skip
    errorMessage?: SortOrder | $Types.Skip
    teamId?: SortOrder | $Types.Skip
    uploaderId?: SortOrder | $Types.Skip
    postId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type EnumFileCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FileCategory | EnumFileCategoryFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.FileCategory[] | ListEnumFileCategoryFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.FileCategory[] | ListEnumFileCategoryFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumFileCategoryWithAggregatesFilter<$PrismaModel> | $Enums.FileCategory | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedEnumFileCategoryFilter<$PrismaModel> | $Types.Skip
    _max?: NestedEnumFileCategoryFilter<$PrismaModel> | $Types.Skip
  }

  export type EnumProcessStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProcessStatus | EnumProcessStatusFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.ProcessStatus[] | ListEnumProcessStatusFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.ProcessStatus[] | ListEnumProcessStatusFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumProcessStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProcessStatus | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedEnumProcessStatusFilter<$PrismaModel> | $Types.Skip
    _max?: NestedEnumProcessStatusFilter<$PrismaModel> | $Types.Skip
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntFilter<$PrismaModel> | number | $Types.Skip
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput | $Types.Skip
    isNot?: ProjectWhereInput | $Types.Skip
  }

  export type ProjectAssetListRelationFilter = {
    every?: ProjectAssetWhereInput | $Types.Skip
    some?: ProjectAssetWhereInput | $Types.Skip
    none?: ProjectAssetWhereInput | $Types.Skip
  }

  export type ProjectAssetOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type PhaseCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    sortOrder?: SortOrder | $Types.Skip
    projectId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type PhaseAvgOrderByAggregateInput = {
    sortOrder?: SortOrder | $Types.Skip
  }

  export type PhaseMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    sortOrder?: SortOrder | $Types.Skip
    projectId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type PhaseMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    sortOrder?: SortOrder | $Types.Skip
    projectId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type PhaseSumOrderByAggregateInput = {
    sortOrder?: SortOrder | $Types.Skip
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _avg?: NestedFloatFilter<$PrismaModel> | $Types.Skip
    _sum?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _max?: NestedIntFilter<$PrismaModel> | $Types.Skip
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    has?: string | StringFieldRefInput<$PrismaModel> | null | $Types.Skip
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    isEmpty?: boolean | $Types.Skip
  }

  export type FileRecordListRelationFilter = {
    every?: FileRecordWhereInput | $Types.Skip
    some?: FileRecordWhereInput | $Types.Skip
    none?: FileRecordWhereInput | $Types.Skip
  }

  export type FileRecordOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    shortId?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    category?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
    type?: SortOrder | $Types.Skip
    keywords?: SortOrder | $Types.Skip
    coverImage?: SortOrder | $Types.Skip
    images?: SortOrder | $Types.Skip
    uploaderId?: SortOrder | $Types.Skip
    relatedPosts?: SortOrder | $Types.Skip
    permission?: SortOrder | $Types.Skip
    teamId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    shortId?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    category?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
    type?: SortOrder | $Types.Skip
    coverImage?: SortOrder | $Types.Skip
    uploaderId?: SortOrder | $Types.Skip
    permission?: SortOrder | $Types.Skip
    teamId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    shortId?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    category?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
    type?: SortOrder | $Types.Skip
    coverImage?: SortOrder | $Types.Skip
    uploaderId?: SortOrder | $Types.Skip
    permission?: SortOrder | $Types.Skip
    teamId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type EnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus | $Types.Skip
  }

  export type EnumProjectVisibilityFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectVisibility | EnumProjectVisibilityFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.ProjectVisibility[] | ListEnumProjectVisibilityFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.ProjectVisibility[] | ListEnumProjectVisibilityFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumProjectVisibilityFilter<$PrismaModel> | $Enums.ProjectVisibility | $Types.Skip
  }

  export type TeamScalarRelationFilter = {
    is?: TeamWhereInput | $Types.Skip
    isNot?: TeamWhereInput | $Types.Skip
  }

  export type PhaseListRelationFilter = {
    every?: PhaseWhereInput | $Types.Skip
    some?: PhaseWhereInput | $Types.Skip
    none?: PhaseWhereInput | $Types.Skip
  }

  export type PhaseOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
    client?: SortOrder | $Types.Skip
    location?: SortOrder | $Types.Skip
    coverImage?: SortOrder | $Types.Skip
    status?: SortOrder | $Types.Skip
    visibility?: SortOrder | $Types.Skip
    teamId?: SortOrder | $Types.Skip
    creatorId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
    client?: SortOrder | $Types.Skip
    location?: SortOrder | $Types.Skip
    coverImage?: SortOrder | $Types.Skip
    status?: SortOrder | $Types.Skip
    visibility?: SortOrder | $Types.Skip
    teamId?: SortOrder | $Types.Skip
    creatorId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
    client?: SortOrder | $Types.Skip
    location?: SortOrder | $Types.Skip
    coverImage?: SortOrder | $Types.Skip
    status?: SortOrder | $Types.Skip
    visibility?: SortOrder | $Types.Skip
    teamId?: SortOrder | $Types.Skip
    creatorId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type EnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedEnumProjectStatusFilter<$PrismaModel> | $Types.Skip
    _max?: NestedEnumProjectStatusFilter<$PrismaModel> | $Types.Skip
  }

  export type EnumProjectVisibilityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectVisibility | EnumProjectVisibilityFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.ProjectVisibility[] | ListEnumProjectVisibilityFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.ProjectVisibility[] | ListEnumProjectVisibilityFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumProjectVisibilityWithAggregatesFilter<$PrismaModel> | $Enums.ProjectVisibility | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedEnumProjectVisibilityFilter<$PrismaModel> | $Types.Skip
    _max?: NestedEnumProjectVisibilityFilter<$PrismaModel> | $Types.Skip
  }

  export type EnumAssetTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetType | EnumAssetTypeFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.AssetType[] | ListEnumAssetTypeFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.AssetType[] | ListEnumAssetTypeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumAssetTypeFilter<$PrismaModel> | $Enums.AssetType | $Types.Skip
  }

  export type ProjectAssetNullableScalarRelationFilter = {
    is?: ProjectAssetWhereInput | null | $Types.Skip
    isNot?: ProjectAssetWhereInput | null | $Types.Skip
  }

  export type PhaseNullableScalarRelationFilter = {
    is?: PhaseWhereInput | null | $Types.Skip
    isNot?: PhaseWhereInput | null | $Types.Skip
  }

  export type ProjectAssetCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
    type?: SortOrder | $Types.Skip
    sortOrder?: SortOrder | $Types.Skip
    parentId?: SortOrder | $Types.Skip
    projectId?: SortOrder | $Types.Skip
    phaseId?: SortOrder | $Types.Skip
    postId?: SortOrder | $Types.Skip
    url?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type ProjectAssetAvgOrderByAggregateInput = {
    sortOrder?: SortOrder | $Types.Skip
  }

  export type ProjectAssetMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
    type?: SortOrder | $Types.Skip
    sortOrder?: SortOrder | $Types.Skip
    parentId?: SortOrder | $Types.Skip
    projectId?: SortOrder | $Types.Skip
    phaseId?: SortOrder | $Types.Skip
    postId?: SortOrder | $Types.Skip
    url?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type ProjectAssetMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
    type?: SortOrder | $Types.Skip
    sortOrder?: SortOrder | $Types.Skip
    parentId?: SortOrder | $Types.Skip
    projectId?: SortOrder | $Types.Skip
    phaseId?: SortOrder | $Types.Skip
    postId?: SortOrder | $Types.Skip
    url?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type ProjectAssetSumOrderByAggregateInput = {
    sortOrder?: SortOrder | $Types.Skip
  }

  export type EnumAssetTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetType | EnumAssetTypeFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.AssetType[] | ListEnumAssetTypeFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.AssetType[] | ListEnumAssetTypeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumAssetTypeWithAggregatesFilter<$PrismaModel> | $Enums.AssetType | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedEnumAssetTypeFilter<$PrismaModel> | $Types.Skip
    _max?: NestedEnumAssetTypeFilter<$PrismaModel> | $Types.Skip
  }

  export type TeamMemberListRelationFilter = {
    every?: TeamMemberWhereInput | $Types.Skip
    some?: TeamMemberWhereInput | $Types.Skip
    none?: TeamMemberWhereInput | $Types.Skip
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput | $Types.Skip
    some?: PostWhereInput | $Types.Skip
    none?: PostWhereInput | $Types.Skip
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput | $Types.Skip
    some?: ProjectWhereInput | $Types.Skip
    none?: ProjectWhereInput | $Types.Skip
  }

  export type TeamMemberOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type TeamCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
    avatar?: SortOrder | $Types.Skip
    color?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type TeamMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
    avatar?: SortOrder | $Types.Skip
    color?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type TeamMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
    avatar?: SortOrder | $Types.Skip
    color?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type EnumTeamRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.TeamRole | EnumTeamRoleFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.TeamRole[] | ListEnumTeamRoleFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.TeamRole[] | ListEnumTeamRoleFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumTeamRoleFilter<$PrismaModel> | $Enums.TeamRole | $Types.Skip
  }

  export type TeamMemberTeamIdUserIdCompoundUniqueInput = {
    teamId: string
    userId: string
  }

  export type TeamMemberCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    role?: SortOrder | $Types.Skip
    teamId?: SortOrder | $Types.Skip
    userId?: SortOrder | $Types.Skip
    joinedAt?: SortOrder | $Types.Skip
  }

  export type TeamMemberMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    role?: SortOrder | $Types.Skip
    teamId?: SortOrder | $Types.Skip
    userId?: SortOrder | $Types.Skip
    joinedAt?: SortOrder | $Types.Skip
  }

  export type TeamMemberMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    role?: SortOrder | $Types.Skip
    teamId?: SortOrder | $Types.Skip
    userId?: SortOrder | $Types.Skip
    joinedAt?: SortOrder | $Types.Skip
  }

  export type EnumTeamRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TeamRole | EnumTeamRoleFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.TeamRole[] | ListEnumTeamRoleFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.TeamRole[] | ListEnumTeamRoleFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumTeamRoleWithAggregatesFilter<$PrismaModel> | $Enums.TeamRole | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedEnumTeamRoleFilter<$PrismaModel> | $Types.Skip
    _max?: NestedEnumTeamRoleFilter<$PrismaModel> | $Types.Skip
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role | $Types.Skip
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput | $Types.Skip
    some?: AccountWhereInput | $Types.Skip
    none?: AccountWhereInput | $Types.Skip
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    userName?: SortOrder | $Types.Skip
    email?: SortOrder | $Types.Skip
    role?: SortOrder | $Types.Skip
    image?: SortOrder | $Types.Skip
    userCollection?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    userName?: SortOrder | $Types.Skip
    email?: SortOrder | $Types.Skip
    role?: SortOrder | $Types.Skip
    image?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    userName?: SortOrder | $Types.Skip
    email?: SortOrder | $Types.Skip
    role?: SortOrder | $Types.Skip
    image?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedEnumRoleFilter<$PrismaModel> | $Types.Skip
    _max?: NestedEnumRoleFilter<$PrismaModel> | $Types.Skip
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput> | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput | $Types.Skip
    connect?: UserWhereUniqueInput | $Types.Skip
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string | $Types.Skip
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null | $Types.Skip
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string | $Types.Skip
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput> | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput | $Types.Skip
    upsert?: UserUpsertWithoutAccountsInput | $Types.Skip
    connect?: UserWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput> | $Types.Skip
  }

  export type PostCreateNestedOneWithoutCommentsInput = {
    create?: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput> | $Types.Skip
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput | $Types.Skip
    connect?: PostWhereUniqueInput | $Types.Skip
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput> | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput | $Types.Skip
    connect?: UserWhereUniqueInput | $Types.Skip
  }

  export type CommentCreateNestedOneWithoutRepliesInput = {
    create?: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput> | $Types.Skip
    connectOrCreate?: CommentCreateOrConnectWithoutRepliesInput | $Types.Skip
    connect?: CommentWhereUniqueInput | $Types.Skip
  }

  export type CommentCreateNestedManyWithoutParentInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[] | $Types.Skip
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[] | $Types.Skip
    createMany?: CommentCreateManyParentInputEnvelope | $Types.Skip
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[] | $Types.Skip
  }

  export type CommentUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[] | $Types.Skip
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[] | $Types.Skip
    createMany?: CommentCreateManyParentInputEnvelope | $Types.Skip
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[] | $Types.Skip
  }

  export type PostUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput> | $Types.Skip
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput | $Types.Skip
    upsert?: PostUpsertWithoutCommentsInput | $Types.Skip
    connect?: PostWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutCommentsInput, PostUpdateWithoutCommentsInput>, PostUncheckedUpdateWithoutCommentsInput> | $Types.Skip
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput> | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput | $Types.Skip
    upsert?: UserUpsertWithoutCommentsInput | $Types.Skip
    connect?: UserWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput> | $Types.Skip
  }

  export type CommentUpdateOneWithoutRepliesNestedInput = {
    create?: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput> | $Types.Skip
    connectOrCreate?: CommentCreateOrConnectWithoutRepliesInput | $Types.Skip
    upsert?: CommentUpsertWithoutRepliesInput | $Types.Skip
    disconnect?: CommentWhereInput | boolean | $Types.Skip
    delete?: CommentWhereInput | boolean | $Types.Skip
    connect?: CommentWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<CommentUpdateToOneWithWhereWithoutRepliesInput, CommentUpdateWithoutRepliesInput>, CommentUncheckedUpdateWithoutRepliesInput> | $Types.Skip
  }

  export type CommentUpdateManyWithoutParentNestedInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[] | $Types.Skip
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[] | $Types.Skip
    upsert?: CommentUpsertWithWhereUniqueWithoutParentInput | CommentUpsertWithWhereUniqueWithoutParentInput[] | $Types.Skip
    createMany?: CommentCreateManyParentInputEnvelope | $Types.Skip
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[] | $Types.Skip
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[] | $Types.Skip
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[] | $Types.Skip
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[] | $Types.Skip
    update?: CommentUpdateWithWhereUniqueWithoutParentInput | CommentUpdateWithWhereUniqueWithoutParentInput[] | $Types.Skip
    updateMany?: CommentUpdateManyWithWhereWithoutParentInput | CommentUpdateManyWithWhereWithoutParentInput[] | $Types.Skip
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[] | $Types.Skip
  }

  export type CommentUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[] | $Types.Skip
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[] | $Types.Skip
    upsert?: CommentUpsertWithWhereUniqueWithoutParentInput | CommentUpsertWithWhereUniqueWithoutParentInput[] | $Types.Skip
    createMany?: CommentCreateManyParentInputEnvelope | $Types.Skip
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[] | $Types.Skip
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[] | $Types.Skip
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[] | $Types.Skip
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[] | $Types.Skip
    update?: CommentUpdateWithWhereUniqueWithoutParentInput | CommentUpdateWithWhereUniqueWithoutParentInput[] | $Types.Skip
    updateMany?: CommentUpdateManyWithWhereWithoutParentInput | CommentUpdateManyWithWhereWithoutParentInput[] | $Types.Skip
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[] | $Types.Skip
  }

  export type TeamCreateNestedOneWithoutFilesInput = {
    create?: XOR<TeamCreateWithoutFilesInput, TeamUncheckedCreateWithoutFilesInput> | $Types.Skip
    connectOrCreate?: TeamCreateOrConnectWithoutFilesInput | $Types.Skip
    connect?: TeamWhereUniqueInput | $Types.Skip
  }

  export type UserCreateNestedOneWithoutFileRecordsInput = {
    create?: XOR<UserCreateWithoutFileRecordsInput, UserUncheckedCreateWithoutFileRecordsInput> | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutFileRecordsInput | $Types.Skip
    connect?: UserWhereUniqueInput | $Types.Skip
  }

  export type PostCreateNestedOneWithoutFilesInput = {
    create?: XOR<PostCreateWithoutFilesInput, PostUncheckedCreateWithoutFilesInput> | $Types.Skip
    connectOrCreate?: PostCreateOrConnectWithoutFilesInput | $Types.Skip
    connect?: PostWhereUniqueInput | $Types.Skip
  }

  export type EnumFileCategoryFieldUpdateOperationsInput = {
    set?: $Enums.FileCategory | $Types.Skip
  }

  export type EnumProcessStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProcessStatus | $Types.Skip
  }

  export type TeamUpdateOneWithoutFilesNestedInput = {
    create?: XOR<TeamCreateWithoutFilesInput, TeamUncheckedCreateWithoutFilesInput> | $Types.Skip
    connectOrCreate?: TeamCreateOrConnectWithoutFilesInput | $Types.Skip
    upsert?: TeamUpsertWithoutFilesInput | $Types.Skip
    disconnect?: TeamWhereInput | boolean | $Types.Skip
    delete?: TeamWhereInput | boolean | $Types.Skip
    connect?: TeamWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutFilesInput, TeamUpdateWithoutFilesInput>, TeamUncheckedUpdateWithoutFilesInput> | $Types.Skip
  }

  export type UserUpdateOneRequiredWithoutFileRecordsNestedInput = {
    create?: XOR<UserCreateWithoutFileRecordsInput, UserUncheckedCreateWithoutFileRecordsInput> | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutFileRecordsInput | $Types.Skip
    upsert?: UserUpsertWithoutFileRecordsInput | $Types.Skip
    connect?: UserWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFileRecordsInput, UserUpdateWithoutFileRecordsInput>, UserUncheckedUpdateWithoutFileRecordsInput> | $Types.Skip
  }

  export type PostUpdateOneWithoutFilesNestedInput = {
    create?: XOR<PostCreateWithoutFilesInput, PostUncheckedCreateWithoutFilesInput> | $Types.Skip
    connectOrCreate?: PostCreateOrConnectWithoutFilesInput | $Types.Skip
    upsert?: PostUpsertWithoutFilesInput | $Types.Skip
    disconnect?: PostWhereInput | boolean | $Types.Skip
    delete?: PostWhereInput | boolean | $Types.Skip
    connect?: PostWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutFilesInput, PostUpdateWithoutFilesInput>, PostUncheckedUpdateWithoutFilesInput> | $Types.Skip
  }

  export type ProjectCreateNestedOneWithoutPhasesInput = {
    create?: XOR<ProjectCreateWithoutPhasesInput, ProjectUncheckedCreateWithoutPhasesInput> | $Types.Skip
    connectOrCreate?: ProjectCreateOrConnectWithoutPhasesInput | $Types.Skip
    connect?: ProjectWhereUniqueInput | $Types.Skip
  }

  export type ProjectAssetCreateNestedManyWithoutPhaseInput = {
    create?: XOR<ProjectAssetCreateWithoutPhaseInput, ProjectAssetUncheckedCreateWithoutPhaseInput> | ProjectAssetCreateWithoutPhaseInput[] | ProjectAssetUncheckedCreateWithoutPhaseInput[] | $Types.Skip
    connectOrCreate?: ProjectAssetCreateOrConnectWithoutPhaseInput | ProjectAssetCreateOrConnectWithoutPhaseInput[] | $Types.Skip
    createMany?: ProjectAssetCreateManyPhaseInputEnvelope | $Types.Skip
    connect?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[] | $Types.Skip
  }

  export type ProjectAssetUncheckedCreateNestedManyWithoutPhaseInput = {
    create?: XOR<ProjectAssetCreateWithoutPhaseInput, ProjectAssetUncheckedCreateWithoutPhaseInput> | ProjectAssetCreateWithoutPhaseInput[] | ProjectAssetUncheckedCreateWithoutPhaseInput[] | $Types.Skip
    connectOrCreate?: ProjectAssetCreateOrConnectWithoutPhaseInput | ProjectAssetCreateOrConnectWithoutPhaseInput[] | $Types.Skip
    createMany?: ProjectAssetCreateManyPhaseInputEnvelope | $Types.Skip
    connect?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[] | $Types.Skip
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number | $Types.Skip
    increment?: number | $Types.Skip
    decrement?: number | $Types.Skip
    multiply?: number | $Types.Skip
    divide?: number | $Types.Skip
  }

  export type ProjectUpdateOneRequiredWithoutPhasesNestedInput = {
    create?: XOR<ProjectCreateWithoutPhasesInput, ProjectUncheckedCreateWithoutPhasesInput> | $Types.Skip
    connectOrCreate?: ProjectCreateOrConnectWithoutPhasesInput | $Types.Skip
    upsert?: ProjectUpsertWithoutPhasesInput | $Types.Skip
    connect?: ProjectWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutPhasesInput, ProjectUpdateWithoutPhasesInput>, ProjectUncheckedUpdateWithoutPhasesInput> | $Types.Skip
  }

  export type ProjectAssetUpdateManyWithoutPhaseNestedInput = {
    create?: XOR<ProjectAssetCreateWithoutPhaseInput, ProjectAssetUncheckedCreateWithoutPhaseInput> | ProjectAssetCreateWithoutPhaseInput[] | ProjectAssetUncheckedCreateWithoutPhaseInput[] | $Types.Skip
    connectOrCreate?: ProjectAssetCreateOrConnectWithoutPhaseInput | ProjectAssetCreateOrConnectWithoutPhaseInput[] | $Types.Skip
    upsert?: ProjectAssetUpsertWithWhereUniqueWithoutPhaseInput | ProjectAssetUpsertWithWhereUniqueWithoutPhaseInput[] | $Types.Skip
    createMany?: ProjectAssetCreateManyPhaseInputEnvelope | $Types.Skip
    set?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[] | $Types.Skip
    disconnect?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[] | $Types.Skip
    delete?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[] | $Types.Skip
    connect?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[] | $Types.Skip
    update?: ProjectAssetUpdateWithWhereUniqueWithoutPhaseInput | ProjectAssetUpdateWithWhereUniqueWithoutPhaseInput[] | $Types.Skip
    updateMany?: ProjectAssetUpdateManyWithWhereWithoutPhaseInput | ProjectAssetUpdateManyWithWhereWithoutPhaseInput[] | $Types.Skip
    deleteMany?: ProjectAssetScalarWhereInput | ProjectAssetScalarWhereInput[] | $Types.Skip
  }

  export type ProjectAssetUncheckedUpdateManyWithoutPhaseNestedInput = {
    create?: XOR<ProjectAssetCreateWithoutPhaseInput, ProjectAssetUncheckedCreateWithoutPhaseInput> | ProjectAssetCreateWithoutPhaseInput[] | ProjectAssetUncheckedCreateWithoutPhaseInput[] | $Types.Skip
    connectOrCreate?: ProjectAssetCreateOrConnectWithoutPhaseInput | ProjectAssetCreateOrConnectWithoutPhaseInput[] | $Types.Skip
    upsert?: ProjectAssetUpsertWithWhereUniqueWithoutPhaseInput | ProjectAssetUpsertWithWhereUniqueWithoutPhaseInput[] | $Types.Skip
    createMany?: ProjectAssetCreateManyPhaseInputEnvelope | $Types.Skip
    set?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[] | $Types.Skip
    disconnect?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[] | $Types.Skip
    delete?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[] | $Types.Skip
    connect?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[] | $Types.Skip
    update?: ProjectAssetUpdateWithWhereUniqueWithoutPhaseInput | ProjectAssetUpdateWithWhereUniqueWithoutPhaseInput[] | $Types.Skip
    updateMany?: ProjectAssetUpdateManyWithWhereWithoutPhaseInput | ProjectAssetUpdateManyWithWhereWithoutPhaseInput[] | $Types.Skip
    deleteMany?: ProjectAssetScalarWhereInput | ProjectAssetScalarWhereInput[] | $Types.Skip
  }

  export type PostCreatekeywordsInput = {
    set: string[]
  }

  export type PostCreateimagesInput = {
    set: string[]
  }

  export type PostCreaterelatedPostsInput = {
    set: string[]
  }

  export type FileRecordCreateNestedManyWithoutPostInput = {
    create?: XOR<FileRecordCreateWithoutPostInput, FileRecordUncheckedCreateWithoutPostInput> | FileRecordCreateWithoutPostInput[] | FileRecordUncheckedCreateWithoutPostInput[] | $Types.Skip
    connectOrCreate?: FileRecordCreateOrConnectWithoutPostInput | FileRecordCreateOrConnectWithoutPostInput[] | $Types.Skip
    createMany?: FileRecordCreateManyPostInputEnvelope | $Types.Skip
    connect?: FileRecordWhereUniqueInput | FileRecordWhereUniqueInput[] | $Types.Skip
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput> | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput | $Types.Skip
    connect?: UserWhereUniqueInput | $Types.Skip
  }

  export type TeamCreateNestedOneWithoutPostsInput = {
    create?: XOR<TeamCreateWithoutPostsInput, TeamUncheckedCreateWithoutPostsInput> | $Types.Skip
    connectOrCreate?: TeamCreateOrConnectWithoutPostsInput | $Types.Skip
    connect?: TeamWhereUniqueInput | $Types.Skip
  }

  export type CommentCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[] | $Types.Skip
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[] | $Types.Skip
    createMany?: CommentCreateManyPostInputEnvelope | $Types.Skip
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[] | $Types.Skip
  }

  export type ProjectAssetCreateNestedManyWithoutPostInput = {
    create?: XOR<ProjectAssetCreateWithoutPostInput, ProjectAssetUncheckedCreateWithoutPostInput> | ProjectAssetCreateWithoutPostInput[] | ProjectAssetUncheckedCreateWithoutPostInput[] | $Types.Skip
    connectOrCreate?: ProjectAssetCreateOrConnectWithoutPostInput | ProjectAssetCreateOrConnectWithoutPostInput[] | $Types.Skip
    createMany?: ProjectAssetCreateManyPostInputEnvelope | $Types.Skip
    connect?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[] | $Types.Skip
  }

  export type FileRecordUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<FileRecordCreateWithoutPostInput, FileRecordUncheckedCreateWithoutPostInput> | FileRecordCreateWithoutPostInput[] | FileRecordUncheckedCreateWithoutPostInput[] | $Types.Skip
    connectOrCreate?: FileRecordCreateOrConnectWithoutPostInput | FileRecordCreateOrConnectWithoutPostInput[] | $Types.Skip
    createMany?: FileRecordCreateManyPostInputEnvelope | $Types.Skip
    connect?: FileRecordWhereUniqueInput | FileRecordWhereUniqueInput[] | $Types.Skip
  }

  export type CommentUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[] | $Types.Skip
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[] | $Types.Skip
    createMany?: CommentCreateManyPostInputEnvelope | $Types.Skip
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[] | $Types.Skip
  }

  export type ProjectAssetUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<ProjectAssetCreateWithoutPostInput, ProjectAssetUncheckedCreateWithoutPostInput> | ProjectAssetCreateWithoutPostInput[] | ProjectAssetUncheckedCreateWithoutPostInput[] | $Types.Skip
    connectOrCreate?: ProjectAssetCreateOrConnectWithoutPostInput | ProjectAssetCreateOrConnectWithoutPostInput[] | $Types.Skip
    createMany?: ProjectAssetCreateManyPostInputEnvelope | $Types.Skip
    connect?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[] | $Types.Skip
  }

  export type PostUpdatekeywordsInput = {
    set?: string[] | $Types.Skip
    push?: string | string[] | $Types.Skip
  }

  export type PostUpdateimagesInput = {
    set?: string[] | $Types.Skip
    push?: string | string[] | $Types.Skip
  }

  export type PostUpdaterelatedPostsInput = {
    set?: string[] | $Types.Skip
    push?: string | string[] | $Types.Skip
  }

  export type FileRecordUpdateManyWithoutPostNestedInput = {
    create?: XOR<FileRecordCreateWithoutPostInput, FileRecordUncheckedCreateWithoutPostInput> | FileRecordCreateWithoutPostInput[] | FileRecordUncheckedCreateWithoutPostInput[] | $Types.Skip
    connectOrCreate?: FileRecordCreateOrConnectWithoutPostInput | FileRecordCreateOrConnectWithoutPostInput[] | $Types.Skip
    upsert?: FileRecordUpsertWithWhereUniqueWithoutPostInput | FileRecordUpsertWithWhereUniqueWithoutPostInput[] | $Types.Skip
    createMany?: FileRecordCreateManyPostInputEnvelope | $Types.Skip
    set?: FileRecordWhereUniqueInput | FileRecordWhereUniqueInput[] | $Types.Skip
    disconnect?: FileRecordWhereUniqueInput | FileRecordWhereUniqueInput[] | $Types.Skip
    delete?: FileRecordWhereUniqueInput | FileRecordWhereUniqueInput[] | $Types.Skip
    connect?: FileRecordWhereUniqueInput | FileRecordWhereUniqueInput[] | $Types.Skip
    update?: FileRecordUpdateWithWhereUniqueWithoutPostInput | FileRecordUpdateWithWhereUniqueWithoutPostInput[] | $Types.Skip
    updateMany?: FileRecordUpdateManyWithWhereWithoutPostInput | FileRecordUpdateManyWithWhereWithoutPostInput[] | $Types.Skip
    deleteMany?: FileRecordScalarWhereInput | FileRecordScalarWhereInput[] | $Types.Skip
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput> | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput | $Types.Skip
    upsert?: UserUpsertWithoutPostsInput | $Types.Skip
    connect?: UserWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput> | $Types.Skip
  }

  export type TeamUpdateOneWithoutPostsNestedInput = {
    create?: XOR<TeamCreateWithoutPostsInput, TeamUncheckedCreateWithoutPostsInput> | $Types.Skip
    connectOrCreate?: TeamCreateOrConnectWithoutPostsInput | $Types.Skip
    upsert?: TeamUpsertWithoutPostsInput | $Types.Skip
    disconnect?: TeamWhereInput | boolean | $Types.Skip
    delete?: TeamWhereInput | boolean | $Types.Skip
    connect?: TeamWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutPostsInput, TeamUpdateWithoutPostsInput>, TeamUncheckedUpdateWithoutPostsInput> | $Types.Skip
  }

  export type CommentUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[] | $Types.Skip
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[] | $Types.Skip
    upsert?: CommentUpsertWithWhereUniqueWithoutPostInput | CommentUpsertWithWhereUniqueWithoutPostInput[] | $Types.Skip
    createMany?: CommentCreateManyPostInputEnvelope | $Types.Skip
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[] | $Types.Skip
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[] | $Types.Skip
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[] | $Types.Skip
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[] | $Types.Skip
    update?: CommentUpdateWithWhereUniqueWithoutPostInput | CommentUpdateWithWhereUniqueWithoutPostInput[] | $Types.Skip
    updateMany?: CommentUpdateManyWithWhereWithoutPostInput | CommentUpdateManyWithWhereWithoutPostInput[] | $Types.Skip
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[] | $Types.Skip
  }

  export type ProjectAssetUpdateManyWithoutPostNestedInput = {
    create?: XOR<ProjectAssetCreateWithoutPostInput, ProjectAssetUncheckedCreateWithoutPostInput> | ProjectAssetCreateWithoutPostInput[] | ProjectAssetUncheckedCreateWithoutPostInput[] | $Types.Skip
    connectOrCreate?: ProjectAssetCreateOrConnectWithoutPostInput | ProjectAssetCreateOrConnectWithoutPostInput[] | $Types.Skip
    upsert?: ProjectAssetUpsertWithWhereUniqueWithoutPostInput | ProjectAssetUpsertWithWhereUniqueWithoutPostInput[] | $Types.Skip
    createMany?: ProjectAssetCreateManyPostInputEnvelope | $Types.Skip
    set?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[] | $Types.Skip
    disconnect?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[] | $Types.Skip
    delete?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[] | $Types.Skip
    connect?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[] | $Types.Skip
    update?: ProjectAssetUpdateWithWhereUniqueWithoutPostInput | ProjectAssetUpdateWithWhereUniqueWithoutPostInput[] | $Types.Skip
    updateMany?: ProjectAssetUpdateManyWithWhereWithoutPostInput | ProjectAssetUpdateManyWithWhereWithoutPostInput[] | $Types.Skip
    deleteMany?: ProjectAssetScalarWhereInput | ProjectAssetScalarWhereInput[] | $Types.Skip
  }

  export type FileRecordUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<FileRecordCreateWithoutPostInput, FileRecordUncheckedCreateWithoutPostInput> | FileRecordCreateWithoutPostInput[] | FileRecordUncheckedCreateWithoutPostInput[] | $Types.Skip
    connectOrCreate?: FileRecordCreateOrConnectWithoutPostInput | FileRecordCreateOrConnectWithoutPostInput[] | $Types.Skip
    upsert?: FileRecordUpsertWithWhereUniqueWithoutPostInput | FileRecordUpsertWithWhereUniqueWithoutPostInput[] | $Types.Skip
    createMany?: FileRecordCreateManyPostInputEnvelope | $Types.Skip
    set?: FileRecordWhereUniqueInput | FileRecordWhereUniqueInput[] | $Types.Skip
    disconnect?: FileRecordWhereUniqueInput | FileRecordWhereUniqueInput[] | $Types.Skip
    delete?: FileRecordWhereUniqueInput | FileRecordWhereUniqueInput[] | $Types.Skip
    connect?: FileRecordWhereUniqueInput | FileRecordWhereUniqueInput[] | $Types.Skip
    update?: FileRecordUpdateWithWhereUniqueWithoutPostInput | FileRecordUpdateWithWhereUniqueWithoutPostInput[] | $Types.Skip
    updateMany?: FileRecordUpdateManyWithWhereWithoutPostInput | FileRecordUpdateManyWithWhereWithoutPostInput[] | $Types.Skip
    deleteMany?: FileRecordScalarWhereInput | FileRecordScalarWhereInput[] | $Types.Skip
  }

  export type CommentUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[] | $Types.Skip
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[] | $Types.Skip
    upsert?: CommentUpsertWithWhereUniqueWithoutPostInput | CommentUpsertWithWhereUniqueWithoutPostInput[] | $Types.Skip
    createMany?: CommentCreateManyPostInputEnvelope | $Types.Skip
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[] | $Types.Skip
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[] | $Types.Skip
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[] | $Types.Skip
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[] | $Types.Skip
    update?: CommentUpdateWithWhereUniqueWithoutPostInput | CommentUpdateWithWhereUniqueWithoutPostInput[] | $Types.Skip
    updateMany?: CommentUpdateManyWithWhereWithoutPostInput | CommentUpdateManyWithWhereWithoutPostInput[] | $Types.Skip
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[] | $Types.Skip
  }

  export type ProjectAssetUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<ProjectAssetCreateWithoutPostInput, ProjectAssetUncheckedCreateWithoutPostInput> | ProjectAssetCreateWithoutPostInput[] | ProjectAssetUncheckedCreateWithoutPostInput[] | $Types.Skip
    connectOrCreate?: ProjectAssetCreateOrConnectWithoutPostInput | ProjectAssetCreateOrConnectWithoutPostInput[] | $Types.Skip
    upsert?: ProjectAssetUpsertWithWhereUniqueWithoutPostInput | ProjectAssetUpsertWithWhereUniqueWithoutPostInput[] | $Types.Skip
    createMany?: ProjectAssetCreateManyPostInputEnvelope | $Types.Skip
    set?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[] | $Types.Skip
    disconnect?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[] | $Types.Skip
    delete?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[] | $Types.Skip
    connect?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[] | $Types.Skip
    update?: ProjectAssetUpdateWithWhereUniqueWithoutPostInput | ProjectAssetUpdateWithWhereUniqueWithoutPostInput[] | $Types.Skip
    updateMany?: ProjectAssetUpdateManyWithWhereWithoutPostInput | ProjectAssetUpdateManyWithWhereWithoutPostInput[] | $Types.Skip
    deleteMany?: ProjectAssetScalarWhereInput | ProjectAssetScalarWhereInput[] | $Types.Skip
  }

  export type TeamCreateNestedOneWithoutProjectsInput = {
    create?: XOR<TeamCreateWithoutProjectsInput, TeamUncheckedCreateWithoutProjectsInput> | $Types.Skip
    connectOrCreate?: TeamCreateOrConnectWithoutProjectsInput | $Types.Skip
    connect?: TeamWhereUniqueInput | $Types.Skip
  }

  export type UserCreateNestedOneWithoutProjectsInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput> | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput | $Types.Skip
    connect?: UserWhereUniqueInput | $Types.Skip
  }

  export type PhaseCreateNestedManyWithoutProjectInput = {
    create?: XOR<PhaseCreateWithoutProjectInput, PhaseUncheckedCreateWithoutProjectInput> | PhaseCreateWithoutProjectInput[] | PhaseUncheckedCreateWithoutProjectInput[] | $Types.Skip
    connectOrCreate?: PhaseCreateOrConnectWithoutProjectInput | PhaseCreateOrConnectWithoutProjectInput[] | $Types.Skip
    createMany?: PhaseCreateManyProjectInputEnvelope | $Types.Skip
    connect?: PhaseWhereUniqueInput | PhaseWhereUniqueInput[] | $Types.Skip
  }

  export type ProjectAssetCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectAssetCreateWithoutProjectInput, ProjectAssetUncheckedCreateWithoutProjectInput> | ProjectAssetCreateWithoutProjectInput[] | ProjectAssetUncheckedCreateWithoutProjectInput[] | $Types.Skip
    connectOrCreate?: ProjectAssetCreateOrConnectWithoutProjectInput | ProjectAssetCreateOrConnectWithoutProjectInput[] | $Types.Skip
    createMany?: ProjectAssetCreateManyProjectInputEnvelope | $Types.Skip
    connect?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[] | $Types.Skip
  }

  export type PhaseUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<PhaseCreateWithoutProjectInput, PhaseUncheckedCreateWithoutProjectInput> | PhaseCreateWithoutProjectInput[] | PhaseUncheckedCreateWithoutProjectInput[] | $Types.Skip
    connectOrCreate?: PhaseCreateOrConnectWithoutProjectInput | PhaseCreateOrConnectWithoutProjectInput[] | $Types.Skip
    createMany?: PhaseCreateManyProjectInputEnvelope | $Types.Skip
    connect?: PhaseWhereUniqueInput | PhaseWhereUniqueInput[] | $Types.Skip
  }

  export type ProjectAssetUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectAssetCreateWithoutProjectInput, ProjectAssetUncheckedCreateWithoutProjectInput> | ProjectAssetCreateWithoutProjectInput[] | ProjectAssetUncheckedCreateWithoutProjectInput[] | $Types.Skip
    connectOrCreate?: ProjectAssetCreateOrConnectWithoutProjectInput | ProjectAssetCreateOrConnectWithoutProjectInput[] | $Types.Skip
    createMany?: ProjectAssetCreateManyProjectInputEnvelope | $Types.Skip
    connect?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[] | $Types.Skip
  }

  export type EnumProjectStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProjectStatus | $Types.Skip
  }

  export type EnumProjectVisibilityFieldUpdateOperationsInput = {
    set?: $Enums.ProjectVisibility | $Types.Skip
  }

  export type TeamUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<TeamCreateWithoutProjectsInput, TeamUncheckedCreateWithoutProjectsInput> | $Types.Skip
    connectOrCreate?: TeamCreateOrConnectWithoutProjectsInput | $Types.Skip
    upsert?: TeamUpsertWithoutProjectsInput | $Types.Skip
    connect?: TeamWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutProjectsInput, TeamUpdateWithoutProjectsInput>, TeamUncheckedUpdateWithoutProjectsInput> | $Types.Skip
  }

  export type UserUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput> | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput | $Types.Skip
    upsert?: UserUpsertWithoutProjectsInput | $Types.Skip
    connect?: UserWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectsInput, UserUpdateWithoutProjectsInput>, UserUncheckedUpdateWithoutProjectsInput> | $Types.Skip
  }

  export type PhaseUpdateManyWithoutProjectNestedInput = {
    create?: XOR<PhaseCreateWithoutProjectInput, PhaseUncheckedCreateWithoutProjectInput> | PhaseCreateWithoutProjectInput[] | PhaseUncheckedCreateWithoutProjectInput[] | $Types.Skip
    connectOrCreate?: PhaseCreateOrConnectWithoutProjectInput | PhaseCreateOrConnectWithoutProjectInput[] | $Types.Skip
    upsert?: PhaseUpsertWithWhereUniqueWithoutProjectInput | PhaseUpsertWithWhereUniqueWithoutProjectInput[] | $Types.Skip
    createMany?: PhaseCreateManyProjectInputEnvelope | $Types.Skip
    set?: PhaseWhereUniqueInput | PhaseWhereUniqueInput[] | $Types.Skip
    disconnect?: PhaseWhereUniqueInput | PhaseWhereUniqueInput[] | $Types.Skip
    delete?: PhaseWhereUniqueInput | PhaseWhereUniqueInput[] | $Types.Skip
    connect?: PhaseWhereUniqueInput | PhaseWhereUniqueInput[] | $Types.Skip
    update?: PhaseUpdateWithWhereUniqueWithoutProjectInput | PhaseUpdateWithWhereUniqueWithoutProjectInput[] | $Types.Skip
    updateMany?: PhaseUpdateManyWithWhereWithoutProjectInput | PhaseUpdateManyWithWhereWithoutProjectInput[] | $Types.Skip
    deleteMany?: PhaseScalarWhereInput | PhaseScalarWhereInput[] | $Types.Skip
  }

  export type ProjectAssetUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectAssetCreateWithoutProjectInput, ProjectAssetUncheckedCreateWithoutProjectInput> | ProjectAssetCreateWithoutProjectInput[] | ProjectAssetUncheckedCreateWithoutProjectInput[] | $Types.Skip
    connectOrCreate?: ProjectAssetCreateOrConnectWithoutProjectInput | ProjectAssetCreateOrConnectWithoutProjectInput[] | $Types.Skip
    upsert?: ProjectAssetUpsertWithWhereUniqueWithoutProjectInput | ProjectAssetUpsertWithWhereUniqueWithoutProjectInput[] | $Types.Skip
    createMany?: ProjectAssetCreateManyProjectInputEnvelope | $Types.Skip
    set?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[] | $Types.Skip
    disconnect?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[] | $Types.Skip
    delete?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[] | $Types.Skip
    connect?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[] | $Types.Skip
    update?: ProjectAssetUpdateWithWhereUniqueWithoutProjectInput | ProjectAssetUpdateWithWhereUniqueWithoutProjectInput[] | $Types.Skip
    updateMany?: ProjectAssetUpdateManyWithWhereWithoutProjectInput | ProjectAssetUpdateManyWithWhereWithoutProjectInput[] | $Types.Skip
    deleteMany?: ProjectAssetScalarWhereInput | ProjectAssetScalarWhereInput[] | $Types.Skip
  }

  export type PhaseUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<PhaseCreateWithoutProjectInput, PhaseUncheckedCreateWithoutProjectInput> | PhaseCreateWithoutProjectInput[] | PhaseUncheckedCreateWithoutProjectInput[] | $Types.Skip
    connectOrCreate?: PhaseCreateOrConnectWithoutProjectInput | PhaseCreateOrConnectWithoutProjectInput[] | $Types.Skip
    upsert?: PhaseUpsertWithWhereUniqueWithoutProjectInput | PhaseUpsertWithWhereUniqueWithoutProjectInput[] | $Types.Skip
    createMany?: PhaseCreateManyProjectInputEnvelope | $Types.Skip
    set?: PhaseWhereUniqueInput | PhaseWhereUniqueInput[] | $Types.Skip
    disconnect?: PhaseWhereUniqueInput | PhaseWhereUniqueInput[] | $Types.Skip
    delete?: PhaseWhereUniqueInput | PhaseWhereUniqueInput[] | $Types.Skip
    connect?: PhaseWhereUniqueInput | PhaseWhereUniqueInput[] | $Types.Skip
    update?: PhaseUpdateWithWhereUniqueWithoutProjectInput | PhaseUpdateWithWhereUniqueWithoutProjectInput[] | $Types.Skip
    updateMany?: PhaseUpdateManyWithWhereWithoutProjectInput | PhaseUpdateManyWithWhereWithoutProjectInput[] | $Types.Skip
    deleteMany?: PhaseScalarWhereInput | PhaseScalarWhereInput[] | $Types.Skip
  }

  export type ProjectAssetUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectAssetCreateWithoutProjectInput, ProjectAssetUncheckedCreateWithoutProjectInput> | ProjectAssetCreateWithoutProjectInput[] | ProjectAssetUncheckedCreateWithoutProjectInput[] | $Types.Skip
    connectOrCreate?: ProjectAssetCreateOrConnectWithoutProjectInput | ProjectAssetCreateOrConnectWithoutProjectInput[] | $Types.Skip
    upsert?: ProjectAssetUpsertWithWhereUniqueWithoutProjectInput | ProjectAssetUpsertWithWhereUniqueWithoutProjectInput[] | $Types.Skip
    createMany?: ProjectAssetCreateManyProjectInputEnvelope | $Types.Skip
    set?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[] | $Types.Skip
    disconnect?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[] | $Types.Skip
    delete?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[] | $Types.Skip
    connect?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[] | $Types.Skip
    update?: ProjectAssetUpdateWithWhereUniqueWithoutProjectInput | ProjectAssetUpdateWithWhereUniqueWithoutProjectInput[] | $Types.Skip
    updateMany?: ProjectAssetUpdateManyWithWhereWithoutProjectInput | ProjectAssetUpdateManyWithWhereWithoutProjectInput[] | $Types.Skip
    deleteMany?: ProjectAssetScalarWhereInput | ProjectAssetScalarWhereInput[] | $Types.Skip
  }

  export type ProjectAssetCreateNestedOneWithoutChildrenInput = {
    create?: XOR<ProjectAssetCreateWithoutChildrenInput, ProjectAssetUncheckedCreateWithoutChildrenInput> | $Types.Skip
    connectOrCreate?: ProjectAssetCreateOrConnectWithoutChildrenInput | $Types.Skip
    connect?: ProjectAssetWhereUniqueInput | $Types.Skip
  }

  export type ProjectAssetCreateNestedManyWithoutParentInput = {
    create?: XOR<ProjectAssetCreateWithoutParentInput, ProjectAssetUncheckedCreateWithoutParentInput> | ProjectAssetCreateWithoutParentInput[] | ProjectAssetUncheckedCreateWithoutParentInput[] | $Types.Skip
    connectOrCreate?: ProjectAssetCreateOrConnectWithoutParentInput | ProjectAssetCreateOrConnectWithoutParentInput[] | $Types.Skip
    createMany?: ProjectAssetCreateManyParentInputEnvelope | $Types.Skip
    connect?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[] | $Types.Skip
  }

  export type ProjectCreateNestedOneWithoutAssetsInput = {
    create?: XOR<ProjectCreateWithoutAssetsInput, ProjectUncheckedCreateWithoutAssetsInput> | $Types.Skip
    connectOrCreate?: ProjectCreateOrConnectWithoutAssetsInput | $Types.Skip
    connect?: ProjectWhereUniqueInput | $Types.Skip
  }

  export type PhaseCreateNestedOneWithoutRootAssetsInput = {
    create?: XOR<PhaseCreateWithoutRootAssetsInput, PhaseUncheckedCreateWithoutRootAssetsInput> | $Types.Skip
    connectOrCreate?: PhaseCreateOrConnectWithoutRootAssetsInput | $Types.Skip
    connect?: PhaseWhereUniqueInput | $Types.Skip
  }

  export type PostCreateNestedOneWithoutProjectAssetsInput = {
    create?: XOR<PostCreateWithoutProjectAssetsInput, PostUncheckedCreateWithoutProjectAssetsInput> | $Types.Skip
    connectOrCreate?: PostCreateOrConnectWithoutProjectAssetsInput | $Types.Skip
    connect?: PostWhereUniqueInput | $Types.Skip
  }

  export type ProjectAssetUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<ProjectAssetCreateWithoutParentInput, ProjectAssetUncheckedCreateWithoutParentInput> | ProjectAssetCreateWithoutParentInput[] | ProjectAssetUncheckedCreateWithoutParentInput[] | $Types.Skip
    connectOrCreate?: ProjectAssetCreateOrConnectWithoutParentInput | ProjectAssetCreateOrConnectWithoutParentInput[] | $Types.Skip
    createMany?: ProjectAssetCreateManyParentInputEnvelope | $Types.Skip
    connect?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[] | $Types.Skip
  }

  export type EnumAssetTypeFieldUpdateOperationsInput = {
    set?: $Enums.AssetType | $Types.Skip
  }

  export type ProjectAssetUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<ProjectAssetCreateWithoutChildrenInput, ProjectAssetUncheckedCreateWithoutChildrenInput> | $Types.Skip
    connectOrCreate?: ProjectAssetCreateOrConnectWithoutChildrenInput | $Types.Skip
    upsert?: ProjectAssetUpsertWithoutChildrenInput | $Types.Skip
    disconnect?: ProjectAssetWhereInput | boolean | $Types.Skip
    delete?: ProjectAssetWhereInput | boolean | $Types.Skip
    connect?: ProjectAssetWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<ProjectAssetUpdateToOneWithWhereWithoutChildrenInput, ProjectAssetUpdateWithoutChildrenInput>, ProjectAssetUncheckedUpdateWithoutChildrenInput> | $Types.Skip
  }

  export type ProjectAssetUpdateManyWithoutParentNestedInput = {
    create?: XOR<ProjectAssetCreateWithoutParentInput, ProjectAssetUncheckedCreateWithoutParentInput> | ProjectAssetCreateWithoutParentInput[] | ProjectAssetUncheckedCreateWithoutParentInput[] | $Types.Skip
    connectOrCreate?: ProjectAssetCreateOrConnectWithoutParentInput | ProjectAssetCreateOrConnectWithoutParentInput[] | $Types.Skip
    upsert?: ProjectAssetUpsertWithWhereUniqueWithoutParentInput | ProjectAssetUpsertWithWhereUniqueWithoutParentInput[] | $Types.Skip
    createMany?: ProjectAssetCreateManyParentInputEnvelope | $Types.Skip
    set?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[] | $Types.Skip
    disconnect?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[] | $Types.Skip
    delete?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[] | $Types.Skip
    connect?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[] | $Types.Skip
    update?: ProjectAssetUpdateWithWhereUniqueWithoutParentInput | ProjectAssetUpdateWithWhereUniqueWithoutParentInput[] | $Types.Skip
    updateMany?: ProjectAssetUpdateManyWithWhereWithoutParentInput | ProjectAssetUpdateManyWithWhereWithoutParentInput[] | $Types.Skip
    deleteMany?: ProjectAssetScalarWhereInput | ProjectAssetScalarWhereInput[] | $Types.Skip
  }

  export type ProjectUpdateOneRequiredWithoutAssetsNestedInput = {
    create?: XOR<ProjectCreateWithoutAssetsInput, ProjectUncheckedCreateWithoutAssetsInput> | $Types.Skip
    connectOrCreate?: ProjectCreateOrConnectWithoutAssetsInput | $Types.Skip
    upsert?: ProjectUpsertWithoutAssetsInput | $Types.Skip
    connect?: ProjectWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutAssetsInput, ProjectUpdateWithoutAssetsInput>, ProjectUncheckedUpdateWithoutAssetsInput> | $Types.Skip
  }

  export type PhaseUpdateOneWithoutRootAssetsNestedInput = {
    create?: XOR<PhaseCreateWithoutRootAssetsInput, PhaseUncheckedCreateWithoutRootAssetsInput> | $Types.Skip
    connectOrCreate?: PhaseCreateOrConnectWithoutRootAssetsInput | $Types.Skip
    upsert?: PhaseUpsertWithoutRootAssetsInput | $Types.Skip
    disconnect?: PhaseWhereInput | boolean | $Types.Skip
    delete?: PhaseWhereInput | boolean | $Types.Skip
    connect?: PhaseWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<PhaseUpdateToOneWithWhereWithoutRootAssetsInput, PhaseUpdateWithoutRootAssetsInput>, PhaseUncheckedUpdateWithoutRootAssetsInput> | $Types.Skip
  }

  export type PostUpdateOneWithoutProjectAssetsNestedInput = {
    create?: XOR<PostCreateWithoutProjectAssetsInput, PostUncheckedCreateWithoutProjectAssetsInput> | $Types.Skip
    connectOrCreate?: PostCreateOrConnectWithoutProjectAssetsInput | $Types.Skip
    upsert?: PostUpsertWithoutProjectAssetsInput | $Types.Skip
    disconnect?: PostWhereInput | boolean | $Types.Skip
    delete?: PostWhereInput | boolean | $Types.Skip
    connect?: PostWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutProjectAssetsInput, PostUpdateWithoutProjectAssetsInput>, PostUncheckedUpdateWithoutProjectAssetsInput> | $Types.Skip
  }

  export type ProjectAssetUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<ProjectAssetCreateWithoutParentInput, ProjectAssetUncheckedCreateWithoutParentInput> | ProjectAssetCreateWithoutParentInput[] | ProjectAssetUncheckedCreateWithoutParentInput[] | $Types.Skip
    connectOrCreate?: ProjectAssetCreateOrConnectWithoutParentInput | ProjectAssetCreateOrConnectWithoutParentInput[] | $Types.Skip
    upsert?: ProjectAssetUpsertWithWhereUniqueWithoutParentInput | ProjectAssetUpsertWithWhereUniqueWithoutParentInput[] | $Types.Skip
    createMany?: ProjectAssetCreateManyParentInputEnvelope | $Types.Skip
    set?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[] | $Types.Skip
    disconnect?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[] | $Types.Skip
    delete?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[] | $Types.Skip
    connect?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[] | $Types.Skip
    update?: ProjectAssetUpdateWithWhereUniqueWithoutParentInput | ProjectAssetUpdateWithWhereUniqueWithoutParentInput[] | $Types.Skip
    updateMany?: ProjectAssetUpdateManyWithWhereWithoutParentInput | ProjectAssetUpdateManyWithWhereWithoutParentInput[] | $Types.Skip
    deleteMany?: ProjectAssetScalarWhereInput | ProjectAssetScalarWhereInput[] | $Types.Skip
  }

  export type TeamMemberCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput> | TeamMemberCreateWithoutTeamInput[] | TeamMemberUncheckedCreateWithoutTeamInput[] | $Types.Skip
    connectOrCreate?: TeamMemberCreateOrConnectWithoutTeamInput | TeamMemberCreateOrConnectWithoutTeamInput[] | $Types.Skip
    createMany?: TeamMemberCreateManyTeamInputEnvelope | $Types.Skip
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[] | $Types.Skip
  }

  export type PostCreateNestedManyWithoutTeamInput = {
    create?: XOR<PostCreateWithoutTeamInput, PostUncheckedCreateWithoutTeamInput> | PostCreateWithoutTeamInput[] | PostUncheckedCreateWithoutTeamInput[] | $Types.Skip
    connectOrCreate?: PostCreateOrConnectWithoutTeamInput | PostCreateOrConnectWithoutTeamInput[] | $Types.Skip
    createMany?: PostCreateManyTeamInputEnvelope | $Types.Skip
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[] | $Types.Skip
  }

  export type FileRecordCreateNestedManyWithoutTeamInput = {
    create?: XOR<FileRecordCreateWithoutTeamInput, FileRecordUncheckedCreateWithoutTeamInput> | FileRecordCreateWithoutTeamInput[] | FileRecordUncheckedCreateWithoutTeamInput[] | $Types.Skip
    connectOrCreate?: FileRecordCreateOrConnectWithoutTeamInput | FileRecordCreateOrConnectWithoutTeamInput[] | $Types.Skip
    createMany?: FileRecordCreateManyTeamInputEnvelope | $Types.Skip
    connect?: FileRecordWhereUniqueInput | FileRecordWhereUniqueInput[] | $Types.Skip
  }

  export type ProjectCreateNestedManyWithoutTeamInput = {
    create?: XOR<ProjectCreateWithoutTeamInput, ProjectUncheckedCreateWithoutTeamInput> | ProjectCreateWithoutTeamInput[] | ProjectUncheckedCreateWithoutTeamInput[] | $Types.Skip
    connectOrCreate?: ProjectCreateOrConnectWithoutTeamInput | ProjectCreateOrConnectWithoutTeamInput[] | $Types.Skip
    createMany?: ProjectCreateManyTeamInputEnvelope | $Types.Skip
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[] | $Types.Skip
  }

  export type TeamMemberUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput> | TeamMemberCreateWithoutTeamInput[] | TeamMemberUncheckedCreateWithoutTeamInput[] | $Types.Skip
    connectOrCreate?: TeamMemberCreateOrConnectWithoutTeamInput | TeamMemberCreateOrConnectWithoutTeamInput[] | $Types.Skip
    createMany?: TeamMemberCreateManyTeamInputEnvelope | $Types.Skip
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[] | $Types.Skip
  }

  export type PostUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<PostCreateWithoutTeamInput, PostUncheckedCreateWithoutTeamInput> | PostCreateWithoutTeamInput[] | PostUncheckedCreateWithoutTeamInput[] | $Types.Skip
    connectOrCreate?: PostCreateOrConnectWithoutTeamInput | PostCreateOrConnectWithoutTeamInput[] | $Types.Skip
    createMany?: PostCreateManyTeamInputEnvelope | $Types.Skip
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[] | $Types.Skip
  }

  export type FileRecordUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<FileRecordCreateWithoutTeamInput, FileRecordUncheckedCreateWithoutTeamInput> | FileRecordCreateWithoutTeamInput[] | FileRecordUncheckedCreateWithoutTeamInput[] | $Types.Skip
    connectOrCreate?: FileRecordCreateOrConnectWithoutTeamInput | FileRecordCreateOrConnectWithoutTeamInput[] | $Types.Skip
    createMany?: FileRecordCreateManyTeamInputEnvelope | $Types.Skip
    connect?: FileRecordWhereUniqueInput | FileRecordWhereUniqueInput[] | $Types.Skip
  }

  export type ProjectUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<ProjectCreateWithoutTeamInput, ProjectUncheckedCreateWithoutTeamInput> | ProjectCreateWithoutTeamInput[] | ProjectUncheckedCreateWithoutTeamInput[] | $Types.Skip
    connectOrCreate?: ProjectCreateOrConnectWithoutTeamInput | ProjectCreateOrConnectWithoutTeamInput[] | $Types.Skip
    createMany?: ProjectCreateManyTeamInputEnvelope | $Types.Skip
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[] | $Types.Skip
  }

  export type TeamMemberUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput> | TeamMemberCreateWithoutTeamInput[] | TeamMemberUncheckedCreateWithoutTeamInput[] | $Types.Skip
    connectOrCreate?: TeamMemberCreateOrConnectWithoutTeamInput | TeamMemberCreateOrConnectWithoutTeamInput[] | $Types.Skip
    upsert?: TeamMemberUpsertWithWhereUniqueWithoutTeamInput | TeamMemberUpsertWithWhereUniqueWithoutTeamInput[] | $Types.Skip
    createMany?: TeamMemberCreateManyTeamInputEnvelope | $Types.Skip
    set?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[] | $Types.Skip
    disconnect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[] | $Types.Skip
    delete?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[] | $Types.Skip
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[] | $Types.Skip
    update?: TeamMemberUpdateWithWhereUniqueWithoutTeamInput | TeamMemberUpdateWithWhereUniqueWithoutTeamInput[] | $Types.Skip
    updateMany?: TeamMemberUpdateManyWithWhereWithoutTeamInput | TeamMemberUpdateManyWithWhereWithoutTeamInput[] | $Types.Skip
    deleteMany?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[] | $Types.Skip
  }

  export type PostUpdateManyWithoutTeamNestedInput = {
    create?: XOR<PostCreateWithoutTeamInput, PostUncheckedCreateWithoutTeamInput> | PostCreateWithoutTeamInput[] | PostUncheckedCreateWithoutTeamInput[] | $Types.Skip
    connectOrCreate?: PostCreateOrConnectWithoutTeamInput | PostCreateOrConnectWithoutTeamInput[] | $Types.Skip
    upsert?: PostUpsertWithWhereUniqueWithoutTeamInput | PostUpsertWithWhereUniqueWithoutTeamInput[] | $Types.Skip
    createMany?: PostCreateManyTeamInputEnvelope | $Types.Skip
    set?: PostWhereUniqueInput | PostWhereUniqueInput[] | $Types.Skip
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[] | $Types.Skip
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[] | $Types.Skip
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[] | $Types.Skip
    update?: PostUpdateWithWhereUniqueWithoutTeamInput | PostUpdateWithWhereUniqueWithoutTeamInput[] | $Types.Skip
    updateMany?: PostUpdateManyWithWhereWithoutTeamInput | PostUpdateManyWithWhereWithoutTeamInput[] | $Types.Skip
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[] | $Types.Skip
  }

  export type FileRecordUpdateManyWithoutTeamNestedInput = {
    create?: XOR<FileRecordCreateWithoutTeamInput, FileRecordUncheckedCreateWithoutTeamInput> | FileRecordCreateWithoutTeamInput[] | FileRecordUncheckedCreateWithoutTeamInput[] | $Types.Skip
    connectOrCreate?: FileRecordCreateOrConnectWithoutTeamInput | FileRecordCreateOrConnectWithoutTeamInput[] | $Types.Skip
    upsert?: FileRecordUpsertWithWhereUniqueWithoutTeamInput | FileRecordUpsertWithWhereUniqueWithoutTeamInput[] | $Types.Skip
    createMany?: FileRecordCreateManyTeamInputEnvelope | $Types.Skip
    set?: FileRecordWhereUniqueInput | FileRecordWhereUniqueInput[] | $Types.Skip
    disconnect?: FileRecordWhereUniqueInput | FileRecordWhereUniqueInput[] | $Types.Skip
    delete?: FileRecordWhereUniqueInput | FileRecordWhereUniqueInput[] | $Types.Skip
    connect?: FileRecordWhereUniqueInput | FileRecordWhereUniqueInput[] | $Types.Skip
    update?: FileRecordUpdateWithWhereUniqueWithoutTeamInput | FileRecordUpdateWithWhereUniqueWithoutTeamInput[] | $Types.Skip
    updateMany?: FileRecordUpdateManyWithWhereWithoutTeamInput | FileRecordUpdateManyWithWhereWithoutTeamInput[] | $Types.Skip
    deleteMany?: FileRecordScalarWhereInput | FileRecordScalarWhereInput[] | $Types.Skip
  }

  export type ProjectUpdateManyWithoutTeamNestedInput = {
    create?: XOR<ProjectCreateWithoutTeamInput, ProjectUncheckedCreateWithoutTeamInput> | ProjectCreateWithoutTeamInput[] | ProjectUncheckedCreateWithoutTeamInput[] | $Types.Skip
    connectOrCreate?: ProjectCreateOrConnectWithoutTeamInput | ProjectCreateOrConnectWithoutTeamInput[] | $Types.Skip
    upsert?: ProjectUpsertWithWhereUniqueWithoutTeamInput | ProjectUpsertWithWhereUniqueWithoutTeamInput[] | $Types.Skip
    createMany?: ProjectCreateManyTeamInputEnvelope | $Types.Skip
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[] | $Types.Skip
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[] | $Types.Skip
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[] | $Types.Skip
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[] | $Types.Skip
    update?: ProjectUpdateWithWhereUniqueWithoutTeamInput | ProjectUpdateWithWhereUniqueWithoutTeamInput[] | $Types.Skip
    updateMany?: ProjectUpdateManyWithWhereWithoutTeamInput | ProjectUpdateManyWithWhereWithoutTeamInput[] | $Types.Skip
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[] | $Types.Skip
  }

  export type TeamMemberUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput> | TeamMemberCreateWithoutTeamInput[] | TeamMemberUncheckedCreateWithoutTeamInput[] | $Types.Skip
    connectOrCreate?: TeamMemberCreateOrConnectWithoutTeamInput | TeamMemberCreateOrConnectWithoutTeamInput[] | $Types.Skip
    upsert?: TeamMemberUpsertWithWhereUniqueWithoutTeamInput | TeamMemberUpsertWithWhereUniqueWithoutTeamInput[] | $Types.Skip
    createMany?: TeamMemberCreateManyTeamInputEnvelope | $Types.Skip
    set?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[] | $Types.Skip
    disconnect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[] | $Types.Skip
    delete?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[] | $Types.Skip
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[] | $Types.Skip
    update?: TeamMemberUpdateWithWhereUniqueWithoutTeamInput | TeamMemberUpdateWithWhereUniqueWithoutTeamInput[] | $Types.Skip
    updateMany?: TeamMemberUpdateManyWithWhereWithoutTeamInput | TeamMemberUpdateManyWithWhereWithoutTeamInput[] | $Types.Skip
    deleteMany?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[] | $Types.Skip
  }

  export type PostUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<PostCreateWithoutTeamInput, PostUncheckedCreateWithoutTeamInput> | PostCreateWithoutTeamInput[] | PostUncheckedCreateWithoutTeamInput[] | $Types.Skip
    connectOrCreate?: PostCreateOrConnectWithoutTeamInput | PostCreateOrConnectWithoutTeamInput[] | $Types.Skip
    upsert?: PostUpsertWithWhereUniqueWithoutTeamInput | PostUpsertWithWhereUniqueWithoutTeamInput[] | $Types.Skip
    createMany?: PostCreateManyTeamInputEnvelope | $Types.Skip
    set?: PostWhereUniqueInput | PostWhereUniqueInput[] | $Types.Skip
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[] | $Types.Skip
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[] | $Types.Skip
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[] | $Types.Skip
    update?: PostUpdateWithWhereUniqueWithoutTeamInput | PostUpdateWithWhereUniqueWithoutTeamInput[] | $Types.Skip
    updateMany?: PostUpdateManyWithWhereWithoutTeamInput | PostUpdateManyWithWhereWithoutTeamInput[] | $Types.Skip
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[] | $Types.Skip
  }

  export type FileRecordUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<FileRecordCreateWithoutTeamInput, FileRecordUncheckedCreateWithoutTeamInput> | FileRecordCreateWithoutTeamInput[] | FileRecordUncheckedCreateWithoutTeamInput[] | $Types.Skip
    connectOrCreate?: FileRecordCreateOrConnectWithoutTeamInput | FileRecordCreateOrConnectWithoutTeamInput[] | $Types.Skip
    upsert?: FileRecordUpsertWithWhereUniqueWithoutTeamInput | FileRecordUpsertWithWhereUniqueWithoutTeamInput[] | $Types.Skip
    createMany?: FileRecordCreateManyTeamInputEnvelope | $Types.Skip
    set?: FileRecordWhereUniqueInput | FileRecordWhereUniqueInput[] | $Types.Skip
    disconnect?: FileRecordWhereUniqueInput | FileRecordWhereUniqueInput[] | $Types.Skip
    delete?: FileRecordWhereUniqueInput | FileRecordWhereUniqueInput[] | $Types.Skip
    connect?: FileRecordWhereUniqueInput | FileRecordWhereUniqueInput[] | $Types.Skip
    update?: FileRecordUpdateWithWhereUniqueWithoutTeamInput | FileRecordUpdateWithWhereUniqueWithoutTeamInput[] | $Types.Skip
    updateMany?: FileRecordUpdateManyWithWhereWithoutTeamInput | FileRecordUpdateManyWithWhereWithoutTeamInput[] | $Types.Skip
    deleteMany?: FileRecordScalarWhereInput | FileRecordScalarWhereInput[] | $Types.Skip
  }

  export type ProjectUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<ProjectCreateWithoutTeamInput, ProjectUncheckedCreateWithoutTeamInput> | ProjectCreateWithoutTeamInput[] | ProjectUncheckedCreateWithoutTeamInput[] | $Types.Skip
    connectOrCreate?: ProjectCreateOrConnectWithoutTeamInput | ProjectCreateOrConnectWithoutTeamInput[] | $Types.Skip
    upsert?: ProjectUpsertWithWhereUniqueWithoutTeamInput | ProjectUpsertWithWhereUniqueWithoutTeamInput[] | $Types.Skip
    createMany?: ProjectCreateManyTeamInputEnvelope | $Types.Skip
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[] | $Types.Skip
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[] | $Types.Skip
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[] | $Types.Skip
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[] | $Types.Skip
    update?: ProjectUpdateWithWhereUniqueWithoutTeamInput | ProjectUpdateWithWhereUniqueWithoutTeamInput[] | $Types.Skip
    updateMany?: ProjectUpdateManyWithWhereWithoutTeamInput | ProjectUpdateManyWithWhereWithoutTeamInput[] | $Types.Skip
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[] | $Types.Skip
  }

  export type TeamCreateNestedOneWithoutMembersInput = {
    create?: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput> | $Types.Skip
    connectOrCreate?: TeamCreateOrConnectWithoutMembersInput | $Types.Skip
    connect?: TeamWhereUniqueInput | $Types.Skip
  }

  export type UserCreateNestedOneWithoutTeamMembersInput = {
    create?: XOR<UserCreateWithoutTeamMembersInput, UserUncheckedCreateWithoutTeamMembersInput> | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutTeamMembersInput | $Types.Skip
    connect?: UserWhereUniqueInput | $Types.Skip
  }

  export type EnumTeamRoleFieldUpdateOperationsInput = {
    set?: $Enums.TeamRole | $Types.Skip
  }

  export type TeamUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput> | $Types.Skip
    connectOrCreate?: TeamCreateOrConnectWithoutMembersInput | $Types.Skip
    upsert?: TeamUpsertWithoutMembersInput | $Types.Skip
    connect?: TeamWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutMembersInput, TeamUpdateWithoutMembersInput>, TeamUncheckedUpdateWithoutMembersInput> | $Types.Skip
  }

  export type UserUpdateOneRequiredWithoutTeamMembersNestedInput = {
    create?: XOR<UserCreateWithoutTeamMembersInput, UserUncheckedCreateWithoutTeamMembersInput> | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutTeamMembersInput | $Types.Skip
    upsert?: UserUpsertWithoutTeamMembersInput | $Types.Skip
    connect?: UserWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTeamMembersInput, UserUpdateWithoutTeamMembersInput>, UserUncheckedUpdateWithoutTeamMembersInput> | $Types.Skip
  }

  export type UserCreateuserCollectionInput = {
    set: string[]
  }

  export type TeamMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput> | TeamMemberCreateWithoutUserInput[] | TeamMemberUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: TeamMemberCreateOrConnectWithoutUserInput | TeamMemberCreateOrConnectWithoutUserInput[] | $Types.Skip
    createMany?: TeamMemberCreateManyUserInputEnvelope | $Types.Skip
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[] | $Types.Skip
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[] | $Types.Skip
    createMany?: AccountCreateManyUserInputEnvelope | $Types.Skip
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[] | $Types.Skip
  }

  export type FileRecordCreateNestedManyWithoutUploaderInput = {
    create?: XOR<FileRecordCreateWithoutUploaderInput, FileRecordUncheckedCreateWithoutUploaderInput> | FileRecordCreateWithoutUploaderInput[] | FileRecordUncheckedCreateWithoutUploaderInput[] | $Types.Skip
    connectOrCreate?: FileRecordCreateOrConnectWithoutUploaderInput | FileRecordCreateOrConnectWithoutUploaderInput[] | $Types.Skip
    createMany?: FileRecordCreateManyUploaderInputEnvelope | $Types.Skip
    connect?: FileRecordWhereUniqueInput | FileRecordWhereUniqueInput[] | $Types.Skip
  }

  export type PostCreateNestedManyWithoutUploaderInput = {
    create?: XOR<PostCreateWithoutUploaderInput, PostUncheckedCreateWithoutUploaderInput> | PostCreateWithoutUploaderInput[] | PostUncheckedCreateWithoutUploaderInput[] | $Types.Skip
    connectOrCreate?: PostCreateOrConnectWithoutUploaderInput | PostCreateOrConnectWithoutUploaderInput[] | $Types.Skip
    createMany?: PostCreateManyUploaderInputEnvelope | $Types.Skip
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[] | $Types.Skip
  }

  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[] | $Types.Skip
    createMany?: CommentCreateManyUserInputEnvelope | $Types.Skip
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[] | $Types.Skip
  }

  export type ProjectCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ProjectCreateWithoutCreatorInput, ProjectUncheckedCreateWithoutCreatorInput> | ProjectCreateWithoutCreatorInput[] | ProjectUncheckedCreateWithoutCreatorInput[] | $Types.Skip
    connectOrCreate?: ProjectCreateOrConnectWithoutCreatorInput | ProjectCreateOrConnectWithoutCreatorInput[] | $Types.Skip
    createMany?: ProjectCreateManyCreatorInputEnvelope | $Types.Skip
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[] | $Types.Skip
  }

  export type TeamMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput> | TeamMemberCreateWithoutUserInput[] | TeamMemberUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: TeamMemberCreateOrConnectWithoutUserInput | TeamMemberCreateOrConnectWithoutUserInput[] | $Types.Skip
    createMany?: TeamMemberCreateManyUserInputEnvelope | $Types.Skip
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[] | $Types.Skip
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[] | $Types.Skip
    createMany?: AccountCreateManyUserInputEnvelope | $Types.Skip
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[] | $Types.Skip
  }

  export type FileRecordUncheckedCreateNestedManyWithoutUploaderInput = {
    create?: XOR<FileRecordCreateWithoutUploaderInput, FileRecordUncheckedCreateWithoutUploaderInput> | FileRecordCreateWithoutUploaderInput[] | FileRecordUncheckedCreateWithoutUploaderInput[] | $Types.Skip
    connectOrCreate?: FileRecordCreateOrConnectWithoutUploaderInput | FileRecordCreateOrConnectWithoutUploaderInput[] | $Types.Skip
    createMany?: FileRecordCreateManyUploaderInputEnvelope | $Types.Skip
    connect?: FileRecordWhereUniqueInput | FileRecordWhereUniqueInput[] | $Types.Skip
  }

  export type PostUncheckedCreateNestedManyWithoutUploaderInput = {
    create?: XOR<PostCreateWithoutUploaderInput, PostUncheckedCreateWithoutUploaderInput> | PostCreateWithoutUploaderInput[] | PostUncheckedCreateWithoutUploaderInput[] | $Types.Skip
    connectOrCreate?: PostCreateOrConnectWithoutUploaderInput | PostCreateOrConnectWithoutUploaderInput[] | $Types.Skip
    createMany?: PostCreateManyUploaderInputEnvelope | $Types.Skip
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[] | $Types.Skip
  }

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[] | $Types.Skip
    createMany?: CommentCreateManyUserInputEnvelope | $Types.Skip
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[] | $Types.Skip
  }

  export type ProjectUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ProjectCreateWithoutCreatorInput, ProjectUncheckedCreateWithoutCreatorInput> | ProjectCreateWithoutCreatorInput[] | ProjectUncheckedCreateWithoutCreatorInput[] | $Types.Skip
    connectOrCreate?: ProjectCreateOrConnectWithoutCreatorInput | ProjectCreateOrConnectWithoutCreatorInput[] | $Types.Skip
    createMany?: ProjectCreateManyCreatorInputEnvelope | $Types.Skip
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[] | $Types.Skip
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role | $Types.Skip
  }

  export type UserUpdateuserCollectionInput = {
    set?: string[] | $Types.Skip
    push?: string | string[] | $Types.Skip
  }

  export type TeamMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput> | TeamMemberCreateWithoutUserInput[] | TeamMemberUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: TeamMemberCreateOrConnectWithoutUserInput | TeamMemberCreateOrConnectWithoutUserInput[] | $Types.Skip
    upsert?: TeamMemberUpsertWithWhereUniqueWithoutUserInput | TeamMemberUpsertWithWhereUniqueWithoutUserInput[] | $Types.Skip
    createMany?: TeamMemberCreateManyUserInputEnvelope | $Types.Skip
    set?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[] | $Types.Skip
    disconnect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[] | $Types.Skip
    delete?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[] | $Types.Skip
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[] | $Types.Skip
    update?: TeamMemberUpdateWithWhereUniqueWithoutUserInput | TeamMemberUpdateWithWhereUniqueWithoutUserInput[] | $Types.Skip
    updateMany?: TeamMemberUpdateManyWithWhereWithoutUserInput | TeamMemberUpdateManyWithWhereWithoutUserInput[] | $Types.Skip
    deleteMany?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[] | $Types.Skip
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[] | $Types.Skip
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[] | $Types.Skip
    createMany?: AccountCreateManyUserInputEnvelope | $Types.Skip
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[] | $Types.Skip
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[] | $Types.Skip
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[] | $Types.Skip
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[] | $Types.Skip
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[] | $Types.Skip
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[] | $Types.Skip
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[] | $Types.Skip
  }

  export type FileRecordUpdateManyWithoutUploaderNestedInput = {
    create?: XOR<FileRecordCreateWithoutUploaderInput, FileRecordUncheckedCreateWithoutUploaderInput> | FileRecordCreateWithoutUploaderInput[] | FileRecordUncheckedCreateWithoutUploaderInput[] | $Types.Skip
    connectOrCreate?: FileRecordCreateOrConnectWithoutUploaderInput | FileRecordCreateOrConnectWithoutUploaderInput[] | $Types.Skip
    upsert?: FileRecordUpsertWithWhereUniqueWithoutUploaderInput | FileRecordUpsertWithWhereUniqueWithoutUploaderInput[] | $Types.Skip
    createMany?: FileRecordCreateManyUploaderInputEnvelope | $Types.Skip
    set?: FileRecordWhereUniqueInput | FileRecordWhereUniqueInput[] | $Types.Skip
    disconnect?: FileRecordWhereUniqueInput | FileRecordWhereUniqueInput[] | $Types.Skip
    delete?: FileRecordWhereUniqueInput | FileRecordWhereUniqueInput[] | $Types.Skip
    connect?: FileRecordWhereUniqueInput | FileRecordWhereUniqueInput[] | $Types.Skip
    update?: FileRecordUpdateWithWhereUniqueWithoutUploaderInput | FileRecordUpdateWithWhereUniqueWithoutUploaderInput[] | $Types.Skip
    updateMany?: FileRecordUpdateManyWithWhereWithoutUploaderInput | FileRecordUpdateManyWithWhereWithoutUploaderInput[] | $Types.Skip
    deleteMany?: FileRecordScalarWhereInput | FileRecordScalarWhereInput[] | $Types.Skip
  }

  export type PostUpdateManyWithoutUploaderNestedInput = {
    create?: XOR<PostCreateWithoutUploaderInput, PostUncheckedCreateWithoutUploaderInput> | PostCreateWithoutUploaderInput[] | PostUncheckedCreateWithoutUploaderInput[] | $Types.Skip
    connectOrCreate?: PostCreateOrConnectWithoutUploaderInput | PostCreateOrConnectWithoutUploaderInput[] | $Types.Skip
    upsert?: PostUpsertWithWhereUniqueWithoutUploaderInput | PostUpsertWithWhereUniqueWithoutUploaderInput[] | $Types.Skip
    createMany?: PostCreateManyUploaderInputEnvelope | $Types.Skip
    set?: PostWhereUniqueInput | PostWhereUniqueInput[] | $Types.Skip
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[] | $Types.Skip
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[] | $Types.Skip
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[] | $Types.Skip
    update?: PostUpdateWithWhereUniqueWithoutUploaderInput | PostUpdateWithWhereUniqueWithoutUploaderInput[] | $Types.Skip
    updateMany?: PostUpdateManyWithWhereWithoutUploaderInput | PostUpdateManyWithWhereWithoutUploaderInput[] | $Types.Skip
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[] | $Types.Skip
  }

  export type CommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[] | $Types.Skip
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[] | $Types.Skip
    createMany?: CommentCreateManyUserInputEnvelope | $Types.Skip
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[] | $Types.Skip
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[] | $Types.Skip
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[] | $Types.Skip
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[] | $Types.Skip
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[] | $Types.Skip
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[] | $Types.Skip
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[] | $Types.Skip
  }

  export type ProjectUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ProjectCreateWithoutCreatorInput, ProjectUncheckedCreateWithoutCreatorInput> | ProjectCreateWithoutCreatorInput[] | ProjectUncheckedCreateWithoutCreatorInput[] | $Types.Skip
    connectOrCreate?: ProjectCreateOrConnectWithoutCreatorInput | ProjectCreateOrConnectWithoutCreatorInput[] | $Types.Skip
    upsert?: ProjectUpsertWithWhereUniqueWithoutCreatorInput | ProjectUpsertWithWhereUniqueWithoutCreatorInput[] | $Types.Skip
    createMany?: ProjectCreateManyCreatorInputEnvelope | $Types.Skip
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[] | $Types.Skip
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[] | $Types.Skip
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[] | $Types.Skip
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[] | $Types.Skip
    update?: ProjectUpdateWithWhereUniqueWithoutCreatorInput | ProjectUpdateWithWhereUniqueWithoutCreatorInput[] | $Types.Skip
    updateMany?: ProjectUpdateManyWithWhereWithoutCreatorInput | ProjectUpdateManyWithWhereWithoutCreatorInput[] | $Types.Skip
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[] | $Types.Skip
  }

  export type TeamMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput> | TeamMemberCreateWithoutUserInput[] | TeamMemberUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: TeamMemberCreateOrConnectWithoutUserInput | TeamMemberCreateOrConnectWithoutUserInput[] | $Types.Skip
    upsert?: TeamMemberUpsertWithWhereUniqueWithoutUserInput | TeamMemberUpsertWithWhereUniqueWithoutUserInput[] | $Types.Skip
    createMany?: TeamMemberCreateManyUserInputEnvelope | $Types.Skip
    set?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[] | $Types.Skip
    disconnect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[] | $Types.Skip
    delete?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[] | $Types.Skip
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[] | $Types.Skip
    update?: TeamMemberUpdateWithWhereUniqueWithoutUserInput | TeamMemberUpdateWithWhereUniqueWithoutUserInput[] | $Types.Skip
    updateMany?: TeamMemberUpdateManyWithWhereWithoutUserInput | TeamMemberUpdateManyWithWhereWithoutUserInput[] | $Types.Skip
    deleteMany?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[] | $Types.Skip
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[] | $Types.Skip
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[] | $Types.Skip
    createMany?: AccountCreateManyUserInputEnvelope | $Types.Skip
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[] | $Types.Skip
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[] | $Types.Skip
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[] | $Types.Skip
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[] | $Types.Skip
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[] | $Types.Skip
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[] | $Types.Skip
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[] | $Types.Skip
  }

  export type FileRecordUncheckedUpdateManyWithoutUploaderNestedInput = {
    create?: XOR<FileRecordCreateWithoutUploaderInput, FileRecordUncheckedCreateWithoutUploaderInput> | FileRecordCreateWithoutUploaderInput[] | FileRecordUncheckedCreateWithoutUploaderInput[] | $Types.Skip
    connectOrCreate?: FileRecordCreateOrConnectWithoutUploaderInput | FileRecordCreateOrConnectWithoutUploaderInput[] | $Types.Skip
    upsert?: FileRecordUpsertWithWhereUniqueWithoutUploaderInput | FileRecordUpsertWithWhereUniqueWithoutUploaderInput[] | $Types.Skip
    createMany?: FileRecordCreateManyUploaderInputEnvelope | $Types.Skip
    set?: FileRecordWhereUniqueInput | FileRecordWhereUniqueInput[] | $Types.Skip
    disconnect?: FileRecordWhereUniqueInput | FileRecordWhereUniqueInput[] | $Types.Skip
    delete?: FileRecordWhereUniqueInput | FileRecordWhereUniqueInput[] | $Types.Skip
    connect?: FileRecordWhereUniqueInput | FileRecordWhereUniqueInput[] | $Types.Skip
    update?: FileRecordUpdateWithWhereUniqueWithoutUploaderInput | FileRecordUpdateWithWhereUniqueWithoutUploaderInput[] | $Types.Skip
    updateMany?: FileRecordUpdateManyWithWhereWithoutUploaderInput | FileRecordUpdateManyWithWhereWithoutUploaderInput[] | $Types.Skip
    deleteMany?: FileRecordScalarWhereInput | FileRecordScalarWhereInput[] | $Types.Skip
  }

  export type PostUncheckedUpdateManyWithoutUploaderNestedInput = {
    create?: XOR<PostCreateWithoutUploaderInput, PostUncheckedCreateWithoutUploaderInput> | PostCreateWithoutUploaderInput[] | PostUncheckedCreateWithoutUploaderInput[] | $Types.Skip
    connectOrCreate?: PostCreateOrConnectWithoutUploaderInput | PostCreateOrConnectWithoutUploaderInput[] | $Types.Skip
    upsert?: PostUpsertWithWhereUniqueWithoutUploaderInput | PostUpsertWithWhereUniqueWithoutUploaderInput[] | $Types.Skip
    createMany?: PostCreateManyUploaderInputEnvelope | $Types.Skip
    set?: PostWhereUniqueInput | PostWhereUniqueInput[] | $Types.Skip
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[] | $Types.Skip
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[] | $Types.Skip
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[] | $Types.Skip
    update?: PostUpdateWithWhereUniqueWithoutUploaderInput | PostUpdateWithWhereUniqueWithoutUploaderInput[] | $Types.Skip
    updateMany?: PostUpdateManyWithWhereWithoutUploaderInput | PostUpdateManyWithWhereWithoutUploaderInput[] | $Types.Skip
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[] | $Types.Skip
  }

  export type CommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[] | $Types.Skip
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[] | $Types.Skip
    createMany?: CommentCreateManyUserInputEnvelope | $Types.Skip
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[] | $Types.Skip
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[] | $Types.Skip
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[] | $Types.Skip
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[] | $Types.Skip
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[] | $Types.Skip
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[] | $Types.Skip
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[] | $Types.Skip
  }

  export type ProjectUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ProjectCreateWithoutCreatorInput, ProjectUncheckedCreateWithoutCreatorInput> | ProjectCreateWithoutCreatorInput[] | ProjectUncheckedCreateWithoutCreatorInput[] | $Types.Skip
    connectOrCreate?: ProjectCreateOrConnectWithoutCreatorInput | ProjectCreateOrConnectWithoutCreatorInput[] | $Types.Skip
    upsert?: ProjectUpsertWithWhereUniqueWithoutCreatorInput | ProjectUpsertWithWhereUniqueWithoutCreatorInput[] | $Types.Skip
    createMany?: ProjectCreateManyCreatorInputEnvelope | $Types.Skip
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[] | $Types.Skip
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[] | $Types.Skip
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[] | $Types.Skip
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[] | $Types.Skip
    update?: ProjectUpdateWithWhereUniqueWithoutCreatorInput | ProjectUpdateWithWhereUniqueWithoutCreatorInput[] | $Types.Skip
    updateMany?: ProjectUpdateManyWithWhereWithoutCreatorInput | ProjectUpdateManyWithWhereWithoutCreatorInput[] | $Types.Skip
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[] | $Types.Skip
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedStringFilter<$PrismaModel> | string | $Types.Skip
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedStringNullableFilter<$PrismaModel> | string | null | $Types.Skip
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string | $Types.Skip
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedStringFilter<$PrismaModel> | $Types.Skip
    _max?: NestedStringFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntFilter<$PrismaModel> | number | $Types.Skip
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null | $Types.Skip
    _count?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _min?: NestedStringNullableFilter<$PrismaModel> | $Types.Skip
    _max?: NestedStringNullableFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null | $Types.Skip
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntNullableFilter<$PrismaModel> | number | null | $Types.Skip
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedDateTimeFilter<$PrismaModel> | $Types.Skip
    _max?: NestedDateTimeFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedEnumFileCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.FileCategory | EnumFileCategoryFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.FileCategory[] | ListEnumFileCategoryFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.FileCategory[] | ListEnumFileCategoryFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumFileCategoryFilter<$PrismaModel> | $Enums.FileCategory | $Types.Skip
  }

  export type NestedEnumProcessStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProcessStatus | EnumProcessStatusFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.ProcessStatus[] | ListEnumProcessStatusFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.ProcessStatus[] | ListEnumProcessStatusFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumProcessStatusFilter<$PrismaModel> | $Enums.ProcessStatus | $Types.Skip
  }

  export type NestedEnumFileCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FileCategory | EnumFileCategoryFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.FileCategory[] | ListEnumFileCategoryFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.FileCategory[] | ListEnumFileCategoryFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumFileCategoryWithAggregatesFilter<$PrismaModel> | $Enums.FileCategory | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedEnumFileCategoryFilter<$PrismaModel> | $Types.Skip
    _max?: NestedEnumFileCategoryFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedEnumProcessStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProcessStatus | EnumProcessStatusFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.ProcessStatus[] | ListEnumProcessStatusFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.ProcessStatus[] | ListEnumProcessStatusFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumProcessStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProcessStatus | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedEnumProcessStatusFilter<$PrismaModel> | $Types.Skip
    _max?: NestedEnumProcessStatusFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _avg?: NestedFloatFilter<$PrismaModel> | $Types.Skip
    _sum?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _max?: NestedIntFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedFloatFilter<$PrismaModel> | number | $Types.Skip
  }

  export type NestedEnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus | $Types.Skip
  }

  export type NestedEnumProjectVisibilityFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectVisibility | EnumProjectVisibilityFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.ProjectVisibility[] | ListEnumProjectVisibilityFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.ProjectVisibility[] | ListEnumProjectVisibilityFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumProjectVisibilityFilter<$PrismaModel> | $Enums.ProjectVisibility | $Types.Skip
  }

  export type NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedEnumProjectStatusFilter<$PrismaModel> | $Types.Skip
    _max?: NestedEnumProjectStatusFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedEnumProjectVisibilityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectVisibility | EnumProjectVisibilityFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.ProjectVisibility[] | ListEnumProjectVisibilityFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.ProjectVisibility[] | ListEnumProjectVisibilityFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumProjectVisibilityWithAggregatesFilter<$PrismaModel> | $Enums.ProjectVisibility | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedEnumProjectVisibilityFilter<$PrismaModel> | $Types.Skip
    _max?: NestedEnumProjectVisibilityFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedEnumAssetTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetType | EnumAssetTypeFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.AssetType[] | ListEnumAssetTypeFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.AssetType[] | ListEnumAssetTypeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumAssetTypeFilter<$PrismaModel> | $Enums.AssetType | $Types.Skip
  }

  export type NestedEnumAssetTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetType | EnumAssetTypeFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.AssetType[] | ListEnumAssetTypeFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.AssetType[] | ListEnumAssetTypeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumAssetTypeWithAggregatesFilter<$PrismaModel> | $Enums.AssetType | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedEnumAssetTypeFilter<$PrismaModel> | $Types.Skip
    _max?: NestedEnumAssetTypeFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedEnumTeamRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.TeamRole | EnumTeamRoleFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.TeamRole[] | ListEnumTeamRoleFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.TeamRole[] | ListEnumTeamRoleFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumTeamRoleFilter<$PrismaModel> | $Enums.TeamRole | $Types.Skip
  }

  export type NestedEnumTeamRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TeamRole | EnumTeamRoleFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.TeamRole[] | ListEnumTeamRoleFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.TeamRole[] | ListEnumTeamRoleFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumTeamRoleWithAggregatesFilter<$PrismaModel> | $Enums.TeamRole | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedEnumTeamRoleFilter<$PrismaModel> | $Types.Skip
    _max?: NestedEnumTeamRoleFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role | $Types.Skip
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedEnumRoleFilter<$PrismaModel> | $Types.Skip
    _max?: NestedEnumRoleFilter<$PrismaModel> | $Types.Skip
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string | $Types.Skip
    userName: string
    email: string
    role?: $Enums.Role | $Types.Skip
    image?: string | null | $Types.Skip
    userCollection?: UserCreateuserCollectionInput | string[] | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    teamMembers?: TeamMemberCreateNestedManyWithoutUserInput | $Types.Skip
    fileRecords?: FileRecordCreateNestedManyWithoutUploaderInput | $Types.Skip
    posts?: PostCreateNestedManyWithoutUploaderInput | $Types.Skip
    comments?: CommentCreateNestedManyWithoutUserInput | $Types.Skip
    projects?: ProjectCreateNestedManyWithoutCreatorInput | $Types.Skip
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string | $Types.Skip
    userName: string
    email: string
    role?: $Enums.Role | $Types.Skip
    image?: string | null | $Types.Skip
    userCollection?: UserCreateuserCollectionInput | string[] | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    teamMembers?: TeamMemberUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    fileRecords?: FileRecordUncheckedCreateNestedManyWithoutUploaderInput | $Types.Skip
    posts?: PostUncheckedCreateNestedManyWithoutUploaderInput | $Types.Skip
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    projects?: ProjectUncheckedCreateNestedManyWithoutCreatorInput | $Types.Skip
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput | $Types.Skip
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput | $Types.Skip
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    userName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role | $Types.Skip
    image?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    userCollection?: UserUpdateuserCollectionInput | string[] | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    teamMembers?: TeamMemberUpdateManyWithoutUserNestedInput | $Types.Skip
    fileRecords?: FileRecordUpdateManyWithoutUploaderNestedInput | $Types.Skip
    posts?: PostUpdateManyWithoutUploaderNestedInput | $Types.Skip
    comments?: CommentUpdateManyWithoutUserNestedInput | $Types.Skip
    projects?: ProjectUpdateManyWithoutCreatorNestedInput | $Types.Skip
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    userName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role | $Types.Skip
    image?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    userCollection?: UserUpdateuserCollectionInput | string[] | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    teamMembers?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    fileRecords?: FileRecordUncheckedUpdateManyWithoutUploaderNestedInput | $Types.Skip
    posts?: PostUncheckedUpdateManyWithoutUploaderNestedInput | $Types.Skip
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    projects?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput | $Types.Skip
  }

  export type PostCreateWithoutCommentsInput = {
    id?: string | $Types.Skip
    shortId: string
    title: string
    category: string
    description?: string | null | $Types.Skip
    type: string
    keywords?: PostCreatekeywordsInput | string[] | $Types.Skip
    coverImage?: string | null | $Types.Skip
    images?: PostCreateimagesInput | string[] | $Types.Skip
    relatedPosts?: PostCreaterelatedPostsInput | string[] | $Types.Skip
    permission: string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    files?: FileRecordCreateNestedManyWithoutPostInput | $Types.Skip
    uploader: UserCreateNestedOneWithoutPostsInput
    team?: TeamCreateNestedOneWithoutPostsInput | $Types.Skip
    projectAssets?: ProjectAssetCreateNestedManyWithoutPostInput | $Types.Skip
  }

  export type PostUncheckedCreateWithoutCommentsInput = {
    id?: string | $Types.Skip
    shortId: string
    title: string
    category: string
    description?: string | null | $Types.Skip
    type: string
    keywords?: PostCreatekeywordsInput | string[] | $Types.Skip
    coverImage?: string | null | $Types.Skip
    images?: PostCreateimagesInput | string[] | $Types.Skip
    uploaderId: string
    relatedPosts?: PostCreaterelatedPostsInput | string[] | $Types.Skip
    permission: string
    teamId?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    files?: FileRecordUncheckedCreateNestedManyWithoutPostInput | $Types.Skip
    projectAssets?: ProjectAssetUncheckedCreateNestedManyWithoutPostInput | $Types.Skip
  }

  export type PostCreateOrConnectWithoutCommentsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
  }

  export type UserCreateWithoutCommentsInput = {
    id?: string | $Types.Skip
    userName: string
    email: string
    role?: $Enums.Role | $Types.Skip
    image?: string | null | $Types.Skip
    userCollection?: UserCreateuserCollectionInput | string[] | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    teamMembers?: TeamMemberCreateNestedManyWithoutUserInput | $Types.Skip
    accounts?: AccountCreateNestedManyWithoutUserInput | $Types.Skip
    fileRecords?: FileRecordCreateNestedManyWithoutUploaderInput | $Types.Skip
    posts?: PostCreateNestedManyWithoutUploaderInput | $Types.Skip
    projects?: ProjectCreateNestedManyWithoutCreatorInput | $Types.Skip
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: string | $Types.Skip
    userName: string
    email: string
    role?: $Enums.Role | $Types.Skip
    image?: string | null | $Types.Skip
    userCollection?: UserCreateuserCollectionInput | string[] | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    teamMembers?: TeamMemberUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    fileRecords?: FileRecordUncheckedCreateNestedManyWithoutUploaderInput | $Types.Skip
    posts?: PostUncheckedCreateNestedManyWithoutUploaderInput | $Types.Skip
    projects?: ProjectUncheckedCreateNestedManyWithoutCreatorInput | $Types.Skip
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type CommentCreateWithoutRepliesInput = {
    id?: string | $Types.Skip
    content: string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    post: PostCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput | $Types.Skip
  }

  export type CommentUncheckedCreateWithoutRepliesInput = {
    id?: string | $Types.Skip
    content: string
    postId: string
    userId: string
    parentId?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type CommentCreateOrConnectWithoutRepliesInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
  }

  export type CommentCreateWithoutParentInput = {
    id?: string | $Types.Skip
    content: string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    post: PostCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutCommentsInput
    replies?: CommentCreateNestedManyWithoutParentInput | $Types.Skip
  }

  export type CommentUncheckedCreateWithoutParentInput = {
    id?: string | $Types.Skip
    content: string
    postId: string
    userId: string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput | $Types.Skip
  }

  export type CommentCreateOrConnectWithoutParentInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput>
  }

  export type CommentCreateManyParentInputEnvelope = {
    data: CommentCreateManyParentInput | CommentCreateManyParentInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type PostUpsertWithoutCommentsInput = {
    update: XOR<PostUpdateWithoutCommentsInput, PostUncheckedUpdateWithoutCommentsInput>
    create: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    where?: PostWhereInput | $Types.Skip
  }

  export type PostUpdateToOneWithWhereWithoutCommentsInput = {
    where?: PostWhereInput | $Types.Skip
    data: XOR<PostUpdateWithoutCommentsInput, PostUncheckedUpdateWithoutCommentsInput>
  }

  export type PostUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    shortId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    category?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    type?: StringFieldUpdateOperationsInput | string | $Types.Skip
    keywords?: PostUpdatekeywordsInput | string[] | $Types.Skip
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    images?: PostUpdateimagesInput | string[] | $Types.Skip
    relatedPosts?: PostUpdaterelatedPostsInput | string[] | $Types.Skip
    permission?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    files?: FileRecordUpdateManyWithoutPostNestedInput | $Types.Skip
    uploader?: UserUpdateOneRequiredWithoutPostsNestedInput | $Types.Skip
    team?: TeamUpdateOneWithoutPostsNestedInput | $Types.Skip
    projectAssets?: ProjectAssetUpdateManyWithoutPostNestedInput | $Types.Skip
  }

  export type PostUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    shortId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    category?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    type?: StringFieldUpdateOperationsInput | string | $Types.Skip
    keywords?: PostUpdatekeywordsInput | string[] | $Types.Skip
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    images?: PostUpdateimagesInput | string[] | $Types.Skip
    uploaderId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    relatedPosts?: PostUpdaterelatedPostsInput | string[] | $Types.Skip
    permission?: StringFieldUpdateOperationsInput | string | $Types.Skip
    teamId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    files?: FileRecordUncheckedUpdateManyWithoutPostNestedInput | $Types.Skip
    projectAssets?: ProjectAssetUncheckedUpdateManyWithoutPostNestedInput | $Types.Skip
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput | $Types.Skip
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput | $Types.Skip
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    userName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role | $Types.Skip
    image?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    userCollection?: UserUpdateuserCollectionInput | string[] | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    teamMembers?: TeamMemberUpdateManyWithoutUserNestedInput | $Types.Skip
    accounts?: AccountUpdateManyWithoutUserNestedInput | $Types.Skip
    fileRecords?: FileRecordUpdateManyWithoutUploaderNestedInput | $Types.Skip
    posts?: PostUpdateManyWithoutUploaderNestedInput | $Types.Skip
    projects?: ProjectUpdateManyWithoutCreatorNestedInput | $Types.Skip
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    userName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role | $Types.Skip
    image?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    userCollection?: UserUpdateuserCollectionInput | string[] | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    teamMembers?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    fileRecords?: FileRecordUncheckedUpdateManyWithoutUploaderNestedInput | $Types.Skip
    posts?: PostUncheckedUpdateManyWithoutUploaderNestedInput | $Types.Skip
    projects?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput | $Types.Skip
  }

  export type CommentUpsertWithoutRepliesInput = {
    update: XOR<CommentUpdateWithoutRepliesInput, CommentUncheckedUpdateWithoutRepliesInput>
    create: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    where?: CommentWhereInput | $Types.Skip
  }

  export type CommentUpdateToOneWithWhereWithoutRepliesInput = {
    where?: CommentWhereInput | $Types.Skip
    data: XOR<CommentUpdateWithoutRepliesInput, CommentUncheckedUpdateWithoutRepliesInput>
  }

  export type CommentUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    content?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput | $Types.Skip
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput | $Types.Skip
    parent?: CommentUpdateOneWithoutRepliesNestedInput | $Types.Skip
  }

  export type CommentUncheckedUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    content?: StringFieldUpdateOperationsInput | string | $Types.Skip
    postId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    userId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    parentId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type CommentUpsertWithWhereUniqueWithoutParentInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutParentInput, CommentUncheckedUpdateWithoutParentInput>
    create: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutParentInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutParentInput, CommentUncheckedUpdateWithoutParentInput>
  }

  export type CommentUpdateManyWithWhereWithoutParentInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutParentInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[] | $Types.Skip
    OR?: CommentScalarWhereInput[] | $Types.Skip
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[] | $Types.Skip
    id?: StringFilter<"Comment"> | string | $Types.Skip
    content?: StringFilter<"Comment"> | string | $Types.Skip
    postId?: StringFilter<"Comment"> | string | $Types.Skip
    userId?: StringFilter<"Comment"> | string | $Types.Skip
    parentId?: StringNullableFilter<"Comment"> | string | null | $Types.Skip
    createdAt?: DateTimeFilter<"Comment"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Comment"> | Date | string | $Types.Skip
  }

  export type TeamCreateWithoutFilesInput = {
    id?: string | $Types.Skip
    name: string
    description?: string | null | $Types.Skip
    avatar?: string | null | $Types.Skip
    color?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    members?: TeamMemberCreateNestedManyWithoutTeamInput | $Types.Skip
    posts?: PostCreateNestedManyWithoutTeamInput | $Types.Skip
    projects?: ProjectCreateNestedManyWithoutTeamInput | $Types.Skip
  }

  export type TeamUncheckedCreateWithoutFilesInput = {
    id?: string | $Types.Skip
    name: string
    description?: string | null | $Types.Skip
    avatar?: string | null | $Types.Skip
    color?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    members?: TeamMemberUncheckedCreateNestedManyWithoutTeamInput | $Types.Skip
    posts?: PostUncheckedCreateNestedManyWithoutTeamInput | $Types.Skip
    projects?: ProjectUncheckedCreateNestedManyWithoutTeamInput | $Types.Skip
  }

  export type TeamCreateOrConnectWithoutFilesInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutFilesInput, TeamUncheckedCreateWithoutFilesInput>
  }

  export type UserCreateWithoutFileRecordsInput = {
    id?: string | $Types.Skip
    userName: string
    email: string
    role?: $Enums.Role | $Types.Skip
    image?: string | null | $Types.Skip
    userCollection?: UserCreateuserCollectionInput | string[] | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    teamMembers?: TeamMemberCreateNestedManyWithoutUserInput | $Types.Skip
    accounts?: AccountCreateNestedManyWithoutUserInput | $Types.Skip
    posts?: PostCreateNestedManyWithoutUploaderInput | $Types.Skip
    comments?: CommentCreateNestedManyWithoutUserInput | $Types.Skip
    projects?: ProjectCreateNestedManyWithoutCreatorInput | $Types.Skip
  }

  export type UserUncheckedCreateWithoutFileRecordsInput = {
    id?: string | $Types.Skip
    userName: string
    email: string
    role?: $Enums.Role | $Types.Skip
    image?: string | null | $Types.Skip
    userCollection?: UserCreateuserCollectionInput | string[] | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    teamMembers?: TeamMemberUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    posts?: PostUncheckedCreateNestedManyWithoutUploaderInput | $Types.Skip
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    projects?: ProjectUncheckedCreateNestedManyWithoutCreatorInput | $Types.Skip
  }

  export type UserCreateOrConnectWithoutFileRecordsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFileRecordsInput, UserUncheckedCreateWithoutFileRecordsInput>
  }

  export type PostCreateWithoutFilesInput = {
    id?: string | $Types.Skip
    shortId: string
    title: string
    category: string
    description?: string | null | $Types.Skip
    type: string
    keywords?: PostCreatekeywordsInput | string[] | $Types.Skip
    coverImage?: string | null | $Types.Skip
    images?: PostCreateimagesInput | string[] | $Types.Skip
    relatedPosts?: PostCreaterelatedPostsInput | string[] | $Types.Skip
    permission: string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    uploader: UserCreateNestedOneWithoutPostsInput
    team?: TeamCreateNestedOneWithoutPostsInput | $Types.Skip
    comments?: CommentCreateNestedManyWithoutPostInput | $Types.Skip
    projectAssets?: ProjectAssetCreateNestedManyWithoutPostInput | $Types.Skip
  }

  export type PostUncheckedCreateWithoutFilesInput = {
    id?: string | $Types.Skip
    shortId: string
    title: string
    category: string
    description?: string | null | $Types.Skip
    type: string
    keywords?: PostCreatekeywordsInput | string[] | $Types.Skip
    coverImage?: string | null | $Types.Skip
    images?: PostCreateimagesInput | string[] | $Types.Skip
    uploaderId: string
    relatedPosts?: PostCreaterelatedPostsInput | string[] | $Types.Skip
    permission: string
    teamId?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput | $Types.Skip
    projectAssets?: ProjectAssetUncheckedCreateNestedManyWithoutPostInput | $Types.Skip
  }

  export type PostCreateOrConnectWithoutFilesInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutFilesInput, PostUncheckedCreateWithoutFilesInput>
  }

  export type TeamUpsertWithoutFilesInput = {
    update: XOR<TeamUpdateWithoutFilesInput, TeamUncheckedUpdateWithoutFilesInput>
    create: XOR<TeamCreateWithoutFilesInput, TeamUncheckedCreateWithoutFilesInput>
    where?: TeamWhereInput | $Types.Skip
  }

  export type TeamUpdateToOneWithWhereWithoutFilesInput = {
    where?: TeamWhereInput | $Types.Skip
    data: XOR<TeamUpdateWithoutFilesInput, TeamUncheckedUpdateWithoutFilesInput>
  }

  export type TeamUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatar?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    color?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    members?: TeamMemberUpdateManyWithoutTeamNestedInput | $Types.Skip
    posts?: PostUpdateManyWithoutTeamNestedInput | $Types.Skip
    projects?: ProjectUpdateManyWithoutTeamNestedInput | $Types.Skip
  }

  export type TeamUncheckedUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatar?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    color?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    members?: TeamMemberUncheckedUpdateManyWithoutTeamNestedInput | $Types.Skip
    posts?: PostUncheckedUpdateManyWithoutTeamNestedInput | $Types.Skip
    projects?: ProjectUncheckedUpdateManyWithoutTeamNestedInput | $Types.Skip
  }

  export type UserUpsertWithoutFileRecordsInput = {
    update: XOR<UserUpdateWithoutFileRecordsInput, UserUncheckedUpdateWithoutFileRecordsInput>
    create: XOR<UserCreateWithoutFileRecordsInput, UserUncheckedCreateWithoutFileRecordsInput>
    where?: UserWhereInput | $Types.Skip
  }

  export type UserUpdateToOneWithWhereWithoutFileRecordsInput = {
    where?: UserWhereInput | $Types.Skip
    data: XOR<UserUpdateWithoutFileRecordsInput, UserUncheckedUpdateWithoutFileRecordsInput>
  }

  export type UserUpdateWithoutFileRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    userName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role | $Types.Skip
    image?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    userCollection?: UserUpdateuserCollectionInput | string[] | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    teamMembers?: TeamMemberUpdateManyWithoutUserNestedInput | $Types.Skip
    accounts?: AccountUpdateManyWithoutUserNestedInput | $Types.Skip
    posts?: PostUpdateManyWithoutUploaderNestedInput | $Types.Skip
    comments?: CommentUpdateManyWithoutUserNestedInput | $Types.Skip
    projects?: ProjectUpdateManyWithoutCreatorNestedInput | $Types.Skip
  }

  export type UserUncheckedUpdateWithoutFileRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    userName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role | $Types.Skip
    image?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    userCollection?: UserUpdateuserCollectionInput | string[] | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    teamMembers?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    posts?: PostUncheckedUpdateManyWithoutUploaderNestedInput | $Types.Skip
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    projects?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput | $Types.Skip
  }

  export type PostUpsertWithoutFilesInput = {
    update: XOR<PostUpdateWithoutFilesInput, PostUncheckedUpdateWithoutFilesInput>
    create: XOR<PostCreateWithoutFilesInput, PostUncheckedCreateWithoutFilesInput>
    where?: PostWhereInput | $Types.Skip
  }

  export type PostUpdateToOneWithWhereWithoutFilesInput = {
    where?: PostWhereInput | $Types.Skip
    data: XOR<PostUpdateWithoutFilesInput, PostUncheckedUpdateWithoutFilesInput>
  }

  export type PostUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    shortId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    category?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    type?: StringFieldUpdateOperationsInput | string | $Types.Skip
    keywords?: PostUpdatekeywordsInput | string[] | $Types.Skip
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    images?: PostUpdateimagesInput | string[] | $Types.Skip
    relatedPosts?: PostUpdaterelatedPostsInput | string[] | $Types.Skip
    permission?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    uploader?: UserUpdateOneRequiredWithoutPostsNestedInput | $Types.Skip
    team?: TeamUpdateOneWithoutPostsNestedInput | $Types.Skip
    comments?: CommentUpdateManyWithoutPostNestedInput | $Types.Skip
    projectAssets?: ProjectAssetUpdateManyWithoutPostNestedInput | $Types.Skip
  }

  export type PostUncheckedUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    shortId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    category?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    type?: StringFieldUpdateOperationsInput | string | $Types.Skip
    keywords?: PostUpdatekeywordsInput | string[] | $Types.Skip
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    images?: PostUpdateimagesInput | string[] | $Types.Skip
    uploaderId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    relatedPosts?: PostUpdaterelatedPostsInput | string[] | $Types.Skip
    permission?: StringFieldUpdateOperationsInput | string | $Types.Skip
    teamId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput | $Types.Skip
    projectAssets?: ProjectAssetUncheckedUpdateManyWithoutPostNestedInput | $Types.Skip
  }

  export type ProjectCreateWithoutPhasesInput = {
    id?: string | $Types.Skip
    name: string
    description?: string | null | $Types.Skip
    client?: string | null | $Types.Skip
    location?: string | null | $Types.Skip
    coverImage?: string | null | $Types.Skip
    status?: $Enums.ProjectStatus | $Types.Skip
    visibility?: $Enums.ProjectVisibility | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    team: TeamCreateNestedOneWithoutProjectsInput
    creator: UserCreateNestedOneWithoutProjectsInput
    assets?: ProjectAssetCreateNestedManyWithoutProjectInput | $Types.Skip
  }

  export type ProjectUncheckedCreateWithoutPhasesInput = {
    id?: string | $Types.Skip
    name: string
    description?: string | null | $Types.Skip
    client?: string | null | $Types.Skip
    location?: string | null | $Types.Skip
    coverImage?: string | null | $Types.Skip
    status?: $Enums.ProjectStatus | $Types.Skip
    visibility?: $Enums.ProjectVisibility | $Types.Skip
    teamId: string
    creatorId: string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    assets?: ProjectAssetUncheckedCreateNestedManyWithoutProjectInput | $Types.Skip
  }

  export type ProjectCreateOrConnectWithoutPhasesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutPhasesInput, ProjectUncheckedCreateWithoutPhasesInput>
  }

  export type ProjectAssetCreateWithoutPhaseInput = {
    id?: string | $Types.Skip
    name?: string | null | $Types.Skip
    description?: string | null | $Types.Skip
    type?: $Enums.AssetType | $Types.Skip
    sortOrder?: number | $Types.Skip
    url?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    parent?: ProjectAssetCreateNestedOneWithoutChildrenInput | $Types.Skip
    children?: ProjectAssetCreateNestedManyWithoutParentInput | $Types.Skip
    project: ProjectCreateNestedOneWithoutAssetsInput
    post?: PostCreateNestedOneWithoutProjectAssetsInput | $Types.Skip
  }

  export type ProjectAssetUncheckedCreateWithoutPhaseInput = {
    id?: string | $Types.Skip
    name?: string | null | $Types.Skip
    description?: string | null | $Types.Skip
    type?: $Enums.AssetType | $Types.Skip
    sortOrder?: number | $Types.Skip
    parentId?: string | null | $Types.Skip
    projectId: string
    postId?: string | null | $Types.Skip
    url?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    children?: ProjectAssetUncheckedCreateNestedManyWithoutParentInput | $Types.Skip
  }

  export type ProjectAssetCreateOrConnectWithoutPhaseInput = {
    where: ProjectAssetWhereUniqueInput
    create: XOR<ProjectAssetCreateWithoutPhaseInput, ProjectAssetUncheckedCreateWithoutPhaseInput>
  }

  export type ProjectAssetCreateManyPhaseInputEnvelope = {
    data: ProjectAssetCreateManyPhaseInput | ProjectAssetCreateManyPhaseInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type ProjectUpsertWithoutPhasesInput = {
    update: XOR<ProjectUpdateWithoutPhasesInput, ProjectUncheckedUpdateWithoutPhasesInput>
    create: XOR<ProjectCreateWithoutPhasesInput, ProjectUncheckedCreateWithoutPhasesInput>
    where?: ProjectWhereInput | $Types.Skip
  }

  export type ProjectUpdateToOneWithWhereWithoutPhasesInput = {
    where?: ProjectWhereInput | $Types.Skip
    data: XOR<ProjectUpdateWithoutPhasesInput, ProjectUncheckedUpdateWithoutPhasesInput>
  }

  export type ProjectUpdateWithoutPhasesInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    client?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    location?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus | $Types.Skip
    visibility?: EnumProjectVisibilityFieldUpdateOperationsInput | $Enums.ProjectVisibility | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    team?: TeamUpdateOneRequiredWithoutProjectsNestedInput | $Types.Skip
    creator?: UserUpdateOneRequiredWithoutProjectsNestedInput | $Types.Skip
    assets?: ProjectAssetUpdateManyWithoutProjectNestedInput | $Types.Skip
  }

  export type ProjectUncheckedUpdateWithoutPhasesInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    client?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    location?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus | $Types.Skip
    visibility?: EnumProjectVisibilityFieldUpdateOperationsInput | $Enums.ProjectVisibility | $Types.Skip
    teamId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    creatorId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    assets?: ProjectAssetUncheckedUpdateManyWithoutProjectNestedInput | $Types.Skip
  }

  export type ProjectAssetUpsertWithWhereUniqueWithoutPhaseInput = {
    where: ProjectAssetWhereUniqueInput
    update: XOR<ProjectAssetUpdateWithoutPhaseInput, ProjectAssetUncheckedUpdateWithoutPhaseInput>
    create: XOR<ProjectAssetCreateWithoutPhaseInput, ProjectAssetUncheckedCreateWithoutPhaseInput>
  }

  export type ProjectAssetUpdateWithWhereUniqueWithoutPhaseInput = {
    where: ProjectAssetWhereUniqueInput
    data: XOR<ProjectAssetUpdateWithoutPhaseInput, ProjectAssetUncheckedUpdateWithoutPhaseInput>
  }

  export type ProjectAssetUpdateManyWithWhereWithoutPhaseInput = {
    where: ProjectAssetScalarWhereInput
    data: XOR<ProjectAssetUpdateManyMutationInput, ProjectAssetUncheckedUpdateManyWithoutPhaseInput>
  }

  export type ProjectAssetScalarWhereInput = {
    AND?: ProjectAssetScalarWhereInput | ProjectAssetScalarWhereInput[] | $Types.Skip
    OR?: ProjectAssetScalarWhereInput[] | $Types.Skip
    NOT?: ProjectAssetScalarWhereInput | ProjectAssetScalarWhereInput[] | $Types.Skip
    id?: StringFilter<"ProjectAsset"> | string | $Types.Skip
    name?: StringNullableFilter<"ProjectAsset"> | string | null | $Types.Skip
    description?: StringNullableFilter<"ProjectAsset"> | string | null | $Types.Skip
    type?: EnumAssetTypeFilter<"ProjectAsset"> | $Enums.AssetType | $Types.Skip
    sortOrder?: IntFilter<"ProjectAsset"> | number | $Types.Skip
    parentId?: StringNullableFilter<"ProjectAsset"> | string | null | $Types.Skip
    projectId?: StringFilter<"ProjectAsset"> | string | $Types.Skip
    phaseId?: StringNullableFilter<"ProjectAsset"> | string | null | $Types.Skip
    postId?: StringNullableFilter<"ProjectAsset"> | string | null | $Types.Skip
    url?: StringNullableFilter<"ProjectAsset"> | string | null | $Types.Skip
    createdAt?: DateTimeFilter<"ProjectAsset"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"ProjectAsset"> | Date | string | $Types.Skip
  }

  export type FileRecordCreateWithoutPostInput = {
    id?: string | $Types.Skip
    shortId?: string | null | $Types.Skip
    name: string
    fileId: string
    viewerFileId?: string | null | $Types.Skip
    category?: $Enums.FileCategory | $Types.Skip
    extension?: string | null | $Types.Skip
    size?: string | $Types.Skip
    status?: $Enums.ProcessStatus | $Types.Skip
    errorMessage?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    team?: TeamCreateNestedOneWithoutFilesInput | $Types.Skip
    uploader: UserCreateNestedOneWithoutFileRecordsInput
  }

  export type FileRecordUncheckedCreateWithoutPostInput = {
    id?: string | $Types.Skip
    shortId?: string | null | $Types.Skip
    name: string
    fileId: string
    viewerFileId?: string | null | $Types.Skip
    category?: $Enums.FileCategory | $Types.Skip
    extension?: string | null | $Types.Skip
    size?: string | $Types.Skip
    status?: $Enums.ProcessStatus | $Types.Skip
    errorMessage?: string | null | $Types.Skip
    teamId?: string | null | $Types.Skip
    uploaderId: string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type FileRecordCreateOrConnectWithoutPostInput = {
    where: FileRecordWhereUniqueInput
    create: XOR<FileRecordCreateWithoutPostInput, FileRecordUncheckedCreateWithoutPostInput>
  }

  export type FileRecordCreateManyPostInputEnvelope = {
    data: FileRecordCreateManyPostInput | FileRecordCreateManyPostInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type UserCreateWithoutPostsInput = {
    id?: string | $Types.Skip
    userName: string
    email: string
    role?: $Enums.Role | $Types.Skip
    image?: string | null | $Types.Skip
    userCollection?: UserCreateuserCollectionInput | string[] | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    teamMembers?: TeamMemberCreateNestedManyWithoutUserInput | $Types.Skip
    accounts?: AccountCreateNestedManyWithoutUserInput | $Types.Skip
    fileRecords?: FileRecordCreateNestedManyWithoutUploaderInput | $Types.Skip
    comments?: CommentCreateNestedManyWithoutUserInput | $Types.Skip
    projects?: ProjectCreateNestedManyWithoutCreatorInput | $Types.Skip
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: string | $Types.Skip
    userName: string
    email: string
    role?: $Enums.Role | $Types.Skip
    image?: string | null | $Types.Skip
    userCollection?: UserCreateuserCollectionInput | string[] | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    teamMembers?: TeamMemberUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    fileRecords?: FileRecordUncheckedCreateNestedManyWithoutUploaderInput | $Types.Skip
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    projects?: ProjectUncheckedCreateNestedManyWithoutCreatorInput | $Types.Skip
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type TeamCreateWithoutPostsInput = {
    id?: string | $Types.Skip
    name: string
    description?: string | null | $Types.Skip
    avatar?: string | null | $Types.Skip
    color?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    members?: TeamMemberCreateNestedManyWithoutTeamInput | $Types.Skip
    files?: FileRecordCreateNestedManyWithoutTeamInput | $Types.Skip
    projects?: ProjectCreateNestedManyWithoutTeamInput | $Types.Skip
  }

  export type TeamUncheckedCreateWithoutPostsInput = {
    id?: string | $Types.Skip
    name: string
    description?: string | null | $Types.Skip
    avatar?: string | null | $Types.Skip
    color?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    members?: TeamMemberUncheckedCreateNestedManyWithoutTeamInput | $Types.Skip
    files?: FileRecordUncheckedCreateNestedManyWithoutTeamInput | $Types.Skip
    projects?: ProjectUncheckedCreateNestedManyWithoutTeamInput | $Types.Skip
  }

  export type TeamCreateOrConnectWithoutPostsInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutPostsInput, TeamUncheckedCreateWithoutPostsInput>
  }

  export type CommentCreateWithoutPostInput = {
    id?: string | $Types.Skip
    content: string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    user: UserCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput | $Types.Skip
    replies?: CommentCreateNestedManyWithoutParentInput | $Types.Skip
  }

  export type CommentUncheckedCreateWithoutPostInput = {
    id?: string | $Types.Skip
    content: string
    userId: string
    parentId?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput | $Types.Skip
  }

  export type CommentCreateOrConnectWithoutPostInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
  }

  export type CommentCreateManyPostInputEnvelope = {
    data: CommentCreateManyPostInput | CommentCreateManyPostInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type ProjectAssetCreateWithoutPostInput = {
    id?: string | $Types.Skip
    name?: string | null | $Types.Skip
    description?: string | null | $Types.Skip
    type?: $Enums.AssetType | $Types.Skip
    sortOrder?: number | $Types.Skip
    url?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    parent?: ProjectAssetCreateNestedOneWithoutChildrenInput | $Types.Skip
    children?: ProjectAssetCreateNestedManyWithoutParentInput | $Types.Skip
    project: ProjectCreateNestedOneWithoutAssetsInput
    phase?: PhaseCreateNestedOneWithoutRootAssetsInput | $Types.Skip
  }

  export type ProjectAssetUncheckedCreateWithoutPostInput = {
    id?: string | $Types.Skip
    name?: string | null | $Types.Skip
    description?: string | null | $Types.Skip
    type?: $Enums.AssetType | $Types.Skip
    sortOrder?: number | $Types.Skip
    parentId?: string | null | $Types.Skip
    projectId: string
    phaseId?: string | null | $Types.Skip
    url?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    children?: ProjectAssetUncheckedCreateNestedManyWithoutParentInput | $Types.Skip
  }

  export type ProjectAssetCreateOrConnectWithoutPostInput = {
    where: ProjectAssetWhereUniqueInput
    create: XOR<ProjectAssetCreateWithoutPostInput, ProjectAssetUncheckedCreateWithoutPostInput>
  }

  export type ProjectAssetCreateManyPostInputEnvelope = {
    data: ProjectAssetCreateManyPostInput | ProjectAssetCreateManyPostInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type FileRecordUpsertWithWhereUniqueWithoutPostInput = {
    where: FileRecordWhereUniqueInput
    update: XOR<FileRecordUpdateWithoutPostInput, FileRecordUncheckedUpdateWithoutPostInput>
    create: XOR<FileRecordCreateWithoutPostInput, FileRecordUncheckedCreateWithoutPostInput>
  }

  export type FileRecordUpdateWithWhereUniqueWithoutPostInput = {
    where: FileRecordWhereUniqueInput
    data: XOR<FileRecordUpdateWithoutPostInput, FileRecordUncheckedUpdateWithoutPostInput>
  }

  export type FileRecordUpdateManyWithWhereWithoutPostInput = {
    where: FileRecordScalarWhereInput
    data: XOR<FileRecordUpdateManyMutationInput, FileRecordUncheckedUpdateManyWithoutPostInput>
  }

  export type FileRecordScalarWhereInput = {
    AND?: FileRecordScalarWhereInput | FileRecordScalarWhereInput[] | $Types.Skip
    OR?: FileRecordScalarWhereInput[] | $Types.Skip
    NOT?: FileRecordScalarWhereInput | FileRecordScalarWhereInput[] | $Types.Skip
    id?: StringFilter<"FileRecord"> | string | $Types.Skip
    shortId?: StringNullableFilter<"FileRecord"> | string | null | $Types.Skip
    name?: StringFilter<"FileRecord"> | string | $Types.Skip
    fileId?: StringFilter<"FileRecord"> | string | $Types.Skip
    viewerFileId?: StringNullableFilter<"FileRecord"> | string | null | $Types.Skip
    category?: EnumFileCategoryFilter<"FileRecord"> | $Enums.FileCategory | $Types.Skip
    extension?: StringNullableFilter<"FileRecord"> | string | null | $Types.Skip
    size?: StringFilter<"FileRecord"> | string | $Types.Skip
    status?: EnumProcessStatusFilter<"FileRecord"> | $Enums.ProcessStatus | $Types.Skip
    errorMessage?: StringNullableFilter<"FileRecord"> | string | null | $Types.Skip
    teamId?: StringNullableFilter<"FileRecord"> | string | null | $Types.Skip
    uploaderId?: StringFilter<"FileRecord"> | string | $Types.Skip
    postId?: StringNullableFilter<"FileRecord"> | string | null | $Types.Skip
    createdAt?: DateTimeFilter<"FileRecord"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"FileRecord"> | Date | string | $Types.Skip
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput | $Types.Skip
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput | $Types.Skip
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    userName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role | $Types.Skip
    image?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    userCollection?: UserUpdateuserCollectionInput | string[] | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    teamMembers?: TeamMemberUpdateManyWithoutUserNestedInput | $Types.Skip
    accounts?: AccountUpdateManyWithoutUserNestedInput | $Types.Skip
    fileRecords?: FileRecordUpdateManyWithoutUploaderNestedInput | $Types.Skip
    comments?: CommentUpdateManyWithoutUserNestedInput | $Types.Skip
    projects?: ProjectUpdateManyWithoutCreatorNestedInput | $Types.Skip
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    userName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role | $Types.Skip
    image?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    userCollection?: UserUpdateuserCollectionInput | string[] | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    teamMembers?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    fileRecords?: FileRecordUncheckedUpdateManyWithoutUploaderNestedInput | $Types.Skip
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    projects?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput | $Types.Skip
  }

  export type TeamUpsertWithoutPostsInput = {
    update: XOR<TeamUpdateWithoutPostsInput, TeamUncheckedUpdateWithoutPostsInput>
    create: XOR<TeamCreateWithoutPostsInput, TeamUncheckedCreateWithoutPostsInput>
    where?: TeamWhereInput | $Types.Skip
  }

  export type TeamUpdateToOneWithWhereWithoutPostsInput = {
    where?: TeamWhereInput | $Types.Skip
    data: XOR<TeamUpdateWithoutPostsInput, TeamUncheckedUpdateWithoutPostsInput>
  }

  export type TeamUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatar?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    color?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    members?: TeamMemberUpdateManyWithoutTeamNestedInput | $Types.Skip
    files?: FileRecordUpdateManyWithoutTeamNestedInput | $Types.Skip
    projects?: ProjectUpdateManyWithoutTeamNestedInput | $Types.Skip
  }

  export type TeamUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatar?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    color?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    members?: TeamMemberUncheckedUpdateManyWithoutTeamNestedInput | $Types.Skip
    files?: FileRecordUncheckedUpdateManyWithoutTeamNestedInput | $Types.Skip
    projects?: ProjectUncheckedUpdateManyWithoutTeamNestedInput | $Types.Skip
  }

  export type CommentUpsertWithWhereUniqueWithoutPostInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutPostInput, CommentUncheckedUpdateWithoutPostInput>
    create: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutPostInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutPostInput, CommentUncheckedUpdateWithoutPostInput>
  }

  export type CommentUpdateManyWithWhereWithoutPostInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutPostInput>
  }

  export type ProjectAssetUpsertWithWhereUniqueWithoutPostInput = {
    where: ProjectAssetWhereUniqueInput
    update: XOR<ProjectAssetUpdateWithoutPostInput, ProjectAssetUncheckedUpdateWithoutPostInput>
    create: XOR<ProjectAssetCreateWithoutPostInput, ProjectAssetUncheckedCreateWithoutPostInput>
  }

  export type ProjectAssetUpdateWithWhereUniqueWithoutPostInput = {
    where: ProjectAssetWhereUniqueInput
    data: XOR<ProjectAssetUpdateWithoutPostInput, ProjectAssetUncheckedUpdateWithoutPostInput>
  }

  export type ProjectAssetUpdateManyWithWhereWithoutPostInput = {
    where: ProjectAssetScalarWhereInput
    data: XOR<ProjectAssetUpdateManyMutationInput, ProjectAssetUncheckedUpdateManyWithoutPostInput>
  }

  export type TeamCreateWithoutProjectsInput = {
    id?: string | $Types.Skip
    name: string
    description?: string | null | $Types.Skip
    avatar?: string | null | $Types.Skip
    color?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    members?: TeamMemberCreateNestedManyWithoutTeamInput | $Types.Skip
    posts?: PostCreateNestedManyWithoutTeamInput | $Types.Skip
    files?: FileRecordCreateNestedManyWithoutTeamInput | $Types.Skip
  }

  export type TeamUncheckedCreateWithoutProjectsInput = {
    id?: string | $Types.Skip
    name: string
    description?: string | null | $Types.Skip
    avatar?: string | null | $Types.Skip
    color?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    members?: TeamMemberUncheckedCreateNestedManyWithoutTeamInput | $Types.Skip
    posts?: PostUncheckedCreateNestedManyWithoutTeamInput | $Types.Skip
    files?: FileRecordUncheckedCreateNestedManyWithoutTeamInput | $Types.Skip
  }

  export type TeamCreateOrConnectWithoutProjectsInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutProjectsInput, TeamUncheckedCreateWithoutProjectsInput>
  }

  export type UserCreateWithoutProjectsInput = {
    id?: string | $Types.Skip
    userName: string
    email: string
    role?: $Enums.Role | $Types.Skip
    image?: string | null | $Types.Skip
    userCollection?: UserCreateuserCollectionInput | string[] | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    teamMembers?: TeamMemberCreateNestedManyWithoutUserInput | $Types.Skip
    accounts?: AccountCreateNestedManyWithoutUserInput | $Types.Skip
    fileRecords?: FileRecordCreateNestedManyWithoutUploaderInput | $Types.Skip
    posts?: PostCreateNestedManyWithoutUploaderInput | $Types.Skip
    comments?: CommentCreateNestedManyWithoutUserInput | $Types.Skip
  }

  export type UserUncheckedCreateWithoutProjectsInput = {
    id?: string | $Types.Skip
    userName: string
    email: string
    role?: $Enums.Role | $Types.Skip
    image?: string | null | $Types.Skip
    userCollection?: UserCreateuserCollectionInput | string[] | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    teamMembers?: TeamMemberUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    fileRecords?: FileRecordUncheckedCreateNestedManyWithoutUploaderInput | $Types.Skip
    posts?: PostUncheckedCreateNestedManyWithoutUploaderInput | $Types.Skip
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
  }

  export type UserCreateOrConnectWithoutProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
  }

  export type PhaseCreateWithoutProjectInput = {
    id?: string | $Types.Skip
    name: string
    sortOrder?: number | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    rootAssets?: ProjectAssetCreateNestedManyWithoutPhaseInput | $Types.Skip
  }

  export type PhaseUncheckedCreateWithoutProjectInput = {
    id?: string | $Types.Skip
    name: string
    sortOrder?: number | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    rootAssets?: ProjectAssetUncheckedCreateNestedManyWithoutPhaseInput | $Types.Skip
  }

  export type PhaseCreateOrConnectWithoutProjectInput = {
    where: PhaseWhereUniqueInput
    create: XOR<PhaseCreateWithoutProjectInput, PhaseUncheckedCreateWithoutProjectInput>
  }

  export type PhaseCreateManyProjectInputEnvelope = {
    data: PhaseCreateManyProjectInput | PhaseCreateManyProjectInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type ProjectAssetCreateWithoutProjectInput = {
    id?: string | $Types.Skip
    name?: string | null | $Types.Skip
    description?: string | null | $Types.Skip
    type?: $Enums.AssetType | $Types.Skip
    sortOrder?: number | $Types.Skip
    url?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    parent?: ProjectAssetCreateNestedOneWithoutChildrenInput | $Types.Skip
    children?: ProjectAssetCreateNestedManyWithoutParentInput | $Types.Skip
    phase?: PhaseCreateNestedOneWithoutRootAssetsInput | $Types.Skip
    post?: PostCreateNestedOneWithoutProjectAssetsInput | $Types.Skip
  }

  export type ProjectAssetUncheckedCreateWithoutProjectInput = {
    id?: string | $Types.Skip
    name?: string | null | $Types.Skip
    description?: string | null | $Types.Skip
    type?: $Enums.AssetType | $Types.Skip
    sortOrder?: number | $Types.Skip
    parentId?: string | null | $Types.Skip
    phaseId?: string | null | $Types.Skip
    postId?: string | null | $Types.Skip
    url?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    children?: ProjectAssetUncheckedCreateNestedManyWithoutParentInput | $Types.Skip
  }

  export type ProjectAssetCreateOrConnectWithoutProjectInput = {
    where: ProjectAssetWhereUniqueInput
    create: XOR<ProjectAssetCreateWithoutProjectInput, ProjectAssetUncheckedCreateWithoutProjectInput>
  }

  export type ProjectAssetCreateManyProjectInputEnvelope = {
    data: ProjectAssetCreateManyProjectInput | ProjectAssetCreateManyProjectInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type TeamUpsertWithoutProjectsInput = {
    update: XOR<TeamUpdateWithoutProjectsInput, TeamUncheckedUpdateWithoutProjectsInput>
    create: XOR<TeamCreateWithoutProjectsInput, TeamUncheckedCreateWithoutProjectsInput>
    where?: TeamWhereInput | $Types.Skip
  }

  export type TeamUpdateToOneWithWhereWithoutProjectsInput = {
    where?: TeamWhereInput | $Types.Skip
    data: XOR<TeamUpdateWithoutProjectsInput, TeamUncheckedUpdateWithoutProjectsInput>
  }

  export type TeamUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatar?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    color?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    members?: TeamMemberUpdateManyWithoutTeamNestedInput | $Types.Skip
    posts?: PostUpdateManyWithoutTeamNestedInput | $Types.Skip
    files?: FileRecordUpdateManyWithoutTeamNestedInput | $Types.Skip
  }

  export type TeamUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatar?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    color?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    members?: TeamMemberUncheckedUpdateManyWithoutTeamNestedInput | $Types.Skip
    posts?: PostUncheckedUpdateManyWithoutTeamNestedInput | $Types.Skip
    files?: FileRecordUncheckedUpdateManyWithoutTeamNestedInput | $Types.Skip
  }

  export type UserUpsertWithoutProjectsInput = {
    update: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    where?: UserWhereInput | $Types.Skip
  }

  export type UserUpdateToOneWithWhereWithoutProjectsInput = {
    where?: UserWhereInput | $Types.Skip
    data: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type UserUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    userName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role | $Types.Skip
    image?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    userCollection?: UserUpdateuserCollectionInput | string[] | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    teamMembers?: TeamMemberUpdateManyWithoutUserNestedInput | $Types.Skip
    accounts?: AccountUpdateManyWithoutUserNestedInput | $Types.Skip
    fileRecords?: FileRecordUpdateManyWithoutUploaderNestedInput | $Types.Skip
    posts?: PostUpdateManyWithoutUploaderNestedInput | $Types.Skip
    comments?: CommentUpdateManyWithoutUserNestedInput | $Types.Skip
  }

  export type UserUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    userName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role | $Types.Skip
    image?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    userCollection?: UserUpdateuserCollectionInput | string[] | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    teamMembers?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    fileRecords?: FileRecordUncheckedUpdateManyWithoutUploaderNestedInput | $Types.Skip
    posts?: PostUncheckedUpdateManyWithoutUploaderNestedInput | $Types.Skip
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
  }

  export type PhaseUpsertWithWhereUniqueWithoutProjectInput = {
    where: PhaseWhereUniqueInput
    update: XOR<PhaseUpdateWithoutProjectInput, PhaseUncheckedUpdateWithoutProjectInput>
    create: XOR<PhaseCreateWithoutProjectInput, PhaseUncheckedCreateWithoutProjectInput>
  }

  export type PhaseUpdateWithWhereUniqueWithoutProjectInput = {
    where: PhaseWhereUniqueInput
    data: XOR<PhaseUpdateWithoutProjectInput, PhaseUncheckedUpdateWithoutProjectInput>
  }

  export type PhaseUpdateManyWithWhereWithoutProjectInput = {
    where: PhaseScalarWhereInput
    data: XOR<PhaseUpdateManyMutationInput, PhaseUncheckedUpdateManyWithoutProjectInput>
  }

  export type PhaseScalarWhereInput = {
    AND?: PhaseScalarWhereInput | PhaseScalarWhereInput[] | $Types.Skip
    OR?: PhaseScalarWhereInput[] | $Types.Skip
    NOT?: PhaseScalarWhereInput | PhaseScalarWhereInput[] | $Types.Skip
    id?: StringFilter<"Phase"> | string | $Types.Skip
    name?: StringFilter<"Phase"> | string | $Types.Skip
    sortOrder?: IntFilter<"Phase"> | number | $Types.Skip
    projectId?: StringFilter<"Phase"> | string | $Types.Skip
    createdAt?: DateTimeFilter<"Phase"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Phase"> | Date | string | $Types.Skip
  }

  export type ProjectAssetUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectAssetWhereUniqueInput
    update: XOR<ProjectAssetUpdateWithoutProjectInput, ProjectAssetUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectAssetCreateWithoutProjectInput, ProjectAssetUncheckedCreateWithoutProjectInput>
  }

  export type ProjectAssetUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectAssetWhereUniqueInput
    data: XOR<ProjectAssetUpdateWithoutProjectInput, ProjectAssetUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectAssetUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectAssetScalarWhereInput
    data: XOR<ProjectAssetUpdateManyMutationInput, ProjectAssetUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectAssetCreateWithoutChildrenInput = {
    id?: string | $Types.Skip
    name?: string | null | $Types.Skip
    description?: string | null | $Types.Skip
    type?: $Enums.AssetType | $Types.Skip
    sortOrder?: number | $Types.Skip
    url?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    parent?: ProjectAssetCreateNestedOneWithoutChildrenInput | $Types.Skip
    project: ProjectCreateNestedOneWithoutAssetsInput
    phase?: PhaseCreateNestedOneWithoutRootAssetsInput | $Types.Skip
    post?: PostCreateNestedOneWithoutProjectAssetsInput | $Types.Skip
  }

  export type ProjectAssetUncheckedCreateWithoutChildrenInput = {
    id?: string | $Types.Skip
    name?: string | null | $Types.Skip
    description?: string | null | $Types.Skip
    type?: $Enums.AssetType | $Types.Skip
    sortOrder?: number | $Types.Skip
    parentId?: string | null | $Types.Skip
    projectId: string
    phaseId?: string | null | $Types.Skip
    postId?: string | null | $Types.Skip
    url?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type ProjectAssetCreateOrConnectWithoutChildrenInput = {
    where: ProjectAssetWhereUniqueInput
    create: XOR<ProjectAssetCreateWithoutChildrenInput, ProjectAssetUncheckedCreateWithoutChildrenInput>
  }

  export type ProjectAssetCreateWithoutParentInput = {
    id?: string | $Types.Skip
    name?: string | null | $Types.Skip
    description?: string | null | $Types.Skip
    type?: $Enums.AssetType | $Types.Skip
    sortOrder?: number | $Types.Skip
    url?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    children?: ProjectAssetCreateNestedManyWithoutParentInput | $Types.Skip
    project: ProjectCreateNestedOneWithoutAssetsInput
    phase?: PhaseCreateNestedOneWithoutRootAssetsInput | $Types.Skip
    post?: PostCreateNestedOneWithoutProjectAssetsInput | $Types.Skip
  }

  export type ProjectAssetUncheckedCreateWithoutParentInput = {
    id?: string | $Types.Skip
    name?: string | null | $Types.Skip
    description?: string | null | $Types.Skip
    type?: $Enums.AssetType | $Types.Skip
    sortOrder?: number | $Types.Skip
    projectId: string
    phaseId?: string | null | $Types.Skip
    postId?: string | null | $Types.Skip
    url?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    children?: ProjectAssetUncheckedCreateNestedManyWithoutParentInput | $Types.Skip
  }

  export type ProjectAssetCreateOrConnectWithoutParentInput = {
    where: ProjectAssetWhereUniqueInput
    create: XOR<ProjectAssetCreateWithoutParentInput, ProjectAssetUncheckedCreateWithoutParentInput>
  }

  export type ProjectAssetCreateManyParentInputEnvelope = {
    data: ProjectAssetCreateManyParentInput | ProjectAssetCreateManyParentInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type ProjectCreateWithoutAssetsInput = {
    id?: string | $Types.Skip
    name: string
    description?: string | null | $Types.Skip
    client?: string | null | $Types.Skip
    location?: string | null | $Types.Skip
    coverImage?: string | null | $Types.Skip
    status?: $Enums.ProjectStatus | $Types.Skip
    visibility?: $Enums.ProjectVisibility | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    team: TeamCreateNestedOneWithoutProjectsInput
    creator: UserCreateNestedOneWithoutProjectsInput
    phases?: PhaseCreateNestedManyWithoutProjectInput | $Types.Skip
  }

  export type ProjectUncheckedCreateWithoutAssetsInput = {
    id?: string | $Types.Skip
    name: string
    description?: string | null | $Types.Skip
    client?: string | null | $Types.Skip
    location?: string | null | $Types.Skip
    coverImage?: string | null | $Types.Skip
    status?: $Enums.ProjectStatus | $Types.Skip
    visibility?: $Enums.ProjectVisibility | $Types.Skip
    teamId: string
    creatorId: string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    phases?: PhaseUncheckedCreateNestedManyWithoutProjectInput | $Types.Skip
  }

  export type ProjectCreateOrConnectWithoutAssetsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutAssetsInput, ProjectUncheckedCreateWithoutAssetsInput>
  }

  export type PhaseCreateWithoutRootAssetsInput = {
    id?: string | $Types.Skip
    name: string
    sortOrder?: number | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    project: ProjectCreateNestedOneWithoutPhasesInput
  }

  export type PhaseUncheckedCreateWithoutRootAssetsInput = {
    id?: string | $Types.Skip
    name: string
    sortOrder?: number | $Types.Skip
    projectId: string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type PhaseCreateOrConnectWithoutRootAssetsInput = {
    where: PhaseWhereUniqueInput
    create: XOR<PhaseCreateWithoutRootAssetsInput, PhaseUncheckedCreateWithoutRootAssetsInput>
  }

  export type PostCreateWithoutProjectAssetsInput = {
    id?: string | $Types.Skip
    shortId: string
    title: string
    category: string
    description?: string | null | $Types.Skip
    type: string
    keywords?: PostCreatekeywordsInput | string[] | $Types.Skip
    coverImage?: string | null | $Types.Skip
    images?: PostCreateimagesInput | string[] | $Types.Skip
    relatedPosts?: PostCreaterelatedPostsInput | string[] | $Types.Skip
    permission: string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    files?: FileRecordCreateNestedManyWithoutPostInput | $Types.Skip
    uploader: UserCreateNestedOneWithoutPostsInput
    team?: TeamCreateNestedOneWithoutPostsInput | $Types.Skip
    comments?: CommentCreateNestedManyWithoutPostInput | $Types.Skip
  }

  export type PostUncheckedCreateWithoutProjectAssetsInput = {
    id?: string | $Types.Skip
    shortId: string
    title: string
    category: string
    description?: string | null | $Types.Skip
    type: string
    keywords?: PostCreatekeywordsInput | string[] | $Types.Skip
    coverImage?: string | null | $Types.Skip
    images?: PostCreateimagesInput | string[] | $Types.Skip
    uploaderId: string
    relatedPosts?: PostCreaterelatedPostsInput | string[] | $Types.Skip
    permission: string
    teamId?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    files?: FileRecordUncheckedCreateNestedManyWithoutPostInput | $Types.Skip
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput | $Types.Skip
  }

  export type PostCreateOrConnectWithoutProjectAssetsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutProjectAssetsInput, PostUncheckedCreateWithoutProjectAssetsInput>
  }

  export type ProjectAssetUpsertWithoutChildrenInput = {
    update: XOR<ProjectAssetUpdateWithoutChildrenInput, ProjectAssetUncheckedUpdateWithoutChildrenInput>
    create: XOR<ProjectAssetCreateWithoutChildrenInput, ProjectAssetUncheckedCreateWithoutChildrenInput>
    where?: ProjectAssetWhereInput | $Types.Skip
  }

  export type ProjectAssetUpdateToOneWithWhereWithoutChildrenInput = {
    where?: ProjectAssetWhereInput | $Types.Skip
    data: XOR<ProjectAssetUpdateWithoutChildrenInput, ProjectAssetUncheckedUpdateWithoutChildrenInput>
  }

  export type ProjectAssetUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType | $Types.Skip
    sortOrder?: IntFieldUpdateOperationsInput | number | $Types.Skip
    url?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    parent?: ProjectAssetUpdateOneWithoutChildrenNestedInput | $Types.Skip
    project?: ProjectUpdateOneRequiredWithoutAssetsNestedInput | $Types.Skip
    phase?: PhaseUpdateOneWithoutRootAssetsNestedInput | $Types.Skip
    post?: PostUpdateOneWithoutProjectAssetsNestedInput | $Types.Skip
  }

  export type ProjectAssetUncheckedUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType | $Types.Skip
    sortOrder?: IntFieldUpdateOperationsInput | number | $Types.Skip
    parentId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    projectId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    phaseId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    postId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    url?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type ProjectAssetUpsertWithWhereUniqueWithoutParentInput = {
    where: ProjectAssetWhereUniqueInput
    update: XOR<ProjectAssetUpdateWithoutParentInput, ProjectAssetUncheckedUpdateWithoutParentInput>
    create: XOR<ProjectAssetCreateWithoutParentInput, ProjectAssetUncheckedCreateWithoutParentInput>
  }

  export type ProjectAssetUpdateWithWhereUniqueWithoutParentInput = {
    where: ProjectAssetWhereUniqueInput
    data: XOR<ProjectAssetUpdateWithoutParentInput, ProjectAssetUncheckedUpdateWithoutParentInput>
  }

  export type ProjectAssetUpdateManyWithWhereWithoutParentInput = {
    where: ProjectAssetScalarWhereInput
    data: XOR<ProjectAssetUpdateManyMutationInput, ProjectAssetUncheckedUpdateManyWithoutParentInput>
  }

  export type ProjectUpsertWithoutAssetsInput = {
    update: XOR<ProjectUpdateWithoutAssetsInput, ProjectUncheckedUpdateWithoutAssetsInput>
    create: XOR<ProjectCreateWithoutAssetsInput, ProjectUncheckedCreateWithoutAssetsInput>
    where?: ProjectWhereInput | $Types.Skip
  }

  export type ProjectUpdateToOneWithWhereWithoutAssetsInput = {
    where?: ProjectWhereInput | $Types.Skip
    data: XOR<ProjectUpdateWithoutAssetsInput, ProjectUncheckedUpdateWithoutAssetsInput>
  }

  export type ProjectUpdateWithoutAssetsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    client?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    location?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus | $Types.Skip
    visibility?: EnumProjectVisibilityFieldUpdateOperationsInput | $Enums.ProjectVisibility | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    team?: TeamUpdateOneRequiredWithoutProjectsNestedInput | $Types.Skip
    creator?: UserUpdateOneRequiredWithoutProjectsNestedInput | $Types.Skip
    phases?: PhaseUpdateManyWithoutProjectNestedInput | $Types.Skip
  }

  export type ProjectUncheckedUpdateWithoutAssetsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    client?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    location?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus | $Types.Skip
    visibility?: EnumProjectVisibilityFieldUpdateOperationsInput | $Enums.ProjectVisibility | $Types.Skip
    teamId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    creatorId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    phases?: PhaseUncheckedUpdateManyWithoutProjectNestedInput | $Types.Skip
  }

  export type PhaseUpsertWithoutRootAssetsInput = {
    update: XOR<PhaseUpdateWithoutRootAssetsInput, PhaseUncheckedUpdateWithoutRootAssetsInput>
    create: XOR<PhaseCreateWithoutRootAssetsInput, PhaseUncheckedCreateWithoutRootAssetsInput>
    where?: PhaseWhereInput | $Types.Skip
  }

  export type PhaseUpdateToOneWithWhereWithoutRootAssetsInput = {
    where?: PhaseWhereInput | $Types.Skip
    data: XOR<PhaseUpdateWithoutRootAssetsInput, PhaseUncheckedUpdateWithoutRootAssetsInput>
  }

  export type PhaseUpdateWithoutRootAssetsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    sortOrder?: IntFieldUpdateOperationsInput | number | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    project?: ProjectUpdateOneRequiredWithoutPhasesNestedInput | $Types.Skip
  }

  export type PhaseUncheckedUpdateWithoutRootAssetsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    sortOrder?: IntFieldUpdateOperationsInput | number | $Types.Skip
    projectId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type PostUpsertWithoutProjectAssetsInput = {
    update: XOR<PostUpdateWithoutProjectAssetsInput, PostUncheckedUpdateWithoutProjectAssetsInput>
    create: XOR<PostCreateWithoutProjectAssetsInput, PostUncheckedCreateWithoutProjectAssetsInput>
    where?: PostWhereInput | $Types.Skip
  }

  export type PostUpdateToOneWithWhereWithoutProjectAssetsInput = {
    where?: PostWhereInput | $Types.Skip
    data: XOR<PostUpdateWithoutProjectAssetsInput, PostUncheckedUpdateWithoutProjectAssetsInput>
  }

  export type PostUpdateWithoutProjectAssetsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    shortId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    category?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    type?: StringFieldUpdateOperationsInput | string | $Types.Skip
    keywords?: PostUpdatekeywordsInput | string[] | $Types.Skip
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    images?: PostUpdateimagesInput | string[] | $Types.Skip
    relatedPosts?: PostUpdaterelatedPostsInput | string[] | $Types.Skip
    permission?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    files?: FileRecordUpdateManyWithoutPostNestedInput | $Types.Skip
    uploader?: UserUpdateOneRequiredWithoutPostsNestedInput | $Types.Skip
    team?: TeamUpdateOneWithoutPostsNestedInput | $Types.Skip
    comments?: CommentUpdateManyWithoutPostNestedInput | $Types.Skip
  }

  export type PostUncheckedUpdateWithoutProjectAssetsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    shortId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    category?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    type?: StringFieldUpdateOperationsInput | string | $Types.Skip
    keywords?: PostUpdatekeywordsInput | string[] | $Types.Skip
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    images?: PostUpdateimagesInput | string[] | $Types.Skip
    uploaderId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    relatedPosts?: PostUpdaterelatedPostsInput | string[] | $Types.Skip
    permission?: StringFieldUpdateOperationsInput | string | $Types.Skip
    teamId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    files?: FileRecordUncheckedUpdateManyWithoutPostNestedInput | $Types.Skip
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput | $Types.Skip
  }

  export type TeamMemberCreateWithoutTeamInput = {
    id?: string | $Types.Skip
    role?: $Enums.TeamRole | $Types.Skip
    joinedAt?: Date | string | $Types.Skip
    user: UserCreateNestedOneWithoutTeamMembersInput
  }

  export type TeamMemberUncheckedCreateWithoutTeamInput = {
    id?: string | $Types.Skip
    role?: $Enums.TeamRole | $Types.Skip
    userId: string
    joinedAt?: Date | string | $Types.Skip
  }

  export type TeamMemberCreateOrConnectWithoutTeamInput = {
    where: TeamMemberWhereUniqueInput
    create: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput>
  }

  export type TeamMemberCreateManyTeamInputEnvelope = {
    data: TeamMemberCreateManyTeamInput | TeamMemberCreateManyTeamInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type PostCreateWithoutTeamInput = {
    id?: string | $Types.Skip
    shortId: string
    title: string
    category: string
    description?: string | null | $Types.Skip
    type: string
    keywords?: PostCreatekeywordsInput | string[] | $Types.Skip
    coverImage?: string | null | $Types.Skip
    images?: PostCreateimagesInput | string[] | $Types.Skip
    relatedPosts?: PostCreaterelatedPostsInput | string[] | $Types.Skip
    permission: string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    files?: FileRecordCreateNestedManyWithoutPostInput | $Types.Skip
    uploader: UserCreateNestedOneWithoutPostsInput
    comments?: CommentCreateNestedManyWithoutPostInput | $Types.Skip
    projectAssets?: ProjectAssetCreateNestedManyWithoutPostInput | $Types.Skip
  }

  export type PostUncheckedCreateWithoutTeamInput = {
    id?: string | $Types.Skip
    shortId: string
    title: string
    category: string
    description?: string | null | $Types.Skip
    type: string
    keywords?: PostCreatekeywordsInput | string[] | $Types.Skip
    coverImage?: string | null | $Types.Skip
    images?: PostCreateimagesInput | string[] | $Types.Skip
    uploaderId: string
    relatedPosts?: PostCreaterelatedPostsInput | string[] | $Types.Skip
    permission: string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    files?: FileRecordUncheckedCreateNestedManyWithoutPostInput | $Types.Skip
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput | $Types.Skip
    projectAssets?: ProjectAssetUncheckedCreateNestedManyWithoutPostInput | $Types.Skip
  }

  export type PostCreateOrConnectWithoutTeamInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutTeamInput, PostUncheckedCreateWithoutTeamInput>
  }

  export type PostCreateManyTeamInputEnvelope = {
    data: PostCreateManyTeamInput | PostCreateManyTeamInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type FileRecordCreateWithoutTeamInput = {
    id?: string | $Types.Skip
    shortId?: string | null | $Types.Skip
    name: string
    fileId: string
    viewerFileId?: string | null | $Types.Skip
    category?: $Enums.FileCategory | $Types.Skip
    extension?: string | null | $Types.Skip
    size?: string | $Types.Skip
    status?: $Enums.ProcessStatus | $Types.Skip
    errorMessage?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    uploader: UserCreateNestedOneWithoutFileRecordsInput
    post?: PostCreateNestedOneWithoutFilesInput | $Types.Skip
  }

  export type FileRecordUncheckedCreateWithoutTeamInput = {
    id?: string | $Types.Skip
    shortId?: string | null | $Types.Skip
    name: string
    fileId: string
    viewerFileId?: string | null | $Types.Skip
    category?: $Enums.FileCategory | $Types.Skip
    extension?: string | null | $Types.Skip
    size?: string | $Types.Skip
    status?: $Enums.ProcessStatus | $Types.Skip
    errorMessage?: string | null | $Types.Skip
    uploaderId: string
    postId?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type FileRecordCreateOrConnectWithoutTeamInput = {
    where: FileRecordWhereUniqueInput
    create: XOR<FileRecordCreateWithoutTeamInput, FileRecordUncheckedCreateWithoutTeamInput>
  }

  export type FileRecordCreateManyTeamInputEnvelope = {
    data: FileRecordCreateManyTeamInput | FileRecordCreateManyTeamInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type ProjectCreateWithoutTeamInput = {
    id?: string | $Types.Skip
    name: string
    description?: string | null | $Types.Skip
    client?: string | null | $Types.Skip
    location?: string | null | $Types.Skip
    coverImage?: string | null | $Types.Skip
    status?: $Enums.ProjectStatus | $Types.Skip
    visibility?: $Enums.ProjectVisibility | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    creator: UserCreateNestedOneWithoutProjectsInput
    phases?: PhaseCreateNestedManyWithoutProjectInput | $Types.Skip
    assets?: ProjectAssetCreateNestedManyWithoutProjectInput | $Types.Skip
  }

  export type ProjectUncheckedCreateWithoutTeamInput = {
    id?: string | $Types.Skip
    name: string
    description?: string | null | $Types.Skip
    client?: string | null | $Types.Skip
    location?: string | null | $Types.Skip
    coverImage?: string | null | $Types.Skip
    status?: $Enums.ProjectStatus | $Types.Skip
    visibility?: $Enums.ProjectVisibility | $Types.Skip
    creatorId: string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    phases?: PhaseUncheckedCreateNestedManyWithoutProjectInput | $Types.Skip
    assets?: ProjectAssetUncheckedCreateNestedManyWithoutProjectInput | $Types.Skip
  }

  export type ProjectCreateOrConnectWithoutTeamInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutTeamInput, ProjectUncheckedCreateWithoutTeamInput>
  }

  export type ProjectCreateManyTeamInputEnvelope = {
    data: ProjectCreateManyTeamInput | ProjectCreateManyTeamInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type TeamMemberUpsertWithWhereUniqueWithoutTeamInput = {
    where: TeamMemberWhereUniqueInput
    update: XOR<TeamMemberUpdateWithoutTeamInput, TeamMemberUncheckedUpdateWithoutTeamInput>
    create: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput>
  }

  export type TeamMemberUpdateWithWhereUniqueWithoutTeamInput = {
    where: TeamMemberWhereUniqueInput
    data: XOR<TeamMemberUpdateWithoutTeamInput, TeamMemberUncheckedUpdateWithoutTeamInput>
  }

  export type TeamMemberUpdateManyWithWhereWithoutTeamInput = {
    where: TeamMemberScalarWhereInput
    data: XOR<TeamMemberUpdateManyMutationInput, TeamMemberUncheckedUpdateManyWithoutTeamInput>
  }

  export type TeamMemberScalarWhereInput = {
    AND?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[] | $Types.Skip
    OR?: TeamMemberScalarWhereInput[] | $Types.Skip
    NOT?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[] | $Types.Skip
    id?: StringFilter<"TeamMember"> | string | $Types.Skip
    role?: EnumTeamRoleFilter<"TeamMember"> | $Enums.TeamRole | $Types.Skip
    teamId?: StringFilter<"TeamMember"> | string | $Types.Skip
    userId?: StringFilter<"TeamMember"> | string | $Types.Skip
    joinedAt?: DateTimeFilter<"TeamMember"> | Date | string | $Types.Skip
  }

  export type PostUpsertWithWhereUniqueWithoutTeamInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutTeamInput, PostUncheckedUpdateWithoutTeamInput>
    create: XOR<PostCreateWithoutTeamInput, PostUncheckedCreateWithoutTeamInput>
  }

  export type PostUpdateWithWhereUniqueWithoutTeamInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutTeamInput, PostUncheckedUpdateWithoutTeamInput>
  }

  export type PostUpdateManyWithWhereWithoutTeamInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutTeamInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[] | $Types.Skip
    OR?: PostScalarWhereInput[] | $Types.Skip
    NOT?: PostScalarWhereInput | PostScalarWhereInput[] | $Types.Skip
    id?: StringFilter<"Post"> | string | $Types.Skip
    shortId?: StringFilter<"Post"> | string | $Types.Skip
    title?: StringFilter<"Post"> | string | $Types.Skip
    category?: StringFilter<"Post"> | string | $Types.Skip
    description?: StringNullableFilter<"Post"> | string | null | $Types.Skip
    type?: StringFilter<"Post"> | string | $Types.Skip
    keywords?: StringNullableListFilter<"Post"> | $Types.Skip
    coverImage?: StringNullableFilter<"Post"> | string | null | $Types.Skip
    images?: StringNullableListFilter<"Post"> | $Types.Skip
    uploaderId?: StringFilter<"Post"> | string | $Types.Skip
    relatedPosts?: StringNullableListFilter<"Post"> | $Types.Skip
    permission?: StringFilter<"Post"> | string | $Types.Skip
    teamId?: StringNullableFilter<"Post"> | string | null | $Types.Skip
    createdAt?: DateTimeFilter<"Post"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Post"> | Date | string | $Types.Skip
  }

  export type FileRecordUpsertWithWhereUniqueWithoutTeamInput = {
    where: FileRecordWhereUniqueInput
    update: XOR<FileRecordUpdateWithoutTeamInput, FileRecordUncheckedUpdateWithoutTeamInput>
    create: XOR<FileRecordCreateWithoutTeamInput, FileRecordUncheckedCreateWithoutTeamInput>
  }

  export type FileRecordUpdateWithWhereUniqueWithoutTeamInput = {
    where: FileRecordWhereUniqueInput
    data: XOR<FileRecordUpdateWithoutTeamInput, FileRecordUncheckedUpdateWithoutTeamInput>
  }

  export type FileRecordUpdateManyWithWhereWithoutTeamInput = {
    where: FileRecordScalarWhereInput
    data: XOR<FileRecordUpdateManyMutationInput, FileRecordUncheckedUpdateManyWithoutTeamInput>
  }

  export type ProjectUpsertWithWhereUniqueWithoutTeamInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutTeamInput, ProjectUncheckedUpdateWithoutTeamInput>
    create: XOR<ProjectCreateWithoutTeamInput, ProjectUncheckedCreateWithoutTeamInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutTeamInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutTeamInput, ProjectUncheckedUpdateWithoutTeamInput>
  }

  export type ProjectUpdateManyWithWhereWithoutTeamInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutTeamInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[] | $Types.Skip
    OR?: ProjectScalarWhereInput[] | $Types.Skip
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[] | $Types.Skip
    id?: StringFilter<"Project"> | string | $Types.Skip
    name?: StringFilter<"Project"> | string | $Types.Skip
    description?: StringNullableFilter<"Project"> | string | null | $Types.Skip
    client?: StringNullableFilter<"Project"> | string | null | $Types.Skip
    location?: StringNullableFilter<"Project"> | string | null | $Types.Skip
    coverImage?: StringNullableFilter<"Project"> | string | null | $Types.Skip
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus | $Types.Skip
    visibility?: EnumProjectVisibilityFilter<"Project"> | $Enums.ProjectVisibility | $Types.Skip
    teamId?: StringFilter<"Project"> | string | $Types.Skip
    creatorId?: StringFilter<"Project"> | string | $Types.Skip
    createdAt?: DateTimeFilter<"Project"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Project"> | Date | string | $Types.Skip
  }

  export type TeamCreateWithoutMembersInput = {
    id?: string | $Types.Skip
    name: string
    description?: string | null | $Types.Skip
    avatar?: string | null | $Types.Skip
    color?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    posts?: PostCreateNestedManyWithoutTeamInput | $Types.Skip
    files?: FileRecordCreateNestedManyWithoutTeamInput | $Types.Skip
    projects?: ProjectCreateNestedManyWithoutTeamInput | $Types.Skip
  }

  export type TeamUncheckedCreateWithoutMembersInput = {
    id?: string | $Types.Skip
    name: string
    description?: string | null | $Types.Skip
    avatar?: string | null | $Types.Skip
    color?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    posts?: PostUncheckedCreateNestedManyWithoutTeamInput | $Types.Skip
    files?: FileRecordUncheckedCreateNestedManyWithoutTeamInput | $Types.Skip
    projects?: ProjectUncheckedCreateNestedManyWithoutTeamInput | $Types.Skip
  }

  export type TeamCreateOrConnectWithoutMembersInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
  }

  export type UserCreateWithoutTeamMembersInput = {
    id?: string | $Types.Skip
    userName: string
    email: string
    role?: $Enums.Role | $Types.Skip
    image?: string | null | $Types.Skip
    userCollection?: UserCreateuserCollectionInput | string[] | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    accounts?: AccountCreateNestedManyWithoutUserInput | $Types.Skip
    fileRecords?: FileRecordCreateNestedManyWithoutUploaderInput | $Types.Skip
    posts?: PostCreateNestedManyWithoutUploaderInput | $Types.Skip
    comments?: CommentCreateNestedManyWithoutUserInput | $Types.Skip
    projects?: ProjectCreateNestedManyWithoutCreatorInput | $Types.Skip
  }

  export type UserUncheckedCreateWithoutTeamMembersInput = {
    id?: string | $Types.Skip
    userName: string
    email: string
    role?: $Enums.Role | $Types.Skip
    image?: string | null | $Types.Skip
    userCollection?: UserCreateuserCollectionInput | string[] | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    fileRecords?: FileRecordUncheckedCreateNestedManyWithoutUploaderInput | $Types.Skip
    posts?: PostUncheckedCreateNestedManyWithoutUploaderInput | $Types.Skip
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    projects?: ProjectUncheckedCreateNestedManyWithoutCreatorInput | $Types.Skip
  }

  export type UserCreateOrConnectWithoutTeamMembersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeamMembersInput, UserUncheckedCreateWithoutTeamMembersInput>
  }

  export type TeamUpsertWithoutMembersInput = {
    update: XOR<TeamUpdateWithoutMembersInput, TeamUncheckedUpdateWithoutMembersInput>
    create: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
    where?: TeamWhereInput | $Types.Skip
  }

  export type TeamUpdateToOneWithWhereWithoutMembersInput = {
    where?: TeamWhereInput | $Types.Skip
    data: XOR<TeamUpdateWithoutMembersInput, TeamUncheckedUpdateWithoutMembersInput>
  }

  export type TeamUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatar?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    color?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    posts?: PostUpdateManyWithoutTeamNestedInput | $Types.Skip
    files?: FileRecordUpdateManyWithoutTeamNestedInput | $Types.Skip
    projects?: ProjectUpdateManyWithoutTeamNestedInput | $Types.Skip
  }

  export type TeamUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatar?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    color?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    posts?: PostUncheckedUpdateManyWithoutTeamNestedInput | $Types.Skip
    files?: FileRecordUncheckedUpdateManyWithoutTeamNestedInput | $Types.Skip
    projects?: ProjectUncheckedUpdateManyWithoutTeamNestedInput | $Types.Skip
  }

  export type UserUpsertWithoutTeamMembersInput = {
    update: XOR<UserUpdateWithoutTeamMembersInput, UserUncheckedUpdateWithoutTeamMembersInput>
    create: XOR<UserCreateWithoutTeamMembersInput, UserUncheckedCreateWithoutTeamMembersInput>
    where?: UserWhereInput | $Types.Skip
  }

  export type UserUpdateToOneWithWhereWithoutTeamMembersInput = {
    where?: UserWhereInput | $Types.Skip
    data: XOR<UserUpdateWithoutTeamMembersInput, UserUncheckedUpdateWithoutTeamMembersInput>
  }

  export type UserUpdateWithoutTeamMembersInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    userName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role | $Types.Skip
    image?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    userCollection?: UserUpdateuserCollectionInput | string[] | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    accounts?: AccountUpdateManyWithoutUserNestedInput | $Types.Skip
    fileRecords?: FileRecordUpdateManyWithoutUploaderNestedInput | $Types.Skip
    posts?: PostUpdateManyWithoutUploaderNestedInput | $Types.Skip
    comments?: CommentUpdateManyWithoutUserNestedInput | $Types.Skip
    projects?: ProjectUpdateManyWithoutCreatorNestedInput | $Types.Skip
  }

  export type UserUncheckedUpdateWithoutTeamMembersInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    userName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role | $Types.Skip
    image?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    userCollection?: UserUpdateuserCollectionInput | string[] | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    fileRecords?: FileRecordUncheckedUpdateManyWithoutUploaderNestedInput | $Types.Skip
    posts?: PostUncheckedUpdateManyWithoutUploaderNestedInput | $Types.Skip
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    projects?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput | $Types.Skip
  }

  export type TeamMemberCreateWithoutUserInput = {
    id?: string | $Types.Skip
    role?: $Enums.TeamRole | $Types.Skip
    joinedAt?: Date | string | $Types.Skip
    team: TeamCreateNestedOneWithoutMembersInput
  }

  export type TeamMemberUncheckedCreateWithoutUserInput = {
    id?: string | $Types.Skip
    role?: $Enums.TeamRole | $Types.Skip
    teamId: string
    joinedAt?: Date | string | $Types.Skip
  }

  export type TeamMemberCreateOrConnectWithoutUserInput = {
    where: TeamMemberWhereUniqueInput
    create: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput>
  }

  export type TeamMemberCreateManyUserInputEnvelope = {
    data: TeamMemberCreateManyUserInput | TeamMemberCreateManyUserInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type AccountCreateWithoutUserInput = {
    id?: string | $Types.Skip
    password?: string | null | $Types.Skip
    provider: string
    providerAccountId: string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string | $Types.Skip
    password?: string | null | $Types.Skip
    provider: string
    providerAccountId: string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type FileRecordCreateWithoutUploaderInput = {
    id?: string | $Types.Skip
    shortId?: string | null | $Types.Skip
    name: string
    fileId: string
    viewerFileId?: string | null | $Types.Skip
    category?: $Enums.FileCategory | $Types.Skip
    extension?: string | null | $Types.Skip
    size?: string | $Types.Skip
    status?: $Enums.ProcessStatus | $Types.Skip
    errorMessage?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    team?: TeamCreateNestedOneWithoutFilesInput | $Types.Skip
    post?: PostCreateNestedOneWithoutFilesInput | $Types.Skip
  }

  export type FileRecordUncheckedCreateWithoutUploaderInput = {
    id?: string | $Types.Skip
    shortId?: string | null | $Types.Skip
    name: string
    fileId: string
    viewerFileId?: string | null | $Types.Skip
    category?: $Enums.FileCategory | $Types.Skip
    extension?: string | null | $Types.Skip
    size?: string | $Types.Skip
    status?: $Enums.ProcessStatus | $Types.Skip
    errorMessage?: string | null | $Types.Skip
    teamId?: string | null | $Types.Skip
    postId?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type FileRecordCreateOrConnectWithoutUploaderInput = {
    where: FileRecordWhereUniqueInput
    create: XOR<FileRecordCreateWithoutUploaderInput, FileRecordUncheckedCreateWithoutUploaderInput>
  }

  export type FileRecordCreateManyUploaderInputEnvelope = {
    data: FileRecordCreateManyUploaderInput | FileRecordCreateManyUploaderInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type PostCreateWithoutUploaderInput = {
    id?: string | $Types.Skip
    shortId: string
    title: string
    category: string
    description?: string | null | $Types.Skip
    type: string
    keywords?: PostCreatekeywordsInput | string[] | $Types.Skip
    coverImage?: string | null | $Types.Skip
    images?: PostCreateimagesInput | string[] | $Types.Skip
    relatedPosts?: PostCreaterelatedPostsInput | string[] | $Types.Skip
    permission: string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    files?: FileRecordCreateNestedManyWithoutPostInput | $Types.Skip
    team?: TeamCreateNestedOneWithoutPostsInput | $Types.Skip
    comments?: CommentCreateNestedManyWithoutPostInput | $Types.Skip
    projectAssets?: ProjectAssetCreateNestedManyWithoutPostInput | $Types.Skip
  }

  export type PostUncheckedCreateWithoutUploaderInput = {
    id?: string | $Types.Skip
    shortId: string
    title: string
    category: string
    description?: string | null | $Types.Skip
    type: string
    keywords?: PostCreatekeywordsInput | string[] | $Types.Skip
    coverImage?: string | null | $Types.Skip
    images?: PostCreateimagesInput | string[] | $Types.Skip
    relatedPosts?: PostCreaterelatedPostsInput | string[] | $Types.Skip
    permission: string
    teamId?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    files?: FileRecordUncheckedCreateNestedManyWithoutPostInput | $Types.Skip
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput | $Types.Skip
    projectAssets?: ProjectAssetUncheckedCreateNestedManyWithoutPostInput | $Types.Skip
  }

  export type PostCreateOrConnectWithoutUploaderInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutUploaderInput, PostUncheckedCreateWithoutUploaderInput>
  }

  export type PostCreateManyUploaderInputEnvelope = {
    data: PostCreateManyUploaderInput | PostCreateManyUploaderInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type CommentCreateWithoutUserInput = {
    id?: string | $Types.Skip
    content: string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    post: PostCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput | $Types.Skip
    replies?: CommentCreateNestedManyWithoutParentInput | $Types.Skip
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    id?: string | $Types.Skip
    content: string
    postId: string
    parentId?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput | $Types.Skip
  }

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentCreateManyUserInputEnvelope = {
    data: CommentCreateManyUserInput | CommentCreateManyUserInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type ProjectCreateWithoutCreatorInput = {
    id?: string | $Types.Skip
    name: string
    description?: string | null | $Types.Skip
    client?: string | null | $Types.Skip
    location?: string | null | $Types.Skip
    coverImage?: string | null | $Types.Skip
    status?: $Enums.ProjectStatus | $Types.Skip
    visibility?: $Enums.ProjectVisibility | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    team: TeamCreateNestedOneWithoutProjectsInput
    phases?: PhaseCreateNestedManyWithoutProjectInput | $Types.Skip
    assets?: ProjectAssetCreateNestedManyWithoutProjectInput | $Types.Skip
  }

  export type ProjectUncheckedCreateWithoutCreatorInput = {
    id?: string | $Types.Skip
    name: string
    description?: string | null | $Types.Skip
    client?: string | null | $Types.Skip
    location?: string | null | $Types.Skip
    coverImage?: string | null | $Types.Skip
    status?: $Enums.ProjectStatus | $Types.Skip
    visibility?: $Enums.ProjectVisibility | $Types.Skip
    teamId: string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    phases?: PhaseUncheckedCreateNestedManyWithoutProjectInput | $Types.Skip
    assets?: ProjectAssetUncheckedCreateNestedManyWithoutProjectInput | $Types.Skip
  }

  export type ProjectCreateOrConnectWithoutCreatorInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutCreatorInput, ProjectUncheckedCreateWithoutCreatorInput>
  }

  export type ProjectCreateManyCreatorInputEnvelope = {
    data: ProjectCreateManyCreatorInput | ProjectCreateManyCreatorInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type TeamMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: TeamMemberWhereUniqueInput
    update: XOR<TeamMemberUpdateWithoutUserInput, TeamMemberUncheckedUpdateWithoutUserInput>
    create: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput>
  }

  export type TeamMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: TeamMemberWhereUniqueInput
    data: XOR<TeamMemberUpdateWithoutUserInput, TeamMemberUncheckedUpdateWithoutUserInput>
  }

  export type TeamMemberUpdateManyWithWhereWithoutUserInput = {
    where: TeamMemberScalarWhereInput
    data: XOR<TeamMemberUpdateManyMutationInput, TeamMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[] | $Types.Skip
    OR?: AccountScalarWhereInput[] | $Types.Skip
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[] | $Types.Skip
    id?: StringFilter<"Account"> | string | $Types.Skip
    userId?: StringFilter<"Account"> | string | $Types.Skip
    password?: StringNullableFilter<"Account"> | string | null | $Types.Skip
    provider?: StringFilter<"Account"> | string | $Types.Skip
    providerAccountId?: StringFilter<"Account"> | string | $Types.Skip
    createdAt?: DateTimeFilter<"Account"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Account"> | Date | string | $Types.Skip
  }

  export type FileRecordUpsertWithWhereUniqueWithoutUploaderInput = {
    where: FileRecordWhereUniqueInput
    update: XOR<FileRecordUpdateWithoutUploaderInput, FileRecordUncheckedUpdateWithoutUploaderInput>
    create: XOR<FileRecordCreateWithoutUploaderInput, FileRecordUncheckedCreateWithoutUploaderInput>
  }

  export type FileRecordUpdateWithWhereUniqueWithoutUploaderInput = {
    where: FileRecordWhereUniqueInput
    data: XOR<FileRecordUpdateWithoutUploaderInput, FileRecordUncheckedUpdateWithoutUploaderInput>
  }

  export type FileRecordUpdateManyWithWhereWithoutUploaderInput = {
    where: FileRecordScalarWhereInput
    data: XOR<FileRecordUpdateManyMutationInput, FileRecordUncheckedUpdateManyWithoutUploaderInput>
  }

  export type PostUpsertWithWhereUniqueWithoutUploaderInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutUploaderInput, PostUncheckedUpdateWithoutUploaderInput>
    create: XOR<PostCreateWithoutUploaderInput, PostUncheckedCreateWithoutUploaderInput>
  }

  export type PostUpdateWithWhereUniqueWithoutUploaderInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutUploaderInput, PostUncheckedUpdateWithoutUploaderInput>
  }

  export type PostUpdateManyWithWhereWithoutUploaderInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutUploaderInput>
  }

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
  }

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectUpsertWithWhereUniqueWithoutCreatorInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutCreatorInput, ProjectUncheckedUpdateWithoutCreatorInput>
    create: XOR<ProjectCreateWithoutCreatorInput, ProjectUncheckedCreateWithoutCreatorInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutCreatorInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutCreatorInput, ProjectUncheckedUpdateWithoutCreatorInput>
  }

  export type ProjectUpdateManyWithWhereWithoutCreatorInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutCreatorInput>
  }

  export type CommentCreateManyParentInput = {
    id?: string | $Types.Skip
    content: string
    postId: string
    userId: string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type CommentUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    content?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput | $Types.Skip
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput | $Types.Skip
    replies?: CommentUpdateManyWithoutParentNestedInput | $Types.Skip
  }

  export type CommentUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    content?: StringFieldUpdateOperationsInput | string | $Types.Skip
    postId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    userId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput | $Types.Skip
  }

  export type CommentUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    content?: StringFieldUpdateOperationsInput | string | $Types.Skip
    postId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    userId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type ProjectAssetCreateManyPhaseInput = {
    id?: string | $Types.Skip
    name?: string | null | $Types.Skip
    description?: string | null | $Types.Skip
    type?: $Enums.AssetType | $Types.Skip
    sortOrder?: number | $Types.Skip
    parentId?: string | null | $Types.Skip
    projectId: string
    postId?: string | null | $Types.Skip
    url?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type ProjectAssetUpdateWithoutPhaseInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType | $Types.Skip
    sortOrder?: IntFieldUpdateOperationsInput | number | $Types.Skip
    url?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    parent?: ProjectAssetUpdateOneWithoutChildrenNestedInput | $Types.Skip
    children?: ProjectAssetUpdateManyWithoutParentNestedInput | $Types.Skip
    project?: ProjectUpdateOneRequiredWithoutAssetsNestedInput | $Types.Skip
    post?: PostUpdateOneWithoutProjectAssetsNestedInput | $Types.Skip
  }

  export type ProjectAssetUncheckedUpdateWithoutPhaseInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType | $Types.Skip
    sortOrder?: IntFieldUpdateOperationsInput | number | $Types.Skip
    parentId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    projectId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    postId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    url?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    children?: ProjectAssetUncheckedUpdateManyWithoutParentNestedInput | $Types.Skip
  }

  export type ProjectAssetUncheckedUpdateManyWithoutPhaseInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType | $Types.Skip
    sortOrder?: IntFieldUpdateOperationsInput | number | $Types.Skip
    parentId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    projectId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    postId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    url?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type FileRecordCreateManyPostInput = {
    id?: string | $Types.Skip
    shortId?: string | null | $Types.Skip
    name: string
    fileId: string
    viewerFileId?: string | null | $Types.Skip
    category?: $Enums.FileCategory | $Types.Skip
    extension?: string | null | $Types.Skip
    size?: string | $Types.Skip
    status?: $Enums.ProcessStatus | $Types.Skip
    errorMessage?: string | null | $Types.Skip
    teamId?: string | null | $Types.Skip
    uploaderId: string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type CommentCreateManyPostInput = {
    id?: string | $Types.Skip
    content: string
    userId: string
    parentId?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type ProjectAssetCreateManyPostInput = {
    id?: string | $Types.Skip
    name?: string | null | $Types.Skip
    description?: string | null | $Types.Skip
    type?: $Enums.AssetType | $Types.Skip
    sortOrder?: number | $Types.Skip
    parentId?: string | null | $Types.Skip
    projectId: string
    phaseId?: string | null | $Types.Skip
    url?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type FileRecordUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    shortId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    fileId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    viewerFileId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    category?: EnumFileCategoryFieldUpdateOperationsInput | $Enums.FileCategory | $Types.Skip
    extension?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    size?: StringFieldUpdateOperationsInput | string | $Types.Skip
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus | $Types.Skip
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    team?: TeamUpdateOneWithoutFilesNestedInput | $Types.Skip
    uploader?: UserUpdateOneRequiredWithoutFileRecordsNestedInput | $Types.Skip
  }

  export type FileRecordUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    shortId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    fileId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    viewerFileId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    category?: EnumFileCategoryFieldUpdateOperationsInput | $Enums.FileCategory | $Types.Skip
    extension?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    size?: StringFieldUpdateOperationsInput | string | $Types.Skip
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus | $Types.Skip
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    teamId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    uploaderId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type FileRecordUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    shortId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    fileId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    viewerFileId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    category?: EnumFileCategoryFieldUpdateOperationsInput | $Enums.FileCategory | $Types.Skip
    extension?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    size?: StringFieldUpdateOperationsInput | string | $Types.Skip
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus | $Types.Skip
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    teamId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    uploaderId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type CommentUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    content?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput | $Types.Skip
    parent?: CommentUpdateOneWithoutRepliesNestedInput | $Types.Skip
    replies?: CommentUpdateManyWithoutParentNestedInput | $Types.Skip
  }

  export type CommentUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    content?: StringFieldUpdateOperationsInput | string | $Types.Skip
    userId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    parentId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput | $Types.Skip
  }

  export type CommentUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    content?: StringFieldUpdateOperationsInput | string | $Types.Skip
    userId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    parentId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type ProjectAssetUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType | $Types.Skip
    sortOrder?: IntFieldUpdateOperationsInput | number | $Types.Skip
    url?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    parent?: ProjectAssetUpdateOneWithoutChildrenNestedInput | $Types.Skip
    children?: ProjectAssetUpdateManyWithoutParentNestedInput | $Types.Skip
    project?: ProjectUpdateOneRequiredWithoutAssetsNestedInput | $Types.Skip
    phase?: PhaseUpdateOneWithoutRootAssetsNestedInput | $Types.Skip
  }

  export type ProjectAssetUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType | $Types.Skip
    sortOrder?: IntFieldUpdateOperationsInput | number | $Types.Skip
    parentId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    projectId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    phaseId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    url?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    children?: ProjectAssetUncheckedUpdateManyWithoutParentNestedInput | $Types.Skip
  }

  export type ProjectAssetUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType | $Types.Skip
    sortOrder?: IntFieldUpdateOperationsInput | number | $Types.Skip
    parentId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    projectId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    phaseId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    url?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type PhaseCreateManyProjectInput = {
    id?: string | $Types.Skip
    name: string
    sortOrder?: number | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type ProjectAssetCreateManyProjectInput = {
    id?: string | $Types.Skip
    name?: string | null | $Types.Skip
    description?: string | null | $Types.Skip
    type?: $Enums.AssetType | $Types.Skip
    sortOrder?: number | $Types.Skip
    parentId?: string | null | $Types.Skip
    phaseId?: string | null | $Types.Skip
    postId?: string | null | $Types.Skip
    url?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type PhaseUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    sortOrder?: IntFieldUpdateOperationsInput | number | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    rootAssets?: ProjectAssetUpdateManyWithoutPhaseNestedInput | $Types.Skip
  }

  export type PhaseUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    sortOrder?: IntFieldUpdateOperationsInput | number | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    rootAssets?: ProjectAssetUncheckedUpdateManyWithoutPhaseNestedInput | $Types.Skip
  }

  export type PhaseUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    sortOrder?: IntFieldUpdateOperationsInput | number | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type ProjectAssetUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType | $Types.Skip
    sortOrder?: IntFieldUpdateOperationsInput | number | $Types.Skip
    url?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    parent?: ProjectAssetUpdateOneWithoutChildrenNestedInput | $Types.Skip
    children?: ProjectAssetUpdateManyWithoutParentNestedInput | $Types.Skip
    phase?: PhaseUpdateOneWithoutRootAssetsNestedInput | $Types.Skip
    post?: PostUpdateOneWithoutProjectAssetsNestedInput | $Types.Skip
  }

  export type ProjectAssetUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType | $Types.Skip
    sortOrder?: IntFieldUpdateOperationsInput | number | $Types.Skip
    parentId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    phaseId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    postId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    url?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    children?: ProjectAssetUncheckedUpdateManyWithoutParentNestedInput | $Types.Skip
  }

  export type ProjectAssetUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType | $Types.Skip
    sortOrder?: IntFieldUpdateOperationsInput | number | $Types.Skip
    parentId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    phaseId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    postId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    url?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type ProjectAssetCreateManyParentInput = {
    id?: string | $Types.Skip
    name?: string | null | $Types.Skip
    description?: string | null | $Types.Skip
    type?: $Enums.AssetType | $Types.Skip
    sortOrder?: number | $Types.Skip
    projectId: string
    phaseId?: string | null | $Types.Skip
    postId?: string | null | $Types.Skip
    url?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type ProjectAssetUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType | $Types.Skip
    sortOrder?: IntFieldUpdateOperationsInput | number | $Types.Skip
    url?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    children?: ProjectAssetUpdateManyWithoutParentNestedInput | $Types.Skip
    project?: ProjectUpdateOneRequiredWithoutAssetsNestedInput | $Types.Skip
    phase?: PhaseUpdateOneWithoutRootAssetsNestedInput | $Types.Skip
    post?: PostUpdateOneWithoutProjectAssetsNestedInput | $Types.Skip
  }

  export type ProjectAssetUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType | $Types.Skip
    sortOrder?: IntFieldUpdateOperationsInput | number | $Types.Skip
    projectId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    phaseId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    postId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    url?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    children?: ProjectAssetUncheckedUpdateManyWithoutParentNestedInput | $Types.Skip
  }

  export type ProjectAssetUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType | $Types.Skip
    sortOrder?: IntFieldUpdateOperationsInput | number | $Types.Skip
    projectId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    phaseId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    postId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    url?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type TeamMemberCreateManyTeamInput = {
    id?: string | $Types.Skip
    role?: $Enums.TeamRole | $Types.Skip
    userId: string
    joinedAt?: Date | string | $Types.Skip
  }

  export type PostCreateManyTeamInput = {
    id?: string | $Types.Skip
    shortId: string
    title: string
    category: string
    description?: string | null | $Types.Skip
    type: string
    keywords?: PostCreatekeywordsInput | string[] | $Types.Skip
    coverImage?: string | null | $Types.Skip
    images?: PostCreateimagesInput | string[] | $Types.Skip
    uploaderId: string
    relatedPosts?: PostCreaterelatedPostsInput | string[] | $Types.Skip
    permission: string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type FileRecordCreateManyTeamInput = {
    id?: string | $Types.Skip
    shortId?: string | null | $Types.Skip
    name: string
    fileId: string
    viewerFileId?: string | null | $Types.Skip
    category?: $Enums.FileCategory | $Types.Skip
    extension?: string | null | $Types.Skip
    size?: string | $Types.Skip
    status?: $Enums.ProcessStatus | $Types.Skip
    errorMessage?: string | null | $Types.Skip
    uploaderId: string
    postId?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type ProjectCreateManyTeamInput = {
    id?: string | $Types.Skip
    name: string
    description?: string | null | $Types.Skip
    client?: string | null | $Types.Skip
    location?: string | null | $Types.Skip
    coverImage?: string | null | $Types.Skip
    status?: $Enums.ProjectStatus | $Types.Skip
    visibility?: $Enums.ProjectVisibility | $Types.Skip
    creatorId: string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type TeamMemberUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    role?: EnumTeamRoleFieldUpdateOperationsInput | $Enums.TeamRole | $Types.Skip
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    user?: UserUpdateOneRequiredWithoutTeamMembersNestedInput | $Types.Skip
  }

  export type TeamMemberUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    role?: EnumTeamRoleFieldUpdateOperationsInput | $Enums.TeamRole | $Types.Skip
    userId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type TeamMemberUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    role?: EnumTeamRoleFieldUpdateOperationsInput | $Enums.TeamRole | $Types.Skip
    userId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type PostUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    shortId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    category?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    type?: StringFieldUpdateOperationsInput | string | $Types.Skip
    keywords?: PostUpdatekeywordsInput | string[] | $Types.Skip
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    images?: PostUpdateimagesInput | string[] | $Types.Skip
    relatedPosts?: PostUpdaterelatedPostsInput | string[] | $Types.Skip
    permission?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    files?: FileRecordUpdateManyWithoutPostNestedInput | $Types.Skip
    uploader?: UserUpdateOneRequiredWithoutPostsNestedInput | $Types.Skip
    comments?: CommentUpdateManyWithoutPostNestedInput | $Types.Skip
    projectAssets?: ProjectAssetUpdateManyWithoutPostNestedInput | $Types.Skip
  }

  export type PostUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    shortId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    category?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    type?: StringFieldUpdateOperationsInput | string | $Types.Skip
    keywords?: PostUpdatekeywordsInput | string[] | $Types.Skip
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    images?: PostUpdateimagesInput | string[] | $Types.Skip
    uploaderId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    relatedPosts?: PostUpdaterelatedPostsInput | string[] | $Types.Skip
    permission?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    files?: FileRecordUncheckedUpdateManyWithoutPostNestedInput | $Types.Skip
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput | $Types.Skip
    projectAssets?: ProjectAssetUncheckedUpdateManyWithoutPostNestedInput | $Types.Skip
  }

  export type PostUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    shortId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    category?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    type?: StringFieldUpdateOperationsInput | string | $Types.Skip
    keywords?: PostUpdatekeywordsInput | string[] | $Types.Skip
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    images?: PostUpdateimagesInput | string[] | $Types.Skip
    uploaderId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    relatedPosts?: PostUpdaterelatedPostsInput | string[] | $Types.Skip
    permission?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type FileRecordUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    shortId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    fileId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    viewerFileId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    category?: EnumFileCategoryFieldUpdateOperationsInput | $Enums.FileCategory | $Types.Skip
    extension?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    size?: StringFieldUpdateOperationsInput | string | $Types.Skip
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus | $Types.Skip
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    uploader?: UserUpdateOneRequiredWithoutFileRecordsNestedInput | $Types.Skip
    post?: PostUpdateOneWithoutFilesNestedInput | $Types.Skip
  }

  export type FileRecordUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    shortId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    fileId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    viewerFileId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    category?: EnumFileCategoryFieldUpdateOperationsInput | $Enums.FileCategory | $Types.Skip
    extension?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    size?: StringFieldUpdateOperationsInput | string | $Types.Skip
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus | $Types.Skip
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    uploaderId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    postId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type FileRecordUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    shortId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    fileId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    viewerFileId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    category?: EnumFileCategoryFieldUpdateOperationsInput | $Enums.FileCategory | $Types.Skip
    extension?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    size?: StringFieldUpdateOperationsInput | string | $Types.Skip
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus | $Types.Skip
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    uploaderId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    postId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type ProjectUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    client?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    location?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus | $Types.Skip
    visibility?: EnumProjectVisibilityFieldUpdateOperationsInput | $Enums.ProjectVisibility | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    creator?: UserUpdateOneRequiredWithoutProjectsNestedInput | $Types.Skip
    phases?: PhaseUpdateManyWithoutProjectNestedInput | $Types.Skip
    assets?: ProjectAssetUpdateManyWithoutProjectNestedInput | $Types.Skip
  }

  export type ProjectUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    client?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    location?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus | $Types.Skip
    visibility?: EnumProjectVisibilityFieldUpdateOperationsInput | $Enums.ProjectVisibility | $Types.Skip
    creatorId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    phases?: PhaseUncheckedUpdateManyWithoutProjectNestedInput | $Types.Skip
    assets?: ProjectAssetUncheckedUpdateManyWithoutProjectNestedInput | $Types.Skip
  }

  export type ProjectUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    client?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    location?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus | $Types.Skip
    visibility?: EnumProjectVisibilityFieldUpdateOperationsInput | $Enums.ProjectVisibility | $Types.Skip
    creatorId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type TeamMemberCreateManyUserInput = {
    id?: string | $Types.Skip
    role?: $Enums.TeamRole | $Types.Skip
    teamId: string
    joinedAt?: Date | string | $Types.Skip
  }

  export type AccountCreateManyUserInput = {
    id?: string | $Types.Skip
    password?: string | null | $Types.Skip
    provider: string
    providerAccountId: string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type FileRecordCreateManyUploaderInput = {
    id?: string | $Types.Skip
    shortId?: string | null | $Types.Skip
    name: string
    fileId: string
    viewerFileId?: string | null | $Types.Skip
    category?: $Enums.FileCategory | $Types.Skip
    extension?: string | null | $Types.Skip
    size?: string | $Types.Skip
    status?: $Enums.ProcessStatus | $Types.Skip
    errorMessage?: string | null | $Types.Skip
    teamId?: string | null | $Types.Skip
    postId?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type PostCreateManyUploaderInput = {
    id?: string | $Types.Skip
    shortId: string
    title: string
    category: string
    description?: string | null | $Types.Skip
    type: string
    keywords?: PostCreatekeywordsInput | string[] | $Types.Skip
    coverImage?: string | null | $Types.Skip
    images?: PostCreateimagesInput | string[] | $Types.Skip
    relatedPosts?: PostCreaterelatedPostsInput | string[] | $Types.Skip
    permission: string
    teamId?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type CommentCreateManyUserInput = {
    id?: string | $Types.Skip
    content: string
    postId: string
    parentId?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type ProjectCreateManyCreatorInput = {
    id?: string | $Types.Skip
    name: string
    description?: string | null | $Types.Skip
    client?: string | null | $Types.Skip
    location?: string | null | $Types.Skip
    coverImage?: string | null | $Types.Skip
    status?: $Enums.ProjectStatus | $Types.Skip
    visibility?: $Enums.ProjectVisibility | $Types.Skip
    teamId: string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type TeamMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    role?: EnumTeamRoleFieldUpdateOperationsInput | $Enums.TeamRole | $Types.Skip
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    team?: TeamUpdateOneRequiredWithoutMembersNestedInput | $Types.Skip
  }

  export type TeamMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    role?: EnumTeamRoleFieldUpdateOperationsInput | $Enums.TeamRole | $Types.Skip
    teamId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type TeamMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    role?: EnumTeamRoleFieldUpdateOperationsInput | $Enums.TeamRole | $Types.Skip
    teamId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    provider?: StringFieldUpdateOperationsInput | string | $Types.Skip
    providerAccountId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    provider?: StringFieldUpdateOperationsInput | string | $Types.Skip
    providerAccountId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    provider?: StringFieldUpdateOperationsInput | string | $Types.Skip
    providerAccountId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type FileRecordUpdateWithoutUploaderInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    shortId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    fileId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    viewerFileId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    category?: EnumFileCategoryFieldUpdateOperationsInput | $Enums.FileCategory | $Types.Skip
    extension?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    size?: StringFieldUpdateOperationsInput | string | $Types.Skip
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus | $Types.Skip
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    team?: TeamUpdateOneWithoutFilesNestedInput | $Types.Skip
    post?: PostUpdateOneWithoutFilesNestedInput | $Types.Skip
  }

  export type FileRecordUncheckedUpdateWithoutUploaderInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    shortId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    fileId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    viewerFileId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    category?: EnumFileCategoryFieldUpdateOperationsInput | $Enums.FileCategory | $Types.Skip
    extension?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    size?: StringFieldUpdateOperationsInput | string | $Types.Skip
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus | $Types.Skip
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    teamId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    postId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type FileRecordUncheckedUpdateManyWithoutUploaderInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    shortId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    fileId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    viewerFileId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    category?: EnumFileCategoryFieldUpdateOperationsInput | $Enums.FileCategory | $Types.Skip
    extension?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    size?: StringFieldUpdateOperationsInput | string | $Types.Skip
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus | $Types.Skip
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    teamId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    postId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type PostUpdateWithoutUploaderInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    shortId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    category?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    type?: StringFieldUpdateOperationsInput | string | $Types.Skip
    keywords?: PostUpdatekeywordsInput | string[] | $Types.Skip
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    images?: PostUpdateimagesInput | string[] | $Types.Skip
    relatedPosts?: PostUpdaterelatedPostsInput | string[] | $Types.Skip
    permission?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    files?: FileRecordUpdateManyWithoutPostNestedInput | $Types.Skip
    team?: TeamUpdateOneWithoutPostsNestedInput | $Types.Skip
    comments?: CommentUpdateManyWithoutPostNestedInput | $Types.Skip
    projectAssets?: ProjectAssetUpdateManyWithoutPostNestedInput | $Types.Skip
  }

  export type PostUncheckedUpdateWithoutUploaderInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    shortId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    category?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    type?: StringFieldUpdateOperationsInput | string | $Types.Skip
    keywords?: PostUpdatekeywordsInput | string[] | $Types.Skip
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    images?: PostUpdateimagesInput | string[] | $Types.Skip
    relatedPosts?: PostUpdaterelatedPostsInput | string[] | $Types.Skip
    permission?: StringFieldUpdateOperationsInput | string | $Types.Skip
    teamId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    files?: FileRecordUncheckedUpdateManyWithoutPostNestedInput | $Types.Skip
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput | $Types.Skip
    projectAssets?: ProjectAssetUncheckedUpdateManyWithoutPostNestedInput | $Types.Skip
  }

  export type PostUncheckedUpdateManyWithoutUploaderInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    shortId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    category?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    type?: StringFieldUpdateOperationsInput | string | $Types.Skip
    keywords?: PostUpdatekeywordsInput | string[] | $Types.Skip
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    images?: PostUpdateimagesInput | string[] | $Types.Skip
    relatedPosts?: PostUpdaterelatedPostsInput | string[] | $Types.Skip
    permission?: StringFieldUpdateOperationsInput | string | $Types.Skip
    teamId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type CommentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    content?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput | $Types.Skip
    parent?: CommentUpdateOneWithoutRepliesNestedInput | $Types.Skip
    replies?: CommentUpdateManyWithoutParentNestedInput | $Types.Skip
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    content?: StringFieldUpdateOperationsInput | string | $Types.Skip
    postId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    parentId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput | $Types.Skip
  }

  export type CommentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    content?: StringFieldUpdateOperationsInput | string | $Types.Skip
    postId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    parentId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type ProjectUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    client?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    location?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus | $Types.Skip
    visibility?: EnumProjectVisibilityFieldUpdateOperationsInput | $Enums.ProjectVisibility | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    team?: TeamUpdateOneRequiredWithoutProjectsNestedInput | $Types.Skip
    phases?: PhaseUpdateManyWithoutProjectNestedInput | $Types.Skip
    assets?: ProjectAssetUpdateManyWithoutProjectNestedInput | $Types.Skip
  }

  export type ProjectUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    client?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    location?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus | $Types.Skip
    visibility?: EnumProjectVisibilityFieldUpdateOperationsInput | $Enums.ProjectVisibility | $Types.Skip
    teamId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    phases?: PhaseUncheckedUpdateManyWithoutProjectNestedInput | $Types.Skip
    assets?: ProjectAssetUncheckedUpdateManyWithoutProjectNestedInput | $Types.Skip
  }

  export type ProjectUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    client?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    location?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus | $Types.Skip
    visibility?: EnumProjectVisibilityFieldUpdateOperationsInput | $Enums.ProjectVisibility | $Types.Skip
    teamId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
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