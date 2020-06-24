import {knex} from '../src/db';
import {seed} from '../src/seeds/dev/init';

export async function globalTeardown() {
  // eslint-disable-next-line no-console
  console.log('Closing Database Connection');
  knex.destroy(() => {
    // eslint-disable-next-line no-console
    console.log('Connection Pool Closed');
  });
}

export async function setup() {
  await seed(knex);
}

export const tearDown = async () => {
  // await closeQueues();
  await knex.destroy();
};
