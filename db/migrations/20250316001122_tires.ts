import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("tires", (table) => {
    table.uuid("id").primary();
    table.decimal("press_tire_bl", 3, 2).notNullable();
    table.decimal("press_tire_br", 3, 2).notNullable();
    table.decimal("press_tire_fl", 3, 2).notNullable();
    table.decimal("press_tire_fr", 3, 2).notNullable();
    table.decimal("temp_tire_bl", 3, 2).notNullable();
    table.decimal("temp_tire_br", 3, 2).notNullable();
    table.decimal("temp_tire_fl", 3, 2).notNullable();
    table.decimal("temp_tire_fr", 3, 2).notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now()).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("tires");
}
