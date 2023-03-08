import { Router } from "https://deno.land/x/oak@v12.0.0/mod.ts";
import prisma from "./prisma_client.ts";

const bankRouter = new Router();

bankRouter
  .get("/banks", async (ctx) => {
    const banks = await prisma.bankAccountDetails.findMany();
    ctx.response.body = banks;
  })
  .get("/banks/:email", async (ctx) => {
    const bank = await prisma.bankAccountDetails.findUnique({
      where: {
        email: ctx.params.email,
      },
    });
    ctx.response.body = bank;
  })
  .post("/banks", async (ctx) => {
    const { email, full_name, paytm_number, upi_id, user_id } = await ctx
      .request.body()
      .value;
    const bank = await prisma.bankAccountDetails.create({
      data: {
        full_name,
        email,
        paytm_number,
        upi_id,
        user_id,   
      },
    });
    ctx.response.body = bank;
  })
  .put("/banks/:id", async (ctx) => {
    const { email, full_name, paytm_number, upi_id, user_id } = await ctx
      .request.body()
      .value;
    const bank = await prisma.bankAccountDetails.update({
      where: {
        id: Number(ctx.params.id),
      },
      data: {
        email,
        full_name,
        paytm_number,
        upi_id,
        user_id,
      },
    });
    ctx.response.body = bank;
  })
  .delete("/banks/:id", async (ctx) => {
    const bank = await prisma.bankAccountDetails.delete({
      where: {
        id: Number(ctx.params.id),
      },
    });
    ctx.response.body = bank;
  })
  .delete("/banks", async (ctx) => {
    const banks = await prisma.bankAccountDetails.deleteMany();
    ctx.response.body = banks;
  });

export default bankRouter;
