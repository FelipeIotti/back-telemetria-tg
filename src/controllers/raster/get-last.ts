import { FastifyReply, FastifyRequest } from "fastify";
import { knex } from "../../database";

export async function getLastRaster(
  request: FastifyRequest,
  response: FastifyReply
) {
  const raster = await knex("raster").select().first();
  return raster;
}
