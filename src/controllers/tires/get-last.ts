import { FastifyReply, FastifyRequest } from "fastify";
import { knex } from "../../database";

export async function getLastTires(
  request: FastifyRequest,
  response: FastifyReply
) {
  const tires = await knex("tires")
    .select()
    .orderBy("created_at", "desc")
    .first();

  return tires || { message: "No data found" };
}
