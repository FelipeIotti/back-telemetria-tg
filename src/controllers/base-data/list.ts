import { FastifyReply, FastifyRequest } from "fastify";
import { knex } from "../../database";

export async function listBaseData(
  request: FastifyRequest,
  response: FastifyReply
) {
  const baseData = await knex("base_data")
    .select()
    .orderBy("created_at", "desc");
  return baseData;
}
