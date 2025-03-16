import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("raster", (table) => {
    table.uuid("id").primary();
    table.boolean("velocity").notNullable();
    table.boolean("temperature").notNullable();
    table.boolean("fuel").notNullable();
    table.boolean("rpm").notNullable();
    table.boolean("tpms_fr").notNullable();
    table.boolean("tpms_fl").notNullable();
    table.boolean("tpms_br").notNullable();
    table.boolean("tpms_bl").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now()).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("raster");
}
