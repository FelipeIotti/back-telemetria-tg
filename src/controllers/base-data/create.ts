import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { knex } from "../../database";

export async function createBaseData(
  request: FastifyRequest,
  response: FastifyReply
) {
  const createBaseDataSchema = z.object({
    velocity: z.number(),
    fuel: z.string(),
    temperature: z.number(),
    rpm: z.number(),
  });

  const { velocity, fuel, temperature, rpm } = createBaseDataSchema.parse(
    request.body
  );

  await knex("base_data").insert({
    id: crypto.randomUUID(),
    velocity,
    fuel,
    temperature,
    rpm,
  });

  return response.status(201).send("success");
}
