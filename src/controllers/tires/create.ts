import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { knex } from "../../database";

export async function createTires(
  request: FastifyRequest,
  response: FastifyReply
) {
  const createTiresSchema = z.object({
    press_tire_bl: z.number(),
    press_tire_br: z.number(),
    press_tire_fl: z.number(),
    press_tire_fr: z.number(),

    temp_tire_bl: z.number(),
    temp_tire_br: z.number(),
    temp_tire_fl: z.number(),
    temp_tire_fr: z.number(),
  });

  const {
    press_tire_bl,
    press_tire_br,
    press_tire_fl,
    press_tire_fr,

    temp_tire_bl,
    temp_tire_br,
    temp_tire_fl,
    temp_tire_fr,
  } = createTiresSchema.parse(request.body);

  await knex("tires").insert({
    id: crypto.randomUUID(),
    press_tire_bl,
    press_tire_br,
    press_tire_fl,
    press_tire_fr,
    temp_tire_bl,
    temp_tire_br,
    temp_tire_fl,
    temp_tire_fr,
  });

  return response.status(201).send("success");
}
