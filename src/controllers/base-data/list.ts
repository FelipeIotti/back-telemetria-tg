import { FastifyReply, FastifyRequest } from "fastify";
import { knex } from "../../database";

export async function listBaseData(
  request: FastifyRequest,
  response: FastifyReply
) {
  const baseData = await knex("base_data").select();
  return baseData;
}
