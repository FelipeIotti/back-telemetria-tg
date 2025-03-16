import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { knex } from "../../database";

export async function createRaster(
  request: FastifyRequest,
  response: FastifyReply
) {
  const createRasterSchema = z.object({
    velocity: z.boolean(),
    temperature: z.boolean(),
    fuel: z.boolean(),
    rpm: z.boolean(),
    tpms_fr: z.boolean(),
    tpms_fl: z.boolean(),
    tpms_br: z.boolean(),
    tpms_bl: z.boolean(),
  });

  const {
    velocity,
    temperature,
    fuel,
    rpm,
    tpms_fr,
    tpms_fl,
    tpms_br,
    tpms_bl,
  } = createRasterSchema.parse(request.body);

  await knex("raster").insert({
    id: crypto.randomUUID(),
    velocity,
    temperature,
    fuel,
    rpm,
    tpms_fr,
    tpms_fl,
    tpms_br,
    tpms_bl,
  });

  return response.status(201).send("success");
}
