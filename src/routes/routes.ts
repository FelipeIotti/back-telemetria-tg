import { FastifyInstance } from "fastify";
import { clearBaseData } from "../controllers/base-data/clear";
import { createBaseData } from "../controllers/base-data/create";
import { getLastBaseData } from "../controllers/base-data/get-last";
import { listBaseData } from "../controllers/base-data/list";
import { clearAllData } from "../controllers/clear-all";
import { createGps } from "../controllers/gps/create";
import { deleteAllGps } from "../controllers/gps/deleteAll";
import { getLastGps } from "../controllers/gps/get-last";
import { listGps } from "../controllers/gps/list";
import { createMaster } from "../controllers/master/create";
import { mockData } from "../controllers/mock-data";
import { createRaster } from "../controllers/raster/create";
import { getLastRaster } from "../controllers/raster/get-last";
import { listRaster } from "../controllers/raster/list";
import { createTires } from "../controllers/tires/create";
import { getLastTires } from "../controllers/tires/get-last";
import { listTires } from "../controllers/tires/list";
import { clearTires } from "../controllers/tires/clear";

export async function appRoutes(app: FastifyInstance) {
  app.addHook("preHandler", async (request, response) => {
    console.log(`[${request.method}] ${request.url}`);
  });

  app.get("/base-data", listBaseData);
  app.post("/base-data", createBaseData);
  app.get("/base-data/last", getLastBaseData);
  app.delete("/base-data", clearBaseData);

  app.get("/tires", listTires);
  app.post("/tires", createTires);
  app.get("/tires/last", getLastTires);
  app.delete("/tires", clearTires);

  app.get("/raster", listRaster);
  app.post("/raster", createRaster);
  app.get("/raster/last", getLastRaster);

  app.get("/gps", listGps);
  app.post("/gps", createGps);
  app.get("/gps/last", getLastGps);
  app.delete("/gps", deleteAllGps);

  app.post("/master", createMaster);

  app.delete("/clear-all", clearAllData);

  app.post("/mock", mockData);
}
