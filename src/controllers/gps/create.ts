import { FastifyReply, FastifyRequest } from "fastify";
import { knex } from "../../database";
import { createGpsSchema } from "../../schemas/gps";

export async function createGps(
  request: FastifyRequest,
  response: FastifyReply
) {
  const data = createGpsSchema.parse(request.body);

  await knex("gps").insert({
    id: crypto.randomUUID(),
    ...data,
  });

  return response.status(201).send({ success: true });
}
