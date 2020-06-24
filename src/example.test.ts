import {test, beforeEach, afterAll, expect} from '@jest/globals';
import {setup, tearDown} from './utils';

beforeEach(async () => setup());
afterAll(async () => tearDown());

import {Person} from './models';

test('example', async () => {
  const sylvester = await Person.query()
    .findOne('firstName', 'Sylvester')
    .withGraphFetched('children')
    .orderBy('id');

  expect(sylvester).toMatchObject({
    firstName: 'Sylvester',
    children: [
      expect.objectContaining({firstName: 'Sage'}),
      expect.objectContaining({firstName: 'Sophia'}),
    ],
  });
});
