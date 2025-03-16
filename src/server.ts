import fastifyJwt from "@fastify/jwt";
import fastify from "fastify";
import { env } from "./env";
import { appRoutes } from "./routes/routes";

const app = fastify();

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
});
app.register(appRoutes);

app
  .listen({ port: env.PORT })
  .then(() => console.log("Server is running! 🚀 \nOn port:" + env.PORT));
