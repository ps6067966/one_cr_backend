
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  findSync
} = require('./runtime/data-proxy')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.11.0
 * Query Engine version: 8fde8fef4033376662cad983758335009d522acb
 */
Prisma.prismaVersion = {
  client: "4.11.0",
  engine: "8fde8fef4033376662cad983758335009d522acb"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

const fs = require('fs')

// some frameworks or bundlers replace or totally remove __dirname
const hasDirname = typeof __dirname !== 'undefined' && __dirname !== '/'

// will work in most cases, ie. if the client has not been bundled
const regularDirname = hasDirname && fs.existsSync(path.join(__dirname, 'schema.prisma')) && __dirname

// if the client has been bundled, we need to look for the folders
const foundDirname = !regularDirname && findSync(process.cwd(), [
    "generated\\client",
    "client",
], ['d'], ['d'], 1)[0]

const dirname = regularDirname || foundDirname || __dirname

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  email: 'email',
  name: 'name'
});


exports.Prisma.ModelName = makeEnum({
  User: 'User'
});

const compressedDMMF = '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'
const decompressedDMMF = decompressFromBase64(compressedDMMF)
// We are parsing 2 times, as we want independent objects, because
// DMMFClass introduces circular references in the dmmf object
const dmmf = JSON.parse(decompressedDMMF)
exports.Prisma.dmmf = JSON.parse(decompressedDMMF)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\91860\\Desktop\\Projects\\All Project\\one_cr_backend\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": [
      "deno"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "..\\..\\.env",
    "schemaEnvPath": "..\\..\\.env"
  },
  "relativePath": "..\\..\\prisma",
  "clientVersion": "4.11.0",
  "engineVersion": "8fde8fef4033376662cad983758335009d522acb",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "dataProxy": true
}
config.dirname = dirname
config.document = dmmf

config.inlineSchema = 'Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBwcmV2aWV3RmVhdHVyZXMgPSBbImRlbm8iXQogIG91dHB1dCA9ICIuLi9nZW5lcmF0ZWQvY2xpZW50Igp9CgpkYXRhc291cmNlIGRiIHsKICBwcm92aWRlciA9ICJwb3N0Z3Jlc3FsIgogIHVybCAgICAgID0gZW52KCJEQVRBQkFTRV9VUkwiKQp9Cgptb2RlbCBVc2VyIHsKICBpZCAgICAgICAgSW50ICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBlbWFpbCAgICAgU3RyaW5nICAgQHVuaXF1ZQogIG5hbWUgICAgICBTdHJpbmc/Cn0K'
config.inlineSchemaHash = '73710dfcb773bb0a0b93ea9417054376169cff46e2ebf2ca89c88a2990d7c042'

config.inlineDatasources = {
  "db": {
    "url": {
      "fromEnvVar": "DATABASE_URL",
      "value": null
    }
  }
}


const { warnEnvConflicts } = require('./runtime/data-proxy')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
})


const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

