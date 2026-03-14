import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable("base_data", (table) => {
    table.index("created_at");
  });
  await knex.schema.alterTable("tires", (table) => {
    table.index("created_at");
  });
  await knex.schema.alterTable("raster", (table) => {
    table.index("created_at");
  });
  await knex.schema.alterTable("gps", (table) => {
    table.index("created_at");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable("base_data", (table) => {
    table.dropIndex("created_at");
  });
  await knex.schema.alterTable("tires", (table) => {
    table.dropIndex("created_at");
  });
  await knex.schema.alterTable("raster", (table) => {
    table.dropIndex("created_at");
  });
  await knex.schema.alterTable("gps", (table) => {
    table.dropIndex("created_at");
  });
}
