import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable("tires", (table) => {
    table.decimal("press_tire_bl", 8, 2).notNullable().alter();
    table.decimal("press_tire_br", 8, 2).notNullable().alter();
    table.decimal("press_tire_fl", 8, 2).notNullable().alter();
    table.decimal("press_tire_fr", 8, 2).notNullable().alter();
    table.decimal("temp_tire_bl", 8, 2).notNullable().alter();
    table.decimal("temp_tire_br", 8, 2).notNullable().alter();
    table.decimal("temp_tire_fl", 8, 2).notNullable().alter();
    table.decimal("temp_tire_fr", 8, 2).notNullable().alter();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable("tires", (table) => {
    table.decimal("press_tire_bl", 3, 2).notNullable().alter();
    table.decimal("press_tire_br", 3, 2).notNullable().alter();
    table.decimal("press_tire_fl", 3, 2).notNullable().alter();
    table.decimal("press_tire_fr", 3, 2).notNullable().alter();
    table.decimal("temp_tire_bl", 3, 2).notNullable().alter();
    table.decimal("temp_tire_br", 3, 2).notNullable().alter();
    table.decimal("temp_tire_fl", 3, 2).notNullable().alter();
    table.decimal("temp_tire_fr", 3, 2).notNullable().alter();
  });
}
