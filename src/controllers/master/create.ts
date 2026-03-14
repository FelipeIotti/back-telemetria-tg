import { FastifyReply, FastifyRequest } from "fastify";
import { knex } from "../../database";
import { createMasterSchema } from "../../schemas/master";

export async function createMaster(
  request: FastifyRequest,
  response: FastifyReply
) {
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
  } = createMasterSchema.parse(request.body);

  await knex.transaction(async (trx) => {
    await trx("tires").insert({
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
    await trx("base_data").insert({
      id: crypto.randomUUID(),
      velocity,
      fuel,
      temperature,
      rpm,
    });
    await trx("gps").insert({
      id: crypto.randomUUID(),
      latitude,
      longitude,
      velocity,
    });
    await trx("raster").insert({
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
  });

  return response.status(201).send({ success: true });
}
