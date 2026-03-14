import { FastifyReply, FastifyRequest } from "fastify";
import { knex } from "../../database";

export async function getLastRaster(
  request: FastifyRequest,
  response: FastifyReply
) {
  const raster = await knex("raster")
    .select()
    .orderBy("created_at", "desc")
    .first();

  return raster || { message: "No data found" };
}
