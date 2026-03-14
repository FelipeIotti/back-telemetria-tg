import { FastifyReply, FastifyRequest } from "fastify";
import { knex } from "../../database";

export async function listGps(
  request: FastifyRequest,
  response: FastifyReply
) {
  const gps = await knex("gps")
    .select()
    .orderBy("created_at", "desc");
  return gps;
}
