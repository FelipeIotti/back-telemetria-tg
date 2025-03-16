import { FastifyReply, FastifyRequest } from "fastify";
import { knex } from "../../database";

export async function listRaster(
  request: FastifyRequest,
  response: FastifyReply
) {
  const raster = await knex("raster").select();
  return raster;
}
