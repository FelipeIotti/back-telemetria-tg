import fastifyCors from "@fastify/cors";
import fastifyJwt from "@fastify/jwt";
import fastify from "fastify";
import { env } from "./env";
import { knex } from "./database";
import { appRoutes } from "./routes/routes";

const app = fastify({ trustProxy: false });

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
});

app.register(fastifyCors, {
  origin: "*", // 👈 libera para qualquer origem
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
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
