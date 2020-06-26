---
id: migrations
title: Migrations
sidebar_label: Migrations
---

A few notes about migrations:

- Migrations are responsible for putting your database structure in to place.
- Each migration file consist of two functions (`up` and `down`), which should add and remove your schema, respectively.
- Migration files live under `server/src/migrations` in all of our projects and are normally denoted by `[dateTimestamp]_[userDefinedSuffix]`.
- In this workshop, we'll only be writing a single migration (`timestamp_init`), but keep in mind new ones can be added at any time to accommodate new functionality/requirements.

Conventions:

- Database names should be singular where possible and in snake_case (for postgres at least)

### 1. Set up a database connection (completed)

Create a file `db.ts` in the source root of your folder and copy the following contents:

```typescript
import Knex from 'knex';
import {knexSnakeCaseMappers, Model} from 'objection';

// configure knex to connect to our database
// these details normally come from environment variables
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
  // convenience utility to for knex to automatically convert snake_case to camelCase
  ...knexSnakeCaseMappers(),
};

export const knex = Knex({
  ...knexConfig,
});

// is this part necessary?
Model.knex(knex);
```

### 2. Initialise knex and add our connection (completed)

In your root file, initialise knex with the following command:

`npx knex init`

which creates a _knexfile.js_ containing information about the files relating to our migrations.

This file is used to tell knex what migrations to execute in specific environments (denoted by NODE_ENV). Below you can see our migration config for `NODE_ENV=development`

```javascript
///
const {knexSnakeCaseMappers} = require('objection');
const {connection} = require('./src/db');

module.exports = {
  development: {
    debug: false, //should knex spit out the executed sql statements for debugging?
    client: 'postgres', //database we're using
    connection, //add connection config to our database we just created
    pool: {  //specify number of active connections allowed
      min: 2,
      max: 10,
    },
    seeds: {
      directory: './src/seeds/dev', //seeds are the most likely to change across environments
    },
    migrations: { //directory methods
      directory: './src/migrations',
    },
    ...knexSnakeCaseMappers(),
  },
  test: {
    //
  }
  production: {
    // ...
  }
```

### 3. Create your first migration file (completed)

In a terminal create the following path and navigate to it:
`src/migrations/dev`
and run
`npx knex migrate:make init -ts`

A file denoted by `[datetime_init.ts]` containing pre-created up and down functions with the following contents:

```typescript
import Knex from 'knex';

export async function up(knex: Knex) {}

export async function down(knex: Knex) {}
```

### 4. Add tables and columns

We've already added code to the initial migration time to create a `person` table (see code snippet below). Note that all tables should always have a primary key

```typescript
export async function up(knex: Knex) {
  await knex.schema.createTable('person', (table) => {
    table.increments('id').primary();
    table.string('firstname');
    table.string('surname');
  });
}
```

- Add an `age` column to the existing table with an integer type

#### 5. Setting up relations and constraints between tables

Create another table `pet` to catalog a list of pets. The table should have the following columns:

- id: primary key
- name: string (notNullable)
- personId: integer, with a foreign key referencing the person's id (notNullable)

Foreign keys can be created with the following syntax:
`table.integer([columnName]).references([parentTable.columnName])`

### 7. Run your migration first migration

We migrate often in projects, so a script has been set up in `package.json` to run forward migrations with:

`yarn migrate`

- Open up a terminal in your project directory, and run the command above.
- Confirm that the table has appeared in your database with a connection client

### 8. And tear it down again

We've already added code to remove the person table in the `down` function.

- Use this as an example to complete the reverse migration by removing the `pet` table as well.
- Backward migrations can be run run with `yarn rollback`
- Confirm the tables you have created has now been removed

#### Notes

- If you're running into an error when rolling back, remember that tables should be removed in the opposite order in which they are created, otherwise dependencies prevents the dropping of tables.

```
migration failed with error: drop table "person" - cannot drop table person because other objects depend on it
```

- To prevent unforeseen migration failures in future, always ensure the tables you add in `up` are removed in `down` (this happens more than you think!).
- Always test forward and backwards migrations thoroughly before opening a PR.
- Stuck? `docker-compose down -v` to remove all volumes and start again.

#### References

- https://knexjs.org/
