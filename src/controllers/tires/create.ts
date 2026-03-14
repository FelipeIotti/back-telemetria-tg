import { FastifyReply, FastifyRequest } from "fastify";
import { knex } from "../../database";
import { createTiresSchema } from "../../schemas/tires";

export async function createTires(
  request: FastifyRequest,
  response: FastifyReply
) {
  const data = createTiresSchema.parse(request.body);

  await knex("tires").insert({
    id: crypto.randomUUID(),
    ...data,
  });

  return response.status(201).send({ success: true });
}
