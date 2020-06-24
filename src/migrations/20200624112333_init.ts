import Knex from 'knex';

export async function up(knex: Knex) {
  await knex.schema.createTable('person', (table) => {
    table.increments('id').primary();
    table.integer('parentId').references('person.id');
    table.string('firstName');
  });
}

export async function down(knex: Knex) {
  await knex.schema.dropTable('person');
}
