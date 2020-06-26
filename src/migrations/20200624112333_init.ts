import Knex from 'knex';

export async function up(knex: Knex) {
  await knex.schema.createTable('person', (table) => {
    table.increments('id').primary();
    table.string('firstname').notNullable();
    table.string('surname').notNullable();
    table.integer('age');
  });

  await knex.schema.createTable('pet', (table) => {
    table.increments('id').primary();
    table.integer('userId')
      .references('person.id')
      .onDelete('CASCADE')
    table.string('name');
  });
}

export async function down(knex: Knex) {
  // await knex.schema.dropTable('pet')
  await knex.schema.dropTable('person');
}
