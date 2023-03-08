import { PrismaClient } from "../generated/client/deno/edge.ts";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url:
        "postgresql://ps6067966:v2_3zpL7_zCKUAWJmXQks4qfbLWwqgWF@db.bit.io:5432/ps6067966.OneCrore?schema=public",
    },
  },
});

export default prisma;
