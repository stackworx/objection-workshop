import Knex from 'knex';
import {knexSnakeCaseMappers, Model} from 'objection';

export const knexConfig = {
  client: 'postgres',
  connection: {
    host: '127.0.0.1',
    user: 'postgres',
    password: 'password',
  },
  pool: {
    min: 2,
    max: 10,
  },
  ...knexSnakeCaseMappers(),
};

export const knex = Knex({
  ...knexConfig,
});

Model.knex(knex);
