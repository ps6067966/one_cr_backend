import { PrismaClient } from "../generated/client/deno/edge.ts";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url:
        "prisma://aws-us-east-1.prisma-data.com/?api_key=qYLCjjAjryYgRejOuvCudVL9MlXXiPx49NlkD9Wy9i-1AKn5yu0xWR2n0Qc89Qln",
    },
  },
});

export default prisma;
