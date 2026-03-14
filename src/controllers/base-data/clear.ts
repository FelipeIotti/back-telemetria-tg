import { FastifyReply, FastifyRequest } from "fastify";
import { knex } from "../../database";

export async function clearBaseData(
  request: FastifyRequest,
  response: FastifyReply
) {
  await knex("base_data").delete();
  return response.status(200).send({ success: true, message: "Base data cleared" });
}
