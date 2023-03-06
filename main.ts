// import { load } from "https://deno.land/std@0.178.0/dotenv/mod.ts";
import { Application } from "https://deno.land/x/oak@v12.0.0/mod.ts";
import router from "./routes/routes.ts";

// const { DATABASE_URL } = await load();

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
