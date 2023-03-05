import {Prisma, PrismaClient} from '../generated/client/deno/edge.ts'
import {config} from "https://deno.land/x/dotenv@v3.2.0/mod.ts";

const envVars = config();

const prisma = new PrismaClient({
    datasources: {
        db: {
            url: envVars.DATABASE_URL,
        }
    },
});

const usersData: Prisma.UserCreateInput[] = [
    {
        name: "Pratap",
        email: "ps6067966@gmail.com"
    },
];

for(const userData of usersData) {
    await prisma.user.create({
        data: userData,
    });
}

await prisma.$disconnect();

