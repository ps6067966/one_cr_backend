
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
  user_name: 'user_name',
  fullName: 'fullName',
  email: 'email',
  photo_url: 'photo_url'
});


exports.Prisma.ModelName = makeEnum({
  User: 'User'
});

const compressedDMMF = 'N4IgJghgLhC2D2YCmAbEAuUSB2BXWAzhgNoC6ANCAsikesaNnEhiAKoFIBOIlYARgDlmGPChSUAZgEtUYOgxBNYLdCGlheIANbTsmtQQDGEFBB6VpBADJWoGSac6WCAJSQBHXNK5IDULlwkFzZsaS9VR1pg9QIASX9AmKt3CDAAeWwUAE8HJxiACwgCABEkR1wUKAA1UyCMAKDKKGyAB1UQOOx7PnKISvtMJRE1fqh4PSNfFW6tcwBzBVIAXxcAcRxuaD886JDWyCg/AEFBqM5VxhGQXE4uAH1lFkpdfVZjU3MtK1sCM/yXO4vD4duhGskCKFwvUwUkXAlds5YqkMllcuhzoVimUKlVaigYZjmm0OgBlAJ6ebfAgbbBbI4GImxNgHbZgU6IpCXYYqViSSooYS8l56AwgD5mCyxX7/PbIzzeXyJJrMsIRTnwxkA+VpTI5DUgIqlPoDfGE7UtdqsclcSnU2n00FMqwsw4nWUXchXXlqJCwCDSNAit6GEyS6kyg0pBUg5UQqHq2EqqwIjHa6O6tEGo04/p4uqRC0k60U7BU9abLhsqOQ1kMjlp6Lcp6sVoFeDje64LhBnSi95hr4uSONpHR4FKhpw1XQwtylNa+duJCZ/WjrHG3E1AsGy1k0vl2IOqsMmuutkNzHLCggVq2/1cbIAaSQ6LEEhuaqCADFZCh5CQN64F+SBdMgAAeSBLBWdInk6+TXsS7RLKs4pGAUfoQBgoB6K0uBQOk/AAFZIEYUAACoknQoB3lY/okN6HQcNwADqGG+F0eE9FQSAwNh4rwN2RhMXcICoUY8DYH8VZ6FA1FUBA4GCPgv5yHQ76ULAejKbAqn/upAqoTIakMTyHTHIIJTUkCirwUuyniBA/AoHOY7YFxlHIaZe6sMxXBsdwoHufhWhPAQrQQMJra2gQ9GUCg8AmFA0iSawuH4YRJFkZ5UERnYnLcj5ah+QFHHBdxYURVFai0bFWHxYl0ApdgaXlZlpEUVReV/FOQTXs21zpK41kxpO64uA5ZjOa5yTlTlCigEV7B3KVQVcaFzDhZFHS1XFIAJUlzWtVx7XZV1w75UmXIrF6ZmsII6TkSNE52WOBCTU5LlRnNXX0ItxbFSt7FrSFlCVdt0V0fV+2NclqVqOlBHER183dR6XK3UtJXA5xoNmVt1W3jFe0HU18PqG1yNnV5F09Vd/W3S2COaICo2vRCH3Td9Hm/YoS1dFAv5VNwG0qATO3E9DpNwy1COU1lnU09Kl1XpjAOdLMDWHeTEpDsrdNXjdjGsLc3CPCIrMvYub2c1940UzzXl/SAS02pSQtHFK4OE7tUuw0dcsnVTiu5bT6OFerbtllo0sB2hnxSj8KsIUbd1qPy4hCs88pWzWtszZYP1O3zkcHh7Itg5tVUS1DMf++TiOnSHRBhwVatWmoUeHrHOuDonNjJ02qdMyAmGBs9tnWxzAqfQXDv4ajzuu2Xgae6LUHV5DdV19rsvz0jCuo6364Rx3IBdzvZN77r/cjobA0+re7adt2vbjpPecz1z9uI4vJdn13cuXsq4QxqpLS+MtjoZWDkffW4d277ltNHLWV8BwJzRgVFYw9rh+XSFwZAXAABC2QWLSCgAUdwZgZa424hJKSAQAzdHkv6JSKk/wAXQAARk0tpNhJl0AAAYjLsIWmndQLMc4fx/u9L+dtnRF1ykvSO8AuAEXwRXfGm8wG1xQZA30eBYCwKTgbFOD8OimweC2S2UjnQyMct/eRjtFH/zJCotRBD17iy3iTeue8cD4CMQPExQ8zF8gFFnCesZP72LkemBRojXZuLwR4yuYstFEx0TDXerB/GGPOnAzBoTfT+nHtYqJ0j87cwXrzf6ACknqOAWk0BGTt66LjrkwJd9TGM2uG2Ds8Auw9kiWNWxlSf7xO8so1RySNHexrq0rJqD9EBPycY8OWCinLVYsDBMQQaFaDodJRhcl+IsJ0npDh3CqC8N0iIjAnDhH8MUCPDQwz2YTVkXPX+NSXbqwFhAuON8MEn2wY/Cx5thSSPKaMz5VTm6TIAQeAFvd0HH3vj0x+Y837LlzhU2F4ynEJNLkg7uvi0HhjRaY0FIluAzKISQshBRjjzHmL4eYV99mUEOQw2SzDFLnLuVwnh2ABX8KEVIQVzzrivLKSM9MdipqxPnBMpRdTpkNM8ek32yK/EGM6YPC41KTZ3Ahdnd+0L5VjMcdU4utTXHqpSZo5p2q2nkw6asoJ6zNkZ0FBbKFcr7L4utfC1V9r3GzJAT7cBrrdUrKVmswpGKOhYreVPD5MSvkqpcdaepjq5neL9tk5ZeT42esTcbGqz8Bmv1TdExVmbCUIrDXSzVzro2LL0aPPVHqukhKTawe4ElgLcXNQGm2Qa4mNtDb5O4ABhQS3Q6XEOZaypA7KjicqdVGzJPc96NxgT2g111Nn3AgAAN0PKO95sQrWTptc4u1M7uDHAvUu7IK62XbE3fm7RCzd1QIPijQ9wTDUnpYbWvFGa4V/0fYDbgABZRSb6P1rq/eVVt26/1ksDtAw+wGvX9rUPcLSLVZXXqsLe5VU7s1wa4PBvQyGWWfo3eh1JG8207uw/vJu+qQPHsIyAe4BB8AQZhVBgl96iVnz8qSfAjHV3rpBhVSN8yfFFu4we0tvbQNGto6SPuq1SHkJQ4p+IrGeJ8SGAQQSXBCZ+TElyySRzeWnP5Xw/SogBTCtFR59A75Hm+alY/CyVkyNppvROqjkmm1Pq4PphOhnGUme2GZ9abGvG/rU0sjTeGtNHtPjSuLBngZGaZUx1DRxUt4x/S0rLnb925dDgU+mumQBDVE5ayLblqOwa2UVhLJWkvldM9+lTBadUAZ4/h3q/GK0gAek9MLdbZ7QZ+VjO48XJSJeM8NlLo2mmYbq3HBrQG8t8YK7Fzb5httlYU3t8zNWXUduO/LU7TWE0tc2TK/15GFUrYkyGmjGsoCleS5VoBGHVOFuyyd6m72y0nwQawf5MbyV6w++iub4KrE/fCxRrrs0eu/MRSS0Hu3werwjQdqHE2cOAbhy3ZrqtesX1R6GVFTPulzZ9REpbkH62rdtcTxBlIyd3Yp8LRp7HDvQ/q69hnwLmfC5LCS2n8cKWc77XNlNfOxMC4BzB5XncDxi+Y1BCH6WtXtv/XTqbZ34Es6RWz9X6OEeY7EX0l+QzdedfE8Gw3y9SdDfF+bynUuMu1dly9oOjXGcY4Qkj43qvndAspSE1rflZ2+DQ2lkA3KZJMNc6w25/CNLXJFe5jh/mJVPKxyanHV64zpv1/7tbxK7Qp77orrnYied+sbzN5v/3W9C8Dx357KKNfx612InXuPB8Rb93ewHjvk8T+vl3tPoGBOe+rd7+fV0h8OOXwH9vyD19o9vvljZAm/KhHQqRbQfgs8rhY7n/Pxy+XF4uQZcQ3nK+/4oABYcJBYdDfYD787D4n5t5nwo4X7s5T5u494jzY7944pSLghH5KrdbRbTpJ7j424u5X7natZ96QoQGYGL4t7QGj5n6krqap6a7b7a4lLYo2TlKUH45L5RYr5G7nxO7wFEHd4z4jy76DJsFsxN5UFQE8Gn4k4EFcaMHT46abJ351hKYHJOY8qF5DBnIAGeZ/7l4+ZV6GQ16BZ15mwN7oEWqBrcE4G8Fj7n6EFKFIFNiJ78EkoXLnhHDpDtAnjNRVbKbU7jbO6w7wpb6za97hJoHsFjrTx2GE64FA6s6CEuHaYYyr7uzsLeFIC+H0gBH7bS406hHy7hFMGREjxz4QF64yH2FyEi5OGKGb7lEXb4FlheHqF5H+FOaFER5PaEFhG8YEZzZiE1o+62HUGyEwENH0HZZpH5buGALZGdF+FXyBGQ4hGCGDHTYgoMxzZ37YAP5GBP5gA5Gbof4ua6FuYl6+Zl4kbGGAHAGiIvISLVG+6TF1HTHI6aypHNHKEZF8ECwdFuhdFrG9FW6cbqbbH27lpiKoHkHWFxFYENpJGZGNEMF/GuGehonzDAnbCgkyzrGW4cZYZQmlFDGwkjxkFmqIm/aUafG0HyHolzGYnpGtEeFZFyA5EEkFEPZjaZZR4Nzkk7Hu6VGsEdYTG1GJEOF0Fq7zHnaLErxckrH5E9F8nBEClq7Qnw5smtajH75vGSnH5TGMkzFymskLE4l4k+GrGEngkklHZCkx5vZx5YnHoZ5zrZ5HCIbYDZDnFaEF4nJXHf6Cp3E3I/4GFAFmEgFzbgG0l45/bGkMkPqAk/HOEWkkGbLwk0mxGgicGJnYHSn1Eq4KEYkc7/F7FRGZwxGSEL5cEfFFlfFtGzGdrynDGz7il875n0mNmmklnMmtkZntmiFVriEQbdkE6FxE6OEtmApDmFIencA5E+nZDwb4QcrmYXE6GgB6E3EmGGH3H6F+amEgDGTmFwn141m4o1FJm9kpkznmnllunslLHKkgm2m8m56PbW5cbamum6nerREIm5kJk9lTmol8EpHplPlsmKmeHLHvmqlST2ky5anCkwm7ECZVHxnLa3ngUylMmzmT6u6wVWkIX4kflqlfn8mR5oXOkK4RGVkjn9JjnjHjoJH4XFnNmPmIGkWQVKn/jcmUXIXqlFGbEDHoU6nX5MU4J3D34YTHF+DLkQC+n+n0KBlf4PGRn/57mPHRnPHSqvE4WQF4X7xcXA48UkWWmpmCzkU2lIVElbrFFbGSX/nSUCbZkSnsUNmcVNkckDlzkwXWUznWm5HCWOXfmQkw6uXCHMFVm+rAW1kmWFm+V9ncWd5BUKlkVvkUUOUoXOUSX0VlEVmtbYUgW4UpVmV+VQVNGZUO78XwU5X2XdEiXUUam0UlFFUUmYUjGjljEH43mVXfJpX+VEUb51VtzZWCUqktURU0X9G/kxWMU35zZAlh6aHqWf5F5aXHkHnhmhknlnkxmz5eBOBeXxE+VVUjVwHQW8XuWxmkYDXvFSmpX3l/Jpm1V3V0zggyWPzYAdhdDnXImC5vWwEfVllfWDA/WtZVBA3SGmXDWg0dA3WfVWWZkCbCxw31kvVXVI3fHcS3Vo3DnXDzAjrGWDUokEXI3g0skTU9ViKk05lJUU0g1SbU0E2o3EHE1/UdhY0FmU3mUo0Q1E2TV8GCBQQMhrWS4bGamdW4YumxXumbJLHS2OabWXE7nXERm7UfiHm6WRlPGmSVGnW0B81gW41s39ljWX6K2/VgGPWGneU42I2W3pW/F03Q2bL/VQCA1sUXXO1Zo4mWVc0zZ22sCw1+3A0G7VUCGE0h300jyY2R3w1DWB0NWlm02Q2Ukk1k3lXJUC0x1r5x222taM1m2TkW0xZu3F3LWbJ0IwB6Cul50s3R0jU1XC3x2inXB/DmBySlbl0cWV14GjXB0l2bI4DyD93J3Y0I1p0PkZVZ0J3XDUBM3XnPWz3TnqwACKQQj48GiA2ckVpJ2W7qGFXdPNudzN69qdm9hFo9jF7h4tfwfgKta8xJqFct9OxVz5K1YimeC64a9KYOGhatzm25CkIZ/CVyet2tDy+lRthlA9l1LtVd58uaVOYlstghp9Ul6NFhliV5Ni19Bdbd6D4eEJx9naODbleD8VvOT1RpN9EFiSDqGDfRP56m1DY9WFnZDDTtG9zDUygDMtHV2D3aZ9yBvSfVBp5NxDrNqDpIZDIjC1nD4juDXqi5XAL68w8mZualYDQZmtkDvm0D+1UDhtzsLxSDAdt9zaGq79BVXGXDtdmjiG4EujFWIDeeAZW1wZO1pjFe+tXCFjoBaURlzdcjrdeNncSjDj4lTjajND3N5il5iVa9jDJD0TaDrD5DDpgpsaJa6j2dj81J1jAjVNOaOTyjHDJ9iT3DLBAYEh6T/DTDFTMTVTcTWDhBzjLRep0jTTRDGT8jw9ijHTTl8TqjcaRTuxrjDGDSy65OXjW5hjED/jOlsDITsZ4TV9QzUTrt2TwjnToj3TdTtdHlqTq9gzLTmT+zozhz4zXTCTUzSTxTHQpT09/NwzyRsTDzxzTzhTLzS9mKvDjt/t5T5ldzLaRzKjtTzz9THu/TZTrTELPzR9jpBT3V98mjsmsAHjim+j2hKzu5sD6zgqcDp5kqWzSLNzCjqL81NTVDpzvTYdagAspunjBAFu3j6t4DxLB1e1gT2t1eFLteJ1uAZ1Hz5tKDw9QtmdItQL9t1LXzvWsrg5HtSQLLSgANDtsjuzI+WTqrgVi9ntGNl9zTYLyLflhrxFndkjj8SdfDFrNLMrNNari959HQpNSrezqD1r417rdrnrRw3r+r+zfrNtZzc23tIbNBBrrrRr8rSuS0T9kt3Q7LpmXLaL+Tk2mm0zHrA6Q6PxoLUdobqDKbfgUtb9vzMLcuXVIpgbA656l6ur1zyrYtEtfg34CU0Amb9LUVtb8tDFzLAmQmImkrFd0rQO5bYAlbbDFD6LObse8LI8xGegMbJpWT07s7uTH9LldbEjIh1wxGik67yZ+zW73Qvb7VNb0eg739AFrWXc6bKWXLyzmlR5YZgr/LUZIr55xt4rpt47g9k7QdC9ibDbcsp7d5tzsdnNwKJrUb2rUHr1MHRdcHx8CHYiEdjrJbsbqHGdbr4Hh79rwbQHyDc9spYHtrxHQbyHQ9yRsHHdy7OdlzNhrbPrIzjHcr1HcVI89djCTdOz7HpbnHaHTHkbYiPdqiBAU9OHKdzrDHYn3HzHmK+gMnjKdHIH6dAVNrKnHQK9mnFHZ8O93Aq5B91T/b7STLJVXtvNZHNjgjd9VHttj9HbYAT7weZunL610LDLt7X9mLEHgmhbZrVzTrbbybbn27FnlD/nduebQXq7OrETereHZbbnr9c7eTdFd7gXNHA64G9n4Lfl07mXO7jjZJ+7CX6eytAlpxM1YJm5PjGtqzR5AT/jmzknvEhntjVt99zLrWa1TVYVeVTXPLRLWtZLpL5j8Dlj3d3XRXlr118bunEnLyhx0wOAoXbH4XHHQO4bCBRHvH1wyAUwfoW3PXjn7N/XNnAmsAAw0grQ+oi3CnKrK3/rR3FRJ30gZ6GgrHSJ8nEX71HN4nA3myF7tlqt3LBj77QTn7O1wrR1BlmKJtgn5ruHG7Yb73Ebw7D1l3bTFlznGHGrrW3tvtcnM9S3cbIPynxPfUMN23APlPr3NlN3P9myDrxbgPe3b3NPhHPHX3j8XrL3QPYNfPCbAvmrZdIvPPrPRPuPYi0bMvIn+32Ph3kvrnz9M7l7Pn1bfnTpuX9bNXAmpXK8UPb721H7XmRhVv4gnX/7ErFPnzsv897tAb+XkHyvaXonBHEv8HJPtnPtyXQnu3KvoHbv8rmHidjPdJE7RnZp8vt3c2nPLbof3vinvvq3CvI8wvTvUr8ffXif7PAm0vefcfvX1d6H2f1w/Hjd+PELXH/Pen7wMA0nsnXPzPovCfEfkvpVan7fqfGPZ7Cjjffva31wSvZfwHBflfoPFZmvDIZXMXC7tuubgLWL4PUXabnnHLr7zXvLk3pe1vMD379v1wCojvHfzvYfcvPfzfnvU/5HFfhPd/dPgvHQZPwf6P3PN//MavQhb/TVthyv759n+B3AAdXxI7/dY+0/MAf/zbKvNWAufEAeXyu7402eAFEvqR0f4OcCe4AhAQq1YCT8UBsAtAay3gHzlEcvWCHs+wlxVss2OXALkb2O6PxB0ADeviVy36Q96BfbWLgbyYEHsWBHQU9Beg4EjVp2XbeAD2114MDP68Xdfol2EywAxBm7LgVe0wZ/NKuhvQQe/wK5rsvemPdLlr2i6+dLO/A+Qff0EyFccBxXcQWoJkG8CV+OWBWi4035a9JB0g83vvwm7GN9yutMxrcUOqUsxWl/Qfj/3T69YPB4vLPknzET6CbBVPfZlEIwGXQo+E/JDgYOH7D1khRfEcGkJI4qCkh3baIR9174c9sBJAp/mQJAA5DX+kA2jpkOg6oNahNdeoUgIqFhDO+LvdWC0Kr6xCR4xAzodfwiF8Fehc/Z8gv07bFD1B7DMwXuiWpg8TeGXE3Dvwza68LefjW3v4K/ZH87es3UJr6FR6FCR+SnJvuP0fjxDKhuAhvqcLH7NZ8hH/DIQkJZ6u9WhH2B4eHRj6gVUBBPdurTzaFqAU+KXYTiMNeF9Di+c2ZAUMNAHVC/hZwgESAFL5XDbBWTOEXcP6E19JIDdKSMcJ946dShlgqTn3Q06NCUOJwzPgSPOHJp++JI54V30L51CMRF9XERn3xE495+1A5YUHh2wh5vOUPWQXu20HVchBBbdgaSPo6cjjBOvfkY4Ozar8l2VIvQV/zC5D8mhw9U3vBRlHXt9e8wqrgoI95WCT24orTpFy15L9TBfA3UUKP1EqEboIAQSFAD1H8RtUc3R+CZ0fBaAkeCDEpqKF/BcA/g9mSgAsGR4dAAA7sDBZG9ZsYgUfKhM2ipOjFRagFRAQmISRi+CuCeZgynISUINybVDQTe3MFr9/efUdwhmJTFZiKEqAXMdVllGMCLBiYvPN2Gsz9xgRafQwcPWjG+BdkXjAUYVWtGWCYAT+NMX/xKHsiIRknXQK0GHHA8UhtDEeGADsCTAvhFVF4erBkx9wLkAAUQMTL85RXaOFoAKwRR1KCDopxPxHWxZdCYK9XsIQVPH9jGK3qX0T4ADF3A8E5EAoFwHgChi5gXARYN6LDERjjRM/PrKtFjGPMtBAg4UboKTGZjpx0mV8ZmNKw5jqEolWYZaMXYuD7hGrUsQhPLFISqxKEvMWhKcF/lLBRgJsSojgmFZVo3YsCZoPjH3iERg46Ad8NIF4CKBdNfNoYEnFUT0BuQ+6mIgXF/AlxvEvTBuPYTbix2evOYTkms4I5PaN4LoSePwhnihgF48rqwGvFq47xkEm0VyEfH6AVygYkAMGP/GsBwxgUUSSBJxioT52e40iQ2OTHcBUxQE5/mWOckVjkJzUOiQWKtG6TixAJdSW+nwlUJvJtk7LnIKLENjyJ/oyia5OqGdikAtE8Kbuz7H+SGxzEqyfgMoFcTxQPE+KexNHHq9LBQk5KIcWXH516RYkhOFuJ3EWinBPTd4QH0UnDC5QOknKOeLXGiQjmWk53DpPrFYS+omyCAIs2MmmTXRAEyyQVPMqJSfJOojCUOyZEdAnJ9KKye5PpQhTqxQRfMfNPlGYSmpJYqMbhI8mbTCJNY7UTJL2mLTxxfHCiS2JD6qiyRHYoGIFGSlES7JdYqKUxIgBDjppVrDie7xFHcTHuWUgGZ936gtTza7UgGL1mAbGTexXGfqV9IrKbJWUgkVoMQjGm/iQx5kwCXSO6HwTtkMYlKRVwYnpSERK0lyfjN/5dTaUiE1YVtN3GfSFRg0wKbTK4DBSGZZ07acRPskLClprAfgLkC7LTguhNMwmf1klC1SpJCMyZgCwCnsl1xNUiSXVOknoTi0eXIGYaHPTj5kRiQ1BkrK2yDYeRXnOaZdOcHXTMBc2TKX9OW5FSIBAs4GVONtnU9ZxGjR6faJUn3pOpEstYJ+NwAYzsg6QL2SHCZl9SQ5A0g6fpIEwyB9A3YrGX+Imm4yppB+CcmxJmkvSuxIEM2erItn3tpKkM/FMpMdHey1J7MkRr1MEJIyWZKMmOaKHjkIT3xn478UGOxlmS1AFk3wOOVFmtSshQORKW9POk7TzZDkgbseOnDQyO4R0y8fpwPo3jEZEc5Gc+U1ZrkYAkCfYXNjO74k6QCcnGWoEODQwKCPcmEQT0zxekextYyKTXImHTyuA8lR/M/nPk5ySJ/M9noXMHqTzVAt8iuXPO0mLzr5bJLMq0DuAEQd53UkyW3KTkdy8ZR85ML3LVH9zM5SU7OSTLjEDtyZjsvPOfO7lwKT5Gc7gC/hzxDzeZzM/aTfPTFyVDiClE4oQrfzEKPpV8shVbLhLqEcFbYvubfLOKoLwJZMyOeQvUn3zFK9XN0M/L5kJix54QtqSHI6llyJZP8mgH/JLkYLl5AmLed6RUrZBd57c8ANAEPnGU05VQ0+Z6VfxIAVyoi0hZbOCrszaFpijReYsYWWLvqAfATAQEnElAA5KAaQElHhytiPZJo9WIQngDwAXIKlN2QuQ9mfyfZ5kSQJIA6h+BXAX4ggMHKUVhyq5/8phflk2Q0BeIuRMBRonGkHCQAncliXWXgVPTEFRMrObOHsWCjlFD7ceSqEiWyLCs8i1AIovEW1yscnRPJVKAKVzYD5bCvxcBLUIiLuF9E9BXwr4oCKqFD84RUQp5kMLalkygSSPGKWDLJFHCihZUuQXVKxlvkhafnMzLvz9cxc1Sd/J6m/zw5Si5ZediAVugjJ4CvpYJN0XrKxZoI9mcpV9KrzGZ9UsRYxI5FbK75MyoRZ8r9J7LdpeczWdBKKUwLoRPw/Bf5BsnvSIpSypefUo2UxAmlsMmJXErAAJLQxSSkOaktvHpLHF4cLJagByUPL8lkCwpWspdn7NZp4Kkea/PRVvKpFSimRditiVkR4liS5JcitSkLzrlaKzJVhUgjkSjgrgCAC3IgWJzClEQD0SLNwXwrC6FIsccwtELmBmAnsNHiqIxXlLesAAKWsyPU3hb8iJdIphl8ETVqUfibcoEyKrsg0q2VU8pHhOrXlZSiUdp2trFSGxEUKsCoF1VWTbVZq8EWyq9VYqbVpqsJSfE1ZwzwFXoqBcFzFFyroI3PU5aXNvnzph0wDAVd7N+XtL/lKiubCIMPAFLjl/2TNaHOaWxZtGeaq1VaELVXKOlJasRKO2UGtz5Vla7+NWq5WAqcWDazlcWGbVpKRVACsVaWpIw/ju1DSzFY2q/mAr6M2AIdWeNHUkrx1GSh1VOqNFprAIc6ygFGvUluNV1BatWU4OrlbryVmjP2ejOIT5rQ5G8uIRIgrWWrh1U82/uasAXnNLCfqV9Qas9nvrF1YI8Yd+u5xAVs4/69lUiCPWUdGRbasUo0xnXproN86oDVEoZFfrJ1CLFiv1Sg2RqF1GG2fv8M6XtqQuyG/dRmonmEba1tGHNd0FPWPrz1e4y9WSoKgnom2FG+gD2rth9rrV6k+tYswfUdT11wq1tWBvbVKCuNZAA9YBrOUDr8AjGkTcxqLV1LsNK7adV2pQ3O8+NH649XoCU0jqVNLa4tRJo027r8NYyXTcBvZknqhNhG0TeplY2HLr1myY4Dit5V4r+VRKp9Xx1TWWaK6sGsXrGqvCat/6ua+zeht82IMtNlG1DYepo288QtCELMhc2k08a54QW67vavJUxyIN6Wt9fJpHHJamw49XhgFo/mJbP14a9TVI1w374Ktl1LLXxPg1maj2pgXsI1pxrNbyB9sggaFs0aCaQ8wmozUmsKXfYutva6jehto01DihJWi4GFo2yKbIta639sdSsaxbuNsmnrS/yw23LZmK61bWerG1UsttMmqjY0qq3Fact7Gn9QQ0hSTbeN02orXBv225bwN1ZR7bSoy0L5dtaImIQhvP7laftO267W9pq3bqcNXuTraDsu1obXtTnVrZktcaKRDNTa9bXvPEQFb4dCWmbUltu1xr7tpqHHUpJe1ZqfVC26OZ9oSqQa4dZOq7fjsp2E7QtPDJDedt+2H45NFOkDSRqB2Px9SsO2dbju501rw+729jUeKoC/zk1xk07c+tJ0EamdN25HVDpQJpaOdhWnnRDtA21aSm+WzXQBv+2j9AdbW4Fuzr3Xbajd4OpHRLqJ29V6tQu7TVDJt3d87dA2hmPuPllDAXRhS90WZ2QBaAz0BYBQOABNDACpIOAAgGQh+4sBH2PzYPQSGcQmTjAWgZAKntazkQqwUkSKNQmsyhTJI1gJAGejaWUBE9QQUPSiHvzwBYAWkKAKeEoAoh50teshA3pADuB2gui6aCiC0CkhuA0gUwNIAABeK2bFuJLkCSTO1IAcvcnu+yeUpABu0eLw0F0gAb8629wJIEXjABlgqEf0K0FaCUhmEc8nkk5lMhaTaMWgJ7t2FMDGpuAjOWOacRAh8h65IEOXS/tnBviPxX45/XHNf2Nyv9sqh/X6LpgUt9AwBqAG/rAPPi1ETc7/enCfH+iID/+5uZ6NFArkf9YAalVKDUUdAcDmQJKeApwPoG1ARBjRcZOyXBt95lKnwj0q0ABy3QJsbpQQY0QUHbFvpVgKwawN0H1CxBm4DwbIPgKA5ICxgyAvwNjTFmrAEaSHmMloyA5qYtQLIcDn2ZEI9o8hLSnCr8Rs8BgC7aGNtCUHiAo8CVfhCQAuqtATq0wysB31AA==='
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

config.inlineSchema = 'Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBwcmV2aWV3RmVhdHVyZXMgPSBbImRlbm8iXQogIG91dHB1dCA9ICIuLi9nZW5lcmF0ZWQvY2xpZW50Igp9CgpkYXRhc291cmNlIGRiIHsKICBwcm92aWRlciA9ICJwb3N0Z3Jlc3FsIgogIHVybCAgICAgID0gZW52KCJEQVRBQkFTRV9VUkwiKQp9Cgptb2RlbCBVc2VyIHsKICBpZCAgICAgICAgSW50ICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICB1c2VyX25hbWUgU3RyaW5nICAgQHVuaXF1ZQogIGZ1bGxOYW1lICAgICAgU3RyaW5nCiAgZW1haWwgICAgIFN0cmluZyAgIEB1bmlxdWUKICBwaG90b191cmwgIFN0cmluZyAKfQo='
config.inlineSchemaHash = 'f08493c56ee2ddf9bb7baa9ba9c8a09d717eabe3dba6c46b09226e6e834c7527'

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

