import { Application } from "https://deno.land/x/oak@v12.0.0/mod.ts";
import bankRouter from "./routes/bank_routes.ts";
import transactionRouter from "./routes/transaction_routes.ts";
import userRouter from "./routes/user_routes.ts";

const app = new Application();

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());
app.use(bankRouter.routes());
app.use(bankRouter.allowedMethods());
app.use(transactionRouter.routes());
app.use(transactionRouter.allowedMethods());

console.log("Server running on port 8000");
await app.listen({ port: 8000 });
