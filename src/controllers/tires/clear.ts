import { FastifyReply, FastifyRequest } from "fastify";
import { knex } from "../../database";

export async function clearTires(
  request: FastifyRequest,
  response: FastifyReply
) {
  await knex("tires").delete();
  return response.status(200).send({ success: true, message: "Tires data cleared" });
}
