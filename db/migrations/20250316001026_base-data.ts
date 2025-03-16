import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("base_data", (table) => {
    table.uuid("id").primary();
    table.decimal("velocity", 3, 0).notNullable();
    table.text("fuel").notNullable();
    table.decimal("temperature", 3, 0).notNullable();
    table.decimal("rpm", 5, 0).notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now()).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("base_data");
}
