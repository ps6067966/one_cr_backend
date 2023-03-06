import { Prisma, PrismaClient } from "../generated/client/deno/edge.ts";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url:
        "prisma://aws-us-east-1.prisma-data.com/?api_key=qYLCjjAjryYgRejOuvCudVL9MlXXiPx49NlkD9Wy9i-1AKn5yu0xWR2n0Qc89Qln",
    },
  },
});

const usersData: Prisma.UserCreateInput[] = [
  {
    full_name: "Dummy User",
    photo_url: "https://dummyimage.com/600x400/000/fff",
    user_name: "dummy",
    email: "ps6067966@gmail.com",
  },
];

for (const userData of usersData) {
  await prisma.user.create({
    data: userData,
  });
}

await prisma.$disconnect();
