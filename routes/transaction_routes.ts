import { Router } from "https://deno.land/x/oak@v12.0.0/mod.ts";
import prisma from "./prisma_client.ts";

const transactionRouter = new Router();

transactionRouter
  .get("/transactions", async (ctx) => {
    const transactions = await prisma.opinionRewardTransaction.findMany();
    ctx.response.body = transactions;
  })
  .get("/transactions/:email", async (ctx) => {
    const transactions = await prisma.opinionRewardTransaction.findMany({
      where: {
        email_id: ctx.params.email,
      },
    });
    ctx.response.body = transactions;
  })
  .post("/transactions", async (ctx) => {
    const { email_id, user_id, product_id, purchase_id } = await ctx
      .request.body()
      .value;
    const transaction = await prisma.opinionRewardTransaction.create({
      data: {
        email_id,
        user_id,   
        product_id,
        purchase_id
      },
    });
    ctx.response.body = transaction;
  })
  .put("/transactions/:id", async (ctx) => {
    const { email_id, user_id, product_id, purchase_id } = await ctx
      .request.body()
      .value;
    const transaction = await prisma.opinionRewardTransaction.update({
      where: {
        id: Number(ctx.params.id),
      },
      data: {
        email_id,
        user_id,   
        product_id,
        purchase_id
      },
    });
    ctx.response.body = transaction;
  })
  .patch("/transactions/:id", async (ctx) => {
    const { email_id, user_id, product_id, purchase_id } = await ctx
      .request.body()
      .value;
    const transaction = await prisma.opinionRewardTransaction.update({
      where: {
        id: Number(ctx.params.id),
      },
      data: {
        email_id,
        user_id,   
        product_id,
        purchase_id
      },
    });
    ctx.response.body = transaction;
   })
  .delete("/transactions/:id", async (ctx) => {
    const transaction = await prisma.opinionRewardTransaction.delete({
      where: {
        id: Number(ctx.params.id),
      },
    });
    ctx.response.body = transaction;
  })
  .delete("/transactions", async (ctx) => {
    const transactions = await prisma.opinionRewardTransaction.deleteMany();
    ctx.response.body = transactions;
  });

export default transactionRouter;
