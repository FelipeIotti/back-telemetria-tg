import { FastifyReply, FastifyRequest } from "fastify";
import { knex } from "../../database";

export async function getLastTires(
  request: FastifyRequest,
  response: FastifyReply
) {
  const baseData = await knex("tires").select().first();
  return baseData;
}
