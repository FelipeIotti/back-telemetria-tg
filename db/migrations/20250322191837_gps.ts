import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("gps", (table) => {
    table.uuid("id").primary();
    table.decimal("latitude", 10, 8).notNullable();
    table.decimal("longitude", 10, 8).notNullable();
    table.decimal("velocity", 3, 0).notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now()).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("gps");
}
