// import { load } from "https://deno.land/std@0.178.0/dotenv/mod.ts";
// import { Prisma, PrismaClient } from "../generated/client/deno/edge.ts";

// const { DATABASE_URL } = await load();

// const prisma = new PrismaClient({
//   datasources: {
//     db: {
//       url: DATABASE_URL,
//     },
//   },
// });

// const usersData: Prisma.UserCreateInput[] = [
//   {
//     name: "Pratap",
//     email: "ps6067966@gmail.com",
//   },
//   {
//     name: "Sachin",
//     email: "sachin123@gmail.com",
//   },
// ];

// for (const userData of usersData) {
//   await prisma.user.create({
//     data: userData,
//   });
// }

// await prisma.$disconnect();
