import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { knex } from "../../database";

export async function createMaster(
  request: FastifyRequest,
  response: FastifyReply
) {
  const createTiresSchema = z.object({
    latitude: z.number(),
    longitude: z.number(),
    velocity: z.number(),
    fuel: z.string(),
    temperature: z.number(),
    rpm: z.number(),
    tpms_fr: z.boolean(),
    tpms_fl: z.boolean(),
    tpms_br: z.boolean(),
    tpms_bl: z.boolean(),

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
    latitude,
    longitude,
    velocity,
    fuel,
    temperature,
    rpm,
    tpms_fr,
    tpms_fl,
    tpms_br,
    tpms_bl,
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
  await knex("base_data").insert({
    id: crypto.randomUUID(),
    velocity,
    fuel,
    temperature,
    rpm,
  });

  await knex("gps").insert({
    id: crypto.randomUUID(),
    latitude,
    longitude,
    velocity,
  });

  await knex("raster").insert({
    id: crypto.randomUUID(),
    velocity: !!velocity,
    temperature: !!temperature,
    fuel: !!fuel,
    rpm: !!rpm,
    tpms_fr,
    tpms_fl,
    tpms_br,
    tpms_bl,
  });

  return response.status(201).send("success");
}
