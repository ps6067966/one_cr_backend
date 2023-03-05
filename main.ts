import { load } from "https://deno.land/std@0.178.0/dotenv/mod.ts";
import { Application, Router } from "https://deno.land/x/oak@v12.0.0/mod.ts";
import { PrismaClient } from "./generated/client/deno/edge.ts";

const { DATABASE_URL } = await load();
const prisma = new PrismaClient({
  datasources: {db: { url: DATABASE_URL } }
});

const app = new Application();
const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = "Hello World!";
})
  .get("/users", async (ctx) => {
    const users = await prisma.user.findMany();
    ctx.response.body = users;
  })
  .get("/users/:id", async (ctx) => {
    const user = await prisma.user.findUnique({
      where: {
        id: Number(ctx.params.id),
      },
    });
    ctx.response.body = user;
  })
  .post("/users", async (ctx) => {
    const { name, email } = await ctx.request.body().value;
    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });
    ctx.response.body = user;
  })
  .put("/users/:id", async (ctx) => {
    const { name, email } = await ctx.request.body().value;
    const user = await prisma.user.update({
      where: {
        id: Number(ctx.params.id),
      },
      data: {
        name,
        email,
      },
    });
    ctx.response.body = user;
  })
  .delete("/users/:id", async (ctx) => {
    const user = await prisma.user.delete({
      where: {
        id: Number(ctx.params.id),
      },
    });
    ctx.response.body = user;
  })
  .delete("/users", async (ctx) => {
    const users = await prisma.user.deleteMany();
    ctx.response.body = users;
  });

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
