import { PrismaClient } from "../generated/client/deno/edge.ts";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url:
        "prisma://aws-us-east-1.prisma-data.com/?api_key=85xQNyVL7hiq3SURGh5arVnZhE4JyumjMMn6cM6GkaQGxHmKwchlaE-3brsz_CdX",
    },
  },
});

export default prisma;
