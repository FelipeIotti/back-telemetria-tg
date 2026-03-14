import { FastifyReply, FastifyRequest } from "fastify";
import { knex } from "../../database";

export async function getLastBaseData(
  request: FastifyRequest,
  response: FastifyReply
) {
  const baseData = await knex("base_data")
    .select()
    .orderBy("created_at", "desc")
    .first();

  return baseData || { message: "No data found" };
}
