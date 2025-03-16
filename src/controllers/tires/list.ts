import { FastifyReply, FastifyRequest } from "fastify";
import { knex } from "../../database";

export async function listTires(
  request: FastifyRequest,
  response: FastifyReply
) {
  const baseData = await knex("tires").select();
  return baseData;
}
