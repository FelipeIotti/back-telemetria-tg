import { FastifyReply, FastifyRequest } from "fastify";
import { knex } from "../database";
import type { Knex } from "knex";

export async function clearAllData(
  request: FastifyRequest,
  response: FastifyReply
) {
  await knex.transaction(async (trx: Knex.Transaction) => {
    await trx("base_data").delete();
    await trx("tires").delete();
    await trx("raster").delete();
    await trx("gps").delete();
  });

  return response.status(200).send({ success: true, message: "All data cleared" });
}
