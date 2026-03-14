import { FastifyReply, FastifyRequest } from "fastify";
import { knex } from "../database";
import type { Knex } from "knex";
import { z } from "zod";

const mockDataSchema = z.object({
  erase: z.boolean(),
});

function randomBetween(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function generateMockData(count: number) {
  const baseData = [];
  const tiresData = [];
  const gpsData = [];
  const rasterData = [];

  for (let i = 0; i < count; i++) {
    const timestamp = new Date(Date.now() - (count - i) * 1000);

    baseData.push({
      id: crypto.randomUUID(),
      velocity: Math.floor(randomBetween(0, 180)),
      fuel: randomBetween(0, 100).toFixed(1),
      temperature: Math.floor(randomBetween(70, 110)),
      rpm: Math.floor(randomBetween(1000, 8000)),
      created_at: timestamp,
    });

    tiresData.push({
      id: crypto.randomUUID(),
      press_tire_bl: Number(randomBetween(20, 35).toFixed(1)),
      press_tire_br: Number(randomBetween(20, 35).toFixed(1)),
      press_tire_fl: Number(randomBetween(20, 35).toFixed(1)),
      press_tire_fr: Number(randomBetween(20, 35).toFixed(1)),
      temp_tire_bl: Number(randomBetween(60, 100).toFixed(1)),
      temp_tire_br: Number(randomBetween(60, 100).toFixed(1)),
      temp_tire_fl: Number(randomBetween(60, 100).toFixed(1)),
      temp_tire_fr: Number(randomBetween(60, 100).toFixed(1)),
      created_at: timestamp,
    });

    gpsData.push({
      id: crypto.randomUUID(),
      latitude: randomBetween(-23.5, -23.6),
      longitude: randomBetween(-46.6, -46.7),
      velocity: Math.floor(randomBetween(0, 180)),
      created_at: timestamp,
    });

    rasterData.push({
      id: crypto.randomUUID(),
      velocity: Math.random() > 0.5,
      temperature: Math.random() > 0.5,
      fuel: Math.random() > 0.5,
      rpm: Math.random() > 0.5,
      tpms_fr: Math.random() > 0.5,
      tpms_fl: Math.random() > 0.5,
      tpms_br: Math.random() > 0.5,
      tpms_bl: Math.random() > 0.5,
      created_at: timestamp,
    });
  }

  return { baseData, tiresData, gpsData, rasterData };
}

export async function mockData(
  request: FastifyRequest,
  response: FastifyReply
) {
  const { erase } = mockDataSchema.parse(request.body);

  if (erase) {
    await knex.transaction(async (trx: Knex.Transaction) => {
      await trx("base_data").delete();
      await trx("tires").delete();
      await trx("raster").delete();
      await trx("gps").delete();
    });
  }

  const { baseData, tiresData, gpsData, rasterData } = generateMockData(100);

  await knex.transaction(async (trx: Knex.Transaction) => {
    await trx("base_data").insert(baseData);
    await trx("tires").insert(tiresData);
    await trx("gps").insert(gpsData);
    await trx("raster").insert(rasterData);
  });

  return response.status(201).send({
    success: true,
    message: `Generated ${baseData.length} mock records for each table`,
  });
}
