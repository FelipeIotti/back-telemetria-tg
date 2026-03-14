import { FastifyReply, FastifyRequest } from "fastify";
import { knex } from "../../database";

export async function getLastGps(
  request: FastifyRequest,
  response: FastifyReply
) {
  const gps = await knex("gps")
    .select()
    .orderBy("created_at", "desc")
    .first();

  return gps || { message: "No data found" };
}
