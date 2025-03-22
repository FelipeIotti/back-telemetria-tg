import { FastifyReply, FastifyRequest } from "fastify";
import { knex } from "../../database";

export async function deleteAllGps(
  request: FastifyRequest,
  response: FastifyReply
) {
  const baseData = await knex("gps").delete();
  return baseData;
}
