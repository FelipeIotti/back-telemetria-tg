import { FastifyReply, FastifyRequest } from "fastify";
import { knex } from "../../database";

export async function getLastBaseData(
  request: FastifyRequest,
  response: FastifyReply
) {
  const baseData = await knex("base_data").select().first();
  return baseData;
}
