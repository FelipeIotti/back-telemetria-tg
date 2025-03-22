import { FastifyInstance } from "fastify";
import { auth } from "../controllers/authenticate/auth";
import { createBaseData } from "../controllers/base-data/create";
import { getLastBaseData } from "../controllers/base-data/get-last";
import { listBaseData } from "../controllers/base-data/list";
import { createGps } from "../controllers/gps/create";
import { deleteAllGps } from "../controllers/gps/deleteAll";
import { getLastGps } from "../controllers/gps/get-last";
import { listGps } from "../controllers/gps/list";
import { createRaster } from "../controllers/raster/create";
import { getLastRaster } from "../controllers/raster/get-last";
import { listRaster } from "../controllers/raster/list";
import { createTires } from "../controllers/tires/create";
import { getLastTires } from "../controllers/tires/get-last";
import { listTires } from "../controllers/tires/list";

export async function appRoutes(app: FastifyInstance) {
  app.addHook("preHandler", async (request, response) => {
    console.log(`[${request.method}] ${request.url}`);
  });
  app.post("/auth", auth);

  app.get("/base-data", listBaseData);
  app.post("/base-data", createBaseData);
  app.get("/base-data/last", getLastBaseData);

  app.get("/tires", listTires);
  app.post("/tires", createTires);
  app.get("/tires/last", getLastTires);

  app.get("/raster", listRaster);
  app.post("/raster", createRaster);
  app.get("/raster/last", getLastRaster);

  app.get("/gps", listGps);
  app.post("/gps", createGps);
  app.get("/gps/last", getLastGps);
  app.delete("/gps", deleteAllGps);
}
