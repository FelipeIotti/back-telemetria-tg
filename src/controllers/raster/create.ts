import { FastifyReply, FastifyRequest } from "fastify";
import { knex } from "../../database";
import { createRasterSchema } from "../../schemas/raster";

export async function createRaster(
  request: FastifyRequest,
  response: FastifyReply
) {
  const data = createRasterSchema.parse(request.body);

  await knex("raster").insert({
    id: crypto.randomUUID(),
    ...data,
  });

  return response.status(201).send({ success: true });
}
