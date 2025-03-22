import { FastifyReply, FastifyRequest } from "fastify";
import { knex } from "../../database";

export async function getLastGps(
  request: FastifyRequest,
  response: FastifyReply
) {
  const baseData = await knex("gps").select().first();
  return baseData;
}
