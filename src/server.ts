import fastifyCors from "@fastify/cors";
import fastifyJwt from "@fastify/jwt";
import fastify from "fastify";
import { env } from "./env";
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

app
  .listen({ host: "0.0.0.0", port: env.PORT })
  .then(() => console.log("Server is running! 🚀 \nOn port:" + env.PORT));
