import { FastifyReply, FastifyRequest } from "fastify";
import { knex } from "../../database";
import { createMasterSchema } from "../../schemas/master";

function toNumber(value: unknown): number {
  if (typeof value === "number") return value;
  if (typeof value === "string") return Number(value) || 0;
  return 0;
}

function toBoolean(value: unknown): boolean {
  if (typeof value === "boolean") return value;
  if (typeof value === "string") return value === "true" || value === "1";
  return false;
}

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
      press_tire_bl: toNumber(press_tire_bl),
      press_tire_br: toNumber(press_tire_br),
      press_tire_fl: toNumber(press_tire_fl),
      press_tire_fr: toNumber(press_tire_fr),
      temp_tire_bl: toNumber(temp_tire_bl),
      temp_tire_br: toNumber(temp_tire_br),
      temp_tire_fl: toNumber(temp_tire_fl),
      temp_tire_fr: toNumber(temp_tire_fr),
    });
    await trx("base_data").insert({
      id: crypto.randomUUID(),
      velocity: toNumber(velocity),
      fuel: String(fuel),
      temperature: toNumber(temperature),
      rpm: toNumber(rpm),
    });
    await trx("gps").insert({
      id: crypto.randomUUID(),
      latitude: toNumber(latitude),
      longitude: toNumber(longitude),
      velocity: toNumber(velocity),
    });
    await trx("raster").insert({
      id: crypto.randomUUID(),
      velocity: toBoolean(velocity),
      temperature: toBoolean(temperature),
      fuel: toBoolean(fuel),
      rpm: toBoolean(rpm),
      tpms_fr: toBoolean(tpms_fr),
      tpms_fl: toBoolean(tpms_fl),
      tpms_br: toBoolean(tpms_br),
      tpms_bl: toBoolean(tpms_bl),
    });
  });

  return response.status(201).send({ success: true });
}
