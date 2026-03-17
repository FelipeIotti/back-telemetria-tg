import fastifyCors from "@fastify/cors";
import fastify from "fastify";
import { knex } from "./database";
import { env } from "./env";
import { appRoutes } from "./routes/routes";

const app = fastify({ trustProxy: false });

app.register(fastifyCors, {
  origin: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
});

app.register(appRoutes);

async function start() {
  if (env.DATABASE_CLIENT === "pg") {
    try {
      await knex.raw("select 1");
      console.log("✅ Database connection OK");
    } catch (err) {
      console.error("❌ Database connection failed:", err);
      process.exit(1);
    }
  }

  await app.listen({ host: "0.0.0.0", port: env.PORT });
  console.log("Server is running! 🚀 \nOn port:" + env.PORT);
}

start();
