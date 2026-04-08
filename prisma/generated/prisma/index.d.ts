
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
 * Model Model
 * 
 */
export type Model = $Result.DefaultSelection<Prisma.$ModelPayload>
/**
 * Model Pdf
 * 
 */
export type Pdf = $Result.DefaultSelection<Prisma.$PdfPayload>
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
   * `prisma.model`: Exposes CRUD operations for the **Model** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Models
    * const models = await prisma.model.findMany()
    * ```
    */
  get model(): Prisma.ModelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pdf`: Exposes CRUD operations for the **Pdf** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pdfs
    * const pdfs = await prisma.pdf.findMany()
    * ```
    */
  get pdf(): Prisma.PdfDelegate<ExtArgs, ClientOptions>;

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
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
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
    Model: 'Model',
    Pdf: 'Pdf',
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
      modelProps: "account" | "comment" | "fileRecord" | "model" | "pdf" | "phase" | "post" | "project" | "projectAsset" | "team" | "teamMember" | "user"
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
      Model: {
        payload: Prisma.$ModelPayload<ExtArgs>
        fields: Prisma.ModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          findFirst: {
            args: Prisma.ModelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          findMany: {
            args: Prisma.ModelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>[]
          }
          create: {
            args: Prisma.ModelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          createMany: {
            args: Prisma.ModelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>[]
          }
          delete: {
            args: Prisma.ModelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          update: {
            args: Prisma.ModelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          deleteMany: {
            args: Prisma.ModelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>[]
          }
          upsert: {
            args: Prisma.ModelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          aggregate: {
            args: Prisma.ModelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModel>
          }
          groupBy: {
            args: Prisma.ModelGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModelGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModelCountArgs<ExtArgs>
            result: $Utils.Optional<ModelCountAggregateOutputType> | number
          }
        }
      }
      Pdf: {
        payload: Prisma.$PdfPayload<ExtArgs>
        fields: Prisma.PdfFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PdfFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PdfPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PdfFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PdfPayload>
          }
          findFirst: {
            args: Prisma.PdfFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PdfPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PdfFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PdfPayload>
          }
          findMany: {
            args: Prisma.PdfFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PdfPayload>[]
          }
          create: {
            args: Prisma.PdfCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PdfPayload>
          }
          createMany: {
            args: Prisma.PdfCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PdfCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PdfPayload>[]
          }
          delete: {
            args: Prisma.PdfDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PdfPayload>
          }
          update: {
            args: Prisma.PdfUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PdfPayload>
          }
          deleteMany: {
            args: Prisma.PdfDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PdfUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PdfUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PdfPayload>[]
          }
          upsert: {
            args: Prisma.PdfUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PdfPayload>
          }
          aggregate: {
            args: Prisma.PdfAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePdf>
          }
          groupBy: {
            args: Prisma.PdfGroupByArgs<ExtArgs>
            result: $Utils.Optional<PdfGroupByOutputType>[]
          }
          count: {
            args: Prisma.PdfCountArgs<ExtArgs>
            result: $Utils.Optional<PdfCountAggregateOutputType> | number
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
    model?: ModelOmit
    pdf?: PdfOmit
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
    where?: CommentWhereInput
  }


  /**
   * Count Type ModelCountOutputType
   */

  export type ModelCountOutputType = {
    posts: number
  }

  export type ModelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | ModelCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * ModelCountOutputType without action
   */
  export type ModelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelCountOutputType
     */
    select?: ModelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModelCountOutputType without action
   */
  export type ModelCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }


  /**
   * Count Type PdfCountOutputType
   */

  export type PdfCountOutputType = {
    posts: number
  }

  export type PdfCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | PdfCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * PdfCountOutputType without action
   */
  export type PdfCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PdfCountOutputType
     */
    select?: PdfCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PdfCountOutputType without action
   */
  export type PdfCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }


  /**
   * Count Type PhaseCountOutputType
   */

  export type PhaseCountOutputType = {
    projectAssets: number
  }

  export type PhaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectAssets?: boolean | PhaseCountOutputTypeCountProjectAssetsArgs
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
  export type PhaseCountOutputTypeCountProjectAssetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectAssetWhereInput
  }


  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    models: number
    pdfIds: number
    files: number
    comments: number
    projectAssets: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    models?: boolean | PostCountOutputTypeCountModelsArgs
    pdfIds?: boolean | PostCountOutputTypeCountPdfIdsArgs
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
  export type PostCountOutputTypeCountModelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModelWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountPdfIdsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PdfWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileRecordWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountProjectAssetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectAssetWhereInput
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
    where?: PhaseWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountAssetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectAssetWhereInput
  }


  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    members: number
    posts: number
    projects: number
  }

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | TeamCountOutputTypeCountMembersArgs
    posts?: boolean | TeamCountOutputTypeCountPostsArgs
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
    where?: TeamMemberWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    teamMembers: number
    accounts: number
    models: number
    pdfs: number
    fileRecords: number
    posts: number
    comments: number
    projects: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teamMembers?: boolean | UserCountOutputTypeCountTeamMembersArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    models?: boolean | UserCountOutputTypeCountModelsArgs
    pdfs?: boolean | UserCountOutputTypeCountPdfsArgs
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
    where?: TeamMemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountModelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModelWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPdfsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PdfWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFileRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileRecordWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
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
    id?: true
    userId?: true
    password?: true
    provider?: true
    providerAccountId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    password?: true
    provider?: true
    providerAccountId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    password?: true
    provider?: true
    providerAccountId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
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
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
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
    id?: boolean
    userId?: boolean
    password?: boolean
    provider?: boolean
    providerAccountId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    password?: boolean
    provider?: boolean
    providerAccountId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    password?: boolean
    provider?: boolean
    providerAccountId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    password?: boolean
    provider?: boolean
    providerAccountId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "password" | "provider" | "providerAccountId" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
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
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
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
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
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
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
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
    skipDuplicates?: boolean
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
    skipDuplicates?: boolean
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
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
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
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
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
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
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
    id?: true
    content?: true
    postId?: true
    userId?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    content?: true
    postId?: true
    userId?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    content?: true
    postId?: true
    userId?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
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




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
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
    id?: boolean
    content?: boolean
    postId?: boolean
    userId?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
    replies?: boolean | Comment$repliesArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    postId?: boolean
    userId?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    postId?: boolean
    userId?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    content?: boolean
    postId?: boolean
    userId?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "postId" | "userId" | "parentId" | "createdAt" | "updatedAt", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
    replies?: boolean | Comment$repliesArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
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
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
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
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
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
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
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
    skipDuplicates?: boolean
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
    skipDuplicates?: boolean
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
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
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
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
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
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
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
    where?: CommentWhereInput
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
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
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
    uploaderId: number
    postId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FileRecordMinAggregateInputType = {
    id?: true
    shortId?: true
    name?: true
    fileId?: true
    viewerFileId?: true
    category?: true
    extension?: true
    size?: true
    status?: true
    errorMessage?: true
    uploaderId?: true
    postId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FileRecordMaxAggregateInputType = {
    id?: true
    shortId?: true
    name?: true
    fileId?: true
    viewerFileId?: true
    category?: true
    extension?: true
    size?: true
    status?: true
    errorMessage?: true
    uploaderId?: true
    postId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FileRecordCountAggregateInputType = {
    id?: true
    shortId?: true
    name?: true
    fileId?: true
    viewerFileId?: true
    category?: true
    extension?: true
    size?: true
    status?: true
    errorMessage?: true
    uploaderId?: true
    postId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FileRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FileRecord to aggregate.
     */
    where?: FileRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileRecords to fetch.
     */
    orderBy?: FileRecordOrderByWithRelationInput | FileRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FileRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileRecords.
     */
    skip?: number
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
    where?: FileRecordWhereInput
    orderBy?: FileRecordOrderByWithAggregationInput | FileRecordOrderByWithAggregationInput[]
    by: FileRecordScalarFieldEnum[] | FileRecordScalarFieldEnum
    having?: FileRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
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
    id?: boolean
    shortId?: boolean
    name?: boolean
    fileId?: boolean
    viewerFileId?: boolean
    category?: boolean
    extension?: boolean
    size?: boolean
    status?: boolean
    errorMessage?: boolean
    uploaderId?: boolean
    postId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    uploader?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | FileRecord$postArgs<ExtArgs>
  }, ExtArgs["result"]["fileRecord"]>

  export type FileRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shortId?: boolean
    name?: boolean
    fileId?: boolean
    viewerFileId?: boolean
    category?: boolean
    extension?: boolean
    size?: boolean
    status?: boolean
    errorMessage?: boolean
    uploaderId?: boolean
    postId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    uploader?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | FileRecord$postArgs<ExtArgs>
  }, ExtArgs["result"]["fileRecord"]>

  export type FileRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shortId?: boolean
    name?: boolean
    fileId?: boolean
    viewerFileId?: boolean
    category?: boolean
    extension?: boolean
    size?: boolean
    status?: boolean
    errorMessage?: boolean
    uploaderId?: boolean
    postId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    uploader?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | FileRecord$postArgs<ExtArgs>
  }, ExtArgs["result"]["fileRecord"]>

  export type FileRecordSelectScalar = {
    id?: boolean
    shortId?: boolean
    name?: boolean
    fileId?: boolean
    viewerFileId?: boolean
    category?: boolean
    extension?: boolean
    size?: boolean
    status?: boolean
    errorMessage?: boolean
    uploaderId?: boolean
    postId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FileRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shortId" | "name" | "fileId" | "viewerFileId" | "category" | "extension" | "size" | "status" | "errorMessage" | "uploaderId" | "postId" | "createdAt" | "updatedAt", ExtArgs["result"]["fileRecord"]>
  export type FileRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploader?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | FileRecord$postArgs<ExtArgs>
  }
  export type FileRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploader?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | FileRecord$postArgs<ExtArgs>
  }
  export type FileRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploader?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | FileRecord$postArgs<ExtArgs>
  }

  export type $FileRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FileRecord"
    objects: {
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
    where?: FileRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileRecords to fetch.
     */
    orderBy?: FileRecordOrderByWithRelationInput | FileRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FileRecords.
     */
    cursor?: FileRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileRecords.
     */
    distinct?: FileRecordScalarFieldEnum | FileRecordScalarFieldEnum[]
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
    where?: FileRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileRecords to fetch.
     */
    orderBy?: FileRecordOrderByWithRelationInput | FileRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FileRecords.
     */
    cursor?: FileRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileRecords.
     */
    distinct?: FileRecordScalarFieldEnum | FileRecordScalarFieldEnum[]
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
    where?: FileRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileRecords to fetch.
     */
    orderBy?: FileRecordOrderByWithRelationInput | FileRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FileRecords.
     */
    cursor?: FileRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileRecords.
     */
    distinct?: FileRecordScalarFieldEnum | FileRecordScalarFieldEnum[]
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
    skipDuplicates?: boolean
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
    skipDuplicates?: boolean
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
    where?: FileRecordWhereInput
    /**
     * Limit how many FileRecords to update.
     */
    limit?: number
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
    where?: FileRecordWhereInput
    /**
     * Limit how many FileRecords to update.
     */
    limit?: number
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
    where?: FileRecordWhereInput
    /**
     * Limit how many FileRecords to delete.
     */
    limit?: number
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
    where?: PostWhereInput
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
   * Model Model
   */

  export type AggregateModel = {
    _count: ModelCountAggregateOutputType | null
    _min: ModelMinAggregateOutputType | null
    _max: ModelMaxAggregateOutputType | null
  }

  export type ModelMinAggregateOutputType = {
    id: string | null
    shortId: string | null
    name: string | null
    fileId: string | null
    uploaderId: string | null
    size: string | null
    status: $Enums.ProcessStatus | null
    errorMessage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModelMaxAggregateOutputType = {
    id: string | null
    shortId: string | null
    name: string | null
    fileId: string | null
    uploaderId: string | null
    size: string | null
    status: $Enums.ProcessStatus | null
    errorMessage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModelCountAggregateOutputType = {
    id: number
    shortId: number
    name: number
    fileId: number
    uploaderId: number
    size: number
    status: number
    errorMessage: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ModelMinAggregateInputType = {
    id?: true
    shortId?: true
    name?: true
    fileId?: true
    uploaderId?: true
    size?: true
    status?: true
    errorMessage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModelMaxAggregateInputType = {
    id?: true
    shortId?: true
    name?: true
    fileId?: true
    uploaderId?: true
    size?: true
    status?: true
    errorMessage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModelCountAggregateInputType = {
    id?: true
    shortId?: true
    name?: true
    fileId?: true
    uploaderId?: true
    size?: true
    status?: true
    errorMessage?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ModelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Model to aggregate.
     */
    where?: ModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelOrderByWithRelationInput | ModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Models
    **/
    _count?: true | ModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModelMaxAggregateInputType
  }

  export type GetModelAggregateType<T extends ModelAggregateArgs> = {
        [P in keyof T & keyof AggregateModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModel[P]>
      : GetScalarType<T[P], AggregateModel[P]>
  }




  export type ModelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModelWhereInput
    orderBy?: ModelOrderByWithAggregationInput | ModelOrderByWithAggregationInput[]
    by: ModelScalarFieldEnum[] | ModelScalarFieldEnum
    having?: ModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModelCountAggregateInputType | true
    _min?: ModelMinAggregateInputType
    _max?: ModelMaxAggregateInputType
  }

  export type ModelGroupByOutputType = {
    id: string
    shortId: string
    name: string
    fileId: string
    uploaderId: string
    size: string
    status: $Enums.ProcessStatus
    errorMessage: string | null
    createdAt: Date
    updatedAt: Date
    _count: ModelCountAggregateOutputType | null
    _min: ModelMinAggregateOutputType | null
    _max: ModelMaxAggregateOutputType | null
  }

  type GetModelGroupByPayload<T extends ModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModelGroupByOutputType[P]>
            : GetScalarType<T[P], ModelGroupByOutputType[P]>
        }
      >
    >


  export type ModelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shortId?: boolean
    name?: boolean
    fileId?: boolean
    uploaderId?: boolean
    size?: boolean
    status?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    uploader?: boolean | UserDefaultArgs<ExtArgs>
    posts?: boolean | Model$postsArgs<ExtArgs>
    _count?: boolean | ModelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["model"]>

  export type ModelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shortId?: boolean
    name?: boolean
    fileId?: boolean
    uploaderId?: boolean
    size?: boolean
    status?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    uploader?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["model"]>

  export type ModelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shortId?: boolean
    name?: boolean
    fileId?: boolean
    uploaderId?: boolean
    size?: boolean
    status?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    uploader?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["model"]>

  export type ModelSelectScalar = {
    id?: boolean
    shortId?: boolean
    name?: boolean
    fileId?: boolean
    uploaderId?: boolean
    size?: boolean
    status?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ModelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shortId" | "name" | "fileId" | "uploaderId" | "size" | "status" | "errorMessage" | "createdAt" | "updatedAt", ExtArgs["result"]["model"]>
  export type ModelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploader?: boolean | UserDefaultArgs<ExtArgs>
    posts?: boolean | Model$postsArgs<ExtArgs>
    _count?: boolean | ModelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ModelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploader?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ModelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploader?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ModelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Model"
    objects: {
      uploader: Prisma.$UserPayload<ExtArgs>
      posts: Prisma.$PostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shortId: string
      name: string
      fileId: string
      uploaderId: string
      size: string
      status: $Enums.ProcessStatus
      errorMessage: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["model"]>
    composites: {}
  }

  type ModelGetPayload<S extends boolean | null | undefined | ModelDefaultArgs> = $Result.GetResult<Prisma.$ModelPayload, S>

  type ModelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModelCountAggregateInputType | true
    }

  export interface ModelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Model'], meta: { name: 'Model' } }
    /**
     * Find zero or one Model that matches the filter.
     * @param {ModelFindUniqueArgs} args - Arguments to find a Model
     * @example
     * // Get one Model
     * const model = await prisma.model.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModelFindUniqueArgs>(args: SelectSubset<T, ModelFindUniqueArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Model that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModelFindUniqueOrThrowArgs} args - Arguments to find a Model
     * @example
     * // Get one Model
     * const model = await prisma.model.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModelFindUniqueOrThrowArgs>(args: SelectSubset<T, ModelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Model that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelFindFirstArgs} args - Arguments to find a Model
     * @example
     * // Get one Model
     * const model = await prisma.model.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModelFindFirstArgs>(args?: SelectSubset<T, ModelFindFirstArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Model that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelFindFirstOrThrowArgs} args - Arguments to find a Model
     * @example
     * // Get one Model
     * const model = await prisma.model.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModelFindFirstOrThrowArgs>(args?: SelectSubset<T, ModelFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Models that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Models
     * const models = await prisma.model.findMany()
     * 
     * // Get first 10 Models
     * const models = await prisma.model.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modelWithIdOnly = await prisma.model.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModelFindManyArgs>(args?: SelectSubset<T, ModelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Model.
     * @param {ModelCreateArgs} args - Arguments to create a Model.
     * @example
     * // Create one Model
     * const Model = await prisma.model.create({
     *   data: {
     *     // ... data to create a Model
     *   }
     * })
     * 
     */
    create<T extends ModelCreateArgs>(args: SelectSubset<T, ModelCreateArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Models.
     * @param {ModelCreateManyArgs} args - Arguments to create many Models.
     * @example
     * // Create many Models
     * const model = await prisma.model.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModelCreateManyArgs>(args?: SelectSubset<T, ModelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Models and returns the data saved in the database.
     * @param {ModelCreateManyAndReturnArgs} args - Arguments to create many Models.
     * @example
     * // Create many Models
     * const model = await prisma.model.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Models and only return the `id`
     * const modelWithIdOnly = await prisma.model.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModelCreateManyAndReturnArgs>(args?: SelectSubset<T, ModelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Model.
     * @param {ModelDeleteArgs} args - Arguments to delete one Model.
     * @example
     * // Delete one Model
     * const Model = await prisma.model.delete({
     *   where: {
     *     // ... filter to delete one Model
     *   }
     * })
     * 
     */
    delete<T extends ModelDeleteArgs>(args: SelectSubset<T, ModelDeleteArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Model.
     * @param {ModelUpdateArgs} args - Arguments to update one Model.
     * @example
     * // Update one Model
     * const model = await prisma.model.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModelUpdateArgs>(args: SelectSubset<T, ModelUpdateArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Models.
     * @param {ModelDeleteManyArgs} args - Arguments to filter Models to delete.
     * @example
     * // Delete a few Models
     * const { count } = await prisma.model.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModelDeleteManyArgs>(args?: SelectSubset<T, ModelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Models.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Models
     * const model = await prisma.model.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModelUpdateManyArgs>(args: SelectSubset<T, ModelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Models and returns the data updated in the database.
     * @param {ModelUpdateManyAndReturnArgs} args - Arguments to update many Models.
     * @example
     * // Update many Models
     * const model = await prisma.model.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Models and only return the `id`
     * const modelWithIdOnly = await prisma.model.updateManyAndReturn({
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
    updateManyAndReturn<T extends ModelUpdateManyAndReturnArgs>(args: SelectSubset<T, ModelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Model.
     * @param {ModelUpsertArgs} args - Arguments to update or create a Model.
     * @example
     * // Update or create a Model
     * const model = await prisma.model.upsert({
     *   create: {
     *     // ... data to create a Model
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Model we want to update
     *   }
     * })
     */
    upsert<T extends ModelUpsertArgs>(args: SelectSubset<T, ModelUpsertArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Models.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelCountArgs} args - Arguments to filter Models to count.
     * @example
     * // Count the number of Models
     * const count = await prisma.model.count({
     *   where: {
     *     // ... the filter for the Models we want to count
     *   }
     * })
    **/
    count<T extends ModelCountArgs>(
      args?: Subset<T, ModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Model.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModelAggregateArgs>(args: Subset<T, ModelAggregateArgs>): Prisma.PrismaPromise<GetModelAggregateType<T>>

    /**
     * Group by Model.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelGroupByArgs} args - Group by arguments.
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
      T extends ModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModelGroupByArgs['orderBy'] }
        : { orderBy?: ModelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Model model
   */
  readonly fields: ModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Model.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    uploader<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    posts<T extends Model$postsArgs<ExtArgs> = {}>(args?: Subset<T, Model$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Model model
   */
  interface ModelFieldRefs {
    readonly id: FieldRef<"Model", 'String'>
    readonly shortId: FieldRef<"Model", 'String'>
    readonly name: FieldRef<"Model", 'String'>
    readonly fileId: FieldRef<"Model", 'String'>
    readonly uploaderId: FieldRef<"Model", 'String'>
    readonly size: FieldRef<"Model", 'String'>
    readonly status: FieldRef<"Model", 'ProcessStatus'>
    readonly errorMessage: FieldRef<"Model", 'String'>
    readonly createdAt: FieldRef<"Model", 'DateTime'>
    readonly updatedAt: FieldRef<"Model", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Model findUnique
   */
  export type ModelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter, which Model to fetch.
     */
    where: ModelWhereUniqueInput
  }

  /**
   * Model findUniqueOrThrow
   */
  export type ModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter, which Model to fetch.
     */
    where: ModelWhereUniqueInput
  }

  /**
   * Model findFirst
   */
  export type ModelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter, which Model to fetch.
     */
    where?: ModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelOrderByWithRelationInput | ModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Models.
     */
    cursor?: ModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Models.
     */
    distinct?: ModelScalarFieldEnum | ModelScalarFieldEnum[]
  }

  /**
   * Model findFirstOrThrow
   */
  export type ModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter, which Model to fetch.
     */
    where?: ModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelOrderByWithRelationInput | ModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Models.
     */
    cursor?: ModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Models.
     */
    distinct?: ModelScalarFieldEnum | ModelScalarFieldEnum[]
  }

  /**
   * Model findMany
   */
  export type ModelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter, which Models to fetch.
     */
    where?: ModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelOrderByWithRelationInput | ModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Models.
     */
    cursor?: ModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Models.
     */
    distinct?: ModelScalarFieldEnum | ModelScalarFieldEnum[]
  }

  /**
   * Model create
   */
  export type ModelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * The data needed to create a Model.
     */
    data: XOR<ModelCreateInput, ModelUncheckedCreateInput>
  }

  /**
   * Model createMany
   */
  export type ModelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Models.
     */
    data: ModelCreateManyInput | ModelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Model createManyAndReturn
   */
  export type ModelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * The data used to create many Models.
     */
    data: ModelCreateManyInput | ModelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Model update
   */
  export type ModelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * The data needed to update a Model.
     */
    data: XOR<ModelUpdateInput, ModelUncheckedUpdateInput>
    /**
     * Choose, which Model to update.
     */
    where: ModelWhereUniqueInput
  }

  /**
   * Model updateMany
   */
  export type ModelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Models.
     */
    data: XOR<ModelUpdateManyMutationInput, ModelUncheckedUpdateManyInput>
    /**
     * Filter which Models to update
     */
    where?: ModelWhereInput
    /**
     * Limit how many Models to update.
     */
    limit?: number
  }

  /**
   * Model updateManyAndReturn
   */
  export type ModelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * The data used to update Models.
     */
    data: XOR<ModelUpdateManyMutationInput, ModelUncheckedUpdateManyInput>
    /**
     * Filter which Models to update
     */
    where?: ModelWhereInput
    /**
     * Limit how many Models to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Model upsert
   */
  export type ModelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * The filter to search for the Model to update in case it exists.
     */
    where: ModelWhereUniqueInput
    /**
     * In case the Model found by the `where` argument doesn't exist, create a new Model with this data.
     */
    create: XOR<ModelCreateInput, ModelUncheckedCreateInput>
    /**
     * In case the Model was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModelUpdateInput, ModelUncheckedUpdateInput>
  }

  /**
   * Model delete
   */
  export type ModelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter which Model to delete.
     */
    where: ModelWhereUniqueInput
  }

  /**
   * Model deleteMany
   */
  export type ModelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Models to delete
     */
    where?: ModelWhereInput
    /**
     * Limit how many Models to delete.
     */
    limit?: number
  }

  /**
   * Model.posts
   */
  export type Model$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Model without action
   */
  export type ModelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
  }


  /**
   * Model Pdf
   */

  export type AggregatePdf = {
    _count: PdfCountAggregateOutputType | null
    _min: PdfMinAggregateOutputType | null
    _max: PdfMaxAggregateOutputType | null
  }

  export type PdfMinAggregateOutputType = {
    id: string | null
    name: string | null
    fileId: string | null
    uploaderId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PdfMaxAggregateOutputType = {
    id: string | null
    name: string | null
    fileId: string | null
    uploaderId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PdfCountAggregateOutputType = {
    id: number
    name: number
    fileId: number
    uploaderId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PdfMinAggregateInputType = {
    id?: true
    name?: true
    fileId?: true
    uploaderId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PdfMaxAggregateInputType = {
    id?: true
    name?: true
    fileId?: true
    uploaderId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PdfCountAggregateInputType = {
    id?: true
    name?: true
    fileId?: true
    uploaderId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PdfAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pdf to aggregate.
     */
    where?: PdfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pdfs to fetch.
     */
    orderBy?: PdfOrderByWithRelationInput | PdfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PdfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pdfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pdfs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pdfs
    **/
    _count?: true | PdfCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PdfMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PdfMaxAggregateInputType
  }

  export type GetPdfAggregateType<T extends PdfAggregateArgs> = {
        [P in keyof T & keyof AggregatePdf]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePdf[P]>
      : GetScalarType<T[P], AggregatePdf[P]>
  }




  export type PdfGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PdfWhereInput
    orderBy?: PdfOrderByWithAggregationInput | PdfOrderByWithAggregationInput[]
    by: PdfScalarFieldEnum[] | PdfScalarFieldEnum
    having?: PdfScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PdfCountAggregateInputType | true
    _min?: PdfMinAggregateInputType
    _max?: PdfMaxAggregateInputType
  }

  export type PdfGroupByOutputType = {
    id: string
    name: string
    fileId: string
    uploaderId: string
    createdAt: Date
    updatedAt: Date
    _count: PdfCountAggregateOutputType | null
    _min: PdfMinAggregateOutputType | null
    _max: PdfMaxAggregateOutputType | null
  }

  type GetPdfGroupByPayload<T extends PdfGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PdfGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PdfGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PdfGroupByOutputType[P]>
            : GetScalarType<T[P], PdfGroupByOutputType[P]>
        }
      >
    >


  export type PdfSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    fileId?: boolean
    uploaderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    uploader?: boolean | UserDefaultArgs<ExtArgs>
    posts?: boolean | Pdf$postsArgs<ExtArgs>
    _count?: boolean | PdfCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pdf"]>

  export type PdfSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    fileId?: boolean
    uploaderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    uploader?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pdf"]>

  export type PdfSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    fileId?: boolean
    uploaderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    uploader?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pdf"]>

  export type PdfSelectScalar = {
    id?: boolean
    name?: boolean
    fileId?: boolean
    uploaderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PdfOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "fileId" | "uploaderId" | "createdAt" | "updatedAt", ExtArgs["result"]["pdf"]>
  export type PdfInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploader?: boolean | UserDefaultArgs<ExtArgs>
    posts?: boolean | Pdf$postsArgs<ExtArgs>
    _count?: boolean | PdfCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PdfIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploader?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PdfIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploader?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PdfPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pdf"
    objects: {
      uploader: Prisma.$UserPayload<ExtArgs>
      posts: Prisma.$PostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      fileId: string
      uploaderId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pdf"]>
    composites: {}
  }

  type PdfGetPayload<S extends boolean | null | undefined | PdfDefaultArgs> = $Result.GetResult<Prisma.$PdfPayload, S>

  type PdfCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PdfFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PdfCountAggregateInputType | true
    }

  export interface PdfDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pdf'], meta: { name: 'Pdf' } }
    /**
     * Find zero or one Pdf that matches the filter.
     * @param {PdfFindUniqueArgs} args - Arguments to find a Pdf
     * @example
     * // Get one Pdf
     * const pdf = await prisma.pdf.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PdfFindUniqueArgs>(args: SelectSubset<T, PdfFindUniqueArgs<ExtArgs>>): Prisma__PdfClient<$Result.GetResult<Prisma.$PdfPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pdf that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PdfFindUniqueOrThrowArgs} args - Arguments to find a Pdf
     * @example
     * // Get one Pdf
     * const pdf = await prisma.pdf.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PdfFindUniqueOrThrowArgs>(args: SelectSubset<T, PdfFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PdfClient<$Result.GetResult<Prisma.$PdfPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pdf that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PdfFindFirstArgs} args - Arguments to find a Pdf
     * @example
     * // Get one Pdf
     * const pdf = await prisma.pdf.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PdfFindFirstArgs>(args?: SelectSubset<T, PdfFindFirstArgs<ExtArgs>>): Prisma__PdfClient<$Result.GetResult<Prisma.$PdfPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pdf that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PdfFindFirstOrThrowArgs} args - Arguments to find a Pdf
     * @example
     * // Get one Pdf
     * const pdf = await prisma.pdf.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PdfFindFirstOrThrowArgs>(args?: SelectSubset<T, PdfFindFirstOrThrowArgs<ExtArgs>>): Prisma__PdfClient<$Result.GetResult<Prisma.$PdfPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pdfs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PdfFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pdfs
     * const pdfs = await prisma.pdf.findMany()
     * 
     * // Get first 10 Pdfs
     * const pdfs = await prisma.pdf.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pdfWithIdOnly = await prisma.pdf.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PdfFindManyArgs>(args?: SelectSubset<T, PdfFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PdfPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pdf.
     * @param {PdfCreateArgs} args - Arguments to create a Pdf.
     * @example
     * // Create one Pdf
     * const Pdf = await prisma.pdf.create({
     *   data: {
     *     // ... data to create a Pdf
     *   }
     * })
     * 
     */
    create<T extends PdfCreateArgs>(args: SelectSubset<T, PdfCreateArgs<ExtArgs>>): Prisma__PdfClient<$Result.GetResult<Prisma.$PdfPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pdfs.
     * @param {PdfCreateManyArgs} args - Arguments to create many Pdfs.
     * @example
     * // Create many Pdfs
     * const pdf = await prisma.pdf.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PdfCreateManyArgs>(args?: SelectSubset<T, PdfCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pdfs and returns the data saved in the database.
     * @param {PdfCreateManyAndReturnArgs} args - Arguments to create many Pdfs.
     * @example
     * // Create many Pdfs
     * const pdf = await prisma.pdf.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pdfs and only return the `id`
     * const pdfWithIdOnly = await prisma.pdf.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PdfCreateManyAndReturnArgs>(args?: SelectSubset<T, PdfCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PdfPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pdf.
     * @param {PdfDeleteArgs} args - Arguments to delete one Pdf.
     * @example
     * // Delete one Pdf
     * const Pdf = await prisma.pdf.delete({
     *   where: {
     *     // ... filter to delete one Pdf
     *   }
     * })
     * 
     */
    delete<T extends PdfDeleteArgs>(args: SelectSubset<T, PdfDeleteArgs<ExtArgs>>): Prisma__PdfClient<$Result.GetResult<Prisma.$PdfPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pdf.
     * @param {PdfUpdateArgs} args - Arguments to update one Pdf.
     * @example
     * // Update one Pdf
     * const pdf = await prisma.pdf.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PdfUpdateArgs>(args: SelectSubset<T, PdfUpdateArgs<ExtArgs>>): Prisma__PdfClient<$Result.GetResult<Prisma.$PdfPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pdfs.
     * @param {PdfDeleteManyArgs} args - Arguments to filter Pdfs to delete.
     * @example
     * // Delete a few Pdfs
     * const { count } = await prisma.pdf.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PdfDeleteManyArgs>(args?: SelectSubset<T, PdfDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pdfs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PdfUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pdfs
     * const pdf = await prisma.pdf.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PdfUpdateManyArgs>(args: SelectSubset<T, PdfUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pdfs and returns the data updated in the database.
     * @param {PdfUpdateManyAndReturnArgs} args - Arguments to update many Pdfs.
     * @example
     * // Update many Pdfs
     * const pdf = await prisma.pdf.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pdfs and only return the `id`
     * const pdfWithIdOnly = await prisma.pdf.updateManyAndReturn({
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
    updateManyAndReturn<T extends PdfUpdateManyAndReturnArgs>(args: SelectSubset<T, PdfUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PdfPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pdf.
     * @param {PdfUpsertArgs} args - Arguments to update or create a Pdf.
     * @example
     * // Update or create a Pdf
     * const pdf = await prisma.pdf.upsert({
     *   create: {
     *     // ... data to create a Pdf
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pdf we want to update
     *   }
     * })
     */
    upsert<T extends PdfUpsertArgs>(args: SelectSubset<T, PdfUpsertArgs<ExtArgs>>): Prisma__PdfClient<$Result.GetResult<Prisma.$PdfPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pdfs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PdfCountArgs} args - Arguments to filter Pdfs to count.
     * @example
     * // Count the number of Pdfs
     * const count = await prisma.pdf.count({
     *   where: {
     *     // ... the filter for the Pdfs we want to count
     *   }
     * })
    **/
    count<T extends PdfCountArgs>(
      args?: Subset<T, PdfCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PdfCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pdf.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PdfAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PdfAggregateArgs>(args: Subset<T, PdfAggregateArgs>): Prisma.PrismaPromise<GetPdfAggregateType<T>>

    /**
     * Group by Pdf.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PdfGroupByArgs} args - Group by arguments.
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
      T extends PdfGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PdfGroupByArgs['orderBy'] }
        : { orderBy?: PdfGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PdfGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPdfGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pdf model
   */
  readonly fields: PdfFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pdf.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PdfClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    uploader<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    posts<T extends Pdf$postsArgs<ExtArgs> = {}>(args?: Subset<T, Pdf$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Pdf model
   */
  interface PdfFieldRefs {
    readonly id: FieldRef<"Pdf", 'String'>
    readonly name: FieldRef<"Pdf", 'String'>
    readonly fileId: FieldRef<"Pdf", 'String'>
    readonly uploaderId: FieldRef<"Pdf", 'String'>
    readonly createdAt: FieldRef<"Pdf", 'DateTime'>
    readonly updatedAt: FieldRef<"Pdf", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pdf findUnique
   */
  export type PdfFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pdf
     */
    select?: PdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pdf
     */
    omit?: PdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PdfInclude<ExtArgs> | null
    /**
     * Filter, which Pdf to fetch.
     */
    where: PdfWhereUniqueInput
  }

  /**
   * Pdf findUniqueOrThrow
   */
  export type PdfFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pdf
     */
    select?: PdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pdf
     */
    omit?: PdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PdfInclude<ExtArgs> | null
    /**
     * Filter, which Pdf to fetch.
     */
    where: PdfWhereUniqueInput
  }

  /**
   * Pdf findFirst
   */
  export type PdfFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pdf
     */
    select?: PdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pdf
     */
    omit?: PdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PdfInclude<ExtArgs> | null
    /**
     * Filter, which Pdf to fetch.
     */
    where?: PdfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pdfs to fetch.
     */
    orderBy?: PdfOrderByWithRelationInput | PdfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pdfs.
     */
    cursor?: PdfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pdfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pdfs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pdfs.
     */
    distinct?: PdfScalarFieldEnum | PdfScalarFieldEnum[]
  }

  /**
   * Pdf findFirstOrThrow
   */
  export type PdfFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pdf
     */
    select?: PdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pdf
     */
    omit?: PdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PdfInclude<ExtArgs> | null
    /**
     * Filter, which Pdf to fetch.
     */
    where?: PdfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pdfs to fetch.
     */
    orderBy?: PdfOrderByWithRelationInput | PdfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pdfs.
     */
    cursor?: PdfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pdfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pdfs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pdfs.
     */
    distinct?: PdfScalarFieldEnum | PdfScalarFieldEnum[]
  }

  /**
   * Pdf findMany
   */
  export type PdfFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pdf
     */
    select?: PdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pdf
     */
    omit?: PdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PdfInclude<ExtArgs> | null
    /**
     * Filter, which Pdfs to fetch.
     */
    where?: PdfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pdfs to fetch.
     */
    orderBy?: PdfOrderByWithRelationInput | PdfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pdfs.
     */
    cursor?: PdfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pdfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pdfs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pdfs.
     */
    distinct?: PdfScalarFieldEnum | PdfScalarFieldEnum[]
  }

  /**
   * Pdf create
   */
  export type PdfCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pdf
     */
    select?: PdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pdf
     */
    omit?: PdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PdfInclude<ExtArgs> | null
    /**
     * The data needed to create a Pdf.
     */
    data: XOR<PdfCreateInput, PdfUncheckedCreateInput>
  }

  /**
   * Pdf createMany
   */
  export type PdfCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pdfs.
     */
    data: PdfCreateManyInput | PdfCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pdf createManyAndReturn
   */
  export type PdfCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pdf
     */
    select?: PdfSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pdf
     */
    omit?: PdfOmit<ExtArgs> | null
    /**
     * The data used to create many Pdfs.
     */
    data: PdfCreateManyInput | PdfCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PdfIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pdf update
   */
  export type PdfUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pdf
     */
    select?: PdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pdf
     */
    omit?: PdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PdfInclude<ExtArgs> | null
    /**
     * The data needed to update a Pdf.
     */
    data: XOR<PdfUpdateInput, PdfUncheckedUpdateInput>
    /**
     * Choose, which Pdf to update.
     */
    where: PdfWhereUniqueInput
  }

  /**
   * Pdf updateMany
   */
  export type PdfUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pdfs.
     */
    data: XOR<PdfUpdateManyMutationInput, PdfUncheckedUpdateManyInput>
    /**
     * Filter which Pdfs to update
     */
    where?: PdfWhereInput
    /**
     * Limit how many Pdfs to update.
     */
    limit?: number
  }

  /**
   * Pdf updateManyAndReturn
   */
  export type PdfUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pdf
     */
    select?: PdfSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pdf
     */
    omit?: PdfOmit<ExtArgs> | null
    /**
     * The data used to update Pdfs.
     */
    data: XOR<PdfUpdateManyMutationInput, PdfUncheckedUpdateManyInput>
    /**
     * Filter which Pdfs to update
     */
    where?: PdfWhereInput
    /**
     * Limit how many Pdfs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PdfIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pdf upsert
   */
  export type PdfUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pdf
     */
    select?: PdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pdf
     */
    omit?: PdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PdfInclude<ExtArgs> | null
    /**
     * The filter to search for the Pdf to update in case it exists.
     */
    where: PdfWhereUniqueInput
    /**
     * In case the Pdf found by the `where` argument doesn't exist, create a new Pdf with this data.
     */
    create: XOR<PdfCreateInput, PdfUncheckedCreateInput>
    /**
     * In case the Pdf was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PdfUpdateInput, PdfUncheckedUpdateInput>
  }

  /**
   * Pdf delete
   */
  export type PdfDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pdf
     */
    select?: PdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pdf
     */
    omit?: PdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PdfInclude<ExtArgs> | null
    /**
     * Filter which Pdf to delete.
     */
    where: PdfWhereUniqueInput
  }

  /**
   * Pdf deleteMany
   */
  export type PdfDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pdfs to delete
     */
    where?: PdfWhereInput
    /**
     * Limit how many Pdfs to delete.
     */
    limit?: number
  }

  /**
   * Pdf.posts
   */
  export type Pdf$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Pdf without action
   */
  export type PdfDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pdf
     */
    select?: PdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pdf
     */
    omit?: PdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PdfInclude<ExtArgs> | null
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
    sortOrder?: true
  }

  export type PhaseSumAggregateInputType = {
    sortOrder?: true
  }

  export type PhaseMinAggregateInputType = {
    id?: true
    name?: true
    sortOrder?: true
    projectId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PhaseMaxAggregateInputType = {
    id?: true
    name?: true
    sortOrder?: true
    projectId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PhaseCountAggregateInputType = {
    id?: true
    name?: true
    sortOrder?: true
    projectId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PhaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Phase to aggregate.
     */
    where?: PhaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Phases to fetch.
     */
    orderBy?: PhaseOrderByWithRelationInput | PhaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Phases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Phases.
     */
    skip?: number
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
    where?: PhaseWhereInput
    orderBy?: PhaseOrderByWithAggregationInput | PhaseOrderByWithAggregationInput[]
    by: PhaseScalarFieldEnum[] | PhaseScalarFieldEnum
    having?: PhaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
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
    id?: boolean
    name?: boolean
    sortOrder?: boolean
    projectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    projectAssets?: boolean | Phase$projectAssetsArgs<ExtArgs>
    _count?: boolean | PhaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["phase"]>

  export type PhaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sortOrder?: boolean
    projectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["phase"]>

  export type PhaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sortOrder?: boolean
    projectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["phase"]>

  export type PhaseSelectScalar = {
    id?: boolean
    name?: boolean
    sortOrder?: boolean
    projectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PhaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "sortOrder" | "projectId" | "createdAt" | "updatedAt", ExtArgs["result"]["phase"]>
  export type PhaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    projectAssets?: boolean | Phase$projectAssetsArgs<ExtArgs>
    _count?: boolean | PhaseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PhaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type PhaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $PhasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Phase"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      projectAssets: Prisma.$ProjectAssetPayload<ExtArgs>[]
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
    projectAssets<T extends Phase$projectAssetsArgs<ExtArgs> = {}>(args?: Subset<T, Phase$projectAssetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectAssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    where?: PhaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Phases to fetch.
     */
    orderBy?: PhaseOrderByWithRelationInput | PhaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Phases.
     */
    cursor?: PhaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Phases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Phases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Phases.
     */
    distinct?: PhaseScalarFieldEnum | PhaseScalarFieldEnum[]
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
    where?: PhaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Phases to fetch.
     */
    orderBy?: PhaseOrderByWithRelationInput | PhaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Phases.
     */
    cursor?: PhaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Phases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Phases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Phases.
     */
    distinct?: PhaseScalarFieldEnum | PhaseScalarFieldEnum[]
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
    where?: PhaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Phases to fetch.
     */
    orderBy?: PhaseOrderByWithRelationInput | PhaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Phases.
     */
    cursor?: PhaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Phases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Phases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Phases.
     */
    distinct?: PhaseScalarFieldEnum | PhaseScalarFieldEnum[]
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
    skipDuplicates?: boolean
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
    skipDuplicates?: boolean
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
    where?: PhaseWhereInput
    /**
     * Limit how many Phases to update.
     */
    limit?: number
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
    where?: PhaseWhereInput
    /**
     * Limit how many Phases to update.
     */
    limit?: number
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
    where?: PhaseWhereInput
    /**
     * Limit how many Phases to delete.
     */
    limit?: number
  }

  /**
   * Phase.projectAssets
   */
  export type Phase$projectAssetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: ProjectAssetWhereInput
    orderBy?: ProjectAssetOrderByWithRelationInput | ProjectAssetOrderByWithRelationInput[]
    cursor?: ProjectAssetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectAssetScalarFieldEnum | ProjectAssetScalarFieldEnum[]
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
    id?: true
    shortId?: true
    title?: true
    category?: true
    description?: true
    type?: true
    coverImage?: true
    uploaderId?: true
    permission?: true
    teamId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    shortId?: true
    title?: true
    category?: true
    description?: true
    type?: true
    coverImage?: true
    uploaderId?: true
    permission?: true
    teamId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    shortId?: true
    title?: true
    category?: true
    description?: true
    type?: true
    keywords?: true
    coverImage?: true
    images?: true
    uploaderId?: true
    relatedPosts?: true
    permission?: true
    teamId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
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
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
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
    coverImage: string
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
    id?: boolean
    shortId?: boolean
    title?: boolean
    category?: boolean
    description?: boolean
    type?: boolean
    keywords?: boolean
    coverImage?: boolean
    images?: boolean
    uploaderId?: boolean
    relatedPosts?: boolean
    permission?: boolean
    teamId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    models?: boolean | Post$modelsArgs<ExtArgs>
    pdfIds?: boolean | Post$pdfIdsArgs<ExtArgs>
    files?: boolean | Post$filesArgs<ExtArgs>
    uploader?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | Post$teamArgs<ExtArgs>
    comments?: boolean | Post$commentsArgs<ExtArgs>
    projectAssets?: boolean | Post$projectAssetsArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shortId?: boolean
    title?: boolean
    category?: boolean
    description?: boolean
    type?: boolean
    keywords?: boolean
    coverImage?: boolean
    images?: boolean
    uploaderId?: boolean
    relatedPosts?: boolean
    permission?: boolean
    teamId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    uploader?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | Post$teamArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shortId?: boolean
    title?: boolean
    category?: boolean
    description?: boolean
    type?: boolean
    keywords?: boolean
    coverImage?: boolean
    images?: boolean
    uploaderId?: boolean
    relatedPosts?: boolean
    permission?: boolean
    teamId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    uploader?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | Post$teamArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    shortId?: boolean
    title?: boolean
    category?: boolean
    description?: boolean
    type?: boolean
    keywords?: boolean
    coverImage?: boolean
    images?: boolean
    uploaderId?: boolean
    relatedPosts?: boolean
    permission?: boolean
    teamId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shortId" | "title" | "category" | "description" | "type" | "keywords" | "coverImage" | "images" | "uploaderId" | "relatedPosts" | "permission" | "teamId" | "createdAt" | "updatedAt", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    models?: boolean | Post$modelsArgs<ExtArgs>
    pdfIds?: boolean | Post$pdfIdsArgs<ExtArgs>
    files?: boolean | Post$filesArgs<ExtArgs>
    uploader?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | Post$teamArgs<ExtArgs>
    comments?: boolean | Post$commentsArgs<ExtArgs>
    projectAssets?: boolean | Post$projectAssetsArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploader?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | Post$teamArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploader?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | Post$teamArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      models: Prisma.$ModelPayload<ExtArgs>[]
      pdfIds: Prisma.$PdfPayload<ExtArgs>[]
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
      coverImage: string
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
    models<T extends Post$modelsArgs<ExtArgs> = {}>(args?: Subset<T, Post$modelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pdfIds<T extends Post$pdfIdsArgs<ExtArgs> = {}>(args?: Subset<T, Post$pdfIdsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PdfPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
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
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
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
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
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
    skipDuplicates?: boolean
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
    skipDuplicates?: boolean
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
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
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
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
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
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post.models
   */
  export type Post$modelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    where?: ModelWhereInput
    orderBy?: ModelOrderByWithRelationInput | ModelOrderByWithRelationInput[]
    cursor?: ModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModelScalarFieldEnum | ModelScalarFieldEnum[]
  }

  /**
   * Post.pdfIds
   */
  export type Post$pdfIdsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pdf
     */
    select?: PdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pdf
     */
    omit?: PdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PdfInclude<ExtArgs> | null
    where?: PdfWhereInput
    orderBy?: PdfOrderByWithRelationInput | PdfOrderByWithRelationInput[]
    cursor?: PdfWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PdfScalarFieldEnum | PdfScalarFieldEnum[]
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
    where?: FileRecordWhereInput
    orderBy?: FileRecordOrderByWithRelationInput | FileRecordOrderByWithRelationInput[]
    cursor?: FileRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FileRecordScalarFieldEnum | FileRecordScalarFieldEnum[]
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
    where?: TeamWhereInput
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
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
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
    where?: ProjectAssetWhereInput
    orderBy?: ProjectAssetOrderByWithRelationInput | ProjectAssetOrderByWithRelationInput[]
    cursor?: ProjectAssetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectAssetScalarFieldEnum | ProjectAssetScalarFieldEnum[]
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
    teamId: number
    creatorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    client?: true
    location?: true
    coverImage?: true
    status?: true
    teamId?: true
    creatorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    client?: true
    location?: true
    coverImage?: true
    status?: true
    teamId?: true
    creatorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    client?: true
    location?: true
    coverImage?: true
    status?: true
    teamId?: true
    creatorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
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
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
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
    id?: boolean
    name?: boolean
    description?: boolean
    client?: boolean
    location?: boolean
    coverImage?: boolean
    status?: boolean
    teamId?: boolean
    creatorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    phases?: boolean | Project$phasesArgs<ExtArgs>
    assets?: boolean | Project$assetsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    client?: boolean
    location?: boolean
    coverImage?: boolean
    status?: boolean
    teamId?: boolean
    creatorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    client?: boolean
    location?: boolean
    coverImage?: boolean
    status?: boolean
    teamId?: boolean
    creatorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    client?: boolean
    location?: boolean
    coverImage?: boolean
    status?: boolean
    teamId?: boolean
    creatorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "client" | "location" | "coverImage" | "status" | "teamId" | "creatorId" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    phases?: boolean | Project$phasesArgs<ExtArgs>
    assets?: boolean | Project$assetsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
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
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
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
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
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
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
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
    skipDuplicates?: boolean
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
    skipDuplicates?: boolean
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
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
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
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
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
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
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
    where?: PhaseWhereInput
    orderBy?: PhaseOrderByWithRelationInput | PhaseOrderByWithRelationInput[]
    cursor?: PhaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhaseScalarFieldEnum | PhaseScalarFieldEnum[]
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
    where?: ProjectAssetWhereInput
    orderBy?: ProjectAssetOrderByWithRelationInput | ProjectAssetOrderByWithRelationInput[]
    cursor?: ProjectAssetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectAssetScalarFieldEnum | ProjectAssetScalarFieldEnum[]
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
    sortOrder: number | null
    projectId: string | null
    phaseId: string | null
    postId: string | null
    createdAt: Date | null
  }

  export type ProjectAssetMaxAggregateOutputType = {
    id: string | null
    sortOrder: number | null
    projectId: string | null
    phaseId: string | null
    postId: string | null
    createdAt: Date | null
  }

  export type ProjectAssetCountAggregateOutputType = {
    id: number
    sortOrder: number
    projectId: number
    phaseId: number
    postId: number
    createdAt: number
    _all: number
  }


  export type ProjectAssetAvgAggregateInputType = {
    sortOrder?: true
  }

  export type ProjectAssetSumAggregateInputType = {
    sortOrder?: true
  }

  export type ProjectAssetMinAggregateInputType = {
    id?: true
    sortOrder?: true
    projectId?: true
    phaseId?: true
    postId?: true
    createdAt?: true
  }

  export type ProjectAssetMaxAggregateInputType = {
    id?: true
    sortOrder?: true
    projectId?: true
    phaseId?: true
    postId?: true
    createdAt?: true
  }

  export type ProjectAssetCountAggregateInputType = {
    id?: true
    sortOrder?: true
    projectId?: true
    phaseId?: true
    postId?: true
    createdAt?: true
    _all?: true
  }

  export type ProjectAssetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectAsset to aggregate.
     */
    where?: ProjectAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectAssets to fetch.
     */
    orderBy?: ProjectAssetOrderByWithRelationInput | ProjectAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectAssets.
     */
    skip?: number
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
    where?: ProjectAssetWhereInput
    orderBy?: ProjectAssetOrderByWithAggregationInput | ProjectAssetOrderByWithAggregationInput[]
    by: ProjectAssetScalarFieldEnum[] | ProjectAssetScalarFieldEnum
    having?: ProjectAssetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectAssetCountAggregateInputType | true
    _avg?: ProjectAssetAvgAggregateInputType
    _sum?: ProjectAssetSumAggregateInputType
    _min?: ProjectAssetMinAggregateInputType
    _max?: ProjectAssetMaxAggregateInputType
  }

  export type ProjectAssetGroupByOutputType = {
    id: string
    sortOrder: number
    projectId: string
    phaseId: string | null
    postId: string
    createdAt: Date
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
    id?: boolean
    sortOrder?: boolean
    projectId?: boolean
    phaseId?: boolean
    postId?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    phase?: boolean | ProjectAsset$phaseArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectAsset"]>

  export type ProjectAssetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sortOrder?: boolean
    projectId?: boolean
    phaseId?: boolean
    postId?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    phase?: boolean | ProjectAsset$phaseArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectAsset"]>

  export type ProjectAssetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sortOrder?: boolean
    projectId?: boolean
    phaseId?: boolean
    postId?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    phase?: boolean | ProjectAsset$phaseArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectAsset"]>

  export type ProjectAssetSelectScalar = {
    id?: boolean
    sortOrder?: boolean
    projectId?: boolean
    phaseId?: boolean
    postId?: boolean
    createdAt?: boolean
  }

  export type ProjectAssetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sortOrder" | "projectId" | "phaseId" | "postId" | "createdAt", ExtArgs["result"]["projectAsset"]>
  export type ProjectAssetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    phase?: boolean | ProjectAsset$phaseArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type ProjectAssetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    phase?: boolean | ProjectAsset$phaseArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type ProjectAssetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    phase?: boolean | ProjectAsset$phaseArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $ProjectAssetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectAsset"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      phase: Prisma.$PhasePayload<ExtArgs> | null
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sortOrder: number
      projectId: string
      phaseId: string | null
      postId: string
      createdAt: Date
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
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    phase<T extends ProjectAsset$phaseArgs<ExtArgs> = {}>(args?: Subset<T, ProjectAsset$phaseArgs<ExtArgs>>): Prisma__PhaseClient<$Result.GetResult<Prisma.$PhasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly sortOrder: FieldRef<"ProjectAsset", 'Int'>
    readonly projectId: FieldRef<"ProjectAsset", 'String'>
    readonly phaseId: FieldRef<"ProjectAsset", 'String'>
    readonly postId: FieldRef<"ProjectAsset", 'String'>
    readonly createdAt: FieldRef<"ProjectAsset", 'DateTime'>
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
    where?: ProjectAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectAssets to fetch.
     */
    orderBy?: ProjectAssetOrderByWithRelationInput | ProjectAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectAssets.
     */
    cursor?: ProjectAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectAssets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectAssets.
     */
    distinct?: ProjectAssetScalarFieldEnum | ProjectAssetScalarFieldEnum[]
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
    where?: ProjectAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectAssets to fetch.
     */
    orderBy?: ProjectAssetOrderByWithRelationInput | ProjectAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectAssets.
     */
    cursor?: ProjectAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectAssets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectAssets.
     */
    distinct?: ProjectAssetScalarFieldEnum | ProjectAssetScalarFieldEnum[]
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
    where?: ProjectAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectAssets to fetch.
     */
    orderBy?: ProjectAssetOrderByWithRelationInput | ProjectAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectAssets.
     */
    cursor?: ProjectAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectAssets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectAssets.
     */
    distinct?: ProjectAssetScalarFieldEnum | ProjectAssetScalarFieldEnum[]
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
    skipDuplicates?: boolean
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
    skipDuplicates?: boolean
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
    where?: ProjectAssetWhereInput
    /**
     * Limit how many ProjectAssets to update.
     */
    limit?: number
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
    where?: ProjectAssetWhereInput
    /**
     * Limit how many ProjectAssets to update.
     */
    limit?: number
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
    where?: ProjectAssetWhereInput
    /**
     * Limit how many ProjectAssets to delete.
     */
    limit?: number
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
    where?: PhaseWhereInput
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
    id?: true
    name?: true
    description?: true
    avatar?: true
    color?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    avatar?: true
    color?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    avatar?: true
    color?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
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
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithAggregationInput | TeamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: TeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
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
    id?: boolean
    name?: boolean
    description?: boolean
    avatar?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    members?: boolean | Team$membersArgs<ExtArgs>
    posts?: boolean | Team$postsArgs<ExtArgs>
    projects?: boolean | Team$projectsArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    avatar?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["team"]>

  export type TeamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    avatar?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["team"]>

  export type TeamSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    avatar?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TeamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "avatar" | "color" | "createdAt" | "updatedAt", ExtArgs["result"]["team"]>
  export type TeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | Team$membersArgs<ExtArgs>
    posts?: boolean | Team$postsArgs<ExtArgs>
    projects?: boolean | Team$projectsArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TeamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Team"
    objects: {
      members: Prisma.$TeamMemberPayload<ExtArgs>[]
      posts: Prisma.$PostPayload<ExtArgs>[]
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
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
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
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
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
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
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
    skipDuplicates?: boolean
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
    skipDuplicates?: boolean
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
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
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
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
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
    where?: TeamWhereInput
    /**
     * Limit how many Teams to delete.
     */
    limit?: number
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
    where?: TeamMemberWhereInput
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    cursor?: TeamMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
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
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
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
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
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
    id?: true
    role?: true
    teamId?: true
    userId?: true
    joinedAt?: true
  }

  export type TeamMemberMaxAggregateInputType = {
    id?: true
    role?: true
    teamId?: true
    userId?: true
    joinedAt?: true
  }

  export type TeamMemberCountAggregateInputType = {
    id?: true
    role?: true
    teamId?: true
    userId?: true
    joinedAt?: true
    _all?: true
  }

  export type TeamMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamMember to aggregate.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
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
    where?: TeamMemberWhereInput
    orderBy?: TeamMemberOrderByWithAggregationInput | TeamMemberOrderByWithAggregationInput[]
    by: TeamMemberScalarFieldEnum[] | TeamMemberScalarFieldEnum
    having?: TeamMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
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
    id?: boolean
    role?: boolean
    teamId?: boolean
    userId?: boolean
    joinedAt?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamMember"]>

  export type TeamMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    teamId?: boolean
    userId?: boolean
    joinedAt?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamMember"]>

  export type TeamMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    teamId?: boolean
    userId?: boolean
    joinedAt?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamMember"]>

  export type TeamMemberSelectScalar = {
    id?: boolean
    role?: boolean
    teamId?: boolean
    userId?: boolean
    joinedAt?: boolean
  }

  export type TeamMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role" | "teamId" | "userId" | "joinedAt", ExtArgs["result"]["teamMember"]>
  export type TeamMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TeamMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TeamMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
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
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamMembers.
     */
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
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
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamMembers.
     */
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
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
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamMembers.
     */
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
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
    skipDuplicates?: boolean
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
    skipDuplicates?: boolean
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
    where?: TeamMemberWhereInput
    /**
     * Limit how many TeamMembers to update.
     */
    limit?: number
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
    where?: TeamMemberWhereInput
    /**
     * Limit how many TeamMembers to update.
     */
    limit?: number
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
    where?: TeamMemberWhereInput
    /**
     * Limit how many TeamMembers to delete.
     */
    limit?: number
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
    id?: true
    userName?: true
    email?: true
    role?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    userName?: true
    email?: true
    role?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    userName?: true
    email?: true
    role?: true
    image?: true
    userCollection?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
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
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
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
    id?: boolean
    userName?: boolean
    email?: boolean
    role?: boolean
    image?: boolean
    userCollection?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    teamMembers?: boolean | User$teamMembersArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    models?: boolean | User$modelsArgs<ExtArgs>
    pdfs?: boolean | User$pdfsArgs<ExtArgs>
    fileRecords?: boolean | User$fileRecordsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    projects?: boolean | User$projectsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    email?: boolean
    role?: boolean
    image?: boolean
    userCollection?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    email?: boolean
    role?: boolean
    image?: boolean
    userCollection?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    userName?: boolean
    email?: boolean
    role?: boolean
    image?: boolean
    userCollection?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userName" | "email" | "role" | "image" | "userCollection" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teamMembers?: boolean | User$teamMembersArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    models?: boolean | User$modelsArgs<ExtArgs>
    pdfs?: boolean | User$pdfsArgs<ExtArgs>
    fileRecords?: boolean | User$fileRecordsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    projects?: boolean | User$projectsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      teamMembers: Prisma.$TeamMemberPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      models: Prisma.$ModelPayload<ExtArgs>[]
      pdfs: Prisma.$PdfPayload<ExtArgs>[]
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
    models<T extends User$modelsArgs<ExtArgs> = {}>(args?: Subset<T, User$modelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pdfs<T extends User$pdfsArgs<ExtArgs> = {}>(args?: Subset<T, User$pdfsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PdfPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
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
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
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
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
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
    skipDuplicates?: boolean
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
    skipDuplicates?: boolean
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
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
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
    where?: TeamMemberWhereInput
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    cursor?: TeamMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
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
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.models
   */
  export type User$modelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    where?: ModelWhereInput
    orderBy?: ModelOrderByWithRelationInput | ModelOrderByWithRelationInput[]
    cursor?: ModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModelScalarFieldEnum | ModelScalarFieldEnum[]
  }

  /**
   * User.pdfs
   */
  export type User$pdfsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pdf
     */
    select?: PdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pdf
     */
    omit?: PdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PdfInclude<ExtArgs> | null
    where?: PdfWhereInput
    orderBy?: PdfOrderByWithRelationInput | PdfOrderByWithRelationInput[]
    cursor?: PdfWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PdfScalarFieldEnum | PdfScalarFieldEnum[]
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
    where?: FileRecordWhereInput
    orderBy?: FileRecordOrderByWithRelationInput | FileRecordOrderByWithRelationInput[]
    cursor?: FileRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FileRecordScalarFieldEnum | FileRecordScalarFieldEnum[]
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
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
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
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
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
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
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
    uploaderId: 'uploaderId',
    postId: 'postId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FileRecordScalarFieldEnum = (typeof FileRecordScalarFieldEnum)[keyof typeof FileRecordScalarFieldEnum]


  export const ModelScalarFieldEnum: {
    id: 'id',
    shortId: 'shortId',
    name: 'name',
    fileId: 'fileId',
    uploaderId: 'uploaderId',
    size: 'size',
    status: 'status',
    errorMessage: 'errorMessage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ModelScalarFieldEnum = (typeof ModelScalarFieldEnum)[keyof typeof ModelScalarFieldEnum]


  export const PdfScalarFieldEnum: {
    id: 'id',
    name: 'name',
    fileId: 'fileId',
    uploaderId: 'uploaderId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PdfScalarFieldEnum = (typeof PdfScalarFieldEnum)[keyof typeof PdfScalarFieldEnum]


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
    teamId: 'teamId',
    creatorId: 'creatorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ProjectAssetScalarFieldEnum: {
    id: 'id',
    sortOrder: 'sortOrder',
    projectId: 'projectId',
    phaseId: 'phaseId',
    postId: 'postId',
    createdAt: 'createdAt'
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
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    password?: StringNullableFilter<"Account"> | string | null
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    password?: SortOrderInput | SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    password?: StringNullableFilter<"Account"> | string | null
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    password?: SortOrderInput | SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    password?: StringNullableWithAggregatesFilter<"Account"> | string | null
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    postId?: StringFilter<"Comment"> | string
    userId?: StringFilter<"Comment"> | string
    parentId?: StringNullableFilter<"Comment"> | string | null
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    parent?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
    replies?: CommentListRelationFilter
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    post?: PostOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    parent?: CommentOrderByWithRelationInput
    replies?: CommentOrderByRelationAggregateInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    content?: StringFilter<"Comment"> | string
    postId?: StringFilter<"Comment"> | string
    userId?: StringFilter<"Comment"> | string
    parentId?: StringNullableFilter<"Comment"> | string | null
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    parent?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
    replies?: CommentListRelationFilter
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comment"> | string
    content?: StringWithAggregatesFilter<"Comment"> | string
    postId?: StringWithAggregatesFilter<"Comment"> | string
    userId?: StringWithAggregatesFilter<"Comment"> | string
    parentId?: StringNullableWithAggregatesFilter<"Comment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
  }

  export type FileRecordWhereInput = {
    AND?: FileRecordWhereInput | FileRecordWhereInput[]
    OR?: FileRecordWhereInput[]
    NOT?: FileRecordWhereInput | FileRecordWhereInput[]
    id?: StringFilter<"FileRecord"> | string
    shortId?: StringNullableFilter<"FileRecord"> | string | null
    name?: StringFilter<"FileRecord"> | string
    fileId?: StringFilter<"FileRecord"> | string
    viewerFileId?: StringNullableFilter<"FileRecord"> | string | null
    category?: EnumFileCategoryFilter<"FileRecord"> | $Enums.FileCategory
    extension?: StringNullableFilter<"FileRecord"> | string | null
    size?: StringFilter<"FileRecord"> | string
    status?: EnumProcessStatusFilter<"FileRecord"> | $Enums.ProcessStatus
    errorMessage?: StringNullableFilter<"FileRecord"> | string | null
    uploaderId?: StringFilter<"FileRecord"> | string
    postId?: StringNullableFilter<"FileRecord"> | string | null
    createdAt?: DateTimeFilter<"FileRecord"> | Date | string
    updatedAt?: DateTimeFilter<"FileRecord"> | Date | string
    uploader?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null
  }

  export type FileRecordOrderByWithRelationInput = {
    id?: SortOrder
    shortId?: SortOrderInput | SortOrder
    name?: SortOrder
    fileId?: SortOrder
    viewerFileId?: SortOrderInput | SortOrder
    category?: SortOrder
    extension?: SortOrderInput | SortOrder
    size?: SortOrder
    status?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    uploaderId?: SortOrder
    postId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uploader?: UserOrderByWithRelationInput
    post?: PostOrderByWithRelationInput
  }

  export type FileRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    shortId?: string
    fileId?: string
    AND?: FileRecordWhereInput | FileRecordWhereInput[]
    OR?: FileRecordWhereInput[]
    NOT?: FileRecordWhereInput | FileRecordWhereInput[]
    name?: StringFilter<"FileRecord"> | string
    viewerFileId?: StringNullableFilter<"FileRecord"> | string | null
    category?: EnumFileCategoryFilter<"FileRecord"> | $Enums.FileCategory
    extension?: StringNullableFilter<"FileRecord"> | string | null
    size?: StringFilter<"FileRecord"> | string
    status?: EnumProcessStatusFilter<"FileRecord"> | $Enums.ProcessStatus
    errorMessage?: StringNullableFilter<"FileRecord"> | string | null
    uploaderId?: StringFilter<"FileRecord"> | string
    postId?: StringNullableFilter<"FileRecord"> | string | null
    createdAt?: DateTimeFilter<"FileRecord"> | Date | string
    updatedAt?: DateTimeFilter<"FileRecord"> | Date | string
    uploader?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null
  }, "id" | "shortId" | "fileId">

  export type FileRecordOrderByWithAggregationInput = {
    id?: SortOrder
    shortId?: SortOrderInput | SortOrder
    name?: SortOrder
    fileId?: SortOrder
    viewerFileId?: SortOrderInput | SortOrder
    category?: SortOrder
    extension?: SortOrderInput | SortOrder
    size?: SortOrder
    status?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    uploaderId?: SortOrder
    postId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FileRecordCountOrderByAggregateInput
    _max?: FileRecordMaxOrderByAggregateInput
    _min?: FileRecordMinOrderByAggregateInput
  }

  export type FileRecordScalarWhereWithAggregatesInput = {
    AND?: FileRecordScalarWhereWithAggregatesInput | FileRecordScalarWhereWithAggregatesInput[]
    OR?: FileRecordScalarWhereWithAggregatesInput[]
    NOT?: FileRecordScalarWhereWithAggregatesInput | FileRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FileRecord"> | string
    shortId?: StringNullableWithAggregatesFilter<"FileRecord"> | string | null
    name?: StringWithAggregatesFilter<"FileRecord"> | string
    fileId?: StringWithAggregatesFilter<"FileRecord"> | string
    viewerFileId?: StringNullableWithAggregatesFilter<"FileRecord"> | string | null
    category?: EnumFileCategoryWithAggregatesFilter<"FileRecord"> | $Enums.FileCategory
    extension?: StringNullableWithAggregatesFilter<"FileRecord"> | string | null
    size?: StringWithAggregatesFilter<"FileRecord"> | string
    status?: EnumProcessStatusWithAggregatesFilter<"FileRecord"> | $Enums.ProcessStatus
    errorMessage?: StringNullableWithAggregatesFilter<"FileRecord"> | string | null
    uploaderId?: StringWithAggregatesFilter<"FileRecord"> | string
    postId?: StringNullableWithAggregatesFilter<"FileRecord"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FileRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FileRecord"> | Date | string
  }

  export type ModelWhereInput = {
    AND?: ModelWhereInput | ModelWhereInput[]
    OR?: ModelWhereInput[]
    NOT?: ModelWhereInput | ModelWhereInput[]
    id?: StringFilter<"Model"> | string
    shortId?: StringFilter<"Model"> | string
    name?: StringFilter<"Model"> | string
    fileId?: StringFilter<"Model"> | string
    uploaderId?: StringFilter<"Model"> | string
    size?: StringFilter<"Model"> | string
    status?: EnumProcessStatusFilter<"Model"> | $Enums.ProcessStatus
    errorMessage?: StringNullableFilter<"Model"> | string | null
    createdAt?: DateTimeFilter<"Model"> | Date | string
    updatedAt?: DateTimeFilter<"Model"> | Date | string
    uploader?: XOR<UserScalarRelationFilter, UserWhereInput>
    posts?: PostListRelationFilter
  }

  export type ModelOrderByWithRelationInput = {
    id?: SortOrder
    shortId?: SortOrder
    name?: SortOrder
    fileId?: SortOrder
    uploaderId?: SortOrder
    size?: SortOrder
    status?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uploader?: UserOrderByWithRelationInput
    posts?: PostOrderByRelationAggregateInput
  }

  export type ModelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    shortId?: string
    fileId?: string
    AND?: ModelWhereInput | ModelWhereInput[]
    OR?: ModelWhereInput[]
    NOT?: ModelWhereInput | ModelWhereInput[]
    name?: StringFilter<"Model"> | string
    uploaderId?: StringFilter<"Model"> | string
    size?: StringFilter<"Model"> | string
    status?: EnumProcessStatusFilter<"Model"> | $Enums.ProcessStatus
    errorMessage?: StringNullableFilter<"Model"> | string | null
    createdAt?: DateTimeFilter<"Model"> | Date | string
    updatedAt?: DateTimeFilter<"Model"> | Date | string
    uploader?: XOR<UserScalarRelationFilter, UserWhereInput>
    posts?: PostListRelationFilter
  }, "id" | "shortId" | "fileId">

  export type ModelOrderByWithAggregationInput = {
    id?: SortOrder
    shortId?: SortOrder
    name?: SortOrder
    fileId?: SortOrder
    uploaderId?: SortOrder
    size?: SortOrder
    status?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ModelCountOrderByAggregateInput
    _max?: ModelMaxOrderByAggregateInput
    _min?: ModelMinOrderByAggregateInput
  }

  export type ModelScalarWhereWithAggregatesInput = {
    AND?: ModelScalarWhereWithAggregatesInput | ModelScalarWhereWithAggregatesInput[]
    OR?: ModelScalarWhereWithAggregatesInput[]
    NOT?: ModelScalarWhereWithAggregatesInput | ModelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Model"> | string
    shortId?: StringWithAggregatesFilter<"Model"> | string
    name?: StringWithAggregatesFilter<"Model"> | string
    fileId?: StringWithAggregatesFilter<"Model"> | string
    uploaderId?: StringWithAggregatesFilter<"Model"> | string
    size?: StringWithAggregatesFilter<"Model"> | string
    status?: EnumProcessStatusWithAggregatesFilter<"Model"> | $Enums.ProcessStatus
    errorMessage?: StringNullableWithAggregatesFilter<"Model"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Model"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Model"> | Date | string
  }

  export type PdfWhereInput = {
    AND?: PdfWhereInput | PdfWhereInput[]
    OR?: PdfWhereInput[]
    NOT?: PdfWhereInput | PdfWhereInput[]
    id?: StringFilter<"Pdf"> | string
    name?: StringFilter<"Pdf"> | string
    fileId?: StringFilter<"Pdf"> | string
    uploaderId?: StringFilter<"Pdf"> | string
    createdAt?: DateTimeFilter<"Pdf"> | Date | string
    updatedAt?: DateTimeFilter<"Pdf"> | Date | string
    uploader?: XOR<UserScalarRelationFilter, UserWhereInput>
    posts?: PostListRelationFilter
  }

  export type PdfOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    fileId?: SortOrder
    uploaderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uploader?: UserOrderByWithRelationInput
    posts?: PostOrderByRelationAggregateInput
  }

  export type PdfWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    fileId?: string
    AND?: PdfWhereInput | PdfWhereInput[]
    OR?: PdfWhereInput[]
    NOT?: PdfWhereInput | PdfWhereInput[]
    name?: StringFilter<"Pdf"> | string
    uploaderId?: StringFilter<"Pdf"> | string
    createdAt?: DateTimeFilter<"Pdf"> | Date | string
    updatedAt?: DateTimeFilter<"Pdf"> | Date | string
    uploader?: XOR<UserScalarRelationFilter, UserWhereInput>
    posts?: PostListRelationFilter
  }, "id" | "fileId">

  export type PdfOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    fileId?: SortOrder
    uploaderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PdfCountOrderByAggregateInput
    _max?: PdfMaxOrderByAggregateInput
    _min?: PdfMinOrderByAggregateInput
  }

  export type PdfScalarWhereWithAggregatesInput = {
    AND?: PdfScalarWhereWithAggregatesInput | PdfScalarWhereWithAggregatesInput[]
    OR?: PdfScalarWhereWithAggregatesInput[]
    NOT?: PdfScalarWhereWithAggregatesInput | PdfScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pdf"> | string
    name?: StringWithAggregatesFilter<"Pdf"> | string
    fileId?: StringWithAggregatesFilter<"Pdf"> | string
    uploaderId?: StringWithAggregatesFilter<"Pdf"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Pdf"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Pdf"> | Date | string
  }

  export type PhaseWhereInput = {
    AND?: PhaseWhereInput | PhaseWhereInput[]
    OR?: PhaseWhereInput[]
    NOT?: PhaseWhereInput | PhaseWhereInput[]
    id?: StringFilter<"Phase"> | string
    name?: StringFilter<"Phase"> | string
    sortOrder?: IntFilter<"Phase"> | number
    projectId?: StringFilter<"Phase"> | string
    createdAt?: DateTimeFilter<"Phase"> | Date | string
    updatedAt?: DateTimeFilter<"Phase"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    projectAssets?: ProjectAssetListRelationFilter
  }

  export type PhaseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    sortOrder?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    projectAssets?: ProjectAssetOrderByRelationAggregateInput
  }

  export type PhaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PhaseWhereInput | PhaseWhereInput[]
    OR?: PhaseWhereInput[]
    NOT?: PhaseWhereInput | PhaseWhereInput[]
    name?: StringFilter<"Phase"> | string
    sortOrder?: IntFilter<"Phase"> | number
    projectId?: StringFilter<"Phase"> | string
    createdAt?: DateTimeFilter<"Phase"> | Date | string
    updatedAt?: DateTimeFilter<"Phase"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    projectAssets?: ProjectAssetListRelationFilter
  }, "id">

  export type PhaseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    sortOrder?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PhaseCountOrderByAggregateInput
    _avg?: PhaseAvgOrderByAggregateInput
    _max?: PhaseMaxOrderByAggregateInput
    _min?: PhaseMinOrderByAggregateInput
    _sum?: PhaseSumOrderByAggregateInput
  }

  export type PhaseScalarWhereWithAggregatesInput = {
    AND?: PhaseScalarWhereWithAggregatesInput | PhaseScalarWhereWithAggregatesInput[]
    OR?: PhaseScalarWhereWithAggregatesInput[]
    NOT?: PhaseScalarWhereWithAggregatesInput | PhaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Phase"> | string
    name?: StringWithAggregatesFilter<"Phase"> | string
    sortOrder?: IntWithAggregatesFilter<"Phase"> | number
    projectId?: StringWithAggregatesFilter<"Phase"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Phase"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Phase"> | Date | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: StringFilter<"Post"> | string
    shortId?: StringFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    category?: StringFilter<"Post"> | string
    description?: StringNullableFilter<"Post"> | string | null
    type?: StringFilter<"Post"> | string
    keywords?: StringNullableListFilter<"Post">
    coverImage?: StringFilter<"Post"> | string
    images?: StringNullableListFilter<"Post">
    uploaderId?: StringFilter<"Post"> | string
    relatedPosts?: StringNullableListFilter<"Post">
    permission?: StringFilter<"Post"> | string
    teamId?: StringNullableFilter<"Post"> | string | null
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    models?: ModelListRelationFilter
    pdfIds?: PdfListRelationFilter
    files?: FileRecordListRelationFilter
    uploader?: XOR<UserScalarRelationFilter, UserWhereInput>
    team?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
    comments?: CommentListRelationFilter
    projectAssets?: ProjectAssetListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    shortId?: SortOrder
    title?: SortOrder
    category?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    keywords?: SortOrder
    coverImage?: SortOrder
    images?: SortOrder
    uploaderId?: SortOrder
    relatedPosts?: SortOrder
    permission?: SortOrder
    teamId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    models?: ModelOrderByRelationAggregateInput
    pdfIds?: PdfOrderByRelationAggregateInput
    files?: FileRecordOrderByRelationAggregateInput
    uploader?: UserOrderByWithRelationInput
    team?: TeamOrderByWithRelationInput
    comments?: CommentOrderByRelationAggregateInput
    projectAssets?: ProjectAssetOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    shortId?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    title?: StringFilter<"Post"> | string
    category?: StringFilter<"Post"> | string
    description?: StringNullableFilter<"Post"> | string | null
    type?: StringFilter<"Post"> | string
    keywords?: StringNullableListFilter<"Post">
    coverImage?: StringFilter<"Post"> | string
    images?: StringNullableListFilter<"Post">
    uploaderId?: StringFilter<"Post"> | string
    relatedPosts?: StringNullableListFilter<"Post">
    permission?: StringFilter<"Post"> | string
    teamId?: StringNullableFilter<"Post"> | string | null
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    models?: ModelListRelationFilter
    pdfIds?: PdfListRelationFilter
    files?: FileRecordListRelationFilter
    uploader?: XOR<UserScalarRelationFilter, UserWhereInput>
    team?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
    comments?: CommentListRelationFilter
    projectAssets?: ProjectAssetListRelationFilter
  }, "id" | "shortId">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    shortId?: SortOrder
    title?: SortOrder
    category?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    keywords?: SortOrder
    coverImage?: SortOrder
    images?: SortOrder
    uploaderId?: SortOrder
    relatedPosts?: SortOrder
    permission?: SortOrder
    teamId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Post"> | string
    shortId?: StringWithAggregatesFilter<"Post"> | string
    title?: StringWithAggregatesFilter<"Post"> | string
    category?: StringWithAggregatesFilter<"Post"> | string
    description?: StringNullableWithAggregatesFilter<"Post"> | string | null
    type?: StringWithAggregatesFilter<"Post"> | string
    keywords?: StringNullableListFilter<"Post">
    coverImage?: StringWithAggregatesFilter<"Post"> | string
    images?: StringNullableListFilter<"Post">
    uploaderId?: StringWithAggregatesFilter<"Post"> | string
    relatedPosts?: StringNullableListFilter<"Post">
    permission?: StringWithAggregatesFilter<"Post"> | string
    teamId?: StringNullableWithAggregatesFilter<"Post"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    client?: StringNullableFilter<"Project"> | string | null
    location?: StringNullableFilter<"Project"> | string | null
    coverImage?: StringNullableFilter<"Project"> | string | null
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    teamId?: StringFilter<"Project"> | string
    creatorId?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    phases?: PhaseListRelationFilter
    assets?: ProjectAssetListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    client?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    status?: SortOrder
    teamId?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    team?: TeamOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
    phases?: PhaseOrderByRelationAggregateInput
    assets?: ProjectAssetOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    client?: StringNullableFilter<"Project"> | string | null
    location?: StringNullableFilter<"Project"> | string | null
    coverImage?: StringNullableFilter<"Project"> | string | null
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    teamId?: StringFilter<"Project"> | string
    creatorId?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    phases?: PhaseListRelationFilter
    assets?: ProjectAssetListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    client?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    status?: SortOrder
    teamId?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    client?: StringNullableWithAggregatesFilter<"Project"> | string | null
    location?: StringNullableWithAggregatesFilter<"Project"> | string | null
    coverImage?: StringNullableWithAggregatesFilter<"Project"> | string | null
    status?: EnumProjectStatusWithAggregatesFilter<"Project"> | $Enums.ProjectStatus
    teamId?: StringWithAggregatesFilter<"Project"> | string
    creatorId?: StringWithAggregatesFilter<"Project"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type ProjectAssetWhereInput = {
    AND?: ProjectAssetWhereInput | ProjectAssetWhereInput[]
    OR?: ProjectAssetWhereInput[]
    NOT?: ProjectAssetWhereInput | ProjectAssetWhereInput[]
    id?: StringFilter<"ProjectAsset"> | string
    sortOrder?: IntFilter<"ProjectAsset"> | number
    projectId?: StringFilter<"ProjectAsset"> | string
    phaseId?: StringNullableFilter<"ProjectAsset"> | string | null
    postId?: StringFilter<"ProjectAsset"> | string
    createdAt?: DateTimeFilter<"ProjectAsset"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    phase?: XOR<PhaseNullableScalarRelationFilter, PhaseWhereInput> | null
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }

  export type ProjectAssetOrderByWithRelationInput = {
    id?: SortOrder
    sortOrder?: SortOrder
    projectId?: SortOrder
    phaseId?: SortOrderInput | SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    phase?: PhaseOrderByWithRelationInput
    post?: PostOrderByWithRelationInput
  }

  export type ProjectAssetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    projectId_phaseId_postId?: ProjectAssetProjectIdPhaseIdPostIdCompoundUniqueInput
    AND?: ProjectAssetWhereInput | ProjectAssetWhereInput[]
    OR?: ProjectAssetWhereInput[]
    NOT?: ProjectAssetWhereInput | ProjectAssetWhereInput[]
    sortOrder?: IntFilter<"ProjectAsset"> | number
    projectId?: StringFilter<"ProjectAsset"> | string
    phaseId?: StringNullableFilter<"ProjectAsset"> | string | null
    postId?: StringFilter<"ProjectAsset"> | string
    createdAt?: DateTimeFilter<"ProjectAsset"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    phase?: XOR<PhaseNullableScalarRelationFilter, PhaseWhereInput> | null
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }, "id" | "projectId_phaseId_postId">

  export type ProjectAssetOrderByWithAggregationInput = {
    id?: SortOrder
    sortOrder?: SortOrder
    projectId?: SortOrder
    phaseId?: SortOrderInput | SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    _count?: ProjectAssetCountOrderByAggregateInput
    _avg?: ProjectAssetAvgOrderByAggregateInput
    _max?: ProjectAssetMaxOrderByAggregateInput
    _min?: ProjectAssetMinOrderByAggregateInput
    _sum?: ProjectAssetSumOrderByAggregateInput
  }

  export type ProjectAssetScalarWhereWithAggregatesInput = {
    AND?: ProjectAssetScalarWhereWithAggregatesInput | ProjectAssetScalarWhereWithAggregatesInput[]
    OR?: ProjectAssetScalarWhereWithAggregatesInput[]
    NOT?: ProjectAssetScalarWhereWithAggregatesInput | ProjectAssetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectAsset"> | string
    sortOrder?: IntWithAggregatesFilter<"ProjectAsset"> | number
    projectId?: StringWithAggregatesFilter<"ProjectAsset"> | string
    phaseId?: StringNullableWithAggregatesFilter<"ProjectAsset"> | string | null
    postId?: StringWithAggregatesFilter<"ProjectAsset"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProjectAsset"> | Date | string
  }

  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    id?: StringFilter<"Team"> | string
    name?: StringFilter<"Team"> | string
    description?: StringNullableFilter<"Team"> | string | null
    avatar?: StringNullableFilter<"Team"> | string | null
    color?: StringNullableFilter<"Team"> | string | null
    createdAt?: DateTimeFilter<"Team"> | Date | string
    updatedAt?: DateTimeFilter<"Team"> | Date | string
    members?: TeamMemberListRelationFilter
    posts?: PostListRelationFilter
    projects?: ProjectListRelationFilter
  }

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    members?: TeamMemberOrderByRelationAggregateInput
    posts?: PostOrderByRelationAggregateInput
    projects?: ProjectOrderByRelationAggregateInput
  }

  export type TeamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    name?: StringFilter<"Team"> | string
    description?: StringNullableFilter<"Team"> | string | null
    avatar?: StringNullableFilter<"Team"> | string | null
    color?: StringNullableFilter<"Team"> | string | null
    createdAt?: DateTimeFilter<"Team"> | Date | string
    updatedAt?: DateTimeFilter<"Team"> | Date | string
    members?: TeamMemberListRelationFilter
    posts?: PostListRelationFilter
    projects?: ProjectListRelationFilter
  }, "id">

  export type TeamOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TeamCountOrderByAggregateInput
    _max?: TeamMaxOrderByAggregateInput
    _min?: TeamMinOrderByAggregateInput
  }

  export type TeamScalarWhereWithAggregatesInput = {
    AND?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    OR?: TeamScalarWhereWithAggregatesInput[]
    NOT?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Team"> | string
    name?: StringWithAggregatesFilter<"Team"> | string
    description?: StringNullableWithAggregatesFilter<"Team"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"Team"> | string | null
    color?: StringNullableWithAggregatesFilter<"Team"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Team"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Team"> | Date | string
  }

  export type TeamMemberWhereInput = {
    AND?: TeamMemberWhereInput | TeamMemberWhereInput[]
    OR?: TeamMemberWhereInput[]
    NOT?: TeamMemberWhereInput | TeamMemberWhereInput[]
    id?: StringFilter<"TeamMember"> | string
    role?: EnumTeamRoleFilter<"TeamMember"> | $Enums.TeamRole
    teamId?: StringFilter<"TeamMember"> | string
    userId?: StringFilter<"TeamMember"> | string
    joinedAt?: DateTimeFilter<"TeamMember"> | Date | string
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TeamMemberOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    teamId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
    team?: TeamOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type TeamMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    teamId_userId?: TeamMemberTeamIdUserIdCompoundUniqueInput
    AND?: TeamMemberWhereInput | TeamMemberWhereInput[]
    OR?: TeamMemberWhereInput[]
    NOT?: TeamMemberWhereInput | TeamMemberWhereInput[]
    role?: EnumTeamRoleFilter<"TeamMember"> | $Enums.TeamRole
    teamId?: StringFilter<"TeamMember"> | string
    userId?: StringFilter<"TeamMember"> | string
    joinedAt?: DateTimeFilter<"TeamMember"> | Date | string
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "teamId_userId">

  export type TeamMemberOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    teamId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
    _count?: TeamMemberCountOrderByAggregateInput
    _max?: TeamMemberMaxOrderByAggregateInput
    _min?: TeamMemberMinOrderByAggregateInput
  }

  export type TeamMemberScalarWhereWithAggregatesInput = {
    AND?: TeamMemberScalarWhereWithAggregatesInput | TeamMemberScalarWhereWithAggregatesInput[]
    OR?: TeamMemberScalarWhereWithAggregatesInput[]
    NOT?: TeamMemberScalarWhereWithAggregatesInput | TeamMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TeamMember"> | string
    role?: EnumTeamRoleWithAggregatesFilter<"TeamMember"> | $Enums.TeamRole
    teamId?: StringWithAggregatesFilter<"TeamMember"> | string
    userId?: StringWithAggregatesFilter<"TeamMember"> | string
    joinedAt?: DateTimeWithAggregatesFilter<"TeamMember"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    userName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    image?: StringNullableFilter<"User"> | string | null
    userCollection?: StringNullableListFilter<"User">
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    teamMembers?: TeamMemberListRelationFilter
    accounts?: AccountListRelationFilter
    models?: ModelListRelationFilter
    pdfs?: PdfListRelationFilter
    fileRecords?: FileRecordListRelationFilter
    posts?: PostListRelationFilter
    comments?: CommentListRelationFilter
    projects?: ProjectListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    role?: SortOrder
    image?: SortOrderInput | SortOrder
    userCollection?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    teamMembers?: TeamMemberOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    models?: ModelOrderByRelationAggregateInput
    pdfs?: PdfOrderByRelationAggregateInput
    fileRecords?: FileRecordOrderByRelationAggregateInput
    posts?: PostOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    projects?: ProjectOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userName?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    role?: EnumRoleFilter<"User"> | $Enums.Role
    image?: StringNullableFilter<"User"> | string | null
    userCollection?: StringNullableListFilter<"User">
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    teamMembers?: TeamMemberListRelationFilter
    accounts?: AccountListRelationFilter
    models?: ModelListRelationFilter
    pdfs?: PdfListRelationFilter
    fileRecords?: FileRecordListRelationFilter
    posts?: PostListRelationFilter
    comments?: CommentListRelationFilter
    projects?: ProjectListRelationFilter
  }, "id" | "userName" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    role?: SortOrder
    image?: SortOrderInput | SortOrder
    userCollection?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    userName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    userCollection?: StringNullableListFilter<"User">
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    password?: string | null
    provider: string
    providerAccountId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    password?: string | null
    provider: string
    providerAccountId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    password?: string | null
    provider: string
    providerAccountId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    post: PostCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    content: string
    postId: string
    userId: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type CommentCreateManyInput = {
    id?: string
    content: string
    postId: string
    userId: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileRecordCreateInput = {
    id?: string
    shortId?: string | null
    name: string
    fileId: string
    viewerFileId?: string | null
    category?: $Enums.FileCategory
    extension?: string | null
    size?: string
    status?: $Enums.ProcessStatus
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    uploader: UserCreateNestedOneWithoutFileRecordsInput
    post?: PostCreateNestedOneWithoutFilesInput
  }

  export type FileRecordUncheckedCreateInput = {
    id?: string
    shortId?: string | null
    name: string
    fileId: string
    viewerFileId?: string | null
    category?: $Enums.FileCategory
    extension?: string | null
    size?: string
    status?: $Enums.ProcessStatus
    errorMessage?: string | null
    uploaderId: string
    postId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    viewerFileId?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumFileCategoryFieldUpdateOperationsInput | $Enums.FileCategory
    extension?: NullableStringFieldUpdateOperationsInput | string | null
    size?: StringFieldUpdateOperationsInput | string
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploader?: UserUpdateOneRequiredWithoutFileRecordsNestedInput
    post?: PostUpdateOneWithoutFilesNestedInput
  }

  export type FileRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    viewerFileId?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumFileCategoryFieldUpdateOperationsInput | $Enums.FileCategory
    extension?: NullableStringFieldUpdateOperationsInput | string | null
    size?: StringFieldUpdateOperationsInput | string
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    uploaderId?: StringFieldUpdateOperationsInput | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileRecordCreateManyInput = {
    id?: string
    shortId?: string | null
    name: string
    fileId: string
    viewerFileId?: string | null
    category?: $Enums.FileCategory
    extension?: string | null
    size?: string
    status?: $Enums.ProcessStatus
    errorMessage?: string | null
    uploaderId: string
    postId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    viewerFileId?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumFileCategoryFieldUpdateOperationsInput | $Enums.FileCategory
    extension?: NullableStringFieldUpdateOperationsInput | string | null
    size?: StringFieldUpdateOperationsInput | string
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    viewerFileId?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumFileCategoryFieldUpdateOperationsInput | $Enums.FileCategory
    extension?: NullableStringFieldUpdateOperationsInput | string | null
    size?: StringFieldUpdateOperationsInput | string
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    uploaderId?: StringFieldUpdateOperationsInput | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelCreateInput = {
    id?: string
    shortId: string
    name: string
    fileId: string
    size?: string
    status?: $Enums.ProcessStatus
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    uploader: UserCreateNestedOneWithoutModelsInput
    posts?: PostCreateNestedManyWithoutModelsInput
  }

  export type ModelUncheckedCreateInput = {
    id?: string
    shortId: string
    name: string
    fileId: string
    uploaderId: string
    size?: string
    status?: $Enums.ProcessStatus
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutModelsInput
  }

  export type ModelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploader?: UserUpdateOneRequiredWithoutModelsNestedInput
    posts?: PostUpdateManyWithoutModelsNestedInput
  }

  export type ModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    uploaderId?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutModelsNestedInput
  }

  export type ModelCreateManyInput = {
    id?: string
    shortId: string
    name: string
    fileId: string
    uploaderId: string
    size?: string
    status?: $Enums.ProcessStatus
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    uploaderId?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PdfCreateInput = {
    id?: string
    name: string
    fileId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    uploader: UserCreateNestedOneWithoutPdfsInput
    posts?: PostCreateNestedManyWithoutPdfIdsInput
  }

  export type PdfUncheckedCreateInput = {
    id?: string
    name: string
    fileId: string
    uploaderId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutPdfIdsInput
  }

  export type PdfUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploader?: UserUpdateOneRequiredWithoutPdfsNestedInput
    posts?: PostUpdateManyWithoutPdfIdsNestedInput
  }

  export type PdfUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    uploaderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutPdfIdsNestedInput
  }

  export type PdfCreateManyInput = {
    id?: string
    name: string
    fileId: string
    uploaderId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PdfUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PdfUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    uploaderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhaseCreateInput = {
    id?: string
    name: string
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutPhasesInput
    projectAssets?: ProjectAssetCreateNestedManyWithoutPhaseInput
  }

  export type PhaseUncheckedCreateInput = {
    id?: string
    name: string
    sortOrder?: number
    projectId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projectAssets?: ProjectAssetUncheckedCreateNestedManyWithoutPhaseInput
  }

  export type PhaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutPhasesNestedInput
    projectAssets?: ProjectAssetUpdateManyWithoutPhaseNestedInput
  }

  export type PhaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectAssets?: ProjectAssetUncheckedUpdateManyWithoutPhaseNestedInput
  }

  export type PhaseCreateManyInput = {
    id?: string
    name: string
    sortOrder?: number
    projectId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateInput = {
    id?: string
    shortId: string
    title: string
    category: string
    description?: string | null
    type: string
    keywords?: PostCreatekeywordsInput | string[]
    coverImage: string
    images?: PostCreateimagesInput | string[]
    relatedPosts?: PostCreaterelatedPostsInput | string[]
    permission: string
    createdAt?: Date | string
    updatedAt?: Date | string
    models?: ModelCreateNestedManyWithoutPostsInput
    pdfIds?: PdfCreateNestedManyWithoutPostsInput
    files?: FileRecordCreateNestedManyWithoutPostInput
    uploader: UserCreateNestedOneWithoutPostsInput
    team?: TeamCreateNestedOneWithoutPostsInput
    comments?: CommentCreateNestedManyWithoutPostInput
    projectAssets?: ProjectAssetCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    shortId: string
    title: string
    category: string
    description?: string | null
    type: string
    keywords?: PostCreatekeywordsInput | string[]
    coverImage: string
    images?: PostCreateimagesInput | string[]
    uploaderId: string
    relatedPosts?: PostCreaterelatedPostsInput | string[]
    permission: string
    teamId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    models?: ModelUncheckedCreateNestedManyWithoutPostsInput
    pdfIds?: PdfUncheckedCreateNestedManyWithoutPostsInput
    files?: FileRecordUncheckedCreateNestedManyWithoutPostInput
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    projectAssets?: ProjectAssetUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    keywords?: PostUpdatekeywordsInput | string[]
    coverImage?: StringFieldUpdateOperationsInput | string
    images?: PostUpdateimagesInput | string[]
    relatedPosts?: PostUpdaterelatedPostsInput | string[]
    permission?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    models?: ModelUpdateManyWithoutPostsNestedInput
    pdfIds?: PdfUpdateManyWithoutPostsNestedInput
    files?: FileRecordUpdateManyWithoutPostNestedInput
    uploader?: UserUpdateOneRequiredWithoutPostsNestedInput
    team?: TeamUpdateOneWithoutPostsNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
    projectAssets?: ProjectAssetUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    keywords?: PostUpdatekeywordsInput | string[]
    coverImage?: StringFieldUpdateOperationsInput | string
    images?: PostUpdateimagesInput | string[]
    uploaderId?: StringFieldUpdateOperationsInput | string
    relatedPosts?: PostUpdaterelatedPostsInput | string[]
    permission?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    models?: ModelUncheckedUpdateManyWithoutPostsNestedInput
    pdfIds?: PdfUncheckedUpdateManyWithoutPostsNestedInput
    files?: FileRecordUncheckedUpdateManyWithoutPostNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
    projectAssets?: ProjectAssetUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: string
    shortId: string
    title: string
    category: string
    description?: string | null
    type: string
    keywords?: PostCreatekeywordsInput | string[]
    coverImage: string
    images?: PostCreateimagesInput | string[]
    uploaderId: string
    relatedPosts?: PostCreaterelatedPostsInput | string[]
    permission: string
    teamId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    keywords?: PostUpdatekeywordsInput | string[]
    coverImage?: StringFieldUpdateOperationsInput | string
    images?: PostUpdateimagesInput | string[]
    relatedPosts?: PostUpdaterelatedPostsInput | string[]
    permission?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    keywords?: PostUpdatekeywordsInput | string[]
    coverImage?: StringFieldUpdateOperationsInput | string
    images?: PostUpdateimagesInput | string[]
    uploaderId?: StringFieldUpdateOperationsInput | string
    relatedPosts?: PostUpdaterelatedPostsInput | string[]
    permission?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    name: string
    description?: string | null
    client?: string | null
    location?: string | null
    coverImage?: string | null
    status?: $Enums.ProjectStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    team: TeamCreateNestedOneWithoutProjectsInput
    creator: UserCreateNestedOneWithoutProjectsInput
    phases?: PhaseCreateNestedManyWithoutProjectInput
    assets?: ProjectAssetCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    client?: string | null
    location?: string | null
    coverImage?: string | null
    status?: $Enums.ProjectStatus
    teamId: string
    creatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    phases?: PhaseUncheckedCreateNestedManyWithoutProjectInput
    assets?: ProjectAssetUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    client?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutProjectsNestedInput
    creator?: UserUpdateOneRequiredWithoutProjectsNestedInput
    phases?: PhaseUpdateManyWithoutProjectNestedInput
    assets?: ProjectAssetUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    client?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    teamId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phases?: PhaseUncheckedUpdateManyWithoutProjectNestedInput
    assets?: ProjectAssetUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    client?: string | null
    location?: string | null
    coverImage?: string | null
    status?: $Enums.ProjectStatus
    teamId: string
    creatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    client?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    client?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    teamId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectAssetCreateInput = {
    id?: string
    sortOrder?: number
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutAssetsInput
    phase?: PhaseCreateNestedOneWithoutProjectAssetsInput
    post: PostCreateNestedOneWithoutProjectAssetsInput
  }

  export type ProjectAssetUncheckedCreateInput = {
    id?: string
    sortOrder?: number
    projectId: string
    phaseId?: string | null
    postId: string
    createdAt?: Date | string
  }

  export type ProjectAssetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutAssetsNestedInput
    phase?: PhaseUpdateOneWithoutProjectAssetsNestedInput
    post?: PostUpdateOneRequiredWithoutProjectAssetsNestedInput
  }

  export type ProjectAssetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    projectId?: StringFieldUpdateOperationsInput | string
    phaseId?: NullableStringFieldUpdateOperationsInput | string | null
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectAssetCreateManyInput = {
    id?: string
    sortOrder?: number
    projectId: string
    phaseId?: string | null
    postId: string
    createdAt?: Date | string
  }

  export type ProjectAssetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectAssetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    projectId?: StringFieldUpdateOperationsInput | string
    phaseId?: NullableStringFieldUpdateOperationsInput | string | null
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamCreateInput = {
    id?: string
    name: string
    description?: string | null
    avatar?: string | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: TeamMemberCreateNestedManyWithoutTeamInput
    posts?: PostCreateNestedManyWithoutTeamInput
    projects?: ProjectCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    avatar?: string | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: TeamMemberUncheckedCreateNestedManyWithoutTeamInput
    posts?: PostUncheckedCreateNestedManyWithoutTeamInput
    projects?: ProjectUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: TeamMemberUpdateManyWithoutTeamNestedInput
    posts?: PostUpdateManyWithoutTeamNestedInput
    projects?: ProjectUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: TeamMemberUncheckedUpdateManyWithoutTeamNestedInput
    posts?: PostUncheckedUpdateManyWithoutTeamNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    avatar?: string | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberCreateInput = {
    id?: string
    role?: $Enums.TeamRole
    joinedAt?: Date | string
    team: TeamCreateNestedOneWithoutMembersInput
    user: UserCreateNestedOneWithoutTeamMembersInput
  }

  export type TeamMemberUncheckedCreateInput = {
    id?: string
    role?: $Enums.TeamRole
    teamId: string
    userId: string
    joinedAt?: Date | string
  }

  export type TeamMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumTeamRoleFieldUpdateOperationsInput | $Enums.TeamRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateOneRequiredWithoutTeamMembersNestedInput
  }

  export type TeamMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumTeamRoleFieldUpdateOperationsInput | $Enums.TeamRole
    teamId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberCreateManyInput = {
    id?: string
    role?: $Enums.TeamRole
    teamId: string
    userId: string
    joinedAt?: Date | string
  }

  export type TeamMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumTeamRoleFieldUpdateOperationsInput | $Enums.TeamRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumTeamRoleFieldUpdateOperationsInput | $Enums.TeamRole
    teamId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    userName: string
    email: string
    role?: $Enums.Role
    image?: string | null
    userCollection?: UserCreateuserCollectionInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    teamMembers?: TeamMemberCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    models?: ModelCreateNestedManyWithoutUploaderInput
    pdfs?: PdfCreateNestedManyWithoutUploaderInput
    fileRecords?: FileRecordCreateNestedManyWithoutUploaderInput
    posts?: PostCreateNestedManyWithoutUploaderInput
    comments?: CommentCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    userName: string
    email: string
    role?: $Enums.Role
    image?: string | null
    userCollection?: UserCreateuserCollectionInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    teamMembers?: TeamMemberUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    models?: ModelUncheckedCreateNestedManyWithoutUploaderInput
    pdfs?: PdfUncheckedCreateNestedManyWithoutUploaderInput
    fileRecords?: FileRecordUncheckedCreateNestedManyWithoutUploaderInput
    posts?: PostUncheckedCreateNestedManyWithoutUploaderInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    image?: NullableStringFieldUpdateOperationsInput | string | null
    userCollection?: UserUpdateuserCollectionInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamMembers?: TeamMemberUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    models?: ModelUpdateManyWithoutUploaderNestedInput
    pdfs?: PdfUpdateManyWithoutUploaderNestedInput
    fileRecords?: FileRecordUpdateManyWithoutUploaderNestedInput
    posts?: PostUpdateManyWithoutUploaderNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    image?: NullableStringFieldUpdateOperationsInput | string | null
    userCollection?: UserUpdateuserCollectionInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamMembers?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    models?: ModelUncheckedUpdateManyWithoutUploaderNestedInput
    pdfs?: PdfUncheckedUpdateManyWithoutUploaderNestedInput
    fileRecords?: FileRecordUncheckedUpdateManyWithoutUploaderNestedInput
    posts?: PostUncheckedUpdateManyWithoutUploaderNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    userName: string
    email: string
    role?: $Enums.Role
    image?: string | null
    userCollection?: UserCreateuserCollectionInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    image?: NullableStringFieldUpdateOperationsInput | string | null
    userCollection?: UserUpdateuserCollectionInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    image?: NullableStringFieldUpdateOperationsInput | string | null
    userCollection?: UserUpdateuserCollectionInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    password?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    password?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    password?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PostScalarRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type CommentNullableScalarRelationFilter = {
    is?: CommentWhereInput | null
    isNot?: CommentWhereInput | null
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumFileCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.FileCategory | EnumFileCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.FileCategory[] | ListEnumFileCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.FileCategory[] | ListEnumFileCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumFileCategoryFilter<$PrismaModel> | $Enums.FileCategory
  }

  export type EnumProcessStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProcessStatus | EnumProcessStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProcessStatus[] | ListEnumProcessStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProcessStatus[] | ListEnumProcessStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProcessStatusFilter<$PrismaModel> | $Enums.ProcessStatus
  }

  export type PostNullableScalarRelationFilter = {
    is?: PostWhereInput | null
    isNot?: PostWhereInput | null
  }

  export type FileRecordCountOrderByAggregateInput = {
    id?: SortOrder
    shortId?: SortOrder
    name?: SortOrder
    fileId?: SortOrder
    viewerFileId?: SortOrder
    category?: SortOrder
    extension?: SortOrder
    size?: SortOrder
    status?: SortOrder
    errorMessage?: SortOrder
    uploaderId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FileRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    shortId?: SortOrder
    name?: SortOrder
    fileId?: SortOrder
    viewerFileId?: SortOrder
    category?: SortOrder
    extension?: SortOrder
    size?: SortOrder
    status?: SortOrder
    errorMessage?: SortOrder
    uploaderId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FileRecordMinOrderByAggregateInput = {
    id?: SortOrder
    shortId?: SortOrder
    name?: SortOrder
    fileId?: SortOrder
    viewerFileId?: SortOrder
    category?: SortOrder
    extension?: SortOrder
    size?: SortOrder
    status?: SortOrder
    errorMessage?: SortOrder
    uploaderId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumFileCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FileCategory | EnumFileCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.FileCategory[] | ListEnumFileCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.FileCategory[] | ListEnumFileCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumFileCategoryWithAggregatesFilter<$PrismaModel> | $Enums.FileCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFileCategoryFilter<$PrismaModel>
    _max?: NestedEnumFileCategoryFilter<$PrismaModel>
  }

  export type EnumProcessStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProcessStatus | EnumProcessStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProcessStatus[] | ListEnumProcessStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProcessStatus[] | ListEnumProcessStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProcessStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProcessStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProcessStatusFilter<$PrismaModel>
    _max?: NestedEnumProcessStatusFilter<$PrismaModel>
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModelCountOrderByAggregateInput = {
    id?: SortOrder
    shortId?: SortOrder
    name?: SortOrder
    fileId?: SortOrder
    uploaderId?: SortOrder
    size?: SortOrder
    status?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModelMaxOrderByAggregateInput = {
    id?: SortOrder
    shortId?: SortOrder
    name?: SortOrder
    fileId?: SortOrder
    uploaderId?: SortOrder
    size?: SortOrder
    status?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModelMinOrderByAggregateInput = {
    id?: SortOrder
    shortId?: SortOrder
    name?: SortOrder
    fileId?: SortOrder
    uploaderId?: SortOrder
    size?: SortOrder
    status?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PdfCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    fileId?: SortOrder
    uploaderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PdfMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    fileId?: SortOrder
    uploaderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PdfMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    fileId?: SortOrder
    uploaderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type ProjectAssetListRelationFilter = {
    every?: ProjectAssetWhereInput
    some?: ProjectAssetWhereInput
    none?: ProjectAssetWhereInput
  }

  export type ProjectAssetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PhaseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sortOrder?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhaseAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type PhaseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sortOrder?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhaseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sortOrder?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhaseSumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ModelListRelationFilter = {
    every?: ModelWhereInput
    some?: ModelWhereInput
    none?: ModelWhereInput
  }

  export type PdfListRelationFilter = {
    every?: PdfWhereInput
    some?: PdfWhereInput
    none?: PdfWhereInput
  }

  export type FileRecordListRelationFilter = {
    every?: FileRecordWhereInput
    some?: FileRecordWhereInput
    none?: FileRecordWhereInput
  }

  export type TeamNullableScalarRelationFilter = {
    is?: TeamWhereInput | null
    isNot?: TeamWhereInput | null
  }

  export type ModelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PdfOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FileRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    shortId?: SortOrder
    title?: SortOrder
    category?: SortOrder
    description?: SortOrder
    type?: SortOrder
    keywords?: SortOrder
    coverImage?: SortOrder
    images?: SortOrder
    uploaderId?: SortOrder
    relatedPosts?: SortOrder
    permission?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    shortId?: SortOrder
    title?: SortOrder
    category?: SortOrder
    description?: SortOrder
    type?: SortOrder
    coverImage?: SortOrder
    uploaderId?: SortOrder
    permission?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    shortId?: SortOrder
    title?: SortOrder
    category?: SortOrder
    description?: SortOrder
    type?: SortOrder
    coverImage?: SortOrder
    uploaderId?: SortOrder
    permission?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type TeamScalarRelationFilter = {
    is?: TeamWhereInput
    isNot?: TeamWhereInput
  }

  export type PhaseListRelationFilter = {
    every?: PhaseWhereInput
    some?: PhaseWhereInput
    none?: PhaseWhereInput
  }

  export type PhaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    client?: SortOrder
    location?: SortOrder
    coverImage?: SortOrder
    status?: SortOrder
    teamId?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    client?: SortOrder
    location?: SortOrder
    coverImage?: SortOrder
    status?: SortOrder
    teamId?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    client?: SortOrder
    location?: SortOrder
    coverImage?: SortOrder
    status?: SortOrder
    teamId?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }

  export type PhaseNullableScalarRelationFilter = {
    is?: PhaseWhereInput | null
    isNot?: PhaseWhereInput | null
  }

  export type ProjectAssetProjectIdPhaseIdPostIdCompoundUniqueInput = {
    projectId: string
    phaseId: string
    postId: string
  }

  export type ProjectAssetCountOrderByAggregateInput = {
    id?: SortOrder
    sortOrder?: SortOrder
    projectId?: SortOrder
    phaseId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectAssetAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type ProjectAssetMaxOrderByAggregateInput = {
    id?: SortOrder
    sortOrder?: SortOrder
    projectId?: SortOrder
    phaseId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectAssetMinOrderByAggregateInput = {
    id?: SortOrder
    sortOrder?: SortOrder
    projectId?: SortOrder
    phaseId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectAssetSumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type TeamMemberListRelationFilter = {
    every?: TeamMemberWhereInput
    some?: TeamMemberWhereInput
    none?: TeamMemberWhereInput
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type TeamMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    avatar?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    avatar?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    avatar?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTeamRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.TeamRole | EnumTeamRoleFieldRefInput<$PrismaModel>
    in?: $Enums.TeamRole[] | ListEnumTeamRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.TeamRole[] | ListEnumTeamRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumTeamRoleFilter<$PrismaModel> | $Enums.TeamRole
  }

  export type TeamMemberTeamIdUserIdCompoundUniqueInput = {
    teamId: string
    userId: string
  }

  export type TeamMemberCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    teamId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
  }

  export type TeamMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    teamId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
  }

  export type TeamMemberMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    teamId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
  }

  export type EnumTeamRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TeamRole | EnumTeamRoleFieldRefInput<$PrismaModel>
    in?: $Enums.TeamRole[] | ListEnumTeamRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.TeamRole[] | ListEnumTeamRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumTeamRoleWithAggregatesFilter<$PrismaModel> | $Enums.TeamRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTeamRoleFilter<$PrismaModel>
    _max?: NestedEnumTeamRoleFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    role?: SortOrder
    image?: SortOrder
    userCollection?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    role?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    role?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type PostCreateNestedOneWithoutCommentsInput = {
    create?: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput
    connect?: PostWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type CommentCreateNestedOneWithoutRepliesInput = {
    create?: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutRepliesInput
    connect?: CommentWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutParentInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type PostUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput
    upsert?: PostUpsertWithoutCommentsInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutCommentsInput, PostUpdateWithoutCommentsInput>, PostUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type CommentUpdateOneWithoutRepliesNestedInput = {
    create?: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutRepliesInput
    upsert?: CommentUpsertWithoutRepliesInput
    disconnect?: CommentWhereInput | boolean
    delete?: CommentWhereInput | boolean
    connect?: CommentWhereUniqueInput
    update?: XOR<XOR<CommentUpdateToOneWithWhereWithoutRepliesInput, CommentUpdateWithoutRepliesInput>, CommentUncheckedUpdateWithoutRepliesInput>
  }

  export type CommentUpdateManyWithoutParentNestedInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutParentInput | CommentUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutParentInput | CommentUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutParentInput | CommentUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutParentInput | CommentUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutParentInput | CommentUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutParentInput | CommentUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFileRecordsInput = {
    create?: XOR<UserCreateWithoutFileRecordsInput, UserUncheckedCreateWithoutFileRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFileRecordsInput
    connect?: UserWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutFilesInput = {
    create?: XOR<PostCreateWithoutFilesInput, PostUncheckedCreateWithoutFilesInput>
    connectOrCreate?: PostCreateOrConnectWithoutFilesInput
    connect?: PostWhereUniqueInput
  }

  export type EnumFileCategoryFieldUpdateOperationsInput = {
    set?: $Enums.FileCategory
  }

  export type EnumProcessStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProcessStatus
  }

  export type UserUpdateOneRequiredWithoutFileRecordsNestedInput = {
    create?: XOR<UserCreateWithoutFileRecordsInput, UserUncheckedCreateWithoutFileRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFileRecordsInput
    upsert?: UserUpsertWithoutFileRecordsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFileRecordsInput, UserUpdateWithoutFileRecordsInput>, UserUncheckedUpdateWithoutFileRecordsInput>
  }

  export type PostUpdateOneWithoutFilesNestedInput = {
    create?: XOR<PostCreateWithoutFilesInput, PostUncheckedCreateWithoutFilesInput>
    connectOrCreate?: PostCreateOrConnectWithoutFilesInput
    upsert?: PostUpsertWithoutFilesInput
    disconnect?: PostWhereInput | boolean
    delete?: PostWhereInput | boolean
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutFilesInput, PostUpdateWithoutFilesInput>, PostUncheckedUpdateWithoutFilesInput>
  }

  export type UserCreateNestedOneWithoutModelsInput = {
    create?: XOR<UserCreateWithoutModelsInput, UserUncheckedCreateWithoutModelsInput>
    connectOrCreate?: UserCreateOrConnectWithoutModelsInput
    connect?: UserWhereUniqueInput
  }

  export type PostCreateNestedManyWithoutModelsInput = {
    create?: XOR<PostCreateWithoutModelsInput, PostUncheckedCreateWithoutModelsInput> | PostCreateWithoutModelsInput[] | PostUncheckedCreateWithoutModelsInput[]
    connectOrCreate?: PostCreateOrConnectWithoutModelsInput | PostCreateOrConnectWithoutModelsInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutModelsInput = {
    create?: XOR<PostCreateWithoutModelsInput, PostUncheckedCreateWithoutModelsInput> | PostCreateWithoutModelsInput[] | PostUncheckedCreateWithoutModelsInput[]
    connectOrCreate?: PostCreateOrConnectWithoutModelsInput | PostCreateOrConnectWithoutModelsInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutModelsNestedInput = {
    create?: XOR<UserCreateWithoutModelsInput, UserUncheckedCreateWithoutModelsInput>
    connectOrCreate?: UserCreateOrConnectWithoutModelsInput
    upsert?: UserUpsertWithoutModelsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutModelsInput, UserUpdateWithoutModelsInput>, UserUncheckedUpdateWithoutModelsInput>
  }

  export type PostUpdateManyWithoutModelsNestedInput = {
    create?: XOR<PostCreateWithoutModelsInput, PostUncheckedCreateWithoutModelsInput> | PostCreateWithoutModelsInput[] | PostUncheckedCreateWithoutModelsInput[]
    connectOrCreate?: PostCreateOrConnectWithoutModelsInput | PostCreateOrConnectWithoutModelsInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutModelsInput | PostUpsertWithWhereUniqueWithoutModelsInput[]
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutModelsInput | PostUpdateWithWhereUniqueWithoutModelsInput[]
    updateMany?: PostUpdateManyWithWhereWithoutModelsInput | PostUpdateManyWithWhereWithoutModelsInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutModelsNestedInput = {
    create?: XOR<PostCreateWithoutModelsInput, PostUncheckedCreateWithoutModelsInput> | PostCreateWithoutModelsInput[] | PostUncheckedCreateWithoutModelsInput[]
    connectOrCreate?: PostCreateOrConnectWithoutModelsInput | PostCreateOrConnectWithoutModelsInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutModelsInput | PostUpsertWithWhereUniqueWithoutModelsInput[]
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutModelsInput | PostUpdateWithWhereUniqueWithoutModelsInput[]
    updateMany?: PostUpdateManyWithWhereWithoutModelsInput | PostUpdateManyWithWhereWithoutModelsInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPdfsInput = {
    create?: XOR<UserCreateWithoutPdfsInput, UserUncheckedCreateWithoutPdfsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPdfsInput
    connect?: UserWhereUniqueInput
  }

  export type PostCreateNestedManyWithoutPdfIdsInput = {
    create?: XOR<PostCreateWithoutPdfIdsInput, PostUncheckedCreateWithoutPdfIdsInput> | PostCreateWithoutPdfIdsInput[] | PostUncheckedCreateWithoutPdfIdsInput[]
    connectOrCreate?: PostCreateOrConnectWithoutPdfIdsInput | PostCreateOrConnectWithoutPdfIdsInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutPdfIdsInput = {
    create?: XOR<PostCreateWithoutPdfIdsInput, PostUncheckedCreateWithoutPdfIdsInput> | PostCreateWithoutPdfIdsInput[] | PostUncheckedCreateWithoutPdfIdsInput[]
    connectOrCreate?: PostCreateOrConnectWithoutPdfIdsInput | PostCreateOrConnectWithoutPdfIdsInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutPdfsNestedInput = {
    create?: XOR<UserCreateWithoutPdfsInput, UserUncheckedCreateWithoutPdfsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPdfsInput
    upsert?: UserUpsertWithoutPdfsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPdfsInput, UserUpdateWithoutPdfsInput>, UserUncheckedUpdateWithoutPdfsInput>
  }

  export type PostUpdateManyWithoutPdfIdsNestedInput = {
    create?: XOR<PostCreateWithoutPdfIdsInput, PostUncheckedCreateWithoutPdfIdsInput> | PostCreateWithoutPdfIdsInput[] | PostUncheckedCreateWithoutPdfIdsInput[]
    connectOrCreate?: PostCreateOrConnectWithoutPdfIdsInput | PostCreateOrConnectWithoutPdfIdsInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutPdfIdsInput | PostUpsertWithWhereUniqueWithoutPdfIdsInput[]
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutPdfIdsInput | PostUpdateWithWhereUniqueWithoutPdfIdsInput[]
    updateMany?: PostUpdateManyWithWhereWithoutPdfIdsInput | PostUpdateManyWithWhereWithoutPdfIdsInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutPdfIdsNestedInput = {
    create?: XOR<PostCreateWithoutPdfIdsInput, PostUncheckedCreateWithoutPdfIdsInput> | PostCreateWithoutPdfIdsInput[] | PostUncheckedCreateWithoutPdfIdsInput[]
    connectOrCreate?: PostCreateOrConnectWithoutPdfIdsInput | PostCreateOrConnectWithoutPdfIdsInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutPdfIdsInput | PostUpsertWithWhereUniqueWithoutPdfIdsInput[]
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutPdfIdsInput | PostUpdateWithWhereUniqueWithoutPdfIdsInput[]
    updateMany?: PostUpdateManyWithWhereWithoutPdfIdsInput | PostUpdateManyWithWhereWithoutPdfIdsInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutPhasesInput = {
    create?: XOR<ProjectCreateWithoutPhasesInput, ProjectUncheckedCreateWithoutPhasesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutPhasesInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectAssetCreateNestedManyWithoutPhaseInput = {
    create?: XOR<ProjectAssetCreateWithoutPhaseInput, ProjectAssetUncheckedCreateWithoutPhaseInput> | ProjectAssetCreateWithoutPhaseInput[] | ProjectAssetUncheckedCreateWithoutPhaseInput[]
    connectOrCreate?: ProjectAssetCreateOrConnectWithoutPhaseInput | ProjectAssetCreateOrConnectWithoutPhaseInput[]
    createMany?: ProjectAssetCreateManyPhaseInputEnvelope
    connect?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[]
  }

  export type ProjectAssetUncheckedCreateNestedManyWithoutPhaseInput = {
    create?: XOR<ProjectAssetCreateWithoutPhaseInput, ProjectAssetUncheckedCreateWithoutPhaseInput> | ProjectAssetCreateWithoutPhaseInput[] | ProjectAssetUncheckedCreateWithoutPhaseInput[]
    connectOrCreate?: ProjectAssetCreateOrConnectWithoutPhaseInput | ProjectAssetCreateOrConnectWithoutPhaseInput[]
    createMany?: ProjectAssetCreateManyPhaseInputEnvelope
    connect?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjectUpdateOneRequiredWithoutPhasesNestedInput = {
    create?: XOR<ProjectCreateWithoutPhasesInput, ProjectUncheckedCreateWithoutPhasesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutPhasesInput
    upsert?: ProjectUpsertWithoutPhasesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutPhasesInput, ProjectUpdateWithoutPhasesInput>, ProjectUncheckedUpdateWithoutPhasesInput>
  }

  export type ProjectAssetUpdateManyWithoutPhaseNestedInput = {
    create?: XOR<ProjectAssetCreateWithoutPhaseInput, ProjectAssetUncheckedCreateWithoutPhaseInput> | ProjectAssetCreateWithoutPhaseInput[] | ProjectAssetUncheckedCreateWithoutPhaseInput[]
    connectOrCreate?: ProjectAssetCreateOrConnectWithoutPhaseInput | ProjectAssetCreateOrConnectWithoutPhaseInput[]
    upsert?: ProjectAssetUpsertWithWhereUniqueWithoutPhaseInput | ProjectAssetUpsertWithWhereUniqueWithoutPhaseInput[]
    createMany?: ProjectAssetCreateManyPhaseInputEnvelope
    set?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[]
    disconnect?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[]
    delete?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[]
    connect?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[]
    update?: ProjectAssetUpdateWithWhereUniqueWithoutPhaseInput | ProjectAssetUpdateWithWhereUniqueWithoutPhaseInput[]
    updateMany?: ProjectAssetUpdateManyWithWhereWithoutPhaseInput | ProjectAssetUpdateManyWithWhereWithoutPhaseInput[]
    deleteMany?: ProjectAssetScalarWhereInput | ProjectAssetScalarWhereInput[]
  }

  export type ProjectAssetUncheckedUpdateManyWithoutPhaseNestedInput = {
    create?: XOR<ProjectAssetCreateWithoutPhaseInput, ProjectAssetUncheckedCreateWithoutPhaseInput> | ProjectAssetCreateWithoutPhaseInput[] | ProjectAssetUncheckedCreateWithoutPhaseInput[]
    connectOrCreate?: ProjectAssetCreateOrConnectWithoutPhaseInput | ProjectAssetCreateOrConnectWithoutPhaseInput[]
    upsert?: ProjectAssetUpsertWithWhereUniqueWithoutPhaseInput | ProjectAssetUpsertWithWhereUniqueWithoutPhaseInput[]
    createMany?: ProjectAssetCreateManyPhaseInputEnvelope
    set?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[]
    disconnect?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[]
    delete?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[]
    connect?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[]
    update?: ProjectAssetUpdateWithWhereUniqueWithoutPhaseInput | ProjectAssetUpdateWithWhereUniqueWithoutPhaseInput[]
    updateMany?: ProjectAssetUpdateManyWithWhereWithoutPhaseInput | ProjectAssetUpdateManyWithWhereWithoutPhaseInput[]
    deleteMany?: ProjectAssetScalarWhereInput | ProjectAssetScalarWhereInput[]
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

  export type ModelCreateNestedManyWithoutPostsInput = {
    create?: XOR<ModelCreateWithoutPostsInput, ModelUncheckedCreateWithoutPostsInput> | ModelCreateWithoutPostsInput[] | ModelUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: ModelCreateOrConnectWithoutPostsInput | ModelCreateOrConnectWithoutPostsInput[]
    connect?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
  }

  export type PdfCreateNestedManyWithoutPostsInput = {
    create?: XOR<PdfCreateWithoutPostsInput, PdfUncheckedCreateWithoutPostsInput> | PdfCreateWithoutPostsInput[] | PdfUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: PdfCreateOrConnectWithoutPostsInput | PdfCreateOrConnectWithoutPostsInput[]
    connect?: PdfWhereUniqueInput | PdfWhereUniqueInput[]
  }

  export type FileRecordCreateNestedManyWithoutPostInput = {
    create?: XOR<FileRecordCreateWithoutPostInput, FileRecordUncheckedCreateWithoutPostInput> | FileRecordCreateWithoutPostInput[] | FileRecordUncheckedCreateWithoutPostInput[]
    connectOrCreate?: FileRecordCreateOrConnectWithoutPostInput | FileRecordCreateOrConnectWithoutPostInput[]
    createMany?: FileRecordCreateManyPostInputEnvelope
    connect?: FileRecordWhereUniqueInput | FileRecordWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutPostsInput = {
    create?: XOR<TeamCreateWithoutPostsInput, TeamUncheckedCreateWithoutPostsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutPostsInput
    connect?: TeamWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type ProjectAssetCreateNestedManyWithoutPostInput = {
    create?: XOR<ProjectAssetCreateWithoutPostInput, ProjectAssetUncheckedCreateWithoutPostInput> | ProjectAssetCreateWithoutPostInput[] | ProjectAssetUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ProjectAssetCreateOrConnectWithoutPostInput | ProjectAssetCreateOrConnectWithoutPostInput[]
    createMany?: ProjectAssetCreateManyPostInputEnvelope
    connect?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[]
  }

  export type ModelUncheckedCreateNestedManyWithoutPostsInput = {
    create?: XOR<ModelCreateWithoutPostsInput, ModelUncheckedCreateWithoutPostsInput> | ModelCreateWithoutPostsInput[] | ModelUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: ModelCreateOrConnectWithoutPostsInput | ModelCreateOrConnectWithoutPostsInput[]
    connect?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
  }

  export type PdfUncheckedCreateNestedManyWithoutPostsInput = {
    create?: XOR<PdfCreateWithoutPostsInput, PdfUncheckedCreateWithoutPostsInput> | PdfCreateWithoutPostsInput[] | PdfUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: PdfCreateOrConnectWithoutPostsInput | PdfCreateOrConnectWithoutPostsInput[]
    connect?: PdfWhereUniqueInput | PdfWhereUniqueInput[]
  }

  export type FileRecordUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<FileRecordCreateWithoutPostInput, FileRecordUncheckedCreateWithoutPostInput> | FileRecordCreateWithoutPostInput[] | FileRecordUncheckedCreateWithoutPostInput[]
    connectOrCreate?: FileRecordCreateOrConnectWithoutPostInput | FileRecordCreateOrConnectWithoutPostInput[]
    createMany?: FileRecordCreateManyPostInputEnvelope
    connect?: FileRecordWhereUniqueInput | FileRecordWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type ProjectAssetUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<ProjectAssetCreateWithoutPostInput, ProjectAssetUncheckedCreateWithoutPostInput> | ProjectAssetCreateWithoutPostInput[] | ProjectAssetUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ProjectAssetCreateOrConnectWithoutPostInput | ProjectAssetCreateOrConnectWithoutPostInput[]
    createMany?: ProjectAssetCreateManyPostInputEnvelope
    connect?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[]
  }

  export type PostUpdatekeywordsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type PostUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type PostUpdaterelatedPostsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ModelUpdateManyWithoutPostsNestedInput = {
    create?: XOR<ModelCreateWithoutPostsInput, ModelUncheckedCreateWithoutPostsInput> | ModelCreateWithoutPostsInput[] | ModelUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: ModelCreateOrConnectWithoutPostsInput | ModelCreateOrConnectWithoutPostsInput[]
    upsert?: ModelUpsertWithWhereUniqueWithoutPostsInput | ModelUpsertWithWhereUniqueWithoutPostsInput[]
    set?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    disconnect?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    delete?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    connect?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    update?: ModelUpdateWithWhereUniqueWithoutPostsInput | ModelUpdateWithWhereUniqueWithoutPostsInput[]
    updateMany?: ModelUpdateManyWithWhereWithoutPostsInput | ModelUpdateManyWithWhereWithoutPostsInput[]
    deleteMany?: ModelScalarWhereInput | ModelScalarWhereInput[]
  }

  export type PdfUpdateManyWithoutPostsNestedInput = {
    create?: XOR<PdfCreateWithoutPostsInput, PdfUncheckedCreateWithoutPostsInput> | PdfCreateWithoutPostsInput[] | PdfUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: PdfCreateOrConnectWithoutPostsInput | PdfCreateOrConnectWithoutPostsInput[]
    upsert?: PdfUpsertWithWhereUniqueWithoutPostsInput | PdfUpsertWithWhereUniqueWithoutPostsInput[]
    set?: PdfWhereUniqueInput | PdfWhereUniqueInput[]
    disconnect?: PdfWhereUniqueInput | PdfWhereUniqueInput[]
    delete?: PdfWhereUniqueInput | PdfWhereUniqueInput[]
    connect?: PdfWhereUniqueInput | PdfWhereUniqueInput[]
    update?: PdfUpdateWithWhereUniqueWithoutPostsInput | PdfUpdateWithWhereUniqueWithoutPostsInput[]
    updateMany?: PdfUpdateManyWithWhereWithoutPostsInput | PdfUpdateManyWithWhereWithoutPostsInput[]
    deleteMany?: PdfScalarWhereInput | PdfScalarWhereInput[]
  }

  export type FileRecordUpdateManyWithoutPostNestedInput = {
    create?: XOR<FileRecordCreateWithoutPostInput, FileRecordUncheckedCreateWithoutPostInput> | FileRecordCreateWithoutPostInput[] | FileRecordUncheckedCreateWithoutPostInput[]
    connectOrCreate?: FileRecordCreateOrConnectWithoutPostInput | FileRecordCreateOrConnectWithoutPostInput[]
    upsert?: FileRecordUpsertWithWhereUniqueWithoutPostInput | FileRecordUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: FileRecordCreateManyPostInputEnvelope
    set?: FileRecordWhereUniqueInput | FileRecordWhereUniqueInput[]
    disconnect?: FileRecordWhereUniqueInput | FileRecordWhereUniqueInput[]
    delete?: FileRecordWhereUniqueInput | FileRecordWhereUniqueInput[]
    connect?: FileRecordWhereUniqueInput | FileRecordWhereUniqueInput[]
    update?: FileRecordUpdateWithWhereUniqueWithoutPostInput | FileRecordUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: FileRecordUpdateManyWithWhereWithoutPostInput | FileRecordUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: FileRecordScalarWhereInput | FileRecordScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type TeamUpdateOneWithoutPostsNestedInput = {
    create?: XOR<TeamCreateWithoutPostsInput, TeamUncheckedCreateWithoutPostsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutPostsInput
    upsert?: TeamUpsertWithoutPostsInput
    disconnect?: TeamWhereInput | boolean
    delete?: TeamWhereInput | boolean
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutPostsInput, TeamUpdateWithoutPostsInput>, TeamUncheckedUpdateWithoutPostsInput>
  }

  export type CommentUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutPostInput | CommentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutPostInput | CommentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutPostInput | CommentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ProjectAssetUpdateManyWithoutPostNestedInput = {
    create?: XOR<ProjectAssetCreateWithoutPostInput, ProjectAssetUncheckedCreateWithoutPostInput> | ProjectAssetCreateWithoutPostInput[] | ProjectAssetUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ProjectAssetCreateOrConnectWithoutPostInput | ProjectAssetCreateOrConnectWithoutPostInput[]
    upsert?: ProjectAssetUpsertWithWhereUniqueWithoutPostInput | ProjectAssetUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ProjectAssetCreateManyPostInputEnvelope
    set?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[]
    disconnect?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[]
    delete?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[]
    connect?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[]
    update?: ProjectAssetUpdateWithWhereUniqueWithoutPostInput | ProjectAssetUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ProjectAssetUpdateManyWithWhereWithoutPostInput | ProjectAssetUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ProjectAssetScalarWhereInput | ProjectAssetScalarWhereInput[]
  }

  export type ModelUncheckedUpdateManyWithoutPostsNestedInput = {
    create?: XOR<ModelCreateWithoutPostsInput, ModelUncheckedCreateWithoutPostsInput> | ModelCreateWithoutPostsInput[] | ModelUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: ModelCreateOrConnectWithoutPostsInput | ModelCreateOrConnectWithoutPostsInput[]
    upsert?: ModelUpsertWithWhereUniqueWithoutPostsInput | ModelUpsertWithWhereUniqueWithoutPostsInput[]
    set?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    disconnect?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    delete?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    connect?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    update?: ModelUpdateWithWhereUniqueWithoutPostsInput | ModelUpdateWithWhereUniqueWithoutPostsInput[]
    updateMany?: ModelUpdateManyWithWhereWithoutPostsInput | ModelUpdateManyWithWhereWithoutPostsInput[]
    deleteMany?: ModelScalarWhereInput | ModelScalarWhereInput[]
  }

  export type PdfUncheckedUpdateManyWithoutPostsNestedInput = {
    create?: XOR<PdfCreateWithoutPostsInput, PdfUncheckedCreateWithoutPostsInput> | PdfCreateWithoutPostsInput[] | PdfUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: PdfCreateOrConnectWithoutPostsInput | PdfCreateOrConnectWithoutPostsInput[]
    upsert?: PdfUpsertWithWhereUniqueWithoutPostsInput | PdfUpsertWithWhereUniqueWithoutPostsInput[]
    set?: PdfWhereUniqueInput | PdfWhereUniqueInput[]
    disconnect?: PdfWhereUniqueInput | PdfWhereUniqueInput[]
    delete?: PdfWhereUniqueInput | PdfWhereUniqueInput[]
    connect?: PdfWhereUniqueInput | PdfWhereUniqueInput[]
    update?: PdfUpdateWithWhereUniqueWithoutPostsInput | PdfUpdateWithWhereUniqueWithoutPostsInput[]
    updateMany?: PdfUpdateManyWithWhereWithoutPostsInput | PdfUpdateManyWithWhereWithoutPostsInput[]
    deleteMany?: PdfScalarWhereInput | PdfScalarWhereInput[]
  }

  export type FileRecordUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<FileRecordCreateWithoutPostInput, FileRecordUncheckedCreateWithoutPostInput> | FileRecordCreateWithoutPostInput[] | FileRecordUncheckedCreateWithoutPostInput[]
    connectOrCreate?: FileRecordCreateOrConnectWithoutPostInput | FileRecordCreateOrConnectWithoutPostInput[]
    upsert?: FileRecordUpsertWithWhereUniqueWithoutPostInput | FileRecordUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: FileRecordCreateManyPostInputEnvelope
    set?: FileRecordWhereUniqueInput | FileRecordWhereUniqueInput[]
    disconnect?: FileRecordWhereUniqueInput | FileRecordWhereUniqueInput[]
    delete?: FileRecordWhereUniqueInput | FileRecordWhereUniqueInput[]
    connect?: FileRecordWhereUniqueInput | FileRecordWhereUniqueInput[]
    update?: FileRecordUpdateWithWhereUniqueWithoutPostInput | FileRecordUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: FileRecordUpdateManyWithWhereWithoutPostInput | FileRecordUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: FileRecordScalarWhereInput | FileRecordScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutPostInput | CommentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutPostInput | CommentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutPostInput | CommentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ProjectAssetUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<ProjectAssetCreateWithoutPostInput, ProjectAssetUncheckedCreateWithoutPostInput> | ProjectAssetCreateWithoutPostInput[] | ProjectAssetUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ProjectAssetCreateOrConnectWithoutPostInput | ProjectAssetCreateOrConnectWithoutPostInput[]
    upsert?: ProjectAssetUpsertWithWhereUniqueWithoutPostInput | ProjectAssetUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ProjectAssetCreateManyPostInputEnvelope
    set?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[]
    disconnect?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[]
    delete?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[]
    connect?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[]
    update?: ProjectAssetUpdateWithWhereUniqueWithoutPostInput | ProjectAssetUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ProjectAssetUpdateManyWithWhereWithoutPostInput | ProjectAssetUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ProjectAssetScalarWhereInput | ProjectAssetScalarWhereInput[]
  }

  export type TeamCreateNestedOneWithoutProjectsInput = {
    create?: XOR<TeamCreateWithoutProjectsInput, TeamUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutProjectsInput
    connect?: TeamWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutProjectsInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type PhaseCreateNestedManyWithoutProjectInput = {
    create?: XOR<PhaseCreateWithoutProjectInput, PhaseUncheckedCreateWithoutProjectInput> | PhaseCreateWithoutProjectInput[] | PhaseUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PhaseCreateOrConnectWithoutProjectInput | PhaseCreateOrConnectWithoutProjectInput[]
    createMany?: PhaseCreateManyProjectInputEnvelope
    connect?: PhaseWhereUniqueInput | PhaseWhereUniqueInput[]
  }

  export type ProjectAssetCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectAssetCreateWithoutProjectInput, ProjectAssetUncheckedCreateWithoutProjectInput> | ProjectAssetCreateWithoutProjectInput[] | ProjectAssetUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectAssetCreateOrConnectWithoutProjectInput | ProjectAssetCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectAssetCreateManyProjectInputEnvelope
    connect?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[]
  }

  export type PhaseUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<PhaseCreateWithoutProjectInput, PhaseUncheckedCreateWithoutProjectInput> | PhaseCreateWithoutProjectInput[] | PhaseUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PhaseCreateOrConnectWithoutProjectInput | PhaseCreateOrConnectWithoutProjectInput[]
    createMany?: PhaseCreateManyProjectInputEnvelope
    connect?: PhaseWhereUniqueInput | PhaseWhereUniqueInput[]
  }

  export type ProjectAssetUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectAssetCreateWithoutProjectInput, ProjectAssetUncheckedCreateWithoutProjectInput> | ProjectAssetCreateWithoutProjectInput[] | ProjectAssetUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectAssetCreateOrConnectWithoutProjectInput | ProjectAssetCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectAssetCreateManyProjectInputEnvelope
    connect?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[]
  }

  export type EnumProjectStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProjectStatus
  }

  export type TeamUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<TeamCreateWithoutProjectsInput, TeamUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutProjectsInput
    upsert?: TeamUpsertWithoutProjectsInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutProjectsInput, TeamUpdateWithoutProjectsInput>, TeamUncheckedUpdateWithoutProjectsInput>
  }

  export type UserUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    upsert?: UserUpsertWithoutProjectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectsInput, UserUpdateWithoutProjectsInput>, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type PhaseUpdateManyWithoutProjectNestedInput = {
    create?: XOR<PhaseCreateWithoutProjectInput, PhaseUncheckedCreateWithoutProjectInput> | PhaseCreateWithoutProjectInput[] | PhaseUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PhaseCreateOrConnectWithoutProjectInput | PhaseCreateOrConnectWithoutProjectInput[]
    upsert?: PhaseUpsertWithWhereUniqueWithoutProjectInput | PhaseUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: PhaseCreateManyProjectInputEnvelope
    set?: PhaseWhereUniqueInput | PhaseWhereUniqueInput[]
    disconnect?: PhaseWhereUniqueInput | PhaseWhereUniqueInput[]
    delete?: PhaseWhereUniqueInput | PhaseWhereUniqueInput[]
    connect?: PhaseWhereUniqueInput | PhaseWhereUniqueInput[]
    update?: PhaseUpdateWithWhereUniqueWithoutProjectInput | PhaseUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: PhaseUpdateManyWithWhereWithoutProjectInput | PhaseUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: PhaseScalarWhereInput | PhaseScalarWhereInput[]
  }

  export type ProjectAssetUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectAssetCreateWithoutProjectInput, ProjectAssetUncheckedCreateWithoutProjectInput> | ProjectAssetCreateWithoutProjectInput[] | ProjectAssetUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectAssetCreateOrConnectWithoutProjectInput | ProjectAssetCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectAssetUpsertWithWhereUniqueWithoutProjectInput | ProjectAssetUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectAssetCreateManyProjectInputEnvelope
    set?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[]
    disconnect?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[]
    delete?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[]
    connect?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[]
    update?: ProjectAssetUpdateWithWhereUniqueWithoutProjectInput | ProjectAssetUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectAssetUpdateManyWithWhereWithoutProjectInput | ProjectAssetUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectAssetScalarWhereInput | ProjectAssetScalarWhereInput[]
  }

  export type PhaseUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<PhaseCreateWithoutProjectInput, PhaseUncheckedCreateWithoutProjectInput> | PhaseCreateWithoutProjectInput[] | PhaseUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PhaseCreateOrConnectWithoutProjectInput | PhaseCreateOrConnectWithoutProjectInput[]
    upsert?: PhaseUpsertWithWhereUniqueWithoutProjectInput | PhaseUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: PhaseCreateManyProjectInputEnvelope
    set?: PhaseWhereUniqueInput | PhaseWhereUniqueInput[]
    disconnect?: PhaseWhereUniqueInput | PhaseWhereUniqueInput[]
    delete?: PhaseWhereUniqueInput | PhaseWhereUniqueInput[]
    connect?: PhaseWhereUniqueInput | PhaseWhereUniqueInput[]
    update?: PhaseUpdateWithWhereUniqueWithoutProjectInput | PhaseUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: PhaseUpdateManyWithWhereWithoutProjectInput | PhaseUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: PhaseScalarWhereInput | PhaseScalarWhereInput[]
  }

  export type ProjectAssetUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectAssetCreateWithoutProjectInput, ProjectAssetUncheckedCreateWithoutProjectInput> | ProjectAssetCreateWithoutProjectInput[] | ProjectAssetUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectAssetCreateOrConnectWithoutProjectInput | ProjectAssetCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectAssetUpsertWithWhereUniqueWithoutProjectInput | ProjectAssetUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectAssetCreateManyProjectInputEnvelope
    set?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[]
    disconnect?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[]
    delete?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[]
    connect?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[]
    update?: ProjectAssetUpdateWithWhereUniqueWithoutProjectInput | ProjectAssetUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectAssetUpdateManyWithWhereWithoutProjectInput | ProjectAssetUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectAssetScalarWhereInput | ProjectAssetScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutAssetsInput = {
    create?: XOR<ProjectCreateWithoutAssetsInput, ProjectUncheckedCreateWithoutAssetsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutAssetsInput
    connect?: ProjectWhereUniqueInput
  }

  export type PhaseCreateNestedOneWithoutProjectAssetsInput = {
    create?: XOR<PhaseCreateWithoutProjectAssetsInput, PhaseUncheckedCreateWithoutProjectAssetsInput>
    connectOrCreate?: PhaseCreateOrConnectWithoutProjectAssetsInput
    connect?: PhaseWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutProjectAssetsInput = {
    create?: XOR<PostCreateWithoutProjectAssetsInput, PostUncheckedCreateWithoutProjectAssetsInput>
    connectOrCreate?: PostCreateOrConnectWithoutProjectAssetsInput
    connect?: PostWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutAssetsNestedInput = {
    create?: XOR<ProjectCreateWithoutAssetsInput, ProjectUncheckedCreateWithoutAssetsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutAssetsInput
    upsert?: ProjectUpsertWithoutAssetsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutAssetsInput, ProjectUpdateWithoutAssetsInput>, ProjectUncheckedUpdateWithoutAssetsInput>
  }

  export type PhaseUpdateOneWithoutProjectAssetsNestedInput = {
    create?: XOR<PhaseCreateWithoutProjectAssetsInput, PhaseUncheckedCreateWithoutProjectAssetsInput>
    connectOrCreate?: PhaseCreateOrConnectWithoutProjectAssetsInput
    upsert?: PhaseUpsertWithoutProjectAssetsInput
    disconnect?: PhaseWhereInput | boolean
    delete?: PhaseWhereInput | boolean
    connect?: PhaseWhereUniqueInput
    update?: XOR<XOR<PhaseUpdateToOneWithWhereWithoutProjectAssetsInput, PhaseUpdateWithoutProjectAssetsInput>, PhaseUncheckedUpdateWithoutProjectAssetsInput>
  }

  export type PostUpdateOneRequiredWithoutProjectAssetsNestedInput = {
    create?: XOR<PostCreateWithoutProjectAssetsInput, PostUncheckedCreateWithoutProjectAssetsInput>
    connectOrCreate?: PostCreateOrConnectWithoutProjectAssetsInput
    upsert?: PostUpsertWithoutProjectAssetsInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutProjectAssetsInput, PostUpdateWithoutProjectAssetsInput>, PostUncheckedUpdateWithoutProjectAssetsInput>
  }

  export type TeamMemberCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput> | TeamMemberCreateWithoutTeamInput[] | TeamMemberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutTeamInput | TeamMemberCreateOrConnectWithoutTeamInput[]
    createMany?: TeamMemberCreateManyTeamInputEnvelope
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutTeamInput = {
    create?: XOR<PostCreateWithoutTeamInput, PostUncheckedCreateWithoutTeamInput> | PostCreateWithoutTeamInput[] | PostUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PostCreateOrConnectWithoutTeamInput | PostCreateOrConnectWithoutTeamInput[]
    createMany?: PostCreateManyTeamInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutTeamInput = {
    create?: XOR<ProjectCreateWithoutTeamInput, ProjectUncheckedCreateWithoutTeamInput> | ProjectCreateWithoutTeamInput[] | ProjectUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutTeamInput | ProjectCreateOrConnectWithoutTeamInput[]
    createMany?: ProjectCreateManyTeamInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type TeamMemberUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput> | TeamMemberCreateWithoutTeamInput[] | TeamMemberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutTeamInput | TeamMemberCreateOrConnectWithoutTeamInput[]
    createMany?: TeamMemberCreateManyTeamInputEnvelope
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<PostCreateWithoutTeamInput, PostUncheckedCreateWithoutTeamInput> | PostCreateWithoutTeamInput[] | PostUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PostCreateOrConnectWithoutTeamInput | PostCreateOrConnectWithoutTeamInput[]
    createMany?: PostCreateManyTeamInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<ProjectCreateWithoutTeamInput, ProjectUncheckedCreateWithoutTeamInput> | ProjectCreateWithoutTeamInput[] | ProjectUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutTeamInput | ProjectCreateOrConnectWithoutTeamInput[]
    createMany?: ProjectCreateManyTeamInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type TeamMemberUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput> | TeamMemberCreateWithoutTeamInput[] | TeamMemberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutTeamInput | TeamMemberCreateOrConnectWithoutTeamInput[]
    upsert?: TeamMemberUpsertWithWhereUniqueWithoutTeamInput | TeamMemberUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamMemberCreateManyTeamInputEnvelope
    set?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    disconnect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    delete?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    update?: TeamMemberUpdateWithWhereUniqueWithoutTeamInput | TeamMemberUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamMemberUpdateManyWithWhereWithoutTeamInput | TeamMemberUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
  }

  export type PostUpdateManyWithoutTeamNestedInput = {
    create?: XOR<PostCreateWithoutTeamInput, PostUncheckedCreateWithoutTeamInput> | PostCreateWithoutTeamInput[] | PostUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PostCreateOrConnectWithoutTeamInput | PostCreateOrConnectWithoutTeamInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutTeamInput | PostUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: PostCreateManyTeamInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutTeamInput | PostUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: PostUpdateManyWithWhereWithoutTeamInput | PostUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutTeamNestedInput = {
    create?: XOR<ProjectCreateWithoutTeamInput, ProjectUncheckedCreateWithoutTeamInput> | ProjectCreateWithoutTeamInput[] | ProjectUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutTeamInput | ProjectCreateOrConnectWithoutTeamInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutTeamInput | ProjectUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: ProjectCreateManyTeamInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutTeamInput | ProjectUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutTeamInput | ProjectUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type TeamMemberUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput> | TeamMemberCreateWithoutTeamInput[] | TeamMemberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutTeamInput | TeamMemberCreateOrConnectWithoutTeamInput[]
    upsert?: TeamMemberUpsertWithWhereUniqueWithoutTeamInput | TeamMemberUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamMemberCreateManyTeamInputEnvelope
    set?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    disconnect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    delete?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    update?: TeamMemberUpdateWithWhereUniqueWithoutTeamInput | TeamMemberUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamMemberUpdateManyWithWhereWithoutTeamInput | TeamMemberUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<PostCreateWithoutTeamInput, PostUncheckedCreateWithoutTeamInput> | PostCreateWithoutTeamInput[] | PostUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PostCreateOrConnectWithoutTeamInput | PostCreateOrConnectWithoutTeamInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutTeamInput | PostUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: PostCreateManyTeamInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutTeamInput | PostUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: PostUpdateManyWithWhereWithoutTeamInput | PostUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<ProjectCreateWithoutTeamInput, ProjectUncheckedCreateWithoutTeamInput> | ProjectCreateWithoutTeamInput[] | ProjectUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutTeamInput | ProjectCreateOrConnectWithoutTeamInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutTeamInput | ProjectUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: ProjectCreateManyTeamInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutTeamInput | ProjectUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutTeamInput | ProjectUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type TeamCreateNestedOneWithoutMembersInput = {
    create?: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutMembersInput
    connect?: TeamWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTeamMembersInput = {
    create?: XOR<UserCreateWithoutTeamMembersInput, UserUncheckedCreateWithoutTeamMembersInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeamMembersInput
    connect?: UserWhereUniqueInput
  }

  export type EnumTeamRoleFieldUpdateOperationsInput = {
    set?: $Enums.TeamRole
  }

  export type TeamUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutMembersInput
    upsert?: TeamUpsertWithoutMembersInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutMembersInput, TeamUpdateWithoutMembersInput>, TeamUncheckedUpdateWithoutMembersInput>
  }

  export type UserUpdateOneRequiredWithoutTeamMembersNestedInput = {
    create?: XOR<UserCreateWithoutTeamMembersInput, UserUncheckedCreateWithoutTeamMembersInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeamMembersInput
    upsert?: UserUpsertWithoutTeamMembersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTeamMembersInput, UserUpdateWithoutTeamMembersInput>, UserUncheckedUpdateWithoutTeamMembersInput>
  }

  export type UserCreateuserCollectionInput = {
    set: string[]
  }

  export type TeamMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput> | TeamMemberCreateWithoutUserInput[] | TeamMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutUserInput | TeamMemberCreateOrConnectWithoutUserInput[]
    createMany?: TeamMemberCreateManyUserInputEnvelope
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type ModelCreateNestedManyWithoutUploaderInput = {
    create?: XOR<ModelCreateWithoutUploaderInput, ModelUncheckedCreateWithoutUploaderInput> | ModelCreateWithoutUploaderInput[] | ModelUncheckedCreateWithoutUploaderInput[]
    connectOrCreate?: ModelCreateOrConnectWithoutUploaderInput | ModelCreateOrConnectWithoutUploaderInput[]
    createMany?: ModelCreateManyUploaderInputEnvelope
    connect?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
  }

  export type PdfCreateNestedManyWithoutUploaderInput = {
    create?: XOR<PdfCreateWithoutUploaderInput, PdfUncheckedCreateWithoutUploaderInput> | PdfCreateWithoutUploaderInput[] | PdfUncheckedCreateWithoutUploaderInput[]
    connectOrCreate?: PdfCreateOrConnectWithoutUploaderInput | PdfCreateOrConnectWithoutUploaderInput[]
    createMany?: PdfCreateManyUploaderInputEnvelope
    connect?: PdfWhereUniqueInput | PdfWhereUniqueInput[]
  }

  export type FileRecordCreateNestedManyWithoutUploaderInput = {
    create?: XOR<FileRecordCreateWithoutUploaderInput, FileRecordUncheckedCreateWithoutUploaderInput> | FileRecordCreateWithoutUploaderInput[] | FileRecordUncheckedCreateWithoutUploaderInput[]
    connectOrCreate?: FileRecordCreateOrConnectWithoutUploaderInput | FileRecordCreateOrConnectWithoutUploaderInput[]
    createMany?: FileRecordCreateManyUploaderInputEnvelope
    connect?: FileRecordWhereUniqueInput | FileRecordWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutUploaderInput = {
    create?: XOR<PostCreateWithoutUploaderInput, PostUncheckedCreateWithoutUploaderInput> | PostCreateWithoutUploaderInput[] | PostUncheckedCreateWithoutUploaderInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUploaderInput | PostCreateOrConnectWithoutUploaderInput[]
    createMany?: PostCreateManyUploaderInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ProjectCreateWithoutCreatorInput, ProjectUncheckedCreateWithoutCreatorInput> | ProjectCreateWithoutCreatorInput[] | ProjectUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCreatorInput | ProjectCreateOrConnectWithoutCreatorInput[]
    createMany?: ProjectCreateManyCreatorInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type TeamMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput> | TeamMemberCreateWithoutUserInput[] | TeamMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutUserInput | TeamMemberCreateOrConnectWithoutUserInput[]
    createMany?: TeamMemberCreateManyUserInputEnvelope
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type ModelUncheckedCreateNestedManyWithoutUploaderInput = {
    create?: XOR<ModelCreateWithoutUploaderInput, ModelUncheckedCreateWithoutUploaderInput> | ModelCreateWithoutUploaderInput[] | ModelUncheckedCreateWithoutUploaderInput[]
    connectOrCreate?: ModelCreateOrConnectWithoutUploaderInput | ModelCreateOrConnectWithoutUploaderInput[]
    createMany?: ModelCreateManyUploaderInputEnvelope
    connect?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
  }

  export type PdfUncheckedCreateNestedManyWithoutUploaderInput = {
    create?: XOR<PdfCreateWithoutUploaderInput, PdfUncheckedCreateWithoutUploaderInput> | PdfCreateWithoutUploaderInput[] | PdfUncheckedCreateWithoutUploaderInput[]
    connectOrCreate?: PdfCreateOrConnectWithoutUploaderInput | PdfCreateOrConnectWithoutUploaderInput[]
    createMany?: PdfCreateManyUploaderInputEnvelope
    connect?: PdfWhereUniqueInput | PdfWhereUniqueInput[]
  }

  export type FileRecordUncheckedCreateNestedManyWithoutUploaderInput = {
    create?: XOR<FileRecordCreateWithoutUploaderInput, FileRecordUncheckedCreateWithoutUploaderInput> | FileRecordCreateWithoutUploaderInput[] | FileRecordUncheckedCreateWithoutUploaderInput[]
    connectOrCreate?: FileRecordCreateOrConnectWithoutUploaderInput | FileRecordCreateOrConnectWithoutUploaderInput[]
    createMany?: FileRecordCreateManyUploaderInputEnvelope
    connect?: FileRecordWhereUniqueInput | FileRecordWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutUploaderInput = {
    create?: XOR<PostCreateWithoutUploaderInput, PostUncheckedCreateWithoutUploaderInput> | PostCreateWithoutUploaderInput[] | PostUncheckedCreateWithoutUploaderInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUploaderInput | PostCreateOrConnectWithoutUploaderInput[]
    createMany?: PostCreateManyUploaderInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ProjectCreateWithoutCreatorInput, ProjectUncheckedCreateWithoutCreatorInput> | ProjectCreateWithoutCreatorInput[] | ProjectUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCreatorInput | ProjectCreateOrConnectWithoutCreatorInput[]
    createMany?: ProjectCreateManyCreatorInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type UserUpdateuserCollectionInput = {
    set?: string[]
    push?: string | string[]
  }

  export type TeamMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput> | TeamMemberCreateWithoutUserInput[] | TeamMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutUserInput | TeamMemberCreateOrConnectWithoutUserInput[]
    upsert?: TeamMemberUpsertWithWhereUniqueWithoutUserInput | TeamMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TeamMemberCreateManyUserInputEnvelope
    set?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    disconnect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    delete?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    update?: TeamMemberUpdateWithWhereUniqueWithoutUserInput | TeamMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TeamMemberUpdateManyWithWhereWithoutUserInput | TeamMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type ModelUpdateManyWithoutUploaderNestedInput = {
    create?: XOR<ModelCreateWithoutUploaderInput, ModelUncheckedCreateWithoutUploaderInput> | ModelCreateWithoutUploaderInput[] | ModelUncheckedCreateWithoutUploaderInput[]
    connectOrCreate?: ModelCreateOrConnectWithoutUploaderInput | ModelCreateOrConnectWithoutUploaderInput[]
    upsert?: ModelUpsertWithWhereUniqueWithoutUploaderInput | ModelUpsertWithWhereUniqueWithoutUploaderInput[]
    createMany?: ModelCreateManyUploaderInputEnvelope
    set?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    disconnect?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    delete?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    connect?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    update?: ModelUpdateWithWhereUniqueWithoutUploaderInput | ModelUpdateWithWhereUniqueWithoutUploaderInput[]
    updateMany?: ModelUpdateManyWithWhereWithoutUploaderInput | ModelUpdateManyWithWhereWithoutUploaderInput[]
    deleteMany?: ModelScalarWhereInput | ModelScalarWhereInput[]
  }

  export type PdfUpdateManyWithoutUploaderNestedInput = {
    create?: XOR<PdfCreateWithoutUploaderInput, PdfUncheckedCreateWithoutUploaderInput> | PdfCreateWithoutUploaderInput[] | PdfUncheckedCreateWithoutUploaderInput[]
    connectOrCreate?: PdfCreateOrConnectWithoutUploaderInput | PdfCreateOrConnectWithoutUploaderInput[]
    upsert?: PdfUpsertWithWhereUniqueWithoutUploaderInput | PdfUpsertWithWhereUniqueWithoutUploaderInput[]
    createMany?: PdfCreateManyUploaderInputEnvelope
    set?: PdfWhereUniqueInput | PdfWhereUniqueInput[]
    disconnect?: PdfWhereUniqueInput | PdfWhereUniqueInput[]
    delete?: PdfWhereUniqueInput | PdfWhereUniqueInput[]
    connect?: PdfWhereUniqueInput | PdfWhereUniqueInput[]
    update?: PdfUpdateWithWhereUniqueWithoutUploaderInput | PdfUpdateWithWhereUniqueWithoutUploaderInput[]
    updateMany?: PdfUpdateManyWithWhereWithoutUploaderInput | PdfUpdateManyWithWhereWithoutUploaderInput[]
    deleteMany?: PdfScalarWhereInput | PdfScalarWhereInput[]
  }

  export type FileRecordUpdateManyWithoutUploaderNestedInput = {
    create?: XOR<FileRecordCreateWithoutUploaderInput, FileRecordUncheckedCreateWithoutUploaderInput> | FileRecordCreateWithoutUploaderInput[] | FileRecordUncheckedCreateWithoutUploaderInput[]
    connectOrCreate?: FileRecordCreateOrConnectWithoutUploaderInput | FileRecordCreateOrConnectWithoutUploaderInput[]
    upsert?: FileRecordUpsertWithWhereUniqueWithoutUploaderInput | FileRecordUpsertWithWhereUniqueWithoutUploaderInput[]
    createMany?: FileRecordCreateManyUploaderInputEnvelope
    set?: FileRecordWhereUniqueInput | FileRecordWhereUniqueInput[]
    disconnect?: FileRecordWhereUniqueInput | FileRecordWhereUniqueInput[]
    delete?: FileRecordWhereUniqueInput | FileRecordWhereUniqueInput[]
    connect?: FileRecordWhereUniqueInput | FileRecordWhereUniqueInput[]
    update?: FileRecordUpdateWithWhereUniqueWithoutUploaderInput | FileRecordUpdateWithWhereUniqueWithoutUploaderInput[]
    updateMany?: FileRecordUpdateManyWithWhereWithoutUploaderInput | FileRecordUpdateManyWithWhereWithoutUploaderInput[]
    deleteMany?: FileRecordScalarWhereInput | FileRecordScalarWhereInput[]
  }

  export type PostUpdateManyWithoutUploaderNestedInput = {
    create?: XOR<PostCreateWithoutUploaderInput, PostUncheckedCreateWithoutUploaderInput> | PostCreateWithoutUploaderInput[] | PostUncheckedCreateWithoutUploaderInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUploaderInput | PostCreateOrConnectWithoutUploaderInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUploaderInput | PostUpsertWithWhereUniqueWithoutUploaderInput[]
    createMany?: PostCreateManyUploaderInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUploaderInput | PostUpdateWithWhereUniqueWithoutUploaderInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUploaderInput | PostUpdateManyWithWhereWithoutUploaderInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ProjectCreateWithoutCreatorInput, ProjectUncheckedCreateWithoutCreatorInput> | ProjectCreateWithoutCreatorInput[] | ProjectUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCreatorInput | ProjectCreateOrConnectWithoutCreatorInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutCreatorInput | ProjectUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ProjectCreateManyCreatorInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutCreatorInput | ProjectUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutCreatorInput | ProjectUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type TeamMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput> | TeamMemberCreateWithoutUserInput[] | TeamMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutUserInput | TeamMemberCreateOrConnectWithoutUserInput[]
    upsert?: TeamMemberUpsertWithWhereUniqueWithoutUserInput | TeamMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TeamMemberCreateManyUserInputEnvelope
    set?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    disconnect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    delete?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    update?: TeamMemberUpdateWithWhereUniqueWithoutUserInput | TeamMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TeamMemberUpdateManyWithWhereWithoutUserInput | TeamMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type ModelUncheckedUpdateManyWithoutUploaderNestedInput = {
    create?: XOR<ModelCreateWithoutUploaderInput, ModelUncheckedCreateWithoutUploaderInput> | ModelCreateWithoutUploaderInput[] | ModelUncheckedCreateWithoutUploaderInput[]
    connectOrCreate?: ModelCreateOrConnectWithoutUploaderInput | ModelCreateOrConnectWithoutUploaderInput[]
    upsert?: ModelUpsertWithWhereUniqueWithoutUploaderInput | ModelUpsertWithWhereUniqueWithoutUploaderInput[]
    createMany?: ModelCreateManyUploaderInputEnvelope
    set?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    disconnect?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    delete?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    connect?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    update?: ModelUpdateWithWhereUniqueWithoutUploaderInput | ModelUpdateWithWhereUniqueWithoutUploaderInput[]
    updateMany?: ModelUpdateManyWithWhereWithoutUploaderInput | ModelUpdateManyWithWhereWithoutUploaderInput[]
    deleteMany?: ModelScalarWhereInput | ModelScalarWhereInput[]
  }

  export type PdfUncheckedUpdateManyWithoutUploaderNestedInput = {
    create?: XOR<PdfCreateWithoutUploaderInput, PdfUncheckedCreateWithoutUploaderInput> | PdfCreateWithoutUploaderInput[] | PdfUncheckedCreateWithoutUploaderInput[]
    connectOrCreate?: PdfCreateOrConnectWithoutUploaderInput | PdfCreateOrConnectWithoutUploaderInput[]
    upsert?: PdfUpsertWithWhereUniqueWithoutUploaderInput | PdfUpsertWithWhereUniqueWithoutUploaderInput[]
    createMany?: PdfCreateManyUploaderInputEnvelope
    set?: PdfWhereUniqueInput | PdfWhereUniqueInput[]
    disconnect?: PdfWhereUniqueInput | PdfWhereUniqueInput[]
    delete?: PdfWhereUniqueInput | PdfWhereUniqueInput[]
    connect?: PdfWhereUniqueInput | PdfWhereUniqueInput[]
    update?: PdfUpdateWithWhereUniqueWithoutUploaderInput | PdfUpdateWithWhereUniqueWithoutUploaderInput[]
    updateMany?: PdfUpdateManyWithWhereWithoutUploaderInput | PdfUpdateManyWithWhereWithoutUploaderInput[]
    deleteMany?: PdfScalarWhereInput | PdfScalarWhereInput[]
  }

  export type FileRecordUncheckedUpdateManyWithoutUploaderNestedInput = {
    create?: XOR<FileRecordCreateWithoutUploaderInput, FileRecordUncheckedCreateWithoutUploaderInput> | FileRecordCreateWithoutUploaderInput[] | FileRecordUncheckedCreateWithoutUploaderInput[]
    connectOrCreate?: FileRecordCreateOrConnectWithoutUploaderInput | FileRecordCreateOrConnectWithoutUploaderInput[]
    upsert?: FileRecordUpsertWithWhereUniqueWithoutUploaderInput | FileRecordUpsertWithWhereUniqueWithoutUploaderInput[]
    createMany?: FileRecordCreateManyUploaderInputEnvelope
    set?: FileRecordWhereUniqueInput | FileRecordWhereUniqueInput[]
    disconnect?: FileRecordWhereUniqueInput | FileRecordWhereUniqueInput[]
    delete?: FileRecordWhereUniqueInput | FileRecordWhereUniqueInput[]
    connect?: FileRecordWhereUniqueInput | FileRecordWhereUniqueInput[]
    update?: FileRecordUpdateWithWhereUniqueWithoutUploaderInput | FileRecordUpdateWithWhereUniqueWithoutUploaderInput[]
    updateMany?: FileRecordUpdateManyWithWhereWithoutUploaderInput | FileRecordUpdateManyWithWhereWithoutUploaderInput[]
    deleteMany?: FileRecordScalarWhereInput | FileRecordScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutUploaderNestedInput = {
    create?: XOR<PostCreateWithoutUploaderInput, PostUncheckedCreateWithoutUploaderInput> | PostCreateWithoutUploaderInput[] | PostUncheckedCreateWithoutUploaderInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUploaderInput | PostCreateOrConnectWithoutUploaderInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUploaderInput | PostUpsertWithWhereUniqueWithoutUploaderInput[]
    createMany?: PostCreateManyUploaderInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUploaderInput | PostUpdateWithWhereUniqueWithoutUploaderInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUploaderInput | PostUpdateManyWithWhereWithoutUploaderInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ProjectCreateWithoutCreatorInput, ProjectUncheckedCreateWithoutCreatorInput> | ProjectCreateWithoutCreatorInput[] | ProjectUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCreatorInput | ProjectCreateOrConnectWithoutCreatorInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutCreatorInput | ProjectUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ProjectCreateManyCreatorInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutCreatorInput | ProjectUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutCreatorInput | ProjectUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumFileCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.FileCategory | EnumFileCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.FileCategory[] | ListEnumFileCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.FileCategory[] | ListEnumFileCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumFileCategoryFilter<$PrismaModel> | $Enums.FileCategory
  }

  export type NestedEnumProcessStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProcessStatus | EnumProcessStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProcessStatus[] | ListEnumProcessStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProcessStatus[] | ListEnumProcessStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProcessStatusFilter<$PrismaModel> | $Enums.ProcessStatus
  }

  export type NestedEnumFileCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FileCategory | EnumFileCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.FileCategory[] | ListEnumFileCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.FileCategory[] | ListEnumFileCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumFileCategoryWithAggregatesFilter<$PrismaModel> | $Enums.FileCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFileCategoryFilter<$PrismaModel>
    _max?: NestedEnumFileCategoryFilter<$PrismaModel>
  }

  export type NestedEnumProcessStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProcessStatus | EnumProcessStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProcessStatus[] | ListEnumProcessStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProcessStatus[] | ListEnumProcessStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProcessStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProcessStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProcessStatusFilter<$PrismaModel>
    _max?: NestedEnumProcessStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }

  export type NestedEnumTeamRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.TeamRole | EnumTeamRoleFieldRefInput<$PrismaModel>
    in?: $Enums.TeamRole[] | ListEnumTeamRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.TeamRole[] | ListEnumTeamRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumTeamRoleFilter<$PrismaModel> | $Enums.TeamRole
  }

  export type NestedEnumTeamRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TeamRole | EnumTeamRoleFieldRefInput<$PrismaModel>
    in?: $Enums.TeamRole[] | ListEnumTeamRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.TeamRole[] | ListEnumTeamRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumTeamRoleWithAggregatesFilter<$PrismaModel> | $Enums.TeamRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTeamRoleFilter<$PrismaModel>
    _max?: NestedEnumTeamRoleFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    userName: string
    email: string
    role?: $Enums.Role
    image?: string | null
    userCollection?: UserCreateuserCollectionInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    teamMembers?: TeamMemberCreateNestedManyWithoutUserInput
    models?: ModelCreateNestedManyWithoutUploaderInput
    pdfs?: PdfCreateNestedManyWithoutUploaderInput
    fileRecords?: FileRecordCreateNestedManyWithoutUploaderInput
    posts?: PostCreateNestedManyWithoutUploaderInput
    comments?: CommentCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    userName: string
    email: string
    role?: $Enums.Role
    image?: string | null
    userCollection?: UserCreateuserCollectionInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    teamMembers?: TeamMemberUncheckedCreateNestedManyWithoutUserInput
    models?: ModelUncheckedCreateNestedManyWithoutUploaderInput
    pdfs?: PdfUncheckedCreateNestedManyWithoutUploaderInput
    fileRecords?: FileRecordUncheckedCreateNestedManyWithoutUploaderInput
    posts?: PostUncheckedCreateNestedManyWithoutUploaderInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    image?: NullableStringFieldUpdateOperationsInput | string | null
    userCollection?: UserUpdateuserCollectionInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamMembers?: TeamMemberUpdateManyWithoutUserNestedInput
    models?: ModelUpdateManyWithoutUploaderNestedInput
    pdfs?: PdfUpdateManyWithoutUploaderNestedInput
    fileRecords?: FileRecordUpdateManyWithoutUploaderNestedInput
    posts?: PostUpdateManyWithoutUploaderNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    image?: NullableStringFieldUpdateOperationsInput | string | null
    userCollection?: UserUpdateuserCollectionInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamMembers?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput
    models?: ModelUncheckedUpdateManyWithoutUploaderNestedInput
    pdfs?: PdfUncheckedUpdateManyWithoutUploaderNestedInput
    fileRecords?: FileRecordUncheckedUpdateManyWithoutUploaderNestedInput
    posts?: PostUncheckedUpdateManyWithoutUploaderNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type PostCreateWithoutCommentsInput = {
    id?: string
    shortId: string
    title: string
    category: string
    description?: string | null
    type: string
    keywords?: PostCreatekeywordsInput | string[]
    coverImage: string
    images?: PostCreateimagesInput | string[]
    relatedPosts?: PostCreaterelatedPostsInput | string[]
    permission: string
    createdAt?: Date | string
    updatedAt?: Date | string
    models?: ModelCreateNestedManyWithoutPostsInput
    pdfIds?: PdfCreateNestedManyWithoutPostsInput
    files?: FileRecordCreateNestedManyWithoutPostInput
    uploader: UserCreateNestedOneWithoutPostsInput
    team?: TeamCreateNestedOneWithoutPostsInput
    projectAssets?: ProjectAssetCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutCommentsInput = {
    id?: string
    shortId: string
    title: string
    category: string
    description?: string | null
    type: string
    keywords?: PostCreatekeywordsInput | string[]
    coverImage: string
    images?: PostCreateimagesInput | string[]
    uploaderId: string
    relatedPosts?: PostCreaterelatedPostsInput | string[]
    permission: string
    teamId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    models?: ModelUncheckedCreateNestedManyWithoutPostsInput
    pdfIds?: PdfUncheckedCreateNestedManyWithoutPostsInput
    files?: FileRecordUncheckedCreateNestedManyWithoutPostInput
    projectAssets?: ProjectAssetUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutCommentsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
  }

  export type UserCreateWithoutCommentsInput = {
    id?: string
    userName: string
    email: string
    role?: $Enums.Role
    image?: string | null
    userCollection?: UserCreateuserCollectionInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    teamMembers?: TeamMemberCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    models?: ModelCreateNestedManyWithoutUploaderInput
    pdfs?: PdfCreateNestedManyWithoutUploaderInput
    fileRecords?: FileRecordCreateNestedManyWithoutUploaderInput
    posts?: PostCreateNestedManyWithoutUploaderInput
    projects?: ProjectCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: string
    userName: string
    email: string
    role?: $Enums.Role
    image?: string | null
    userCollection?: UserCreateuserCollectionInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    teamMembers?: TeamMemberUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    models?: ModelUncheckedCreateNestedManyWithoutUploaderInput
    pdfs?: PdfUncheckedCreateNestedManyWithoutUploaderInput
    fileRecords?: FileRecordUncheckedCreateNestedManyWithoutUploaderInput
    posts?: PostUncheckedCreateNestedManyWithoutUploaderInput
    projects?: ProjectUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type CommentCreateWithoutRepliesInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    post: PostCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
  }

  export type CommentUncheckedCreateWithoutRepliesInput = {
    id?: string
    content: string
    postId: string
    userId: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutRepliesInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
  }

  export type CommentCreateWithoutParentInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    post: PostCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutCommentsInput
    replies?: CommentCreateNestedManyWithoutParentInput
  }

  export type CommentUncheckedCreateWithoutParentInput = {
    id?: string
    content: string
    postId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
  }

  export type CommentCreateOrConnectWithoutParentInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput>
  }

  export type CommentCreateManyParentInputEnvelope = {
    data: CommentCreateManyParentInput | CommentCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type PostUpsertWithoutCommentsInput = {
    update: XOR<PostUpdateWithoutCommentsInput, PostUncheckedUpdateWithoutCommentsInput>
    create: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutCommentsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutCommentsInput, PostUncheckedUpdateWithoutCommentsInput>
  }

  export type PostUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    keywords?: PostUpdatekeywordsInput | string[]
    coverImage?: StringFieldUpdateOperationsInput | string
    images?: PostUpdateimagesInput | string[]
    relatedPosts?: PostUpdaterelatedPostsInput | string[]
    permission?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    models?: ModelUpdateManyWithoutPostsNestedInput
    pdfIds?: PdfUpdateManyWithoutPostsNestedInput
    files?: FileRecordUpdateManyWithoutPostNestedInput
    uploader?: UserUpdateOneRequiredWithoutPostsNestedInput
    team?: TeamUpdateOneWithoutPostsNestedInput
    projectAssets?: ProjectAssetUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    keywords?: PostUpdatekeywordsInput | string[]
    coverImage?: StringFieldUpdateOperationsInput | string
    images?: PostUpdateimagesInput | string[]
    uploaderId?: StringFieldUpdateOperationsInput | string
    relatedPosts?: PostUpdaterelatedPostsInput | string[]
    permission?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    models?: ModelUncheckedUpdateManyWithoutPostsNestedInput
    pdfIds?: PdfUncheckedUpdateManyWithoutPostsNestedInput
    files?: FileRecordUncheckedUpdateManyWithoutPostNestedInput
    projectAssets?: ProjectAssetUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    image?: NullableStringFieldUpdateOperationsInput | string | null
    userCollection?: UserUpdateuserCollectionInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamMembers?: TeamMemberUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    models?: ModelUpdateManyWithoutUploaderNestedInput
    pdfs?: PdfUpdateManyWithoutUploaderNestedInput
    fileRecords?: FileRecordUpdateManyWithoutUploaderNestedInput
    posts?: PostUpdateManyWithoutUploaderNestedInput
    projects?: ProjectUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    image?: NullableStringFieldUpdateOperationsInput | string | null
    userCollection?: UserUpdateuserCollectionInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamMembers?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    models?: ModelUncheckedUpdateManyWithoutUploaderNestedInput
    pdfs?: PdfUncheckedUpdateManyWithoutUploaderNestedInput
    fileRecords?: FileRecordUncheckedUpdateManyWithoutUploaderNestedInput
    posts?: PostUncheckedUpdateManyWithoutUploaderNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type CommentUpsertWithoutRepliesInput = {
    update: XOR<CommentUpdateWithoutRepliesInput, CommentUncheckedUpdateWithoutRepliesInput>
    create: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    where?: CommentWhereInput
  }

  export type CommentUpdateToOneWithWhereWithoutRepliesInput = {
    where?: CommentWhereInput
    data: XOR<CommentUpdateWithoutRepliesInput, CommentUncheckedUpdateWithoutRepliesInput>
  }

  export type CommentUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
  }

  export type CommentUncheckedUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    postId?: StringFilter<"Comment"> | string
    userId?: StringFilter<"Comment"> | string
    parentId?: StringNullableFilter<"Comment"> | string | null
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
  }

  export type UserCreateWithoutFileRecordsInput = {
    id?: string
    userName: string
    email: string
    role?: $Enums.Role
    image?: string | null
    userCollection?: UserCreateuserCollectionInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    teamMembers?: TeamMemberCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    models?: ModelCreateNestedManyWithoutUploaderInput
    pdfs?: PdfCreateNestedManyWithoutUploaderInput
    posts?: PostCreateNestedManyWithoutUploaderInput
    comments?: CommentCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutFileRecordsInput = {
    id?: string
    userName: string
    email: string
    role?: $Enums.Role
    image?: string | null
    userCollection?: UserCreateuserCollectionInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    teamMembers?: TeamMemberUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    models?: ModelUncheckedCreateNestedManyWithoutUploaderInput
    pdfs?: PdfUncheckedCreateNestedManyWithoutUploaderInput
    posts?: PostUncheckedCreateNestedManyWithoutUploaderInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutFileRecordsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFileRecordsInput, UserUncheckedCreateWithoutFileRecordsInput>
  }

  export type PostCreateWithoutFilesInput = {
    id?: string
    shortId: string
    title: string
    category: string
    description?: string | null
    type: string
    keywords?: PostCreatekeywordsInput | string[]
    coverImage: string
    images?: PostCreateimagesInput | string[]
    relatedPosts?: PostCreaterelatedPostsInput | string[]
    permission: string
    createdAt?: Date | string
    updatedAt?: Date | string
    models?: ModelCreateNestedManyWithoutPostsInput
    pdfIds?: PdfCreateNestedManyWithoutPostsInput
    uploader: UserCreateNestedOneWithoutPostsInput
    team?: TeamCreateNestedOneWithoutPostsInput
    comments?: CommentCreateNestedManyWithoutPostInput
    projectAssets?: ProjectAssetCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutFilesInput = {
    id?: string
    shortId: string
    title: string
    category: string
    description?: string | null
    type: string
    keywords?: PostCreatekeywordsInput | string[]
    coverImage: string
    images?: PostCreateimagesInput | string[]
    uploaderId: string
    relatedPosts?: PostCreaterelatedPostsInput | string[]
    permission: string
    teamId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    models?: ModelUncheckedCreateNestedManyWithoutPostsInput
    pdfIds?: PdfUncheckedCreateNestedManyWithoutPostsInput
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    projectAssets?: ProjectAssetUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutFilesInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutFilesInput, PostUncheckedCreateWithoutFilesInput>
  }

  export type UserUpsertWithoutFileRecordsInput = {
    update: XOR<UserUpdateWithoutFileRecordsInput, UserUncheckedUpdateWithoutFileRecordsInput>
    create: XOR<UserCreateWithoutFileRecordsInput, UserUncheckedCreateWithoutFileRecordsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFileRecordsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFileRecordsInput, UserUncheckedUpdateWithoutFileRecordsInput>
  }

  export type UserUpdateWithoutFileRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    image?: NullableStringFieldUpdateOperationsInput | string | null
    userCollection?: UserUpdateuserCollectionInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamMembers?: TeamMemberUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    models?: ModelUpdateManyWithoutUploaderNestedInput
    pdfs?: PdfUpdateManyWithoutUploaderNestedInput
    posts?: PostUpdateManyWithoutUploaderNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutFileRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    image?: NullableStringFieldUpdateOperationsInput | string | null
    userCollection?: UserUpdateuserCollectionInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamMembers?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    models?: ModelUncheckedUpdateManyWithoutUploaderNestedInput
    pdfs?: PdfUncheckedUpdateManyWithoutUploaderNestedInput
    posts?: PostUncheckedUpdateManyWithoutUploaderNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type PostUpsertWithoutFilesInput = {
    update: XOR<PostUpdateWithoutFilesInput, PostUncheckedUpdateWithoutFilesInput>
    create: XOR<PostCreateWithoutFilesInput, PostUncheckedCreateWithoutFilesInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutFilesInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutFilesInput, PostUncheckedUpdateWithoutFilesInput>
  }

  export type PostUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    keywords?: PostUpdatekeywordsInput | string[]
    coverImage?: StringFieldUpdateOperationsInput | string
    images?: PostUpdateimagesInput | string[]
    relatedPosts?: PostUpdaterelatedPostsInput | string[]
    permission?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    models?: ModelUpdateManyWithoutPostsNestedInput
    pdfIds?: PdfUpdateManyWithoutPostsNestedInput
    uploader?: UserUpdateOneRequiredWithoutPostsNestedInput
    team?: TeamUpdateOneWithoutPostsNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
    projectAssets?: ProjectAssetUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    keywords?: PostUpdatekeywordsInput | string[]
    coverImage?: StringFieldUpdateOperationsInput | string
    images?: PostUpdateimagesInput | string[]
    uploaderId?: StringFieldUpdateOperationsInput | string
    relatedPosts?: PostUpdaterelatedPostsInput | string[]
    permission?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    models?: ModelUncheckedUpdateManyWithoutPostsNestedInput
    pdfIds?: PdfUncheckedUpdateManyWithoutPostsNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
    projectAssets?: ProjectAssetUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UserCreateWithoutModelsInput = {
    id?: string
    userName: string
    email: string
    role?: $Enums.Role
    image?: string | null
    userCollection?: UserCreateuserCollectionInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    teamMembers?: TeamMemberCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    pdfs?: PdfCreateNestedManyWithoutUploaderInput
    fileRecords?: FileRecordCreateNestedManyWithoutUploaderInput
    posts?: PostCreateNestedManyWithoutUploaderInput
    comments?: CommentCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutModelsInput = {
    id?: string
    userName: string
    email: string
    role?: $Enums.Role
    image?: string | null
    userCollection?: UserCreateuserCollectionInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    teamMembers?: TeamMemberUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    pdfs?: PdfUncheckedCreateNestedManyWithoutUploaderInput
    fileRecords?: FileRecordUncheckedCreateNestedManyWithoutUploaderInput
    posts?: PostUncheckedCreateNestedManyWithoutUploaderInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutModelsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutModelsInput, UserUncheckedCreateWithoutModelsInput>
  }

  export type PostCreateWithoutModelsInput = {
    id?: string
    shortId: string
    title: string
    category: string
    description?: string | null
    type: string
    keywords?: PostCreatekeywordsInput | string[]
    coverImage: string
    images?: PostCreateimagesInput | string[]
    relatedPosts?: PostCreaterelatedPostsInput | string[]
    permission: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pdfIds?: PdfCreateNestedManyWithoutPostsInput
    files?: FileRecordCreateNestedManyWithoutPostInput
    uploader: UserCreateNestedOneWithoutPostsInput
    team?: TeamCreateNestedOneWithoutPostsInput
    comments?: CommentCreateNestedManyWithoutPostInput
    projectAssets?: ProjectAssetCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutModelsInput = {
    id?: string
    shortId: string
    title: string
    category: string
    description?: string | null
    type: string
    keywords?: PostCreatekeywordsInput | string[]
    coverImage: string
    images?: PostCreateimagesInput | string[]
    uploaderId: string
    relatedPosts?: PostCreaterelatedPostsInput | string[]
    permission: string
    teamId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pdfIds?: PdfUncheckedCreateNestedManyWithoutPostsInput
    files?: FileRecordUncheckedCreateNestedManyWithoutPostInput
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    projectAssets?: ProjectAssetUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutModelsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutModelsInput, PostUncheckedCreateWithoutModelsInput>
  }

  export type UserUpsertWithoutModelsInput = {
    update: XOR<UserUpdateWithoutModelsInput, UserUncheckedUpdateWithoutModelsInput>
    create: XOR<UserCreateWithoutModelsInput, UserUncheckedCreateWithoutModelsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutModelsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutModelsInput, UserUncheckedUpdateWithoutModelsInput>
  }

  export type UserUpdateWithoutModelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    image?: NullableStringFieldUpdateOperationsInput | string | null
    userCollection?: UserUpdateuserCollectionInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamMembers?: TeamMemberUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    pdfs?: PdfUpdateManyWithoutUploaderNestedInput
    fileRecords?: FileRecordUpdateManyWithoutUploaderNestedInput
    posts?: PostUpdateManyWithoutUploaderNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutModelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    image?: NullableStringFieldUpdateOperationsInput | string | null
    userCollection?: UserUpdateuserCollectionInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamMembers?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    pdfs?: PdfUncheckedUpdateManyWithoutUploaderNestedInput
    fileRecords?: FileRecordUncheckedUpdateManyWithoutUploaderNestedInput
    posts?: PostUncheckedUpdateManyWithoutUploaderNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type PostUpsertWithWhereUniqueWithoutModelsInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutModelsInput, PostUncheckedUpdateWithoutModelsInput>
    create: XOR<PostCreateWithoutModelsInput, PostUncheckedCreateWithoutModelsInput>
  }

  export type PostUpdateWithWhereUniqueWithoutModelsInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutModelsInput, PostUncheckedUpdateWithoutModelsInput>
  }

  export type PostUpdateManyWithWhereWithoutModelsInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutModelsInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: StringFilter<"Post"> | string
    shortId?: StringFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    category?: StringFilter<"Post"> | string
    description?: StringNullableFilter<"Post"> | string | null
    type?: StringFilter<"Post"> | string
    keywords?: StringNullableListFilter<"Post">
    coverImage?: StringFilter<"Post"> | string
    images?: StringNullableListFilter<"Post">
    uploaderId?: StringFilter<"Post"> | string
    relatedPosts?: StringNullableListFilter<"Post">
    permission?: StringFilter<"Post"> | string
    teamId?: StringNullableFilter<"Post"> | string | null
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
  }

  export type UserCreateWithoutPdfsInput = {
    id?: string
    userName: string
    email: string
    role?: $Enums.Role
    image?: string | null
    userCollection?: UserCreateuserCollectionInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    teamMembers?: TeamMemberCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    models?: ModelCreateNestedManyWithoutUploaderInput
    fileRecords?: FileRecordCreateNestedManyWithoutUploaderInput
    posts?: PostCreateNestedManyWithoutUploaderInput
    comments?: CommentCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutPdfsInput = {
    id?: string
    userName: string
    email: string
    role?: $Enums.Role
    image?: string | null
    userCollection?: UserCreateuserCollectionInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    teamMembers?: TeamMemberUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    models?: ModelUncheckedCreateNestedManyWithoutUploaderInput
    fileRecords?: FileRecordUncheckedCreateNestedManyWithoutUploaderInput
    posts?: PostUncheckedCreateNestedManyWithoutUploaderInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutPdfsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPdfsInput, UserUncheckedCreateWithoutPdfsInput>
  }

  export type PostCreateWithoutPdfIdsInput = {
    id?: string
    shortId: string
    title: string
    category: string
    description?: string | null
    type: string
    keywords?: PostCreatekeywordsInput | string[]
    coverImage: string
    images?: PostCreateimagesInput | string[]
    relatedPosts?: PostCreaterelatedPostsInput | string[]
    permission: string
    createdAt?: Date | string
    updatedAt?: Date | string
    models?: ModelCreateNestedManyWithoutPostsInput
    files?: FileRecordCreateNestedManyWithoutPostInput
    uploader: UserCreateNestedOneWithoutPostsInput
    team?: TeamCreateNestedOneWithoutPostsInput
    comments?: CommentCreateNestedManyWithoutPostInput
    projectAssets?: ProjectAssetCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutPdfIdsInput = {
    id?: string
    shortId: string
    title: string
    category: string
    description?: string | null
    type: string
    keywords?: PostCreatekeywordsInput | string[]
    coverImage: string
    images?: PostCreateimagesInput | string[]
    uploaderId: string
    relatedPosts?: PostCreaterelatedPostsInput | string[]
    permission: string
    teamId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    models?: ModelUncheckedCreateNestedManyWithoutPostsInput
    files?: FileRecordUncheckedCreateNestedManyWithoutPostInput
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    projectAssets?: ProjectAssetUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutPdfIdsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutPdfIdsInput, PostUncheckedCreateWithoutPdfIdsInput>
  }

  export type UserUpsertWithoutPdfsInput = {
    update: XOR<UserUpdateWithoutPdfsInput, UserUncheckedUpdateWithoutPdfsInput>
    create: XOR<UserCreateWithoutPdfsInput, UserUncheckedCreateWithoutPdfsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPdfsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPdfsInput, UserUncheckedUpdateWithoutPdfsInput>
  }

  export type UserUpdateWithoutPdfsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    image?: NullableStringFieldUpdateOperationsInput | string | null
    userCollection?: UserUpdateuserCollectionInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamMembers?: TeamMemberUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    models?: ModelUpdateManyWithoutUploaderNestedInput
    fileRecords?: FileRecordUpdateManyWithoutUploaderNestedInput
    posts?: PostUpdateManyWithoutUploaderNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutPdfsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    image?: NullableStringFieldUpdateOperationsInput | string | null
    userCollection?: UserUpdateuserCollectionInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamMembers?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    models?: ModelUncheckedUpdateManyWithoutUploaderNestedInput
    fileRecords?: FileRecordUncheckedUpdateManyWithoutUploaderNestedInput
    posts?: PostUncheckedUpdateManyWithoutUploaderNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type PostUpsertWithWhereUniqueWithoutPdfIdsInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutPdfIdsInput, PostUncheckedUpdateWithoutPdfIdsInput>
    create: XOR<PostCreateWithoutPdfIdsInput, PostUncheckedCreateWithoutPdfIdsInput>
  }

  export type PostUpdateWithWhereUniqueWithoutPdfIdsInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutPdfIdsInput, PostUncheckedUpdateWithoutPdfIdsInput>
  }

  export type PostUpdateManyWithWhereWithoutPdfIdsInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutPdfIdsInput>
  }

  export type ProjectCreateWithoutPhasesInput = {
    id?: string
    name: string
    description?: string | null
    client?: string | null
    location?: string | null
    coverImage?: string | null
    status?: $Enums.ProjectStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    team: TeamCreateNestedOneWithoutProjectsInput
    creator: UserCreateNestedOneWithoutProjectsInput
    assets?: ProjectAssetCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutPhasesInput = {
    id?: string
    name: string
    description?: string | null
    client?: string | null
    location?: string | null
    coverImage?: string | null
    status?: $Enums.ProjectStatus
    teamId: string
    creatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    assets?: ProjectAssetUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutPhasesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutPhasesInput, ProjectUncheckedCreateWithoutPhasesInput>
  }

  export type ProjectAssetCreateWithoutPhaseInput = {
    id?: string
    sortOrder?: number
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutAssetsInput
    post: PostCreateNestedOneWithoutProjectAssetsInput
  }

  export type ProjectAssetUncheckedCreateWithoutPhaseInput = {
    id?: string
    sortOrder?: number
    projectId: string
    postId: string
    createdAt?: Date | string
  }

  export type ProjectAssetCreateOrConnectWithoutPhaseInput = {
    where: ProjectAssetWhereUniqueInput
    create: XOR<ProjectAssetCreateWithoutPhaseInput, ProjectAssetUncheckedCreateWithoutPhaseInput>
  }

  export type ProjectAssetCreateManyPhaseInputEnvelope = {
    data: ProjectAssetCreateManyPhaseInput | ProjectAssetCreateManyPhaseInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutPhasesInput = {
    update: XOR<ProjectUpdateWithoutPhasesInput, ProjectUncheckedUpdateWithoutPhasesInput>
    create: XOR<ProjectCreateWithoutPhasesInput, ProjectUncheckedCreateWithoutPhasesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutPhasesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutPhasesInput, ProjectUncheckedUpdateWithoutPhasesInput>
  }

  export type ProjectUpdateWithoutPhasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    client?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutProjectsNestedInput
    creator?: UserUpdateOneRequiredWithoutProjectsNestedInput
    assets?: ProjectAssetUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutPhasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    client?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    teamId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assets?: ProjectAssetUncheckedUpdateManyWithoutProjectNestedInput
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
    AND?: ProjectAssetScalarWhereInput | ProjectAssetScalarWhereInput[]
    OR?: ProjectAssetScalarWhereInput[]
    NOT?: ProjectAssetScalarWhereInput | ProjectAssetScalarWhereInput[]
    id?: StringFilter<"ProjectAsset"> | string
    sortOrder?: IntFilter<"ProjectAsset"> | number
    projectId?: StringFilter<"ProjectAsset"> | string
    phaseId?: StringNullableFilter<"ProjectAsset"> | string | null
    postId?: StringFilter<"ProjectAsset"> | string
    createdAt?: DateTimeFilter<"ProjectAsset"> | Date | string
  }

  export type ModelCreateWithoutPostsInput = {
    id?: string
    shortId: string
    name: string
    fileId: string
    size?: string
    status?: $Enums.ProcessStatus
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    uploader: UserCreateNestedOneWithoutModelsInput
  }

  export type ModelUncheckedCreateWithoutPostsInput = {
    id?: string
    shortId: string
    name: string
    fileId: string
    uploaderId: string
    size?: string
    status?: $Enums.ProcessStatus
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModelCreateOrConnectWithoutPostsInput = {
    where: ModelWhereUniqueInput
    create: XOR<ModelCreateWithoutPostsInput, ModelUncheckedCreateWithoutPostsInput>
  }

  export type PdfCreateWithoutPostsInput = {
    id?: string
    name: string
    fileId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    uploader: UserCreateNestedOneWithoutPdfsInput
  }

  export type PdfUncheckedCreateWithoutPostsInput = {
    id?: string
    name: string
    fileId: string
    uploaderId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PdfCreateOrConnectWithoutPostsInput = {
    where: PdfWhereUniqueInput
    create: XOR<PdfCreateWithoutPostsInput, PdfUncheckedCreateWithoutPostsInput>
  }

  export type FileRecordCreateWithoutPostInput = {
    id?: string
    shortId?: string | null
    name: string
    fileId: string
    viewerFileId?: string | null
    category?: $Enums.FileCategory
    extension?: string | null
    size?: string
    status?: $Enums.ProcessStatus
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    uploader: UserCreateNestedOneWithoutFileRecordsInput
  }

  export type FileRecordUncheckedCreateWithoutPostInput = {
    id?: string
    shortId?: string | null
    name: string
    fileId: string
    viewerFileId?: string | null
    category?: $Enums.FileCategory
    extension?: string | null
    size?: string
    status?: $Enums.ProcessStatus
    errorMessage?: string | null
    uploaderId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileRecordCreateOrConnectWithoutPostInput = {
    where: FileRecordWhereUniqueInput
    create: XOR<FileRecordCreateWithoutPostInput, FileRecordUncheckedCreateWithoutPostInput>
  }

  export type FileRecordCreateManyPostInputEnvelope = {
    data: FileRecordCreateManyPostInput | FileRecordCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutPostsInput = {
    id?: string
    userName: string
    email: string
    role?: $Enums.Role
    image?: string | null
    userCollection?: UserCreateuserCollectionInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    teamMembers?: TeamMemberCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    models?: ModelCreateNestedManyWithoutUploaderInput
    pdfs?: PdfCreateNestedManyWithoutUploaderInput
    fileRecords?: FileRecordCreateNestedManyWithoutUploaderInput
    comments?: CommentCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: string
    userName: string
    email: string
    role?: $Enums.Role
    image?: string | null
    userCollection?: UserCreateuserCollectionInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    teamMembers?: TeamMemberUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    models?: ModelUncheckedCreateNestedManyWithoutUploaderInput
    pdfs?: PdfUncheckedCreateNestedManyWithoutUploaderInput
    fileRecords?: FileRecordUncheckedCreateNestedManyWithoutUploaderInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type TeamCreateWithoutPostsInput = {
    id?: string
    name: string
    description?: string | null
    avatar?: string | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: TeamMemberCreateNestedManyWithoutTeamInput
    projects?: ProjectCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutPostsInput = {
    id?: string
    name: string
    description?: string | null
    avatar?: string | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: TeamMemberUncheckedCreateNestedManyWithoutTeamInput
    projects?: ProjectUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutPostsInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutPostsInput, TeamUncheckedCreateWithoutPostsInput>
  }

  export type CommentCreateWithoutPostInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentInput
  }

  export type CommentUncheckedCreateWithoutPostInput = {
    id?: string
    content: string
    userId: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
  }

  export type CommentCreateOrConnectWithoutPostInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
  }

  export type CommentCreateManyPostInputEnvelope = {
    data: CommentCreateManyPostInput | CommentCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type ProjectAssetCreateWithoutPostInput = {
    id?: string
    sortOrder?: number
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutAssetsInput
    phase?: PhaseCreateNestedOneWithoutProjectAssetsInput
  }

  export type ProjectAssetUncheckedCreateWithoutPostInput = {
    id?: string
    sortOrder?: number
    projectId: string
    phaseId?: string | null
    createdAt?: Date | string
  }

  export type ProjectAssetCreateOrConnectWithoutPostInput = {
    where: ProjectAssetWhereUniqueInput
    create: XOR<ProjectAssetCreateWithoutPostInput, ProjectAssetUncheckedCreateWithoutPostInput>
  }

  export type ProjectAssetCreateManyPostInputEnvelope = {
    data: ProjectAssetCreateManyPostInput | ProjectAssetCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type ModelUpsertWithWhereUniqueWithoutPostsInput = {
    where: ModelWhereUniqueInput
    update: XOR<ModelUpdateWithoutPostsInput, ModelUncheckedUpdateWithoutPostsInput>
    create: XOR<ModelCreateWithoutPostsInput, ModelUncheckedCreateWithoutPostsInput>
  }

  export type ModelUpdateWithWhereUniqueWithoutPostsInput = {
    where: ModelWhereUniqueInput
    data: XOR<ModelUpdateWithoutPostsInput, ModelUncheckedUpdateWithoutPostsInput>
  }

  export type ModelUpdateManyWithWhereWithoutPostsInput = {
    where: ModelScalarWhereInput
    data: XOR<ModelUpdateManyMutationInput, ModelUncheckedUpdateManyWithoutPostsInput>
  }

  export type ModelScalarWhereInput = {
    AND?: ModelScalarWhereInput | ModelScalarWhereInput[]
    OR?: ModelScalarWhereInput[]
    NOT?: ModelScalarWhereInput | ModelScalarWhereInput[]
    id?: StringFilter<"Model"> | string
    shortId?: StringFilter<"Model"> | string
    name?: StringFilter<"Model"> | string
    fileId?: StringFilter<"Model"> | string
    uploaderId?: StringFilter<"Model"> | string
    size?: StringFilter<"Model"> | string
    status?: EnumProcessStatusFilter<"Model"> | $Enums.ProcessStatus
    errorMessage?: StringNullableFilter<"Model"> | string | null
    createdAt?: DateTimeFilter<"Model"> | Date | string
    updatedAt?: DateTimeFilter<"Model"> | Date | string
  }

  export type PdfUpsertWithWhereUniqueWithoutPostsInput = {
    where: PdfWhereUniqueInput
    update: XOR<PdfUpdateWithoutPostsInput, PdfUncheckedUpdateWithoutPostsInput>
    create: XOR<PdfCreateWithoutPostsInput, PdfUncheckedCreateWithoutPostsInput>
  }

  export type PdfUpdateWithWhereUniqueWithoutPostsInput = {
    where: PdfWhereUniqueInput
    data: XOR<PdfUpdateWithoutPostsInput, PdfUncheckedUpdateWithoutPostsInput>
  }

  export type PdfUpdateManyWithWhereWithoutPostsInput = {
    where: PdfScalarWhereInput
    data: XOR<PdfUpdateManyMutationInput, PdfUncheckedUpdateManyWithoutPostsInput>
  }

  export type PdfScalarWhereInput = {
    AND?: PdfScalarWhereInput | PdfScalarWhereInput[]
    OR?: PdfScalarWhereInput[]
    NOT?: PdfScalarWhereInput | PdfScalarWhereInput[]
    id?: StringFilter<"Pdf"> | string
    name?: StringFilter<"Pdf"> | string
    fileId?: StringFilter<"Pdf"> | string
    uploaderId?: StringFilter<"Pdf"> | string
    createdAt?: DateTimeFilter<"Pdf"> | Date | string
    updatedAt?: DateTimeFilter<"Pdf"> | Date | string
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
    AND?: FileRecordScalarWhereInput | FileRecordScalarWhereInput[]
    OR?: FileRecordScalarWhereInput[]
    NOT?: FileRecordScalarWhereInput | FileRecordScalarWhereInput[]
    id?: StringFilter<"FileRecord"> | string
    shortId?: StringNullableFilter<"FileRecord"> | string | null
    name?: StringFilter<"FileRecord"> | string
    fileId?: StringFilter<"FileRecord"> | string
    viewerFileId?: StringNullableFilter<"FileRecord"> | string | null
    category?: EnumFileCategoryFilter<"FileRecord"> | $Enums.FileCategory
    extension?: StringNullableFilter<"FileRecord"> | string | null
    size?: StringFilter<"FileRecord"> | string
    status?: EnumProcessStatusFilter<"FileRecord"> | $Enums.ProcessStatus
    errorMessage?: StringNullableFilter<"FileRecord"> | string | null
    uploaderId?: StringFilter<"FileRecord"> | string
    postId?: StringNullableFilter<"FileRecord"> | string | null
    createdAt?: DateTimeFilter<"FileRecord"> | Date | string
    updatedAt?: DateTimeFilter<"FileRecord"> | Date | string
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    image?: NullableStringFieldUpdateOperationsInput | string | null
    userCollection?: UserUpdateuserCollectionInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamMembers?: TeamMemberUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    models?: ModelUpdateManyWithoutUploaderNestedInput
    pdfs?: PdfUpdateManyWithoutUploaderNestedInput
    fileRecords?: FileRecordUpdateManyWithoutUploaderNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    image?: NullableStringFieldUpdateOperationsInput | string | null
    userCollection?: UserUpdateuserCollectionInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamMembers?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    models?: ModelUncheckedUpdateManyWithoutUploaderNestedInput
    pdfs?: PdfUncheckedUpdateManyWithoutUploaderNestedInput
    fileRecords?: FileRecordUncheckedUpdateManyWithoutUploaderNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type TeamUpsertWithoutPostsInput = {
    update: XOR<TeamUpdateWithoutPostsInput, TeamUncheckedUpdateWithoutPostsInput>
    create: XOR<TeamCreateWithoutPostsInput, TeamUncheckedCreateWithoutPostsInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutPostsInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutPostsInput, TeamUncheckedUpdateWithoutPostsInput>
  }

  export type TeamUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: TeamMemberUpdateManyWithoutTeamNestedInput
    projects?: ProjectUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: TeamMemberUncheckedUpdateManyWithoutTeamNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutTeamNestedInput
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
    id?: string
    name: string
    description?: string | null
    avatar?: string | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: TeamMemberCreateNestedManyWithoutTeamInput
    posts?: PostCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutProjectsInput = {
    id?: string
    name: string
    description?: string | null
    avatar?: string | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: TeamMemberUncheckedCreateNestedManyWithoutTeamInput
    posts?: PostUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutProjectsInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutProjectsInput, TeamUncheckedCreateWithoutProjectsInput>
  }

  export type UserCreateWithoutProjectsInput = {
    id?: string
    userName: string
    email: string
    role?: $Enums.Role
    image?: string | null
    userCollection?: UserCreateuserCollectionInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    teamMembers?: TeamMemberCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    models?: ModelCreateNestedManyWithoutUploaderInput
    pdfs?: PdfCreateNestedManyWithoutUploaderInput
    fileRecords?: FileRecordCreateNestedManyWithoutUploaderInput
    posts?: PostCreateNestedManyWithoutUploaderInput
    comments?: CommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProjectsInput = {
    id?: string
    userName: string
    email: string
    role?: $Enums.Role
    image?: string | null
    userCollection?: UserCreateuserCollectionInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    teamMembers?: TeamMemberUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    models?: ModelUncheckedCreateNestedManyWithoutUploaderInput
    pdfs?: PdfUncheckedCreateNestedManyWithoutUploaderInput
    fileRecords?: FileRecordUncheckedCreateNestedManyWithoutUploaderInput
    posts?: PostUncheckedCreateNestedManyWithoutUploaderInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
  }

  export type PhaseCreateWithoutProjectInput = {
    id?: string
    name: string
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    projectAssets?: ProjectAssetCreateNestedManyWithoutPhaseInput
  }

  export type PhaseUncheckedCreateWithoutProjectInput = {
    id?: string
    name: string
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    projectAssets?: ProjectAssetUncheckedCreateNestedManyWithoutPhaseInput
  }

  export type PhaseCreateOrConnectWithoutProjectInput = {
    where: PhaseWhereUniqueInput
    create: XOR<PhaseCreateWithoutProjectInput, PhaseUncheckedCreateWithoutProjectInput>
  }

  export type PhaseCreateManyProjectInputEnvelope = {
    data: PhaseCreateManyProjectInput | PhaseCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ProjectAssetCreateWithoutProjectInput = {
    id?: string
    sortOrder?: number
    createdAt?: Date | string
    phase?: PhaseCreateNestedOneWithoutProjectAssetsInput
    post: PostCreateNestedOneWithoutProjectAssetsInput
  }

  export type ProjectAssetUncheckedCreateWithoutProjectInput = {
    id?: string
    sortOrder?: number
    phaseId?: string | null
    postId: string
    createdAt?: Date | string
  }

  export type ProjectAssetCreateOrConnectWithoutProjectInput = {
    where: ProjectAssetWhereUniqueInput
    create: XOR<ProjectAssetCreateWithoutProjectInput, ProjectAssetUncheckedCreateWithoutProjectInput>
  }

  export type ProjectAssetCreateManyProjectInputEnvelope = {
    data: ProjectAssetCreateManyProjectInput | ProjectAssetCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type TeamUpsertWithoutProjectsInput = {
    update: XOR<TeamUpdateWithoutProjectsInput, TeamUncheckedUpdateWithoutProjectsInput>
    create: XOR<TeamCreateWithoutProjectsInput, TeamUncheckedCreateWithoutProjectsInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutProjectsInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutProjectsInput, TeamUncheckedUpdateWithoutProjectsInput>
  }

  export type TeamUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: TeamMemberUpdateManyWithoutTeamNestedInput
    posts?: PostUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: TeamMemberUncheckedUpdateManyWithoutTeamNestedInput
    posts?: PostUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type UserUpsertWithoutProjectsInput = {
    update: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type UserUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    image?: NullableStringFieldUpdateOperationsInput | string | null
    userCollection?: UserUpdateuserCollectionInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamMembers?: TeamMemberUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    models?: ModelUpdateManyWithoutUploaderNestedInput
    pdfs?: PdfUpdateManyWithoutUploaderNestedInput
    fileRecords?: FileRecordUpdateManyWithoutUploaderNestedInput
    posts?: PostUpdateManyWithoutUploaderNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    image?: NullableStringFieldUpdateOperationsInput | string | null
    userCollection?: UserUpdateuserCollectionInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamMembers?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    models?: ModelUncheckedUpdateManyWithoutUploaderNestedInput
    pdfs?: PdfUncheckedUpdateManyWithoutUploaderNestedInput
    fileRecords?: FileRecordUncheckedUpdateManyWithoutUploaderNestedInput
    posts?: PostUncheckedUpdateManyWithoutUploaderNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
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
    AND?: PhaseScalarWhereInput | PhaseScalarWhereInput[]
    OR?: PhaseScalarWhereInput[]
    NOT?: PhaseScalarWhereInput | PhaseScalarWhereInput[]
    id?: StringFilter<"Phase"> | string
    name?: StringFilter<"Phase"> | string
    sortOrder?: IntFilter<"Phase"> | number
    projectId?: StringFilter<"Phase"> | string
    createdAt?: DateTimeFilter<"Phase"> | Date | string
    updatedAt?: DateTimeFilter<"Phase"> | Date | string
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

  export type ProjectCreateWithoutAssetsInput = {
    id?: string
    name: string
    description?: string | null
    client?: string | null
    location?: string | null
    coverImage?: string | null
    status?: $Enums.ProjectStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    team: TeamCreateNestedOneWithoutProjectsInput
    creator: UserCreateNestedOneWithoutProjectsInput
    phases?: PhaseCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutAssetsInput = {
    id?: string
    name: string
    description?: string | null
    client?: string | null
    location?: string | null
    coverImage?: string | null
    status?: $Enums.ProjectStatus
    teamId: string
    creatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    phases?: PhaseUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutAssetsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutAssetsInput, ProjectUncheckedCreateWithoutAssetsInput>
  }

  export type PhaseCreateWithoutProjectAssetsInput = {
    id?: string
    name: string
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutPhasesInput
  }

  export type PhaseUncheckedCreateWithoutProjectAssetsInput = {
    id?: string
    name: string
    sortOrder?: number
    projectId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhaseCreateOrConnectWithoutProjectAssetsInput = {
    where: PhaseWhereUniqueInput
    create: XOR<PhaseCreateWithoutProjectAssetsInput, PhaseUncheckedCreateWithoutProjectAssetsInput>
  }

  export type PostCreateWithoutProjectAssetsInput = {
    id?: string
    shortId: string
    title: string
    category: string
    description?: string | null
    type: string
    keywords?: PostCreatekeywordsInput | string[]
    coverImage: string
    images?: PostCreateimagesInput | string[]
    relatedPosts?: PostCreaterelatedPostsInput | string[]
    permission: string
    createdAt?: Date | string
    updatedAt?: Date | string
    models?: ModelCreateNestedManyWithoutPostsInput
    pdfIds?: PdfCreateNestedManyWithoutPostsInput
    files?: FileRecordCreateNestedManyWithoutPostInput
    uploader: UserCreateNestedOneWithoutPostsInput
    team?: TeamCreateNestedOneWithoutPostsInput
    comments?: CommentCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutProjectAssetsInput = {
    id?: string
    shortId: string
    title: string
    category: string
    description?: string | null
    type: string
    keywords?: PostCreatekeywordsInput | string[]
    coverImage: string
    images?: PostCreateimagesInput | string[]
    uploaderId: string
    relatedPosts?: PostCreaterelatedPostsInput | string[]
    permission: string
    teamId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    models?: ModelUncheckedCreateNestedManyWithoutPostsInput
    pdfIds?: PdfUncheckedCreateNestedManyWithoutPostsInput
    files?: FileRecordUncheckedCreateNestedManyWithoutPostInput
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutProjectAssetsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutProjectAssetsInput, PostUncheckedCreateWithoutProjectAssetsInput>
  }

  export type ProjectUpsertWithoutAssetsInput = {
    update: XOR<ProjectUpdateWithoutAssetsInput, ProjectUncheckedUpdateWithoutAssetsInput>
    create: XOR<ProjectCreateWithoutAssetsInput, ProjectUncheckedCreateWithoutAssetsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutAssetsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutAssetsInput, ProjectUncheckedUpdateWithoutAssetsInput>
  }

  export type ProjectUpdateWithoutAssetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    client?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutProjectsNestedInput
    creator?: UserUpdateOneRequiredWithoutProjectsNestedInput
    phases?: PhaseUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutAssetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    client?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    teamId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phases?: PhaseUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type PhaseUpsertWithoutProjectAssetsInput = {
    update: XOR<PhaseUpdateWithoutProjectAssetsInput, PhaseUncheckedUpdateWithoutProjectAssetsInput>
    create: XOR<PhaseCreateWithoutProjectAssetsInput, PhaseUncheckedCreateWithoutProjectAssetsInput>
    where?: PhaseWhereInput
  }

  export type PhaseUpdateToOneWithWhereWithoutProjectAssetsInput = {
    where?: PhaseWhereInput
    data: XOR<PhaseUpdateWithoutProjectAssetsInput, PhaseUncheckedUpdateWithoutProjectAssetsInput>
  }

  export type PhaseUpdateWithoutProjectAssetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutPhasesNestedInput
  }

  export type PhaseUncheckedUpdateWithoutProjectAssetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUpsertWithoutProjectAssetsInput = {
    update: XOR<PostUpdateWithoutProjectAssetsInput, PostUncheckedUpdateWithoutProjectAssetsInput>
    create: XOR<PostCreateWithoutProjectAssetsInput, PostUncheckedCreateWithoutProjectAssetsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutProjectAssetsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutProjectAssetsInput, PostUncheckedUpdateWithoutProjectAssetsInput>
  }

  export type PostUpdateWithoutProjectAssetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    keywords?: PostUpdatekeywordsInput | string[]
    coverImage?: StringFieldUpdateOperationsInput | string
    images?: PostUpdateimagesInput | string[]
    relatedPosts?: PostUpdaterelatedPostsInput | string[]
    permission?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    models?: ModelUpdateManyWithoutPostsNestedInput
    pdfIds?: PdfUpdateManyWithoutPostsNestedInput
    files?: FileRecordUpdateManyWithoutPostNestedInput
    uploader?: UserUpdateOneRequiredWithoutPostsNestedInput
    team?: TeamUpdateOneWithoutPostsNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutProjectAssetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    keywords?: PostUpdatekeywordsInput | string[]
    coverImage?: StringFieldUpdateOperationsInput | string
    images?: PostUpdateimagesInput | string[]
    uploaderId?: StringFieldUpdateOperationsInput | string
    relatedPosts?: PostUpdaterelatedPostsInput | string[]
    permission?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    models?: ModelUncheckedUpdateManyWithoutPostsNestedInput
    pdfIds?: PdfUncheckedUpdateManyWithoutPostsNestedInput
    files?: FileRecordUncheckedUpdateManyWithoutPostNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
  }

  export type TeamMemberCreateWithoutTeamInput = {
    id?: string
    role?: $Enums.TeamRole
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutTeamMembersInput
  }

  export type TeamMemberUncheckedCreateWithoutTeamInput = {
    id?: string
    role?: $Enums.TeamRole
    userId: string
    joinedAt?: Date | string
  }

  export type TeamMemberCreateOrConnectWithoutTeamInput = {
    where: TeamMemberWhereUniqueInput
    create: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput>
  }

  export type TeamMemberCreateManyTeamInputEnvelope = {
    data: TeamMemberCreateManyTeamInput | TeamMemberCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutTeamInput = {
    id?: string
    shortId: string
    title: string
    category: string
    description?: string | null
    type: string
    keywords?: PostCreatekeywordsInput | string[]
    coverImage: string
    images?: PostCreateimagesInput | string[]
    relatedPosts?: PostCreaterelatedPostsInput | string[]
    permission: string
    createdAt?: Date | string
    updatedAt?: Date | string
    models?: ModelCreateNestedManyWithoutPostsInput
    pdfIds?: PdfCreateNestedManyWithoutPostsInput
    files?: FileRecordCreateNestedManyWithoutPostInput
    uploader: UserCreateNestedOneWithoutPostsInput
    comments?: CommentCreateNestedManyWithoutPostInput
    projectAssets?: ProjectAssetCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutTeamInput = {
    id?: string
    shortId: string
    title: string
    category: string
    description?: string | null
    type: string
    keywords?: PostCreatekeywordsInput | string[]
    coverImage: string
    images?: PostCreateimagesInput | string[]
    uploaderId: string
    relatedPosts?: PostCreaterelatedPostsInput | string[]
    permission: string
    createdAt?: Date | string
    updatedAt?: Date | string
    models?: ModelUncheckedCreateNestedManyWithoutPostsInput
    pdfIds?: PdfUncheckedCreateNestedManyWithoutPostsInput
    files?: FileRecordUncheckedCreateNestedManyWithoutPostInput
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    projectAssets?: ProjectAssetUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutTeamInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutTeamInput, PostUncheckedCreateWithoutTeamInput>
  }

  export type PostCreateManyTeamInputEnvelope = {
    data: PostCreateManyTeamInput | PostCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutTeamInput = {
    id?: string
    name: string
    description?: string | null
    client?: string | null
    location?: string | null
    coverImage?: string | null
    status?: $Enums.ProjectStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutProjectsInput
    phases?: PhaseCreateNestedManyWithoutProjectInput
    assets?: ProjectAssetCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutTeamInput = {
    id?: string
    name: string
    description?: string | null
    client?: string | null
    location?: string | null
    coverImage?: string | null
    status?: $Enums.ProjectStatus
    creatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    phases?: PhaseUncheckedCreateNestedManyWithoutProjectInput
    assets?: ProjectAssetUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutTeamInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutTeamInput, ProjectUncheckedCreateWithoutTeamInput>
  }

  export type ProjectCreateManyTeamInputEnvelope = {
    data: ProjectCreateManyTeamInput | ProjectCreateManyTeamInput[]
    skipDuplicates?: boolean
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
    AND?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
    OR?: TeamMemberScalarWhereInput[]
    NOT?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
    id?: StringFilter<"TeamMember"> | string
    role?: EnumTeamRoleFilter<"TeamMember"> | $Enums.TeamRole
    teamId?: StringFilter<"TeamMember"> | string
    userId?: StringFilter<"TeamMember"> | string
    joinedAt?: DateTimeFilter<"TeamMember"> | Date | string
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
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    client?: StringNullableFilter<"Project"> | string | null
    location?: StringNullableFilter<"Project"> | string | null
    coverImage?: StringNullableFilter<"Project"> | string | null
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    teamId?: StringFilter<"Project"> | string
    creatorId?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
  }

  export type TeamCreateWithoutMembersInput = {
    id?: string
    name: string
    description?: string | null
    avatar?: string | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostCreateNestedManyWithoutTeamInput
    projects?: ProjectCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    description?: string | null
    avatar?: string | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutTeamInput
    projects?: ProjectUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutMembersInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
  }

  export type UserCreateWithoutTeamMembersInput = {
    id?: string
    userName: string
    email: string
    role?: $Enums.Role
    image?: string | null
    userCollection?: UserCreateuserCollectionInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    models?: ModelCreateNestedManyWithoutUploaderInput
    pdfs?: PdfCreateNestedManyWithoutUploaderInput
    fileRecords?: FileRecordCreateNestedManyWithoutUploaderInput
    posts?: PostCreateNestedManyWithoutUploaderInput
    comments?: CommentCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutTeamMembersInput = {
    id?: string
    userName: string
    email: string
    role?: $Enums.Role
    image?: string | null
    userCollection?: UserCreateuserCollectionInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    models?: ModelUncheckedCreateNestedManyWithoutUploaderInput
    pdfs?: PdfUncheckedCreateNestedManyWithoutUploaderInput
    fileRecords?: FileRecordUncheckedCreateNestedManyWithoutUploaderInput
    posts?: PostUncheckedCreateNestedManyWithoutUploaderInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutTeamMembersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeamMembersInput, UserUncheckedCreateWithoutTeamMembersInput>
  }

  export type TeamUpsertWithoutMembersInput = {
    update: XOR<TeamUpdateWithoutMembersInput, TeamUncheckedUpdateWithoutMembersInput>
    create: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutMembersInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutMembersInput, TeamUncheckedUpdateWithoutMembersInput>
  }

  export type TeamUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutTeamNestedInput
    projects?: ProjectUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutTeamNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type UserUpsertWithoutTeamMembersInput = {
    update: XOR<UserUpdateWithoutTeamMembersInput, UserUncheckedUpdateWithoutTeamMembersInput>
    create: XOR<UserCreateWithoutTeamMembersInput, UserUncheckedCreateWithoutTeamMembersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTeamMembersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTeamMembersInput, UserUncheckedUpdateWithoutTeamMembersInput>
  }

  export type UserUpdateWithoutTeamMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    image?: NullableStringFieldUpdateOperationsInput | string | null
    userCollection?: UserUpdateuserCollectionInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    models?: ModelUpdateManyWithoutUploaderNestedInput
    pdfs?: PdfUpdateManyWithoutUploaderNestedInput
    fileRecords?: FileRecordUpdateManyWithoutUploaderNestedInput
    posts?: PostUpdateManyWithoutUploaderNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutTeamMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    image?: NullableStringFieldUpdateOperationsInput | string | null
    userCollection?: UserUpdateuserCollectionInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    models?: ModelUncheckedUpdateManyWithoutUploaderNestedInput
    pdfs?: PdfUncheckedUpdateManyWithoutUploaderNestedInput
    fileRecords?: FileRecordUncheckedUpdateManyWithoutUploaderNestedInput
    posts?: PostUncheckedUpdateManyWithoutUploaderNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type TeamMemberCreateWithoutUserInput = {
    id?: string
    role?: $Enums.TeamRole
    joinedAt?: Date | string
    team: TeamCreateNestedOneWithoutMembersInput
  }

  export type TeamMemberUncheckedCreateWithoutUserInput = {
    id?: string
    role?: $Enums.TeamRole
    teamId: string
    joinedAt?: Date | string
  }

  export type TeamMemberCreateOrConnectWithoutUserInput = {
    where: TeamMemberWhereUniqueInput
    create: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput>
  }

  export type TeamMemberCreateManyUserInputEnvelope = {
    data: TeamMemberCreateManyUserInput | TeamMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    password?: string | null
    provider: string
    providerAccountId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    password?: string | null
    provider: string
    providerAccountId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ModelCreateWithoutUploaderInput = {
    id?: string
    shortId: string
    name: string
    fileId: string
    size?: string
    status?: $Enums.ProcessStatus
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostCreateNestedManyWithoutModelsInput
  }

  export type ModelUncheckedCreateWithoutUploaderInput = {
    id?: string
    shortId: string
    name: string
    fileId: string
    size?: string
    status?: $Enums.ProcessStatus
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutModelsInput
  }

  export type ModelCreateOrConnectWithoutUploaderInput = {
    where: ModelWhereUniqueInput
    create: XOR<ModelCreateWithoutUploaderInput, ModelUncheckedCreateWithoutUploaderInput>
  }

  export type ModelCreateManyUploaderInputEnvelope = {
    data: ModelCreateManyUploaderInput | ModelCreateManyUploaderInput[]
    skipDuplicates?: boolean
  }

  export type PdfCreateWithoutUploaderInput = {
    id?: string
    name: string
    fileId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostCreateNestedManyWithoutPdfIdsInput
  }

  export type PdfUncheckedCreateWithoutUploaderInput = {
    id?: string
    name: string
    fileId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutPdfIdsInput
  }

  export type PdfCreateOrConnectWithoutUploaderInput = {
    where: PdfWhereUniqueInput
    create: XOR<PdfCreateWithoutUploaderInput, PdfUncheckedCreateWithoutUploaderInput>
  }

  export type PdfCreateManyUploaderInputEnvelope = {
    data: PdfCreateManyUploaderInput | PdfCreateManyUploaderInput[]
    skipDuplicates?: boolean
  }

  export type FileRecordCreateWithoutUploaderInput = {
    id?: string
    shortId?: string | null
    name: string
    fileId: string
    viewerFileId?: string | null
    category?: $Enums.FileCategory
    extension?: string | null
    size?: string
    status?: $Enums.ProcessStatus
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    post?: PostCreateNestedOneWithoutFilesInput
  }

  export type FileRecordUncheckedCreateWithoutUploaderInput = {
    id?: string
    shortId?: string | null
    name: string
    fileId: string
    viewerFileId?: string | null
    category?: $Enums.FileCategory
    extension?: string | null
    size?: string
    status?: $Enums.ProcessStatus
    errorMessage?: string | null
    postId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileRecordCreateOrConnectWithoutUploaderInput = {
    where: FileRecordWhereUniqueInput
    create: XOR<FileRecordCreateWithoutUploaderInput, FileRecordUncheckedCreateWithoutUploaderInput>
  }

  export type FileRecordCreateManyUploaderInputEnvelope = {
    data: FileRecordCreateManyUploaderInput | FileRecordCreateManyUploaderInput[]
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutUploaderInput = {
    id?: string
    shortId: string
    title: string
    category: string
    description?: string | null
    type: string
    keywords?: PostCreatekeywordsInput | string[]
    coverImage: string
    images?: PostCreateimagesInput | string[]
    relatedPosts?: PostCreaterelatedPostsInput | string[]
    permission: string
    createdAt?: Date | string
    updatedAt?: Date | string
    models?: ModelCreateNestedManyWithoutPostsInput
    pdfIds?: PdfCreateNestedManyWithoutPostsInput
    files?: FileRecordCreateNestedManyWithoutPostInput
    team?: TeamCreateNestedOneWithoutPostsInput
    comments?: CommentCreateNestedManyWithoutPostInput
    projectAssets?: ProjectAssetCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutUploaderInput = {
    id?: string
    shortId: string
    title: string
    category: string
    description?: string | null
    type: string
    keywords?: PostCreatekeywordsInput | string[]
    coverImage: string
    images?: PostCreateimagesInput | string[]
    relatedPosts?: PostCreaterelatedPostsInput | string[]
    permission: string
    teamId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    models?: ModelUncheckedCreateNestedManyWithoutPostsInput
    pdfIds?: PdfUncheckedCreateNestedManyWithoutPostsInput
    files?: FileRecordUncheckedCreateNestedManyWithoutPostInput
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    projectAssets?: ProjectAssetUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutUploaderInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutUploaderInput, PostUncheckedCreateWithoutUploaderInput>
  }

  export type PostCreateManyUploaderInputEnvelope = {
    data: PostCreateManyUploaderInput | PostCreateManyUploaderInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    post: PostCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentInput
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    id?: string
    content: string
    postId: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
  }

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentCreateManyUserInputEnvelope = {
    data: CommentCreateManyUserInput | CommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutCreatorInput = {
    id?: string
    name: string
    description?: string | null
    client?: string | null
    location?: string | null
    coverImage?: string | null
    status?: $Enums.ProjectStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    team: TeamCreateNestedOneWithoutProjectsInput
    phases?: PhaseCreateNestedManyWithoutProjectInput
    assets?: ProjectAssetCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutCreatorInput = {
    id?: string
    name: string
    description?: string | null
    client?: string | null
    location?: string | null
    coverImage?: string | null
    status?: $Enums.ProjectStatus
    teamId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    phases?: PhaseUncheckedCreateNestedManyWithoutProjectInput
    assets?: ProjectAssetUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutCreatorInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutCreatorInput, ProjectUncheckedCreateWithoutCreatorInput>
  }

  export type ProjectCreateManyCreatorInputEnvelope = {
    data: ProjectCreateManyCreatorInput | ProjectCreateManyCreatorInput[]
    skipDuplicates?: boolean
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
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    password?: StringNullableFilter<"Account"> | string | null
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type ModelUpsertWithWhereUniqueWithoutUploaderInput = {
    where: ModelWhereUniqueInput
    update: XOR<ModelUpdateWithoutUploaderInput, ModelUncheckedUpdateWithoutUploaderInput>
    create: XOR<ModelCreateWithoutUploaderInput, ModelUncheckedCreateWithoutUploaderInput>
  }

  export type ModelUpdateWithWhereUniqueWithoutUploaderInput = {
    where: ModelWhereUniqueInput
    data: XOR<ModelUpdateWithoutUploaderInput, ModelUncheckedUpdateWithoutUploaderInput>
  }

  export type ModelUpdateManyWithWhereWithoutUploaderInput = {
    where: ModelScalarWhereInput
    data: XOR<ModelUpdateManyMutationInput, ModelUncheckedUpdateManyWithoutUploaderInput>
  }

  export type PdfUpsertWithWhereUniqueWithoutUploaderInput = {
    where: PdfWhereUniqueInput
    update: XOR<PdfUpdateWithoutUploaderInput, PdfUncheckedUpdateWithoutUploaderInput>
    create: XOR<PdfCreateWithoutUploaderInput, PdfUncheckedCreateWithoutUploaderInput>
  }

  export type PdfUpdateWithWhereUniqueWithoutUploaderInput = {
    where: PdfWhereUniqueInput
    data: XOR<PdfUpdateWithoutUploaderInput, PdfUncheckedUpdateWithoutUploaderInput>
  }

  export type PdfUpdateManyWithWhereWithoutUploaderInput = {
    where: PdfScalarWhereInput
    data: XOR<PdfUpdateManyMutationInput, PdfUncheckedUpdateManyWithoutUploaderInput>
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
    id?: string
    content: string
    postId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUpdateWithoutModelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    keywords?: PostUpdatekeywordsInput | string[]
    coverImage?: StringFieldUpdateOperationsInput | string
    images?: PostUpdateimagesInput | string[]
    relatedPosts?: PostUpdaterelatedPostsInput | string[]
    permission?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pdfIds?: PdfUpdateManyWithoutPostsNestedInput
    files?: FileRecordUpdateManyWithoutPostNestedInput
    uploader?: UserUpdateOneRequiredWithoutPostsNestedInput
    team?: TeamUpdateOneWithoutPostsNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
    projectAssets?: ProjectAssetUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutModelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    keywords?: PostUpdatekeywordsInput | string[]
    coverImage?: StringFieldUpdateOperationsInput | string
    images?: PostUpdateimagesInput | string[]
    uploaderId?: StringFieldUpdateOperationsInput | string
    relatedPosts?: PostUpdaterelatedPostsInput | string[]
    permission?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pdfIds?: PdfUncheckedUpdateManyWithoutPostsNestedInput
    files?: FileRecordUncheckedUpdateManyWithoutPostNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
    projectAssets?: ProjectAssetUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutModelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    keywords?: PostUpdatekeywordsInput | string[]
    coverImage?: StringFieldUpdateOperationsInput | string
    images?: PostUpdateimagesInput | string[]
    uploaderId?: StringFieldUpdateOperationsInput | string
    relatedPosts?: PostUpdaterelatedPostsInput | string[]
    permission?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUpdateWithoutPdfIdsInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    keywords?: PostUpdatekeywordsInput | string[]
    coverImage?: StringFieldUpdateOperationsInput | string
    images?: PostUpdateimagesInput | string[]
    relatedPosts?: PostUpdaterelatedPostsInput | string[]
    permission?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    models?: ModelUpdateManyWithoutPostsNestedInput
    files?: FileRecordUpdateManyWithoutPostNestedInput
    uploader?: UserUpdateOneRequiredWithoutPostsNestedInput
    team?: TeamUpdateOneWithoutPostsNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
    projectAssets?: ProjectAssetUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutPdfIdsInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    keywords?: PostUpdatekeywordsInput | string[]
    coverImage?: StringFieldUpdateOperationsInput | string
    images?: PostUpdateimagesInput | string[]
    uploaderId?: StringFieldUpdateOperationsInput | string
    relatedPosts?: PostUpdaterelatedPostsInput | string[]
    permission?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    models?: ModelUncheckedUpdateManyWithoutPostsNestedInput
    files?: FileRecordUncheckedUpdateManyWithoutPostNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
    projectAssets?: ProjectAssetUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutPdfIdsInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    keywords?: PostUpdatekeywordsInput | string[]
    coverImage?: StringFieldUpdateOperationsInput | string
    images?: PostUpdateimagesInput | string[]
    uploaderId?: StringFieldUpdateOperationsInput | string
    relatedPosts?: PostUpdaterelatedPostsInput | string[]
    permission?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectAssetCreateManyPhaseInput = {
    id?: string
    sortOrder?: number
    projectId: string
    postId: string
    createdAt?: Date | string
  }

  export type ProjectAssetUpdateWithoutPhaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutAssetsNestedInput
    post?: PostUpdateOneRequiredWithoutProjectAssetsNestedInput
  }

  export type ProjectAssetUncheckedUpdateWithoutPhaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    projectId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectAssetUncheckedUpdateManyWithoutPhaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    projectId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileRecordCreateManyPostInput = {
    id?: string
    shortId?: string | null
    name: string
    fileId: string
    viewerFileId?: string | null
    category?: $Enums.FileCategory
    extension?: string | null
    size?: string
    status?: $Enums.ProcessStatus
    errorMessage?: string | null
    uploaderId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateManyPostInput = {
    id?: string
    content: string
    userId: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectAssetCreateManyPostInput = {
    id?: string
    sortOrder?: number
    projectId: string
    phaseId?: string | null
    createdAt?: Date | string
  }

  export type ModelUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploader?: UserUpdateOneRequiredWithoutModelsNestedInput
  }

  export type ModelUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    uploaderId?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelUncheckedUpdateManyWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    uploaderId?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PdfUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploader?: UserUpdateOneRequiredWithoutPdfsNestedInput
  }

  export type PdfUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    uploaderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PdfUncheckedUpdateManyWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    uploaderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileRecordUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    viewerFileId?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumFileCategoryFieldUpdateOperationsInput | $Enums.FileCategory
    extension?: NullableStringFieldUpdateOperationsInput | string | null
    size?: StringFieldUpdateOperationsInput | string
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploader?: UserUpdateOneRequiredWithoutFileRecordsNestedInput
  }

  export type FileRecordUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    viewerFileId?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumFileCategoryFieldUpdateOperationsInput | $Enums.FileCategory
    extension?: NullableStringFieldUpdateOperationsInput | string | null
    size?: StringFieldUpdateOperationsInput | string
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    uploaderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileRecordUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    viewerFileId?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumFileCategoryFieldUpdateOperationsInput | $Enums.FileCategory
    extension?: NullableStringFieldUpdateOperationsInput | string | null
    size?: StringFieldUpdateOperationsInput | string
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    uploaderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectAssetUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutAssetsNestedInput
    phase?: PhaseUpdateOneWithoutProjectAssetsNestedInput
  }

  export type ProjectAssetUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    projectId?: StringFieldUpdateOperationsInput | string
    phaseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectAssetUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    projectId?: StringFieldUpdateOperationsInput | string
    phaseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhaseCreateManyProjectInput = {
    id?: string
    name: string
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectAssetCreateManyProjectInput = {
    id?: string
    sortOrder?: number
    phaseId?: string | null
    postId: string
    createdAt?: Date | string
  }

  export type PhaseUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectAssets?: ProjectAssetUpdateManyWithoutPhaseNestedInput
  }

  export type PhaseUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectAssets?: ProjectAssetUncheckedUpdateManyWithoutPhaseNestedInput
  }

  export type PhaseUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectAssetUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phase?: PhaseUpdateOneWithoutProjectAssetsNestedInput
    post?: PostUpdateOneRequiredWithoutProjectAssetsNestedInput
  }

  export type ProjectAssetUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    phaseId?: NullableStringFieldUpdateOperationsInput | string | null
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectAssetUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    phaseId?: NullableStringFieldUpdateOperationsInput | string | null
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberCreateManyTeamInput = {
    id?: string
    role?: $Enums.TeamRole
    userId: string
    joinedAt?: Date | string
  }

  export type PostCreateManyTeamInput = {
    id?: string
    shortId: string
    title: string
    category: string
    description?: string | null
    type: string
    keywords?: PostCreatekeywordsInput | string[]
    coverImage: string
    images?: PostCreateimagesInput | string[]
    uploaderId: string
    relatedPosts?: PostCreaterelatedPostsInput | string[]
    permission: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateManyTeamInput = {
    id?: string
    name: string
    description?: string | null
    client?: string | null
    location?: string | null
    coverImage?: string | null
    status?: $Enums.ProjectStatus
    creatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamMemberUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumTeamRoleFieldUpdateOperationsInput | $Enums.TeamRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTeamMembersNestedInput
  }

  export type TeamMemberUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumTeamRoleFieldUpdateOperationsInput | $Enums.TeamRole
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumTeamRoleFieldUpdateOperationsInput | $Enums.TeamRole
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    keywords?: PostUpdatekeywordsInput | string[]
    coverImage?: StringFieldUpdateOperationsInput | string
    images?: PostUpdateimagesInput | string[]
    relatedPosts?: PostUpdaterelatedPostsInput | string[]
    permission?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    models?: ModelUpdateManyWithoutPostsNestedInput
    pdfIds?: PdfUpdateManyWithoutPostsNestedInput
    files?: FileRecordUpdateManyWithoutPostNestedInput
    uploader?: UserUpdateOneRequiredWithoutPostsNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
    projectAssets?: ProjectAssetUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    keywords?: PostUpdatekeywordsInput | string[]
    coverImage?: StringFieldUpdateOperationsInput | string
    images?: PostUpdateimagesInput | string[]
    uploaderId?: StringFieldUpdateOperationsInput | string
    relatedPosts?: PostUpdaterelatedPostsInput | string[]
    permission?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    models?: ModelUncheckedUpdateManyWithoutPostsNestedInput
    pdfIds?: PdfUncheckedUpdateManyWithoutPostsNestedInput
    files?: FileRecordUncheckedUpdateManyWithoutPostNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
    projectAssets?: ProjectAssetUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    keywords?: PostUpdatekeywordsInput | string[]
    coverImage?: StringFieldUpdateOperationsInput | string
    images?: PostUpdateimagesInput | string[]
    uploaderId?: StringFieldUpdateOperationsInput | string
    relatedPosts?: PostUpdaterelatedPostsInput | string[]
    permission?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    client?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutProjectsNestedInput
    phases?: PhaseUpdateManyWithoutProjectNestedInput
    assets?: ProjectAssetUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    client?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phases?: PhaseUncheckedUpdateManyWithoutProjectNestedInput
    assets?: ProjectAssetUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    client?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberCreateManyUserInput = {
    id?: string
    role?: $Enums.TeamRole
    teamId: string
    joinedAt?: Date | string
  }

  export type AccountCreateManyUserInput = {
    id?: string
    password?: string | null
    provider: string
    providerAccountId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModelCreateManyUploaderInput = {
    id?: string
    shortId: string
    name: string
    fileId: string
    size?: string
    status?: $Enums.ProcessStatus
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PdfCreateManyUploaderInput = {
    id?: string
    name: string
    fileId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileRecordCreateManyUploaderInput = {
    id?: string
    shortId?: string | null
    name: string
    fileId: string
    viewerFileId?: string | null
    category?: $Enums.FileCategory
    extension?: string | null
    size?: string
    status?: $Enums.ProcessStatus
    errorMessage?: string | null
    postId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCreateManyUploaderInput = {
    id?: string
    shortId: string
    title: string
    category: string
    description?: string | null
    type: string
    keywords?: PostCreatekeywordsInput | string[]
    coverImage: string
    images?: PostCreateimagesInput | string[]
    relatedPosts?: PostCreaterelatedPostsInput | string[]
    permission: string
    teamId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateManyUserInput = {
    id?: string
    content: string
    postId: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateManyCreatorInput = {
    id?: string
    name: string
    description?: string | null
    client?: string | null
    location?: string | null
    coverImage?: string | null
    status?: $Enums.ProjectStatus
    teamId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumTeamRoleFieldUpdateOperationsInput | $Enums.TeamRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutMembersNestedInput
  }

  export type TeamMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumTeamRoleFieldUpdateOperationsInput | $Enums.TeamRole
    teamId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumTeamRoleFieldUpdateOperationsInput | $Enums.TeamRole
    teamId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelUpdateWithoutUploaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutModelsNestedInput
  }

  export type ModelUncheckedUpdateWithoutUploaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutModelsNestedInput
  }

  export type ModelUncheckedUpdateManyWithoutUploaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PdfUpdateWithoutUploaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutPdfIdsNestedInput
  }

  export type PdfUncheckedUpdateWithoutUploaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutPdfIdsNestedInput
  }

  export type PdfUncheckedUpdateManyWithoutUploaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileRecordUpdateWithoutUploaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    viewerFileId?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumFileCategoryFieldUpdateOperationsInput | $Enums.FileCategory
    extension?: NullableStringFieldUpdateOperationsInput | string | null
    size?: StringFieldUpdateOperationsInput | string
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneWithoutFilesNestedInput
  }

  export type FileRecordUncheckedUpdateWithoutUploaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    viewerFileId?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumFileCategoryFieldUpdateOperationsInput | $Enums.FileCategory
    extension?: NullableStringFieldUpdateOperationsInput | string | null
    size?: StringFieldUpdateOperationsInput | string
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileRecordUncheckedUpdateManyWithoutUploaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    viewerFileId?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumFileCategoryFieldUpdateOperationsInput | $Enums.FileCategory
    extension?: NullableStringFieldUpdateOperationsInput | string | null
    size?: StringFieldUpdateOperationsInput | string
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUpdateWithoutUploaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    keywords?: PostUpdatekeywordsInput | string[]
    coverImage?: StringFieldUpdateOperationsInput | string
    images?: PostUpdateimagesInput | string[]
    relatedPosts?: PostUpdaterelatedPostsInput | string[]
    permission?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    models?: ModelUpdateManyWithoutPostsNestedInput
    pdfIds?: PdfUpdateManyWithoutPostsNestedInput
    files?: FileRecordUpdateManyWithoutPostNestedInput
    team?: TeamUpdateOneWithoutPostsNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
    projectAssets?: ProjectAssetUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutUploaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    keywords?: PostUpdatekeywordsInput | string[]
    coverImage?: StringFieldUpdateOperationsInput | string
    images?: PostUpdateimagesInput | string[]
    relatedPosts?: PostUpdaterelatedPostsInput | string[]
    permission?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    models?: ModelUncheckedUpdateManyWithoutPostsNestedInput
    pdfIds?: PdfUncheckedUpdateManyWithoutPostsNestedInput
    files?: FileRecordUncheckedUpdateManyWithoutPostNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
    projectAssets?: ProjectAssetUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutUploaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    keywords?: PostUpdatekeywordsInput | string[]
    coverImage?: StringFieldUpdateOperationsInput | string
    images?: PostUpdateimagesInput | string[]
    relatedPosts?: PostUpdaterelatedPostsInput | string[]
    permission?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    client?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutProjectsNestedInput
    phases?: PhaseUpdateManyWithoutProjectNestedInput
    assets?: ProjectAssetUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    client?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    teamId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phases?: PhaseUncheckedUpdateManyWithoutProjectNestedInput
    assets?: ProjectAssetUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    client?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    teamId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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