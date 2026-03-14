import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { knex } from "../../database";
import { createBaseDataSchema } from "../../schemas/base-data";

export async function createBaseData(
  request: FastifyRequest,
  response: FastifyReply
) {
  const data = createBaseDataSchema.parse(request.body);

  await knex("base_data").insert({
    id: crypto.randomUUID(),
    ...data,
  });

  return response.status(201).send({ success: true });
}
