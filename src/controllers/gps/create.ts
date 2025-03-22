import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { knex } from "../../database";

export async function createGps(
  request: FastifyRequest,
  response: FastifyReply
) {
  const createTiresSchema = z.object({
    latitude: z.number(),
    longitude: z.number(),
    velocity: z.number(),
  });

  const { latitude, longitude, velocity } = createTiresSchema.parse(
    request.body
  );

  await knex("gps").insert({
    id: crypto.randomUUID(),
    latitude,
    longitude,
    velocity,
  });

  return response.status(201).send("success");
}
