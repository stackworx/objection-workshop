import Knex from 'knex';
import {Person} from '../../models';

export async function seed(knex: Knex) {
  // Clear existing data
  await Person.query(knex).delete();

  await Person.query(knex).insertGraph({
    firstName: 'Sylvester',

    children: [
      {
        firstName: 'Sage',
      },
      {
        firstName: 'Sophia',
      },
    ],
  });
}
