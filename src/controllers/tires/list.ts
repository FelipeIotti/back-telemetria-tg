import { FastifyReply, FastifyRequest } from "fastify";
import { knex } from "../../database";

export async function listTires(
  request: FastifyRequest,
  response: FastifyReply
) {
  const tires = await knex("tires")
    .select()
    .orderBy("created_at", "desc");
  return tires;
}
