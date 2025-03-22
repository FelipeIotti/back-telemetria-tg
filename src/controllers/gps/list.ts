import { FastifyReply, FastifyRequest } from "fastify";
import { knex } from "../../database";

export async function listGps(request: FastifyRequest, response: FastifyReply) {
  const baseData = await knex("gps").select();
  return baseData;
}
