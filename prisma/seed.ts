import { Prisma, PrismaClient } from "../generated/client/deno/edge.ts";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url:
        "postgresql://ps6067966:v2_3zpL7_zCKUAWJmXQks4qfbLWwqgWF@db.bit.io:5432/ps6067966.OneCrore?schema=public",
    },
  },
});

const bank_details: Prisma.BankAccountDetailsCreateInput[] = [
  {
    full_name: "Dummy User",
    email: "ps6067966@gmail.com",
    paytm_number: "1234567890",
    upi_id: "dummy@upi",
  },
];

const usersData: Prisma.UserCreateInput[] = [
  {
    full_name: "Dummy User",
    photo_url: "https://dummyimage.com/600x400/000/fff",
    user_name: "dummy",
    email: "ps6067966@gmail.com",
    mobile_number: "1234567890",
    bank_details: { create: bank_details[0] },
  },
];

for (const userData of usersData) {
  await prisma.user.create({
    data: userData,
  });
}

await prisma.$disconnect();
