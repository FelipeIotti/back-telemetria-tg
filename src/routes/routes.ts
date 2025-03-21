import { FastifyInstance } from "fastify";
import { auth } from "../controllers/authenticate/auth";
import { createBaseData } from "../controllers/base-data/create";
import { getLastBaseData } from "../controllers/base-data/get-last";
import { listBaseData } from "../controllers/base-data/list";
import { createRaster } from "../controllers/raster/create";
import { getLastRaster } from "../controllers/raster/get-last";
import { listRaster } from "../controllers/raster/list";
import { createTires } from "../controllers/tires/create";
import { getLastTires } from "../controllers/tires/get-last";
import { listTires } from "../controllers/tires/list";
import { verifyJWT } from "../middlewares/verify-jwt";

export async function appRoutes(app: FastifyInstance) {
  app.addHook("preHandler", async (request, response) => {
    console.log(`[${request.method}] ${request.url}`);
  });
  app.post("/auth", auth);

  app.get("/base-data", listBaseData);
  app.post("/base-data", createBaseData);
  app.get("/base-data/last", { onRequest: [verifyJWT] }, getLastBaseData);

  app.get("/tires", { onRequest: [verifyJWT] }, listTires);
  app.post("/tires", { onRequest: [verifyJWT] }, createTires);
  app.get("/tires/last", { onRequest: [verifyJWT] }, getLastTires);

  app.get("/raster", { onRequest: [verifyJWT] }, listRaster);
  app.post("/raster", { onRequest: [verifyJWT] }, createRaster);
  app.get("/raster/last", { onRequest: [verifyJWT] }, getLastRaster);
}
